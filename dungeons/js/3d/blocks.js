// Procedural 16x16 block textures (original art), packed into one atlas.
// Each 16px tile sits in a 32px cell with wrapped padding so mipmaps do not bleed.
import * as THREE from "three";
import { rng } from "../util.js";

export const TILE = 16, CELL = 32, COLS = 16;
const ATLAS = CELL * COLS; // 512

const hex = (h) => { const n = parseInt(h.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; };
const clamp = (v) => (v < 0 ? 0 : v > 255 ? 255 : v | 0);

// A tiny tile painter on a 16x16 RGBA buffer.
class Tile {
  constructor(seed) { this.d = new Uint8ClampedArray(TILE * TILE * 4); this.e = new Uint8ClampedArray(TILE * TILE * 4); this.r = rng(seed); this.hasE = false; }
  set(x, y, c, f = 1, a = 255) {
    x = ((x % TILE) + TILE) % TILE; y = ((y % TILE) + TILE) % TILE;
    const [r, g, b] = typeof c === "string" ? hex(c) : c;
    const i = (y * TILE + x) * 4;
    this.d[i] = clamp(r * f); this.d[i + 1] = clamp(g * f); this.d[i + 2] = clamp(b * f); this.d[i + 3] = a;
  }
  get(x, y) { x = ((x % TILE) + TILE) % TILE; y = ((y % TILE) + TILE) % TILE; const i = (y * TILE + x) * 4; return [this.d[i], this.d[i + 1], this.d[i + 2]]; }
  mul(x, y, f) { const c = this.get(x, y); this.set(x, y, c, f); }
  glow(x, y, c, f = 1) { this.hasE = true; x = ((x % TILE) + TILE) % TILE; y = ((y % TILE) + TILE) % TILE; const [r, g, b] = typeof c === "string" ? hex(c) : c; const i = (y * TILE + x) * 4; this.e[i] = clamp(r * f); this.e[i + 1] = clamp(g * f); this.e[i + 2] = clamp(b * f); this.e[i + 3] = 255; }
  fill(pal, jitter = 0.08) { for (let y = 0; y < TILE; y++) for (let x = 0; x < TILE; x++) this.set(x, y, pal[(this.r() * pal.length) | 0], 1 + (this.r() - 0.5) * jitter); }
  noise(pal, weights) {
    for (let y = 0; y < TILE; y++) for (let x = 0; x < TILE; x++) {
      let v = this.r(), k = 0; if (weights) { let acc = 0; for (k = 0; k < weights.length; k++) { acc += weights[k]; if (v < acc) break; } k = Math.min(k, pal.length - 1); } else k = (v * pal.length) | 0;
      this.set(x, y, pal[k]);
    }
  }
}

// value-noise helper for blotchy patterns
function blot(r, scale = 4) {
  const g = []; const n = Math.ceil(TILE / scale) + 1;
  for (let i = 0; i < n * n; i++) g.push(r());
  return (x, y) => {
    const gx = x / scale, gy = y / scale, x0 = Math.floor(gx), y0 = Math.floor(gy), fx = gx - x0, fy = gy - y0;
    const m = n - 1;
    const v = (i, j) => g[((j % m) * n) + (i % m)];
    const sx = fx * fx * (3 - 2 * fx), sy = fy * fy * (3 - 2 * fy);
    return (v(x0, y0) * (1 - sx) + v(x0 + 1, y0) * sx) * (1 - sy) + (v(x0, y0 + 1) * (1 - sx) + v(x0 + 1, y0 + 1) * sx) * sy;
  };
}

function voronoi(t, n, shades, mortar, opts = {}) {
  const pts = []; for (let i = 0; i < n; i++) pts.push([t.r() * TILE, t.r() * TILE, shades[(t.r() * shades.length) | 0]]);
  for (let y = 0; y < TILE; y++) for (let x = 0; x < TILE; x++) {
    let d1 = 1e9, d2 = 1e9, best = null;
    for (const p of pts) for (let ox = -1; ox <= 1; ox++) for (let oy = -1; oy <= 1; oy++) {
      const dx = x + 0.5 - (p[0] + ox * TILE), dy = y + 0.5 - (p[1] + oy * TILE); const d = Math.hypot(dx, dy) * (opts.squash ? 1 + Math.abs(dy) * 0.02 : 1);
      if (d < d1) { d2 = d1; d1 = d; best = { p, dx, dy }; } else if (d < d2) d2 = d;
    }
    if (d2 - d1 < (opts.edge || 1.1)) t.set(x, y, mortar, 0.9 + t.r() * 0.2);
    else {
      let f = 1 + (t.r() - 0.5) * 0.12;
      if (best.dy > 1.2 && best.dx > 0.5) f *= 0.86; // bottom-right shade
      if (best.dy < -1.5 || best.dx < -1.6) f *= 1.1; // top-left highlight
      t.set(x, y, best.p[2], f);
    }
  }
}

function wool(t, base) { const c = hex(base); for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) { const f = 0.9 + t.r() * 0.14 + (((x + y * 3) % 7 === 0) ? -0.12 : 0); t.set(x, y, c, f); } }

const P = {
  grass: ["#4c8a2a", "#5a9c30", "#66ac36", "#72ba3e", "#548f2c"],
  dirt: ["#7a5438", "#6a4830", "#86603f", "#5c3f2a", "#73503a"],
  stone: ["#828282", "#7a7a7a", "#8c8c8c", "#747474", "#6c6c6c"],
};

const painters = {
  grass_top(t) {
    const b = blot(t.r, 5);
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) { const v = b(x, y); const c = P.grass[(t.r() * 5) | 0]; t.set(x, y, c, 0.88 + v * 0.26); }
    for (let i = 0; i < 14; i++) { const x = (t.r() * 16) | 0, y = (t.r() * 16) | 0; t.set(x, y, "#86cc4a"); t.set(x, y + 1, "#3e7422"); }
  },
  grass_side(t) {
    painters.dirt(t);
    for (let x = 0; x < 16; x++) { const h = 3 + ((t.r() * 3) | 0) + (x % 5 === 2 ? 1 : 0); for (let y = 0; y < h; y++) t.set(x, y, P.grass[(t.r() * 5) | 0], y === h - 1 ? 0.78 : 1); }
  },
  dirt(t) { t.noise(P.dirt); for (let i = 0; i < 10; i++) t.set((t.r() * 16) | 0, (t.r() * 16) | 0, "#a08060"); for (let i = 0; i < 8; i++) t.set((t.r() * 16) | 0, (t.r() * 16) | 0, "#4a3020"); },
  path(t) { t.noise(["#9a7a4e", "#8a6a42", "#a88a5a", "#7e623e", "#b09060"]); for (let i = 0; i < 9; i++) t.set((t.r() * 16) | 0, (t.r() * 16) | 0, "#6a5236"); },
  path_top(t) { voronoi(t, 9, ["#a8885a", "#9a7a4e", "#b49466", "#8e7048"], "#6a5236", { edge: 0.7 }); },
  sand(t) { t.noise(["#dcc690", "#d2ba84", "#e4d09c", "#c8b07a"]); },
  sandstone(t) { for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) { const band = (y === 3 || y === 11) ? 0.82 : (y === 4 || y === 12 ? 1.07 : 1); t.set(x, y, ["#d8c088", "#ceb47c", "#e0ca94"][(t.r() * 3) | 0], band); } },
  stone(t) { const b = blot(t.r, 4); for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) t.set(x, y, P.stone[(t.r() * 5) | 0], 0.86 + b(x, y) * 0.25); for (let i = 0; i < 4; i++) { let x = (t.r() * 16) | 0, y = (t.r() * 16) | 0; for (let k = 0; k < 3; k++) { t.set(x + k, y, "#5e5e5e"); } } },
  cobble(t) { voronoi(t, 8, ["#8a8a8a", "#7a7a7a", "#969696", "#6e6e6e", "#838383"], "#4a4a4c"); },
  mossy(t) { painters.cobble(t); const b = blot(t.r, 5); for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) if (b(x, y) > 0.6) t.set(x, y, P.grass[(t.r() * 5) | 0], 0.85); },
  stonebrick(t) {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      const row = (y / 8) | 0, off = row % 2 ? 8 : 0; const bx = (x + off) % 16;
      const mortar = y % 8 === 7 || bx === 15;
      if (mortar) t.set(x, y, "#4e4e50"); else t.set(x, y, P.stone[(t.r() * 5) | 0], (y % 8 === 0 || bx === 0) ? 1.12 : (y % 8 === 6 ? 0.88 : 1));
    }
  },
  deepbrick(t) {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      const row = (y / 4) | 0, off = row % 2 ? 4 : 0; const bx = (x + off) % 8;
      if (y % 4 === 3 || bx === 7) t.set(x, y, "#1c1e26"); else t.set(x, y, ["#3a3e4c", "#343846", "#40445a", "#30333f"][(t.r() * 4) | 0], y % 4 === 0 ? 1.15 : 1);
    }
  },
  deep(t) { const b = blot(t.r, 4); for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) t.set(x, y, ["#383c48", "#30343e", "#40444f", "#2c2f38"][(t.r() * 4) | 0], 0.85 + b(x, y) * 0.3); },
  bricks(t) {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      const row = (y / 4) | 0, off = row % 2 ? 4 : 0; const bx = (x + off) % 8;
      if (y % 4 === 3 || bx === 7) t.set(x, y, "#b8aca0", 0.9 + t.r() * 0.1); else t.set(x, y, ["#9a4a36", "#8c4030", "#a85440", "#7e3a2c"][(t.r() * 4) | 0], y % 4 === 0 ? 1.1 : 1);
    }
  },
  planks(t, pal = ["#a8804c", "#9c7444", "#b48a54", "#946c40"], dark = "#5e4226") {
    for (let y = 0; y < 16; y++) {
      const board = (y / 4) | 0; const seam = (board * 7 + 3) % 16;
      for (let x = 0; x < 16; x++) {
        if (y % 4 === 3) { t.set(x, y, dark); continue; }
        if (x === seam) { t.set(x, y, dark, 1.1); continue; }
        const grain = (Math.sin((x + board * 5) * 0.9 + y * 2.1) > 0.75) ? 0.88 : 1;
        t.set(x, y, pal[(t.r() * pal.length) | 0], grain * (y % 4 === 0 ? 1.08 : 1));
      }
    }
  },
  planks_dark(t) { painters.planks(t, ["#5c3e24", "#523620", "#66462a", "#4a301c"], "#2c1c10"); },
  planks_orange(t) { painters.planks(t, ["#d8701e", "#c8661a", "#e47c26", "#bc5e16"], "#6a3008"); },
  log(t) { for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) { const s = (x * 7 + ((y / 3) | 0) * 3) % 5 === 0; t.set(x, y, s ? "#3e2a18" : ["#6a4a2c", "#5e4226", "#745232"][(t.r() * 3) | 0]); } },
  log_top(t) { for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) { const d = Math.max(Math.abs(x - 7.5), Math.abs(y - 7.5)); if (d > 6.5) t.set(x, y, "#5e4226"); else t.set(x, y, (d | 0) % 2 ? "#b08a56" : "#9a7646", 1 + (t.r() - 0.5) * 0.08); } },
  leaves(t) {
    const b = blot(t.r, 3);
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) { const v = b(x, y); const c = v > 0.62 ? "#5aa032" : v > 0.42 ? "#3f8424" : v > 0.25 ? "#33701e" : "#244e14"; t.set(x, y, c, 0.92 + t.r() * 0.16); }
    for (let i = 0; i < 10; i++) t.set((t.r() * 16) | 0, (t.r() * 16) | 0, "#76c046");
  },
  leaves_dry(t) { const b = blot(t.r, 3); for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) { const v = b(x, y); t.set(x, y, v > 0.6 ? "#9aa040" : v > 0.35 ? "#7a8a32" : "#586424", 0.92 + t.r() * 0.16); } },
  plaster(t) { const b = blot(t.r, 6); for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) t.set(x, y, ["#ece6d6", "#e4ddcb", "#f2ecde", "#ddd5c2"][(t.r() * 4) | 0], 0.94 + b(x, y) * 0.08); for (let i = 0; i < 3; i++) t.set((t.r() * 16) | 0, (t.r() * 16) | 0, "#c9bfaa"); },
  plaster_base(t) { painters.plaster(t); for (let x = 0; x < 16; x++) for (let y = 12; y < 16; y++) t.mul(x, y, 0.88 - (y - 12) * 0.03); },
  kemar(t) {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) t.set(x, y, ["#74301f", "#6a2a1b", "#7e3624"][(t.r() * 3) | 0]);
    for (let x = 0; x < 16; x++) { t.set(x, 0, "#3a160c"); t.set(x, 15, "#3a160c"); t.set(x, 1, "#94442c"); }
    for (const cx of [3, 11]) { for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) if (dx * dx + dy * dy <= 5) t.set(cx + dx, 8 + dy, dx * dx + dy * dy <= 1 ? "#f6d878" : "#d4a440"); }
  },
  roof(t) {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      const row = (y / 4) | 0, off = row % 2 ? 2 : 0; const bx = (x + off) % 4;
      let f = 1 - (y % 4) * 0.06; if (bx === 0) f *= 0.8; if (y % 4 === 3) f *= 0.7;
      t.set(x, y, ["#9a3a24", "#8a3220", "#a84428"][(t.r() * 3) | 0], f);
    }
  },
  roof_dark(t) {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) { const row = (y / 4) | 0, off = row % 2 ? 2 : 0; const bx = (x + off) % 4; let f = 1 - (y % 4) * 0.06; if (bx === 0) f *= 0.8; if (y % 4 === 3) f *= 0.7; t.set(x, y, ["#5a5048", "#4e463e", "#645a50"][(t.r() * 3) | 0], f); }
  },
  wool_orange(t) { wool(t, "#f07c14"); },
  wool_blue(t) { wool(t, "#2a5aa8"); },
  wool_white(t) { wool(t, "#e8e8e4"); },
  wool_navy(t) { wool(t, "#14295a"); },
  glass(t) {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) { const edge = x === 0 || y === 0 || x === 15 || y === 15; t.set(x, y, edge ? "#c8d8e0" : "#5c8ca8", edge ? 1 : 0.9 + ((x - y + 32) % 9 === 0 ? 0.6 : 0)); }
  },
  window(t) {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      const frame = x <= 1 || x >= 14 || y <= 1 || y >= 14 || x === 7 || x === 8 || y === 7;
      if (frame) t.set(x, y, "#4a2c18", (x <= 1 || y <= 1) ? 1.2 : 1);
      else { t.set(x, y, "#ffcf6a", 0.9 + t.r() * 0.15); t.glow(x, y, "#ffb040", 0.8 + t.r() * 0.3); }
    }
  },
  window_blue(t) {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      const frame = x <= 1 || x >= 14 || y <= 1 || y >= 14 || x === 7 || x === 8;
      if (frame) t.set(x, y, "#3a2416"); else { t.set(x, y, "#9ad8ff", 0.8 + (((x + y) % 6) === 0 ? 0.3 : 0)); t.glow(x, y, "#5ab8ff", 0.5); }
    }
  },
  lantern(t) {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      const edge = x === 0 || y === 0 || x === 15 || y === 15 || ((x === 5 || x === 10) && y > 2 && y < 13);
      if (edge) t.set(x, y, "#3a2a1c"); else { const v = 0.85 + t.r() * 0.3; t.set(x, y, "#ffd27a", v); t.glow(x, y, "#ffb648", v * 1.1); }
    }
  },
  glowstone(t) { voronoi(t, 7, ["#f0c050", "#ffe08a", "#d8a040", "#ffd060"], "#8a6020"); for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) { const c = t.get(x, y); t.glow(x, y, c, 0.9); } },
  lava(t) { const b = blot(t.r, 4); for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) { const v = b(x, y); const c = v > 0.65 ? "#ffd84a" : v > 0.4 ? "#ff8a1a" : "#d04010"; t.set(x, y, c); t.glow(x, y, c, 1); } },
  magma(t) { voronoi(t, 8, ["#4a2418", "#3a1c12", "#5a2a1a"], "#ff6a10", { edge: 0.9 }); for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) { const c = t.get(x, y); if (c[0] > 200) t.glow(x, y, "#ff7a20", 1.2); } },
  bookshelf(t) {
    const cols = ["#8a2a22", "#2a4a8a", "#2a6a3a", "#c88a2a", "#6a3a7a", "#d8d0b8", "#a84a1a"];
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) t.set(x, y, "#5e4226", 0.95 + t.r() * 0.1);
    for (const sy of [1, 9]) { let x = 1; while (x < 15) { const w = 1 + ((t.r() * 2) | 0), h = 5 + ((t.r() * 2) | 0), c = cols[(t.r() * cols.length) | 0]; for (let i = 0; i < w && x < 15; i++, x++) for (let y = sy + (6 - h); y < sy + 6; y++) t.set(x, y, c, i === 0 ? 1.15 : 0.92); } }
    for (let x = 0; x < 16; x++) { t.set(x, 0, "#3a2414"); t.set(x, 7, "#3a2414"); t.set(x, 8, "#74522e"); t.set(x, 15, "#3a2414"); }
  },
  iron(t) { for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) t.set(x, y, ["#c8ccd0", "#bcc0c6", "#d2d6da"][(t.r() * 3) | 0], (x === 0 || y === 0) ? 1.08 : (x === 15 || y === 15) ? 0.75 : 1); for (const [x, y] of [[2, 2], [13, 2], [2, 13], [13, 13]]) t.set(x, y, "#7c8086"); },
  copper(t) { const b = blot(t.r, 4); for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) { const v = b(x, y); t.set(x, y, v > 0.7 ? "#5aa888" : ["#c06a3c", "#b05e34", "#cc7846"][(t.r() * 3) | 0], (x % 8 === 0 || y % 8 === 0) ? 0.8 : 1); } },
  circuit(t) {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) t.set(x, y, ["#2e3038", "#34363f", "#2a2c33"][(t.r() * 3) | 0]);
    const lines = [[0, 4, 9, 4], [9, 4, 9, 12], [9, 12, 16, 12], [3, 0, 3, 9], [3, 9, 6, 9], [12, 0, 12, 7], [12, 7, 16, 7]];
    for (const [x0, y0, x1, y1] of lines) { for (let x = Math.min(x0, x1); x <= Math.max(x0, x1); x++) for (let y = Math.min(y0, y1); y <= Math.max(y0, y1); y++) { t.set(x, y, "#ff7a24"); t.glow(x, y, "#ff6a10", 1.1); } }
    for (const [x, y] of [[9, 4], [3, 9], [12, 7], [6, 9]]) { t.set(x, y, "#ffe0a0"); t.glow(x, y, "#ffd080", 1.4); }
  },
  terminal(t) {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) { const edge = x <= 1 || x >= 14 || y <= 1 || y >= 13; t.set(x, y, edge ? "#3a3c44" : "#0a1a1e"); }
    for (let y = 3; y < 12; y += 2) { let x = 3 + ((t.r() * 2) | 0); const len = 3 + ((t.r() * 8) | 0); for (let i = 0; i < len && x < 13; i++, x++) { if (t.r() < 0.15) continue; const c = y === 3 ? "#ffb040" : (t.r() < 0.3 ? "#6ad8ff" : "#7aff9a"); t.set(x, y, c); t.glow(x, y, c, 1); } }
    for (let x = 2; x < 14; x++) t.set(x, 14, "#55575f");
  },
  gold(t) { for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) t.set(x, y, ["#f0c840", "#e4b830", "#fad860"][(t.r() * 3) | 0], (x === 0 || y === 0) ? 1.12 : (x === 15 || y === 15) ? 0.7 : 1); for (let i = 0; i < 6; i++) t.set((t.r() * 14 + 1) | 0, (t.r() * 14 + 1) | 0, "#fff0a8"); },
  tile(t) { for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) { const chk = ((x >> 3) + (y >> 3)) % 2; const edge = x % 8 === 0 || y % 8 === 0; t.set(x, y, chk ? "#d8d4ca" : "#a8a49c", edge ? 0.82 : 0.97 + t.r() * 0.06); } },
  marble(t) { for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) t.set(x, y, ["#d4cec2", "#cac4b8", "#ddd7cb"][(t.r() * 3) | 0]); let x = 2, y = 0; for (let i = 0; i < 22; i++) { t.set(x, y, "#b0aaa0"); x += t.r() < 0.5 ? 1 : 0; y += 1; if (y > 15) { y = 0; x += 6; } } },
  carpet_orange(t) { for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) { const b = x <= 1 || x >= 14; const d = (x + y) % 8 === 0 || (x - y + 16) % 8 === 0; t.set(x, y, b ? "#f0c048" : d ? "#ffa040" : "#d8641a", 0.94 + t.r() * 0.1); } },
  carpet_blue(t) { for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) { const b = x <= 1 || x >= 14; const d = (x + y) % 8 === 0 || (x - y + 16) % 8 === 0; t.set(x, y, b ? "#e8c56b" : d ? "#3a72c8" : "#1f4a8a", 0.94 + t.r() * 0.1); } },
  field(t) { for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) t.set(x, y, ["#4e9a30", "#58a636", "#46902a"][(t.r() * 3) | 0], x < 8 ? 1.08 : 0.92); },
  field_line(t) { painters.field(t); for (let y = 0; y < 16; y++) for (let x = 6; x < 10; x++) t.set(x, y, "#f4f4ee", 0.95 + t.r() * 0.08); },
  seats_orange(t) { for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) { const seat = y >= 3 && y <= 12 && (x % 4) !== 3; t.set(x, y, seat ? "#ee7a18" : "#6a6a6e", seat ? (y < 6 ? 1.12 : 1) : 0.9 + t.r() * 0.1); } },
  seats_blue(t) { for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) { const seat = y >= 3 && y <= 12 && (x % 4) !== 3; t.set(x, y, seat ? "#2a5aa8" : "#6a6a6e", seat ? (y < 6 ? 1.12 : 1) : 0.9 + t.r() * 0.1); } },
  concrete(t) { t.noise(["#a8a6a0", "#a09e98", "#b0aea8", "#9a9892"]); },
  hay(t) { for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) t.set(x, y, ["#d8b040", "#c8a034", "#e4c050", "#b89030"][(t.r() * 4) | 0], (y === 4 || y === 11) ? 0.6 : 1); },
  hay_top(t) { for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) t.set(x, y, ["#d8b040", "#c8a034", "#e4c050"][(t.r() * 3) | 0], (x + y) % 3 === 0 ? 0.85 : 1); },
  gravel(t) { voronoi(t, 14, ["#8a8680", "#7a7670", "#9a968e", "#6a6660"], "#5a5650", { edge: 0.5 }); },
  crate(t) { painters.planks(t); for (let i = 0; i < 16; i++) { t.set(i, i, "#4a3018"); t.set(i, 0, "#4a3018"); t.set(i, 15, "#4a3018"); t.set(0, i, "#4a3018"); t.set(15, i, "#4a3018"); } },
  barrel(t) { for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) { const band = y === 2 || y === 3 || y === 12 || y === 13; t.set(x, y, band ? "#4a4a50" : ["#8a5e34", "#7e542e", "#94683c"][(t.r() * 3) | 0], x % 4 === 0 && !band ? 0.8 : 1); } },
  barrel_top(t) { for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) { const d = Math.max(Math.abs(x - 7.5), Math.abs(y - 7.5)); t.set(x, y, d > 6.5 ? "#4a4a50" : "#8a5e34", y % 4 === 0 ? 0.85 : 1); } },
  rock(t) { const b = blot(t.r, 4); for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) t.set(x, y, ["#8a6a54", "#7e604c", "#96745c", "#6e5242"][(t.r() * 4) | 0], 0.85 + b(x, y) * 0.3); for (let i = 0; i < 4; i++) { const x = (t.r() * 16) | 0, y = (t.r() * 16) | 0; t.set(x, y, "#4e3a2e"); t.set(x + 1, y, "#4e3a2e"); } },
  rock_top(t) { painters.rock(t); for (let i = 0; i < 18; i++) { const x = (t.r() * 16) | 0, y = (t.r() * 16) | 0; t.set(x, y, ["#7a8a3a", "#6a7a32", "#8a9a44"][(t.r() * 3) | 0]); } },
  rock_dark(t) { const b = blot(t.r, 4); for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) t.set(x, y, ["#5e4a40", "#544238", "#685248"][(t.r() * 3) | 0], 0.85 + b(x, y) * 0.3); },
  painting(t) {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      const fr = x === 0 || y === 0 || x === 15 || y === 15; if (fr) { t.set(x, y, "#c8962c"); continue; }
      const sky = y < 7, mtn = y >= 5 + Math.abs(((x * 3) % 10) - 5) * 0.5 && y < 11; t.set(x, y, mtn ? "#7a5a7a" : sky ? (y < 3 ? "#ff9a5a" : "#ffc87a") : "#c8a060");
    }
    t.set(11, 3, "#fff4c0"); t.set(12, 3, "#fff4c0");
  },
  photo(t) {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) { const fr = x <= 1 || y <= 1 || x >= 14 || y >= 14; t.set(x, y, fr ? "#f0ece0" : ((x + y) % 5 === 0 ? "#3a6a9a" : "#2a4a6a"), fr ? 1 : 0.9 + t.r() * 0.2); }
    for (let x = 3; x < 13; x++) { t.set(x, 10, "#e8a040"); t.set(x, 11, "#c8782a"); } t.set(9, 5, "#fff0b0"); t.set(10, 5, "#fff0b0");
  },
  temple(t) {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) t.set(x, y, "#8a2418", 0.95 + t.r() * 0.1);
    for (let x = 0; x < 16; x++) { t.set(x, 0, "#f0c040"); t.set(x, 15, "#f0c040"); t.set(x, 1, "#2a6a5a"); t.set(x, 14, "#2a6a5a"); }
    for (let dy = -3; dy <= 3; dy++) for (let dx = -3; dx <= 3; dx++) { const d = Math.abs(dx) + Math.abs(dy); if (d <= 3) t.set(8 + dx, 8 + dy, d === 3 ? "#f0c040" : d === 0 ? "#fff4b0" : d === 1 ? "#2a8aa0" : "#ffffff"); }
  },
  scoreboard(t) { for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) t.set(x, y, "#18181c"); for (let y = 3; y < 13; y += 3) for (let x = 2; x < 14; x += 2) if (t.r() < 0.6) { t.set(x, y, "#ff9a2a"); t.glow(x, y, "#ff8a1a", 1.3); } },
  snowcap(t) { t.noise(["#f4f4f8", "#e8eaf0", "#ffffff"]); },
  farmland(t) { for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) t.set(x, y, P.dirt[(t.r() * 5) | 0], y % 4 === 0 ? 0.7 : 1); },
  map_parchment(t) { const b = blot(t.r, 5); for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) t.set(x, y, ["#e8d4a4", "#dcc694", "#f0dcb0"][(t.r() * 3) | 0], 0.9 + b(x, y) * 0.15); },
  water(t) { const b = blot(t.r, 4); for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) { const v = b(x, y); t.set(x, y, v > 0.65 ? "#5aa6d8" : v > 0.4 ? "#3a82c0" : "#2a68a8", 1); } },
  ore(t) { painters.stone(t); for (let i = 0; i < 4; i++) { const x = 2 + ((t.r() * 11) | 0), y = 2 + ((t.r() * 11) | 0); for (const [dx, dy] of [[0, 0], [1, 0], [0, 1], [1, 1]]) { t.set(x + dx, y + dy, "#ffb040"); t.glow(x + dx, y + dy, "#ff9a20", 0.9); } } },
  crystal(t) { voronoi(t, 6, ["#6ad8ff", "#3ab0e8", "#9ae8ff", "#2a90d0"], "#1a4a7a", { edge: 0.8 }); for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) { const c = t.get(x, y); t.glow(x, y, c, 0.8); } },
};

// name -> [top, side, bottom] painter names, plus flags
export const BLOCKS = [
  null,
  { name: "grass", top: "grass_top", side: "grass_side", bottom: "dirt" },
  { name: "dirt", all: "dirt" },
  { name: "stone", all: "stone" },
  { name: "cobble", all: "cobble" },
  { name: "mossy", all: "mossy" },
  { name: "stonebrick", all: "stonebrick" },
  { name: "bricks", all: "bricks" },
  { name: "planks", all: "planks" },
  { name: "planks_dark", all: "planks_dark" },
  { name: "planks_orange", all: "planks_orange" },
  { name: "log", top: "log_top", side: "log", bottom: "log_top" },
  { name: "leaves", all: "leaves", foliage: true },
  { name: "plaster", all: "plaster" },
  { name: "plaster_base", top: "plaster", side: "plaster_base", bottom: "plaster" },
  { name: "kemar", top: "planks_dark", side: "kemar", bottom: "planks_dark" },
  { name: "roof", all: "roof" },
  { name: "wool_orange", all: "wool_orange" },
  { name: "wool_blue", all: "wool_blue" },
  { name: "wool_white", all: "wool_white" },
  { name: "glass", all: "glass" },
  { name: "window", top: "planks_dark", side: "window", bottom: "planks_dark", light: 6 },
  { name: "lantern", all: "lantern", light: 14 },
  { name: "glowstone", all: "glowstone", light: 15 },
  { name: "lava", all: "lava", light: 15 },
  { name: "bookshelf", top: "planks", side: "bookshelf", bottom: "planks" },
  { name: "iron", all: "iron" },
  { name: "copper", all: "copper" },
  { name: "circuit", all: "circuit", light: 6 },
  { name: "terminal", top: "iron", side: "terminal", bottom: "iron", light: 7 },
  { name: "gold", all: "gold" },
  { name: "tile", all: "tile" },
  { name: "marble", all: "marble" },
  { name: "carpet_orange", all: "carpet_orange" },
  { name: "carpet_blue", all: "carpet_blue" },
  { name: "field", all: "field" },
  { name: "field_line", all: "field_line" },
  { name: "seats_orange", top: "seats_orange", side: "concrete", bottom: "concrete" },
  { name: "seats_blue", top: "seats_blue", side: "concrete", bottom: "concrete" },
  { name: "concrete", all: "concrete" },
  { name: "hay", top: "hay_top", side: "hay", bottom: "hay_top" },
  { name: "gravel", all: "gravel" },
  { name: "crate", all: "crate" },
  { name: "barrel", top: "barrel_top", side: "barrel", bottom: "barrel_top" },
  { name: "rock", top: "rock_top", side: "rock", bottom: "rock" },
  { name: "rock_dark", all: "rock_dark" },
  { name: "painting", top: "planks_dark", side: "painting", bottom: "planks_dark" },
  { name: "photo", top: "planks_dark", side: "photo", bottom: "planks_dark" },
  { name: "temple", top: "gold", side: "temple", bottom: "planks_dark" },
  { name: "scoreboard", all: "scoreboard", light: 5 },
  { name: "sand", all: "sand" },
  { name: "sandstone", top: "sand", side: "sandstone", bottom: "sand" },
  { name: "path", top: "path_top", side: "path", bottom: "dirt" },
  { name: "deep", all: "deep" },
  { name: "deepbrick", all: "deepbrick" },
  { name: "magma", all: "magma", light: 10 },
  { name: "roof_dark", all: "roof_dark" },
  { name: "leaves_dry", all: "leaves_dry", foliage: true },
  { name: "farmland", top: "farmland", side: "dirt", bottom: "dirt" },
  { name: "parchment", all: "map_parchment" },
  { name: "window_blue", top: "iron", side: "window_blue", bottom: "iron", light: 6 },
  { name: "ore", all: "ore", light: 5 },
  { name: "crystal", all: "crystal", light: 12 },
  { name: "snow", all: "snowcap" },
  { name: "wool_navy", all: "wool_navy" },
  { name: "water", all: "water", liquid: true },
];
export const B = Object.fromEntries(BLOCKS.map((b, i) => [b ? b.name : "air", i]));

let atlas = null;
export function buildAtlas() {
  if (atlas) return atlas;
  const names = Object.keys(painters);
  const tileIndex = {};
  const c = document.createElement("canvas"); c.width = c.height = ATLAS;
  const e = document.createElement("canvas"); e.width = e.height = ATLAS;
  const ctx = c.getContext("2d"), ectx = e.getContext("2d");
  ectx.fillStyle = "#000"; ectx.fillRect(0, 0, ATLAS, ATLAS);
  const tc = document.createElement("canvas"); tc.width = tc.height = TILE; const tctx = tc.getContext("2d");
  const swatch = {};
  names.forEach((n, i) => {
    const t = new Tile(1000 + i * 97);
    painters[n](t);
    const cx = (i % COLS) * CELL, cy = ((i / COLS) | 0) * CELL;
    const put = (buf, target) => {
      tctx.putImageData(new ImageData(buf, TILE, TILE), 0, 0);
      for (let oy = -1; oy <= 1; oy++) for (let ox = -1; ox <= 1; ox++) {
        target.save(); target.beginPath(); target.rect(cx, cy, CELL, CELL); target.clip();
        target.drawImage(tc, cx + 8 + ox * TILE, cy + 8 + oy * TILE); target.restore();
      }
    };
    put(t.d, ctx);
    if (t.hasE) put(t.e, ectx);
    tileIndex[n] = i;
    // average color (used by map diorama and particles)
    let r = 0, g = 0, b = 0; for (let k = 0; k < t.d.length; k += 4) { r += t.d[k]; g += t.d[k + 1]; b += t.d[k + 2]; }
    const N = t.d.length / 4; swatch[n] = [r / N / 255, g / N / 255, b / N / 255];
  });
  const mk = (cv, srgb) => {
    const tx = new THREE.CanvasTexture(cv);
    tx.magFilter = THREE.NearestFilter; tx.minFilter = THREE.NearestMipmapLinearFilter;
    tx.generateMipmaps = true; tx.anisotropy = 4;
    if (srgb) tx.colorSpace = THREE.SRGBColorSpace;
    return tx;
  };
  const faces = BLOCKS.map((b) => b && {
    top: tileIndex[b.top || b.all], side: tileIndex[b.side || b.all], bottom: tileIndex[b.bottom || b.all],
    light: b.light || 0, foliage: !!b.foliage, liquid: !!b.liquid,
  });
  atlas = { canvas: c, emissiveCanvas: e, map: mk(c, true), emissiveMap: mk(e, true), tileIndex, faces, swatch };
  return atlas;
}
// UV rect (0..1, v up) for a tile index; inset half a texel
export function tileUV(i) {
  const cx = (i % COLS) * CELL + 8, cy = ((i / COLS) | 0) * CELL + 8;
  const u0 = cx / ATLAS, u1 = (cx + TILE) / ATLAS;
  const v1 = 1 - cy / ATLAS, v0 = 1 - (cy + TILE) / ATLAS;
  return [u0, v0, u1, v1];
}
