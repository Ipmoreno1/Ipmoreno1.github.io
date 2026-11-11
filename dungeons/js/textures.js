// Procedural dimetric floor diamonds and wall faces. Original art, no ripped textures.
import { TW, TH, ZH, makeCanvas, shade, rng, clamp } from "./util.js";

const cache = new Map();
const key = (...a) => a.join("|");

function diamondPath(ctx, cx, cy, hw = TW / 2, hh = TH / 2) {
  ctx.beginPath();
  ctx.moveTo(cx, cy - hh + 0.5);
  ctx.lineTo(cx + hw - 0.5, cy);
  ctx.lineTo(cx, cy + hh - 0.5);
  ctx.lineTo(cx - hw + 0.5, cy);
  ctx.closePath();
}

function noiseFill(ctx, pal, seed, cx, cy) {
  const r = rng(seed);
  const hw = TW / 2, hh = TH / 2;
  for (let i = 0; i < 90; i++) {
    const u = r() * 2 - 1, v = r() * 2 - 1;
    if (Math.abs(u) + Math.abs(v) > 0.92) continue;
    ctx.fillStyle = pal[Math.floor(r() * pal.length)];
    ctx.fillRect(cx + u * hw, cy + v * hh, 2, 1);
  }
}

function floorTile(colors, seed, edge) {
  const k = key("fl", seed, colors.join(), edge);
  if (cache.has(k)) return cache.get(k);
  const [c, ctx] = makeCanvas(TW, TH);
  const cx = TW / 2, cy = TH / 2;
  diamondPath(ctx, cx, cy);
  ctx.fillStyle = colors[0];
  ctx.fill();
  ctx.save();
  diamondPath(ctx, cx, cy);
  ctx.clip();
  noiseFill(ctx, colors, seed, cx, cy);
  // subtle grid highlight on top-left edge, shadow on bottom-right
  ctx.strokeStyle = "rgba(255,255,255,0.18)";
  ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(cx, 1); ctx.lineTo(TW - 1, cy); ctx.stroke();
  ctx.strokeStyle = "rgba(0,0,0,0.28)";
  ctx.beginPath(); ctx.moveTo(TW - 1, cy); ctx.lineTo(cx, TH - 1); ctx.stroke();
  ctx.restore();
  ctx.strokeStyle = edge || "rgba(0,0,0,0.18)";
  ctx.lineWidth = 1;
  diamondPath(ctx, cx, cy);
  ctx.stroke();
  cache.set(k, c);
  return c;
}

// Left and right wall faces for a 1-tile-wide, 1-ZH-tall box sitting on a diamond.
// Left face: from bottom of west point to south point, up ZH.
// Geometry of a box at origin drawn at iso (0,0,0):
//   top diamond centered at (0, -ZH) relative to floor center? 
// We'll draw faces in iso.js; here we just provide vertical-striped swatches.
function faceSwatch(w, h, colors, seed, dark) {
  const k = key("fc", w, h, seed, colors.join(), dark);
  if (cache.has(k)) return cache.get(k);
  const [c, ctx] = makeCanvas(w, h);
  const r = rng(seed);
  ctx.fillStyle = dark ? shade(colors[0], -18) : colors[0];
  ctx.fillRect(0, 0, w, h);
  for (let i = 0; i < Math.floor(w * h / 8); i++) {
    ctx.fillStyle = colors[Math.floor(r() * colors.length)];
    if (dark) ctx.fillStyle = shade(colors[Math.floor(r() * colors.length)], -16);
    ctx.fillRect(Math.floor(r() * w), Math.floor(r() * h), 2, 2);
  }
  // mortar / plank lines
  ctx.fillStyle = "rgba(0,0,0,0.18)";
  for (let y = 6; y < h; y += 8) ctx.fillRect(0, y, w, 1);
  for (let x = 5; x < w; x += 7) ctx.fillRect(x, 0, 1, h);
  ctx.fillStyle = "rgba(255,255,255,0.08)";
  ctx.fillRect(0, 0, w, 2);
  ctx.fillStyle = "rgba(0,0,0,0.25)";
  ctx.fillRect(0, h - 2, w, 2);
  cache.set(k, c);
  return c;
}

const PALS = {
  grass: ["#3d7a2a", "#4a8c33", "#356b24", "#2f5e20", "#59a03c"],
  path: ["#8a7a62", "#7a6a54", "#9a8a70", "#6e604c"],
  plaza: ["#c4b49a", "#b8a88a", "#d0c2a8", "#a89878", "#cfc0a4"],
  stone: ["#6e6a66", "#7a7672", "#5e5a56", "#8a8680"],
  cobble: ["#5a5856", "#6a6662", "#4e4c4a", "#7a7470", "#52504e"],
  wood: ["#7a4e28", "#8a5a30", "#6a4222", "#9a6a3a"],
  darkwood: ["#3e2a18", "#4a3420", "#2e1e10", "#5a4030"],
  sand: ["#d2c08a", "#c8b47a", "#decc9a", "#bcaa6e"],
  water: ["#2a6aaa", "#24609a", "#3278b8", "#1e5488"],
  carpet: ["#1f4a8a", "#183a72", "#2558a0", "#123060"],
  carpet2: ["#c45a12", "#d46a18", "#a84a0e", "#e07a22"],
  field: ["#3a8a28", "#449832", "#2e7620", "#50a83a"],
  dirt: ["#6b4a28", "#7a5630", "#5c3e22", "#8a6240"],
  brick: ["#8a4a3a", "#7a3e32", "#9a5646", "#6a342a"],
  bhutan: ["#e8dcc8", "#ded2bc", "#f0e6d4", "#d4c8b0"],
  gold: ["#d4a84a", "#e8c05a", "#c09038", "#f0d078"],
  roof: ["#8a2018", "#7a1c14", "#9a2a1c", "#6a1810"],
  copper: ["#b8733a", "#c88448", "#a66430", "#d49458"],
  lava: ["#d04010", "#e85818", "#b0300c", "#ff7030"],
  moss: ["#3a5a28", "#4a6e32", "#2e4a20"],
  tile: ["#4a3a32", "#3e322c", "#56443c", "#322822"],
  marble: ["#d8d2c8", "#c8c2b8", "#e4ded4", "#b8b2a8"],
};

export function floorTex(kind, variant = 0) {
  const pal = PALS[kind] || PALS.stone;
  return floorTile(pal, 1000 + kind.length * 17 + variant * 91, kind === "water" ? "rgba(20,40,80,0.4)" : undefined);
}

export function wallTex(kind, side = "L", variant = 0) {
  const pal = PALS[kind] || PALS.stone;
  // swatch sized to cover a wall face (~TW/2 by ZH)
  return faceSwatch(Math.ceil(TW / 2) + 4, ZH + 4, pal, 2000 + kind.length * 13 + variant * 77 + (side === "R" ? 3 : 0), side === "R");
}

export const WALL_COLORS = Object.fromEntries(Object.entries(PALS).map(([k, v]) => [k, { mid: v[0], light: shade(v[0], 28), dark: shade(v[0], -32), pal: v }]));

export function waterFrame(t) {
  const k = key("wat", (t / 8) | 0);
  if (cache.has(k)) return cache.get(k);
  const pal = PALS.water.map((c, i) => shade(c, Math.sin(t * 0.04 + i) * 12));
  const c = floorTile(pal, 4000 + ((t / 8) | 0), "rgba(20,40,80,0.45)");
  cache.set(k, c);
  return c;
}

// Soft radial glow sprite (additive)
export function glowSprite(color, size) {
  const k = key("glow", color, size);
  if (cache.has(k)) return cache.get(k);
  const [c, ctx] = makeCanvas(size, size);
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, color);
  g.addColorStop(0.35, color.replace(/[\d.]+\)$/, "0.35)").replace("rgb(", "rgba(").includes("rgba") ? color.replace(/[\d.]+\)$/, "0.35)") : color + "55");
  // safer stops
  const [c2, ctx2] = makeCanvas(size, size);
  const g2 = ctx2.createRadialGradient(size / 2, size / 2, 1, size / 2, size / 2, size / 2);
  g2.addColorStop(0, "rgba(255,220,140,0.85)");
  g2.addColorStop(0.25, color);
  g2.addColorStop(1, "rgba(0,0,0,0)");
  ctx2.fillStyle = g2;
  ctx2.fillRect(0, 0, size, size);
  cache.set(k, c2);
  return c2;
}

export function skyGradient(h, time) {
  const k = key("sky", h, time);
  if (cache.has(k)) return cache.get(k);
  const [c, ctx] = makeCanvas(8, h);
  const g = ctx.createLinearGradient(0, 0, 0, h);
  if (time === "night") {
    g.addColorStop(0, "#0a1020"); g.addColorStop(0.5, "#152038"); g.addColorStop(1, "#1c2a48");
  } else if (time === "dusk") {
    g.addColorStop(0, "#2a1a40"); g.addColorStop(0.4, "#c45a30"); g.addColorStop(0.75, "#e89050"); g.addColorStop(1, "#f0b878");
  } else {
    g.addColorStop(0, "#5a8fd4"); g.addColorStop(0.45, "#87b4e6"); g.addColorStop(1, "#c8dff0");
  }
  ctx.fillStyle = g; ctx.fillRect(0, 0, 8, h);
  cache.set(k, c);
  return c;
}
