// Entry: 3D game loop, input, combat, camera, mission flow.
import * as THREE from "three";
import { createEngine, createLights, applyTime, QUALITY, TIMES } from "./3d/engine.js";
import { buildCamp, placeStar } from "./3d/camp.js";
import { buildMission } from "./3d/missions3d.js";
import { canStand, standY, floorAt, GY } from "./3d/builder.js";
import { makeHero, makePete, makeSmith, makeCartographer, makeStudent, makeRaider, makeBug, makeWisp, makeBlob, makeWolf, makeSheep, makeChicken, makeChest, animate, flash } from "./3d/models.js";
import { Particles, Flames, makeLootBeam, makeHPBar, makeRing } from "./3d/fx.js";
import { WORLD_UNIFORMS } from "./3d/voxel.js";
import { createMapScene } from "./3d/mapscene.js";
import { MISSIONS, MISSION_BY_ID, STARTER_GEAR, RARITY } from "./missions.js";
import { LANDMARKS, PETE_LINES, PROFILE, CAMPUS_FACTS } from "./data.js";
import { initUI, openPanel, openInventory, openMissionMap, closeAll, setHUD, setPrompt, toast, chat, drawTitle, setSplash, showLoot, showComplete, anyOverlay, mapSelect, renderMapLabels, setMapHover } from "./ui.js";
import { setSound, sfx } from "./audio.js";

const $ = (s) => document.querySelector(s);
const canvas = $("#game");
const loadBar = $("#load-fill"), loadText = $("#load-text");
const step = async (pct, text) => { if (loadBar) loadBar.style.width = pct + "%"; if (loadText) loadText.textContent = text; await new Promise((r) => requestAnimationFrame(() => setTimeout(r, 0))); };

const saved = (() => { try { return JSON.parse(localStorage.getItem("utepmc4") || "{}"); } catch { return {}; } })();
const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
const lowEnd = (navigator.hardwareConcurrency || 4) <= 4 || /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);

const state = {
  time: saved.time || "day",
  sound: !!saved.sound,
  reduced: saved.reduced ?? !!prefersReduced,
  quality: saved.quality ?? (lowEnd ? 1 : 2),
  autoQuality: saved.autoQuality ?? true,
  visited: new Set(saved.visited || []),
  adv: new Set(saved.adv || []),
  paydirt: saved.paydirt || 0, arrows: saved.arrows ?? 30, souls: saved.souls || 0, xp: saved.xp || 0, level: saved.level || 1,
  items: saved.items || STARTER_GEAR.map((x) => ({ ...x })),
  equipped: saved.equipped || { melee: "pick-campus", ranged: "sling-practice", helm: "miner-cap", chest: "orange-mail", legs: "trail-pants", boots: "work-boots", artifacts: [null, null, null], talismans: [null, null] },
  selectedItem: null,
};
const save = () => { try { localStorage.setItem("utepmc4", JSON.stringify({ time: state.time, sound: state.sound, reduced: state.reduced, quality: state.quality, autoQuality: state.autoQuality, visited: [...state.visited], adv: [...state.adv], paydirt: state.paydirt, arrows: state.arrows, souls: state.souls, xp: state.xp, level: state.level, items: state.items, equipped: state.equipped })); } catch {} };
const itemById = (id) => state.items.find((i) => i.id === id) || null;
const equippedOf = (slot) => (slot === "artifacts" || slot === "talismans") ? state.equipped[slot].map(itemById) : itemById(state.equipped[slot]);
function powerTotal() { let p = 0; for (const s of ["melee", "ranged", "helm", "chest", "legs", "boots"]) p += equippedOf(s)?.power || 0; for (const it of equippedOf("artifacts")) p += it?.power || 0; for (const it of equippedOf("talismans")) p += it?.power || 0; return p; }
function giveItem(item) {
  if (state.items.some((i) => i.id === item.id)) return;
  state.items.push({ ...item });
  if (item.slot === "artifact") { const i = state.equipped.artifacts.findIndex((x) => !x); if (i >= 0) state.equipped.artifacts[i] = item.id; }
  else if (item.slot === "talisman") { const i = state.equipped.talismans.findIndex((x) => !x); if (i >= 0) state.equipped.talismans[i] = item.id; }
  else if (!state.equipped[item.slot] || (itemById(state.equipped[item.slot])?.power || 0) < item.power) state.equipped[item.slot] = item.id;
  save(); refreshHUD();
}

// ------------------------------------------------------------------ engine
const eng = createEngine(canvas, { quality: state.quality });
if (!eng) {
  document.body.classList.add("nogl");
  const el = $("#nogl"); if (el) el.hidden = false;
  const ld = $("#loading"); if (ld) ld.hidden = true;
  await new Promise(() => {}); // stop here quietly; the fallback notice is showing
}
eng.onQuality = (Q) => { if (rig) { rig.sun.castShadow = Q.shadows; rig.sun.shadow.mapSize.set(Q.shadowSize, Q.shadowSize); rig.sun.shadow.map?.dispose(); rig.sun.shadow.map = null; } };
const scene = new THREE.Scene();
const rig = createLights(scene, 4);
eng.setQuality(state.quality);
const fxAdd = new Particles(1800, true), fxSmoke = new Particles(500, false);
const flames = new Flames(500);
scene.add(fxAdd.points, fxSmoke.points, flames.mesh);
const actors = new THREE.Group(); scene.add(actors);
let mapScene = null;

// ------------------------------------------------------------------ game state
let camp = null, level = null, mode = "title", currentMission = null, pendingLoot = null;
let missionStats = { kills: 0, paydirt: 0, xp: 0 };
let npcs = [], animals = [], enemies = [], chest = null, emitAcc = new Map();
let heroModel = null, lampLight = null;
const player = { x: 0, z: 0, y: GY, rot: Math.PI, vx: 0, vz: 0, speed: 0, hp: 100, maxHp: 100, action: null, actionT: 0, actionDur: 0, rollCd: 0, potionCd: 0, atkCd: 0, invuln: 0, hurt: 0, artCd: [0, 0, 0] };
const YAW = Math.PI * 0.22;
const cam = { dist: 18.5, pitch: 0.74, target: new THREE.Vector3(), pos: new THREE.Vector3(), zoom: 1, shake: 0 };
let started = false, time = 0, peteLine = -1, studentLine = 0;

// ------------------------------------------------------------------ level setup
function clearActors() { while (actors.children.length) actors.remove(actors.children[0]); npcs = []; animals = []; enemies = []; chest = null; fxAdd.clear(); fxSmoke.clear(); emitAcc = new Map(); }
function disposeLevel(L) { if (!L || L === camp) return; L.group.traverse((o) => { if (o.geometry) o.geometry.dispose(); }); }

function makeNPC(type, seed) {
  if (type === "pete") return makePete(); if (type === "smith") return makeSmith(); if (type === "mapper") return makeCartographer();
  return makeStudent(seed || 1);
}
function setLevel(L) {
  if (level && level.group.parent) scene.remove(level.group);
  if (level && level !== L) disposeLevel(level);
  clearActors();
  level = L;
  scene.add(L.group);
  flames.list = []; for (const f of L.flames) flames.add(f[0], f[1], f[2], f[3], f[4], f[5]);
  if (!heroModel) {
    heroModel = makeHero();
    lampLight = new THREE.PointLight(0xffe8b0, 0, 7, 1.8);
    heroModel.head.add(lampLight); lampLight.position.set(0, 0.5, 0.6);
  }
  actors.add(heroModel.root);
  for (const n of L.npcs) {
    const m = makeNPC(n.type, n.seed); m.root.position.set(n.x, standY(L, n.x, n.z), n.z); m.root.rotation.y = n.rot || 0; actors.add(m.root);
    const ring = makeRing("#ffd060", 0.55, 0.72); ring.position.set(n.x, standY(L, n.x, n.z) + 0.03, n.z); actors.add(ring);
    npcs.push({ ...n, model: m, ring, pi: 0, t: Math.random() * 10 });
    blockCell(L, n.x, n.z);
  }
  for (const a of L.animals) {
    const m = a.type === "wolf" ? makeWolf() : a.type === "sheep" ? makeSheep(a.x | 0) : makeChicken(a.x | 0);
    m.root.position.set(a.x, standY(L, a.x, a.z), a.z); m.root.rotation.y = a.rot || 0; actors.add(m.root);
    animals.push({ ...a, model: m, t: Math.random() * 5, tx: a.x, tz: a.z, speed: 0 });
  }
  for (const s of L.storage || []) { const c = makeChest(false); c.root.position.set(s.x, GY, s.z); c.root.rotation.y = Math.PI; actors.add(c.root); }
  if (L.kind === "mission") {
    const c = makeChest(true); c.root.position.set(L.chest.x, GY, L.chest.z); c.root.rotation.y = Math.PI * 0.25; actors.add(c.root);
    const rar = RARITY[currentMission.loot.rarity]?.color || "#ff9a2a";
    const beam = makeLootBeam(rar); beam.position.set(L.chest.x, GY, L.chest.z); actors.add(beam);
    chest = { ...L.chest, model: c, beam, opened: false, openT: 0, color: rar };
    const hpScale = 1 + state.visited.size * 0.05;
    for (const e of L.enemySpots) spawnEnemy(e.type, e.x, e.z, hpScale);
  }
  applyLevelTime();
}
function blockCell(L, x, z) { const xi = Math.floor(x), zi = Math.floor(z); if (L.floor && xi >= 0 && zi >= 0 && xi < L.w && zi < L.d) L.floor[zi * L.w + xi] = 99; }
function spawnEnemy(type, x, z, hpScale = 1) {
  const m = type === "raider" ? makeRaider((x * 7) | 0) : type === "bug" ? makeBug((x * 3) | 0) : type === "wisp" ? makeWisp((x * 5) | 0, currentMission?.id === "library" ? "#7ac8ff" : "#ffb040") : makeBlob((x * 2) | 0);
  const stats = { raider: [46, 2.5, 10], bug: [26, 3.4, 7], wisp: [36, 2.1, 9], blob: [40, 2.0, 8] }[type];
  m.root.position.set(x, GY, z); actors.add(m.root);
  const bar = makeHPBar(); bar.visible = false; actors.add(bar);
  const ring = makeRing("#ff3a20", 0.55, 0.78); ring.material.opacity = 0.55; actors.add(ring);
  enemies.push({ type, model: m, x, z, y: GY, rot: 0, hp: stats[0] * hpScale, max: stats[0] * hpScale, speed: stats[1], dmg: stats[2], alive: true, stun: 0, atkCd: 1 + Math.random(), action: null, actionT: 0, bar, ring, deathT: 0, flashT: 0, aggro: false, home: { x, z } });
}
function applyLevelTime() {
  const key = level.kind === "mission" ? level.time : (mode === "title" ? "dusk" : state.time);
  const T = applyTime(scene, rig, eng, key);
  WORLD_UNIFORMS.uTorch.value.setRGB(1.0, 0.62, 0.28);
  const md = level.kind === "mission" ? level.mood : null;
  if (md) {
    if (md.hemiSky != null) { rig.hemi.color.set(md.hemiSky); rig.hemi.groundColor.set(md.hemiGround); rig.hemi.intensity = md.hemiI; }
    if (md.sun != null) { rig.sun.color.set(md.sun); rig.sun.intensity = md.sunI; }
    if (md.fog != null) scene.fog.color.set(md.fog);
    WORLD_UNIFORMS.uTorchStrength.value *= md.torch;
    rig.torchK = T.torch * Math.min(1, md.torch * 1.3);
    if (md.tint) WORLD_UNIFORMS.uTorch.value.setRGB(...md.tint);
  }
  if (level.kind === "camp") { scene.fog.near = key === "night" ? 30 : 46; scene.fog.far = key === "night" ? 120 : 170; }
  if (level.star) { const k = { day: 1.0, dusk: 0.85, night: 0.72 }[key] ?? 0.85; level.star.userData.mat.color.setRGB(2.0 * k, 1.8 * k, 1.25 * k); level.star.userData.glowMat.opacity = key === "day" ? 0.12 : key === "dusk" ? 0.3 : 0.42; }
  if (level.farMtn) { // cool aerial haze per time of day, never the warm fog color
    const H = { day: [0xa8b8d4, 0.16], dusk: [0x8a90bc, 0.3], night: [0x18223c, 0.38] }[key] || [0xb4c4dc, 0.3];
    level.farMtn.userData.haze.value.set(H[0]); level.farMtn.userData.hazeK.value = H[1];
  }
  lampLight.intensity = (key === "day") ? 0 : 3.5;
  heroModel.lamp.material.color.setRGB(key === "day" ? 2 : 6, key === "day" ? 1.8 : 5.4, key === "day" ? 1.2 : 3.4);
  level.timeKey = key;
}

// ------------------------------------------------------------------ input
const keys = new Set();
const joy = { x: 0, y: 0, active: false };
const isTyping = (e) => /INPUT|TEXTAREA|SELECT/.test(e.target.tagName);
addEventListener("keydown", (e) => {
  if (isTyping(e)) return;
  const k = e.key.toLowerCase();
  if (!started && !$("#intro").hidden) { if ((k === "enter" && !/BUTTON|A/.test(e.target.tagName)) || ["w", "a", "s", "d"].includes(k)) { e.preventDefault(); start(); } return; }
  if (anyOverlay()) return;
  if (k === "escape") { e.preventDefault(); pause(); return; }
  if (["arrowup", "arrowdown", "arrowleft", "arrowright", " "].includes(k)) e.preventDefault();
  if (e.repeat && "efq ".includes(k)) return;
  keys.add(k);
  if (k === "e" || (k === "enter" && !/BUTTON|A/.test(e.target.tagName))) interact();
  if (k === " ") roll();
  if (k === "f") attack();
  if (k === "q") usePotion();
  if (k === "1" || k === "2" || k === "3") useArtifact(+k - 1);
  if (k === "i") openInventory();
  if (k === "m") onMapButton();
  if (k === "h" || k === "?") openPanel("help");
  if (k === "p") pause();
});
addEventListener("keyup", (e) => keys.delete(e.key.toLowerCase()));
addEventListener("blur", () => { keys.clear(); joy.active = false; joy.x = joy.y = 0; });
const ndc = new THREE.Vector2(), ray = new THREE.Raycaster(), plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), hitP = new THREE.Vector3();
canvas.addEventListener("pointerdown", (e) => {
  if (anyOverlay() && mode !== "map") return;
  if (mode === "map") return mapClick(e);
  if (!started) { start(); return; }
  if (e.pointerType === "touch") return;
  if (e.button === 0) {
    ndc.set((e.clientX / innerWidth) * 2 - 1, -(e.clientY / innerHeight) * 2 + 1);
    ray.setFromCamera(ndc, eng.camera); plane.constant = -(player.y + 0.8);
    if (ray.ray.intersectPlane(plane, hitP)) player.rot = Math.atan2(hitP.x - player.x, hitP.z - player.z);
    attack(true);
  }
});
canvas.addEventListener("wheel", (e) => { if (mode === "map" || !started) return; cam.zoom = Math.max(0.65, Math.min(1.5, cam.zoom + Math.sign(e.deltaY) * 0.06)); }, { passive: true });
// touch: virtual joystick + buttons
const stick = $("#stick"), knob = $("#stick-knob");
if (stick) {
  let id = null, cx = 0, cy = 0;
  const R = 46;
  const move = (e) => { const dx = e.clientX - cx, dy = e.clientY - cy; const d = Math.min(R, Math.hypot(dx, dy)); const a = Math.atan2(dy, dx); joy.x = Math.cos(a) * d / R; joy.y = Math.sin(a) * d / R; knob.style.transform = `translate(${joy.x * R}px, ${joy.y * R}px)`; };
  stick.addEventListener("pointerdown", (e) => { e.preventDefault(); if (!started) start(); id = e.pointerId; stick.setPointerCapture(id); const r = stick.getBoundingClientRect(); cx = r.left + r.width / 2; cy = r.top + r.height / 2; joy.active = true; move(e); });
  stick.addEventListener("pointermove", (e) => { if (e.pointerId === id) move(e); });
  const end = (e) => { if (e.pointerId !== id) return; id = null; joy.active = false; joy.x = joy.y = 0; knob.style.transform = ""; };
  stick.addEventListener("pointerup", end); stick.addEventListener("pointercancel", end);
}
document.querySelectorAll("[data-pad]").forEach((b) => b.addEventListener("pointerdown", (ev) => {
  ev.preventDefault(); if (!started) start();
  const k = b.dataset.pad;
  if (k === "a") interact(); else if (k === "b") roll(); else if (k === "x") attack(); else if (k === "q") usePotion();
}));
$("#prompt").addEventListener("click", () => interact());
$("#btn-pause")?.addEventListener("click", () => pause());

const actions = {
  time() { const TT = ["day", "dusk", "night"]; state.time = TT[(TT.indexOf(state.time) + 1) % 3]; save(); if (level?.kind === "camp") applyLevelTime(); refreshHUD(); chat(null, `Time set to ${state.time}`, "sys"); },
  sound() { state.sound = !state.sound; setSound(state.sound); sfx.click(); save(); refreshHUD(); },
  motion() { state.reduced = !state.reduced; document.documentElement.classList.toggle("reduced", state.reduced); save(); refreshHUD(); },
  quality() { state.quality = (state.quality + 2) % 3; state.autoQuality = false; eng.setQuality(state.quality); save(); refreshHUD(); chat(null, `Graphics: ${QUALITY[state.quality].name}`, "sys"); },
  resume() { closeAll(); },
};
if (state.sound) setSound(true);
document.documentElement.classList.toggle("reduced", state.reduced);

initUI({
  onOpen(key) { if (key !== "map") setMode(started ? (level?.kind === "mission" ? "mission" : "camp") : "title"); },
  onClose() { keys.clear(); if (mode === "map") setMode(started ? (level?.kind === "mission" ? "mission" : "camp") : "title"); },
  onMapOpen(selectId) { openMapScene(selectId); },
  onMapSelect(id) { mapScene?.select(id); },
  onMapButton, onPotion: usePotion, onRoll: roll, onArtifact: useArtifact,
  onStartMission: (id) => { if (!started) start(true); startMission(id); },
  onLootTake() { if (pendingLoot) { giveItem(pendingLoot); pendingLoot = null; } if (currentMission) setTimeout(finishMission, 250); },
  onReturnCamp() { returnToCamp(); },
  getState: () => ({ ...state, power: powerTotal(), visited: state.visited, qualityName: QUALITY[state.quality].name }),
  getLoadout: () => ({
    items: state.items,
    equipped: { melee: itemById(state.equipped.melee), ranged: itemById(state.equipped.ranged), helm: itemById(state.equipped.helm), chest: itemById(state.equipped.chest), legs: itemById(state.equipped.legs), boots: itemById(state.equipped.boots), artifacts: state.equipped.artifacts.map(itemById), talismans: state.equipped.talismans.map(itemById) },
    selected: itemById(state.selectedItem), power: powerTotal(), paydirt: state.paydirt,
  }),
  getHeroPortrait,
  selectItem(id) { state.selectedItem = id; },
  equipItem(id) {
    const it = itemById(id); if (!it) return;
    if (it.slot === "artifact") { const i = state.equipped.artifacts.findIndex((x) => !x); state.equipped.artifacts[i >= 0 ? i : 0] = id; }
    else if (it.slot === "talisman") { const i = state.equipped.talismans.findIndex((x) => !x); state.equipped.talismans[i >= 0 ? i : 0] = id; }
    else state.equipped[it.slot] = id;
    save(); refreshHUD(); sfx.click();
  },
  actions,
});

function setMode(m) { mode = m; document.body.classList.toggle("map-mode", m === "map"); }
function openMapScene(selectId) {
  if (!mapScene) mapScene = createMapScene();
  mapScene.open(selectId, state.visited);
  setMode("map");
}
function mapHoverMove(e) {
  if (mode !== "map" || !mapScene) return;
  const id = mapScene.pick(e.clientX, e.clientY, canvas);
  setMapHover(id); mapScene.hover = id; canvas.style.cursor = id ? "pointer" : "";
}
canvas.addEventListener("pointermove", mapHoverMove);
function mapClick(e) {
  const id = mapScene?.pick(e.clientX, e.clientY, canvas);
  if (id) { sfx.click(); mapSelect(id); }
}
function pause() { openPanel("help"); }

function start(silent) {
  if (started) return;
  started = true;
  $("#intro").hidden = true;
  document.body.classList.add("playing");
  canvas.focus();
  setMode("camp");
  player.x = camp.spawn.x; player.z = camp.spawn.z; player.y = standY(camp, player.x, player.z); player.rot = Math.PI;
  applyLevelTime();
  snapCam();
  sfx.click();
  setHUD({ hud: true }); refreshHUD();
  if (silent) return;
  chat(null, `${PROFILE.name} arrived at camp`, "join");
  if (!state.adv.has("start")) { state.adv.add("start"); save(); setTimeout(() => toast("Camp unlocked", "Welcome to Centennial Plaza", "head"), 500); }
  setTimeout(() => chat("Pete", "Howdy! The glowing map table starts missions. Or press M.", "npc"), 900);
}
$("#intro-start").addEventListener("click", () => start());

function onMapButton() {
  if (level?.kind === "mission") { const m = currentMission; toast("Objective", m ? m.objective : "Find the chest", "map"); }
  else openMissionMap();
}
function refreshHUD() {
  const xpNext = 40 + state.level * 20;
  setHUD({
    hp: player.hp, maxHp: player.maxHp, xp: state.xp, xpNext, level: state.level, paydirt: state.paydirt, arrows: state.arrows, souls: state.souls,
    potionCd: player.potionCd / 8, rollCd: player.rollCd / 1.6, artifacts: equippedOf("artifacts"), hud: started,
    objective: level?.kind === "mission" && currentMission ? `${currentMission.objective}${enemies.some((e) => e.alive) ? ` (${enemies.filter((e) => e.alive).length} foes)` : ""}` : (started ? "Open the mission table (M) or talk to Pete" : ""),
  });
}

// ------------------------------------------------------------------ movement & combat
function inputAxis() {
  let x = 0, y = 0;
  if (keys.has("a") || keys.has("arrowleft")) x -= 1;
  if (keys.has("d") || keys.has("arrowright")) x += 1;
  if (keys.has("w") || keys.has("arrowup")) y += 1;
  if (keys.has("s") || keys.has("arrowdown")) y -= 1;
  if (joy.active) { x = joy.x; y = -joy.y; }
  // camera-relative
  const fx = -Math.sin(YAW), fz = -Math.cos(YAW), rx = Math.cos(YAW), rz = -Math.sin(YAW);
  const wx = rx * x + fx * y, wz = rz * x + fz * y;
  const len = Math.hypot(wx, wz);
  return len > 0.05 ? { x: wx / Math.max(1, len), z: wz / Math.max(1, len), len: Math.min(1, len) } : { x: 0, z: 0, len: 0 };
}
function tryMove(ent, dx, dz, rad = 0.28) {
  const L = level; const cy = ent.y ?? GY;
  const nx = ent.x + dx, nz = ent.z + dz;
  if (canStand(L, nx, nz, cy, rad)) { ent.x = nx; ent.z = nz; return true; }
  if (canStand(L, nx, ent.z, cy, rad)) { ent.x = nx; return true; }
  if (canStand(L, ent.x, nz, cy, rad)) { ent.z = nz; return true; }
  return false;
}
function roll() {
  if (!started || anyOverlay() || player.rollCd > 0 || player.action === "roll") return;
  const v = inputAxis();
  const dx = v.len ? v.x : Math.sin(player.rot), dz = v.len ? v.z : Math.cos(player.rot);
  player.rot = Math.atan2(dx, dz);
  player.action = "roll"; player.actionT = player.actionDur = 0.42; player.rollCd = 1.6; player.invuln = 0.45;
  player.vx = dx * 9; player.vz = dz * 9;
  if (!state.reduced) for (let i = 0; i < 8; i++) fxSmoke.spawn({ x: player.x + (Math.random() - 0.5) * 0.6, y: player.y + 0.1, z: player.z + (Math.random() - 0.5) * 0.6, vx: (Math.random() - 0.5), vy: 0.6, vz: (Math.random() - 0.5), color: [0.75, 0.68, 0.56], size: 0.3, life: 0.6, drag: 2 });
  sfx.roll();
}
function attack(aimed) {
  if (!started || anyOverlay() || player.atkCd > 0 || player.action === "roll") return;
  // soft auto-aim at the nearest enemy in front
  if (!aimed) {
    let best = null, bd = 3.2;
    for (const e of enemies) if (e.alive) { const d = Math.hypot(e.x - player.x, e.z - player.z); if (d < bd) { bd = d; best = e; } }
    if (best) { player.rot = Math.atan2(best.x - player.x, best.z - player.z); if (bd > 1.5) { const k = Math.min(0.6, bd - 1.5); tryMove(player, Math.sin(player.rot) * k, Math.cos(player.rot) * k, 0.28); } }
  }
  player.action = "attack"; player.actionT = player.actionDur = 0.32; player.atkCd = 0.38;
  sfx.swing();
  const fx = Math.sin(player.rot), fz = Math.cos(player.rot);
  // swing arc particles
  if (!state.reduced) for (let i = 0; i < 10; i++) { const a = player.rot - 1 + i * 0.2; fxAdd.spawn({ x: player.x + Math.sin(a) * 1.2, y: player.y + 0.9, z: player.z + Math.cos(a) * 1.2, vx: Math.sin(a) * 0.5, vy: 0.2, vz: Math.cos(a) * 0.5, color: [1.6, 1.0, 0.4], size: 0.14, life: 0.25, drag: 3 }); }
  const dmg = 12 + Math.floor(powerTotal() / 8);
  setTimeout(() => {
    for (const e of enemies) {
      if (!e.alive) continue;
      const dx = e.x - player.x, dz = e.z - player.z, d = Math.hypot(dx, dz);
      if (d > 2.6) continue;
      const dot = (dx * fx + dz * fz) / (d || 1);
      if (dot < 0.2 && d > 0.8) continue;
      hitEnemy(e, dmg, dx / (d || 1), dz / (d || 1));
    }
  }, 110);
}
function hitEnemy(e, dmg, kx, kz) {
  e.hp -= dmg; e.stun = 0.25; e.flashT = 0.15; e.aggro = true;
  tryMoveEnemy(e, kx * 0.7, kz * 0.7);
  fxAdd.burst(e.x, e.y + 0.9, e.z, [2.2, 1.0, 0.3], 10, 3, 0.12, 0.5);
  cam.shake = Math.max(cam.shake, 0.12);
  sfx.hit();
  if (e.hp <= 0) killEnemy(e);
}
function killEnemy(e) {
  e.alive = false; e.deathT = 0.6; missionStats.kills++;
  state.souls = Math.min(100, state.souls + 8);
  const pd = 3; state.paydirt += pd; missionStats.paydirt += pd;
  fxAdd.burst(e.x, e.y + 0.8, e.z, [2.4, 2.0, 0.6], 16, 3.5, 0.14, 0.8);
  for (let i = 0; i < 5; i++) fxAdd.spawn({ x: e.x, y: e.y + 0.6, z: e.z, vx: (Math.random() - 0.5) * 3, vy: 3 + Math.random() * 2, vz: (Math.random() - 0.5) * 3, color: [2.6, 1.9, 0.4], size: 0.22, life: 1.4, grav: -9, drag: 1, kind: 2 });
  for (let i = 0; i < 6; i++) fxAdd.spawn({ x: e.x, y: e.y + 0.6, z: e.z, vx: (Math.random() - 0.5) * 2, vy: 2 + Math.random(), vz: (Math.random() - 0.5) * 2, color: [0.5, 1.6, 2.6], size: 0.18, life: 1.6, grav: -2, drag: 1, kind: 2 });
  refreshHUD();
  if (!enemies.some((x) => x.alive)) { toast("Area cleared", "The way to the chest is open", "star"); }
}
function tryMoveEnemy(e, dx, dz) { const save = { x: e.x, z: e.z, y: GY }; tryMove(save, dx, dz, 0.3); e.x = save.x; e.z = save.z; }
function usePotion() {
  if (!started || anyOverlay() || player.potionCd > 0 || player.hp >= player.maxHp) return;
  player.hp = Math.min(player.maxHp, player.hp + 40); player.potionCd = 8;
  sfx.potion();
  for (let i = 0; i < 24; i++) fxAdd.spawn({ x: player.x + (Math.random() - 0.5) * 0.8, y: player.y + Math.random() * 1.8, z: player.z + (Math.random() - 0.5) * 0.8, vy: 1.2, color: [2.4, 0.3, 0.3], size: 0.12, life: 0.9 });
  refreshHUD();
}
function useArtifact(i) {
  const it = equippedOf("artifacts")[i];
  if (!it || player.artCd[i] > 0 || anyOverlay()) return;
  player.artCd[i] = 6; state.souls = Math.max(0, state.souls - 10);
  const col = it.icon === "shield" ? [0.4, 0.9, 2.6] : it.icon === "quill" ? [0.5, 1.8, 2.6] : [2.6, 1.2, 0.3];
  if (it.icon === "shield") player.invuln = Math.max(player.invuln, 1.6);
  else for (const e of enemies) if (e.alive && Math.hypot(player.x - e.x, player.z - e.z) < 3.2) hitEnemy(e, 22, Math.sign(e.x - player.x), Math.sign(e.z - player.z));
  for (let k = 0; k < 40; k++) { const a = k / 40 * Math.PI * 2; fxAdd.spawn({ x: player.x, y: player.y + 0.4, z: player.z, vx: Math.cos(a) * 6, vy: 0.4, vz: Math.sin(a) * 6, color: col, size: 0.2, life: 0.5, drag: 2.5 }); }
  sfx.loot(); refreshHUD();
}

function nearestInteract() {
  const px = player.x, pz = player.z; let best = null, bd = 1e9;
  const consider = (o, x, z, r = 1.9) => { const d = Math.hypot(px - x, pz - z); if (d < r && d < bd) { bd = d; best = o; } };
  for (const n of npcs) if (n.interact) consider(n, n.model.root.position.x, n.model.root.position.z, 2.1);
  for (const a of animals) if (a.interact) consider(a, a.model.root.position.x, a.model.root.position.z, 1.8);
  for (const it of level.interacts || []) consider(it, it.x, it.z, it.r || 1.6);
  if (chest && !chest.opened) consider({ interact: "chest", label: "Open the chest" }, chest.x, chest.z, 2.0);
  return best;
}
function interact() {
  if (!started) { start(); return; }
  if (anyOverlay()) return;
  const t = nearestInteract(); if (!t) return;
  if (t.interact === "pete") { peteLine = (peteLine + 1) % PETE_LINES.length; chat("Pete", PETE_LINES[peteLine], "npc", peteLine < PETE_LINES.length - 1); sfx.talk(); return; }
  if (t.interact === "student") { const f = CAMPUS_FACTS[studentLine++ % CAMPUS_FACTS.length]; chat("Student", f, "npc"); sfx.talk(); return; }
  if (t.interact === "wolf") { toast("Who's a good wolf?", "You pet the camp wolf.", "head"); chat(null, "The wolf thumps its tail.", "sys"); if (!state.adv.has("wolf")) { state.adv.add("wolf"); save(); } fxAdd.burst(t.model.root.position.x, GY + 1, t.model.root.position.z, [2.4, 0.6, 0.8], 8, 1.5, 0.15, 0.8, 1); return; }
  if (t.interact === "map") return openMissionMap();
  if (t.interact === "smith") { chat("Smith", "Let's see that gear of yours.", "npc"); return openInventory(); }
  if (t.interact === "storage") { toast("Storage", "Your gear lives in the inventory (I).", "bag"); return openInventory(); }
  if (t.interact === "chest") return openChest();
}
function openChest() {
  if (!chest || chest.opened) return;
  chest.opened = true; chest.openT = 0.0001;
  sfx.chest();
  fxAdd.burst(chest.x, GY + 1, chest.z, [2.6, 2.0, 0.6], 40, 4.5, 0.16, 1.1, -5);
  cam.shake = 0.2;
  pendingLoot = currentMission.loot;
  setTimeout(() => showLoot(currentMission.loot), state.reduced ? 50 : 900);
}

async function startMission(id) {
  const m = MISSION_BY_ID[id]; if (!m) return;
  closeAll();
  currentMission = m;
  const fade = $("#fade"); if (fade && !state.reduced) { fade.classList.add("on"); await new Promise((r) => setTimeout(r, 260)); }
  const L = buildMission(m);
  setLevel(L);
  setMode("mission");
  player.x = L.spawn.x; player.z = L.spawn.z; player.y = standY(L, player.x, player.z); player.hp = player.maxHp; player.action = null; player.invuln = 0.6; player.rot = Math.PI * 1.25;
  missionStats = { kills: 0, paydirt: 0, xp: 0 }; pendingLoot = null;
  snapCam();
  setHUD({ hud: true }); refreshHUD();
  const log = $("#chat"); if (log) log.innerHTML = "";
  chat(null, `Mission started: ${m.name}`, "join");
  showBanner(m.name, m.subtitle);
  sfx.open();
  if (fade) setTimeout(() => fade.classList.remove("on"), 60);
}
function showBanner(title, sub) {
  const b = $("#mission-banner"); if (!b) return;
  b.querySelector("h2").textContent = title; b.querySelector("p").textContent = sub;
  b.hidden = false; b.classList.remove("show"); void b.offsetWidth; b.classList.add("show");
  setTimeout(() => (b.hidden = true), 3400);
}
function finishMission() {
  const m = currentMission; if (!m) return;
  const first = !state.visited.has(m.id);
  state.visited.add(m.id);
  const xpGain = first ? 25 : 8, pd = first ? 20 : 8;
  state.xp += xpGain; missionStats.xp = xpGain; missionStats.paydirt += pd; state.paydirt += pd;
  const need = 40 + state.level * 20;
  if (state.xp >= need) { state.xp -= need; state.level++; toast("Level up", `You reached level ${state.level}`, "star"); }
  if (first && m.adv) toast("Advancement made!", m.adv, m.loot.icon);
  if (state.visited.size === LANDMARKS.length && !state.adv.has("all")) { state.adv.add("all"); toast("Challenge complete!", "Every landmark mission, done.", "star", true); }
  save();
  showComplete(m, missionStats);
}
async function returnToCamp() {
  const fade = $("#fade"); if (fade && !state.reduced) { fade.classList.add("on"); await new Promise((r) => setTimeout(r, 240)); }
  currentMission = null;
  setLevel(camp);
  setMode("camp");
  player.x = camp.spawn.x; player.z = camp.spawn.z; player.y = standY(camp, player.x, player.z); player.hp = player.maxHp; player.rot = Math.PI;
  snapCam(); refreshHUD();
  if (fade) setTimeout(() => fade.classList.remove("on"), 60);
}

// ------------------------------------------------------------------ camera
function camGoal(out) {
  const hub = level?.kind === "camp";
  // the camp hub uses a lower, MCD2-style hub camera so the Franklins show as a band
  // behind the buildings; missions keep the steeper dungeon view
  const d = (hub ? CAMP_CAM.dist : cam.dist) * cam.zoom * (eng.w < eng.h ? 1.25 : 1);
  const p = hub ? Math.max(0.24, Math.min(0.9, CAMP_CAM.pitch - (cam.zoom - 1) * 0.5)) : Math.max(0.26, cam.pitch - (cam.zoom - 1) * 0.96);
  out.set(cam.target.x + Math.sin(YAW) * Math.cos(p) * d, cam.target.y + camLift() + Math.sin(p) * d, cam.target.z + Math.cos(YAW) * Math.cos(p) * d);
  return out;
}
const liftV = new THREE.Vector3();
const CAMP_CAM = { dist: 22, pitch: 0.27, lift: 6.2 };
function camLift() { return level?.kind === "camp" ? CAMP_CAM.lift * (eng.w < eng.h ? 0.4 : 1) : Math.max(0, cam.zoom - 1.1) * 22; }
function lookTarget() { return liftV.copy(cam.target).setY(cam.target.y + camLift()); }
function snapCam() { cam.target.set(player.x, player.y + 0.9, player.z); camGoal(cam.pos); eng.camera.position.copy(cam.pos); eng.camera.lookAt(lookTarget()); }
const tmpV = new THREE.Vector3();
function tickCam(dt) {
  const cmp = eng.camera;
  if (!started) {
    const a = time * 0.06;
    const c = new THREE.Vector3(16 + Math.cos(a) * 3, GY - 3, 4 + Math.sin(a) * 2);
    cam.target.lerp(c, 0.05);
    const d = 74, p = 0.21, yaw = 0.5 + Math.sin(time * 0.05) * 0.05;
    tmpV.set(cam.target.x + Math.sin(yaw) * Math.cos(p) * d, cam.target.y + Math.sin(p) * d, cam.target.z + Math.cos(yaw) * Math.cos(p) * d);
    cmp.position.lerp(tmpV, 0.05); cmp.lookAt(cam.target);
    return;
  }
  const k = state.reduced ? 1 : 1 - Math.pow(0.0025, dt);
  tmpV.set(player.x + Math.sin(player.rot) * player.speed * 0.8, player.y + 0.9, player.z + Math.cos(player.rot) * player.speed * 0.8);
  cam.target.lerp(tmpV, k);
  camGoal(cam.pos);
  cmp.position.lerp(cam.pos, state.reduced ? 1 : 1 - Math.pow(0.0008, dt));
  if (cam.shake > 0 && !state.reduced) { cmp.position.x += (Math.random() - 0.5) * cam.shake; cmp.position.y += (Math.random() - 0.5) * cam.shake; cam.shake = Math.max(0, cam.shake - dt * 1.2); }
  cmp.lookAt(lookTarget());
}

// ------------------------------------------------------------------ portrait for the gear screen
let portrait = null;
function getHeroPortrait() {
  try {
    if (!portrait) {
      const ps = new THREE.Scene(); const pm = makeHero(); ps.add(pm.root);
      ps.add(new THREE.HemisphereLight(0xffffff, 0x664422, 1.4)); const d = new THREE.DirectionalLight(0xffe0c0, 2.4); d.position.set(2, 3, 4); ps.add(d);
      const pc = new THREE.PerspectiveCamera(30, 2 / 3, 0.1, 20); pc.position.set(1.4, 1.6, 4.4); pc.lookAt(0, 1.05, 0);
      pm.root.rotation.y = 0.35; animate(pm, { speed: 0 }, 0.016);
      const rt = new THREE.WebGLRenderTarget(192, 288, { samples: 4 });
      eng.renderer.setRenderTarget(rt); eng.renderer.setClearColor(0x000000, 0); eng.renderer.clear(); eng.renderer.render(ps, pc); eng.renderer.setRenderTarget(null);
      const px = new Uint8Array(192 * 288 * 4); eng.renderer.readRenderTargetPixels(rt, 0, 0, 192, 288, px);
      const c = document.createElement("canvas"); c.width = 192; c.height = 288; const ctx = c.getContext("2d"); const img = ctx.createImageData(192, 288);
      for (let y = 0; y < 288; y++) for (let x = 0; x < 192; x++) { const s = ((287 - y) * 192 + x) * 4, t = (y * 192 + x) * 4; for (let k = 0; k < 3; k++) img.data[t + k] = Math.min(255, Math.pow(px[s + k] / 255, 1 / 2.2) * 255); img.data[t + 3] = px[s + 3]; }
      ctx.putImageData(img, 0, 0); portrait = c.toDataURL(); rt.dispose();
      eng.renderer.setClearColor(0x000000, 1);
    }
  } catch (e) { return null; }
  return portrait;
}

// ------------------------------------------------------------------ per-frame
const nameTag = $("#nametag");
function emitters(dt) {
  const L = level; if (!L || state.reduced) return;
  const night = L.timeKey === "night" || L.timeKey === "dungeon" || L.timeKey === "cave" || L.timeKey === "dusk";
  for (const em of L.emitters) {
    if ((em.x - player.x) ** 2 + (em.z - player.z) ** 2 > 900) continue;
    let acc = (emitAcc.get(em) || 0) + dt * em.rate;
    while (acc >= 1) {
      acc -= 1;
      const j = () => (Math.random() - 0.5);
      if (em.type === "ember") fxAdd.spawn({ x: em.x + j() * 0.15, y: em.y, z: em.z + j() * 0.15, vx: j() * 0.3, vy: 0.9 + Math.random(), vz: j() * 0.3, color: [2.6, 1.1, 0.25], size: 0.06, life: 1.2, drag: 0.4 });
      else if (em.type === "fire") fxAdd.spawn({ x: em.x + j() * 0.7, y: em.y, z: em.z + j() * 0.7, vx: j() * 0.4, vy: 1.6 + Math.random() * 1.6, vz: j() * 0.4, color: Math.random() < 0.5 ? [2.8, 1.4, 0.3] : [2.6, 2.2, 0.8], size: 0.1, life: 1.1, drag: 0.6 });
      else if (em.type === "smoke") fxSmoke.spawn({ x: em.x + j() * 0.4, y: em.y, z: em.z + j() * 0.4, vx: 0.25 + j() * 0.2, vy: 0.8, vz: j() * 0.2, color: night ? [0.25, 0.24, 0.26] : [0.62, 0.6, 0.58], size: 0.55, life: 3.2, drag: 0.2 });
      else if (em.type === "spark") fxAdd.spawn({ x: em.x, y: em.y, z: em.z, vx: j() * 3, vy: 2 + Math.random() * 2, vz: j() * 3, color: [3, 1.8, 0.5], size: 0.06, life: 0.7, grav: -9, drag: 0.5 });
      else if (em.type === "magic" || em.type === "magicup") { const c = new THREE.Color(em.color || "#ffd070"); const s = em.spread || 1; fxAdd.spawn({ x: em.x + j() * s, y: em.y + Math.random() * 0.4, z: em.z + j() * s, vy: 0.4 + Math.random() * 0.6, vx: j() * 0.2, vz: j() * 0.2, color: [c.r * 2.4, c.g * 2.4, c.b * 2.4], size: 0.09, life: 1.8, drag: 0.3 }); }
      else if (em.type === "firefly") fxAdd.spawn({ x: em.x + j() * 3, y: em.y + Math.random(), z: em.z + j() * 3, color: [1.6, 2.4, 0.6], size: 0.1, life: 5, drag: 1, kind: 1 });
    }
    emitAcc.set(em, acc);
  }
  // ambient: dust motes by day, fireflies at night, drifting embers in dungeons
  const k = L.kind === "camp" ? (L.timeKey === "night" ? 6 : 4) : 3;
  if (Math.random() < dt * k * 3) {
    const x = player.x + (Math.random() - 0.5) * 26, z = player.z + (Math.random() - 0.5) * 22;
    if (L.timeKey === "night" || L.timeKey === "dusk") fxAdd.spawn({ x, y: GY + 0.5 + Math.random() * 2, z, color: [1.4, 2.2, 0.5], size: 0.09, life: 5, drag: 1, kind: 1 });
    else if (L.timeKey === "day") fxAdd.spawn({ x, y: GY + 0.5 + Math.random() * 4, z, vx: 0.2, vy: 0.05, color: [0.5, 0.46, 0.36], size: 0.06, life: 5, drag: 0.1, kind: 1 });
    else fxAdd.spawn({ x, y: GY + Math.random() * 3, z, vy: 0.3, color: L.theme?.magic ? [0.4, 1.2, 1.8] : [1.8, 0.8, 0.3], size: 0.06, life: 4, drag: 0.2, kind: 1 });
  }
}

function tick(dt) {
  time += dt;
  WORLD_UNIFORMS.uTime.value = time;
  for (const f of level?.fades || []) {
    const r = f.rect, inside = player.x > r[0] && player.x < r[2] && player.z > r[1] && player.z < r[3] + 2;
    // does this roof or canopy sit between the hero and the camera?
    const ux = Math.sin(YAW), uz = Math.cos(YAW), dx = f.cx - player.x, dz = f.cz - player.z;
    const along = dx * ux + dz * uz, perp = Math.abs(dx * uz - dz * ux);
    const occ = along > -f.rad && along < f.h / Math.tan(level.kind === "camp" ? CAMP_CAM.pitch : cam.pitch) + f.rad && perp < f.rad + 0.9;
    f.k += (((inside || occ) && started ? (f.tree ? 0.25 : 0.18) : 1) - f.k) * Math.min(1, dt * 6);
    f.mat.opacity = f.k; f.mat.depthWrite = f.k > 0.95; f.mesh.castShadow = true;
  }
  for (const k of ["rollCd", "potionCd", "atkCd", "invuln", "hurt"]) if (player[k] > 0) player[k] = Math.max(0, player[k] - dt);
  player.artCd = player.artCd.map((v) => Math.max(0, v - dt));
  const playing = started && !anyOverlay() && mode !== "map";
  const L = level;

  if (playing) {
    if (player.action === "roll") {
      tryMove(player, player.vx * dt, player.vz * dt);
      player.actionT -= dt; player.speed = 1;
      if (player.actionT <= 0) { player.action = null; player.vx = player.vz = 0; }
    } else {
      const v = inputAxis();
      const sp = 4.6 * v.len * (player.action === "attack" ? 0.35 : 1);
      if (v.len) {
        tryMove(player, v.x * sp * dt, v.z * sp * dt);
        const want = Math.atan2(v.x, v.z);
        let d = want - player.rot; while (d > Math.PI) d -= Math.PI * 2; while (d < -Math.PI) d += Math.PI * 2;
        if (player.action !== "attack") player.rot += d * Math.min(1, dt * 14);
      }
      player.speed += ((v.len ? v.len : 0) - player.speed) * Math.min(1, dt * 10);
      if (player.action === "attack") { player.actionT -= dt; if (player.actionT <= 0) player.action = null; }
    }
    const fy = standY(L, player.x, player.z);
    player.y += (fy - player.y) * Math.min(1, dt * 14);
    // enemies
    for (const e of enemies) {
      if (!e.alive) {
        if (e.deathT > 0) { e.deathT -= dt; e.model.root.rotation.z = (1 - e.deathT / 0.6) * 1.4; e.model.root.position.y = GY - (1 - e.deathT / 0.6) * 0.4; e.model.root.scale.setScalar(Math.max(0.01, e.deathT / 0.6) * (e.model.root.userData.s ||= e.model.root.scale.x)); if (e.deathT <= 0) { e.model.root.visible = false; } }
        e.bar.visible = false; if (e.ring) e.ring.visible = false; continue;
      }
      if (e.flashT > 0) { e.flashT -= dt; flash(e.model, e.flashT > 0 ? 1 : 0); }
      const dx = player.x - e.x, dz = player.z - e.z, d = Math.hypot(dx, dz);
      if (d < 8.5) e.aggro = true;
      let moving = 0;
      if (e.stun > 0) e.stun -= dt;
      else if (e.action === "windup") {
        e.actionT -= dt;
        if (e.actionT <= 0) {
          e.action = "attack"; e.actionT = 0.4;
          if (d < 1.9 && player.invuln <= 0 && player.action !== "roll") {
            player.hp = Math.max(0, player.hp - e.dmg); player.invuln = 0.6; player.hurt = 0.3; cam.shake = 0.25; sfx.hurt();
            fxAdd.burst(player.x, player.y + 1, player.z, [2.6, 0.3, 0.2], 10, 2.5, 0.12, 0.5);
            if (player.hp <= 0) { player.hp = player.maxHp * 0.6; player.x = L.spawn.x; player.z = L.spawn.z; player.y = standY(L, player.x, player.z); toast("Recovered", "A tonic pulls you back to the entrance.", "potion"); snapCam(); }
            refreshHUD();
          }
        }
      } else if (e.action === "attack") { e.actionT -= dt; if (e.actionT <= 0) { e.action = null; e.atkCd = 1.1 + Math.random() * 0.6; } }
      else if (e.aggro) {
        e.atkCd -= dt;
        if (d > 1.45) { const s = e.speed * dt; const bx = e.x, bz = e.z; tryMoveEnemy(e, dx / d * s, dz / d * s); moving = Math.hypot(e.x - bx, e.z - bz) / dt / e.speed; }
        else if (e.atkCd <= 0) { e.action = "windup"; e.actionT = 0.42; }
        // separation
        for (const o of enemies) if (o !== e && o.alive) { const ox = e.x - o.x, oz = e.z - o.z, od = Math.hypot(ox, oz); if (od < 0.9 && od > 0.001) tryMoveEnemy(e, ox / od * dt * 1.5, oz / od * dt * 1.5); }
        e.rot = Math.atan2(dx, dz);
      }
      const m = e.model;
      m.root.position.set(e.x, GY, e.z);
      let rd = e.rot - m.root.rotation.y; while (rd > Math.PI) rd -= Math.PI * 2; while (rd < -Math.PI) rd += Math.PI * 2; m.root.rotation.y += rd * Math.min(1, dt * 8);
      animate(m, { speed: Math.min(1, moving), action: e.action === "windup" || e.action === "attack" ? "attack" : null, actionT: e.action === "windup" ? 0.3 - (0.42 - e.actionT) * 0.5 : e.actionT, actionDur: 0.4, light: L.vox.lightAt(e.x, GY + 1, e.z) }, dt);
      if (e.action === "windup" && !state.reduced) e.model.root.position.y = GY + Math.sin((0.42 - e.actionT) * 30) * 0.02;
      e.bar.visible = e.hp < e.max || d < 5;
      e.bar.position.set(e.x, GY + (e.type === "wisp" ? 2.9 : e.type === "bug" ? 1.5 : 3.1), e.z);
      if (e.ring) { e.ring.visible = true; e.ring.position.set(e.x, GY + 0.04, e.z); e.ring.rotation.z = Math.PI / 4 + time * 0.8; }
      e.bar.quaternion.copy(eng.camera.quaternion);
      e.bar.userData.fg.scale.x = Math.max(0.001, e.hp / e.max);
    }
    // NPCs
    for (const n of npcs) {
      const m = n.model; const p = m.root.position;
      let spd = 0;
      if (n.path) {
        const tgt = n.path[n.pi]; const dx = tgt[0] - p.x, dz = tgt[1] - p.z, d = Math.hypot(dx, dz);
        const near = Math.hypot(player.x - p.x, player.z - p.z) < 2.6;
        if (d < 0.1) { n.t += dt; if (n.t > 2) { n.pi = (n.pi + 1) % n.path.length; n.t = 0; } }
        else if (!near) { p.x += dx / d * dt * 1.4; p.z += dz / d * dt * 1.4; n.rot = Math.atan2(dx, dz); spd = 0.35; }
        n.ring.position.set(p.x, p.y + 0.03, p.z);
      }
      const pd = Math.hypot(player.x - p.x, player.z - p.z);
      const want = pd < 4.5 && !spd ? Math.atan2(player.x - p.x, player.z - p.z) : n.rot;
      let rd = want - m.root.rotation.y; while (rd > Math.PI) rd -= Math.PI * 2; while (rd < -Math.PI) rd += Math.PI * 2; m.root.rotation.y += rd * Math.min(1, dt * 4);
      animate(m, { speed: spd, light: L.vox.lightAt(p.x, GY + 1.5, p.z) }, dt);
      n.ring.material.opacity = 0.35 + Math.sin(time * 3) * 0.2;
    }
    // animals wander
    for (const a of animals) {
      const m = a.model, p = m.root.position;
      a.t -= dt;
      if (a.sit) { animate(m, { speed: 0, sit: true, light: L.vox.lightAt(p.x, GY + 1, p.z) }, dt); continue; }
      if (a.t <= 0) { a.t = 2 + Math.random() * 4; const pen = a.pen; if (pen) { a.tx = pen[0] + Math.random() * (pen[2] - pen[0]); a.tz = pen[1] + Math.random() * (pen[3] - pen[1]); } a.graze = Math.random() < 0.4; }
      const dx = a.tx - p.x, dz = a.tz - p.z, d = Math.hypot(dx, dz);
      let spd = 0;
      if (d > 0.2 && !a.graze) { const s = (a.type === "chicken" ? 1.2 : 0.9) * dt; const ent = { x: p.x, z: p.z, y: GY }; tryMove(ent, dx / d * s, dz / d * s, 0.2); p.x = ent.x; p.z = ent.z; spd = 0.5; const w = Math.atan2(dx, dz); let rd = w - m.root.rotation.y; while (rd > Math.PI) rd -= Math.PI * 2; while (rd < -Math.PI) rd += Math.PI * 2; m.root.rotation.y += rd * Math.min(1, dt * 5); }
      p.y = standY(L, p.x, p.z);
      animate(m, { speed: spd, graze: a.graze, light: L.vox.lightAt(p.x, GY + 1, p.z) }, dt);
    }
    // prompt + name tag
    const t = nearestInteract();
    if (t) setPrompt(`<kbd>${matchMedia("(pointer: coarse)").matches ? "A" : "E"}</kbd> ${t.label || "Interact"}`, t.label || t.interact); else setPrompt(null);
    if (nameTag) {
      const who = t && (t.model ? t.model.root.position : null);
      if (who) { tmpV.set(who.x, who.y + 2.6, who.z).project(eng.camera); nameTag.hidden = false; nameTag.textContent = (t.label || "").split(" (")[0].replace("Talk to ", "").replace("Pet the ", "").replace("Chat with a ", ""); nameTag.style.transform = `translate(${(tmpV.x * 0.5 + 0.5) * eng.w}px, ${(-tmpV.y * 0.5 + 0.5) * eng.h}px) translate(-50%, -100%)`; }
      else nameTag.hidden = true;
    }
    if ((time * 4 | 0) !== ((time - dt) * 4 | 0)) setHUD({ potionCd: player.potionCd / 8, rollCd: player.rollCd / 1.6, hp: player.hp, maxHp: player.maxHp, souls: state.souls });
  } else if (nameTag) nameTag.hidden = true;

  // hero model
  if (heroModel) {
    const r = heroModel.root;
    r.visible = started;
    r.position.set(player.x, player.y, player.z); r.rotation.y = player.rot;
    animate(heroModel, { speed: player.action === "roll" ? 0 : player.speed, action: player.action, actionT: player.actionT, actionDur: player.actionDur, hurt: player.hurt, light: L ? L.vox.lightAt(player.x, player.y + 1, player.z) : 0 }, dt);
    if (player.invuln > 0 && player.action !== "roll" && player.hurt > 0) flash(heroModel, 0.8); else flash(heroModel, 0);
    if (playing && player.speed > 0.5 && !state.reduced && Math.random() < dt * 8) fxSmoke.spawn({ x: player.x - Math.sin(player.rot) * 0.3, y: player.y + 0.05, z: player.z - Math.cos(player.rot) * 0.3, vy: 0.3, vx: (Math.random() - 0.5) * 0.3, color: L?.kind === "camp" ? [0.7, 0.62, 0.5] : [0.5, 0.48, 0.5], size: 0.22, life: 0.6, drag: 2 });
  }
  // chest
  if (chest) {
    if (chest.openT > 0) { chest.openT = Math.min(1, chest.openT + dt * 2.2); chest.model.lid.rotation.x = -Math.min(1.9, chest.openT * 1.9); chest.beam.scale.set(1 + chest.openT, 1, 1 + chest.openT); chest.beam.children.forEach((c) => { if (c.material.uniforms) c.material.uniforms.uA.value = Math.max(0, 0.9 - chest.openT * 0.6); }); }
    else chest.model.lid.rotation.x = Math.sin(time * 3) * 0.02;
    chest.beam.rotation.y += dt * 0.6;
    chest.beam.userData.ring.scale.setScalar(1 + Math.sin(time * 3) * 0.12);
    if (!state.reduced && Math.random() < dt * 18) { const c = new THREE.Color(chest.color); fxAdd.spawn({ x: chest.x + (Math.random() - 0.5) * 1.4, y: GY + 0.2, z: chest.z + (Math.random() - 0.5) * 1.4, vy: 1.5 + Math.random() * 2, color: [c.r * 2.5, c.g * 2.5, c.b * 2.5], size: 0.12, life: 2, drag: 0.1 }); }
  }
  if (L?.gears) for (const g of L.gears) g.g.rotation.z += dt * g.s;

  emitters(dt);
  fxAdd.target = player; fxAdd.update(dt, time); fxSmoke.update(dt, time);
  // homing pickups
  homing(dt);
  flames.update(time);
  fxAdd.mat.uniforms.uScale.value = fxSmoke.mat.uniforms.uScale.value = eng.h * eng.renderer.getPixelRatio() * 0.9;
  tickCam(dt);
  const focus = started ? tmpV.set(player.x, player.y, player.z) : cam.target;
  rig.follow(focus.clone ? focus.clone() : focus);
  rig.assign(L ? L.lights : [], started ? player : { x: cam.target.x, z: cam.target.z }, time);
}
function homing(dt) {
  const P = fxAdd;
  for (let i = 0; i < P.n; i++) {
    if (P.kind[i] !== 2) continue;
    const age = P.life0[i] - P.life[i];
    if (age < 0.45) continue;
    const dx = player.x - P.p[i * 3], dy = player.y + 1 - P.p[i * 3 + 1], dz = player.z - P.p[i * 3 + 2]; const d = Math.hypot(dx, dy, dz);
    if (d < 0.5) { P.life[i] = 0; continue; }
    P.g[i] = 0; const s = 14; P.v[i * 3] += dx / d * s * dt * 4; P.v[i * 3 + 1] += dy / d * s * dt * 4; P.v[i * 3 + 2] += dz / d * s * dt * 4; P.drag[i] = 4; P.life[i] = Math.max(P.life[i], 0.3);
  }
}

// ------------------------------------------------------------------ adaptive quality
let perfT = 0, perfFrames = 0, perfLowCount = 0, lastFrameMs = 16;
function perf(dt) {
  perfT += dt; perfFrames++;
  if (perfT < 2.5) return;
  const fps = perfFrames / perfT; perfT = 0; perfFrames = 0;
  window.__fps = fps;
  if (!state.autoQuality || time < 5) return;
  if (fps < 34 && eng.quality > 0) { perfLowCount++; if (perfLowCount >= 2) { perfLowCount = 0; state.quality = eng.quality - 1; eng.setQuality(state.quality); save(); chat(null, `Graphics set to ${QUALITY[state.quality].name} for smoother play`, "sys"); } }
  else perfLowCount = 0;
}

let lastTs = 0;
function loop(ts) {
  const dt = Math.min(0.05, (ts - (lastTs || ts)) / 1000); lastTs = ts;
  const t0 = performance.now();
  tick(dt);
  if (mode === "map" && mapScene) {
    mapScene.update(dt, eng, state.reduced); eng.render(mapScene.scene, mapScene.camera);
    renderMapLabels((n) => mapScene.project(n, eng), mapScene.nodes);
  } else eng.render(scene, eng.camera);
  lastFrameMs = performance.now() - t0; eng.stats.frameMs = lastFrameMs;
  perf(dt);
  requestAnimationFrame(loop);
}

// ------------------------------------------------------------------ boot
(async function boot() {
  try {
    drawTitle(); setSplash();
    if (document.fonts?.ready) document.fonts.ready.then(drawTitle);
    await step(10, "Painting block textures...");
    await step(30, "Building Centennial Plaza...");
    camp = buildCamp();
    { // put the mountain star where the default hub camera (16:10) sees it, above the rooflines
      const tc = new THREE.PerspectiveCamera(44, 1.6, 0.5, 400), p = CAMP_CAM.pitch, d = CAMP_CAM.dist;
      const T = new THREE.Vector3(camp.spawn.x, GY + 0.9, camp.spawn.z);
      tc.position.set(T.x + Math.sin(YAW) * Math.cos(p) * d, T.y + CAMP_CAM.lift + Math.sin(p) * d, T.z + Math.cos(YAW) * Math.cos(p) * d);
      tc.lookAt(T.x, T.y + CAMP_CAM.lift, T.z); tc.updateMatrixWorld(); tc.updateProjectionMatrix();
      placeStar(camp, tc);
    }
    await step(65, "Waking up Paydirt Pete...");
    setLevel(camp);
    player.x = camp.spawn.x; player.z = camp.spawn.z; player.y = GY;
    cam.target.set(42, GY + 1, 46);
    eng.camera.position.set(60, 30, 66); eng.camera.lookAt(cam.target);
    await step(85, "Lighting torches...");
    eng.render(scene, eng.camera); // compile shaders
    await step(100, "Ready");
    const ld = $("#loading"); if (ld) { ld.classList.add("done"); setTimeout(() => (ld.hidden = true), 500); }
    setHUD({ hud: false });
    requestAnimationFrame(loop);
    if (location.hash.length > 1) { const id = location.hash.slice(1); if (MISSION_BY_ID[id]) { start(true); startMission(id); } }
  } catch (err) {
    console.error(err);
    const el = $("#nogl"); if (el) { el.hidden = false; el.querySelector("p").textContent = "Something went wrong while building the 3D world."; }
    const ld = $("#loading"); if (ld) ld.hidden = true;
  }
})();

// debug / screenshot API
window.__game = {
  start, openPanel, openInventory, openMissionMap, startMission, closeAll, returnToCamp, openChest, finishMission, showLoot, showComplete,
  setTime(t) { state.time = t; if (level?.kind === "camp") applyLevelTime(); refreshHUD(); },
  setQuality(q) { state.quality = q; state.autoQuality = false; eng.setQuality(q); },
  player, state, eng, cam, get level() { return level; }, get enemies() { return enemies; }, get mode() { return mode; },
  get stats() { return { ...eng.stats, fps: window.__fps }; },
  snapCam, missions: MISSIONS.map((m) => m.id),
  goTo(x, z, rot) { player.x = x; player.z = z; player.y = standY(level, x, z); if (rot != null) player.rot = rot; snapCam(); },
  goToChest() { if (!chest) return false; player.x = chest.x - 1.2; player.z = chest.z + 1.2; player.y = standY(level, player.x, player.z); player.rot = Math.atan2(chest.x - player.x, chest.z - player.z); snapCam(); return true; },
  killAll() { for (const e of enemies) if (e.alive) killEnemy(e); },
  attack, roll, interact, giveAll() { for (const m of MISSIONS) giveItem(m.loot); },
};
