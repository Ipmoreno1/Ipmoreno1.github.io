// main.js : game loop, input, movement, camera, lighting, weather and the bus.
import * as A from "./art.js";
import { buildAreas } from "./world.js";
import { LANDMARKS, STUDENT_LINES } from "./data.js";
import { UI } from "./ui.js";
import { Sound } from "./audio.js";

const T = A.T;
const $ = (s) => document.querySelector(s);
const screen = $("#screen"); const sg = screen.getContext("2d");
const store = { get(k, d) { try { const v = localStorage.getItem("utepx." + k); return v === null ? d : JSON.parse(v); } catch { return d; } }, set(k, v) { try { localStorage.setItem("utepx." + k, JSON.stringify(v)); } catch {} } };

const state = {
  areaId: "main", time: store.get("time", "auto"), weather: store.get("weather", "clear"), zoom: store.get("zoom", 0),
  reduce: store.get("reduce", matchMedia("(prefers-reduced-motion: reduce)").matches), sound: false, busy: false, t: 0,
};
const { art, areas } = buildAreas();
const chars = {
  isaac: A.makeCharacter({ bg: "#f6d9a0", pal: { skin: "#c98d62", hair: "#2b1d16", shirt: "#e8742a", accent: "#1f3a6e", pants: "#2f3d5c", shoe: "#3a2a20" } }),
  pete: A.makeCharacter({ hat: "#c9a46a", plaid: true, overalls: "#2f5a9a", bg: "#f6c98a", pal: { shirt: "#e0702a", skin: "#e2a77c", pants: "#2f5a9a", shoe: "#5a3a22" } }),
  s0: A.makeCharacter({ backpack: "#2a9d8f", long: true, pal: { hair: "#6b3e22", shirt: "#2b4d8f", accent: "#ffffff", skin: "#e0ad84", pants: "#4a4a55" } }),
  s1: A.makeCharacter({ cap: "#ff8200", backpack: "#d8502e", pal: { hair: "#e2c06a", shirt: "#f2f2ee", accent: "#ff8200", skin: "#f0c3a0" } }),
  s2: A.makeCharacter({ backpack: "#1f3a6e", glasses: true, pal: { hair: "#151018", shirt: "#2a9d8f", accent: "#f2f2ee", skin: "#8d5a3c", pants: "#5a4a3a" } }),
  s3: A.makeCharacter({ bun: true, pal: { hair: "#3a2418", shirt: "#ff8200", accent: "#1f3a6e", skin: "#d39a70", pants: "#3a4a6a" } }),
  s4: A.makeCharacter({ backpack: "#e3b341", cap: "#1f3a6e", pal: { hair: "#20161a", shirt: "#1f3a6e", accent: "#ff8200", skin: "#b07a52" } }),
  s5: A.makeCharacter({ long: true, pal: { hair: "#7a4a2a", shirt: "#8c2c1f", accent: "#efe2c0", skin: "#e8b894", pants: "#2f3d5c" } }),
  s6: A.makeCharacter({ backpack: "#4f8a5a", pal: { hair: "#2a1a12", shirt: "#e9e9e4", accent: "#2a9d8f", skin: "#c98d62", pants: "#3a3a44" } }),
  s7: A.makeCharacter({ glasses: true, pal: { hair: "#5a3a26", shirt: "#3f7f5a", accent: "#f2f2ee", skin: "#e0ad84", pants: "#2f3d5c" } }),
  s8: A.makeCharacter({ backpack: "#ff8200", bun: true, pal: { hair: "#151018", shirt: "#c46ad0", accent: "#f7f1e1", skin: "#a8704c", pants: "#2f3d5c" } }),
  s9: A.makeCharacter({ cap: "#2a9d8f", pal: { hair: "#3a2418", shirt: "#ff8200", accent: "#1f3a6e", skin: "#d39a70", pants: "#4a4a55" } }),
};
const bird = A.makeRoadrunner();
const NPC_NAMES = { pete: "Paydirt Pete", s0: "Marisol, CS junior", s1: "Tyler, mechanical engineering", s2: "Andre, math minor", s3: "Priya, biology", s4: "Diego, kinesiology", s5: "Hannah, film", s6: "Luis, civil engineering", s7: "Sam, computer science", s8: "Noemi, chemistry", s9: "Rafa, sports management" };
const PET = "Chispa";

// glow sprites for lights
const glowSprite = (() => { const [c, g] = A.mk(64, 64); const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, "rgba(255,255,255,1)"); gr.addColorStop(0.45, "rgba(255,255,255,0.55)"); gr.addColorStop(1, "rgba(255,255,255,0)"); g.fillStyle = gr; g.fillRect(0, 0, 64, 64); return c; })();
const tintGlow = (col) => { const [c, g] = A.mk(64, 64); const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, col.replace("A", "0.9")); gr.addColorStop(0.5, col.replace("A", "0.3")); gr.addColorStop(1, col.replace("A", "0")); g.fillStyle = gr; g.fillRect(0, 0, 64, 64); return c; };
const warmGlow = tintGlow("rgba(255,184,80,A)"), coolGlow = tintGlow("rgba(220,235,255,A)"), mmGlow = tintGlow("rgba(120,160,255,A)");

// ---------------------------------------------------------------- entities
const player = { x: 0, y: 0, dir: "down", dist: 0, moving: false, sprite: chars.isaac, trail: [] };
const pet = { x: 0, y: 0, dir: "right", frame: 0, moving: false, hop: 0 };
let npcs = [];
let area = areas.main;
function enterArea(id, at) {
  area = areas[id]; state.areaId = id;
  const p = at || area.spawn; player.x = p.x; player.y = p.y; player.trail = [];
  pet.x = player.x - 18; pet.y = player.y + 2;
  npcs = area.npcs.map((n) => { const o = { ...n, sprite: chars[n.id], dir: "down", dist: 0, wait: Math.random() * 2, moving: false, leg: 0 }; if (n.route) { o.x = n.route[0][0] * T + 8; o.y = n.route[0][1] * T + 12; o.leg = 1; } o.tx = o.x; o.ty = o.y; return o; });
  UI.buildSigns(area);
  snapCam = true; updatePlate();
}

// ---------------------------------------------------------------- input
const keys = new Set(); const touch = { x: 0, y: 0 }; let runToggle = false;
addEventListener("keydown", (e) => {
  if (e.target.closest && e.target.closest("input, textarea, select")) return;
  const k = e.key.toLowerCase();
  if (UI.isOpen()) { if (k === "escape") { UI.close(); e.preventDefault(); } return; }
  if (state.busy) return;
  if (["arrowup", "arrowdown", "arrowleft", "arrowright", " "].includes(k)) e.preventDefault();
  keys.add(k);
  if (k === "e" || k === "enter") { if (e.target === document.body || e.target === screen) { interact(); e.preventDefault(); } }
  else if (k === "p") UI.open("log"); else if (k === "m") UI.open("map"); else if (k === "c") UI.open("contact");
  else if (k === "h" || k === "?") UI.open("help"); else if (k === "escape") UI.toggleWorld(false);
});
addEventListener("keyup", (e) => keys.delete(e.key.toLowerCase()));
addEventListener("blur", () => keys.clear());
document.querySelectorAll("[data-dir]").forEach((b) => {
  const [dx, dy] = b.dataset.dir.split(",").map(Number);
  const on = (e) => { e.preventDefault(); touch.x = dx; touch.y = dy; b.classList.add("down"); try { b.setPointerCapture(e.pointerId); } catch {} };
  const off = () => { touch.x = 0; touch.y = 0; b.classList.remove("down"); };
  b.addEventListener("pointerdown", on); b.addEventListener("pointerup", off); b.addEventListener("pointercancel", off); b.addEventListener("lostpointercapture", off);
  b.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); stepNudge(dx, dy); } });
});
function stepNudge(dx, dy) { let n = 0; const id = setInterval(() => { touch.x = dx; touch.y = dy; if (++n > 8) { clearInterval(id); touch.x = touch.y = 0; } }, 30); }
$("#run-btn").addEventListener("click", () => { runToggle = !runToggle; $("#run-btn").setAttribute("aria-pressed", String(runToggle)); $("#run-btn").classList.toggle("on", runToggle); });
$("#act-btn").addEventListener("click", () => interact());
$("#pet-btn").addEventListener("click", () => petBird());

// ---------------------------------------------------------------- movement and collision
function blocked(x, y) { // feet hitbox 10x6
  for (const [ox, oy] of [[-5, -6], [4, -6], [-5, -1], [4, -1]]) if (area.isSolid(Math.floor((x + ox) / T), Math.floor((y + oy) / T))) return true;
  return false;
}
function moveEnt(e, dx, dy) {
  let moved = false;
  if (dx) { const nx = e.x + dx; if (!blocked(nx, e.y)) { e.x = nx; moved = true; } else { for (const s of [-3, 3]) if (!dy && !blocked(nx, e.y + s) && !blocked(e.x, e.y + s)) { e.y += Math.sign(s) * Math.min(Math.abs(dx), 1); break; } } }
  if (dy) { const ny = e.y + dy; if (!blocked(e.x, ny)) { e.y = ny; moved = true; } else { for (const s of [-3, 3]) if (!dx && !blocked(e.x + s, ny) && !blocked(e.x + s, e.y)) { e.x += Math.sign(s) * Math.min(Math.abs(dy), 1); break; } } }
  return moved;
}
function updatePlayer(dt) {
  let dx = 0, dy = 0;
  if (keys.has("a") || keys.has("arrowleft")) dx -= 1; if (keys.has("d") || keys.has("arrowright")) dx += 1;
  if (keys.has("w") || keys.has("arrowup")) dy -= 1; if (keys.has("s") || keys.has("arrowdown")) dy += 1;
  if (!dx && !dy) { dx = touch.x; dy = touch.y; }
  const run = keys.has("shift") || runToggle; const sp = (run ? 118 : 68) * dt;
  player.moving = false;
  if (dx || dy) {
    const l = Math.hypot(dx, dy); dx /= l; dy /= l;
    player.dir = Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? "right" : "left") : dy > 0 ? "down" : "up";
    const ox = player.x, oy = player.y;
    moveEnt(player, dx * sp, dy * sp);
    const d = Math.hypot(player.x - ox, player.y - oy);
    if (d > 0.01) { player.moving = true; player.dist += d * (run ? 0.8 : 1); player.trail.push([player.x, player.y]); if (player.trail.length > 90) player.trail.shift(); }
  }
}
function updatePet(dt) {
  // follow a point on the trail about 20px behind the player
  let tx = player.x - 16, ty = player.y + 1; let acc = 0;
  for (let i = player.trail.length - 1; i > 0; i--) { const [x1, y1] = player.trail[i], [x0, y0] = player.trail[i - 1]; acc += Math.hypot(x1 - x0, y1 - y0); if (acc > 20) { tx = x0; ty = y0; break; } }
  const dx = tx - pet.x, dy = ty - pet.y, d = Math.hypot(dx, dy);
  pet.moving = d > 3;
  if (d > 140) { pet.x = tx; pet.y = ty; }
  else if (pet.moving) { const sp = Math.min(d, (d > 30 ? 150 : 95) * dt); pet.x += (dx / d) * sp; pet.y += (dy / d) * sp; if (Math.abs(dx) > 1) pet.dir = dx > 0 ? "right" : "left"; pet.frame += dt * 12; }
  else { pet.frame = 0; }
  if (pet.hop > 0) pet.hop -= dt;
}
function updateNPCs(dt) {
  for (const n of npcs) {
    const pd = Math.hypot(player.x - n.x, player.y - n.y);
    if (pd < 30) { n.moving = false; const dx = player.x - n.x, dy = player.y - n.y; n.dir = Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? "right" : "left") : dy > 0 ? "down" : "up"; continue; }
    if (n.wait > 0) { n.wait -= dt; n.moving = false; continue; }
    const dx = n.tx - n.x, dy = n.ty - n.y, d = Math.hypot(dx, dy);
    if (d < 2 && n.route) { const p = n.route[n.leg % n.route.length]; n.leg++; n.tx = p[0] * T + 8; n.ty = p[1] * T + 12; if (Math.random() < 0.3) n.wait = 1 + Math.random() * 2; continue; }
    if (d < 2) { n.wait = 1.5 + Math.random() * 3.5; const gx = n.home[0] + Math.round((Math.random() * 2 - 1) * n.wander), gy = n.home[1] + Math.round((Math.random() * 2 - 1) * n.wander * 0.6); if (area.free(gx, gy) && !area.isSolid(gx, gy - 1)) { n.tx = gx * T + 8; n.ty = gy * T + 12; } continue; }
    const sp = (n.route ? 34 : 28) * dt; const mx = Math.abs(dx) > 1 ? Math.sign(dx) * Math.min(sp, Math.abs(dx)) : 0; const my = mx ? 0 : Math.sign(dy) * Math.min(sp, Math.abs(dy));
    n.dir = mx ? (mx > 0 ? "right" : "left") : my > 0 ? "down" : "up";
    if (!moveEnt(n, mx, my)) { if (n.route) { n.wait = 0.4; if (Math.abs(dx) > 1) { if (!moveEnt(n, 0, Math.sign(dy || 1) * sp)) n.leg++; } else if (!moveEnt(n, Math.sign(dx || 1) * sp, 0)) n.leg++; } else { n.tx = n.x; n.ty = n.y; n.wait = 1; } }
    n.moving = true; n.dist += sp;
  }
}

// ---------------------------------------------------------------- interaction
let target = null;
function findTarget() {
  let best = null, bd = 1e9;
  const consider = (kind, obj, d, r) => { if (d < r && d / r < bd) { bd = d / r; best = { kind, obj }; } };
  for (const n of npcs) consider("npc", n, Math.hypot(player.x - n.x, player.y - n.y), 28);
  consider("pet", pet, Math.hypot(player.x - pet.x, player.y - pet.y) * 1.6 + 4, 24);
  for (const l of area.landmarks) consider("landmark", l, Math.hypot(player.x - l.x, player.y - l.y), l.r);
  if (area.bus) consider("bus", area.bus, Math.hypot(player.x - area.bus.x, player.y - area.bus.y), area.bus.r);
  return best;
}
function targetLabel(t) {
  if (!t) return null;
  if (t.kind === "npc") return "Talk to " + NPC_NAMES[t.obj.id].split(",")[0];
  if (t.kind === "pet") return "Pet " + PET;
  if (t.kind === "bus") return "Ride the Sun Metro";
  return "Open " + t.obj.label;
}
function interact() {
  if (UI.isOpen() || state.busy) return;
  const t = target; if (!t) { UI.toast("Nothing to interact with here. Walk up to a building, a person, or " + PET + "."); return; }
  Sound.blip("open");
  if (t.kind === "npc") { if (t.obj.id === "pete") UI.open("npc", { id: "pete", name: NPC_NAMES.pete, portrait: chars.pete.portrait }); else UI.open("npc", { id: t.obj.id, name: NPC_NAMES[t.obj.id], portrait: chars[t.obj.id].portrait, line: STUDENT_LINES[parseInt(t.obj.id.slice(1)) % STUDENT_LINES.length] }); }
  else if (t.kind === "pet") petBird();
  else if (t.kind === "bus") rideBus(state.areaId === "main" ? "athletics" : "main");
  else UI.open("landmark", t.obj.id);
}
function petBird() { pet.hop = 0.6; hearts.push({ x: pet.x, y: pet.y - 24, t: 0 }); Sound.blip("pet"); UI.toast(PET + " the roadrunner fluffs up its crest and does a happy little hop."); }
const hearts = [];

// ---------------------------------------------------------------- bus transition
const AREA_TITLE = { main: "Main Campus", athletics: "Sun Bowl & Athletics" };
async function rideBus(to, at) {
  if (state.busy) return; state.busy = true; keys.clear(); touch.x = touch.y = 0;
  const fx = $("#bus-fx"), cv = $("#bus-canvas"), card = $("#bus-card");
  card.textContent = AREA_TITLE[to]; fx.hidden = false; fx.classList.remove("show"); void fx.offsetWidth; fx.classList.add("show");
  Sound.blip("bus");
  const dur = state.reduce ? 700 : 2300; const g = cv.getContext("2d");
  cv.width = Math.ceil(innerWidth / 3); cv.height = Math.ceil(innerHeight / 3); g.imageSmoothingEnabled = false;
  const t0 = performance.now(); let switched = false;
  await new Promise((res) => {
    const step = (now) => {
      const k = Math.min(1, (now - t0) / dur);
      g.clearRect(0, 0, cv.width, cv.height);
      const ry = Math.round(cv.height * 0.52);
      for (let x = -((now / 8) % 12); x < cv.width; x += 12) { g.fillStyle = "#f2c94c"; g.fillRect(Math.round(x), ry + 14, 7, 2); }
      const bx = state.reduce ? cv.width / 2 - 32 : Math.round(-70 + (cv.width + 140) * (k < 0.5 ? k * 0.9 : 0.45 + (k - 0.5) * 1.1));
      g.drawImage(art.bus, bx, ry - 18 + (Math.floor(now / 120) % 2));
      if (!switched && k > 0.45) { switched = true; enterArea(to, at); }
      if (k < 1) requestAnimationFrame(step); else res();
    };
    requestAnimationFrame(step);
  });
  fx.classList.remove("show"); setTimeout(() => (fx.hidden = true), 400);
  state.busy = false; UI.toast("Arrived at " + AREA_TITLE[to] + ".");
}

// ---------------------------------------------------------------- time, weather, plate
function timeKey() {
  if (state.time !== "auto") return state.time;
  const d = new Date(), h = d.getHours() + d.getMinutes() / 60;
  return h >= 7 && h < 17.25 ? "day" : (h >= 17.25 && h < 19.25) || (h >= 6 && h < 7) ? "dusk" : "night";
}
const LIGHT = { day: { dark: 0, glow: 0, star: 0.45, lamp: 0 }, dusk: { dark: 0.3, col: "70,36,100", glow: 0.6, star: 0.75, lamp: 0.65, warm: 0.3 }, night: { dark: 0.66, col: "10,16,46", glow: 1, star: 1, lamp: 1 } };
function updatePlate() {
  const tk = timeKey(); const w = { clear: area.sub.toUpperCase(), monsoon: "MONSOON", dust: "DUST STORM" }[state.weather];
  $("#plate-area").textContent = area.name.toUpperCase(); $("#plate-sub").textContent = `${w} · ${{ day: "DAYTIME", dusk: "DUSK", night: "NIGHT" }[tk]}`;
  screen.setAttribute("aria-label", `Pixel-art map of ${area.name} at UTEP, ${tk}. Use WASD or the arrow keys to walk and E to open landmarks. Every landmark is also listed in the Map and Dig Log panels.`);
}

// ---------------------------------------------------------------- camera and rendering
let scale = 2, vw = 0, vh = 0; const [view, vg] = A.mk(8, 8); const [lightC, lg] = A.mk(8, 8);
let camX = 0, camY = 0, snapCam = true;
let dpr = 1;
// Crisp pixels: the world is always drawn at a whole number of DEVICE pixels per art pixel.
// cssScale is the target size of one art pixel in CSS px (2 on desktop, 1.5 on phones);
// the device scale is that times devicePixelRatio, rounded to an integer.
function cssTarget() { const w = innerWidth, h = innerHeight; return w < 600 ? 1.5 : w >= 2400 && h >= 1300 ? 3 : 2; }
function autoScale() { return Math.max(1, Math.round(cssTarget() * dpr)); }
function resize() {
  dpr = Math.max(1, Math.min(4, window.devicePixelRatio || 1));
  const dk = document.getElementById("dock"), stp = document.getElementById("strip");
  if (dk && stp) stp.style.height = Math.max(0, Math.round(dk.offsetHeight + 10 - 16)) + "px";
  const stripH = stp?.offsetHeight || 0; const cssH = Math.max(200, innerHeight - stripH);
  screen.width = Math.round(innerWidth * dpr); screen.height = Math.round(cssH * dpr);
  // css size is exactly backing / dpr so the browser never resamples the canvas
  screen.style.width = screen.width / dpr + "px"; screen.style.height = screen.height / dpr + "px";
  const maxS = Math.max(2, Math.round(6 * dpr));
  scale = state.zoom ? Math.max(1, Math.min(maxS, Math.round(state.zoom * dpr))) : autoScale();
  vw = Math.ceil(screen.width / scale) + 2; vh = Math.ceil(screen.height / scale) + 2;
  view.width = vw; view.height = vh; lightC.width = vw; lightC.height = vh;
  vg.imageSmoothingEnabled = false; sg.imageSmoothingEnabled = false; snapCam = true;
  UI.measureSigns && UI.measureSigns();
}
addEventListener("resize", resize);
export function setZoom(d) {
  const maxS = Math.max(2, Math.round(6 * dpr)); const ns = Math.max(1, Math.min(maxS, scale + d));
  state.zoom = ns === autoScale() ? 0 : ns / dpr; store.set("zoom", state.zoom); resize();
  UI.toast("Zoom " + +(ns / dpr).toFixed(2) + "x" + (state.zoom === 0 ? " (default)" : ""));
}

function updateCam(dt) {
  const W = area.w * T, Hh = area.h * T; const sw = screen.width / scale, sh = screen.height / scale;
  const dockH = Math.max(0, (document.getElementById("dock")?.getBoundingClientRect().top ?? innerHeight) < innerHeight - (document.getElementById("strip")?.offsetHeight || 0) ? ((innerHeight - (document.getElementById("strip")?.offsetHeight || 0)) - document.getElementById("dock").getBoundingClientRect().top) * dpr / scale : 0);
  let tx = player.x - sw / 2, ty = player.y - 8 - (sh - dockH) / 2;
  tx = Math.max(0, Math.min(W - sw, tx)); ty = Math.max(0, Math.min(Hh - sh + dockH * 0.6, ty));
  if (W < sw) tx = (W - sw) / 2; if (Hh < sh) ty = (Hh - sh) / 2;
  if (snapCam || state.reduce) { camX = tx; camY = ty; snapCam = false; } else { const k = 1 - Math.exp(-dt * 7); camX += (tx - camX) * k; camY += (ty - camY) * k; }
  // quantize the camera to whole device pixels so nothing lands between pixels
  camX = Math.round(camX * scale) / scale; camY = Math.round(camY * scale) / scale;
}
const rain = [], dust = [];
let flash = 0, nextFlash = 6;
function drawChar(e, sprite, frameIdx, extraY = 0) {
  const fr = sprite[e.dir][frameIdx];
  vg.drawImage(fr, Math.round(e.x - 13 - ix), Math.round(e.y - 35 - iy + extraY));
}
let ix = 0, iy = 0;
function render(dt) {
  const t = state.t; const L = LIGHT[timeKey()];
  ix = Math.floor(camX); iy = Math.floor(camY); const fx = camX - ix, fy = camY - iy;
  vg.globalCompositeOperation = "source-over"; vg.globalAlpha = 1;
  vg.fillStyle = "#2b2420"; vg.fillRect(0, 0, vw, vh);
  vg.drawImage(area.ground, ix, iy, vw, vh, 0, 0, vw, vh);
  // animated water tiles
  const wf = state.reduce ? 0 : Math.floor(t * 3) % 4;
  for (const [x, y] of area.waters) { const sx = x * T - ix, sy = y * T - iy; if (sx > -T && sy > -T && sx < vw && sy < vh) vg.drawImage(art.tiles.water[wf], sx, sy); }
  // gather drawables
  const list = [];
  const inView = (x, y, w, h) => x + w > ix - 4 && y + h > iy - 4 && x < ix + vw + 4 && y < iy + vh + 4;
  for (const o of area.objs) if (inView(o.x, o.y, o.w, o.h)) list.push(o);
  const ents = [{ kind: "player", e: player, sortY: player.y }, { kind: "pet", e: pet, sortY: pet.y }];
  for (const n of npcs) ents.push({ kind: "npc", e: n, sortY: n.y });
  // shadows
  vg.fillStyle = "rgba(34,22,34,0.26)";
  for (const o of list) if (o.shadow) { vg.beginPath(); vg.ellipse(o.fx - ix + 2, o.fy - iy - 1, o.shadow[0], o.shadow[1], 0, 0, 7); vg.fill(); }
  for (const en of ents) { vg.beginPath(); vg.ellipse(en.e.x - ix, en.e.y - iy - 1, en.kind === "pet" ? 7 : 8, 3, 0, 0, 7); vg.fill(); }
  const all = list.concat(ents).sort((a, b) => a.sortY - b.sortY);
  for (const d of all) {
    if (d.kind === "player") { const f = player.moving ? Math.floor(player.dist / 7) % 4 : 0; drawChar(player, chars.isaac, f); }
    else if (d.kind === "npc") { const n = d.e; const f = n.moving ? Math.floor(n.dist / 7) % 4 : 0; drawChar(n, n.sprite, f); }
    else if (d.kind === "pet") { const set = bird[pet.dir]; let im; if (pet.moving) im = set.walk[Math.floor(pet.frame) % 3]; else { const seq = [0, 0, 0, 1, 1, 0, 0, 2, 0, 0, 3, 0, 3, 0]; im = set.idle[state.reduce ? 0 : seq[Math.floor(t * 3) % seq.length]]; } const hop = pet.hop > 0 ? -Math.round(Math.sin(pet.hop * 10) * 3 + 3) : 0; vg.drawImage(im, Math.round(pet.x - 16 - ix), Math.round(pet.y - 22 - iy + hop)); }
    else { const o = d; const fi = o.frames.length > 1 && !state.reduce ? Math.floor(t * (o.rate || 1) + o.phase) % o.frames.length : 0; vg.drawImage(o.frames[fi], o.x - ix, o.y - iy); }
  }
  // weather tint (under the light pass)
  if (state.weather === "monsoon") { vg.fillStyle = "rgba(40,62,96,0.26)"; vg.fillRect(0, 0, vw, vh); }
  if (state.weather === "dust") { vg.fillStyle = "rgba(206,150,92,0.32)"; vg.fillRect(0, 0, vw, vh); }
  // lighting
  if (L.dark > 0) {
    lg.globalCompositeOperation = "source-over"; lg.clearRect(0, 0, vw, vh);
    lg.fillStyle = `rgba(${L.col},${L.dark})`; lg.fillRect(0, 0, vw, vh);
    lg.globalCompositeOperation = "destination-out";
    const flick = (i) => (state.reduce ? 1 : 0.92 + Math.sin(t * 9 + i * 1.7) * 0.05 + Math.sin(t * 23 + i) * 0.03);
    area.lights.forEach((l, i) => { const r = l.r * flick(i); if (!inView(l.x - r, l.y - r, r * 2, r * 2)) return; lg.globalAlpha = 0.85 * L.lamp; lg.drawImage(glowSprite, l.x - r - ix, l.y - r - iy, r * 2, r * 2); });
    // the player carries a little light so they never vanish
    lg.globalAlpha = 0.35 * L.lamp; lg.drawImage(glowSprite, player.x - 40 - ix, player.y - 52 - iy, 80, 80);
    // windows punch through too
    for (const o of list) if (o.glow) { lg.globalAlpha = 0.9 * L.glow; lg.drawImage(o.glow, o.x - ix, o.y - iy); }
    lg.globalAlpha = 1; lg.globalCompositeOperation = "source-over";
    vg.drawImage(lightC, 0, 0);
    if (L.warm) { vg.globalCompositeOperation = "multiply"; vg.fillStyle = `rgba(255,170,110,${L.warm})`; vg.fillRect(0, 0, vw, vh); vg.globalCompositeOperation = "source-over"; }
    // window glow and lamp halos
    for (const o of list) if (o.glow) { vg.globalAlpha = 0.85 * L.glow; vg.drawImage(o.glow, o.x - ix, o.y - iy); }
    vg.globalCompositeOperation = "lighter";
    area.lights.forEach((l, i) => { const r = l.r * 0.7 * flick(i); if (!inView(l.x - r, l.y - r, r * 2, r * 2)) return; vg.globalAlpha = 0.33 * L.lamp; vg.drawImage(l.warm === 1 ? warmGlow : l.warm === 2 ? mmGlow : coolGlow, l.x - r - ix, l.y - r - iy, r * 2, r * 2); });
    vg.globalCompositeOperation = "source-over"; vg.globalAlpha = 1;
  }
  // the El Paso star
  if (area.star) {
    const [scx, scy] = area.starCenter;
    if (inView(scx - 40, scy - 40, 80, 80)) {
      const tw = state.reduce ? 1 : 0.85 + Math.sin(t * 2.2) * 0.15;
      if (L.star > 0.5) { vg.globalCompositeOperation = "lighter"; vg.globalAlpha = 0.28 * L.star; vg.drawImage(warmGlow, scx - 46 - ix, scy - 40 - iy, 92, 80); vg.globalCompositeOperation = "source-over"; }
      vg.globalAlpha = Math.min(1, 0.35 + L.star * 0.65);
      area.star.forEach(([x, y], i) => { vg.fillStyle = i % 2 && L.star > 0.5 ? "#ffe9a0" : "#fffbe6"; vg.fillRect(x - ix, y - iy, 2, 1); if (L.star > 0.5) { vg.globalAlpha = 0.45 * L.star * tw; vg.fillStyle = "#ffd76a"; vg.fillRect(x - ix - 1, y - iy, 3, 1); vg.fillRect(x - ix, y - iy - 1, 1, 3); vg.globalAlpha = Math.min(1, 0.35 + L.star * 0.65); } });
      vg.globalAlpha = 1;
    }
  }
  // rain / dust particles
  if (state.weather === "monsoon") {
    while (rain.length < 160) rain.push({ x: Math.random() * vw, y: Math.random() * vh, v: 220 + Math.random() * 120 });
    vg.strokeStyle = "rgba(190,210,240,0.55)"; vg.lineWidth = 1; vg.beginPath();
    for (const r of rain) { if (!state.reduce) { r.y += r.v * dt; r.x -= r.v * 0.25 * dt; } if (r.y > vh) { r.y = -6; r.x = Math.random() * (vw + 40); } vg.moveTo(Math.round(r.x), Math.round(r.y)); vg.lineTo(Math.round(r.x - 2), Math.round(r.y + 6)); }
    vg.stroke();
    if (!state.reduce) { nextFlash -= dt; if (nextFlash < 0) { flash = 0.35; nextFlash = 9 + Math.random() * 9; } if (flash > 0) { vg.fillStyle = `rgba(235,240,255,${flash})`; vg.fillRect(0, 0, vw, vh); flash -= dt * 1.4; } }
  } else rain.length = 0;
  if (state.weather === "dust") {
    while (dust.length < 120) dust.push({ x: Math.random() * vw, y: Math.random() * vh, v: 60 + Math.random() * 90, s: Math.random() < 0.15 ? 2 : 1 });
    for (const p of dust) { if (!state.reduce) { p.x += p.v * dt; p.y += Math.sin(t * 2 + p.v) * 8 * dt; } if (p.x > vw) { p.x = -4; p.y = Math.random() * vh; } vg.fillStyle = p.s > 1 ? "rgba(240,205,160,0.55)" : "rgba(250,225,190,0.7)"; vg.fillRect(Math.round(p.x), Math.round(p.y), p.s * 2, p.s); }
  } else dust.length = 0;
  // markers: "!" over people, hearts
  for (const n of npcs) { const bob = state.reduce ? 0 : Math.round(Math.sin(t * 4 + n.x) * 1); bubble(Math.round(n.x - ix), Math.round(n.y - 47 - iy + bob)); }
  for (let i = hearts.length - 1; i >= 0; i--) { const h = hearts[i]; h.t += dt; if (h.t > 1.2) { hearts.splice(i, 1); continue; } heart(Math.round(h.x - ix), Math.round(h.y - iy - h.t * 14)); }
  // interact highlight
  if (target && target.kind === "landmark") { const l = target.obj; const a = 0.5 + Math.sin(t * 5) * 0.3; vg.fillStyle = `rgba(255,217,106,${a})`; vg.fillRect(Math.round(l.x - 9 - ix), Math.round(l.y - 2 - iy), 18, 1); vg.fillRect(Math.round(l.x - 7 - ix), Math.round(l.y + 1 - iy), 14, 1); }
  // blit
  sg.fillStyle = "#2b2420"; sg.fillRect(0, 0, screen.width, screen.height);
  sg.imageSmoothingEnabled = false; sg.drawImage(view, -Math.round(fx * scale), -Math.round(fy * scale), vw * scale, vh * scale);
}
function bubble(x, y) { vg.fillStyle = "#1e3a4a"; vg.fillRect(x - 3, y - 1, 7, 9); vg.fillStyle = "#fffbe6"; vg.fillRect(x - 2, y, 5, 7); vg.fillStyle = "#e0703a"; vg.fillRect(x, y + 1, 1, 3); vg.fillRect(x, y + 5, 1, 1); vg.fillStyle = "#1e3a4a"; vg.fillRect(x, y + 8, 1, 1); }
function heart(x, y) { vg.fillStyle = "#e2455a"; for (const [a, b] of [[-2, 0], [-1, -1], [1, -1], [2, 0], [-2, 1], [-1, 0], [0, 0], [1, 0], [2, 1], [-1, 1], [0, 1], [1, 1], [-1, 2], [0, 2], [1, 2], [0, 3]]) vg.fillRect(x + a, y + b, 1, 1); vg.fillStyle = "#ffb3c0"; vg.fillRect(x - 1, y - 1 + 1, 1, 1); }

// ---------------------------------------------------------------- DOM overlays that follow the world
function updateOverlays() {
  const k = scale / dpr; UI.placeSigns((wx, wy) => [Math.round((wx - camX) * k), Math.round((wy - camY) * k)]);
  const pb = $("#pet-btn"); const near = target && target.kind === "pet";
  if (near && !UI.isOpen() && !state.busy) { pb.hidden = false; pb.style.transform = `translate(${Math.round((pet.x - camX) * k)}px, ${Math.round((pet.y - 30 - camY) * k)}px) translate(-50%, -100%)`; } else pb.hidden = true;
  const lab = targetLabel(target); const ab = $("#act-btn");
  ab.disabled = !lab; $("#act-label").textContent = lab || "Interact"; ab.setAttribute("aria-label", lab ? `Press E: ${lab}` : "Interact (nothing nearby)");
}

// ---------------------------------------------------------------- loop
let last = performance.now(); const fpsS = []; let plateT = 0;
function frame(now) {
  const dt = Math.max(0, Math.min(0.05, (now - last) / 1000)); last = now; state.t += dt;
  fpsS.push(dt); if (fpsS.length > 120) fpsS.shift();
  if (!UI.isOpen() && !state.busy) { updatePlayer(dt); }
  updatePet(dt); updateNPCs(dt);
  target = state.busy ? null : findTarget();
  updateCam(dt); render(dt); updateOverlays();
  if ((plateT += dt) > 20) { plateT = 0; updatePlate(); }
  requestAnimationFrame(frame);
}

// ---------------------------------------------------------------- public API (UI + tests)
export const Game = {
  state, areas, art, chars,
  get area() { return area; }, get player() { return player; }, get pet() { return pet; }, get npcs() { return npcs; },
  setTime(v) { state.time = v; store.set("time", v); updatePlate(); },
  setWeather(v) { state.weather = v; store.set("weather", v); updatePlate(); },
  setReduce(v) { state.reduce = !!v; store.set("reduce", state.reduce); document.documentElement.classList.toggle("reduce", state.reduce); },
  setSound(v) { state.sound = !!v; Sound.enable(state.sound); },
  setZoom, rideBus, timeKey,
  backToStart() { if (state.areaId !== "main") rideBus("main"); else { enterArea("main"); UI.toast("Back at Centennial Plaza."); } },
  goToLandmark(id) {
    for (const [aid, a] of Object.entries(areas)) { const l = a.landmarks.find((x) => x.id === id); if (!l) continue; const at = { x: l.x, y: l.y + 10 }; if (aid !== state.areaId) rideBus(aid, at); else { player.x = at.x; player.y = at.y; player.dir = "up"; player.trail = []; pet.x = at.x - 16; pet.y = at.y; UI.toast("You are at " + l.label + ". Press E to open it."); } return true; }
    return false;
  },
  landmarkArea(id) { for (const [aid, a] of Object.entries(areas)) if (a.landmarks.some((x) => x.id === id)) return aid; return null; },
  teleport(aid, x, y) { if (aid !== state.areaId) enterArea(aid, { x, y }); else { player.x = x; player.y = y; } snapCam = true; },
  interact, petBird, get target() { return target ? { kind: target.kind, id: target.obj.id || null, label: targetLabel(target) } : null; },
  fps() { const a = fpsS.reduce((s, v) => s + v, 0) / Math.max(1, fpsS.length); return Math.round(1 / a); },
  get scale() { return scale; },
};
window.__game = Game;

UI.init(Game);
Game.setReduce(state.reduce);
resize(); enterArea("main");
requestAnimationFrame(frame);
document.documentElement.classList.add("ready");
