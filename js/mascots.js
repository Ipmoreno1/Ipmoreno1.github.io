// mascots.js : original fan-inspired college mascot characters for the pixel campus.
// Each mascot is a distinct original pixel character (48x56, feet at y=53) with its own
// silhouette, outfit, school colors and a signature prop. 4 walk frames per direction
// and a 64x64 dialog portrait. Nothing is traced from official mascot art or logos.
import { mk, shade, outline } from "./art.js?v=20";

export const MW = 48, MH = 56, MFOOT = 53;
const px = (g, x, y, c) => { g.fillStyle = c; g.fillRect(x, y, 1, 1); };
const rect = (g, x, y, w, h, c) => { if (w > 0 && h > 0) { g.fillStyle = c; g.fillRect(x, y, w, h); } };
const oval = (g, cx, cy, rx, ry, col) => {
  for (let y = -ry; y <= ry; y++) {
    const t = 1 - (y * y) / (ry * ry || 1); if (t <= 0) continue;
    const w = Math.floor(rx * Math.sqrt(t));
    rect(g, cx - w, cy + y, w * 2 + 1, 1, col);
  }
};

export const SPECIES = {
  miner:    { type: "miner",  fur: "#e2a77c", furD: "#c2825a", belly: "#f1c9a3", jersey: "#1f3a6e", jerseyD: "#162a52", trim: "#ff8200", shoe: "#5a3a22", pants: "#2f5a9a", bg: "#f6c98a" },
  longhorn: { type: "steer",  fur: "#c9a06a", furD: "#8a6a3a", belly: "#f3e6c8", jersey: "#bf5700", jerseyD: "#8a3c00", trim: "#f3e6c8", shoe: "#5a3a22", pants: "#8a6a3a", bg: "#f3d0a8" },
  bear:     { type: "bear",   fur: "#6b4226", furD: "#4a2c18", belly: "#d4b896", jersey: "#154734", jerseyD: "#0e3324", trim: "#c4b581", shoe: "#3a2a20", pants: "#4a2c18", bg: "#d5e6d0" },
  eagle:    { type: "eagle",  fur: "#d8c8a4", furD: "#8a7a58", belly: "#f4efe4", jersey: "#00853e", jerseyD: "#006430", trim: "#ffffff", shoe: "#3a2a20", pants: "#2f4a38", bg: "#d4eddc" },
  gator:    { type: "gator",  fur: "#4a7a3a", furD: "#2f5428", belly: "#c6d47a", jersey: "#0021a5", jerseyD: "#00166e", trim: "#fa4616", shoe: "#2f5428", pants: "#2f5428", bg: "#d7e8c8" },
  aggie:    { type: "collie", fur: "#e8d4a8", furD: "#b89868", belly: "#f7f1e1", jersey: "#500000", jerseyD: "#3a0000", trim: "#ffffff", shoe: "#3a2a20", pants: "#3a0000", bg: "#f0d8d8" },
  frog:     { type: "frog",   fur: "#6a8a3a", furD: "#4a6228", belly: "#c8e08a", jersey: "#4d1979", jerseyD: "#351056", trim: "#ffffff", shoe: "#4a6228", pants: "#4a6228", bg: "#e6d8f0" },
  cougar:   { type: "cougar", fur: "#c99a5e", furD: "#8a5f34", belly: "#f1e6d0", jersey: "#c8102e", jerseyD: "#8a0b1f", trim: "#ffffff", shoe: "#5a3a22", pants: "#8a5f34", bg: "#f3d0c8" },
  raider:   { type: "horse",  fur: "#3a2a20", furD: "#1f1814", belly: "#c9a06a", jersey: "#cc0000", jerseyD: "#8a0000", trim: "#1a1a1a", shoe: "#1a1a1a", pants: "#1a1a1a", bg: "#e8c8c8" },
  lobo:     { type: "wolf",   fur: "#8a8a92", furD: "#5a5a62", belly: "#e8e8ee", jersey: "#ba0c2f", jerseyD: "#7a081f", trim: "#a7a8aa", shoe: "#3a2a20", pants: "#5a5a62", bg: "#e4d0d4" },
  mustang:  { type: "horse",  fur: "#8a5a32", furD: "#5a3a20", belly: "#e8c9a0", jersey: "#0033a0", jerseyD: "#00216e", trim: "#c8102e", shoe: "#3a2a20", pants: "#5a3a20", bg: "#d0d8f0" },
  owl:      { type: "owl",    fur: "#7a5a3a", furD: "#5a3e28", belly: "#f0e6d0", jersey: "#00205b", jerseyD: "#00143a", trim: "#c4b581", shoe: "#3a2a20", pants: "#5a3e28", bg: "#d4d8e8" },
  runner:   { type: "bird",   fur: "#7a5a3a", furD: "#4a3424", belly: "#efe4cf", jersey: "#0c2340", jerseyD: "#081830", trim: "#f15a22", shoe: "#6f84a6", pants: "#4a3424", bg: "#f8dcc8" },
  wildcat:  { type: "cougar", fur: "#c4a06a", furD: "#8a6a3a", belly: "#f1e6d0", jersey: "#0c234b", jerseyD: "#081830", trim: "#ab0520", shoe: "#3a2a20", pants: "#8a6a3a", bg: "#d8dce8" },
  panther:  { type: "cougar", fur: "#2a2a30", furD: "#151518", belly: "#c9a06a", jersey: "#4f2d7f", jerseyD: "#351e58", trim: "#fdb813", shoe: "#151518", pants: "#151518", bg: "#e6d8f0" },
};

const bobOf = (f) => (f === 1 || f === 3 ? -1 : 0);
const stride = (f) => (f === 1 ? 1 : f === 3 ? -1 : 0);
const eye = (g, x, y, w = 3, h = 3) => {
  rect(g, x, y, w, h, "#f7f3ee"); px(g, x + w - 2, y + 1, "#3a2418"); px(g, x + w - 1, y + 1, "#1a1210"); px(g, x, y, "#ffffff");
};
const pickaxe = (g, x, y, flip = 1) => {
  for (let i = 0; i < 16; i++) px(g, x + (flip > 0 ? 0 : 0), y + i, i % 3 ? "#8a5a32" : "#6a4426");
  rect(g, x - 5, y, 11, 3, "#9aa4b0"); rect(g, x - 5, y, 11, 1, "#e8edf2");
  px(g, x - 6, y + 1, "#9aa4b0"); px(g, x + 5, y + 1, "#7a848e");
};

function frame(kind, dir, f) {
  const [c, g] = mk(MW, MH);
  const S = SPECIES[kind];
  const drawers = {
    miner: drawMiner, bear: drawBear, gator: drawGator, longhorn: drawLonghorn, eagle: drawEagle,
    aggie: drawAggie, frog: drawFrog, cougar: drawCougar, raider: drawRaider, lobo: drawLobo,
    mustang: drawMustang, owl: drawOwl, runner: drawRunner, wildcat: drawWildcat, panther: drawPanther,
  };
  (drawers[kind] || drawCougar)(g, S, dir, f, kind);
  return outline(c);
}

// ---------------- Pete the Miner: stocky human, orange helmet + lamp, blue overalls, pickaxe
function drawMiner(g, S, dir, f) {
  const bob = bobOf(f), side = dir === "right", front = dir === "down", back = dir === "up";
  const cx = 24, hy = 10 + bob;
  const skin = "#e2a77c", skinD = "#c2825a", skinL = "#f1c9a3", hat = "#ff8200", hatD = "#d86a10", hatL = "#ffb15c";
  // legs / boots
  if (!side) {
    const lL = f === 1 ? 5 : 7, lR = f === 3 ? 5 : 7;
    rect(g, 17, 38, 6, lL, S.pants); rect(g, 25, 38, 6, lR, S.pants);
    rect(g, 22, 38, 1, lL, shade(S.pants, -0.25)); rect(g, 30, 38, 1, lR, shade(S.pants, -0.25));
    rect(g, 16, 38 + lL, 7, 3, S.shoe); rect(g, 25, 38 + lR, 7, 3, S.shoe);
    rect(g, 16, 38 + lL, 7, 1, shade(S.shoe, 0.25)); rect(g, 25, 38 + lR, 7, 1, shade(S.shoe, 0.25));
  } else {
    const st = stride(f), lf = 22 + st * 3, lb = 22 - st * 3;
    rect(g, lb, 38, 5, 7, shade(S.pants, -0.2)); rect(g, lb, 45, 7, 3, shade(S.shoe, -0.1));
    rect(g, lf, 38, 5, 7, S.pants); rect(g, lf, 45, 7, 3, S.shoe); rect(g, lf, 45, 7, 1, shade(S.shoe, 0.25));
  }
  // overalls + orange shirt
  const tx = side ? 16 : 15, tw = side ? 16 : 18;
  rect(g, tx, 26 + bob, tw, 13, S.pants);
  rect(g, tx, 26 + bob, tw, 5, "#e0702a");
  if (!side) {
    rect(g, 19, 26 + bob, 3, 6, S.pants); rect(g, 26, 26 + bob, 3, 6, S.pants); // straps
    if (front) { px(g, 20, 31 + bob, "#e3b341"); px(g, 27, 31 + bob, "#e3b341"); rect(g, 22, 34 + bob, 5, 3, shade(S.pants, -0.15)); }
  } else {
    rect(g, 24, 26 + bob, 3, 6, S.pants);
  }
  // arms
  if (!side) {
    const aL = f === 1 ? 1 : f === 3 ? -1 : 0, aR = -aL;
    rect(g, 11, 27 + bob + aL, 4, 8, "#e0702a"); rect(g, 11, 35 + bob + aL, 4, 3, skin);
    rect(g, 33, 27 + bob + aR, 4, 8, "#c45e20"); rect(g, 33, 35 + bob + aR, 4, 3, skinD);
    if (front) pickaxe(g, 36, 18 + bob + aR);
  } else {
    const st = stride(f), ax = 22 + st * 3;
    rect(g, ax, 27 + bob, 5, 8, "#c45e20"); rect(g, ax, 35 + bob, 5, 3, skinD);
    pickaxe(g, ax + 5, 16 + bob);
  }
  // head
  oval(g, cx + (side ? 1 : 0), hy + 8, 8, 9, skin);
  if (side) rect(g, cx + 8, hy + 9, 3, 3, skin); // nose
  // hat
  oval(g, cx + (side ? 1 : 0), hy + 2, 8, 5, hat);
  rect(g, cx - 12 + (side ? 2 : 0), hy + 6, 24, 3, hatD);
  rect(g, cx - 12 + (side ? 2 : 0), hy + 6, 24, 1, hatL);
  rect(g, cx - 1 + (side ? 2 : 0), hy - 2, 3, 6, hatD); // ridge
  if (!back) {
    const lx = side ? cx + 6 : cx - 3;
    rect(g, lx, hy + 1, 5, 4, "#3a3a44"); rect(g, lx + 1, hy + 2, 3, 2, "#fff1a8"); // lamp
  }
  if (front) {
    // hair peeking at sides
    rect(g, cx - 9, hy + 7, 3, 6, "#3a2a20"); rect(g, cx + 7, hy + 7, 3, 6, "#3a2a20");
    eye(g, cx - 6, hy + 8); eye(g, cx + 2, hy + 8);
    rect(g, cx - 1, hy + 10, 2, 2, skinD); // nose
    // mustache
    rect(g, cx - 6, hy + 13, 12, 2, "#3a2a20"); px(g, cx - 7, hy + 13, "#3a2a20"); px(g, cx + 6, hy + 13, "#3a2a20");
    rect(g, cx - 2, hy + 15, 4, 1, "#9a5040"); // smile
    px(g, cx - 8, hy + 12, "#e7907a"); px(g, cx + 7, hy + 12, "#e7907a");
  } else if (side) {
    rect(g, cx - 8, hy + 7, 4, 7, "#3a2a20"); // back hair
    eye(g, cx + 3, hy + 8, 3, 3);
    rect(g, cx + 4, hy + 13, 6, 2, "#3a2a20");
    px(g, cx + 8, hy + 15, "#9a5040");
  } else {
    rect(g, cx - 8, hy + 7, 16, 10, "#3a2a20");
    rect(g, cx - 12, hy + 6, 24, 3, hatD);
    oval(g, cx, hy + 2, 8, 5, hat);
  }
}

// ---------------- Baylor Bear: huge round body, round ears, green/gold letterman, gold scarf
function drawBear(g, S, dir, f) {
  const bob = bobOf(f), side = dir === "right", front = dir === "down", back = dir === "up";
  const cx = 24, hy = 12 + bob;
  // short thick legs
  if (!side) {
    const lL = f === 1 ? 3 : 5, lR = f === 3 ? 3 : 5;
    rect(g, 15, 42, 7, lL, S.furD); rect(g, 26, 42, 7, lR, S.fur);
    oval(g, 18, 42 + lL, 5, 2, S.shoe); oval(g, 29, 42 + lR, 5, 2, S.shoe);
  } else {
    const st = stride(f);
    oval(g, 20 - st * 2, 47, 5, 2, S.shoe); rect(g, 18 - st * 2, 40, 6, 7, S.furD);
    oval(g, 26 + st * 2, 47, 5, 2, S.shoe); rect(g, 23 + st * 2, 40, 6, 7, S.fur);
  }
  // tail
  if (back || side) oval(g, side ? 14 : 24, 40 + bob, 4, 3, S.furD);
  // barrel torso: green letterman, bright gold sleeves, gold scarf at the neck only
  const gold = "#e0c040", goldD = "#b89420";
  oval(g, cx, 34 + bob, side ? 11 : 13, 11, S.jersey);
  if (!side) {
    rect(g, 11, 27 + bob, 6, 12, gold); rect(g, 31, 27 + bob, 6, 12, goldD);
    rect(g, 11, 27 + bob, 6, 2, shade(gold, 0.25));
    oval(g, 12, 39 + bob, 3, 3, S.fur); oval(g, 35, 39 + bob, 3, 3, S.furD);
    if (front) { rect(g, 20, 32 + bob, 8, 2, gold); px(g, 22, 36 + bob, gold); px(g, 25, 36 + bob, gold); }
  } else {
    rect(g, 28, 27 + bob, 6, 12, gold);
    oval(g, 32, 39 + bob, 3, 3, S.furD);
  }
  if (front) { rect(g, 18, 23 + bob, 12, 3, gold); rect(g, 16, 24 + bob, 3, 6, gold); }
  else if (side) { rect(g, 22, 23 + bob, 8, 3, gold); rect(g, 28, 24 + bob, 3, 5, gold); }
  else { rect(g, 18, 23 + bob, 12, 3, gold); }
  // head + round ears
  if (!side) {
    oval(g, 14, hy, 4, 4, S.fur); oval(g, 34, hy, 4, 4, S.fur);
    oval(g, 14, hy, 2, 2, S.belly); oval(g, 34, hy, 2, 2, S.belly);
  } else {
    oval(g, 20, hy, 4, 4, S.fur); oval(g, 20, hy, 2, 2, S.belly);
  }
  oval(g, cx + (side ? 2 : 0), hy + 6, 9, 8, S.fur);
  if (front) {
    oval(g, cx, hy + 9, 5, 4, S.belly);
    eye(g, cx - 5, hy + 5, 3, 3); eye(g, cx + 2, hy + 5, 3, 3);
    rect(g, cx - 1, hy + 9, 3, 2, "#1b1626"); // nose
  } else if (side) {
    oval(g, cx + 6, hy + 9, 4, 4, S.belly);
    eye(g, cx + 4, hy + 5, 3, 3);
    rect(g, cx + 8, hy + 9, 2, 2, "#1b1626");
  }
}

// ---------------- Florida Gator: long snout, ridged tail, hunched, orange/blue jersey
function drawGator(g, S, dir, f) {
  const bob = bobOf(f), side = dir === "right", front = dir === "down", back = dir === "up";
  const cx = 24, hy = 16 + bob;
  // bowed short legs
  if (!side) {
    const lL = f === 1 ? 3 : 5, lR = f === 3 ? 3 : 5;
    rect(g, 16, 42, 6, lL, S.furD); rect(g, 26, 42, 6, lR, S.fur);
    rect(g, 14, 42 + lL, 8, 2, S.belly); rect(g, 26, 42 + lR, 8, 2, S.belly);
    for (const x of [14, 17, 26, 29]) px(g, x, 43 + (x < 20 ? lL : lR), S.furD); // claws
  } else {
    const st = stride(f);
    rect(g, 20 - st * 2, 42, 5, 5, S.furD); rect(g, 18 - st * 2, 47, 8, 2, S.belly);
    rect(g, 26 + st * 2, 42, 5, 5, S.fur); rect(g, 25 + st * 2, 47, 8, 2, S.belly);
  }
  // ridged tail
  if (back || side) {
    for (let k = 0; k < 12; k++) {
      const tx = side ? 12 - k : 24 - (k % 3) + 1;
      const ty = 36 + bob + (side ? Math.floor(k / 3) : k);
      rect(g, tx, ty, side ? 3 : 4, 2, k % 2 ? S.furD : S.fur);
      if (k % 2) px(g, tx + 1, ty - 1, shade(S.fur, 0.2));
    }
  }
  // hunched torso, blue jersey with orange trim
  oval(g, cx, 34 + bob, side ? 10 : 11, 9, S.jersey);
  rect(g, cx - (side ? 10 : 11), 26 + bob, side ? 20 : 22, 2, S.trim);
  if (front) rect(g, 21, 32 + bob, 6, 2, S.trim);
  // short arms
  if (!side) {
    const aL = stride(f), aR = -aL;
    rect(g, 11, 28 + bob + aL, 5, 7, S.jersey); oval(g, 12, 36 + bob + aL, 3, 2, S.fur);
    rect(g, 32, 28 + bob + aR, 5, 7, S.jerseyD); oval(g, 35, 36 + bob + aR, 3, 2, S.furD);
  } else {
    const st = stride(f);
    rect(g, 26 + st * 2, 28 + bob, 5, 7, S.jerseyD); oval(g, 30 + st * 2, 36 + bob, 3, 2, S.furD);
  }
  // football under one arm when front
  if (front) { oval(g, 35, 34 + bob, 4, 3, "#8a5a32"); rect(g, 33, 33 + bob, 5, 1, "#f4eee4"); }
  // head + LONG snout
  oval(g, cx + (side ? 2 : 0), hy + 4, 7, 6, S.fur);
  if (front) {
    rect(g, cx - 7, hy + 6, 14, 6, S.fur);
    rect(g, cx - 8, hy + 8, 16, 4, S.belly);
    rect(g, cx - 2, hy + 9, 4, 2, "#1b1626"); // nostrils
    for (const s of [-6, -3, 2, 5]) px(g, cx + s, hy + 8, S.furD); // teeth hint
    eye(g, cx - 6, hy + 2, 3, 2); eye(g, cx + 3, hy + 2, 3, 2);
    rect(g, cx - 9, hy + 4, 3, 1, S.furD); rect(g, cx + 6, hy + 4, 3, 1, S.furD); // brow ridges
  } else if (side) {
    rect(g, cx + 6, hy + 5, 14, 6, S.fur);
    rect(g, cx + 7, hy + 8, 14, 3, S.belly);
    px(g, cx + 18, hy + 7, "#1b1626");
    for (let i = 0; i < 5; i++) px(g, cx + 8 + i * 2, hy + 7, S.furD);
    eye(g, cx + 4, hy + 3, 3, 2);
  } else {
    for (let k = 0; k < 6; k++) px(g, cx - 3 + k, hy - 1, k % 2 ? shade(S.fur, 0.2) : S.furD);
  }
}

// ---------------- Texas Longhorn: wide horns, burnt-orange vest, white blaze, hooves, lasso
function drawLonghorn(g, S, dir, f) {
  const bob = bobOf(f), side = dir === "right", front = dir === "down", back = dir === "up";
  const cx = 24, hy = 14 + bob;
  const horn = S.belly, hornD = shade(S.belly, -0.2);
  // hooves
  if (!side) {
    const lL = f === 1 ? 4 : 6, lR = f === 3 ? 4 : 6;
    rect(g, 17, 40, 5, lL, S.furD); rect(g, 26, 40, 5, lR, S.fur);
    rect(g, 16, 40 + lL, 6, 3, "#3a2a20"); rect(g, 26, 40 + lR, 6, 3, "#3a2a20");
    px(g, 18, 40 + lL + 1, "#5a3a22"); px(g, 28, 40 + lR + 1, "#5a3a22");
  } else {
    const st = stride(f);
    rect(g, 18 - st * 2, 40, 5, 6, S.furD); rect(g, 17 - st * 2, 46, 6, 3, "#3a2a20");
    rect(g, 25 + st * 2, 40, 5, 6, S.fur); rect(g, 25 + st * 2, 46, 6, 3, "#3a2a20");
  }
  // tail tuft
  if (back || side) {
    for (let k = 0; k < 8; k++) rect(g, side ? 14 - k : 23, 36 + bob + (side ? (k >> 1) : k), 3, 1, k > 5 ? "#3a2a20" : S.furD);
  }
  // torso + burnt orange vest
  oval(g, cx, 32 + bob, side ? 9 : 10, 10, S.fur);
  rect(g, cx - (side ? 8 : 9), 26 + bob, side ? 16 : 18, 12, S.jersey);
  rect(g, cx - (side ? 8 : 9), 26 + bob, side ? 16 : 18, 2, S.trim);
  if (front) { rect(g, 22, 28 + bob, 4, 10, S.trim); px(g, 21, 30 + bob, "#e3b341"); px(g, 26, 30 + bob, "#e3b341"); }
  // lasso in left hand (front)
  if (front) {
    const aL = stride(f);
    rect(g, 11, 28 + bob + aL, 4, 7, S.jersey); oval(g, 12, 36 + bob + aL, 2, 2, S.fur);
    // coil of rope
    oval(g, 10, 34 + bob + aL, 4, 4, "#d4b07a");
    oval(g, 10, 34 + bob + aL, 2, 2, SPECIES.longhorn.jersey); // coil hole reads as vest
    rect(g, 8, 33 + bob + aL, 2, 5, "#d4b07a"); // rope end
    // right arm
    rect(g, 33, 28 + bob - aL, 4, 7, S.jerseyD); oval(g, 36, 36 + bob - aL, 2, 2, S.furD);
  } else if (side) {
    const st = stride(f);
    rect(g, 24 + st * 2, 28 + bob, 4, 7, S.jerseyD); oval(g, 27 + st * 2, 36 + bob, 2, 2, S.furD);
  } else {
    rect(g, 11, 28 + bob, 4, 7, S.jersey); rect(g, 33, 28 + bob, 4, 7, S.jerseyD);
  }
  // WIDE horns (signature silhouette)
  if (side) {
    rect(g, cx - 8, hy + 4, 8, 2, horn); rect(g, cx - 14, hy + 2, 7, 2, horn); rect(g, cx - 16, hy, 5, 2, hornD);
    rect(g, cx - 16, hy - 1, 3, 2, horn);
  } else {
    rect(g, 2, hy + 5, 12, 2, horn); rect(g, 2, hy + 3, 7, 2, horn); rect(g, 1, hy + 1, 5, 2, hornD); rect(g, 1, hy - 1, 3, 2, horn);
    rect(g, 34, hy + 5, 12, 2, horn); rect(g, 39, hy + 3, 7, 2, horn); rect(g, 42, hy + 1, 5, 2, hornD); rect(g, 44, hy - 1, 3, 2, horn);
  }
  // head + white blaze
  oval(g, cx + (side ? 2 : 0), hy + 6, 7, 7, S.fur);
  if (front) {
    oval(g, cx, hy + 8, 4, 5, S.belly);
    rect(g, cx - 1, hy + 2, 3, 8, S.belly); // blaze
    eye(g, cx - 5, hy + 5, 3, 2); eye(g, cx + 2, hy + 5, 3, 2);
    rect(g, cx - 1, hy + 9, 3, 2, "#1b1626");
  } else if (side) {
    oval(g, cx + 5, hy + 8, 4, 5, S.belly);
    eye(g, cx + 3, hy + 5, 3, 2);
    rect(g, cx + 7, hy + 9, 2, 2, "#1b1626");
  }
}

// ---------------- North Texas Eagle: white head, hooked beak, wings, green tank, talons
function drawEagle(g, S, dir, f) {
  const bob = bobOf(f), side = dir === "right", front = dir === "down", back = dir === "up";
  const cx = 24, hy = 12 + bob;
  const body = "#8a6a40", bodyD = "#5a4428";
  // bird legs + talons
  if (!side) {
    const lL = f === 1 ? 4 : 7, lR = f === 3 ? 4 : 7;
    rect(g, 19, 40, 3, lL, "#e3a322"); rect(g, 26, 40, 3, lR, "#d49212");
    rect(g, 17, 40 + lL, 6, 2, "#c47a0c"); rect(g, 25, 40 + lR, 6, 2, "#c47a0c");
    for (const x of [17, 19, 21, 25, 27, 29]) px(g, x, 41 + (x < 24 ? lL : lR), "#8a5a10");
  } else {
    const st = stride(f);
    rect(g, 22 - st * 2, 40, 3, 7, "#d49212"); rect(g, 20 - st * 2, 47, 6, 2, "#c47a0c");
    rect(g, 26 + st * 2, 40, 3, 7, "#e3a322"); rect(g, 25 + st * 2, 47, 6, 2, "#c47a0c");
  }
  // tail feathers
  if (back || side) {
    for (let k = 0; k < 6; k++) rect(g, side ? 12 - k : 20 + k, 36 + bob + (side ? 1 : k), side ? 3 : 2, 4, k % 2 ? bodyD : body);
  }
  // body + green tank
  oval(g, cx, 32 + bob, side ? 8 : 9, 10, body);
  rect(g, cx - (side ? 7 : 8), 26 + bob, side ? 14 : 16, 10, S.jersey);
  rect(g, cx - (side ? 7 : 8), 26 + bob, side ? 14 : 16, 2, S.trim);
  // wings as arms
  if (!side) {
    const aL = stride(f), aR = -aL;
    for (let k = 0; k < 8; k++) rect(g, 10, 26 + bob + aL + k, 6 - (k >> 2), 1, k % 2 ? bodyD : body);
    for (let k = 0; k < 8; k++) rect(g, 32 + (k >> 2), 26 + bob + aR + k, 6 - (k >> 2), 1, k % 2 ? body : bodyD);
  } else {
    const st = stride(f);
    for (let k = 0; k < 9; k++) rect(g, 28 + st, 24 + bob + k, 7 - (k >> 2), 1, k % 2 ? bodyD : body);
  }
  // white head + hooked yellow beak
  oval(g, cx + (side ? 2 : 0), hy + 5, 7, 7, S.belly);
  if (front) {
    rect(g, cx - 2, hy + 8, 4, 5, "#e3a322"); rect(g, cx + 1, hy + 9, 5, 3, "#d49212"); px(g, cx + 5, hy + 10, "#c47a0c");
    eye(g, cx - 5, hy + 4, 3, 3); eye(g, cx + 2, hy + 4, 3, 3);
  } else if (side) {
    rect(g, cx + 7, hy + 7, 7, 4, "#e3a322"); rect(g, cx + 12, hy + 8, 3, 2, "#c47a0c"); px(g, cx + 14, hy + 7, "#c47a0c"); // hook
    eye(g, cx + 3, hy + 4, 3, 3);
  } else {
    oval(g, cx, hy + 5, 7, 7, S.belly);
    for (let k = 0; k < 5; k++) px(g, cx - 2 + k, hy - 1, bodyD);
  }
}

// ---------------- Texas A&M Aggie: collie, long snout, ruff, maroon sash, bugle
function drawAggie(g, S, dir, f) {
  const bob = bobOf(f), side = dir === "right", front = dir === "down", back = dir === "up";
  const cx = 24, hy = 12 + bob;
  // digitigrade legs, feathery
  if (!side) {
    const lL = f === 1 ? 5 : 7, lR = f === 3 ? 5 : 7;
    rect(g, 18, 39, 4, lL, S.fur); rect(g, 26, 39, 4, lR, S.furD);
    oval(g, 19, 39 + lL, 3, 2, S.belly); oval(g, 27, 39 + lR, 3, 2, S.belly);
  } else {
    const st = stride(f);
    rect(g, 20 - st * 2, 39, 4, 7, S.furD); oval(g, 21 - st * 2, 47, 3, 2, S.belly);
    rect(g, 26 + st * 2, 39, 4, 7, S.fur); oval(g, 27 + st * 2, 47, 3, 2, S.belly);
  }
  // plumy tail
  if (back || side) {
    for (let k = 0; k < 10; k++) {
      const tx = side ? 12 - k : 22;
      const ty = 32 + bob + (side ? Math.round(k * 0.4) : k);
      rect(g, tx, ty, side ? 4 : 5, 3, k % 2 ? S.furD : S.fur);
      if (k > 2) rect(g, tx + 1, ty, 2, 2, S.belly);
    }
  }
  // torso + maroon sash
  oval(g, cx, 32 + bob, side ? 8 : 9, 9, S.fur);
  oval(g, cx, 34 + bob, 5, 6, S.belly);
  // wide maroon sash from shoulder to hip
  if (front) {
    for (let k = 0; k < 13; k++) rect(g, 16 + k, 25 + bob + Math.floor(k * 0.55), 5, 3, S.jersey);
  } else if (side) {
    rect(g, 18, 25 + bob, 12, 4, S.jersey);
  } else {
    rect(g, 16, 25 + bob, 16, 4, S.jersey);
  }
  // arms / paws + bugle in front
  if (!side) {
    const aL = stride(f), aR = -aL;
    rect(g, 12, 28 + bob + aL, 4, 7, S.fur); oval(g, 13, 36 + bob + aL, 3, 2, S.belly);
    rect(g, 32, 28 + bob + aR, 4, 7, S.furD); oval(g, 35, 36 + bob + aR, 3, 2, S.belly);
    if (front) { // bugle
      rect(g, 33, 32 + bob + aR, 8, 2, "#e3b341"); rect(g, 39, 30 + bob + aR, 3, 6, "#c49a28");
    }
  } else {
    const st = stride(f);
    rect(g, 24 + st * 2, 28 + bob, 4, 7, S.furD); oval(g, 27 + st * 2, 36 + bob, 3, 2, S.belly);
    rect(g, 28 + st * 2, 32 + bob, 8, 2, "#e3b341");
  }
  // folded collie ears (out, then down), not llama-straight
  if (side) {
    rect(g, 18, hy, 5, 3, S.furD); rect(g, 16, hy + 2, 6, 5, S.fur); rect(g, 17, hy + 3, 3, 3, S.belly);
  } else {
    rect(g, 12, hy + 1, 6, 3, S.furD); rect(g, 11, hy + 3, 6, 6, S.fur); rect(g, 12, hy + 4, 3, 3, S.belly);
    rect(g, 30, hy + 1, 6, 3, S.furD); rect(g, 31, hy + 3, 6, 6, S.fur); rect(g, 33, hy + 4, 3, 3, S.belly);
  }
  // thick neck ruff
  oval(g, cx + (side ? 1 : 0), hy + 14, side ? 9 : 11, 5, S.fur);
  if (front) oval(g, cx, hy + 15, 7, 4, S.belly);
  // long snout head in sable, with a white blaze and muzzle
  oval(g, cx + (side ? 2 : 0), hy + 6, 7, 7, S.furD);
  if (front) {
    oval(g, cx, hy + 8, 5, 6, S.belly);
    rect(g, cx - 1, hy + 3, 3, 6, S.belly);
    eye(g, cx - 5, hy + 5); eye(g, cx + 2, hy + 5);
    rect(g, cx - 1, hy + 11, 3, 2, "#fbfbfb"); px(g, cx, hy + 12, "#d8d8d8");
  } else if (side) {
    rect(g, cx + 6, hy + 6, 9, 6, S.fur); oval(g, cx + 10, hy + 9, 5, 4, S.belly);
    eye(g, cx + 4, hy + 5);
    rect(g, cx + 12, hy + 10, 2, 2, "#fbfbfb");
  }
}

// ---------------- TCU Horned Frog: squat, wide, head spikes, purple body, splayed feet
function drawFrog(g, S, dir, f) {
  const bob = bobOf(f), side = dir === "right", front = dir === "down", back = dir === "up";
  const cx = 24, hy = 16 + bob;
  // splayed feet (very wide stance)
  if (!side) {
    const lL = f === 1 ? 2 : 3, lR = f === 3 ? 2 : 3;
    rect(g, 10, 46, 8, lL, S.furD); rect(g, 30, 46, 8, lR, S.fur);
    rect(g, 8, 46 + lL, 11, 3, S.belly); rect(g, 29, 46 + lR, 11, 3, S.belly);
  } else {
    const st = stride(f);
    rect(g, 16 - st, 46, 8, 3, S.furD); rect(g, 14 - st, 49, 11, 3, S.belly);
    rect(g, 26 + st, 46, 8, 3, S.fur); rect(g, 25 + st, 49, 11, 3, S.belly);
  }
  // stubby tail
  if (back || side) rect(g, side ? 14 : 22, 44 + bob, 5, 3, S.furD);
  // wide squat body, purple vest
  oval(g, cx, 38 + bob, side ? 13 : 16, 10, S.fur);
  oval(g, cx, 40 + bob, side ? 9 : 11, 7, S.belly);
  rect(g, cx - (side ? 10 : 12), 32 + bob, side ? 20 : 24, 8, S.jersey);
  rect(g, cx - (side ? 10 : 12), 32 + bob, side ? 20 : 24, 2, S.trim);
  // short arms
  if (!side) {
    const aL = stride(f);
    oval(g, 10, 38 + bob + aL, 5, 3, S.fur); oval(g, 38, 38 + bob - aL, 5, 3, S.furD);
  } else {
    oval(g, 34 + stride(f), 38 + bob, 5, 3, S.furD);
  }
  // big head + crown of horns (original, not a copied mark)
  oval(g, cx + (side ? 2 : 0), hy + 8, side ? 9 : 11, 9, S.fur);
  const horns = front ? [[-8, 5], [-3, 7], [3, 7], [8, 5]] : side ? [[-1, 6], [4, 7]] : [[-8, 5], [-3, 7], [3, 7], [8, 5]];
  for (const [hx, h] of horns) {
    for (let k = 0; k < h; k++) px(g, cx + hx + (side ? 2 : 0), hy + 2 - k, k === h - 1 ? S.belly : S.furD);
  }
  if (front) {
    oval(g, cx, hy + 11, 8, 5, S.belly);
    // big side-set eyes
    oval(g, cx - 7, hy + 5, 4, 4, S.belly); oval(g, cx + 7, hy + 5, 4, 4, S.belly);
    eye(g, cx - 8, hy + 4, 3, 3); eye(g, cx + 6, hy + 4, 3, 3);
    rect(g, cx - 4, hy + 13, 8, 2, "#4a2a2a");
  } else if (side) {
    oval(g, cx + 7, hy + 11, 6, 5, S.belly);
    oval(g, cx + 5, hy + 5, 4, 4, S.belly); eye(g, cx + 5, hy + 4, 3, 3);
    rect(g, cx + 6, hy + 13, 6, 2, "#4a2a2a");
  }
}

// ---------------- Houston Cougar: lean, red tank + shorts, basketball, long tail
function drawCougar(g, S, dir, f) {
  const bob = bobOf(f), side = dir === "right", front = dir === "down", back = dir === "up";
  const cx = 24, hy = 11 + bob;
  if (!side) {
    const lL = f === 1 ? 5 : 8, lR = f === 3 ? 5 : 8;
    rect(g, 18, 38, 4, lL, S.fur); rect(g, 26, 38, 4, lR, S.furD);
    oval(g, 19, 38 + lL, 3, 2, S.shoe); oval(g, 27, 38 + lR, 3, 2, S.shoe);
  } else {
    const st = stride(f);
    rect(g, 20 - st * 3, 38, 4, 8, S.furD); oval(g, 21 - st * 3, 47, 3, 2, S.shoe);
    rect(g, 26 + st * 3, 38, 4, 8, S.fur); oval(g, 27 + st * 3, 47, 3, 2, S.shoe);
  }
  // long tail with dark tip
  if (back || side) {
    for (let k = 0; k < 12; k++) {
      const tx = side ? 12 - k : 22;
      const ty = 32 + bob + (side ? Math.round(Math.sin(k / 3) * 2) : Math.round(k * 0.7));
      rect(g, tx, ty, 3, 2, k > 8 ? "#2a1f1c" : (k % 2 ? S.furD : S.fur));
    }
  }
  // lean torso, red tank and shorts
  oval(g, cx, 30 + bob, side ? 7 : 8, 9, S.fur);
  rect(g, cx - (side ? 7 : 8), 24 + bob, side ? 14 : 16, 9, S.jersey);
  rect(g, cx - (side ? 7 : 8), 33 + bob, side ? 14 : 16, 5, S.jerseyD);
  rect(g, cx - (side ? 7 : 8), 24 + bob, side ? 14 : 16, 1, S.trim);
  if (!side) {
    const aL = stride(f), aR = -aL;
    rect(g, 12, 26 + bob + aL, 4, 8, S.fur); oval(g, 13, 35 + bob + aL, 3, 2, S.belly);
    rect(g, 32, 26 + bob + aR, 4, 8, S.furD);
    if (front) { // basketball
      oval(g, 36, 34 + bob + aR, 5, 5, "#e0702a");
      rect(g, 32, 34 + bob + aR, 8, 1, "#5a2a14"); rect(g, 36, 30 + bob + aR, 1, 8, "#5a2a14");
    }
  } else {
    const st = stride(f);
    rect(g, 24 + st * 2, 26 + bob, 4, 8, S.furD); oval(g, 27 + st * 2, 35 + bob, 3, 2, S.belly);
    oval(g, 30 + st * 2, 34 + bob, 5, 5, "#e0702a");
  }
  // pointed ears, tan muzzle
  if (side) { triangleEar(g, 20, hy - 1, 1, S.fur, "#e8a0a0"); }
  else { triangleEar(g, 16, hy - 1, 1, S.fur, "#e8a0a0"); triangleEar(g, 31, hy - 1, -1, S.fur, "#e8a0a0"); }
  oval(g, cx + (side ? 2 : 0), hy + 6, 7, 7, S.fur);
  if (front) {
    oval(g, cx, hy + 9, 5, 5, S.belly);
    eye(g, cx - 5, hy + 5); eye(g, cx + 2, hy + 5);
    rect(g, cx - 1, hy + 10, 2, 2, "#1b1626"); px(g, cx, hy + 9, "#e8a0a0");
  } else if (side) {
    oval(g, cx + 6, hy + 8, 5, 5, S.belly);
    eye(g, cx + 3, hy + 5);
    rect(g, cx + 9, hy + 10, 2, 2, "#1b1626");
  }
}

function triangleEar(g, ex, ey, dirx, fur, inner) {
  for (let j = 0; j < 7; j++) {
    const w = Math.max(1, j);
    rect(g, dirx > 0 ? ex : ex - w + 1, ey + j, w, 1, fur);
    if (j > 1 && j < 6) px(g, dirx > 0 ? ex + 1 : ex - 1, ey + j, inner);
  }
}

// ---------------- Texas Tech Raider: black horse, mask, red cape, black hat
function drawRaider(g, S, dir, f) {
  const bob = bobOf(f), side = dir === "right", front = dir === "down", back = dir === "up";
  const cx = 24, hy = 14 + bob;
  const fur = "#2a221c", furD = "#161210";
  if (!side) {
    const lL = f === 1 ? 5 : 7, lR = f === 3 ? 5 : 7;
    rect(g, 18, 40, 5, lL, furD); rect(g, 25, 40, 5, lR, fur);
    rect(g, 17, 40 + lL, 6, 3, "#0a0a0a"); rect(g, 25, 40 + lR, 6, 3, "#0a0a0a");
  } else {
    const st = stride(f);
    rect(g, 18 - st * 2, 40, 5, 7, furD); rect(g, 17 - st * 2, 47, 6, 3, "#0a0a0a");
    rect(g, 25 + st * 2, 40, 5, 7, fur); rect(g, 25 + st * 2, 47, 6, 3, "#0a0a0a");
  }
  // black tail
  if (back || side) {
    for (let k = 0; k < 10; k++) rect(g, side ? 12 - k : 22, 34 + bob + (side ? (k >> 1) : k), 3, 2, k % 2 ? furD : "#0a0a0a");
  }
  // flowing red cape (behind body on front, full on back/side)
  const capeX = side ? 12 : 14, capeW = side ? 12 : 20;
  if (back) { oval(g, cx, 32 + bob, 11, 12, S.jersey); rect(g, 14, 22 + bob, 20, 4, S.jerseyD); }
  else if (side) { for (let k = 0; k < 14; k++) rect(g, 10 - Math.round(k * 0.3), 22 + bob + k, 8, 1, k % 3 ? S.jersey : S.jerseyD); }
  else { rect(g, 14, 24 + bob, 4, 14, S.jerseyD); rect(g, 30, 24 + bob, 4, 14, S.jerseyD); }
  // body
  oval(g, cx, 32 + bob, side ? 8 : 9, 10, fur);
  rect(g, cx - (side ? 7 : 8), 26 + bob, side ? 14 : 16, 8, S.jerseyD);
  if (!side) {
    const aL = stride(f), aR = -aL;
    rect(g, 12, 28 + bob + aL, 4, 7, fur); rect(g, 32, 28 + bob + aR, 4, 7, furD);
  } else {
    rect(g, 24 + stride(f) * 2, 28 + bob, 4, 7, furD);
  }
  // black hat
  rect(g, cx - 8 + (side ? 2 : 0), hy - 2, 16, 4, "#1a1a1a");
  rect(g, cx - 12 + (side ? 2 : 0), hy + 2, 24, 2, "#0a0a0a");
  rect(g, cx - 8 + (side ? 2 : 0), hy - 2, 16, 1, "#3a3a3a");
  // horse head + a black mask across the eyes (original rider look, not a copied costume)
  oval(g, cx + (side ? 3 : 0), hy + 7, 7, 6, fur);
  if (front) {
    oval(g, cx, hy + 12, 5, 5, fur); // muzzle
    rect(g, cx - 7, hy + 5, 14, 4, "#0a0a0a"); // mask band
    rect(g, cx - 5, hy + 6, 3, 2, "#c8102e"); rect(g, cx + 2, hy + 6, 3, 2, "#c8102e");
    px(g, cx - 4, hy + 6, "#f7f3ee"); px(g, cx + 3, hy + 6, "#f7f3ee");
    rect(g, cx - 2, hy + 13, 4, 3, "#1a1410");
    rect(g, cx - 1, hy + 14, 2, 2, "#0a0a0a"); // nostrils
  } else if (side) {
    rect(g, cx + 6, hy + 7, 8, 6, fur); // long horse muzzle
    rect(g, cx + 1, hy + 5, 9, 4, "#0a0a0a");
    rect(g, cx + 4, hy + 6, 3, 2, "#c8102e"); px(g, cx + 5, hy + 6, "#f7f3ee");
    rect(g, cx + 12, hy + 11, 2, 2, "#0a0a0a");
  } else {
    rect(g, cx - 6, hy + 3, 12, 8, "#1a1a1a");
  }
}

// ---------------- New Mexico Lobo: silver wolf, cherry bandana, yellow eyes, ruff
function drawLobo(g, S, dir, f) {
  const bob = bobOf(f), side = dir === "right", front = dir === "down", back = dir === "up";
  const cx = 24, hy = 11 + bob;
  if (!side) {
    const lL = f === 1 ? 5 : 7, lR = f === 3 ? 5 : 7;
    rect(g, 18, 39, 4, lL, S.fur); rect(g, 26, 39, 4, lR, S.furD);
    oval(g, 19, 39 + lL, 3, 2, "#2a2a30"); oval(g, 27, 39 + lR, 3, 2, "#2a2a30");
  } else {
    const st = stride(f);
    rect(g, 20 - st * 2, 39, 4, 7, S.furD); oval(g, 21 - st * 2, 47, 3, 2, "#2a2a30");
    rect(g, 26 + st * 2, 39, 4, 7, S.fur); oval(g, 27 + st * 2, 47, 3, 2, "#2a2a30");
  }
  // bushy tail, dark tip
  if (back || side) {
    for (let k = 0; k < 11; k++) {
      const tx = side ? 11 - k : 21;
      const ty = 30 + bob + (side ? Math.round(Math.sin(k / 2.5) * 2) : Math.round(k * 0.8));
      rect(g, tx, ty, 4, 3, k > 7 ? "#2a1f1c" : (k % 2 ? S.furD : S.fur));
    }
  }
  // torso + silver-trimmed cherry bandana later on neck
  oval(g, cx, 31 + bob, side ? 8 : 9, 9, S.fur);
  oval(g, cx, 33 + bob, 5, 6, S.belly);
  if (!side) {
    const aL = stride(f), aR = -aL;
    rect(g, 12, 27 + bob + aL, 4, 8, S.fur); oval(g, 13, 36 + bob + aL, 3, 2, S.belly);
    rect(g, 32, 27 + bob + aR, 4, 8, S.furD); oval(g, 35, 36 + bob + aR, 3, 2, S.belly);
  } else {
    rect(g, 24 + stride(f) * 2, 27 + bob, 4, 8, S.furD);
  }
  // pointed ears
  if (side) triangleEar(g, 20, hy - 2, 1, S.fur, "#e8b8a0");
  else { triangleEar(g, 16, hy - 2, 1, S.fur, "#e8b8a0"); triangleEar(g, 31, hy - 2, -1, S.fur, "#e8b8a0"); }
  // head + ruff + bandana
  oval(g, cx + (side ? 2 : 0), hy + 6, 7, 7, S.fur);
  // neck ruff
  oval(g, cx + (side ? 1 : 0), hy + 14, side ? 8 : 10, 4, S.fur);
  // cherry red bandana
  rect(g, cx - 8 + (side ? 2 : 0), hy + 12, 16, 3, S.jersey);
  rect(g, cx - 8 + (side ? 2 : 0), hy + 12, 16, 1, S.trim);
  if (front) { rect(g, 16, hy + 14, 4, 6, S.jersey); px(g, 17, hy + 15, S.trim); }
  if (front) {
    oval(g, cx, hy + 8, 5, 5, S.belly);
    rect(g, cx - 2, hy + 7, 4, 3, "#2a1f1c"); // dark cap
    // yellow wolf eyes
    rect(g, cx - 5, hy + 5, 3, 3, "#f0d060"); px(g, cx - 4, hy + 6, "#1a1210"); px(g, cx - 5, hy + 5, "#fff");
    rect(g, cx + 2, hy + 5, 3, 3, "#f0d060"); px(g, cx + 3, hy + 6, "#1a1210"); px(g, cx + 2, hy + 5, "#fff");
    rect(g, cx - 1, hy + 10, 2, 2, "#1b1626");
  } else if (side) {
    oval(g, cx + 6, hy + 8, 5, 5, S.belly);
    rect(g, cx + 3, hy + 5, 3, 3, "#f0d060"); px(g, cx + 4, hy + 6, "#1a1210");
    rect(g, cx + 9, hy + 10, 2, 2, "#1b1626");
  }
}

// ---------------- SMU Mustang: chestnut horse, white blaze, flowing mane, red/blue racing silks
function drawMustang(g, S, dir, f) {
  const bob = bobOf(f), side = dir === "right", front = dir === "down", back = dir === "up";
  const cx = 24, hy = 12 + bob;
  if (!side) {
    const lL = f === 1 ? 5 : 7, lR = f === 3 ? 5 : 7;
    rect(g, 18, 40, 5, lL, S.furD); rect(g, 25, 40, 5, lR, S.fur);
    rect(g, 17, 40 + lL, 6, 3, "#3a2a20"); rect(g, 25, 40 + lR, 6, 3, "#3a2a20");
  } else {
    const st = stride(f);
    rect(g, 18 - st * 2, 40, 5, 7, S.furD); rect(g, 17 - st * 2, 47, 6, 3, "#3a2a20");
    rect(g, 25 + st * 2, 40, 5, 7, S.fur); rect(g, 25 + st * 2, 47, 6, 3, "#3a2a20");
  }
  // flowing tail
  if (back || side) {
    for (let k = 0; k < 11; k++) rect(g, side ? 12 - k : 22, 34 + bob + (side ? Math.round(k * 0.4) : k), 4, 2, k % 2 ? S.furD : S.fur);
  }
  // body + racing silks (blue body, red sleeves / sash)
  oval(g, cx, 32 + bob, side ? 8 : 9, 10, S.fur);
  rect(g, cx - (side ? 7 : 8), 25 + bob, side ? 14 : 16, 11, S.jersey);
  if (!side) {
    rect(g, 12, 26 + bob, 5, 9, S.trim); rect(g, 31, 26 + bob, 5, 9, S.trim); // red sleeves
    const aL = stride(f), aR = -aL;
    oval(g, 13, 36 + bob + aL, 3, 2, S.fur); oval(g, 35, 36 + bob + aR, 3, 2, S.furD);
    if (front) rect(g, 22, 28 + bob, 4, 8, S.trim);
  } else {
    rect(g, 28, 26 + bob, 5, 9, S.trim);
    oval(g, 32 + stride(f), 36 + bob, 3, 2, S.furD);
  }
  // short ears + flowing mane
  if (side) {
    rect(g, cx - 2, hy - 1, 3, 5, S.furD);
    for (let k = 0; k < 12; k++) rect(g, cx - 8, hy + k, 5, 1, k % 2 ? S.furD : S.trim); // red-tinted mane down the neck
  } else if (back) {
    rect(g, cx - 3, hy - 2, 6, 14, S.furD);
    for (let k = 0; k < 12; k++) rect(g, cx - 4, hy + k, 8, 1, k % 2 ? S.furD : S.trim);
  } else {
    rect(g, 17, hy - 1, 3, 5, S.fur); rect(g, 28, hy - 1, 3, 5, S.fur);
  }
  oval(g, cx + (side ? 3 : 0), hy + 6, 7, 6, S.fur);
  if (front) {
    oval(g, cx, hy + 12, 5, 5, S.fur); // longer horse muzzle
    rect(g, cx - 1, hy + 3, 3, 12, S.belly); // white blaze down the muzzle
    oval(g, cx, hy + 13, 4, 3, S.belly);
    eye(g, cx - 5, hy + 5, 3, 2); eye(g, cx + 2, hy + 5, 3, 2);
    rect(g, cx - 1, hy + 14, 2, 2, "#1b1626");
  } else if (side) {
    rect(g, cx + 6, hy + 7, 8, 6, S.fur);
    rect(g, cx + 8, hy + 6, 2, 8, S.belly); // blaze on the profile
    eye(g, cx + 4, hy + 5, 3, 2);
    rect(g, cx + 12, hy + 11, 2, 2, "#1b1626");
  }
}

// ---------------- Rice Owl: round body, huge eyes, tufts, navy sweater vest, book
function drawOwl(g, S, dir, f) {
  const bob = bobOf(f), side = dir === "right", front = dir === "down", back = dir === "up";
  const cx = 24, hy = 14 + bob;
  // tiny bird feet
  if (!side) {
    const lL = f === 1 ? 1 : 2, lR = f === 3 ? 1 : 2;
    rect(g, 19, 48, 3, lL + 1, "#e3a322"); rect(g, 26, 48, 3, lR + 1, "#d49212");
    rect(g, 17, 49 + lL, 6, 2, "#c47a0c"); rect(g, 25, 49 + lR, 6, 2, "#c47a0c");
  } else {
    const st = stride(f);
    rect(g, 22 - st, 48, 3, 3, "#d49212"); rect(g, 20 - st, 51, 6, 2, "#c47a0c");
    rect(g, 26 + st, 48, 3, 3, "#e3a322"); rect(g, 25 + st, 51, 6, 2, "#c47a0c");
  }
  // round egg body
  oval(g, cx, 36 + bob, side ? 11 : 13, 13, S.fur);
  oval(g, cx, 38 + bob, side ? 8 : 9, 9, S.belly);
  // navy sweater vest with gold trim
  rect(g, cx - (side ? 9 : 11), 30 + bob, side ? 18 : 22, 10, S.jersey);
  rect(g, cx - (side ? 9 : 11), 30 + bob, side ? 18 : 22, 2, S.trim);
  if (front) rect(g, 22, 32 + bob, 4, 8, S.belly); // vest opening
  // book under wing (front / side)
  if (front) {
    rect(g, 8, 34 + bob, 8, 6, "#7a2a2a"); rect(g, 8, 34 + bob, 8, 1, S.trim); px(g, 9, 36 + bob, "#f4eee4");
    for (let k = 0; k < 7; k++) rect(g, 33, 28 + bob + k, 7 - (k >> 2), 1, k % 2 ? S.furD : S.fur); // right wing
    for (let k = 0; k < 5; k++) rect(g, 10, 28 + bob + k, 6 - (k >> 2), 1, S.fur);
  } else if (side) {
    rect(g, 30, 34 + bob, 8, 6, "#7a2a2a");
    for (let k = 0; k < 8; k++) rect(g, 28, 26 + bob + k, 7 - (k >> 2), 1, k % 2 ? S.furD : S.fur);
  } else {
    for (let k = 0; k < 8; k++) { rect(g, 10, 28 + bob + k, 6, 1, S.furD); rect(g, 32, 28 + bob + k, 6, 1, S.furD); }
  }
  // ear tufts
  if (!side) { rect(g, 14, hy - 2, 5, 6, S.fur); rect(g, 29, hy - 2, 5, 6, S.fur); rect(g, 15, hy - 1, 3, 3, S.furD); rect(g, 30, hy - 1, 3, 3, S.furD); }
  else { rect(g, 22, hy - 2, 5, 6, S.fur); }
  // HUGE eyes
  oval(g, cx + (side ? 2 : 0), hy + 8, 9, 8, S.fur);
  if (front) {
    oval(g, cx, hy + 9, 8, 6, S.belly);
    oval(g, cx - 5, hy + 8, 5, 5, S.fur); oval(g, cx + 5, hy + 8, 5, 5, S.fur);
    oval(g, cx - 5, hy + 8, 4, 4, "#f7f3ee"); oval(g, cx + 5, hy + 8, 4, 4, "#f7f3ee");
    rect(g, cx - 6, hy + 8, 3, 3, "#1a1210"); rect(g, cx + 4, hy + 8, 3, 3, "#1a1210");
    px(g, cx - 6, hy + 7, "#fff"); px(g, cx + 4, hy + 7, "#fff");
    rect(g, cx - 1, hy + 13, 3, 2, "#e3a322"); // small beak
  } else if (side) {
    oval(g, cx + 4, hy + 8, 5, 5, S.belly);
    oval(g, cx + 4, hy + 8, 4, 4, "#f7f3ee");
    rect(g, cx + 4, hy + 8, 3, 3, "#1a1210"); px(g, cx + 4, hy + 7, "#fff");
    rect(g, cx + 8, hy + 12, 4, 2, "#e3a322");
  }
}

// ---------------- UTSA Roadrunner: tall long legs, crest, long beak, orange/navy, running pose
function drawRunner(g, S, dir, f) {
  const bob = bobOf(f), side = dir === "right", front = dir === "down", back = dir === "up";
  const cx = 24, hy = 8 + bob;
  // LONG skinny legs (tallest mascot)
  if (!side) {
    const lL = f === 1 ? 10 : 14, lR = f === 3 ? 10 : 14;
    rect(g, 20, 36, 3, lL, S.trim); rect(g, 25, 36, 3, lR, "#d14a18");
    rect(g, 18, 36 + lL, 6, 2, S.shoe); rect(g, 24, 36 + lR, 6, 2, S.shoe);
  } else {
    const st = stride(f);
    // trailing and leading legs, always a running look
    const backY = st >= 0 ? 10 : 14, frontY = st >= 0 ? 14 : 10;
    rect(g, 20 - st * 3, 36, 3, backY, "#d14a18"); rect(g, 18 - st * 3, 36 + backY, 6, 2, S.shoe);
    rect(g, 26 + st * 3, 36, 3, frontY, S.trim); rect(g, 25 + st * 3, 36 + frontY, 6, 2, S.shoe);
  }
  // long tail feathers, often horizontal
  if (back || side) {
    for (let t = 0; t < 14; t++) {
      const tx = side ? 16 - t : 22;
      const ty = 26 + bob - Math.round(t * 0.35);
      rect(g, tx, ty, 2, 3, t % 2 ? S.furD : S.fur);
      if (t % 3 === 0) px(g, tx, ty - 1, S.trim);
    }
  }
  // lean body, navy scarf / sash
  oval(g, cx, 26 + bob, side ? 6 : 7, 8, S.fur);
  rect(g, cx - (side ? 6 : 7), 22 + bob, side ? 12 : 14, 6, S.jersey);
  rect(g, cx - (side ? 6 : 7), 22 + bob, side ? 12 : 14, 2, S.trim);
  // wings
  if (!side) {
    const aL = stride(f);
    for (let k = 0; k < 7; k++) rect(g, 14, 20 + bob + aL + k, 5 - (k >> 2), 1, k % 2 ? S.furD : S.fur);
    for (let k = 0; k < 7; k++) rect(g, 29 + (k >> 2), 20 + bob - aL + k, 5 - (k >> 2), 1, k % 2 ? S.fur : S.furD);
  } else {
    for (let k = 0; k < 8; k++) rect(g, 26 + stride(f), 18 + bob + k, 6 - (k >> 2), 1, k % 2 ? S.furD : S.fur);
  }
  // crest
  if (side) { for (let t = 0; t < 6; t++) px(g, cx + 2 - t, hy - 2 - t, t % 2 ? S.trim : S.furD); }
  else { for (let t = 0; t < 6; t++) { px(g, cx - 1 - t, hy - 1 - t, t % 2 ? S.trim : S.furD); px(g, cx + t, hy - 1 - t, t % 2 ? S.trim : S.furD); } }
  // small head + long beak
  oval(g, cx + (side ? 3 : 0), hy + 6, 5, 5, S.fur);
  if (front) {
    rect(g, cx - 2, hy + 8, 8, 2, "#4a4a52"); rect(g, cx + 4, hy + 8, 5, 1, "#4a4a52");
    eye(g, cx - 4, hy + 5, 2, 2); eye(g, cx + 2, hy + 5, 2, 2);
  } else if (side) {
    rect(g, cx + 6, hy + 7, 10, 2, "#4a4a52"); rect(g, cx + 14, hy + 7, 3, 1, "#2a2a30");
    eye(g, cx + 3, hy + 5, 2, 2);
  }
}

// ---------------- Arizona Wildcat: ear tufts, facial stripes, red bandana, navy jersey
function drawWildcat(g, S, dir, f) {
  const bob = bobOf(f), side = dir === "right", front = dir === "down", back = dir === "up";
  const cx = 24, hy = 11 + bob;
  if (!side) {
    const lL = f === 1 ? 5 : 7, lR = f === 3 ? 5 : 7;
    rect(g, 18, 39, 4, lL, S.fur); rect(g, 26, 39, 4, lR, S.furD);
    oval(g, 19, 39 + lL, 3, 2, S.shoe); oval(g, 27, 39 + lR, 3, 2, S.shoe);
  } else {
    const st = stride(f);
    rect(g, 20 - st * 2, 39, 4, 7, S.furD); oval(g, 21 - st * 2, 47, 3, 2, S.shoe);
    rect(g, 26 + st * 2, 39, 4, 7, S.fur); oval(g, 27 + st * 2, 47, 3, 2, S.shoe);
  }
  // ringed tail
  if (back || side) {
    for (let k = 0; k < 11; k++) {
      const tx = side ? 12 - k : 22;
      const ty = 32 + bob + (side ? Math.round(Math.sin(k / 3) * 2) : Math.round(k * 0.7));
      rect(g, tx, ty, 3, 2, k % 2 ? S.furD : S.fur);
    }
  }
  // compact torso, navy jersey, red trim
  oval(g, cx, 31 + bob, side ? 8 : 9, 9, S.fur);
  rect(g, cx - (side ? 7 : 8), 25 + bob, side ? 14 : 16, 10, S.jersey);
  rect(g, cx - (side ? 7 : 8), 25 + bob, side ? 14 : 16, 2, S.trim);
  if (front) rect(g, 21, 30 + bob, 6, 2, S.trim);
  if (!side) {
    const aL = stride(f), aR = -aL;
    rect(g, 12, 27 + bob + aL, 4, 8, S.fur); oval(g, 13, 36 + bob + aL, 3, 2, S.belly);
    rect(g, 32, 27 + bob + aR, 4, 8, S.furD); oval(g, 35, 36 + bob + aR, 3, 2, S.belly);
  } else {
    rect(g, 24 + stride(f) * 2, 27 + bob, 4, 8, S.furD);
  }
  // tufted ears (lynx-like, the tell vs the cougar)
  const tuft = (ex, dirx) => {
    triangleEar(g, ex, hy, dirx, S.fur, "#e8a0a0");
    for (let k = 0; k < 4; k++) px(g, ex + (dirx > 0 ? 0 : 0) + (dirx > 0 ? 0 : 1), hy - 1 - k, S.furD);
  };
  if (side) tuft(20, 1);
  else { tuft(16, 1); tuft(31, -1); }
  oval(g, cx + (side ? 2 : 0), hy + 6, 7, 7, S.fur);
  // red bandana
  rect(g, cx - 8 + (side ? 2 : 0), hy + 12, 16, 3, S.trim);
  if (front) {
    oval(g, cx, hy + 9, 5, 5, S.belly);
    // facial stripes
    for (const [sx, sy] of [[-6, 6], [-5, 8], [5, 6], [4, 8]]) rect(g, cx + sx, hy + sy, 2, 1, S.furD);
    eye(g, cx - 5, hy + 5); eye(g, cx + 2, hy + 5);
    rect(g, cx - 1, hy + 10, 2, 2, "#1b1626"); px(g, cx, hy + 9, "#e8a0a0");
  } else if (side) {
    oval(g, cx + 6, hy + 8, 5, 5, S.belly);
    rect(g, cx + 5, hy + 7, 2, 1, S.furD); rect(g, cx + 6, hy + 9, 2, 1, S.furD);
    eye(g, cx + 3, hy + 5);
    rect(g, cx + 9, hy + 10, 2, 2, "#1b1626");
  }
}

// ---------------- Prairie View A&M Panther: sleek black, gold eyes, purple vest, gold chain
function drawPanther(g, S, dir, f) {
  const bob = bobOf(f), side = dir === "right", front = dir === "down", back = dir === "up";
  const cx = 24, hy = 11 + bob;
  if (!side) {
    const lL = f === 1 ? 6 : 8, lR = f === 3 ? 6 : 8;
    rect(g, 18, 38, 4, lL, S.fur); rect(g, 26, 38, 4, lR, S.furD);
    oval(g, 19, 38 + lL, 3, 2, S.shoe); oval(g, 27, 38 + lR, 3, 2, S.shoe);
  } else {
    const st = stride(f);
    rect(g, 20 - st * 3, 38, 4, 8, S.furD); oval(g, 21 - st * 3, 47, 3, 2, S.shoe);
    rect(g, 26 + st * 3, 38, 4, 8, S.fur); oval(g, 27 + st * 3, 47, 3, 2, S.shoe);
  }
  // long sleek tail
  if (back || side) {
    for (let k = 0; k < 13; k++) {
      const tx = side ? 12 - k : 22;
      const ty = 30 + bob + (side ? Math.round(Math.sin(k / 3) * 2) : Math.round(k * 0.65));
      rect(g, tx, ty, 3, 2, k % 2 ? S.furD : S.fur);
    }
  }
  // sleek torso, purple vest, gold trim
  oval(g, cx, 30 + bob, side ? 7 : 8, 9, S.fur);
  rect(g, cx - (side ? 7 : 8), 24 + bob, side ? 14 : 16, 11, S.jersey);
  rect(g, cx - (side ? 7 : 8), 24 + bob, side ? 14 : 16, 2, S.trim);
  if (front) rect(g, 22, 28 + bob, 4, 6, S.trim);
  if (!side) {
    const aL = stride(f), aR = -aL;
    rect(g, 12, 26 + bob + aL, 4, 8, S.fur); oval(g, 13, 35 + bob + aL, 3, 2, S.furD);
    rect(g, 32, 26 + bob + aR, 4, 8, S.furD); oval(g, 35, 35 + bob + aR, 3, 2, S.fur);
  } else {
    rect(g, 24 + stride(f) * 2, 26 + bob, 4, 8, S.furD);
  }
  // pointed ears (no tufts, unlike wildcat)
  if (side) triangleEar(g, 20, hy - 1, 1, S.fur, S.trim);
  else { triangleEar(g, 16, hy - 1, 1, S.fur, S.trim); triangleEar(g, 31, hy - 1, -1, S.fur, S.trim); }
  oval(g, cx + (side ? 2 : 0), hy + 6, 7, 7, S.fur);
  // gold chain
  if (front || side) {
    const ox = side ? 2 : 0;
    for (let k = 0; k < 10; k++) px(g, cx - 5 + k + ox, hy + 13 + (k < 3 || k > 6 ? 0 : 1), S.trim);
  }
  if (front) {
    oval(g, cx, hy + 9, 4, 4, S.belly);
    // striking gold eyes
    rect(g, cx - 5, hy + 5, 3, 3, "#fdb813"); px(g, cx - 4, hy + 6, "#1a1210"); px(g, cx - 5, hy + 5, "#fff");
    rect(g, cx + 2, hy + 5, 3, 3, "#fdb813"); px(g, cx + 3, hy + 6, "#1a1210"); px(g, cx + 2, hy + 5, "#fff");
    rect(g, cx - 1, hy + 10, 2, 2, "#1b1626");
  } else if (side) {
    oval(g, cx + 6, hy + 8, 4, 4, S.fur);
    rect(g, cx + 3, hy + 5, 3, 3, "#fdb813"); px(g, cx + 4, hy + 6, "#1a1210");
    rect(g, cx + 8, hy + 10, 2, 2, "#1b1626");
  }
}

export function makeMascot(kind) {
  const out = { down: [], up: [], left: [], right: [], foot: MFOOT, mascot: kind };
  for (let f = 0; f < 4; f++) {
    out.down.push(frame(kind, "down", f)); out.up.push(frame(kind, "up", f));
    const r = frame(kind, "right", f); out.right.push(r);
    const [l, lg] = mk(MW, MH); lg.translate(MW, 0); lg.scale(-1, 1); lg.drawImage(r, 0, 0); out.left.push(l);
  }
  const S = SPECIES[kind] || SPECIES.miner;
  out.portrait = portraitOf(out.down[0], S.bg, 0, 4, 0, 40, 36);
  return out;
}

export function portraitOf(src, bg, yOff = 0, sx, sy, sw, sh) {
  const [pc, pg] = mk(64, 64); rect(pg, 0, 0, 64, 64, bg);
  for (let y = 0; y < 64; y += 4) rect(pg, 0, y, 64, 2, shade(bg, -0.05));
  pg.imageSmoothingEnabled = false;
  if (sx == null) sx = Math.max(0, (src.width - 32) / 2);
  if (sy == null) sy = 0;
  if (sw == null) sw = Math.min(32, src.width);
  if (sh == null) sh = Math.min(32, src.height);
  pg.drawImage(src, sx, sy, sw, sh, 0, yOff, 64, 64);
  return pc;
}
