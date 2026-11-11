// Procedural 16x16 block textures (original art, drawn in code).
import { TILE, rng, makeCanvas, shade, pick } from "./util.js";

export const T = {
  GRASS: 1, SAND: 2, ROCK: 3, COBBLE: 4, PAVE: 5, WATER: 6, BRIDGE: 7,
  LAWN: 8, FLOWER: 9, GRAVEL: 10, DIRT: 11, FOOTHILL: 12,
};

function noiseFill(ctx, r, base, shades, density = 0.5) {
  ctx.fillStyle = base; ctx.fillRect(0, 0, TILE, TILE);
  for (let y = 0; y < TILE; y++) for (let x = 0; x < TILE; x++) {
    if (r() < density) { ctx.fillStyle = pick(r, shades); ctx.fillRect(x, y, 1, 1); }
  }
}

export const SEASON_PAL = {
  summer: { grass: "#6aa83a", grassS: ["#5b9530", "#78b844", "#64a036", "#80bf4a"], lawn: "#74b83e",
            leaves: ["#3f8a2c", "#347524", "#4f9c35", "#2c6a1f"], flower: ["#ffd23f", "#ff8200", "#ffffff", "#e04646"], snow: false },
  autumn: { grass: "#8f9a3a", grassS: ["#7d8a32", "#a1a744", "#8a7f30", "#b0a84a"], lawn: "#96a33f",
            leaves: ["#d0661f", "#e3a02c", "#b8401f", "#e58a24", "#9e3b1c"], flower: ["#ff8200", "#c8501e", "#ffd23f"], snow: false },
  winter: { grass: "#eef3f7", grassS: ["#dfe8ef", "#ffffff", "#d3dee8", "#e8eef4"], lawn: "#eef3f7",
            leaves: ["#2f5a3a", "#264d31", "#3a6a45"], flower: ["#ffffff"], snow: true },
};

export function makeTileset(season) {
  const P = SEASON_PAL[season];
  const set = {};
  const variants = 4;
  const mk = (type, painter) => {
    set[type] = [];
    for (let v = 0; v < variants; v++) {
      const [c, ctx] = makeCanvas(TILE, TILE);
      painter(ctx, rng(type * 977 + v * 31 + (season.length * 7)), v);
      set[type].push(c);
    }
  };
  mk(T.GRASS, (c, r) => noiseFill(c, r, P.grass, P.grassS, 0.55));
  mk(T.LAWN, (c, r) => {
    noiseFill(c, r, P.lawn, P.grassS, 0.35);
    if (!P.snow) { c.fillStyle = "rgba(255,255,255,0.06)"; for (let y = 0; y < TILE; y += 4) c.fillRect(0, y, TILE, 2); }
  });
  mk(T.FLOWER, (c, r) => {
    noiseFill(c, r, P.grass, P.grassS, 0.55);
    for (let k = 0; k < 2; k++) {
      const x = 2 + Math.floor(r() * 11), y = 2 + Math.floor(r() * 11);
      c.fillStyle = P.snow ? "#9fb4c4" : "#2f6b1f"; c.fillRect(x, y + 1, 1, 2);
      c.fillStyle = pick(r, P.flower); c.fillRect(x - 1, y, 3, 1); c.fillRect(x, y - 1, 1, 3);
      c.fillStyle = "#ffef9a"; c.fillRect(x, y, 1, 1);
    }
  });
  mk(T.SAND, (c, r) => {
    noiseFill(c, r, "#d9c08a", ["#cdb27a", "#e4cd99", "#c9ab72", "#e8d4a6"], 0.5);
    if (P.snow) { c.fillStyle = "rgba(255,255,255,0.55)"; for (let k = 0; k < 40; k++) c.fillRect(Math.floor(r() * 16), Math.floor(r() * 16), 1, 1); }
  });
  mk(T.FOOTHILL, (c, r) => {
    noiseFill(c, r, "#b89a6e", ["#a88b60", "#c4a77a", "#9c7f58", "#cdb184"], 0.6);
    if (r() < 0.5) { c.fillStyle = "#7c8a3a"; c.fillRect(Math.floor(r() * 13), Math.floor(r() * 13), 2, 1); }
    if (P.snow) { c.fillStyle = "rgba(255,255,255,0.7)"; for (let k = 0; k < 70; k++) c.fillRect(Math.floor(r() * 16), Math.floor(r() * 16), 1, 1); }
  });
  mk(T.DIRT, (c, r) => noiseFill(c, r, "#8b5e3c", ["#7a5133", "#9a6a45", "#6d472c"], 0.6));
  mk(T.GRAVEL, (c, r) => noiseFill(c, r, "#9a9590", ["#85807b", "#b0aaa4", "#76716c", "#c2bdb6"], 0.8));
  mk(T.ROCK, (c, r) => {
    noiseFill(c, r, "#8a7462", ["#7b6656", "#957f6c", "#6f5b4c", "#a08a75"], 0.7);
    c.fillStyle = "#5f4d40";
    for (let k = 0; k < 3; k++) { const x = Math.floor(r() * 13), y = Math.floor(r() * 15); c.fillRect(x, y, 3, 1); }
  });
  mk(T.COBBLE, (c, r) => {
    c.fillStyle = "#5e5e5e"; c.fillRect(0, 0, 16, 16);
    const stones = [[0,0,6,5],[6,0,5,4],[11,0,5,6],[0,5,4,6],[4,4,7,5],[11,6,5,5],[0,11,6,5],[6,9,5,7],[11,11,5,5]];
    for (const [x, y, w, h] of stones) {
      const g = pick(r, ["#8d8d8d", "#7f7f7f", "#9a9a9a", "#868686"]);
      c.fillStyle = g; c.fillRect(x + 1, y + 1, w - 1, h - 1);
      c.fillStyle = shade(g, 22); c.fillRect(x + 1, y + 1, w - 2, 1);
      c.fillStyle = shade(g, -18); c.fillRect(x + 1, y + h - 1, w - 1, 1);
    }
    if (P.snow) { c.fillStyle = "rgba(255,255,255,0.35)"; for (let k = 0; k < 20; k++) c.fillRect(Math.floor(r() * 16), Math.floor(r() * 16), 1, 1); }
  });
  mk(T.PAVE, (c, r) => {
    c.fillStyle = "#a8906c"; c.fillRect(0, 0, 16, 16);
    const base = pick(r, ["#d6bd92", "#cfb488", "#dcc49b"]);
    c.fillStyle = base; c.fillRect(1, 1, 7, 6); c.fillRect(9, 1, 6, 6); c.fillRect(1, 8, 4, 7); c.fillRect(6, 8, 9, 7);
    c.fillStyle = shade(base, 14); c.fillRect(1, 1, 7, 1); c.fillRect(9, 1, 6, 1); c.fillRect(6, 8, 9, 1); c.fillRect(1, 8, 4, 1);
    for (let k = 0; k < 14; k++) { c.fillStyle = shade(base, -16); c.fillRect(Math.floor(r() * 16), Math.floor(r() * 16), 1, 1); }
    if (P.snow) { c.fillStyle = "rgba(255,255,255,0.3)"; for (let k = 0; k < 18; k++) c.fillRect(Math.floor(r() * 16), Math.floor(r() * 16), 1, 1); }
  });
  mk(T.WATER, (c, r) => {
    const base = P.snow ? "#9ec4e6" : "#3a78d8";
    noiseFill(c, r, base, P.snow ? ["#b5d4ef", "#8db6dc"] : ["#346cc4", "#4485e4", "#2f63b6"], 0.4);
  });
  mk(T.BRIDGE, (c, r) => {
    c.fillStyle = "#5c6670"; c.fillRect(0, 0, 16, 16);
    for (let y = 0; y < 16; y += 4) { c.fillStyle = "#8c96a0"; c.fillRect(0, y, 16, 3); c.fillStyle = "#a8b2bc"; c.fillRect(0, y, 16, 1); }
    c.fillStyle = "#3d454d"; c.fillRect(0, 0, 1, 16); c.fillRect(15, 0, 1, 16);
  });
  return set;
}
