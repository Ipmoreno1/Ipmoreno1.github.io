// mascots.js : original UTEP / El Paso themed mascot characters for the pixel campus.
// Costumed, upright chibi mascots (28x44 frames, feet at y=41) with 4 walk frames per direction and a 64x64
// dialog portrait. Species: a hard-hat miner, a desert jackrabbit, a Texas horned lizard and a coyote.
// All art is drawn here pixel by pixel; nothing is traced from another game or from official mascot art.
import { mk, shade, outline, text3 } from "./art.js?v=15";

export const MW = 28, MH = 44, MFOOT = 41;
const px = (g, x, y, c) => { g.fillStyle = c; g.fillRect(x, y, 1, 1); };
const rect = (g, x, y, w, h, c) => { if (w > 0 && h > 0) { g.fillStyle = c; g.fillRect(x, y, w, h); } };
// head shape: 18 wide, 16 tall
const HEADW = [10, 14, 16, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 16, 14, 10];

export const SPECIES = {
  miner: { fur: "#e2a77c", furD: "#c2825a", belly: "#f1c9a3", jersey: "#1f3a6e", jerseyD: "#162a52", trim: "#ff8200", shoe: "#5a3a22", pants: "#2f5a9a", letters: "", bg: "#f6c98a" },
  jack: { fur: "#bba88a", furD: "#8f7c62", belly: "#efe4cf", jersey: "#ff8200", jerseyD: "#d0651a", trim: "#1f3a6e", shoe: "#1f3a6e", pants: "#bba88a", letters: "EP", bg: "#cfe3f0" },
  lizard: { fur: "#c99a5e", furD: "#8a5f34", belly: "#f0d9a8", jersey: "#1f3a6e", jerseyD: "#162a52", trim: "#ff8200", shoe: "#8a5f34", pants: "#c99a5e", letters: "TX", bg: "#f3dfb8" },
  coyote: { fur: "#a88a66", furD: "#6f583e", belly: "#f1e6d0", jersey: "#ff8200", jerseyD: "#d0651a", trim: "#1f3a6e", shoe: "#3a2a20", pants: "#a88a66", letters: "26", bg: "#e8d3c0" },
};

function frame(kind, dir, f) {
  const S = SPECIES[kind]; const [c, g] = mk(MW, MH);
  const R = (x, y, w, h, col) => rect(g, x, y, w, h, col), X = (x, y, col) => px(g, x, y, col);
  const bob = f === 1 || f === 3 ? -1 : 0; const cx = 14;
  const fur = S.fur, furD = S.furD, furL = shade(fur, 0.2), jer = S.jersey, jerD = S.jerseyD, jerL = shade(jer, 0.2);
  const side = dir === "right", front = dir === "down", back = dir === "up";
  // ---------------- legs + feet
  if (!side) {
    const lL = f === 1 ? 4 : 5, lR = f === 3 ? 4 : 5;
    R(9, 34, 4, lL, S.pants); R(15, 34, 4, lR, S.pants); R(12, 34, 1, lL, shade(S.pants, -0.25)); R(18, 34, 1, lR, shade(S.pants, -0.25));
    R(8, 34 + lL, 5, 2, S.shoe); R(15, 34 + lR, 5, 2, S.shoe); R(8, 34 + lL, 5, 1, shade(S.shoe, 0.3)); R(15, 34 + lR, 5, 1, shade(S.shoe, 0.3));
    if (kind === "jack") { R(7, 39 + (lL - 5), 6, 2, S.belly); R(15, 39 + (lR - 5), 6, 2, S.belly); } // big rabbit feet
  } else {
    const st = f === 1 ? 1 : f === 3 ? -1 : 0; const lf = 13 + st * 2, lb = 13 - st * 2;
    R(lb, 34, 3, 5, shade(S.pants, -0.2)); R(lb, 39, 5, 2, shade(S.shoe, -0.15));
    R(lf, 34, 3, 5, S.pants); R(lf, 39, 5, 2, S.shoe); R(lf, 39, 5, 1, shade(S.shoe, 0.3));
    if (kind === "jack") R(lf, 39, 7, 2, S.belly);
  }
  // ---------------- tails (behind the body on back/side views)
  if (back || side) {
    const tx = side ? 7 : 14;
    if (kind === "jack") { R(tx - 2, 30 + bob, 4, 4, "#fbf6ea"); X(tx - 2, 30 + bob, "#e6ddca"); }
    if (kind === "coyote") { for (let k = 0; k < 7; k++) R(tx - (side ? k : 2), 28 + bob + k, side ? 3 : 5, 1, k > 4 ? "#2a1f1c" : k % 2 ? furD : fur); }
    if (kind === "lizard") { for (let k = 0; k < 6; k++) R(side ? tx - k - 1 : tx - 1, 32 + bob + (side ? (k >> 1) : k), side ? 2 : 3, 1, k % 2 ? furD : fur); }
  }
  // ---------------- torso (jersey) + arms
  const tx0 = side ? 9 : 7, tw = side ? 11 : 14;
  R(tx0, 24 + bob, tw, 10, jer); R(tx0, 24 + bob, 1, 10, jerL); R(tx0 + tw - 2, 24 + bob, 2, 10, jerD); R(tx0, 33 + bob, tw, 1, shade(jer, -0.35));
  R(tx0, 24 + bob, tw, 1, S.trim); // collar trim
  if (kind === "miner") { // orange shirt sleeves under blue overalls with straps and a brass buckle
    R(tx0, 24 + bob, tw, 3, "#e0702a"); R(tx0 + 2, 24 + bob, 2, 3, jer); R(tx0 + tw - 4, 24 + bob, 2, 3, jer);
    if (front) { X(tx0 + 2, 27 + bob, "#e3b341"); X(tx0 + tw - 3, 27 + bob, "#e3b341"); R(10, 29 + bob, 8, 2, shade(jer, -0.15)); R(13, 25 + bob, 2, 1, "#3a6ad0"); }
  } else if (front && S.letters) { text3(g, S.letters, 10, 27 + bob, "#fbf6ea"); R(tx0, 32 + bob, tw, 1, S.trim); }
  else if (back && S.letters) { R(tx0 + 2, 26 + bob, tw - 4, 1, S.trim); }
  const armC = kind === "miner" ? "#e0702a" : jer;
  if (!side) {
    const aL = f === 1 ? 1 : f === 3 ? -1 : 0, aR = -aL;
    R(5, 25 + bob + aL, 2, 6, armC); R(5, 25 + bob + aL, 1, 6, shade(armC, 0.2)); R(5, 31 + bob + aL, 2, 2, fur);
    R(21, 25 + bob + aR, 2, 6, shade(armC, -0.2)); R(21, 31 + bob + aR, 2, 2, furD);
    if (kind === "miner" && front) { // pickaxe held in the right hand
      for (let y = 22; y < 35; y++) X(23, y + bob + aR, y % 3 ? "#8a5a32" : "#6a4426");
      R(20, 21 + bob + aR, 7, 2, "#9aa4b0"); R(20, 21 + bob + aR, 7, 1, "#e8edf2"); X(19, 22 + bob + aR, "#9aa4b0"); X(27, 22 + bob + aR, "#7a848e");
    }
    if (kind === "lizard" && front) { X(5, 33 + bob + aL, furD); X(7, 33 + bob + aL, furD); }
  } else {
    const st = f === 1 ? 1 : f === 3 ? -1 : 0; const ax = 13 + st * 2;
    R(ax, 25 + bob, 3, 6, shade(armC, -0.15)); R(ax, 31 + bob, 3, 2, furD);
    if (kind === "miner") { for (let y = 16; y < 32; y++) X(ax + 3, y + bob, "#8a5a32"); R(ax, 15 + bob, 8, 2, "#9aa4b0"); R(ax, 15 + bob, 8, 1, "#e8edf2"); }
  }
  // ---------------- head
  const hy = 9 + bob; const hx = side ? 1 : 0;
  const headRow = (j, col) => { const w = HEADW[j]; R(cx - w / 2 + hx, hy + j, w, 1, col); };
  // ears behind the head
  if (kind === "jack") {
    const ear = (ex, tilt) => { for (let j = 0; j < 10; j++) { const xx = ex + Math.round(j * tilt); R(xx, hy - 9 + j, 3, 1, fur); X(xx + 1, hy - 8 + j, j > 0 && j < 9 ? "#e8a0a0" : fur); } R(ex + Math.round(9 * tilt) - 0, hy - 9, 3, 1, shade(fur, 0.15)); };
    if (side) { ear(9, 0.25); ear(12, 0.15); } else { ear(8, 0.1); ear(17, -0.1); }
  }
  if (kind === "coyote") {
    const ear = (ex, dirx) => { for (let j = 0; j < 6; j++) { const w = Math.max(1, j); R(dirx > 0 ? ex : ex - w + 1, hy - 4 + j, w, 1, fur); if (j > 1 && j < 5) X(dirx > 0 ? ex + 1 : ex - 1, hy - 4 + j, "#e8b8a0"); } };
    if (side) { ear(9, 1); ear(12, 1); } else { ear(6, 1); ear(21, -1); }
  }
  for (let j = 0; j < 16; j++) headRow(j, fur);
  // shading on the head
  for (let j = 2; j < 14; j++) X(cx + HEADW[j] / 2 - 1 + hx, hy + j, furD);
  for (let j = 3; j < 10; j++) X(cx - HEADW[j] / 2 + hx, hy + j, furL);
  R(cx - 6 + hx, hy + 15, 12, 1, furD);
  if (kind === "miner") {
    // hard hat with a headlamp; short dark hair at the sides; friendly brown mustache
    const hat = "#ff8200";
    for (let j = 0; j < 6; j++) { const w = [10, 14, 16, 18, 18, 18][j]; R(cx - w / 2 + hx, hy - 2 + j, w, 1, j === 0 ? shade(hat, 0.3) : hat); }
    R(cx - 11 + hx + (side ? 2 : 0), hy + 4, 22, 2, shade(hat, -0.15)); R(cx - 11 + hx + (side ? 2 : 0), hy + 5, 22, 1, shade(hat, -0.35));
    R(cx - 1 + hx, hy - 2, 2, 6, shade(hat, -0.12)); // ridge
    if (!back) { const lx = side ? cx + 6 : cx - 2; R(lx, hy, 4, 3, "#3a3a44"); R(lx + 1, hy + 1, 2, 1, "#fff1a8"); }
    if (front) { R(cx - 9, hy + 6, 2, 5, "#2b1d16"); R(cx + 7, hy + 6, 2, 5, "#2b1d16"); }
    if (back) R(cx - 8, hy + 6, 16, 8, "#2b1d16");
    if (side) { R(cx - 8 + hx, hy + 6, 3, 6, "#2b1d16"); R(cx - 2 + hx, hy + 7, 2, 3, shade(fur, -0.12)); }
  }
  if (front) {
    if (kind === "lizard") { // crown of horns and side spines
      for (const [hxx, h] of [[-7, 4], [-4, 5], [-1, 3], [2, 3], [5, 5], [8, 4]]) for (let k = 0; k < h; k++) X(cx + hxx - (k > 1 ? 0 : 0), hy - k + 1, k === h - 1 ? "#f0d9a8" : furD);
      for (let j = 5; j < 13; j += 2) { X(cx - 10, hy + j, furD); X(cx + 9, hy + j, furD); }
      for (const [sx, sy] of [[-5, 4], [3, 3], [-2, 6], [6, 7], [-7, 9]]) R(cx + sx, hy + sy, 2, 1, furD);
    }
    // muzzle / face patch
    if (kind === "coyote") { R(cx - 4, hy + 9, 8, 6, S.belly); R(cx - 3, hy + 8, 6, 1, S.belly); R(cx - 2, hy + 9, 4, 2, "#2a1f1c"); X(cx - 1, hy + 9, "#6a5a5a"); }
    if (kind === "jack") { R(cx - 4, hy + 9, 8, 5, S.belly); X(cx - 1, hy + 9, "#e8a0a0"); X(cx, hy + 9, "#e8a0a0"); R(cx - 1, hy + 12, 2, 2, "#fbfbfb"); X(cx - 1, hy + 13, "#d8d8d8"); for (const s of [-1, 1]) { X(cx + s * 6, hy + 10, "#5a4a3a"); X(cx + s * 7, hy + 11, "#5a4a3a"); } }
    if (kind === "lizard") { R(cx - 6, hy + 11, 12, 4, S.belly); R(cx - 5, hy + 12, 10, 1, "#7a4a2a"); X(cx - 6, hy + 11, "#7a4a2a"); X(cx + 5, hy + 11, "#7a4a2a"); }
    if (kind === "miner") { R(cx - 4, hy + 11, 8, 2, "#5a3a22"); X(cx - 5, hy + 12, "#5a3a22"); X(cx + 4, hy + 12, "#5a3a22"); R(cx - 1, hy + 9, 2, 2, shade(fur, -0.1)); R(cx - 2, hy + 13, 4, 1, "#9a5040"); X(cx - 6, hy + 11, "#e7907a"); X(cx + 5, hy + 11, "#e7907a"); }
    // eyes (big, glossy)
    const ey = kind === "lizard" ? hy + 6 : hy + 6; const eo = kind === "lizard" ? 6 : 4; const eh = kind === "lizard" ? 2 : 3;
    for (const s of [-1, 1]) { const ex = cx + s * eo - (s < 0 ? 2 : 0); R(ex, ey, 2, eh, "#1b1626"); X(ex + (s < 0 ? 0 : 0), ey, "#ffffff"); if (kind === "coyote") X(ex + 1, ey + 2, "#d9a030"); }
    if (kind === "lizard") { R(cx - 9, hy + 8, 4, 1, furD); R(cx + 5, hy + 8, 4, 1, furD); }
    if (kind === "coyote") { R(cx - 6, hy + 5, 3, 1, furD); R(cx + 3, hy + 5, 3, 1, furD); }
  } else if (side) {
    const fx = cx + 9 + hx; // face side (right)
    if (kind === "coyote") { R(fx - 2, hy + 8, 5, 5, fur); R(fx - 1, hy + 11, 4, 2, S.belly); R(fx + 2, hy + 8, 2, 2, "#2a1f1c"); }
    if (kind === "jack") { R(fx - 3, hy + 9, 4, 5, S.belly); X(fx, hy + 9, "#e8a0a0"); X(fx - 1, hy + 13, "#fbfbfb"); }
    if (kind === "lizard") { for (const [hxx, h] of [[-8, 5], [-5, 4], [-2, 3]]) for (let k = 0; k < h; k++) X(cx + hxx + k, hy - k + 2, k === h - 1 ? "#f0d9a8" : furD); R(fx - 6, hy + 11, 8, 3, S.belly); R(fx - 6, hy + 12, 7, 1, "#7a4a2a"); }
    if (kind === "miner") { R(fx - 4, hy + 11, 4, 2, "#5a3a22"); R(fx - 1, hy + 8, 2, 3, shade(fur, -0.05)); }
    R(fx - 5, hy + 6, 2, kind === "lizard" ? 2 : 3, "#1b1626"); X(fx - 5, hy + 6, "#ffffff");
    if (kind !== "miner" && kind !== "lizard") R(cx - 3 + hx, hy + 7, 2, 3, furD); // ear root / cheek
  } else {
    // back of head: a little darker crown
    if (kind !== "miner") for (let j = 2; j < 13; j++) R(cx - HEADW[j] / 2 + 2, hy + j, HEADW[j] - 4, 1, shade(fur, -0.06));
    else { R(cx - 8, hy + 6, 16, 8, "#2b1d16"); R(cx - 6, hy + 7, 5, 1, "#4a3428"); }
    if (kind === "lizard") for (const [hxx, h] of [[-7, 4], [-4, 5], [-1, 3], [2, 3], [5, 5], [8, 4]]) for (let k = 0; k < h; k++) X(cx + hxx, hy - k + 1, furD);
  }
  return outline(c);
}

// returns {down:[4], up:[4], left:[4], right:[4], portrait, foot} like makeCharacter, plus `foot` for drawing
export function makeMascot(kind) {
  const out = { down: [], up: [], left: [], right: [], foot: MFOOT, mascot: kind };
  for (let f = 0; f < 4; f++) {
    out.down.push(frame(kind, "down", f)); out.up.push(frame(kind, "up", f));
    const r = frame(kind, "right", f); out.right.push(r);
    const [l, lg] = mk(MW, MH); lg.translate(MW, 0); lg.scale(-1, 1); lg.drawImage(r, 0, 0); out.left.push(l);
  }
  out.portrait = portraitOf(out.down[0], SPECIES[kind].bg, 0);
  return out;
}
// 64x64 dialog portrait: the head and shoulders of a front frame at 2x on a striped card
export function portraitOf(src, bg, yOff = 0, sx = -2, sy = -2) {
  const [pc, pg] = mk(64, 64); rect(pg, 0, 0, 64, 64, bg);
  for (let y = 0; y < 64; y += 4) rect(pg, 0, y, 64, 2, shade(bg, -0.05));
  pg.imageSmoothingEnabled = false; pg.drawImage(src, sx, sy, 32, 32, 0, yOff, 64, 64);
  return pc;
}
