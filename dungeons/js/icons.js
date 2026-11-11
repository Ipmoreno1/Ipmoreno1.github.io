// Procedural HUD and item icons. Original art.
import { makeCanvas, drawPix, shade } from "./util.js";

const cache = new Map();
const memo = (k, fn) => (cache.has(k) ? cache.get(k) : cache.set(k, fn()).get(k));

function px(rows, pal, scale = 3) {
  const w = rows[0].length, h = rows.length;
  const [c, ctx] = makeCanvas(w * scale, h * scale);
  const [t, tctx] = makeCanvas(w, h);
  drawPix(tctx, rows, pal, 0, 0);
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(t, 0, 0, c.width, c.height);
  return c;
}

const ICONS = {
  heart: {
    pal: { r: "#e02020", R: "#ff5050", d: "#8a1010", k: "#3a0000", w: "#ffd0d0" },
    rows: [
      ".rr...rr.",
      "rRRrrrRRr",
      "rRRRwRRRr",
      "rRRRRRRRr",
      ".rRRRRRr.",
      "..rRRRr..",
      "...rRr...",
      "....r....",
    ],
  },
  potion: {
    pal: { r: "#e02020", R: "#ff6060", g: "#c8d0d8", G: "#e8eef4", k: "#3a3a42", o: "#8a2010" },
    rows: [
      "..kkk..",
      "...k...",
      "..gGg..",
      ".gRRRg.",
      ".gRrRg.",
      ".gRRRg.",
      "..ggg..",
    ],
  },
  roll: {
    pal: { o: "#e07010", O: "#ff8a20", y: "#f0d060", k: "#2a1c12" },
    rows: [
      "...yyy...",
      "..yOOOy..",
      ".yOoooOy.",
      ".yOooook.",
      ".yOoooOy.",
      "..yOOOy..",
      "...yyy...",
    ],
  },
  map: {
    pal: { p: "#d8c490", P: "#c0ac78", g: "#3a8a28", b: "#1f4a8a", o: "#e07010", k: "#3a2a14" },
    rows: [
      ".kkkkkkk.",
      "kPPPPPPPk",
      "kPgPgPbPk",
      "kPPogPPPk",
      "kPbPgPoPk",
      "kPPPPPPPk",
      ".kkkkkkk.",
    ],
  },
  arrows: {
    pal: { y: "#f0d060", w: "#c8b090", k: "#3a2a14", a: "#8a5a28" },
    rows: [
      "......y.",
      ".....yw.",
      "....ywa.",
      "...ywa..",
      "k.ywa...",
      "kkwa....",
      ".kk.....",
    ],
  },
  bag: {
    pal: { a: "#6a4020", A: "#8a5a30", y: "#f0d060", k: "#2a1c12" },
    rows: [
      "..k..k..",
      ".kkkkkk.",
      ".AAAAAA.",
      ".AAyAAA.",
      ".AAAAAA.",
      ".AAAAAA.",
      "..AAAA..",
    ],
  },
  coin: {
    pal: { y: "#f0d060", Y: "#d4a020", o: "#ff8200", k: "#6a4010" },
    rows: [
      "..YYYY..",
      ".YYyyYY.",
      ".YyooYy.",
      ".YyooYy.",
      ".YYyyYY.",
      "..YYYY..",
    ],
  },
  sword: {
    pal: { i: "#d0d4dc", I: "#a0a4ac", y: "#f0d060", a: "#6a4020", k: "#2a2a30" },
    rows: [
      "......i",
      ".....iI",
      "....iI.",
      "k..iI..",
      "kyyI...",
      ".aa....",
      ".a.....",
    ],
  },
  bow: {
    pal: { a: "#8a5a28", A: "#6a4020", y: "#f0d060", k: "#2a1c12" },
    rows: [
      "...AA..",
      "..A..A.",
      ".A....y",
      "A.....y",
      ".A....y",
      "..A..A.",
      "...AA..",
    ],
  },
  helm: {
    pal: { i: "#8a9098", I: "#6a7078", o: "#e07010", k: "#2a2a30" },
    rows: [
      "..IIII..",
      ".IiiiiI.",
      "IiiiiiiI",
      "Ii.kk.iI",
      "Ii....iI",
      "I......I",
    ],
  },
  chestarm: {
    pal: { o: "#e07010", O: "#ff8a20", b: "#1f4a8a", k: "#2a1c12" },
    rows: [
      "o......o",
      "OOooooOO",
      ".OObbOO.",
      ".OOOOOO.",
      ".OObbOO.",
      "..OOOO..",
    ],
  },
  legs: {
    pal: { b: "#1f4a8a", B: "#183a70", k: "#0e1e38" },
    rows: [
      ".BBBBBB.",
      ".BBb.bB.",
      ".BB...BB",
      ".BB...BB",
      ".BB...BB",
      ".kk...kk",
    ],
  },
  boots: {
    pal: { a: "#4a3020", A: "#3a2418", k: "#1a1010" },
    rows: [
      "........",
      ".AA..AA.",
      ".AA..AA.",
      "AAA..AAA",
      "kkk..kkk",
    ],
  },
  star: {
    pal: { y: "#f0d060", Y: "#ffe9a0", o: "#e07010" },
    rows: [
      "....Y....",
      "....y....",
      "..YyyyY..",
      ".YyyyyyY.",
      "....y....",
      "...y.y...",
      "..y...y..",
    ],
  },
  camera: {
    pal: { k: "#2a2a30", i: "#6a6a72", y: "#f0d060", b: "#1f4a8a", w: "#e8e8f0" },
    rows: [
      "..kkkk...",
      "kkkkkkkkk",
      "kiiiyiiik",
      "ki.www.ik",
      "ki.wbw.ik",
      "ki.www.ik",
      "kkkkkkkkk",
    ],
  },
  trophy: {
    pal: { y: "#f0d060", Y: "#d4a020", a: "#6a4020" },
    rows: [
      "Y......Y",
      "YYyyyyYY",
      ".YyyyyY.",
      "..YyyY..",
      "...YY...",
      "..aaaa..",
      ".aaaaaa.",
    ],
  },
  shield: {
    pal: { b: "#1f4a8a", B: "#183a70", o: "#e07010", y: "#f0d060" },
    rows: [
      ".BBBBBB.",
      "BByyyooB",
      "BBybyooB",
      "BByyyooB",
      ".BByooB.",
      "..BBoB..",
      "...BB...",
    ],
  },
  quill: {
    pal: { w: "#e8e0d0", a: "#8a5a28", k: "#2a1c12", b: "#1f4a8a" },
    rows: [
      "......w",
      ".....ww",
      "....wwa",
      "...waak",
      "..wak..",
      ".bk....",
      "b......",
    ],
  },
  paper: {
    pal: { w: "#f0ece4", W: "#d8d4cc", k: "#3a3a42", b: "#1f4a8a" },
    rows: [
      ".WWWWWW.",
      "WwwwwwW.",
      "WwbbbwwW",
      "WwwwwwW.",
      "WwkkkwwW",
      "WwwwwwW.",
      ".WWWWWW.",
    ],
  },
  castle: {
    pal: { s: "#8a8680", S: "#6a6662", o: "#e07010", b: "#1f4a8a" },
    rows: [
      "s.s.s.s",
      "sssssss",
      "sbbosss",
      "sssssss",
      "s.s.s.s",
      "sssssss",
    ],
  },
  house: {
    pal: { r: "#8a2018", a: "#c4b49a", b: "#1f4a8a", k: "#3a2a14" },
    rows: [
      "...r...",
      "..rrr..",
      ".rrrrr.",
      "rrrrrrr",
      ".aaaaa.",
      ".abkba.",
      ".aaaaa.",
    ],
  },
  envelope: {
    pal: { w: "#f0ece4", b: "#1f4a8a", o: "#e07010" },
    rows: [
      "wwwwwww",
      "wobobow",
      "wbobobw",
      "wbbbbbw",
      "wwwwwww",
    ],
  },
  head: {
    pal: { s: "#e0b08a", h: "#3a2418", e: "#1a1010", o: "#e07010" },
    rows: [
      "..hhhh..",
      ".hsssshh",
      ".sseeess",
      ".ssssss.",
      "..oooo..",
    ],
  },
  knowledge: {
    pal: { y: "#f0d060", a: "#8a5a28", w: "#f0ece4" },
    rows: [
      "..yyy..",
      ".ywwwy.",
      ".ywaawy",
      ".ywwwwy",
      "..yyyy.",
    ],
  },
  clock: {
    pal: { y: "#f0d060", k: "#2a2a30", w: "#f0ece4" },
    rows: [
      "..yyy..",
      ".ywwwy.",
      ".ywkwwy",
      ".ywwkwy",
      "..yyy..",
    ],
  },
  pick: {
    pal: { i: "#8a9098", a: "#6a4020", k: "#2a2a30" },
    rows: [
      "iii....",
      "iia....",
      "..ia...",
      "...ia..",
      "....ia.",
      ".....ak",
    ],
  },
};

export function iconCanvas(name, scale = 3) {
  const def = ICONS[name] || ICONS.star;
  return memo(`ic|${name}|${scale}`, () => px(def.rows, def.pal, scale));
}

export function iconURL(name, scale = 3) {
  return memo(`url|${name}|${scale}`, () => iconCanvas(name, scale).toDataURL());
}

export function heartCanvas(frac = 1, size = 72) {
  // Large stylized heart for the Dungeons-like HUD. frac 0..1 fill.
  return memo(`bigheart|${Math.round(frac * 20)}|${size}`, () => {
    const [c, ctx] = makeCanvas(size, size);
    const drawHeart = (scale, fill) => {
      ctx.save();
      ctx.translate(size / 2, size / 2 + 2);
      ctx.scale(scale, scale);
      ctx.beginPath();
      ctx.moveTo(0, 10);
      ctx.bezierCurveTo(-24, -4, -22, -22, -10, -22);
      ctx.bezierCurveTo(-2, -22, 0, -14, 0, -14);
      ctx.bezierCurveTo(0, -14, 2, -22, 10, -22);
      ctx.bezierCurveTo(22, -22, 24, -4, 0, 10);
      ctx.closePath();
      ctx.fillStyle = fill;
      ctx.fill();
      ctx.restore();
    };
    drawHeart(1.15, "#1a0000");
    drawHeart(1.02, "#5a0a0a");
    drawHeart(1, "#8a1010");
    if (frac > 0) {
      ctx.save();
      const h = size * (1 - frac);
      ctx.beginPath(); ctx.rect(0, h, size, size - h); ctx.clip();
      drawHeart(1, "#e02020");
      ctx.restore();
      ctx.save();
      ctx.globalAlpha = 0.35;
      ctx.translate(size * 0.38, size * 0.32);
      ctx.beginPath(); ctx.ellipse(0, 0, 8, 5, -0.5, 0, Math.PI * 2);
      ctx.fillStyle = "#ffd0d0"; ctx.fill();
      ctx.restore();
    }
    return c;
  });
}

export const ITEM_ICON = {
  melee: "sword", ranged: "bow", helm: "helm", chest: "chestarm", legs: "legs", boots: "boots",
  artifact: "star", talisman: "knowledge", camera: "camera", trophy: "trophy", shield: "shield",
  quill: "quill", paper: "paper", castle: "castle", house: "house", envelope: "envelope",
  head: "head", pick: "pick", map: "map", potion: "potion",
};
