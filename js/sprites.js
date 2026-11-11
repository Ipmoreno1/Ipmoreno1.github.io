// Original blocky character art, defined as pixel rows.
import { drawPix, makeCanvas } from "./util.js";

const PLAYER_PAL = {
  H: "#ff8200", h: "#c75f00", L: "#fff3a6", S: "#c98b63", s: "#a96f4b", E: "#24170f", R: "#3a2418",
  B: "#1f4a8a", b: "#173a6d", W: "#ffffff", P: "#3b3d4a", p: "#2c2e38", K: "#4a2f1c", m: "#7a4a32",
};
// 12 x 16, facing down
const P_DOWN = [
  "...HHHHHH...",
  "..HHHHLHHH..",
  ".hhhhhhhhhh.",
  "..RSSSSSSR..",
  "..SESSSSES..",
  "..SSSmmSSS..",
  "...sSSSSs...",
  "..BBBWWBBB..",
  ".SBBBBBBBBS.",
  ".SBBbBBbBBS.",
  ".sBBBBBBBBs.",
  "..PPPPPPPP..",
  "..PPPppPPP..",
  "..PPP..PPP..",
  "..KKK..KKK..",
  "............",
];
const P_UP = [
  "...HHHHHH...",
  "..HHHHHHHH..",
  ".hhhhhhhhhh.",
  "..RRRRRRRR..",
  "..RRRRRRRR..",
  "..RRRRRRRR..",
  "...sSSSSs...",
  "..BBBBBBBB..",
  ".SBBBBBBBBS.",
  ".SBBBBBBBBS.",
  ".sBBbbbbBBs.",
  "..PPPPPPPP..",
  "..PPPPPPPP..",
  "..PPP..PPP..",
  "..KKK..KKK..",
  "............",
];
const P_SIDE = [
  "...HHHHHH...",
  "..HHHHHHLH..",
  "..hhhhhhhhh.",
  "...RRSSSS...",
  "...RRSSES...",
  "...RSSSSSs..",
  "....sSSS....",
  "...BBBBBB...",
  "...BBSBBB...",
  "...BBSBBB...",
  "...BBsBBB...",
  "...PPPPPP...",
  "...PPPPPP...",
  "...PP.PPP...",
  "...KK.KKK...",
  "............",
];
function legs(rows, frame, side) {
  if (frame === 0) return rows;
  const r = rows.slice();
  if (side) {
    r[13] = frame === 1 ? "..PP...PPP.." : "....PPPP....";
    r[14] = frame === 1 ? "..KK....KK.." : "....KKKK....";
  } else {
    r[12] = frame === 1 ? "..PPPppPPP.." : "..PPPppPPP..";
    r[13] = frame === 1 ? "..PPP..PP..." : "...PP..PPP..";
    r[14] = frame === 1 ? "..KKK......." : ".......KKK..";
    r[15] = frame === 1 ? ".......KK..." : "...KK.......";
  }
  return r;
}
function drawPickaxe(ctx, x, y, swing) {
  // little held pickaxe; swing raises it overhead
  if (swing) {
    ctx.fillStyle = "#8a5a2b"; ctx.fillRect(x + 9, y - 4, 2, 8);
    ctx.fillStyle = "#b8c0c8"; ctx.fillRect(x + 6, y - 6, 8, 2); ctx.fillRect(x + 5, y - 5, 2, 2); ctx.fillRect(x + 13, y - 5, 2, 2);
  } else {
    ctx.fillStyle = "#8a5a2b"; ctx.fillRect(x + 11, y + 6, 1, 8);
    ctx.fillStyle = "#b8c0c8"; ctx.fillRect(x + 9, y + 5, 5, 2); ctx.fillRect(x + 8, y + 6, 1, 2); ctx.fillRect(x + 14, y + 6, 1, 2);
  }
}
// cache: player frames [dir][frame]
const cache = new Map();
export function playerSprite(dir, frame, swing) {
  const key = dir + frame + (swing ? "s" : "");
  if (cache.has(key)) return cache.get(key);
  const [c, ctx] = makeCanvas(16, 22);
  const side = dir === "left" || dir === "right";
  const rows = legs(dir === "up" ? P_UP : dir === "down" ? P_DOWN : P_SIDE, frame, side);
  if (dir === "up") drawPickaxe(ctx, 0, 6, swing);
  drawPix(ctx, rows, PLAYER_PAL, 2, 6, dir === "left");
  if (dir !== "up") drawPickaxe(ctx, dir === "left" ? -6 : 0, 6, swing);
  cache.set(key, c);
  return c;
}

// Wolf companion, 16x11, facing right
const WOLF_PAL = { w: "#d9d9d9", W: "#f2f2f2", g: "#a9a9a9", d: "#7d7d7d", E: "#1a1a1a", N: "#2b2b2b", C: "#ff8200", T: "#f2f2f2" };
const WOLF = [
  "...........gg...",
  "..........gwwg..",
  "..........wWEwN.",
  "T........CCwwwN.",
  "Tw.......CCwwW..",
  ".wwwwwwwwwwww...",
  "..wWWWWWWWWWw...",
  "..wwwwwwwwwww...",
  "..gg.gg..gg.gg..",
  "..dd.dd..dd.dd..",
  "................",
];
const WOLF_SIT = [
  "................",
  "...........gg...",
  "..........gwwg..",
  "..........wWEwN.",
  ".........CCwwwN.",
  "TT.......CCwwW..",
  ".wwwwwwwwwwww...",
  "..wWWWWWWWWWw...",
  "..wwwwwwwwwww...",
  "..dddd...dddd...",
  "................",
];
const wcache = new Map();
export function wolfSprite(left, frame, sit) {
  const key = (left ? "l" : "r") + frame + (sit ? "s" : "");
  if (wcache.has(key)) return wcache.get(key);
  const [c, ctx] = makeCanvas(16, 11);
  let rows = sit ? WOLF_SIT : WOLF;
  if (!sit && frame === 1) { rows = rows.slice(); rows[8] = "...gg.gg.gg.gg.."; rows[9] = "...dd.dd.dd.dd.."; }
  drawPix(ctx, rows, WOLF_PAL, 0, 0, left);
  wcache.set(key, c);
  return c;
}

// Pete: a blocky villager-like prospector (original design)
const PETE_PAL = { H: "#d8a400", h: "#a87f00", L: "#fff3a6", S: "#d7a07a", s: "#b37e5c", N: "#c98d68", E: "#1a1a1a",
  B: "#ece6dc", b: "#c7bfb2", F: "#c8321e", f: "#8f2215", P: "#2f5fa0", p: "#24497c", K: "#3a2414" };
const PETE = [
  "...HHHHHHH...",
  "..HHHHLHHHH..",
  ".hhhhhhhhhhh.",
  "..SSSSSSSSS..",
  "..SEESSSEES..",
  "..SSSNNNSSS..",
  "..sSSNNNSSs..",
  "..BBBBNBBBB..",
  "..BBBBBBBBB..",
  "...bBBBBBb...",
  "..FFfFFFfFF..",
  ".SFFfFFFfFFS.",
  ".SFFFFFFFFFS.",
  "..PPPPPPPPP..",
  "..PPPP.PPPP..",
  "..PPPP.PPPP..",
  "..KKKK.KKKK..",
];
let peteC;
export function peteSprite() {
  if (peteC) return peteC;
  const [c, ctx] = makeCanvas(16, 20);
  drawPix(ctx, PETE, PETE_PAL, 1, 1);
  // pick on his shoulder
  ctx.fillStyle = "#8a5a2b"; for (let i = 0; i < 9; i++) ctx.fillRect(13 - Math.floor(i / 3), 3 + i, 1, 1);
  ctx.fillStyle = "#b8c0c8"; ctx.fillRect(11, 2, 5, 2); ctx.fillRect(15, 3, 1, 2);
  peteC = c;
  return c;
}

const ORE_COL = { copper: ["#e07a3a", "#c4602a"], gold: ["#f2cf3a", "#c9a524"], iron: ["#d8b49a", "#b48f74"] };
const ocache = new Map();
export function oreSprite(kind) {
  if (ocache.has(kind)) return ocache.get(kind);
  const [c, ctx] = makeCanvas(16, 16);
  ctx.fillStyle = "#6e6e6e"; ctx.fillRect(1, 2, 14, 13);
  ctx.fillStyle = "#8a8a8a"; ctx.fillRect(1, 2, 14, 3);
  ctx.fillStyle = "#575757"; ctx.fillRect(1, 13, 14, 2);
  ctx.fillStyle = "#7a7a7a"; ctx.fillRect(3, 6, 3, 2); ctx.fillRect(10, 9, 3, 2);
  const [a, b] = ORE_COL[kind];
  for (const [x, y] of [[4, 4], [9, 5], [6, 9], [11, 11], [3, 11]]) { ctx.fillStyle = a; ctx.fillRect(x, y, 2, 2); ctx.fillStyle = b; ctx.fillRect(x + 1, y + 1, 1, 1); }
  ocache.set(kind, c);
  return c;
}
