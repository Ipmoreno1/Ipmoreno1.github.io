// mascots.js : college mascot characters for the pixel campus, loaded from
// generated walk sheets in assets/mascots/. Each sheet is a 5-column x 4-row
// pack (contact L, passing, contact R, passing, stand) in down, left, right, up.
// Original drawings, no official logos or wordmarks.
import { mk, shade } from "./art.js?v=22";

export const SPECIES = {
  miner:    { bg: "#f6c98a" },
  longhorn: { bg: "#f3d0a8" },
  bear:     { bg: "#d5e6d0" },
  eagle:    { bg: "#d4eddc" },
  gator:    { bg: "#d7e8c8" },
  aggie:    { bg: "#f0d8d8" },
  frog:     { bg: "#e6d8f0" },
  cougar:   { bg: "#f3d0c8" },
  raider:   { bg: "#e8c8c8" },
  lobo:     { bg: "#e4d0d4" },
  mustang:  { bg: "#d0d8f0" },
  owl:      { bg: "#d4d8e8" },
  runner:   { bg: "#f8dcc8" },
  wildcat:  { bg: "#d8dce8" },
  panther:  { bg: "#e6d8f0" },
};

export const MASCOT_IDS = Object.keys(SPECIES);
export const mascotSheetUrl = (id) => `assets/mascots/${id}-walk.png?v=22`;

function rect(g, x, y, w, h, c) { if (w > 0 && h > 0) { g.fillStyle = c; g.fillRect(x, y, w, h); } }

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

function footOf(c) {
  const g = c.getContext("2d");
  const { data, width, height } = g.getImageData(0, 0, c.width, c.height);
  let maxY = 0;
  for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) if (data[(y * width + x) * 4 + 3] > 40) maxY = y;
  return maxY;
}

function sliceFrame(img, col, row, fw, fh) {
  const [c, g] = mk(fw, fh);
  g.imageSmoothingEnabled = false;
  g.drawImage(img, col * fw, row * fh, fw, fh, 0, 0, fw, fh);
  return c;
}

export function makeMascotFromImage(kind, img) {
  const fw = Math.round(img.width / 5), fh = Math.round(img.height / 4);
  const rows = { down: 0, left: 1, right: 2, up: 3 };
  const out = { down: [], left: [], right: [], up: [], idle: {}, mascot: kind };
  for (const [dir, r] of Object.entries(rows)) {
    for (let f = 0; f < 4; f++) out[dir].push(sliceFrame(img, f, r, fw, fh));
    out.idle[dir] = sliceFrame(img, 4, r, fw, fh);
  }
  out.foot = footOf(out.idle.down);
  const S = SPECIES[kind] || SPECIES.miner;
  const idle = out.idle.down;
  const headH = Math.min(idle.height, Math.max(20, Math.round(idle.height * 0.55)));
  const pad = Math.max(0, Math.round((idle.width - Math.min(idle.width, 28)) / 2));
  out.portrait = portraitOf(idle, S.bg, 0, pad, 0, idle.width - pad * 2, headH);
  return out;
}

export function loadMascot(kind) {
  return new Promise((resolve, reject) => {
    const im = new Image();
    im.decoding = "async";
    im.onload = () => resolve(makeMascotFromImage(kind, im));
    im.onerror = () => reject(new Error("Failed to load " + mascotSheetUrl(kind)));
    im.src = mascotSheetUrl(kind);
  });
}

export function loadMascots(ids = MASCOT_IDS) {
  return Promise.all(ids.map((id) => loadMascot(id).then((s) => [id, s]))).then((pairs) => Object.fromEntries(pairs));
}
