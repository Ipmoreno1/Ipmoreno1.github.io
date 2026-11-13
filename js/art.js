// art.js : every pixel of art in this game is drawn here, in code, when the page loads.
// Tiles are 16x16. Characters are 16x24. Buildings are painted face-on in a 3/4 top-down view.
export const T = 16;

export function mk(w, h, wrf = false) {
  const c = document.createElement("canvas"); c.width = Math.max(1, w | 0); c.height = Math.max(1, h | 0);
  const g = c.getContext("2d", wrf ? { willReadFrequently: true } : undefined); g.imageSmoothingEnabled = false; return [c, g];
}
export function rng(seed) { let s = (seed * 2654435761) >>> 0 || 1; return () => { s ^= s << 13; s >>>= 0; s ^= s >> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; }; }
export function hash2(x, y, s = 0) { let h = (x * 374761393 + y * 668265263 + s * 982451653) | 0; h = (h ^ (h >>> 13)) * 1274126177 | 0; return ((h ^ (h >>> 16)) >>> 0) / 4294967296; }

const P = (s) => [parseInt(s.slice(1, 3), 16), parseInt(s.slice(3, 5), 16), parseInt(s.slice(5, 7), 16)];
const H = (r, g, b) => "#" + [r, g, b].map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0")).join("");
export function shade(c, f) { const [r, g, b] = P(c); return f >= 0 ? H(r + (255 - r) * f, g + (255 - g) * f, b + (255 - b) * f) : H(r * (1 + f), g * (1 + f), b * (1 + f)); }
export function mix(a, b, t) { const A = P(a), B = P(b); return H(A[0] + (B[0] - A[0]) * t, A[1] + (B[1] - A[1]) * t, A[2] + (B[2] - A[2]) * t); }
function px(g, x, y, c) { g.fillStyle = c; g.fillRect(x, y, 1, 1); }
function rect(g, x, y, w, h, c) { g.fillStyle = c; g.fillRect(x, y, w, h); }
function noiseFill(g, x, y, w, h, base, amt, R, step = 1) {
  for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) { const n = R() - 0.5; px(g, x + i, y + j, n > 0.32 ? shade(base, amt) : n < -0.32 ? shade(base, -amt) : base); }
}

// ---------------------------------------------------------------- tiny 3x5 pixel font (sprite lettering)
const F3 = {
  A: "010101111101101", B: "110101110101110", C: "011100100100011", D: "110101101101110", E: "111100110100111", F: "111100110100100",
  G: "011100101101011", H: "101101111101101", I: "111010010010111", J: "001001001101010", K: "101101110101101", L: "100100100100111",
  M: "101111111101101", N: "110101101101101", O: "010101101101010", P: "110101110100100", Q: "010101101110011", R: "110101110101101",
  S: "011100010001110", T: "111010010010010", U: "101101101101111", V: "101101101101010", W: "101101111111101", X: "101101010101101",
  Y: "101101010010010", Z: "111001010100111", 0: "111101101101111", 1: "010110010010111", 2: "110001010100111", 3: "110001010001110",
  4: "101101111001001", 5: "111100110001110", 6: "011100111101111", 7: "111001010010010", 8: "111101111101111", 9: "111101111001110",
  " ": "000000000000000", "-": "000000111000000", ".": "000000000000010",
};
export function text3(g, s, x, y, c) { for (const ch of s.toUpperCase()) { const m = F3[ch] || F3[" "]; for (let i = 0; i < 15; i++) if (m[i] === "1") px(g, x + (i % 3), y + ((i / 3) | 0), c); x += 4; } }
export const text3w = (s) => s.length * 4 - 1;

// ---------------------------------------------------------------- ground tiles
export function makeTiles() {
  const tiles = {};
  const make = (name, n, fn) => { tiles[name] = []; for (let v = 0; v < n; v++) { const [c, g] = mk(T, T); fn(g, rng(name.length * 97 + v * 13 + 7), v); tiles[name].push(c); } };
  make("grass", 6, (g, R, v) => {
    noiseFill(g, 0, 0, T, T, "#86a64b", 0.08, R);
    for (let k = 0; k < 5; k++) { const x = (R() * 15) | 0, y = 2 + ((R() * 13) | 0); px(g, x, y, "#6d8c3c"); px(g, x + 1, y - 1, "#6d8c3c"); px(g, x, y - 1, "#9dbd5c"); }
    if (v === 4) { px(g, 4, 5, "#f4d35e"); px(g, 11, 10, "#f7f1e1"); px(g, 12, 9, "#f4d35e"); }
    if (v === 5) { px(g, 7, 7, "#e98c4a"); px(g, 2, 12, "#f7f1e1"); }
  });
  make("dry", 4, (g, R) => {
    noiseFill(g, 0, 0, T, T, "#d4b285", 0.07, R);
    for (let k = 0; k < 7; k++) { const x = (R() * 15) | 0, y = (R() * 15) | 0; px(g, x, y, "#b89366"); px(g, x + 1, y, "#e8d0a8"); }
    if (R() < 0.7) { const x = 3 + ((R() * 9) | 0), y = 3 + ((R() * 9) | 0); rect(g, x, y, 3, 2, "#a99b8a"); px(g, x, y, "#c9bcab"); rect(g, x, y + 2, 3, 1, "#a8875d"); }
  });
  make("sand", 2, (g, R) => { noiseFill(g, 0, 0, T, T, "#dfc08f", 0.05, R); for (let k = 0; k < 4; k++) px(g, (R() * 16) | 0, (R() * 16) | 0, "#c7a676"); });
  make("path", 4, (g, R, v) => {
    rect(g, 0, 0, T, T, "#c3b79e");
    const rows = [0, 4, 8, 12]; let off = v * 3;
    for (const y0 of rows) {
      let x = -((off += 5) % 7);
      while (x < T) {
        const w = 4 + ((R() * 4) | 0); const base = ["#e6dec8", "#ebe4d0", "#e0d7bf", "#efe9d8"][(R() * 4) | 0];
        rect(g, x + 1, y0 + 1, w - 1, 3, base);
        rect(g, x + 1, y0 + 1, w - 1, 1, shade(base, 0.35));
        rect(g, x + w - 1, y0 + 2, 1, 2, shade(base, -0.07));
        rect(g, x + 1, y0 + 3, w - 1, 1, shade(base, -0.05));
        x += w;
      }
    }
    if (v === 3) { px(g, 6, 6, "#a9a08a"); px(g, 10, 13, "#a9a08a"); }
  });
  make("pavers", 3, (g, R) => {
    rect(g, 0, 0, T, T, "#a8734f");
    for (let y = 0; y < T; y += 8) for (let x = 0; x < T; x += 8) {
      const b = ["#d29a6e", "#c98f64", "#d8a479", "#c78a5e"][(R() * 4) | 0];
      rect(g, x + 1, y + 1, 7, 7, b); rect(g, x + 1, y + 1, 7, 1, shade(b, 0.16)); rect(g, x + 1, y + 1, 1, 7, shade(b, 0.08)); rect(g, x + 1, y + 7, 7, 1, shade(b, -0.08));
      if (R() < 0.3) px(g, x + 2 + ((R() * 4) | 0), y + 3 + ((R() * 3) | 0), shade(b, -0.1));
    }
  });
  make("road", 3, (g, R) => { noiseFill(g, 0, 0, T, T, "#575664", 0.06, R); for (let k = 0; k < 3; k++) px(g, (R() * 16) | 0, (R() * 16) | 0, "#6c6b78"); });
  make("walk", 2, (g, R) => {
    rect(g, 0, 0, T, T, "#b9ae9a");
    for (let y = 0; y < T; y += 8) for (let x = 0; x < T; x += 8) { noiseFill(g, x + 1, y + 1, 7, 7, "#d9d0bd", 0.04, R); rect(g, x + 1, y + 1, 7, 1, "#e6dfcf"); }
  });
  make("turf", 2, (g, R, v) => { for (let x = 0; x < T; x++) for (let y = 0; y < T; y++) px(g, x, y, (((x >> 3) + v) % 2 ? "#4f9a3f" : "#58a646")); for (let k = 0; k < 6; k++) px(g, (R() * 16) | 0, (R() * 16) | 0, "#3f8a33"); });
  // animated water (4 frames)
  tiles.water = [];
  for (let f = 0; f < 4; f++) {
    const [c, g] = mk(T, T); rect(g, 0, 0, T, T, "#2c88a0");
    for (let y = 0; y < T; y++) for (let x = 0; x < T; x++) { const w = Math.sin((x + f * 4) * 0.8 + y * 0.9) + Math.sin((y * 1.3 - f * 2) * 0.7); if (w > 1.3) px(g, x, y, "#7fd0da"); else if (w > 0.7) px(g, x, y, "#3ea2b6"); else if (w < -1.3) px(g, x, y, "#237489"); }
    tiles.water.push(c);
  }
  return tiles;
}

// ---------------------------------------------------------------- auto outline (selective, tinted by the neighbour colour)
export function outline(c, k = 0.32) {
  const w = c.width, h = c.height, g = c.getContext("2d"); const id = g.getImageData(0, 0, w, h); const s = id.data; const o = new Uint8ClampedArray(s);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const i = (y * w + x) * 4; if (s[i + 3] > 40) continue;
    for (const [dx, dy] of [[0, 1], [1, 0], [-1, 0], [0, -1]]) {
      const X = x + dx, Y = y + dy; if (X < 0 || Y < 0 || X >= w || Y >= h) continue; const j = (Y * w + X) * 4; if (s[j + 3] < 200 || s[j + 3] === 254) continue;
      o[i] = s[j] * k + 18; o[i + 1] = s[j + 1] * k + 12; o[i + 2] = s[j + 2] * k + 22; o[i + 3] = 255; break;
    }
  }
  g.putImageData(new ImageData(o, w, h), 0, 0); return c;
}

// ---------------------------------------------------------------- characters (chibi, 26x36, foot at y=34)
export const CHAR_W = 26, CHAR_H = 36;
const HEAD = [8, 12, 14, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 14, 12]; // head rows, widest 16
function chibi(spec, dir, f) {
  const [c, g] = mk(CHAR_W, CHAR_H);
  const P = Object.assign({ skin: "#d39a6e", hair: "#2b1d16", shirt: "#e8742a", accent: "#1f3a6e", pants: "#2f3d5c", shoe: "#3a2a20", eye: "#1b1626", mouth: "#9a5040", blush: "#e7907a" }, spec.pal || {});
  const sk = P.skin, skD = shade(sk, -0.18), hr = P.hair, hrD = shade(hr, -0.3), hrL = shade(hr, 0.22), sh = P.shirt, shD = shade(sh, -0.22), shL = shade(sh, 0.18), pa = P.pants, paD = shade(pa, -0.25);
  const R = (x, y, w, h, col) => rect(g, x + 1, y + 1, w, h, col), X = (x, y, col) => px(g, x + 1, y + 1, col);
  const sym = (x, y, w, h, col) => { R(x, y, w, h, col); R(23 - x - w + 1, y, w, h, col); };
  const bob = f === 1 || f === 3 ? -1 : 0; const mascot = !!spec.hat;
  const hw = mascot ? 18 : 16; const hx = 12 - hw / 2; // head left
  if (dir === "down" || dir === "up") {
    const front = dir === "down";
    // legs and shoes (stepping leg lifts one pixel)
    const lL = f === 1 ? 3 : 4, lR = f === 3 ? 3 : 4;
    R(8, 27, 3, lL, pa); R(13, 27, 3, lR, pa); R(15, 27, 1, lR, paD); R(10, 27, 1, lL, paD);
    R(7, 27 + lL, 4, 2, P.shoe); R(13, 27 + lR, 4, 2, P.shoe); R(7, 27 + lL, 4, 1, shade(P.shoe, 0.25)); R(13, 27 + lR, 4, 1, shade(P.shoe, 0.25));
    // arms (swing)
    const aL = f === 1 ? 1 : f === 3 ? -1 : 0, aR = -aL;
    R(5, 20 + bob + aL, 2, 4, sh); R(5, 20 + bob + aL, 1, 4, shL); R(5, 24 + bob + aL, 2, 2, sk);
    R(17, 20 + bob + aR, 2, 4, shD); R(17, 24 + bob + aR, 2, 2, skD);
    // torso
    R(7, 19 + bob, 10, 8, sh); R(7, 19 + bob, 1, 8, shL); R(15, 19 + bob, 2, 8, shD); R(7, 26 + bob, 10, 1, paD);
    if (front) { R(10, 19 + bob, 4, 1, P.accent); X(11, 20 + bob, P.accent); X(12, 20 + bob, P.accent); if (spec.logo) { R(9, 22 + bob, 2, 2, spec.logo); } }
    if (front && spec.jacket) {
      const col = spec.collar || "#f4eee4", tie = spec.tie || "#3a322e";
      R(9, 19 + bob, 6, 2, col); R(8, 19 + bob, 2, 3, col); R(14, 19 + bob, 2, 3, col);
      R(11, 20 + bob, 2, 6, tie); X(11, 20 + bob, shade(tie, 0.25));
    }
    if (spec.overalls) { R(8, 22 + bob, 8, 5, spec.overalls); R(8, 19 + bob, 1, 3, spec.overalls); R(15, 19 + bob, 1, 3, spec.overalls); R(8, 22 + bob, 8, 1, shade(spec.overalls, 0.2)); if (front) { X(9, 22 + bob, "#e3b341"); X(14, 22 + bob, "#e3b341"); R(10, 23 + bob, 4, 2, shade(spec.overalls, -0.15)); } }
    if (spec.plaid) for (let y = 19; y < 26; y++) for (let x = 7; x < 17; x++) if ((x + y) % 3 === 0 && !(spec.overalls && y >= 22 && x >= 8 && x < 16)) X(x, y + bob, shD);
    if (!front && spec.backpack) { R(8, 20 + bob, 8, 6, spec.backpack); R(8, 20 + bob, 8, 1, shade(spec.backpack, 0.3)); R(9, 23 + bob, 6, 1, shade(spec.backpack, -0.3)); }
    if (front && spec.backpack) { R(8, 19 + bob, 1, 5, shade(spec.backpack, -0.2)); R(15, 19 + bob, 1, 5, shade(spec.backpack, -0.2)); }
    // neck + head
    R(10, 18 + bob, 4, 1, skD);
    HEAD.forEach((wd, j) => { const w2 = wd + (hw - 16); R(12 - w2 / 2, 3 + j + bob, w2, 1, sk); });
    R(12 - hw / 2 + 1, 16 + bob, hw - 2, 1, skD); R(12 + hw / 2 - 2, 8 + bob, 1, 8, skD);
    sym(hx - 1, 11 + bob, 1, 3, sk); X(hx - 1, 13 + bob, skD);
    if (front) {
      if (!mascot) {
        // hair cap and bangs
        HEAD.slice(0, 6).forEach((wd, j) => R(12 - wd / 2, 3 + j + bob, wd, 1, hr));
        R(4, 9 + bob, 16, 1, hr); for (const x of [6, 9, 13, 16]) X(x, 10 + bob, hr); R(4, 9 + bob, 2, spec.long ? 13 : 4, hr); R(18, 9 + bob, 2, spec.long ? 13 : 4, hr);
        R(7, 5 + bob, 4, 1, hrL); X(6, 6 + bob, hrL); R(4, 8 + bob, 16, 1, hrD);
        if (spec.wavy) {
          // medium wavy hair like the bust: volume on top, slight side curls, not a wide afro
          R(6, 2 + bob, 12, 2, hr); R(5, 3 + bob, 14, 5, hr); R(4, 5 + bob, 16, 5, hr);
          R(3, 7 + bob, 2, 6, hr); R(3, 12 + bob, 2, 3, hr); // left sideburn/curl
          R(19, 7 + bob, 2, 6, hr); R(19, 12 + bob, 2, 3, hr); // right
          X(5, 6 + bob, hr); X(18, 6 + bob, hr);
          X(8, 9 + bob, hr); X(9, 10 + bob, hr); X(14, 9 + bob, hr); X(15, 10 + bob, hr); // forehead curls
          R(8, 3 + bob, 3, 2, hrL); X(6, 5 + bob, hrL); X(16, 4 + bob, hrL);
          R(4, 11 + bob, 1, 1, hrD); R(19, 11 + bob, 1, 1, hrD);
        }
        if (spec.cap) { HEAD.slice(0, 5).forEach((wd, j) => R(12 - wd / 2, 3 + j + bob, wd, 1, spec.cap)); R(4, 8 + bob, 16, 1, shade(spec.cap, -0.3)); R(6, 9 + bob, 12, 1, shade(spec.cap, -0.15)); R(8, 4 + bob, 3, 1, shade(spec.cap, 0.3)); }
        if (spec.bun) { R(9, 0 + bob, 6, 3, hr); R(10, 0 + bob, 2, 1, hrL); }
        // face
        R(7, 11 + bob, 2, 3, P.eye); R(15, 11 + bob, 2, 3, P.eye); X(8, 11 + bob, "#ffffff"); X(16, 11 + bob, "#ffffff");
        if (spec.glasses) { R(6, 11 + bob, 4, 1, "#2a2a30"); R(14, 11 + bob, 4, 1, "#2a2a30"); R(10, 11 + bob, 4, 1, "#2a2a30"); }
        X(6, 14 + bob, P.blush); X(17, 14 + bob, P.blush); R(11, 15 + bob, 2, 1, P.mouth); X(11, 13 + bob, skD);
        if (spec.mustache) { R(8, 14 + bob, 3, 1, hrD); R(13, 14 + bob, 3, 1, hrD); X(7, 14 + bob, hr); X(16, 14 + bob, hr); R(10, 15 + bob, 4, 1, P.mouth); }
      } else {
        // Paydirt Pete: wide-brim hat, bushy white beard, big nose
        R(7, 0 + bob, 10, 6, spec.hat); R(7, 0 + bob, 10, 1, shade(spec.hat, 0.25)); R(7, 4 + bob, 10, 2, "#ff8200"); R(15, 0 + bob, 2, 4, shade(spec.hat, -0.2));
        R(0, 6 + bob, 24, 2, shade(spec.hat, -0.08)); R(0, 7 + bob, 24, 1, shade(spec.hat, -0.3)); R(1, 6 + bob, 6, 1, shade(spec.hat, 0.2));
        R(5, 8 + bob, 14, 1, shade(sk, -0.35));
        R(7, 10 + bob, 2, 2, P.eye); R(15, 10 + bob, 2, 2, P.eye); X(8, 10 + bob, "#fff"); X(16, 10 + bob, "#fff"); R(6, 9 + bob, 4, 1, "#ecebe6"); R(14, 9 + bob, 4, 1, "#ecebe6");
        R(10, 11 + bob, 4, 3, shade(sk, 0.05)); R(13, 12 + bob, 1, 2, skD); X(10, 11 + bob, shade(sk, 0.3));
        R(5, 14 + bob, 14, 5, "#ecebe6"); R(4, 13 + bob, 2, 4, "#ecebe6"); R(18, 13 + bob, 2, 4, "#ecebe6"); R(7, 19 + bob, 10, 1, "#ecebe6"); R(9, 20 + bob, 6, 1, "#d6d2ca");
        R(7, 13 + bob, 10, 2, "#f7f6f2"); R(11, 16 + bob, 2, 1, P.mouth); R(16, 15 + bob, 3, 4, "#d6d2ca");
      }
    } else {
      // back of head
      if (!mascot) {
        HEAD.forEach((wd, j) => { if (j < 14) R(12 - wd / 2, 3 + j + bob, wd, 1, hr); });
        R(7, 5 + bob, 6, 1, hrL); R(6, 6 + bob, 2, 1, hrL); R(17, 6 + bob, 2, 9, hrD); R(5, 16 + bob, 14, 1, hrD);
        if (spec.long) R(5, 17 + bob, 14, 5, hr);
        if (spec.wavy) {
          R(6, 2 + bob, 12, 2, hr); R(5, 3 + bob, 14, 12, hr);
          R(3, 7 + bob, 2, 7, hr); R(19, 7 + bob, 2, 7, hr);
          R(8, 3 + bob, 4, 2, hrL); R(5, 16 + bob, 14, 2, hrD);
        }
        if (spec.cap) { HEAD.slice(0, 6).forEach((wd, j) => R(12 - wd / 2, 3 + j + bob, wd, 1, spec.cap)); R(10, 8 + bob, 4, 1, shade(spec.cap, -0.3)); }
        if (spec.bun) { R(9, 0 + bob, 6, 3, hr); }
      } else {
        R(7, 0 + bob, 10, 6, spec.hat); R(7, 4 + bob, 10, 2, "#ff8200"); R(0, 6 + bob, 24, 2, shade(spec.hat, -0.08)); R(0, 7 + bob, 24, 1, shade(spec.hat, -0.3));
        R(4, 8 + bob, 16, 9, "#d6d2ca"); R(5, 9 + bob, 6, 1, "#ecebe6");
      }
    }
    if (mascot && front) { // pickaxe in hand
      for (let y = 20; y < 30; y++) X(21, y + bob + aR, "#8a5a32"); X(22, 21 + bob + aR, "#6a4426");
      R(19, 19 + bob + aR, 5, 2, "#9aa4b0"); R(19, 19 + bob + aR, 5, 1, "#e8edf2"); X(18, 20 + bob + aR, "#9aa4b0");
    }
  } else {
    // right-facing side view (left is mirrored)
    const st = f === 1 ? 1 : f === 3 ? -1 : 0; // stride
    const legF = 11 + st * 2, legB = 11 - st * 2;
    R(legB, 27, 3, 4, paD); R(legB, 31, 4, 2, shade(P.shoe, -0.1));
    R(legF, 27, 3, 4, pa); R(legF, 31, 4, 2, P.shoe); R(legF, 31, 4, 1, shade(P.shoe, 0.25));
    // body
    R(8, 19 + bob, 8, 8, sh); R(8, 19 + bob, 1, 8, shL); R(14, 19 + bob, 2, 8, shD); R(8, 26 + bob, 8, 1, paD);
    if (spec.jacket) { R(13, 19 + bob, 3, 2, spec.collar || "#f4eee4"); R(14, 20 + bob, 1, 5, spec.tie || "#3a322e"); }
    if (spec.plaid) for (let y = 19; y < 26; y++) for (let x = 8; x < 16; x++) if ((x + y) % 3 === 0) X(x, y + bob, shD);
    if (spec.overalls) { R(9, 22 + bob, 7, 5, spec.overalls); R(12, 19 + bob, 1, 3, spec.overalls); }
    if (spec.backpack) { R(5, 20 + bob, 3, 6, spec.backpack); R(5, 20 + bob, 3, 1, shade(spec.backpack, 0.3)); }
    // head
    HEAD.forEach((wd, j) => { const w2 = wd - 2 + (hw - 16); R(12 - w2 / 2, 3 + j + bob, w2, 1, sk); });
    R(18, 12 + bob, 1, 2, sk); X(18, 13 + bob, skD); // nose
    R(6, 15 + bob, 12, 1, skD);
    if (!mascot) {
      HEAD.slice(0, 6).forEach((wd, j) => R(12 - (wd - 2) / 2, 3 + j + bob, wd - 2, 1, hr));
      R(5, 9 + bob, 7, spec.long ? 13 : 6, hr); R(12, 9 + bob, 6, 1, hr); X(16, 10 + bob, hr); R(6, 5 + bob, 5, 1, hrL); R(5, 14 + bob, 3, 1, hrD);
      if (spec.wavy) {
        R(6, 2 + bob, 10, 3, hr); R(5, 4 + bob, 12, 5, hr);
        R(4, 8 + bob, 5, 7, hr); R(15, 8 + bob, 3, 2, hr);
        R(7, 3 + bob, 4, 2, hrL); R(4, 14 + bob, 6, 2, hr);
        if (spec.mustache) { R(16, 14 + bob, 3, 1, hrD); X(15, 14 + bob, hrD); }
      }
      if (spec.cap) { HEAD.slice(0, 5).forEach((wd, j) => R(12 - (wd - 2) / 2, 3 + j + bob, wd - 2, 1, spec.cap)); R(12, 8 + bob, 9, 1, shade(spec.cap, -0.2)); }
      if (spec.bun) R(4, 2 + bob, 5, 4, hr);
      R(10, 11 + bob, 1, 3, skD); // ear
      R(15, 11 + bob, 2, 3, P.eye); X(16, 11 + bob, "#ffffff"); X(15, 14 + bob, P.blush); X(17, 15 + bob, P.mouth);
      if (spec.glasses) { R(14, 11 + bob, 4, 1, "#2a2a30"); R(11, 11 + bob, 3, 1, "#2a2a30"); }
    } else {
      R(6, 0 + bob, 11, 6, spec.hat); R(6, 4 + bob, 11, 2, "#ff8200"); R(0, 6 + bob, 25, 2, shade(spec.hat, -0.08)); R(0, 7 + bob, 25, 1, shade(spec.hat, -0.3)); R(6, 0 + bob, 11, 1, shade(spec.hat, 0.25));
      R(5, 8 + bob, 4, 8, "#d6d2ca"); R(15, 10 + bob, 2, 2, P.eye); X(16, 10 + bob, "#fff"); R(14, 9 + bob, 4, 1, "#ecebe6");
      R(18, 11 + bob, 2, 3, shade(sk, 0.05)); R(13, 14 + bob, 6, 4, "#ecebe6"); R(14, 18 + bob, 4, 1, "#d6d2ca"); R(15, 13 + bob, 4, 1, "#f7f6f2"); X(12, 15 + bob, "#d6d2ca");
    }
    // arm swings over the body
    const ax = 11 + st * 2;
    R(ax, 20 + bob, 2, 4, shD); R(ax, 24 + bob, 2, 2, skD); X(ax, 20 + bob, sh);
    if (mascot) { for (let y = 13; y < 26; y++) X(ax + 2, y + bob, "#8a5a32"); R(ax - 1, 12 + bob, 7, 2, "#9aa4b0"); R(ax - 1, 12 + bob, 7, 1, "#e8edf2"); }
  }
  return outline(c);
}
// returns {down:[4], up:[4], left:[4], right:[4], portrait}
export function makeCharacter(spec) {
  const out = { down: [], up: [], left: [], right: [] };
  for (let f = 0; f < 4; f++) {
    out.down.push(chibi(spec, "down", f)); out.up.push(chibi(spec, "up", f));
    const r = chibi(spec, "right", f); out.right.push(r);
    const [l, lg] = mk(CHAR_W, CHAR_H); lg.translate(CHAR_W, 0); lg.scale(-1, 1); lg.drawImage(r, 0, 0); out.left.push(l);
  }
  const [pc, pg] = mk(32, 32); const bg = spec.bg || "#f3d9a4"; rect(pg, 0, 0, 32, 32, bg);
  for (let y = 0; y < 32; y += 2) rect(pg, 0, y, 32, 1, shade(bg, -0.04));
  pg.drawImage(out.down[0], 3, 2, 20, 20, -4, 0, 40, 40);
  out.portrait = pc;
  return out;
}

// Isaac's walk sprite comes from assets/isaac-walk.png (a keyed, quantized
// sheet of his bust-matched chibi). 4 directions x 4 frames, feet at ISAAC_FOOT.
// Idle should use frame 1 (the standing pose); frames are step, stand, step, stand.
export const ISAAC_W = 29, ISAAC_H = 54, ISAAC_FOOT = 51;
export const ISAAC_SHEET = "assets/isaac-walk.png?v=20";

function sliceIsaacFrame(img, col, row) {
  const [c, g] = mk(ISAAC_W, ISAAC_H);
  g.imageSmoothingEnabled = false;
  g.drawImage(img, col * ISAAC_W, row * ISAAC_H, ISAAC_W, ISAAC_H, 0, 0, ISAAC_W, ISAAC_H);
  return c;
}

export function makeIsaacFromImage(img) {
  const rows = { down: 0, left: 1, right: 2, up: 3 };
  const out = { down: [], left: [], right: [], up: [], foot: ISAAC_FOOT };
  for (const [dir, r] of Object.entries(rows)) {
    for (let f = 0; f < 4; f++) out[dir].push(sliceIsaacFrame(img, f, r));
  }
  const [pc, pg] = mk(32, 32);
  const bg = "#d1e3d3";
  rect(pg, 0, 0, 32, 32, bg);
  for (let y = 0; y < 32; y += 2) rect(pg, 0, y, 32, 1, shade(bg, -0.04));
  pg.imageSmoothingEnabled = false;
  // Head crop of the front standing frame (frame 1)
  pg.drawImage(out.down[1], 1, 1, 27, 28, 0, 0, 32, 32);
  out.portrait = pc;
  return out;
}

export function loadIsaac() {
  return new Promise((resolve, reject) => {
    const im = new Image();
    im.decoding = "async";
    im.onload = () => resolve(makeIsaacFromImage(im));
    im.onerror = () => reject(new Error("Failed to load " + ISAAC_SHEET));
    im.src = ISAAC_SHEET;
  });
}


// Adobe the cat: 32x24, 4 directions, walk[4] and idle[4]. Feet near y=22.
export function makeCat() {
  const pal = { f: "#c4844a", F: "#8a5a32", L: "#e2b07a", b: "#f0d4b0", w: "#f7efe4", e: "#2a5a28", n: "#e8a0a0", k: "#1b1626", s: "#6a3a22" };
  const draw = (dir, mode, f) => {
    const [c, g] = mk(32, 24); const P2 = (x, y, col) => px(g, x, y, col);
    const bob = mode === "walk" && (f === 1 || f === 3) ? -1 : 0;
    const tail = mode === "idle" ? Math.round(Math.sin(f * 1.2) * 2) : (f === 1 ? 1 : f === 3 ? -1 : 0);
    const stripe = (x, y, w) => { for (let i = 0; i < w; i++) if (i % 2 === 0) P2(x + i, y, pal.F); };
    if (dir === "down" || dir === "up") {
      const front = dir === "down";
      // tail
      const tx = 15, ty = 16 + bob;
      if (!front) { for (let t = 0; t < 7; t++) rect(g, tx - 1, ty - t, 3, 1, t % 2 ? pal.F : pal.f); P2(tx, ty - 7, pal.L); }
      else { for (let t = 0; t < 4; t++) rect(g, 22 + Math.round(t * 0.2) , 14 + bob + (t > 1 ? 1 : 0) - (tail > 0 && t > 2 ? 1 : 0), 2, 1, t % 2 ? pal.F : pal.f); }
      // body
      rect(g, 10, 11 + bob, 12, 8, pal.f); rect(g, 11, 12 + bob, 10, 6, pal.L);
      if (front) rect(g, 12, 13 + bob, 8, 5, pal.b);
      stripe(12, 12 + bob, 8); stripe(11, 14 + bob, 10);
      // legs
      const lL = mode === "walk" && f === 1 ? 1 : 0, lR = mode === "walk" && f === 3 ? 1 : 0;
      rect(g, 11, 18 + bob, 3, 3 - lL, pal.f); rect(g, 11, 20 + bob - lL, 3, 2, pal.w);
      rect(g, 18, 18 + bob, 3, 3 - lR, pal.F); rect(g, 18, 20 + bob - lR, 3, 2, pal.w);
      // head
      const hy = 4 + bob;
      rect(g, 10, hy + 2, 12, 8, pal.f); rect(g, 11, hy + 3, 10, 6, pal.L);
      // ears
      P2(11, hy, pal.f); rect(g, 10, hy + 1, 3, 2, pal.f); P2(11, hy + 2, pal.n);
      P2(20, hy, pal.f); rect(g, 19, hy + 1, 3, 2, pal.F); P2(20, hy + 2, pal.n);
      if (front) {
        rect(g, 12, hy + 6, 8, 4, pal.b); P2(15, hy + 7, pal.n); P2(16, hy + 7, pal.n);
        rect(g, 13, hy + 5, 2, 2, pal.k); rect(g, 17, hy + 5, 2, 2, pal.k); P2(13, hy + 5, pal.e); P2(17, hy + 5, pal.e);
        P2(14, hy + 9, pal.k); P2(17, hy + 9, pal.k);
        stripe(12, hy + 3, 8);
      } else {
        rect(g, 11, hy + 2, 10, 7, pal.F); stripe(12, hy + 3, 8);
      }
    } else {
      // right-facing (left is mirrored)
      const st = mode === "walk" ? [0, 1, 0, -1][f] : 0;
      // tail
      for (let t = 0; t < 9; t++) {
        const x = 7 - t, y = 13 + bob - Math.round((t + tail) * 0.4) - (t > 5 ? 1 : 0);
        rect(g, x, y, 2, 2, t % 2 ? pal.F : pal.f);
        if (t > 6) P2(x, y, pal.L);
      }
      // body
      rect(g, 10, 11 + bob, 13, 8, pal.f); rect(g, 11, 12 + bob, 11, 6, pal.L);
      rect(g, 12, 14 + bob, 9, 4, pal.b);
      stripe(12, 12 + bob, 9); stripe(13, 15 + bob, 8);
      // legs
      const f1 = 13 + st * 2, b1 = 18 - st * 2, f2 = 12 - st, b2 = 19 + st;
      for (const [lx, dark] of [[f1, false], [b1, true], [f2, false], [b2, true]]) {
        rect(g, lx, 17 + bob, 2, 4, dark ? pal.F : pal.f); P2(lx, 21 + bob, pal.w); P2(lx + 1, 21 + bob, pal.w);
      }
      // head
      const hx = 22, hy = 6 + bob;
      rect(g, hx - 4, hy, 8, 8, pal.f); rect(g, hx - 3, hy + 1, 6, 6, pal.L);
      rect(g, hx - 1, hy + 4, 6, 4, pal.b);
      // ears
      rect(g, hx - 4, hy - 2, 3, 3, pal.f); P2(hx - 3, hy - 1, pal.n); P2(hx - 4, hy - 3, pal.F);
      rect(g, hx + 1, hy - 3, 3, 3, pal.F); P2(hx + 2, hy - 2, pal.n);
      P2(hx + 1, hy + 3, pal.k); P2(hx + 1, hy + 2, pal.e); P2(hx + 3, hy + 5, pal.n);
      P2(hx - 2, hy + 1, pal.F); stripe(hx - 3, hy, 5);
    }
    return outline(c);
  };
  const fr = { right: { walk: [], idle: [] }, left: { walk: [], idle: [] }, down: { walk: [], idle: [] }, up: { walk: [], idle: [] } };
  const flip = (s) => { const [c, g] = mk(32, 24); g.translate(32, 0); g.scale(-1, 1); g.drawImage(s, 0, 0); return c; };
  for (let f = 0; f < 4; f++) {
    for (const dir of ["down", "up", "right"]) {
      const w = draw(dir, "walk", f), i = draw(dir, "idle", f);
      fr[dir].walk.push(w); fr[dir].idle.push(i);
    }
    fr.left.walk.push(flip(fr.right.walk[f])); fr.left.idle.push(flip(fr.right.idle[f]));
  }
  return fr;
}

// Unused roadrunner sprite (kept for reference): 32x24, faces right. frames.walk[3], frames.idle[4]; left versions mirrored
export function makeRoadrunner() {
  const pal = { k: "#7a5a3a", K: "#4a3424", L: "#a8865a", w: "#efe4cf", e: "#151515", b: "#4a4a52", y: "#6f84a6", r: "#e0703a", c: "#2f3a5a" };
  const draw = (mode, f) => {
    const [c, g] = mk(32, 24); const P2 = (x, y, col) => px(g, x, y, col);
    const tailUp = mode === "idle" && f === 1 ? -3 : 0, crest = mode === "idle" && f === 2 ? -2 : 0, peck = mode === "idle" && f === 3 ? 3 : 0, bob = mode === "walk" && f === 1 ? -1 : 0;
    // tail: long, angled up and back
    for (let t = 0; t < 11; t++) { const x = 9 - t, y = 12 + bob - Math.round(t * (0.55 + (tailUp ? 0.35 : 0))); rect(g, x, y, 1, 3, t % 3 ? pal.K : pal.k); if (t > 8) P2(x, y, pal.w); }
    // body
    for (let j = -4; j <= 4; j++) for (let i = -8; i <= 7; i++) { if ((i * i) / 64 + (j * j) / 16 > 1) continue; const n = hash2(i + 20, j + 20, 5); let col = j > 1 ? pal.w : n > 0.72 ? pal.K : n < 0.25 ? pal.L : pal.k; if (j > 1 && i < -3) col = pal.L; P2(15 + i, 13 + j + bob, col); }
    for (let i = -6; i <= 4; i += 3) P2(15 + i, 11 + bob, pal.w);
    // neck + head
    const hx = 22, hy = 7 + bob + peck;
    rect(g, 19, hy + 2, 3, 6 - peck, pal.k); P2(20, hy + 5, pal.w);
    for (let j = -3; j <= 3; j++) for (let i = -3; i <= 3; i++) { if (i * i + j * j > 11) continue; P2(hx + i, hy + j, j > 1 ? pal.L : pal.k); }
    for (let t = 0; t < 4; t++) { P2(hx - 2 - t, hy - 3 - t + crest + (t > 1 ? 1 : 0), t % 2 ? pal.c : pal.K); P2(hx - 1 - t, hy - 3 - t + crest, pal.c); }
    P2(hx + 1, hy - 1, pal.e); P2(hx, hy, pal.y); P2(hx - 1, hy, pal.r); P2(hx + 1, hy, pal.y);
    rect(g, hx + 3, hy, 5, 1, pal.b); rect(g, hx + 3, hy + 1, 4, 1, shade(pal.b, -0.2));
    // legs
    const L = mode === "walk" ? [[0, 0], [3, -2], [-2, 2]][f] : [[0, 0], [0, 0], [0, 0], [0, 0]][f];
    for (const [dx, k] of [[L[0], 0], [L[1], 1]]) { const x = 14 + k * 3; for (let y = 17; y < 22; y++) P2(x + Math.round(((y - 17) / 5) * dx), y + bob * (y < 19 ? 1 : 0), pal.y); P2(x + dx + 1, 21, pal.y); P2(x + dx - 1, 21, pal.y); }
    return outline(c);
  };
  const fr = { right: { walk: [], idle: [] }, left: { walk: [], idle: [] } };
  const flip = (s) => { const [c, g] = mk(32, 24); g.translate(32, 0); g.scale(-1, 1); g.drawImage(s, 0, 0); return c; };
  for (let f = 0; f < 3; f++) { const s = draw("walk", f); fr.right.walk.push(s); fr.left.walk.push(flip(s)); }
  for (let f = 0; f < 4; f++) { const s = draw("idle", f); fr.right.idle.push(s); fr.left.idle.push(flip(s)); }
  return fr;
}

// ---------------------------------------------------------------- plants and props
function blob(g, cx, cy, r, pal, R, lightX = -0.6, lightY = -0.8) {
  for (let y = -r; y <= r; y++) for (let x = -r; x <= r; x++) {
    const d = Math.hypot(x, y * 1.05) + (R() - 0.5) * 1.4; if (d > r) continue;
    const l = (-(x * lightX + y * lightY) / r) * 0.9 + (R() - 0.5) * 0.5 - d / r * 0.25;
    px(g, cx + x, cy + y, l > 0.55 ? pal[3] : l > 0.1 ? pal[2] : l > -0.35 ? pal[1] : pal[0]);
  }
}
export function makeTree(kind = "mesquite", seed = 1) {
  const pals = {
    mesquite: ["#3f5a22", "#5a7a2c", "#7a9a38", "#a2bc52"], paloverde: ["#5f7a26", "#83a032", "#a9c44a", "#d2e070"],
    willow: ["#4a6a2e", "#64883a", "#86a94c", "#a9c868"], ash: ["#35582c", "#4e7a36", "#6f9c44", "#96bd5c"], sumac: ["#7a2a1e", "#a8402a", "#d0643a", "#ee9452"],
  };
  const pal = pals[kind] || pals.mesquite; const frames = [];
  for (let f = 0; f < 2; f++) {
    const R = rng(seed * 31 + 5); const [c, g] = mk(34, 40, true);
    const trunk = kind === "paloverde" ? ["#6f8c3a", "#93ae52", "#556e2c"] : ["#5a3d27", "#80593a", "#3f2a1a"];
    rect(g, 15, 25, 4, 13, trunk[0]); rect(g, 15, 25, 1, 13, trunk[1]); rect(g, 18, 25, 1, 13, trunk[2]); rect(g, 13, 36, 8, 2, trunk[0]); px(g, 12, 37, trunk[0]); px(g, 21, 37, trunk[0]);
    rect(g, 11, 27, 5, 2, trunk[0]); rect(g, 18, 28, 5, 2, trunk[0]);
    const sw = f ? 1 : 0; const R2 = rng(seed * 31 + 9);
    const lobes = [[17, 17, 10], [9, 20, 6], [25, 20, 6], [12, 11, 7], [22, 11, 7], [17, 7, 6], [17, 22, 7]];
    for (const [x, y, r] of lobes) blob(g, x + (y < 14 ? sw : 0), y, r, pal, R2);
    // leaf clumps: little highlight arcs
    for (let k = 0; k < 22; k++) { const x = 6 + ((R() * 22) | 0), y = 3 + ((R() * 20) | 0); const d = g.getImageData(x, y, 1, 1).data; if (d[3] === 0) continue; px(g, x + (y < 14 ? sw : 0), y, R() < 0.6 ? pal[3] : pal[0]); px(g, x + 1 + (y < 14 ? sw : 0), y, R() < 0.5 ? pal[2] : pal[3]); }
    if (kind === "paloverde") for (let k = 0; k < 30; k++) { const x = 5 + ((R() * 24) | 0), y = 2 + ((R() * 22) | 0); if (g.getImageData(x, y, 1, 1).data[3]) px(g, x + (y < 14 ? sw : 0), y, R() < 0.5 ? "#f6d84a" : "#e8b830"); }
    if (kind === "willow") for (let k = 0; k < 18; k++) { const x = 5 + ((R() * 24) | 0), y = 2 + ((R() * 22) | 0); if (g.getImageData(x, y, 1, 1).data[3]) px(g, x + (y < 14 ? sw : 0), y, R() < 0.5 ? "#f0a8cf" : "#d77ab0"); }
    frames.push(outline(c));
  }
  return frames;
}
export function makeShrub(seed = 1, flowers = null, w = 14, h = 11) {
  const R = rng(seed); const [c, g] = mk(w, h, true);
  const pal = ["#3f5f24", "#58802e", "#78a03c", "#a0c25a"];
  blob(g, (w / 2) | 0, (h / 2 + 1) | 0, Math.min(w / 2, h / 2 + 1) - 1, pal, R);
  blob(g, ((w / 2) | 0) - 3, (h / 2 + 2) | 0, 3, pal, R); blob(g, ((w / 2) | 0) + 3, (h / 2 + 2) | 0, 3, pal, R);
  if (flowers) for (let k = 0; k < 7; k++) { const x = 2 + ((R() * (w - 4)) | 0), y = 1 + ((R() * (h - 3)) | 0); if (g.getImageData(x, y, 1, 1).data[3]) px(g, x, y, flowers[(R() * flowers.length) | 0]); }
  return outline(c);
}
export function makeFlowerbed(w = 30, seed = 2, cols = ["#ff8200", "#f2d35e", "#e2455a", "#f7f1e1", "#c46ad0"]) {
  const R = rng(seed); const [c, g] = mk(w, 12);
  rect(g, 1, 3, w - 2, 8, "#8a5a3a"); rect(g, 1, 3, w - 2, 1, "#6a4228"); rect(g, 0, 10, w, 2, "#b8a68a"); rect(g, 0, 10, w, 1, "#d8c9ae");
  for (let x = 2; x < w - 2; x += 3) { const y = 4 + ((R() * 4) | 0); px(g, x, y + 1, "#4f7a32"); px(g, x + 1, y + 2, "#5f8f3c"); px(g, x, y, cols[(R() * cols.length) | 0]); if (R() < 0.6) px(g, x + 1, y - 1 + 2, cols[(R() * cols.length) | 0]); }
  return outline(c);
}
export function makeBikeRack() {
  const [c, g] = mk(30, 16);
  for (let i = 0; i < 4; i++) { const x = 3 + i * 7; rect(g, x, 3, 1, 11, "#6a7480"); rect(g, x + 4, 3, 1, 11, "#6a7480"); rect(g, x, 2, 5, 1, "#9aa4b0"); }
  rect(g, 1, 13, 28, 1, "#4a525c");
  // two parked bikes
  for (const [bx, col] of [[4, "#e8742a"], [18, "#2a9d8f"]]) { g.strokeStyle = "#2a2a30"; g.lineWidth = 1; for (const wy of [4, 11]) { g.beginPath(); g.arc(bx + 3.5, wy + 0.5, 2.5, 0, 7); g.stroke(); } rect(g, bx + 3, 5, 1, 6, col); rect(g, bx + 2, 7, 3, 1, col); }
  return outline(c);
}
export function makeSignpost(text = "", col = "#1f3a6e") {
  const [c, g] = mk(22, 22);
  rect(g, 10, 9, 2, 12, "#5a4a3a"); rect(g, 2, 2, 18, 8, col); rect(g, 2, 2, 18, 1, shade(col, 0.3)); rect(g, 3, 4, 14, 1, "#f2efe6"); rect(g, 3, 6, 10, 1, "#f2efe6"); rect(g, 17, 4, 2, 3, "#ff8200");
  return outline(c);
}
export function makeFirePit(frames = 3) {
  const out = [];
  for (let f = 0; f < frames; f++) {
    const [c, g] = mk(20, 16); g.fillStyle = "#7a6a5a"; g.beginPath(); g.ellipse(10, 11, 9, 4, 0, 0, 7); g.fill(); g.fillStyle = "#a8957f"; g.beginPath(); g.ellipse(10, 10, 9, 4, 0, 0, 7); g.fill(); g.fillStyle = "#3a2a22"; g.beginPath(); g.ellipse(10, 10, 6, 2.5, 0, 0, 7); g.fill();
    for (let k = 0; k < 5; k++) { const x = 7 + k * 1.5, h = 3 + ((k * 7 + f * 3) % 4); rect(g, x, 10 - h, 1, h, k % 2 ? "#ffb02e" : "#ff6a1e"); px(g, x, 10 - h, "#fff1a8"); }
    out.push(outline(c));
  }
  return out;
}
export function makeTrough(frames = 4) { // fountain trough / water runnel (Centennial Plaza water feature)
  const out = [];
  for (let f = 0; f < frames; f++) {
    const [c, g] = mk(48, 14); rect(g, 1, 3, 46, 10, "#9a8a76"); rect(g, 1, 3, 46, 1, "#d8cab3"); rect(g, 3, 5, 42, 6, "#2c88a0");
    for (let x = 3; x < 45; x++) { const w = Math.sin(x * 0.6 - f * 1.5); if (w > 0.6) px(g, x, 6 + ((x + f) % 3), "#7fd0da"); }
    rect(g, 3, 5, 42, 1, "#237489"); rect(g, 1, 12, 46, 1, "#7a6a58");
    out.push(outline(c));
  }
  return out;
}
export function makeBoulder(seed = 4, w = 18, h = 12) {
  const R = rng(seed); const [c, g] = mk(w, h);
  for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) { const dx = (i - w / 2) / (w / 2 - 1), dy = (j - h / 2 - 1) / (h / 2 - 1); const d = dx * dx + dy * dy + (R() - 0.5) * 0.18; if (d > 1) continue; const l = -dx * 0.6 - dy * 0.8 + (R() - 0.5) * 0.4; px(g, i, j, l > 0.6 ? "#d8c4a6" : l > 0 ? "#b49a7c" : l > -0.6 ? "#937a62" : "#6f5a48"); }
  return outline(c);
}
export function makeStool() { const [c, g] = mk(8, 8); rect(g, 1, 1, 6, 3, "#ff8200"); rect(g, 1, 1, 6, 1, "#ffb15c"); rect(g, 2, 4, 1, 3, "#3a3a44"); rect(g, 5, 4, 1, 3, "#3a3a44"); return outline(c); }
export function makeTable() { const [c, g] = mk(22, 16); g.fillStyle = "#e9e2d4"; g.beginPath(); g.ellipse(11, 5, 9, 4, 0, 0, 7); g.fill(); g.fillStyle = "#fffaf0"; g.fillRect(6, 3, 6, 1); rect(g, 10, 8, 2, 6, "#5a5f66"); rect(g, 7, 13, 8, 1, "#5a5f66"); rect(g, 10, 0, 1, 2, "#ff8200"); return outline(c); }
export function makeUmbrellaTable() {
  const [c, g] = mk(30, 34); rect(g, 14, 6, 2, 22, "#5a5f66");
  g.fillStyle = "#ff8200"; g.beginPath(); g.moveTo(1, 10); g.lineTo(15, 1); g.lineTo(29, 10); g.closePath(); g.fill(); g.fillStyle = "#1f3a6e"; for (let i = 0; i < 4; i++) { g.beginPath(); g.moveTo(1 + i * 7, 10); g.lineTo(15, 1); g.lineTo(4 + i * 7, 10); g.fill(); }
  rect(g, 1, 10, 28, 1, "#c86400");
  g.fillStyle = "#e9e2d4"; g.beginPath(); g.ellipse(15, 27, 10, 3.5, 0, 0, 7); g.fill(); rect(g, 7, 30, 1, 3, "#5a5f66"); rect(g, 22, 30, 1, 3, "#5a5f66");
  return outline(c);
}
export function makeYucca(seed = 1) {
  const R = rng(seed); const [c, g] = mk(18, 34);
  rect(g, 8, 12, 3, 20, "#6b5238"); for (let y = 12; y < 32; y += 2) px(g, 8, y, "#8a6b4a"); for (let y = 13; y < 32; y += 3) px(g, 10, y, "#4f3b28");
  rect(g, 6, 31, 7, 2, "#5a442e");
  for (let k = 0; k < 22; k++) { const a = -Math.PI / 2 + (R() - 0.5) * 3.6, L = 5 + R() * 5; for (let t = 0; t < L; t++) px(g, 9 + Math.cos(a) * t, 10 + Math.sin(a) * t, t > L - 2 ? "#a7c06a" : k % 3 ? "#5f8a4a" : "#4a7038"); }
  for (let k = 0; k < 6; k++) px(g, 7 + ((R() * 5) | 0), 1 + ((R() * 4) | 0), "#f4f0dc");
  return outline(c);
}
export function makeOcotillo(seed = 2) {
  const R = rng(seed); const [c, g] = mk(22, 34);
  for (let s = 0; s < 8; s++) {
    const a = -Math.PI / 2 + (s - 3.5) * 0.17 + (R() - 0.5) * 0.08; let x = 11, y = 32; const L = 18 + R() * 12;
    for (let t = 0; t < L; t++) { x += Math.cos(a) * 1 + Math.sin(t * 0.5 + s) * 0.18; y += Math.sin(a); px(g, x, y, "#6b5a40"); if (t % 2 === 0) px(g, x + 1, y, R() < 0.5 ? "#6f9a3c" : "#83ad48"); if (t > L - 3) px(g, x, y - 1, "#e2452f"); }
  }
  return outline(c);
}
export function makePear(seed = 3) {
  const R = rng(seed); const [c, g] = mk(18, 16);
  const pads = [[9, 11, 5, 4], [5, 7, 3.5, 3], [13, 6, 3.5, 3], [9, 4, 3, 2.6]];
  for (const [x, y, rx, ry] of pads) for (let j = -ry; j <= ry; j++) for (let i = -rx; i <= rx; i++) { const d = (i * i) / (rx * rx) + (j * j) / (ry * ry); if (d > 1) continue; px(g, x + i, y + j, d > 0.75 ? "#3f6a34" : i + j < -1 ? "#8bbf5a" : "#6b9e47"); }
  for (let k = 0; k < 12; k++) px(g, 2 + ((R() * 14) | 0), 2 + ((R() * 12) | 0), "#e9e3b8");
  px(g, 5, 3, "#c2304a"); px(g, 13, 2, "#c2304a"); px(g, 9, 0, "#d84a62");
  return outline(c);
}
export function makeBarrel() {
  const [c, g] = mk(14, 13);
  for (let j = -5; j <= 5; j++) for (let i = -6; i <= 6; i++) { const d = (i * i) / 36 + (j * j) / 25; if (d > 1) continue; px(g, 7 + i, 7 + j, i % 3 === 0 ? "#3d6a33" : i < -1 ? "#7aac55" : "#5a8c42"); }
  for (let i = 3; i <= 10; i += 2) px(g, i, 2, "#f2b632"); px(g, 6, 1, "#e85a2a"); px(g, 8, 1, "#f2b632");
  return outline(c);
}
export function makeAgave() {
  const [c, g] = mk(20, 14);
  for (let k = 0; k < 11; k++) { const a = Math.PI + (k / 10) * Math.PI, L = 7 + (k % 2) * 2; for (let t = 0; t < L; t++) { const x = 10 + Math.cos(a) * t * 1.1, y = 12 + Math.sin(a) * t * 0.9; px(g, x, y, t < 2 ? "#4d7a74" : "#7fa8a0"); px(g, x + 1, y, "#5b8b84"); } }
  return outline(c);
}
export function makeRock(seed = 4) {
  const R = rng(seed); const [c, g] = mk(16, 11);
  for (let j = -4; j <= 4; j++) for (let i = -7; i <= 7; i++) { const d = (i * i) / 49 + (j * j) / 16 + (R() - 0.5) * 0.2; if (d > 1) continue; px(g, 8 + i, 6 + j, i + j < -4 ? "#c9b39a" : d > 0.7 ? "#7d6a5a" : "#a08a74"); }
  return outline(c);
}
export function makeLamp() {
  const [c, g] = mk(10, 32);
  rect(g, 4, 8, 2, 22, "#2a2a30"); px(g, 4, 9, "#55555f"); rect(g, 2, 29, 6, 2, "#2a2a30"); rect(g, 3, 28, 4, 1, "#3c3c44");
  rect(g, 1, 1, 8, 1, "#2a2a30"); rect(g, 2, 2, 6, 5, "#2a2a30"); rect(g, 3, 3, 4, 3, "#ffdc7a"); px(g, 3, 3, "#fff6c8"); rect(g, 3, 7, 4, 1, "#2a2a30"); px(g, 4, 0, "#2a2a30"); px(g, 5, 0, "#2a2a30");
  return outline(c);
}
export function makeBench() {
  const [c, g] = mk(26, 14);
  rect(g, 1, 2, 24, 3, "#7a4a2a"); rect(g, 1, 2, 24, 1, "#a2683c"); rect(g, 1, 6, 24, 3, "#8a5630"); rect(g, 1, 6, 24, 1, "#b07444");
  rect(g, 2, 9, 2, 4, "#2a2a30"); rect(g, 22, 9, 2, 4, "#2a2a30"); rect(g, 2, 1, 1, 8, "#2a2a30"); rect(g, 23, 1, 1, 8, "#2a2a30");
  return outline(c);
}
export function makeTrash() {
  const [c, g] = mk(10, 14);
  rect(g, 1, 2, 8, 11, "#3b5f7a"); for (let x = 2; x < 9; x += 2) rect(g, x, 3, 1, 9, "#2c4a60"); rect(g, 0, 1, 10, 2, "#2a2a30"); rect(g, 1, 1, 8, 1, "#4a4a55"); rect(g, 2, 12, 6, 1, "#223a4c");
  return outline(c);
}
export function makeFlag(frames = 3) {
  const out = [];
  for (let f = 0; f < frames; f++) {
    const [c, g] = mk(22, 40); rect(g, 2, 2, 2, 37, "#9aa0a8"); px(g, 2, 2, "#d8dce0"); rect(g, 1, 0, 4, 2, "#d0a83a"); rect(g, 0, 37, 6, 2, "#5a5f66");
    for (let x = 0; x < 16; x++) { const w = Math.round(Math.sin(x * 0.45 - f * 2.1) * 1.3 * (x / 16)); for (let y = 0; y < 10; y++) px(g, 4 + x, 3 + y + w, y < 3 || y > 6 ? "#ff8200" : "#1f3a6e"); if (x === 6 || x === 7) for (let y = 4; y < 7; y++) px(g, 4 + x, 3 + y + w, "#ffffff"); }
    out.push(c);
  }
  return out;
}
export function makePrayerFlags(w = 64, frames = 3) {
  const out = []; const cols = ["#2f6fd0", "#f2f2f2", "#d8382e", "#2f9a4a", "#f2c832"];
  for (let f = 0; f < frames; f++) {
    const [c, g] = mk(w, 30); rect(g, 1, 4, 2, 25, "#6b4a2e"); rect(g, w - 3, 4, 2, 25, "#6b4a2e");
    for (let x = 3; x < w - 3; x++) { const y = 5 + Math.round(Math.sin(((x - 3) / (w - 6)) * Math.PI) * 6); px(g, x, y, "#3a3030"); if ((x - 3) % 6 < 4 && x % 6 !== 0) { const col = cols[(((x - 3) / 6) | 0) % 5]; const fl = Math.round(Math.sin(x * 0.7 + f * 2) * 0.8); for (let k = 1; k < 6; k++) px(g, x + (k > 3 ? fl : 0), y + k, col); } }
    out.push(c);
  }
  return out;
}
export function makePlanter(w = 32) {
  const R = rng(w); const [c, g] = mk(w, 18);
  rect(g, 0, 6, w, 12, "#a8957f"); rect(g, 0, 6, w, 2, "#c9b8a2"); rect(g, 0, 16, w, 2, "#7d6c5a"); for (let x = 6; x < w; x += 8) rect(g, x, 8, 1, 8, "#94826d");
  rect(g, 2, 4, w - 4, 3, "#6b4a30");
  for (let k = 0; k < w / 2; k++) { const x = 2 + ((R() * (w - 4)) | 0), y = 1 + ((R() * 4) | 0); px(g, x, y, ["#e8a23a", "#d8502e", "#f2d35e", "#7aa84a", "#5f8f3c"][(R() * 5) | 0]); px(g, x, y + 1, "#4f7a32"); }
  return outline(c);
}
export function makeFountain(frames = 4) {
  const out = [];
  for (let f = 0; f < frames; f++) {
    const [c, g] = mk(56, 38);
    g.fillStyle = "#8f7d68"; g.beginPath(); g.ellipse(28, 22, 27, 14, 0, 0, 7); g.fill();
    g.fillStyle = "#c9b8a0"; g.beginPath(); g.ellipse(28, 21, 26, 13, 0, 0, 7); g.fill();
    g.fillStyle = "#2c88a0"; g.beginPath(); g.ellipse(28, 21, 22, 10, 0, 0, 7); g.fill();
    for (let y = 11; y < 32; y++) for (let x = 6; x < 50; x++) { const dx = (x - 28) / 22, dy = (y - 21) / 10; if (dx * dx + dy * dy > 1) continue; const w = Math.sin(Math.hypot(x - 28, (y - 21) * 2.2) * 0.7 - f * 1.6); if (w > 0.75) px(g, x, y, "#7fd0da"); else if (w < -0.8) px(g, x, y, "#237489"); }
    rect(g, 25, 8, 6, 14, "#c9b8a0"); rect(g, 25, 8, 2, 14, "#e3d6c2"); rect(g, 23, 6, 10, 3, "#b6a48c");
    for (let k = 0; k < 8; k++) { const a = (k / 8) * 6.28 + f * 0.4, r = 4 + ((f + k) % 3); px(g, 28 + Math.cos(a) * r * 1.6, 4 + Math.sin(a) * r * 0.5 + (k % 2), "#bfe9ee"); }
    rect(g, 27, 1, 2, 5, "#bfe9ee");
    out.push(c);
  }
  return out;
}
export function makeUrn() { // stone urn shaped like a prayer wheel (Centennial Museum entrance)
  const [c, g] = mk(12, 20);
  rect(g, 2, 16, 8, 3, "#9a8a76"); rect(g, 3, 4, 6, 12, "#c2ab88"); rect(g, 3, 4, 2, 12, "#dcc7a4"); rect(g, 8, 4, 1, 12, "#9d8668");
  for (let y = 6; y < 15; y += 3) rect(g, 3, y, 6, 1, "#a8916f"); rect(g, 2, 3, 8, 2, "#b09878"); rect(g, 5, 0, 2, 3, "#d0a83a");
  return outline(c);
}
export function makeBusStop() {
  const [c, g] = mk(34, 34);
  rect(g, 1, 4, 32, 3, "#2a6f76"); rect(g, 1, 4, 32, 1, "#3fa0a8"); rect(g, 2, 7, 2, 24, "#3a3a44"); rect(g, 30, 7, 2, 24, "#3a3a44");
  rect(g, 4, 8, 26, 14, "rgba(150,200,220,0.55)"); rect(g, 4, 8, 26, 1, "rgba(255,255,255,0.6)"); rect(g, 6, 22, 22, 3, "#7a4a2a"); rect(g, 7, 25, 1, 5, "#2a2a30"); rect(g, 26, 25, 1, 5, "#2a2a30");
  // sign
  rect(g, 0, 0, 12, 10, "#f2f2ee"); rect(g, 0, 0, 12, 1, "#e0703a"); g.fillStyle = "#e0703a"; g.beginPath(); g.arc(6, 5, 3, 0, 7); g.fill(); px(g, 5, 4, "#fff"); px(g, 6, 4, "#fff"); px(g, 7, 4, "#fff");
  return outline(c);
}
export function makeBus() {
  const W = 64, Hh = 28; const [c, g] = mk(W, Hh);
  rect(g, 1, 3, 61, 19, "#f3f1ea"); rect(g, 1, 3, 61, 1, "#ffffff"); rect(g, 2, 1, 57, 2, "#d9d7cf");
  // window band
  rect(g, 4, 6, 50, 7, "#24394f"); for (let x = 4; x < 54; x += 9) { rect(g, x, 6, 1, 7, "#f3f1ea"); rect(g, x + 2, 7, 3, 1, "#6f93b0"); px(g, x + 2, 8, "#4a6c88"); }
  rect(g, 55, 5, 6, 10, "#2d4a63"); rect(g, 56, 6, 2, 3, "#86aac4");
  // livery: sunset swoosh
  for (let x = 1; x < 62; x++) { const y = 18 + Math.round(Math.sin(x * 0.08 + 1) * 1); rect(g, x, y, 1, 1, "#f2b632"); rect(g, x, y + 1, 1, 1, "#f08a24"); rect(g, x, y + 2, 1, 2, "#d4452b"); }
  rect(g, 1, 21, 61, 1, "#2a9d8f");
  text3(g, "SUN METRO", 7, 13, "#1f3a6e");
  // door, lights
  rect(g, 46, 13, 7, 9, "#24394f"); rect(g, 49, 13, 1, 9, "#f3f1ea"); rect(g, 61, 16, 2, 2, "#ffe08a"); rect(g, 0, 16, 2, 2, "#d4452b");
  for (const wx of [12, 48]) { g.fillStyle = "#1c1c22"; g.beginPath(); g.arc(wx, 22, 4.5, 0, 7); g.fill(); g.fillStyle = "#8a8f99"; g.beginPath(); g.arc(wx, 22, 2, 0, 7); g.fill(); }
  rect(g, 0, 23, W, 1, "rgba(0,0,0,0)");
  return c;
}
export function makeCar(color = "#c0392b") {
  const [c, g] = mk(30, 20);
  g.fillStyle = "rgba(0,0,0,0.25)"; g.fillRect(2, 16, 26, 3);
  rect(g, 2, 8, 26, 8, color); rect(g, 2, 8, 26, 1, shade(color, 0.3)); rect(g, 7, 3, 15, 6, shade(color, -0.1)); rect(g, 8, 4, 6, 4, "#2b3e52"); rect(g, 15, 4, 6, 4, "#2b3e52"); px(g, 9, 4, "#8fb0c8"); px(g, 16, 4, "#8fb0c8");
  rect(g, 26, 10, 2, 2, "#ffe08a"); rect(g, 2, 10, 1, 2, "#d4452b");
  for (const wx of [8, 22]) { rect(g, wx - 3, 14, 6, 4, "#1c1c22"); rect(g, wx - 1, 15, 2, 2, "#7a7f88"); }
  return outline(c);
}
export function makePicnic() {
  const [c, g] = mk(28, 18);
  rect(g, 2, 1, 24, 2, "#8a5630"); rect(g, 2, 5, 24, 7, "#a2683c"); rect(g, 2, 5, 24, 1, "#c08050"); for (let x = 6; x < 26; x += 5) rect(g, x, 6, 1, 6, "#8a5630"); rect(g, 2, 14, 24, 2, "#8a5630"); rect(g, 5, 12, 2, 5, "#5a3a22"); rect(g, 21, 12, 2, 5, "#5a3a22");
  return outline(c);
}
export function makeShade() { // desert shade sail on posts
  const [c, g] = mk(48, 34);
  rect(g, 3, 6, 2, 27, "#5a5f66"); rect(g, 43, 6, 2, 27, "#5a5f66");
  g.fillStyle = "#f2e6cf"; g.beginPath(); g.moveTo(2, 6); g.lineTo(46, 3); g.lineTo(40, 14); g.lineTo(8, 15); g.closePath(); g.fill();
  g.fillStyle = "#d9c8a8"; g.beginPath(); g.moveTo(8, 15); g.lineTo(40, 14); g.lineTo(34, 11); g.lineTo(12, 11); g.closePath(); g.fill();
  g.strokeStyle = "#ff8200"; g.beginPath(); g.moveTo(2.5, 6.5); g.lineTo(46, 3.5); g.stroke();
  return outline(c);
}

// ---------------------------------------------------------------- Mining Minds (steel pickaxe sculpture)
export function makePickaxe() {
  const [c, g] = mk(56, 72); const [gc, gg] = mk(56, 72);
  // pedestal
  rect(g, 12, 58, 32, 9, "#9a8a76"); rect(g, 12, 58, 32, 2, "#c4b49e"); rect(g, 10, 66, 36, 5, "#7a6a58"); rect(g, 10, 66, 36, 1, "#a8977f");
  for (let x = 16; x < 42; x += 8) rect(g, x, 61, 1, 5, "#857562");
  // handle (leaning slightly), 4px wide steel
  for (let t = 0; t <= 46; t++) { const x = Math.round(29 - t * 0.12), y = 58 - t; rect(g, x - 2, y, 5, 1, "#8f99a5"); px(g, x - 2, y, "#e8edf2"); px(g, x - 1, y, "#c3cbd4"); px(g, x + 2, y, "#5b6470"); gg.fillStyle = t % 8 < 4 ? "#ff8a2a" : "#4a86ff"; gg.fillRect(x - 3, y, 7, 1); }
  // head: curved pick, pointed at both ends
  for (let i = -25; i <= 25; i++) {
    const x = 27 + i, yc = 12 + Math.round((i * i) / 70); const th = Math.max(1, Math.round(6 - Math.abs(i) / 5));
    for (let k = 0; k < th; k++) px(g, x, yc - (th >> 1) + k, k === 0 ? "#eef2f6" : k === th - 1 ? "#5b6470" : "#9aa4b0");
    gg.fillStyle = i < 0 ? "#4a86ff" : "#ff8a2a"; gg.fillRect(x, yc - (th >> 1) - 1, 1, th + 2);
  }
  rect(g, 22, 7, 10, 10, "#7f8894"); rect(g, 22, 7, 10, 2, "#c8d0d8"); rect(g, 31, 9, 1, 8, "#4f5864"); rect(g, 24, 11, 6, 1, "#6a737f");
  return { img: c, glow: gc };
}

// ---------------------------------------------------------------- buildings
// Bhutanese (dzong) style: battered walls, a dark red kemar band under a heavy hipped roof, trapezoid windows.
export function paintDzong(o) {
  const W = o.w * T, Hh = o.h * T; const [c, g] = mk(W, Hh); const [gc, gg] = mk(W, Hh);
  const R = rng(o.seed || 7);
  const towerH = o.tower ? o.tower.h : 0;
  const ov = o.ov ?? 4, roofH = o.roofH ?? 16, bandH = o.bandH ?? 8, baseH = o.baseH ?? 7, batter = o.batter ?? 4;
  const top = towerH; const wallTop = top + roofH + 2 + bandH; const wallBot = Hh - baseH;
  const wall = o.wall || "#efe7d8", roof = o.roof || "#6a4c3e", band = o.band || "#8c2c1f";
  const inset = (y) => ov + Math.round(batter * (1 - (y - wallTop) / Math.max(1, wallBot - wallTop)));
  // tower (drawn first; its base hides behind the main roof)
  if (o.tower) {
    const tw = o.tower.w, tx = Math.round((W - tw) / 2) + (o.tower.dx || 0);
    const tRoof = 12, tBand = 6, tBot = top + roofH - 2;
    rect(g, tx - 3, 3, tw + 6, tRoof - 3, roof); roofTex(g, tx - 3, 3, tw + 6, tRoof - 3, roof, R);
    rect(g, tx - 3, tRoof - 1, tw + 6, 2, shade(roof, -0.45)); rafters(g, tx - 3, tRoof - 1, tw + 6);
    rect(g, tx, tRoof + 1, tw, tBand, band); rosettes(g, tx, tRoof + 1, tw, tBand, band);
    noiseFill(g, tx, tRoof + 1 + tBand, tw, tBot - tRoof - tBand, wall, 0.03, R);
    rect(g, tx, tRoof + 1 + tBand, 2, tBot - tRoof - tBand, shade(wall, 0.25)); rect(g, tx + tw - 3, tRoof + 1 + tBand, 3, tBot - tRoof - tBand, shade(wall, -0.12));
    const nwin = Math.max(1, Math.floor(tw / 14)); for (let i = 0; i < nwin; i++) { const wx = tx + Math.round(((i + 0.5) * tw) / nwin) - 3; window_(g, gg, wx, tRoof + tBand + 6, 6, 8, R, true); }
    // golden finial (gyaltshen)
    rect(g, W / 2 - 1 + (o.tower.dx || 0), 0, 2, 4, "#e3b341"); px(g, W / 2 - 1 + (o.tower.dx || 0), 0, "#fff1a8");
  }
  // walls (trapezoid, battered)
  for (let y = wallTop; y < wallBot; y++) {
    const ins = inset(y);
    for (let x = ins; x < W - ins; x++) {
      const n = hash2(x, y, o.seed || 1);
      let col = wall;
      if (x < ins + 2) col = shade(wall, 0.3); else if (x > W - ins - 4) col = shade(wall, -0.13 - (x - (W - ins - 4)) * 0.03);
      if (n > 0.93) col = shade(col, -0.05); else if (n < 0.05) col = shade(col, 0.08);
      if (y > wallBot - 4 && n > 0.6) col = shade(col, -0.06);
      col = shade(col, -0.07 * ((y - wallTop) / (wallBot - wallTop)));
      if ((x - ins) % 37 === 18 && n > 0.3) col = shade(col, -0.025);
      px(g, x, y, col);
    }
  }
  // lower brick/stone wainscot
  if (o.lower) { const ly = wallBot - o.lower.h; for (let y = ly; y < wallBot; y++) { const ins = inset(y); for (let x = ins; x < W - ins; x++) { const b = (((y - ly) >> 2) % 2 ? (x + 4) >> 3 : x >> 3); const mortar = (y - ly) % 4 === 0 || ((x + (((y - ly) >> 2) % 2 ? 4 : 0)) % 8 === 0); px(g, x, y, mortar ? shade(o.lower.c, -0.25) : shade(o.lower.c, (hash2(b, y >> 2) - 0.5) * 0.12)); } } }
  // glass curtain sections
  for (const gl of o.glass || []) {
    const y0 = wallTop + 2, y1 = wallBot - 2;
    for (let y = y0; y < y1; y++) for (let x = gl.x; x < gl.x + gl.w; x++) { const mull = (x - gl.x) % 6 === 0 || (y - y0) % 9 === 0; const refl = ((x - gl.x) + (y - y0) * 0.6) % 22 < 4; px(g, x, y, mull ? "#c8d2da" : refl ? "#8fc3dc" : y < y0 + (y1 - y0) / 2 ? "#4f8fb0" : "#3b7596"); if (!mull) px(gg, x, y, (x + y) % 3 ? "#ffd98a" : "#fff0c2"); }
    rect(g, gl.x - 1, y0 - 1, gl.w + 2, 1, "#5f6a74"); rect(g, gl.x - 1, y1, gl.w + 2, 1, "#5f6a74");
  }
  // red-and-white banding between floors
  const floors = o.floors || 2;
  if (o.midBands !== false) for (let f = 1; f < floors; f++) { const by = Math.round(wallTop + 3 + f * ((wallBot - wallTop - 6) / floors)) - 2; const ins = inset(by); rect(g, ins, by, W - ins * 2, 3, band); rect(g, ins, by, W - ins * 2, 1, shade(band, 0.2)); for (let x = ins + 3; x < W - ins - 2; x += 6) px(g, x, by + 1, "#efe2c0"); }
  // windows
  const usable = wallBot - wallTop - 6; const fh = usable / floors;
  const skip = (x) => (o.glass || []).some((gl) => x + 10 > gl.x && x < gl.x + gl.w) || (o.door !== false && Math.abs(x + 3 - (o.doorX ?? W / 2)) < (o.doorW || 16) / 2 + 6);
  for (let f = 0; f < floors; f++) {
    const big = f === 0 && o.rabsel; // top floor gets the projecting wooden window
    const wh = big ? 13 : Math.min(12, Math.round(fh * 0.5)); const wwid = big ? 12 : (o.winW || 8);
    const y = Math.round(wallTop + 4 + f * fh + (fh - wh) / 2);
    const ins = inset(y) + 7; const span = W - ins * 2; const n = Math.max(1, Math.floor(span / (o.winGap || 18)));
    for (let i = 0; i < n; i++) {
      const x = Math.round(ins + ((i + 0.5) * span) / n - wwid / 2);
      if (f === floors - 1 && skip(x)) continue;
      if ((o.glass || []).some((gl) => x + wwid > gl.x - 2 && x < gl.x + gl.w + 2)) continue;
      if (big) rabsel(g, gg, x - 3, y - 2, wwid + 6, wh + 3, R); else window_(g, gg, x, y, wwid, wh, R);
    }
  }
  // banners
  for (const bx of o.banners || []) { const by = wallTop + 4; rect(g, bx, by, 6, 22, "#ff8200"); rect(g, bx, by, 6, 1, "#ffb15c"); rect(g, bx + 1, by + 6, 4, 9, "#ffffff"); rect(g, bx + 2, by + 7, 2, 7, "#1f3a6e"); for (let x = 0; x < 6; x += 2) px(g, bx + x, by + 22, "#ff8200"); rect(g, bx - 1, by - 1, 8, 1, "#3a2a20"); }
  // door
  if (o.door !== false) {
    const dw = o.doorW || 16, dx = Math.round((o.doorX ?? W / 2) - dw / 2), dh = o.doorH || 20, dy = wallBot - dh;
    rect(g, dx - 3, dy - 5, dw + 6, 4, "#a3321f"); rect(g, dx - 3, dy - 5, dw + 6, 1, "#e0b050"); for (let x = dx - 2; x < dx + dw + 3; x += 3) px(g, x, dy - 3, "#2fa39a");
    rect(g, dx - 2, dy - 1, dw + 4, dh + 1, "#3b2418");
    rect(g, dx, dy, dw, dh, "#7a4524"); for (let x = dx + 2; x < dx + dw; x += 3) rect(g, x, dy, 1, dh, "#5f341a"); rect(g, dx + dw / 2 - 1, dy, 1, dh, "#3b2418");
    for (let y = dy + 3; y < dy + dh; y += 5) { px(g, dx + 2, y, "#e3b341"); px(g, dx + dw - 3, y, "#e3b341"); }
    rect(gg, dx, dy, dw, 3, "#ffcf6a");
    if (o.glassDoor) { rect(g, dx + 1, dy + 1, dw - 2, dh - 1, "#3b7596"); rect(g, dx + dw / 2 - 1, dy + 1, 1, dh - 1, "#c8d2da"); rect(gg, dx + 1, dy + 1, dw - 2, dh - 1, "#ffd98a"); }
  }
  // gap under roof, kemar band
  rect(g, ov - 1, top + roofH, W - ov * 2 + 2, 2, "#2a1a16");
  rect(g, ov, top + roofH + 2, W - ov * 2, bandH, band); rosettes(g, ov, top + roofH + 2, W - ov * 2, bandH, band);
  // roof (hipped, with ridge), fascia + rafter ends
  for (let y = top; y < top + roofH - 3; y++) { const cut = Math.max(0, 5 - (y - top)); rect(g, cut, y, W - cut * 2, 1, roof); }
  roofTex(g, 0, top, W, roofH - 3, roof, R);
  for (let y = top; y < top + 5; y++) { const cut = 5 - (y - top); rect(g, 0, y, cut, 1, "rgba(0,0,0,0)"); g.clearRect(0, y, cut, 1); g.clearRect(W - cut, y, cut, 1); }
  rect(g, 6, top + 2, W - 12, 1, shade(roof, 0.28));
  rect(g, 0, top + roofH - 3, W, 3, shade(roof, -0.5)); rafters(g, 0, top + roofH - 3, W);
  if (o.finials) for (const fx of o.finials) { rect(g, fx - 1, top - 4, 3, 5, "#e3b341"); px(g, fx, top - 5, "#fff1a8"); }
  // plinth base and steps
  for (let y = wallBot; y < Hh; y++) for (let x = ov - 1; x < W - ov + 1; x++) { const row = (y - wallBot) >> 2; const m = (y - wallBot) % 4 === 3 || (x + row * 5) % 10 === 0; px(g, x, y, m ? "#7f6e5c" : y === wallBot ? "#cbbba3" : shade("#a8957f", (hash2(x >> 3, row) - 0.5) * 0.12)); }
  if (o.door !== false) { const dw = (o.doorW || 16) + 10, dx = Math.round((o.doorX ?? W / 2) - dw / 2); for (let s = 0; s < baseH; s += 2) { rect(g, dx - s, wallBot + s, dw + s * 2, 2, s % 4 ? "#d8cab3" : "#c4b49b"); rect(g, dx - s, wallBot + s, dw + s * 2, 1, "#e9dfcc"); } }
  return { img: c, glow: gc, w: W, h: Hh, doorX: o.doorX ?? W / 2 };

  function roofTex(g2, x0, y0, w, h, base, R2) { for (let y = y0; y < y0 + h; y++) for (let x = x0; x < x0 + w; x++) { const r = y - y0; if ((r + 1) % 3 === 0) { px2(g2, x, y, shade(base, -0.22)); } else if ((x + (((r / 3) | 0) % 2) * 2) % 4 === 0) px2(g2, x, y, shade(base, -0.1)); else if (r < 2) px2(g2, x, y, shade(base, 0.14)); } }
  function px2(g2, x, y, col) { g2.fillStyle = col; g2.fillRect(x, y, 1, 1); }
  function rafters(g2, x0, y0, w) { const cols = ["#d9b45a", "#2f8f86", "#b8382a", "#efe2c0"]; for (let x = x0 + 1, i = 0; x < x0 + w - 1; x += 3, i++) { px2(g2, x, y0 + 1, cols[i % 4]); px2(g2, x, y0 + 2, shade(cols[i % 4], -0.3)); } }
  function rosettes(g2, x0, y0, w, h, b) { rect(g2, x0, y0, w, 1, shade(b, -0.35)); rect(g2, x0, y0 + h - 1, w, 1, shade(b, -0.35)); rect(g2, x0, y0 + 1, w, 1, shade(b, 0.15)); const cy = y0 + (h >> 1); for (let x = x0 + 4; x < x0 + w - 3; x += 8) { rect(g2, x - 1, cy - 1, 3, 3, "#efe2c0"); px2(g2, x, cy, "#d9a84a"); } }
}
function window_(g, gg, x, y, w, h, R, small) {
  // classic Bhutanese window: black trapezoid surround (wider at the bottom), colorful lintel, divided panes
  for (let j = -2; j < h + 2; j++) { const ins = Math.round((1 - (j + 2) / (h + 4)) * 2); rect(g, x - 3 + ins, y + j, w + 6 - ins * 2, 1, "#2b2222"); }
  rect(g, x - 4, y - 5, w + 8, 3, "#a3321f"); rect(g, x - 4, y - 5, w + 8, 1, "#e0b050"); for (let i = x - 3; i < x + w + 4; i += 2) px(g, i, y - 3, i % 4 ? "#2fa39a" : "#efe2c0");
  rect(g, x, y, w, h, "#2d4258"); rect(g, x, y + (h >> 1), w, h - (h >> 1), "#22344a");
  px(g, x, y, "#7aa3bd"); px(g, x + 1, y, "#4a6f8a"); px(g, x, y + 1, "#4a6f8a");
  rect(g, x + (w >> 1), y, 1, h, "#5a3a24"); if (h > 7) rect(g, x, y + (h >> 1), w, 1, "#5a3a24");
  rect(g, x - 2, y + h + 2, w + 4, 1, "#cfc3ad");
  if (R() < 0.78) { gg.fillStyle = "#ffcf6a"; gg.fillRect(x, y, w, h); gg.fillStyle = "#fff0c2"; gg.fillRect(x, y, w, 2); gg.clearRect(x + (w >> 1), y, 1, h); }
}
function rabsel(g, gg, x, y, w, h, R) {
  rect(g, x - 1, y - 2, w + 2, 2, "#a3321f"); rect(g, x - 1, y - 2, w + 2, 1, "#e0b050");
  rect(g, x, y, w, h, "#6b3a1f"); rect(g, x, y, w, 1, "#8a5030");
  const panes = Math.max(2, Math.floor(w / 5)); const pw = (w - 2) / panes;
  for (let i = 0; i < panes; i++) { const px0 = Math.round(x + 1 + i * pw); rect(g, px0 + 1, y + 2, Math.round(pw) - 1, h - 5, "#2d4258"); px(g, px0 + 1, y + 2, "#7aa3bd"); if (R() < 0.8) { gg.fillStyle = "#ffcf6a"; gg.fillRect(px0 + 1, y + 2, Math.round(pw) - 1, h - 5); } }
  for (let xx = x; xx < x + w; xx += 2) px(g, xx, y + h - 2, "#2fa39a"); rect(g, x, y + h - 1, w, 1, "#3b2418");
}

export function paintLhakhang() {
  const b = paintDzong({ w: 8, h: 7, floors: 1, wall: "#f4efe4", roof: "#7a3a28", band: "#9c2a1c", roofH: 14, bandH: 10, baseH: 12, batter: 3, doorW: 14, winGap: 22, seed: 41, finials: [64] });
  const g = b.img.getContext("2d");
  // painted cornice in three colors and a golden ridge ornament
  for (let x = 6; x < b.w - 6; x += 4) { rect(g, x, 26, 2, 2, ["#2f8f86", "#e3b341", "#d8382e"][(x / 4) % 3 | 0]); }
  rect(g, 20, 0, 88, 2, "#e3b341"); rect(g, 60, 0, 8, 4, "#e3b341");
  // raised white platform
  rect(g, 2, b.h - 12, b.w - 4, 2, "#e9e2d2");
  return b;
}
export function paintArena() { // Don Haskins Center: a big ribbed dome on a dzong-style drum
  const W = 12 * T, Hh = 9 * T; const [c, g] = mk(W, Hh); const [gc, gg] = mk(W, Hh);
  const cx = W / 2, domeB = 62, drumB = Hh - 10;
  // drum walls (battered)
  for (let y = domeB; y < drumB; y++) { const ins = Math.round(4 * (1 - (y - domeB) / (drumB - domeB))) + 3; for (let x = ins; x < W - ins; x++) { const fromL = x - ins, fromR = W - ins - 1 - x; let col = "#e3d3b2"; const n = hash2(x, y, 3); if (n > 0.86) col = shade(col, -0.06); else if (n < 0.1) col = shade(col, 0.06); if (fromL < 2) col = shade(col, 0.2); if (fromR < 3) col = shade(col, -0.22); px(g, x, y, col); } }
  // kemar band in UTEP orange and blue with mandalas
  rect(g, 5, domeB, W - 10, 8, "#8e2d22"); rect(g, 5, domeB, W - 10, 1, "#b8503a"); rect(g, 5, domeB + 7, W - 10, 1, "#4a1a14");
  for (let x = 14; x < W - 12; x += 22) { for (const [dx, dy, col] of [[0, 0, "#d8382e"], [-1, 0, "#f7f1e1"], [1, 0, "#f7f1e1"], [0, -1, "#2f9a4a"], [0, 1, "#2f6fd0"], [-2, -1, "#f2c832"], [2, -1, "#f2c832"], [-2, 1, "#f2c832"], [2, 1, "#f2c832"], [-1, -2, "#f2c832"], [1, -2, "#f2c832"], [-1, 2, "#f2c832"], [1, 2, "#f2c832"]]) px(g, x + dx, domeB + 4 + dy, col); }
  rect(g, 6, domeB + 8, W - 12, 2, "#ff8200"); rect(g, 6, domeB + 10, W - 12, 1, "#1f3a6e");
  // windows between piers
  for (let x = 14; x < W - 14; x += 12) { if (Math.abs(x + 3 - cx) < 26) continue; for (let j = 0; j < 22; j++) rect(g, x - (j < 1 ? 0 : 1), domeB + 16 + j, 8 + (j < 1 ? 0 : 2) - 2, 1, "#2a1f1c"); for (let j = 1; j < 21; j++) rect(g, x, domeB + 16 + j, 6, 1, mix("#7ea8c4", "#2e4a63", j / 21)); px(g, x + 1, domeB + 18, "#e9f4fb"); rect(gg, x, domeB + 17, 6, 20, "#ffd98a"); rect(g, x - 1, domeB + 13, 8, 2, "#3f7f5a"); }
  // entrance: glass with a canopy and the name in letters
  rect(g, cx - 24, domeB + 20, 48, drumB - domeB - 20, "#2a1f1c");
  for (let y = domeB + 21; y < drumB; y++) for (let x = cx - 23; x < cx + 23; x++) px(g, x, y, (x - cx + 23) % 6 === 0 ? "#c8d2da" : (x + y) % 11 < 2 ? "#a9d0e6" : mix("#6f9fc0", "#2e5878", (y - domeB - 21) / (drumB - domeB - 21)));
  rect(gg, cx - 23, domeB + 21, 46, drumB - domeB - 21, "#ffe2a0");
  rect(g, cx - 30, domeB + 13, 60, 7, "#1f3a6e"); rect(g, cx - 30, domeB + 13, 60, 1, "#4a6fae"); text3(g, "HASKINS", cx - text3w("HASKINS") / 2, domeB + 14, "#ffffff");
  // dome with ribs and panel rings
  for (let y = 4; y < domeB; y++) { const t = (y - 4) / (domeB - 4); const half = Math.sqrt(Math.max(0, 1 - (1 - t) * (1 - t))) * (W / 2 - 8); for (let x = Math.ceil(cx - half); x < cx + half; x++) { const u = (x - cx) / half; const l = -u * 0.4 + (1 - t) * 0.3; const ang = Math.asin(Math.max(-1, Math.min(1, u))); const rib = Math.abs(((ang * 8 / Math.PI) % 1 + 1) % 1 - 0.5) > 0.44; let col = shade("#cfd5db", l); if (rib) col = shade("#9aa3ad", l * 0.6); if ((y - 4) % 9 === 0) col = shade(col, -0.1); if (hash2(x, y, 9) > 0.93) col = shade(col, 0.06); px(g, x, y, col); } }
  rect(g, cx - 8, 2, 16, 4, "#b9c1c9"); rect(g, cx - 6, 1, 12, 1, "#e8edf2"); rect(g, cx - 1, 0, 2, 2, "#ff8200");
  // plinth and steps
  rect(g, 2, drumB, W - 4, Hh - drumB - 2, "#b2a089"); rect(g, 2, drumB, W - 4, 1, "#d6c7ae");
  for (let s2 = 0; s2 < 8; s2 += 2) { rect(g, cx - 28 - s2, drumB + s2, 56 + s2 * 2, 2, s2 % 4 ? "#d8cab3" : "#c4b49b"); rect(g, cx - 28 - s2, drumB + s2, 56 + s2 * 2, 1, "#ece2cf"); }
  for (let x = 8; x < W - 8; x += 9) { if (Math.abs(x - cx) < 36) continue; const r = 3; for (let j = -r; j <= 1; j++) for (let i = -r - 1; i <= r + 1; i++) if ((i * i) / 16 + (j * j) / 9 <= 1) px(g, x + i, drumB + 1 + j, i + j < -1 ? "#9cbe58" : i + j < 1 ? "#78a03c" : "#58802e"); }
  outline(c, 0.4);
  return { img: c, glow: gc, w: W, h: Hh, doorX: cx };
}
export function paintStadium() { // Sun Bowl: a bowl cut into the foothills, orange seating, green field
  const W = 24 * T, Hh = 15 * T; const [c, g] = mk(W, Hh); const [gc, gg] = mk(W, Hh);
  const cx = W / 2, cy = Hh / 2 + 4, rx = W / 2 - 4, ry = Hh / 2 - 8;
  for (let y = 0; y < Hh; y++) for (let x = 0; x < W; x++) {
    const dx = (x - cx) / rx, dy = (y - cy) / ry; const d = Math.pow(dx ** 4 + dy ** 4, 0.25) * 0.6 + Math.sqrt(dx * dx + dy * dy) * 0.4; if (d > 1) continue;
    let col;
    if (d > 0.965) col = "#8f7d68";
    else if (d > 0.93) col = "#d8cab3";
    else if (d > 0.52) { const tier = Math.floor((d - 0.52) / 0.0205); const aisle = Math.abs(Math.atan2(dy, dx) * 8 / Math.PI % 1) < 0.05; col = aisle ? "#d8cab3" : tier % 2 ? (dy < 0 ? "#ff8a1e" : "#e8741a") : (dy < 0 ? "#d9661a" : "#c75a14"); if (d > 0.88 && d < 0.905) col = "#1f3a6e"; }
    else if (d > 0.49) col = "#3b3b44";
    else col = "#4f9a3f";
    px(g, x, y, col);
  }
  // field: rectangle with yard lines and end zones
  const fw = rx * 0.44, fh = ry * 0.36;
  for (let y = cy - fh; y < cy + fh; y++) for (let x = cx - fw; x < cx + fw; x++) { const u = (x - (cx - fw)) / (2 * fw); const ez = u < 0.09 || u > 0.91; const stripe = Math.floor(u * 22) % 2; px(g, x, y, ez ? "#1f3a6e" : stripe ? "#58a646" : "#4f9a3f"); }
  for (let k = 1; k < 11; k++) { const x = cx - fw + (2 * fw) * (0.09 + k * 0.082); rect(g, x, cy - fh, 1, fh * 2, "rgba(255,255,255,0.75)"); }
  rect(g, cx - fw, cy - fh, fw * 2, 1, "#ffffff"); rect(g, cx - fw, cy + fh - 1, fw * 2, 1, "#ffffff");
  rect(g, cx - 4, cy - 4, 8, 8, "#ff8200"); text3(g, "UTEP", cx - fw + 3, cy - 2, "#ffffff"); text3(g, "UTEP", cx + fw - 17, cy - 2, "#ffffff");
  // press box on the far side and scoreboard
  rect(g, cx - 40, 6, 80, 14, "#e9e2d4"); rect(g, cx - 40, 6, 80, 2, "#8c2c1f"); rect(g, cx - 36, 10, 72, 6, "#2d4258"); rect(gg, cx - 36, 10, 72, 6, "#ffd98a");
  // entrance gate at the bottom
  rect(g, cx - 22, Hh - 26, 44, 20, "#c9b08a"); rect(g, cx - 22, Hh - 26, 44, 4, "#8c2c1f"); rect(g, cx - 22, Hh - 26, 44, 1, "#e0b050"); text3(g, "SUN BOWL", cx - text3w("SUN BOWL") / 2, Hh - 25, "#ffffff");
  rect(g, cx - 10, Hh - 18, 20, 12, "#3b2418"); rect(g, cx - 9, Hh - 17, 18, 11, "#24394f"); rect(gg, cx - 9, Hh - 17, 18, 3, "#ffcf6a");
  // light towers
  const towers = [];
  for (const [tx, ty] of [[34, 26], [W - 38, 26], [24, Hh - 56], [W - 28, Hh - 56]]) { rect(g, tx, ty, 3, 40, "#5f6874"); rect(g, tx - 5, ty - 6, 13, 7, "#3a3f46"); for (let i = 0; i < 4; i++) { px(g, tx - 4 + i * 3, ty - 4, "#fff6c8"); px(g, tx - 4 + i * 3, ty - 3, "#ffe08a"); } towers.push([tx + 1, ty - 4]); }
  outline(c, 0.4);
  return { img: c, glow: gc, w: W, h: Hh, doorX: cx, towers };
}

// ---------------------------------------------------------------- Franklin Mountains backdrop with the El Paso star
// Paints the ridge into g between y=0 and y=h (pixels). Returns the star light positions.
export function paintMountains(g, w, h, seed = 3, starAt = 0.36) {
  const R = rng(seed);
  for (let y = 0; y < h; y++) { const t = y / h; g.fillStyle = mix("#86b4d6", "#e7d6bc", Math.min(1, t * 1.5)); g.fillRect(0, y, w, 1); }
  const layers = [
    { base: 0.5, lit: "#b4abcf", col: "#9b91bb", sh: "#8479a6", peaks: Math.ceil(w / 60), hmin: 0.18, hmax: 0.42, slope: [0.45, 0.8] },
    { base: 0.78, lit: "#c99c84", col: "#ad8270", sh: "#8c6559", peaks: Math.ceil(w / 85), hmin: 0.22, hmax: 0.62, slope: [0.55, 0.95] },
    { base: 1.0, lit: "#d6ad8c", col: "#bb9274", sh: "#9c7562", peaks: Math.ceil(w / 110), hmin: 0.08, hmax: 0.24, slope: [0.6, 1.1] },
  ];
  let mid = null;
  layers.forEach((L, li) => {
    const pk = []; for (let k = 0; k < L.peaks; k++) pk.push({ x: (k + R() * 0.9) * (w / L.peaks), y: h * (L.base - (L.hmin + R() * (L.hmax - L.hmin))), s: L.slope[0] + R() * (L.slope[1] - L.slope[0]) });
    const top = new Float32Array(w), own = new Int16Array(w);
    for (let x = 0; x < w; x++) { let m = h * L.base, o = -1; for (let k = 0; k < pk.length; k++) { const v = pk[k].y + Math.abs(x - pk[k].x) * pk[k].s; if (v < m) { m = v; o = k; } } top[x] = m + (hash2(x >> 1, li, seed) - 0.5) * 2.5 + (hash2(x >> 3, li + 7, seed) - 0.5) * 3; own[x] = o; }
    for (let x = 0; x < w; x++) {
      const y0 = Math.max(0, Math.round(top[x])); const o = own[x]; const litSide = o >= 0 && x < pk[o].x;
      for (let y = y0; y < h; y++) {
        const dd = y - y0; let col = litSide ? L.lit : L.col;
        // sub-ridges: diagonal facets that run down from the crest
        const facet = Math.sin((x * (litSide ? 1 : -1) + y * 0.9) * 0.11 + hash2(x >> 5, li) * 3);
        if (facet > 0.55) col = litSide ? L.col : L.sh; else if (facet < -0.75) col = shade(col, 0.07);
        if (!litSide && dd > 3 && facet > 0.2) col = L.sh;
        if ((dd + ((x * 0.45) | 0)) % 11 === 0 && hash2(x >> 2, y, li) > 0.35) col = shade(col, -0.08);
        if (dd < 1) col = shade(L.lit, 0.15);
        const n = hash2(x, y, seed + li); if (n > 0.94) col = shade(col, -0.06); else if (n < 0.04) col = shade(col, 0.06);
        if (li > 0 && dd > 6 && hash2(x, y, 77 + li) > 0.986) { px(g, x, y, "#5f6b3a"); px(g, x + 1, y, "#76844a"); continue; }
        px(g, x, y, col);
      }
    }
    if (li === 1) mid = top;
  });
  for (let k = 0; k < w / 20; k++) { const x = R() * w, y = h - 4 - R() * 10; g.fillStyle = "#8f7462"; g.beginPath(); g.ellipse(x, y, 3 + R() * 4, 2 + R() * 2, 0, 0, 7); g.fill(); g.fillStyle = "#c9a890"; g.fillRect(x - 2, y - 2, 2, 1); }
  // the star: a five-pointed outline of lights on the mid ridge, facing campus
  let sx = Math.round(w * starAt); let best = sx; for (let x = sx - 40; x < sx + 40; x++) if (x > 30 && x < w - 30 && mid[x] < mid[best]) best = x; sx = best;
  const Rr = 24; const sy = Math.round(Math.min(h * 0.78 - Rr, mid[sx] + Rr + 8)); const pts = [];
  const corners = []; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + (i * Math.PI) / 5; const r = i % 2 ? Rr * 0.42 : Rr; corners.push([sx + Math.cos(a) * r * 1.15, sy + Math.sin(a) * r * 0.85]); }
  for (let i = 0; i < 10; i++) { const [x0, y0] = corners[i], [x1, y1] = corners[(i + 1) % 10]; const n = Math.max(2, Math.round(Math.hypot(x1 - x0, y1 - y0) / 3)); for (let k = 0; k < n; k++) { const x = Math.round(x0 + ((x1 - x0) * k) / n), y = Math.round(y0 + ((y1 - y0) * k) / n); pts.push([x, y]); px(g, x, y, "#fff3c4"); px(g, x + 1, y, "#fff3c4"); px(g, x, y + 1, "#6f5048"); px(g, x + 1, y + 1, "#6f5048"); } }
  return { star: pts, starCenter: [sx, sy] };
}
