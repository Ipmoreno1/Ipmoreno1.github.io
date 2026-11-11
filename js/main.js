// Game loop, input, entities, particles, lighting.
import { TILE, clamp, makeCanvas } from "./util.js";
import { buildWorld, paintWorld, BUILDINGS, PLAZA, W, H } from "./world.js";
import { T, SEASON_PAL } from "./textures.js";
import { playerSprite, wolfSprite, peteSprite, oreSprite } from "./sprites.js";
import { LANDMARKS, PETE_LINES, PROFILE } from "./data.js";
import { initUI, openPanel, closePanel, isOpen, toast, setPrompt, setDialog, panelLabel } from "./ui.js";
import { setSound, sfx } from "./audio.js";

const $ = (s) => document.querySelector(s);
const canvas = $("#game");
const ctx = canvas.getContext("2d", { alpha: false });
const [light, lctx] = makeCanvas(1, 1);
const LM = Object.fromEntries(LANDMARKS.map((l) => [l.id, l]));
const RECTS = Object.fromEntries([...BUILDINGS, PLAZA].map((b) => [b.id, b]));

// ---------------------------------------------------------------- state
const saved = (() => { try { return JSON.parse(localStorage.getItem("utepmc") || "{}"); } catch { return {}; } })();
const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
const state = {
  time: saved.time || "day", season: saved.season || "summer", sound: !!saved.sound,
  reduced: saved.reduced ?? !!prefersReduced, zoom: 0,
  visited: new Set(saved.visited || []), adv: new Set(saved.adv || []), opened: new Set(),
};
const save = () => { try { localStorage.setItem("utepmc", JSON.stringify({ time: state.time, season: state.season, sound: state.sound, reduced: state.reduced, visited: [...state.visited], adv: [...state.adv] })); } catch {} };

const world = buildWorld();
let painted = paintWorld(world, state.season);
const torches = world.objects.filter((o) => o.type === "torch");
const pits = world.objects.filter((o) => o.type === "firepit");
const ores = world.objects.filter((o) => o.type === "ore");

const player = { x: 47 * TILE, y: 50 * TILE + 8, dir: "up", frame: 0, t: 0, moving: false, swing: 0 };
const wolf = { x: player.x - 18, y: player.y + 8, left: false, frame: 0, t: 0, sit: true, idle: 0 };
const pete = { x: 50 * TILE, y: 45 * TILE + 10, hx: 50 * TILE, line: -1, t: 0, talking: false };
const cam = { x: 0, y: 0 };
let particles = [], weather = [], scale = 3, dpr = 1, time = 0, started = false;

// ---------------------------------------------------------------- sizing
function resize() {
  dpr = Math.min(window.devicePixelRatio || 1, 3);
  canvas.width = Math.round(innerWidth * dpr); canvas.height = Math.round(innerHeight * dpr);
  light.width = canvas.width; light.height = canvas.height;
  const base = Math.max(2, Math.round(Math.min(canvas.width / (24 * TILE), canvas.height / (15 * TILE))));
  scale = Math.max(1, base + state.zoom);
  ctx.imageSmoothingEnabled = false; lctx.imageSmoothingEnabled = false;
}
addEventListener("resize", resize);
resize();

// ---------------------------------------------------------------- input
const keys = new Set();
const isTyping = (e) => /INPUT|TEXTAREA|SELECT/.test(e.target.tagName);
addEventListener("keydown", (e) => {
  if (isTyping(e)) return;
  const k = e.key.toLowerCase();
  if (!started && ["enter", " ", "e", "w", "a", "s", "d", "arrowup", "arrowdown", "arrowleft", "arrowright"].includes(k) && !$("#intro").hidden) { e.preventDefault(); start(); return; }
  if (isOpen()) return;
  if (["arrowup", "arrowdown", "arrowleft", "arrowright", " "].includes(k)) e.preventDefault();
  if (e.repeat && (k === "e" || k === "enter" || k === " ")) return;
  keys.add(k);
  if (k === "e" || k === "enter") { if (e.target.tagName === "BUTTON" || e.target.tagName === "A") { if (k === "enter") return; } interact(); }
  if (k === " ") swing();
  if (k === "p") openPanel("projects");
  if (k === "m") openPanel("map");
  if (k === "h" || k === "?") openPanel("help");
  if (k === "-" ) { state.zoom = Math.max(-3, state.zoom - 1); resize(); }
  if (k === "=" || k === "+") { state.zoom = Math.min(2, state.zoom + 1); resize(); }
});
addEventListener("keyup", (e) => keys.delete(e.key.toLowerCase()));
addEventListener("blur", () => keys.clear());
// mobile pad
document.querySelectorAll("[data-pad]").forEach((b) => {
  const k = b.dataset.pad;
  const down = (e) => { e.preventDefault(); b.setPointerCapture?.(e.pointerId); if (!started) start(); if (k === "a") interact(); else if (k === "b") swing(); else keys.add(k); };
  const up = () => keys.delete(k);
  b.addEventListener("pointerdown", down); b.addEventListener("pointerup", up); b.addEventListener("pointercancel", up); b.addEventListener("pointerleave", up);
});
$("#prompt").addEventListener("click", () => interact());

// ---------------------------------------------------------------- toggles
const TIMES = ["day", "dusk", "night"], SEASONS = ["summer", "autumn", "winter"];
function syncToggles() {
  $("#t-time").textContent = "Time: " + cap(state.time);
  $("#t-season").textContent = "Season: " + cap(state.season);
  $("#t-sound").textContent = "Sound: " + (state.sound ? "On" : "Off");
  $("#t-sound").setAttribute("aria-pressed", state.sound);
  $("#t-motion").textContent = "Motion: " + (state.reduced ? "Reduced" : "Full");
  $("#t-motion").setAttribute("aria-pressed", state.reduced);
  document.documentElement.classList.toggle("reduced", state.reduced);
}
const cap = (s) => s[0].toUpperCase() + s.slice(1);
$("#t-time").addEventListener("click", () => { state.time = TIMES[(TIMES.indexOf(state.time) + 1) % 3]; syncToggles(); save(); });
$("#t-season").addEventListener("click", () => { state.season = SEASONS[(SEASONS.indexOf(state.season) + 1) % 3]; painted = paintWorld(world, state.season); buildMini(); weather = []; syncToggles(); save(); });
$("#t-sound").addEventListener("click", () => { state.sound = !state.sound; setSound(state.sound); sfx.open(); syncToggles(); save(); });
$("#t-motion").addEventListener("click", () => { state.reduced = !state.reduced; weather = []; syncToggles(); save(); });
$("#t-help").addEventListener("click", () => openPanel("help"));
syncToggles();
if (state.sound) setSound(true); // will only produce audio after a user gesture

// ---------------------------------------------------------------- UI hooks
initUI({
  onOpen(key) {
    if (!state.opened.has(key)) { state.opened.add(key); xpBurst(player.x, player.y - 10, 7); sfx.xp(); }
    setDialog(null);
  },
  onClose() { keys.clear(); },
  onTravel(id) { teleport(id); },
  visited: () => state.visited,
  drawMap: (c) => drawBigMap(c),
});

function start() {
  if (started) return;
  started = true; $("#intro").hidden = true; canvas.focus();
  if (!state.adv.has("start")) { state.adv.add("start"); save(); setTimeout(() => toast("Welcome, Miner!", "Walk up to Pete in the plaza to say hi"), 400); }
}
$("#intro-start").addEventListener("click", start);
if (saved.visited?.length) { /* returning visitor: keep the title card but it is one click */ }

// ---------------------------------------------------------------- collisions
function solidAt(px, py) {
  const tx = Math.floor(px / TILE), ty = Math.floor(py / TILE);
  if (tx < 0 || ty < 0 || tx >= W || ty >= H) return true;
  return world.solid[ty][tx] === 1;
}
function blocked(x, y) {
  // feet hitbox 10x6
  return solidAt(x - 5, y - 6) || solidAt(x + 4, y - 6) || solidAt(x - 5, y - 1) || solidAt(x + 4, y - 1);
}

// ---------------------------------------------------------------- interactions
function nearestTarget() {
  const px = player.x, py = player.y - 4;
  if (Math.hypot(pete.x - px, pete.y - py) < 26) return { kind: "pete" };
  let best = null, bd = 1e9;
  for (const b of BUILDINGS) {
    const x0 = b.x * TILE - 14, y0 = b.y * TILE - 14, x1 = (b.x + b.w) * TILE + 14, y1 = (b.y + b.h) * TILE + 20;
    if (px > x0 && px < x1 && py > y0 && py < y1) {
      const cx = clamp(px, b.x * TILE, (b.x + b.w) * TILE), cy = clamp(py, b.y * TILE, (b.y + b.h) * TILE);
      const d = Math.hypot(px - cx, py - cy);
      if (d < bd) { bd = d; best = { kind: "landmark", id: b.id }; }
    }
  }
  if (best) return best;
  const dx = (px / TILE - 46.5) / 9, dy = (py / TILE - 40.5) / 5.6;
  const inPlaza = dx * dx + dy * dy < 1;
  const fv = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] }[player.dir];
  const facingWolf = (wolf.x - player.x) * fv[0] + (wolf.y - player.y) * fv[1] > 4;
  if (Math.hypot(wolf.x - px, wolf.y - py) < 24 && facingWolf) return { kind: "wolf" };
  if (inPlaza) return { kind: "landmark", id: "plaza" };
  if (Math.hypot(wolf.x - px, wolf.y - py) < 22) return { kind: "wolf" };
  return null;
}
function interact() {
  if (!started) { start(); return; }
  if (isOpen()) return;
  const t = nearestTarget();
  if (!t) return;
  if (t.kind === "pete") return talkPete();
  if (t.kind === "wolf") return petWolf();
  if (t.kind === "landmark") enterLandmark(t.id);
}
function enterLandmark(id) {
  const l = LM[id]; if (!l) return;
  const first = !state.visited.has(id);
  const pnl = l.panel;
  openPanel(pnl.type, pnl.id);
  if (first) {
    state.visited.add(id); save();
    const b = RECTS[id];
    xpBurst((b.x + b.w / 2) * TILE, (b.y + b.h) * TILE, 12);
    toast("Advancement Made!", l.adv);
    sfx.adv();
    updateXP();
    if (state.visited.size === LANDMARKS.length && !state.adv.has("all")) {
      state.adv.add("all"); save();
      setTimeout(() => { toast("Advancement Made!", "Hire This Miner: you visited every landmark"); sfx.adv(); }, 1800);
    }
  }
}
function talkPete() {
  pete.talking = true;
  pete.line = (pete.line + 1) % PETE_LINES.length;
  setDialog("Pete", PETE_LINES[pete.line]);
  sfx.talk();
  if (!state.adv.has("pete")) { state.adv.add("pete"); save(); toast("Advancement Made!", "Howdy, Pete"); }
}
function petWolf() {
  for (let i = 0; i < 6; i++) particles.push({ type: "heart", x: wolf.x + (Math.random() - 0.5) * 12, y: wolf.y - 10, vx: (Math.random() - 0.5) * 10, vy: -18 - Math.random() * 14, life: 1.2, max: 1.2 });
  wolf.sit = true; wolf.idle = 0;
  sfx.pet();
  if (!state.adv.has("wolf")) { state.adv.add("wolf"); save(); toast("Advancement Made!", "Good Boy: you pet Nugget the wolf"); }
}
function swing() {
  if (!started || isOpen() || player.swing > 0) return;
  player.swing = 0.22;
  const d = { up: [0, -14], down: [0, 10], left: [-14, -3], right: [14, -3] }[player.dir];
  const hx = player.x + d[0], hy = player.y - 3 + d[1];
  for (const o of ores) {
    if (o.broken) continue;
    const cx = o.x * TILE + 8, cy = o.y * TILE + 8;
    if (Math.abs(hx - cx) < 14 && Math.abs(hy - cy) < 14) {
      o.hits = (o.hits || 0) + 1;
      blockParticles(cx, cy, o.kind, o.hits >= 3 ? 18 : 5);
      if (o.hits >= 3) {
        o.broken = time; o.hits = 0; world.solid[o.y][o.x] = 0; sfx.brk();
        if (!state.adv.has("ore")) { state.adv.add("ore"); save(); toast("Advancement Made!", "Paydirt: you mined your first ore"); }
      } else sfx.hit();
      return;
    }
  }
}
function teleport(id) {
  const b = RECTS[id]; if (!b) return;
  let x = (b.x + b.w / 2) * TILE, y = (b.y + b.h) * TILE + 14;
  if (id === "plaza") { x = 46.5 * TILE + 8; y = 44 * TILE; }
  if (id === "pick") { x = 46.5 * TILE + 8; y = 32 * TILE + 14; }
  if (id === "sunbowl") { x = 17 * TILE; y = 27 * TILE + 13; }
  portal(player.x, player.y);
  pete.talking = false; setDialog(null);
  player.x = x; player.y = y; player.dir = "up";
  wolf.x = x - 16; wolf.y = y + 6;
  portal(x, y);
  snapCam();
  canvas.focus();
}

// ---------------------------------------------------------------- particles
const ORE_P = { copper: ["#e07a3a", "#6e6e6e", "#8a8a8a"], gold: ["#f2cf3a", "#6e6e6e", "#8a8a8a"], iron: ["#d8b49a", "#6e6e6e", "#8a8a8a"] };
function blockParticles(x, y, kind, n) {
  for (let i = 0; i < n; i++) particles.push({ type: "block", x, y, vx: (Math.random() - 0.5) * 80, vy: -30 - Math.random() * 60, g: 220, life: 0.7, max: 0.7, color: ORE_P[kind][i % 3], size: 2 + (i % 2) });
}
function xpBurst(x, y, n) {
  for (let i = 0; i < n; i++) particles.push({ type: "xp", x: x + (Math.random() - 0.5) * 30, y: y + (Math.random() - 0.5) * 16, vx: (Math.random() - 0.5) * 60, vy: -40 - Math.random() * 30, life: 1.6, max: 1.6, seed: Math.random() * 6 });
}
function portal(x, y) {
  for (let i = 0; i < 16; i++) particles.push({ type: "block", x: x + (Math.random() - 0.5) * 14, y: y - Math.random() * 20, vx: (Math.random() - 0.5) * 30, vy: -20 - Math.random() * 30, g: -10, life: 0.8, max: 0.8, color: i % 2 ? "#b25cff" : "#e3b6ff", size: 2 });
}

const TOUCH = window.matchMedia?.("(pointer: coarse)").matches;
const KEY = () => (TOUCH ? "A" : "E");
// ---------------------------------------------------------------- update
let stepT = 0;
function update(dt) {
  time += dt;
  const paused = isOpen() || !started;
  // player
  let mx = 0, my = 0;
  if (!paused) {
    if (keys.has("a") || keys.has("arrowleft") || keys.has("left")) mx -= 1;
    if (keys.has("d") || keys.has("arrowright") || keys.has("right")) mx += 1;
    if (keys.has("w") || keys.has("arrowup") || keys.has("up")) my -= 1;
    if (keys.has("s") || keys.has("arrowdown") || keys.has("down")) my += 1;
  }
  player.moving = !!(mx || my);
  if (player.moving) {
    const len = Math.hypot(mx, my), sp = (keys.has("shift") ? 125 : 72) * dt;
    const vx = (mx / len) * sp, vy = (my / len) * sp;
    if (!blocked(player.x + vx, player.y)) player.x += vx;
    if (!blocked(player.x, player.y + vy)) player.y += vy;
    if (Math.abs(mx) > Math.abs(my)) player.dir = mx < 0 ? "left" : "right"; else player.dir = my < 0 ? "up" : "down";
    player.t += dt * (keys.has("shift") ? 11 : 7);
    player.frame = [0, 1, 0, 2][Math.floor(player.t) % 4];
    stepT += dt; if (stepT > 0.32) { stepT = 0; sfx.step(); }
    if (pete.talking) { pete.talking = false; setDialog(null); }
  } else { player.frame = 0; }
  if (player.swing > 0) player.swing -= dt;
  // wolf follows
  const tx = player.x + (player.dir === "left" ? 18 : -18), ty = player.y + 6;
  const dx = tx - wolf.x, dy = ty - wolf.y, dist = Math.hypot(dx, dy);
  if (dist > 400) { wolf.x = tx; wolf.y = ty; }
  else if (dist > 14) {
    const sp = Math.min(dist * 3, 140) * dt;
    const nx = wolf.x + (dx / dist) * sp, ny = wolf.y + (dy / dist) * sp;
    if (!blocked(nx, wolf.y) || dist > 80) wolf.x = nx;
    if (!blocked(wolf.x, ny) || dist > 80) wolf.y = ny;
    wolf.left = dx < 0; wolf.sit = false; wolf.idle = 0;
    wolf.t += dt * 9; wolf.frame = Math.floor(wolf.t) % 2;
  } else { wolf.idle += dt; if (wolf.idle > 0.8) wolf.sit = true; }
  // pete idles back and forth unless talking
  if (!pete.talking && !state.reduced) { pete.t += dt; pete.x = pete.hx + Math.sin(pete.t * 0.5) * 10; }
  if (pete.talking && Math.hypot(pete.x - player.x, pete.y - player.y) > 50) { pete.talking = false; setDialog(null); }
  // ore respawn
  for (const o of ores) if (o.broken && time - o.broken > 25) {
    const px = Math.floor(player.x / TILE), py = Math.floor((player.y - 3) / TILE);
    if (px !== o.x || py !== o.y) { o.broken = 0; world.solid[o.y][o.x] = 1; }
  }
  // particles
  for (const p of particles) {
    p.life -= dt;
    if (p.type === "xp" && p.life < p.max - 0.45) {
      // home in on the player
      const ddx = player.x - p.x, ddy = player.y - 10 - p.y, d = Math.hypot(ddx, ddy) || 1;
      p.vx += (ddx / d) * 600 * dt; p.vy += (ddy / d) * 600 * dt; p.vx *= 0.9; p.vy *= 0.9;
      if (d < 6) p.life = 0;
    }
    p.vy += (p.g || 0) * dt; p.x += p.vx * dt; p.y += p.vy * dt;
  }
  particles = particles.filter((p) => p.life > 0);
  // camera
  const vw = canvas.width / scale, vh = canvas.height / scale;
  const txc = clamp(player.x - vw / 2, 0, Math.max(0, W * TILE - vw)), tyc = clamp(player.y - 10 - vh / 2, 0, Math.max(0, H * TILE - vh));
  const k = state.reduced ? 1 : 1 - Math.pow(0.0005, dt);
  cam.x += (txc - cam.x) * k; cam.y += (tyc - cam.y) * k;
  if (vw > W * TILE) cam.x = (W * TILE - vw) / 2;
  if (vh > H * TILE) cam.y = (H * TILE - vh) / 2;
  // weather
  if (!state.reduced && state.season !== "summer") {
    const want = state.season === "winter" ? 90 : 26;
    while (weather.length < want) weather.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height - canvas.height, v: 20 + Math.random() * 40, s: Math.random() * 6, c: Math.floor(Math.random() * 4) });
    for (const w of weather) { w.y += w.v * dt * dpr; w.x += Math.sin(time * 1.5 + w.s) * 12 * dt * dpr; if (w.y > canvas.height) { w.y = -10; w.x = Math.random() * canvas.width; } }
  }
  // prompt
  if (!paused) {
    const t = nearestTarget();
    if (!t) setPrompt(null);
    else if (t.kind === "pete") setPrompt(`<kbd>${KEY()}</kbd> Talk to <b>Pete</b>`);
    else if (t.kind === "wolf") setPrompt(`<kbd>${KEY()}</kbd> Pet <b>Nugget</b>`);
    else { const l = LM[t.id]; setPrompt(`<kbd>${KEY()}</kbd> Enter <b>${l.name}</b><small>${panelLabel(l)}</small>`); }
  } else setPrompt(null);
}
function snapCam() {
  const vw = canvas.width / scale, vh = canvas.height / scale;
  cam.x = clamp(player.x - vw / 2, 0, Math.max(0, W * TILE - vw)); cam.y = clamp(player.y - 10 - vh / 2, 0, Math.max(0, H * TILE - vh));
}

// ---------------------------------------------------------------- render
function render() {
  const s = scale, ox = Math.round(cam.x * s), oy = Math.round(cam.y * s);
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.fillStyle = "#b89a6e"; ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.setTransform(s, 0, 0, s, -ox, -oy);
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(painted.canvas, 0, 0);
  const vx0 = Math.floor(cam.x / TILE) - 1, vy0 = Math.floor(cam.y / TILE) - 1;
  const vx1 = vx0 + Math.ceil(canvas.width / s / TILE) + 3, vy1 = vy0 + Math.ceil(canvas.height / s / TILE) + 3;
  // water shimmer
  if (!state.reduced) {
    ctx.fillStyle = state.season === "winter" ? "rgba(255,255,255,0.35)" : "rgba(200,230,255,0.45)";
    for (let y = Math.max(0, vy0); y < Math.min(H, vy1); y++) for (let x = Math.max(0, vx0); x < Math.min(W, vx1); x++) {
      if (world.tiles[y][x] !== T.WATER) continue;
      const o = Math.floor((time * 6 + x * 5 + y * 3) % 16);
      ctx.fillRect(x * TILE + o, y * TILE + ((x + y) % 3) * 5 + 2, 4, 1);
    }
  }
  // ores
  for (const o of ores) if (!o.broken && o.x >= vx0 && o.x <= vx1 && o.y >= vy0 && o.y <= vy1) {
    ctx.fillStyle = "rgba(0,0,0,0.2)"; ctx.fillRect(o.x * TILE + 2, o.y * TILE + 14, 14, 3);
    ctx.drawImage(oreSprite(o.kind), o.x * TILE, o.y * TILE);
    if (o.hits) { ctx.fillStyle = "#222"; ctx.fillRect(o.x * TILE + 5, o.y * TILE + 5, 1, 5); ctx.fillRect(o.x * TILE + 6, o.y * TILE + 9, 4, 1); if (o.hits > 1) ctx.fillRect(o.x * TILE + 10, o.y * TILE + 4, 1, 6); }
  }
  // flames
  const fl = state.reduced ? 0 : Math.floor(time * 10);
  for (const t of torches) {
    const X = t.x * TILE + 7, Y = t.y * TILE + 3;
    ctx.fillStyle = "#ffcf3a"; ctx.fillRect(X - 1, Y - 2, 4, 4);
    ctx.fillStyle = (fl + t.x) % 3 ? "#ff8a1c" : "#fff2a0"; ctx.fillRect(X, Y - 3 + ((fl + t.y) % 2), 2, 2);
  }
  for (const p of pits) {
    const X = p.x * TILE, Y = p.y * TILE;
    ctx.fillStyle = "#ff8a1c"; ctx.fillRect(X + 4, Y + 3 + ((fl) % 2), 8, 6);
    ctx.fillStyle = "#ffd23a"; ctx.fillRect(X + 6, Y + 1 + ((fl + 1) % 2), 4, 6);
  }
  // entities, y-sorted
  const ents = [
    { y: player.y, draw: drawPlayer },
    { y: wolf.y, draw: drawWolf },
    { y: pete.y, draw: drawPete },
  ].sort((a, b) => a.y - b.y);
  for (const e of ents) e.draw();
  // particles
  for (const p of particles) {
    const a = clamp(p.life / p.max, 0, 1);
    if (p.type === "block") { ctx.globalAlpha = a; ctx.fillStyle = p.color; ctx.fillRect(Math.round(p.x), Math.round(p.y), p.size, p.size); }
    else if (p.type === "heart") { ctx.globalAlpha = a; drawHeart(Math.round(p.x), Math.round(p.y)); }
    else if (p.type === "xp") {
      ctx.globalAlpha = 1; const pulse = (Math.sin(time * 12 + p.seed) + 1) / 2;
      ctx.fillStyle = "#2f7a12"; ctx.fillRect(Math.round(p.x) - 2, Math.round(p.y) - 2, 5, 5);
      ctx.fillStyle = pulse > 0.5 ? "#c8f53a" : "#7fe032"; ctx.fillRect(Math.round(p.x) - 1, Math.round(p.y) - 1, 3, 3);
      ctx.fillStyle = "#fffbc0"; ctx.fillRect(Math.round(p.x) - 1, Math.round(p.y) - 1, 1, 1);
    }
  }
  ctx.globalAlpha = 1;
  // lighting
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  if (state.time !== "day") drawLighting(ox, oy, s);
  drawLabels(ox, oy, s);
  // weather (screen space)
  if (weather.length && !state.reduced) {
    const px = Math.max(2, Math.round(s * 0.8));
    for (const w of weather) {
      ctx.fillStyle = state.season === "winter" ? "rgba(255,255,255,0.9)" : ["#d0661f", "#e3a02c", "#b8401f", "#9e3b1c"][w.c];
      ctx.fillRect(Math.round(w.x), Math.round(w.y), px * (state.season === "winter" ? 1 : 2), px);
    }
  }
  drawMini();
}
function drawPlayer() {
  ctx.fillStyle = "rgba(0,0,0,0.25)"; ctx.fillRect(Math.round(player.x) - 6, Math.round(player.y) - 2, 12, 3);
  const spr = playerSprite(player.dir, player.frame, player.swing > 0);
  ctx.drawImage(spr, Math.round(player.x) - 8, Math.round(player.y) - 21);
}
function drawWolf() {
  ctx.fillStyle = "rgba(0,0,0,0.22)"; ctx.fillRect(Math.round(wolf.x) - 7, Math.round(wolf.y) - 2, 14, 3);
  ctx.drawImage(wolfSprite(wolf.left, wolf.frame, wolf.sit), Math.round(wolf.x) - 8, Math.round(wolf.y) - 11);
}
function drawPete() {
  ctx.fillStyle = "rgba(0,0,0,0.25)"; ctx.fillRect(Math.round(pete.x) - 6, Math.round(pete.y) - 2, 12, 3);
  ctx.drawImage(peteSprite(), Math.round(pete.x) - 8, Math.round(pete.y) - 19);
  if (!state.adv.has("pete")) { // floating "!" so people notice him
    const bob = state.reduced ? 0 : Math.round(Math.sin(time * 4) * 1.5);
    ctx.fillStyle = "#1d1d1d"; ctx.fillRect(Math.round(pete.x) - 2, Math.round(pete.y) - 31 + bob, 4, 8);
    ctx.fillStyle = "#ffd23a"; ctx.fillRect(Math.round(pete.x) - 1, Math.round(pete.y) - 30 + bob, 2, 4); ctx.fillRect(Math.round(pete.x) - 1, Math.round(pete.y) - 25 + bob, 2, 1);
  }
}
function drawHeart(x, y) {
  ctx.fillStyle = "#e0303a";
  ctx.fillRect(x, y + 1, 2, 2); ctx.fillRect(x + 3, y + 1, 2, 2); ctx.fillRect(x, y + 2, 5, 2); ctx.fillRect(x + 1, y + 4, 3, 1); ctx.fillRect(x + 2, y + 5, 1, 1);
  ctx.fillStyle = "#ff9aa2"; ctx.fillRect(x + 1, y + 1, 1, 1);
}
function drawLighting(ox, oy, s) {
  const night = state.time === "night";
  lctx.globalCompositeOperation = "source-over";
  lctx.clearRect(0, 0, light.width, light.height);
  lctx.fillStyle = night ? "rgba(6,10,36,0.8)" : "rgba(70,30,70,0.36)";
  lctx.fillRect(0, 0, light.width, light.height);
  lctx.globalCompositeOperation = "destination-out";
  const flick = state.reduced ? 1 : 0.93 + Math.sin(time * 13) * 0.04 + Math.sin(time * 7.3) * 0.03;
  const sources = [];
  for (const t of torches) sources.push([t.x * TILE + 8, t.y * TILE + 2, 40 * flick]);
  for (const p of pits) sources.push([p.x * TILE + 8, p.y * TILE + 6, 50 * flick]);
  sources.push([player.x, player.y - 16, 38]);
  for (const [wx, wy, ww, wh] of painted.windows) sources.push([wx + ww / 2, wy + wh / 2, 16]);
  if (night) sources.push([46.5 * TILE + 8, 30.5 * TILE, 40]);
  const vw = light.width, vh = light.height;
  for (const [x, y, r] of sources) {
    const sx = x * s - ox, sy = y * s - oy, sr = r * s;
    if (sx < -sr || sy < -sr || sx > vw + sr || sy > vh + sr) continue;
    const g = lctx.createRadialGradient(sx, sy, 0, sx, sy, sr);
    g.addColorStop(0, "rgba(0,0,0,0.95)"); g.addColorStop(0.4, "rgba(0,0,0,0.55)"); g.addColorStop(1, "rgba(0,0,0,0)");
    lctx.fillStyle = g; lctx.fillRect(sx - sr, sy - sr, sr * 2, sr * 2);
  }
  ctx.drawImage(light, 0, 0);
  // warm glow + lit windows + glowing pick + star on the mountain
  ctx.globalCompositeOperation = "lighter";
  for (const t of torches) glow(t.x * TILE + 8, t.y * TILE + 2, 30 * flick, "rgba(255,150,40,0.40)", ox, oy, s);
  for (const p of pits) glow(p.x * TILE + 8, p.y * TILE + 6, 30 * flick, "rgba(255,130,30,0.32)", ox, oy, s);
  ctx.globalCompositeOperation = "source-over";
  ctx.fillStyle = night ? "rgba(255,214,120,0.85)" : "rgba(255,214,120,0.45)";
  for (const [wx, wy, ww, wh] of painted.windows) ctx.fillRect(wx * s - ox, wy * s - oy, ww * s, wh * s);
  if (night) {
    // LED pick sculpture: blue and orange
    const pk = RECTS.pick;
    for (let i = 0; i < 11; i++) { ctx.fillStyle = i % 2 ? "#ff8200" : "#3a8dff"; ctx.fillRect((pk.x * TILE + 4 + i * 4) * s - ox, (pk.y * TILE + 5 + Math.abs(5 - i) * 0.9) * s - oy, s * 2, s * 2); }
    // a star of lights up on the mountain
    const cx = 70 * TILE, cy = 3 * TILE + 4;
    for (let i = 0; i < 10; i++) {
      const a = -Math.PI / 2 + i * Math.PI / 5, r = i % 2 ? 7 : 16;
      for (let k = 0; k <= 4; k++) {
        const a2 = -Math.PI / 2 + (i + 1) * Math.PI / 5, r2 = (i + 1) % 2 ? 7 : 16;
        const x = cx + Math.cos(a) * r * (1 - k / 4) + Math.cos(a2) * r2 * (k / 4), y = cy + Math.sin(a) * r * (1 - k / 4) + Math.sin(a2) * r2 * (k / 4);
        ctx.fillStyle = "#fff6c8"; ctx.fillRect(Math.round(x * s - ox), Math.round(y * s - oy), s, s);
      }
    }
  }
}
function glow(x, y, r, col, ox, oy, s) {
  const sx = x * s - ox, sy = y * s - oy, sr = r * s;
  if (sx < -sr || sy < -sr || sx > canvas.width + sr || sy > canvas.height + sr) return;
  const g = ctx.createRadialGradient(sx, sy, 0, sx, sy, sr);
  g.addColorStop(0, col); g.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = g; ctx.fillRect(sx - sr, sy - sr, sr * 2, sr * 2);
}
function drawLabels(ox, oy, s) {
  const fs = Math.round(13 * dpr);
  ctx.font = `bold ${fs}px ui-monospace, "Cascadia Mono", Menlo, Consolas, monospace`;
  ctx.textAlign = "center"; ctx.textBaseline = "middle";
  const items = [...BUILDINGS.map((b) => [b.id, (b.x + b.w / 2) * TILE, b.y * TILE - 7]), ["plaza", 46.5 * TILE + 8, 37.6 * TILE]];
  for (const [id, x, y] of items) {
    const l = LM[id]; if (!l) continue;
    const sx = x * s - ox, sy = y * s - oy;
    if (sx < -200 || sy < -40 || sx > canvas.width + 200 || sy > canvas.height + 40) continue;
    const txt = l.name + (state.visited.has(id) ? "  \u2713" : "");
    const w = ctx.measureText(txt).width + 12 * dpr, h = fs + 8 * dpr;
    ctx.fillStyle = "rgba(16,12,10,0.72)"; ctx.fillRect(Math.round(sx - w / 2), Math.round(sy - h / 2), Math.round(w), Math.round(h));
    ctx.fillStyle = state.visited.has(id) ? "#9be37a" : "#ffffff";
    ctx.fillText(txt, Math.round(sx), Math.round(sy + 1));
  }
  // mountain label
  const mx = 30 * TILE * s - ox, my = 2.2 * TILE * s - oy;
  if (my > -20) { ctx.font = `italic bold ${fs}px ui-monospace, Menlo, Consolas, monospace`; ctx.fillStyle = "rgba(255,245,225,0.8)"; ctx.fillText("Franklin Mountains", mx, my); }
}

// ---------------------------------------------------------------- minimap
let mini, mctx;
const TILE_COL = { [T.GRASS]: "#6aa83a", [T.FLOWER]: "#6aa83a", [T.LAWN]: "#7cc046", [T.SAND]: "#d9c08a", [T.FOOTHILL]: "#b89a6e", [T.ROCK]: "#7a6656", [T.COBBLE]: "#8d8d8d", [T.PAVE]: "#d6bd92", [T.WATER]: "#3a78d8", [T.BRIDGE]: "#8c96a0", [T.GRAVEL]: "#9a9590", [T.DIRT]: "#8b5e3c" };
function buildMini() {
  [mini, mctx] = makeCanvas(W, H);
  const winter = state.season === "winter";
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    let c = TILE_COL[world.tiles[y][x]];
    if (winter && (world.tiles[y][x] === T.GRASS || world.tiles[y][x] === T.FLOWER || world.tiles[y][x] === T.LAWN)) c = "#e8eef4";
    mctx.fillStyle = c; mctx.fillRect(x, y, 1, 1);
  }
  for (const o of world.objects) if (o.type === "oak" || o.type === "spruce") { mctx.fillStyle = "#2f6a24"; mctx.fillRect(o.x, o.y, 2, 2); }
  for (const b of BUILDINGS) { mctx.fillStyle = b.kind === "stadium" ? "#a6a6a6" : "#7b2a20"; mctx.fillRect(b.x, b.y, b.w, b.h); mctx.fillStyle = "#4a3d36"; if (b.kind === "bhutan") mctx.fillRect(b.x, b.y, b.w, Math.round(b.h * 0.4)); }
}
buildMini();
const miniEl = $("#minimap"), miniCtx = miniEl.getContext("2d");
let miniFrame = 0;
function drawMini() {
  if ((miniFrame++ % 6) || getComputedStyle(miniEl).display === "none") return;
  const w = miniEl.width, h = miniEl.height;
  miniCtx.imageSmoothingEnabled = false;
  miniCtx.drawImage(mini, 0, 0, w, h);
  const sx = w / W, sy = h / H;
  miniCtx.strokeStyle = "rgba(255,255,255,0.9)"; miniCtx.lineWidth = 1;
  miniCtx.strokeRect(cam.x / TILE * sx + 0.5, cam.y / TILE * sy + 0.5, canvas.width / scale / TILE * sx, canvas.height / scale / TILE * sy);
  miniCtx.fillStyle = "#ff8200"; miniCtx.fillRect(player.x / TILE * sx - 2, player.y / TILE * sy - 3, 5, 5);
  miniCtx.fillStyle = "#000"; miniCtx.fillRect(player.x / TILE * sx - 1, player.y / TILE * sy - 2, 3, 3);
}
function drawBigMap(c) {
  if (!c) return;
  const g = c.getContext("2d"); g.imageSmoothingEnabled = false;
  g.drawImage(mini, 0, 0, c.width, c.height);
  const sx = c.width / W, sy = c.height / H;
  g.font = "bold 10px ui-monospace, Menlo, Consolas, monospace"; g.textAlign = "center"; g.textBaseline = "middle";
  LANDMARKS.forEach((l, i) => {
    const b = RECTS[l.id]; const x = (b.x + b.w / 2) * sx, y = (b.y + b.h / 2) * sy;
    g.fillStyle = state.visited.has(l.id) ? "#3aa63a" : "#1d1d1d"; g.fillRect(x - 8, y - 8, 16, 16);
    g.fillStyle = "#fff"; g.fillText(String(i + 1), x, y + 1);
  });
  g.fillStyle = "#ff8200"; g.fillRect(player.x / TILE * sx - 4, player.y / TILE * sy - 4, 8, 8);
  g.strokeStyle = "#000"; g.strokeRect(player.x / TILE * sx - 4, player.y / TILE * sy - 4, 8, 8);
}

// ---------------------------------------------------------------- HUD
function updateXP() {
  const n = state.visited.size, tot = LANDMARKS.length;
  $("#xp-fill").style.width = (n / tot) * 100 + "%";
  $("#xp-level").textContent = n;
  $("#xp").setAttribute("aria-valuenow", n);
  $("#xp-label").textContent = `${n}/${tot} landmarks visited`;
}
updateXP();

// ---------------------------------------------------------------- loop
snapCam();
let last = performance.now();
function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  update(dt); render();
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

// test/debug hook (used by the automated screenshot script; harmless for visitors)
window.__game = {
  findOre(checkBroken) {
    if (checkBroken) return ores.filter((o) => o.broken).length;
    for (const o of ores) {
      if (!world.solid[o.y][o.x - 1] && !world.solid[o.y + 1]?.[o.x - 1]) {
        player.x = (o.x - 1) * TILE + 8; player.y = o.y * TILE + 14; player.dir = "right"; snapCam();
        return { x: o.x, y: o.y, kind: o.kind };
      }
    }
    return null;
  },
  teleport, player, state, openPanel, closePanel, start, setTime: (t) => { state.time = t; syncToggles(); }, setSeason: (se) => { state.season = se; painted = paintWorld(world, se); buildMini(); weather = []; syncToggles(); }, setZoom: (z) => { state.zoom = z; resize(); snapCam(); }, snapCam };
