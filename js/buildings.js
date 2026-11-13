// buildings.js : UTEP campus buildings in the Bhutanese (dzong) style, drawn face-on in 3/4 view.
// Every building is a set of blocks. Each block has a roof seen from above, a fascia with painted rafter ends,
// a dark red brick kemar band with mosaic mandalas, battered (inward-sloping) stucco or brick walls with deep
// trapezoid windows, a stone plinth, and optional glass bays, towers, porticos, awnings and foundation shrubs.
import { mk, rng, hash2, shade, mix, outline, text3, text3w } from "./art.js?v=19";

const px = (g, x, y, c) => { g.fillStyle = c; g.fillRect(x, y, 1, 1); };
const rect = (g, x, y, w, h, c) => { g.fillStyle = c; g.fillRect(x, y, w, h); };
const MANDALA = ["#f2c832", "#f7f1e1", "#d8382e", "#2f9a4a", "#2f6fd0"];

export function paintBuilding(spec) {
  const W = spec.w; const plinth = spec.plinth ?? 4; const R = rng(spec.seed || 7);
  // measure height
  const blocks = spec.blocks.map((b) => { const fh = b.fh || 14; const wallH = b.floors * fh + 3; const bandH = b.band === false ? 0 : b.bandH ?? 8; const rd = b.rd ?? (b.roof === "flat" ? 7 : 11); const set = b.set || 0; const top = set + wallH + bandH + 3 + rd + (b.roof === "tiered" ? 12 : 0) + (b.tower ? b.tower.h + (b.tower.belfry ? 8 : 0) : 0) + (b.cupola ? 14 : 0) + (b.antenna != null ? 16 : 0) + 6; return Object.assign({ fh, wallH, bandH, rd, set, top }, b); });
  let Hc = Math.max(...blocks.map((b) => b.top)) + plinth + 6; Hc = Math.ceil(Hc / 16) * 16;
  const [c, g] = mk(W, Hc); const [gc, gg] = mk(W, Hc);
  const base = Hc - plinth - 2; // wall bottom line for set=0
  const order = blocks.slice().sort((a, b) => b.set - a.set);
  for (const b of order) paintBlock(g, gg, b, base - b.set, R, spec);
  // plinth across the front blocks
  for (const b of blocks) if (!b.set) {
    for (let y = base; y < base + plinth; y++) for (let x = b.x - 1; x < b.x + b.w + 1; x++) { const row = y - base; const m = row === plinth - 1 || (x + (row >> 1) * 5) % 9 === 0; px(g, x, y, m ? "#7f6e5c" : row === 0 ? "#d6c7ae" : shade("#b2a089", (hash2(x >> 2, row, 3) - 0.5) * 0.16)); }
  }
  // doors, porticos and steps
  for (const d of spec.doors || []) door(g, gg, d, base, plinth, spec);
  // name plate over the main door is a DOM sign; small painted address plate for flavour
  // foundation shrubs
  if (spec.shrubs !== false) {
    const skip = (x) => (spec.doors || []).some((d) => Math.abs(x - d.x) < (d.w || 14) / 2 + 9);
    for (const b of blocks) if (!b.set && !b.noShrubs) for (let x = b.x + 4; x < b.x + b.w - 4; x += 9 + ((R() * 4) | 0)) { if (skip(x)) continue; shrubAt(g, x, base + plinth - 1, R, spec.flowers); }
  }
  // signage painted on the facade (optional)
  if (spec.letters) { const t = spec.letters, tw = text3w(t); const lx = Math.round(spec.lettersX ?? W / 2 - tw / 2), ly = spec.lettersY; rect(g, lx - 2, ly - 2, tw + 4, 9, "#2a1f1c"); text3(g, t, lx, ly, "#f7f1e1"); }
  outline(c, 0.4);
  return { img: c, glow: gc, w: W, h: Hc, doorX: (spec.doors && spec.doors[0] ? spec.doors[0].x : W / 2), base };
}

function paintBlock(g, gg, b, base, R, spec) {
  const x0 = b.x, w = b.w, bat = b.batter ?? 3;
  const wallTop = base - b.wallH, bandTop = wallTop - b.bandH, eaveY = bandTop - 3, roofTop = eaveY - b.rd;
  const ins = (y) => Math.round(bat * Math.min(1, Math.max(0, (base - y) / (base - bandTop))));
  const wall = b.wall || "#e3d3b2", lower = b.lower, band = b.bandC || "#8e2d22";
  const tex = b.tex || "stucco";
  // ---- walls
  for (let y = wallTop; y < base; y++) {
    const i = ins(y); const isLower = lower && y >= base - b.fh - 1;
    const col0 = isLower ? lower : wall;
    for (let x = x0 + i; x < x0 + w - i; x++) {
      let col = col0; const n = hash2(x, y, 11);
      if (tex === "brick") { const row = (y - wallTop) >> 2; const off = row % 2 ? 3 : 0; const mortar = (y - wallTop) % 4 === 3 || (x + off) % 6 === 0; col = mortar ? shade(col0, 0.16) : shade(col0, (hash2((x + off) / 6 | 0, row, 9) - 0.5) * 0.14); }
      else if (tex === "stone") { const row = (y - wallTop) / 5 | 0; const bw = 7 + ((hash2(row, 0, 21) * 4) | 0); const off = (row * 5) % bw; const bi = ((x + off) / bw) | 0; const mortar = (y - wallTop) % 5 === 4 || (x + off) % bw === 0; col = mortar ? shade(col0, -0.2) : shade(col0, (hash2(bi, row, 17) - 0.5) * 0.2 + ((y - wallTop) % 5 === 0 ? 0.08 : 0)); }
      else if (tex === "panel") { const seam = (x - x0) % 16 === 0 || (y - wallTop) % b.fh === b.fh - 1; col = seam ? shade(col0, -0.14) : shade(col0, (hash2((x - x0) >> 4, ((y - wallTop) / b.fh) | 0, 23) - 0.5) * 0.06); }
      else { if (n > 0.86) col = shade(col0, -0.06); else if (n < 0.1) col = shade(col0, 0.07); if (hash2(x, 0, 5) > 0.9) col = shade(col, -0.035); }
      const fromL = x - (x0 + i), fromR = x0 + w - i - 1 - x;
      if (fromL < 1) col = shade(col, 0.22); else if (fromL < 2) col = shade(col, 0.1);
      if (fromR < 1) col = shade(col, -0.3); else if (fromR < 3) col = shade(col, -0.16);
      if (base - y < 3) col = shade(col, -0.1);
      if (y - wallTop < 2) col = shade(col, -0.18); // shadow under the band
      px(g, x, y, col);
    }
    if (isLower && y === base - b.fh - 1) rect(g, x0 + i, y, w - 2 * i, 1, shade(lower, -0.25));
  }
  // ---- string courses between floors (white or coloured trim bands)
  if (b.stripe) for (let f = 1; f < b.floors; f++) { const y = wallTop + f * b.fh - 1; const i = ins(y); rect(g, x0 + i, y, w - 2 * i, 2, b.stripe); rect(g, x0 + i, y + 2, w - 2 * i, 1, shade(b.wall || "#e3d3b2", -0.2)); }
  // ---- glass bays (curtain wall) e.g. the Engineering link or the CCSB atrium
  for (const gl of b.glass || []) {
    const gx = x0 + gl.x, gw = gl.w, gy0 = gl.full ? bandTop : wallTop + 1, gy1 = base - 1;
    for (let y = gy0; y < gy1; y++) for (let x = gx; x < gx + gw; x++) {
      const u = x - gx, v = y - gy0; const mull = u % 5 === 0 || v % (b.fh) === 0 || u === gw - 1;
      const refl = (u + v * 0.7) % 26 < 5; const sky = mix("#9cc7de", "#3d6f92", v / (gy1 - gy0));
      px(g, x, y, mull ? (u === 0 ? "#e9eef2" : "#b9c6cf") : refl ? shade(sky, 0.3) : sky);
      if (!mull) px(gg, x, y, (u + v) % 4 ? "#ffd98a" : "#fff0c2");
    }
    rect(g, gx - 1, gy0 - 1, gw + 2, 1, "#4f5a64"); rect(g, gx + gw, gy0, 1, gy1 - gy0, "#5f6a74");
  }
  const inGlass = (x, ww) => (b.glass || []).some((gl) => x + ww > x0 + gl.x - 2 && x < x0 + gl.x + gl.w + 2);
  const inDoor = (x, ww) => (spec.doors || []).some((d) => x + ww > d.x - (d.w || 14) / 2 - 3 && x < d.x + (d.w || 14) / 2 + 3);
  // ---- windows
  const ww = b.winW || 6, gap = b.winGap || 12;
  if (b.win === "ribbon") {
    for (let f = 0; f < b.floors; f++) {
      const wy = wallTop + 3 + f * b.fh, wh = b.fh - 7; const i = ins(wy) + 4;
      for (let x = x0 + i; x < x0 + w - i; x++) {
        if (inGlass(x, 1) || (f === b.floors - 1 && inDoor(x, 1))) continue;
        const u = x - x0 - i; const mull = u % (b.mull || 6) === 0;
        for (let v = 0; v < wh; v++) { const sky = mix("#a9d2e6", "#3b6585", v / wh); px(g, x, wy + v, v === 0 ? "#22344a" : mull ? (b.mullC || "#d9e0e6") : (u + v * 2) % 23 < 3 ? shade(sky, 0.35) : sky); if (!mull && v) px(gg, x, wy + v, "#ffd98a"); }
      }
      rect(g, x0 + i, wy + wh, w - 2 * i, 1, "#f3ead6"); rect(g, x0 + i, wy - 1, w - 2 * i, 1, b.trim || "#3a4a58");
    }
  } else if (b.win === "tall") {
    const th = b.floors * b.fh - 8; const wy = wallTop + 4; const i = ins(wy) + 5; const span = w - 2 * i; const n = Math.max(1, Math.floor((span + gap - ww) / gap)); const sx = x0 + i + Math.round((span - ((n - 1) * gap + ww)) / 2);
    for (let k = 0; k < n; k++) { const wx = sx + k * gap; if (inGlass(wx, ww) || inDoor(wx, ww)) continue; tallWin(g, gg, wx, wy, ww, th, b.trim || "#3f7f5a", b.fh); }
  } else if (b.win === "rabsel") {
    for (let f = 0; f < b.floors; f++) {
      const wy = wallTop + 3 + f * b.fh; const wh = b.fh - 6; const i = ins(wy) + 5; const span = w - 2 * i; const n = Math.max(1, Math.floor((span + gap - ww) / gap)); const sx = x0 + i + Math.round((span - ((n - 1) * gap + ww)) / 2);
      for (let k = 0; k < n; k++) { const wx = sx + k * gap; if (inGlass(wx, ww)) continue; if (f === b.floors - 1 && inDoor(wx, ww)) continue; if (f < b.floors - 1 || k % 2 === 0) rabselWin(g, gg, wx, wy, ww, wh, b.trim || "#2f8f5a", R); else win(g, gg, wx + 1, wy + 1, ww - 2, wh - 2, R, b.trim || "#2f8f5a", false); }
    }
  } else if (b.win === "slit") {
    for (let f = 0; f < b.floors; f++) {
      const wy = wallTop + 3 + f * b.fh; const wh = b.fh - 6; const i = ins(wy) + 5; const span = w - 2 * i; const n = Math.max(1, Math.floor((span + gap - 9) / gap)); const sx = x0 + i + Math.round((span - ((n - 1) * gap + 9)) / 2);
      for (let k = 0; k < n; k++) { const wx = sx + k * gap; if (inGlass(wx, 9)) continue; if (f === b.floors - 1 && inDoor(wx, 9)) continue; win(g, gg, wx, wy, 3, wh, R, b.trim || "#8e2d22", false); win(g, gg, wx + 6, wy, 3, wh, R, b.trim || "#8e2d22", false); }
    }
  } else
  for (let f = 0; f < b.floors; f++) {
    const wy = wallTop + 3 + f * b.fh; const wh = b.fh - 6 + (f === 0 && b.tall ? 2 : 0);
    const i = ins(wy) + 4; const span = w - 2 * i; const n = Math.max(1, Math.floor((span + gap - ww) / gap)); const used = (n - 1) * gap + ww; const sx = x0 + i + Math.round((span - used) / 2);
    for (let k = 0; k < n; k++) {
      const wx = sx + k * gap; if (inGlass(wx, ww)) continue; if (f === b.floors - 1 && inDoor(wx, ww)) continue;
      if (b.pairs && k % 3 === 2) continue;
      win(g, gg, wx, wy, ww, wh, R, b.trim || "#3f7f5a", f === 0 && b.rabsel);
    }
  }
  // ---- colonnade across the ground floor (shaded loggia behind white columns)
  if (b.colonnade) {
    const cn = b.colonnade.n || 6; const ch = b.colonnade.h || b.fh + 1; const y0 = base - ch; const i = ins(y0) + 3; const span = w - 2 * i; const step = span / (cn - 1);
    for (let y = y0; y < base; y++) for (let x = x0 + i; x < x0 + w - i; x++) px(g, x, y, shade(b.wall || "#e3d3b2", -0.38 - (y - y0) / ch * 0.12));
    rect(g, x0 + i - 1, y0 - 2, span + 2, 2, b.colonnade.c || "#efe6d2"); rect(g, x0 + i - 1, y0 - 3, span + 2, 1, "#fffaf0");
    for (let k = 0; k < cn; k++) { const cx = Math.round(x0 + i + k * step) - 1; rect(g, cx, y0, 3, ch, "#f3ecdc"); rect(g, cx + 2, y0, 1, ch, "#c9bba2"); rect(g, cx - 1, y0, 5, 1, "#fffaf0"); rect(g, cx - 1, base - 1, 5, 1, "#c9bba2"); }
  }
  if (b.awningRow) {
    const col = b.awningRow; const ay = base - b.fh + 1; const i = ins(ay) + 2;
    for (let r = 0; r < 5; r++) for (let x = x0 + i - (r >> 1); x < x0 + w - i + (r >> 1); x++) px(g, x, ay + r, ((x - x0) >> 2) % 2 ? (r % 2 ? shade(col, -0.12) : col) : (r % 2 ? "#e8dfcc" : "#fbf6ea"));
    for (let x = x0 + i - 2; x < x0 + w - i + 2; x += 2) px(g, x, ay + 5, shade(col, -0.35));
    rect(g, x0 + i, ay + 6, w - 2 * i, 1, "rgba(30,20,20,0.35)");
  }
  // ---- kemar band with mandalas
  if (b.bandH) {
    for (let y = bandTop; y < wallTop; y++) {
      const i = ins(y); for (let x = x0 + i - 1; x < x0 + w - i + 1; x++) {
        const r = y - bandTop; const off = (r >> 1) % 2 ? 2 : 0; const mortar = r % 2 === 1 && (x + off) % 4 === 0;
        let col = shade(band, (hash2(x >> 2, r >> 1, 4) - 0.5) * 0.18); if (mortar) col = shade(band, -0.3);
        if (r === 0) col = shade(band, 0.22); if (r === b.bandH - 1) col = shade(band, -0.4);
        if (x === x0 + i - 1) col = shade(col, 0.15); if (x >= x0 + w - i - 1) col = shade(col, -0.2);
        px(g, x, y, col);
      }
    }
    const cy = bandTop + (b.bandH >> 1); const iB = ins(cy); const mg = b.mandalaGap || 22;
    for (let x = x0 + iB + 8; x < x0 + w - iB - 6; x += mg) mandala(g, x, cy);
  }
  // ---- fascia, rafter ends and roof
  const rx0 = x0 + bat - (b.ov ?? 3), rw = w - 2 * bat + 2 * (b.ov ?? 3);
  rect(g, rx0, eaveY, rw, 3, "#3a2a22"); for (let x = rx0 + 1, k = 0; x < rx0 + rw - 1; x += 2, k++) px(g, x, eaveY + 1, ["#e3b341", "#2f8f86", "#d8382e", "#efe2c0"][k % 4]); rect(g, rx0, eaveY + 2, rw, 1, "#22180f");
  const roof = b.roofC || "#5b4636";
  if (b.roof === "flat") {
    rect(g, rx0, roofTop, rw, b.rd, shade(roof, 0.05));
    for (let y = roofTop + 1; y < eaveY - 1; y++) for (let x = rx0 + 1; x < rx0 + rw - 1; x++) { const n = hash2(x, y, 13); px(g, x, y, n > 0.8 ? "#b9b3a6" : n < 0.2 ? "#9d978b" : "#aca598"); }
    rect(g, rx0, roofTop, rw, 1, "#efe6d2"); rect(g, rx0, eaveY - 1, rw, 1, "#8a8276"); rect(g, rx0, roofTop, 1, b.rd, "#d8cfbd"); rect(g, rx0 + rw - 1, roofTop, 1, b.rd, "#7f776b");
    // rooftop units and skylights
    for (let k = 0; k < Math.floor(rw / 40); k++) { const ux = rx0 + 8 + k * 40 + ((R() * 10) | 0); if (ux + 12 > rx0 + rw - 4) break; if (k % 2 === 0) { rect(g, ux, roofTop + 2, 10, b.rd - 4, "#cfd3d6"); rect(g, ux, roofTop + 2, 10, 1, "#eef0f2"); for (let xx = ux + 2; xx < ux + 9; xx += 2) px(g, xx, roofTop + 3, "#8a9096"); } else { rect(g, ux, roofTop + 2, 14, b.rd - 4, "#6f9fc0"); rect(g, ux, roofTop + 2, 14, 1, "#b7d6ea"); for (let xx = ux + 3; xx < ux + 14; xx += 4) rect(g, xx, roofTop + 2, 1, b.rd - 4, "#4f7896"); } }
  } else {
    // low hipped roof seen from above: trapezoid shingles
    for (let y = roofTop; y < eaveY; y++) {
      const r = eaveY - 1 - y; const cut = Math.round(r * (b.hip ?? 1.2)); const xa = rx0 + cut, xb = rx0 + rw - cut; if (xb - xa < 4) continue;
      for (let x = xa; x < xb; x++) {
        let col = roof; const course = (eaveY - y) % 3 === 0; const tile = (x + ((eaveY - y) / 3 | 0) * 2) % 4 === 0;
        if (course) col = shade(roof, -0.22); else if (tile) col = shade(roof, -0.1); else if (hash2(x, y, 2) > 0.85) col = shade(roof, 0.08);
        if (x - xa < 2) col = shade(col, 0.18); if (xb - x <= 2) col = shade(col, -0.25);
        px(g, x, y, col);
      }
    }
    const rtop = roofTop + 1; const cutT = Math.round((eaveY - 1 - roofTop) * (b.hip ?? 1.2)); rect(g, rx0 + cutT, roofTop, rw - 2 * cutT, 1, shade(roof, 0.3)); rect(g, rx0 + cutT, rtop, rw - 2 * cutT, 1, shade(roof, 0.12));
    if (b.rooflights) for (let x = rx0 + cutT + 6; x < rx0 + rw - cutT - 10; x += b.rooflights) { rect(g, x, roofTop + 3, 6, 4, "#7fb0cf"); rect(g, x, roofTop + 3, 6, 1, "#cfe6f2"); rect(g, x, roofTop + 6, 6, 1, "#3d5f78"); }
  }
  if (b.roof === "tiered") { // raised second roof (jabzhi) floating on short posts over a dark gap
    const iw = Math.round(rw * (b.tierW || 0.46)); const ix = rx0 + Math.round((rw - iw) / 2) + (b.tierDx || 0); const gy = roofTop - 4;
    rect(g, ix + 2, gy, iw - 4, 5, "#2a1f1c"); for (let x = ix + 3; x < ix + iw - 3; x += 6) rect(g, x, gy, 2, 5, "#e8d6b0");
    rect(g, ix, gy - 2, iw, 2, "#3a2a22"); for (let x = ix + 1, k = 0; x < ix + iw - 1; x += 2, k++) px(g, x, gy - 1, ["#e3b341", "#2f8f86", "#d8382e", "#efe2c0"][k % 4]);
    const roof2 = b.roofC || "#5b4636";
    for (let r = 0; r < 8; r++) { const cut = Math.round(r * 1.4); const xa = ix - 3 + cut, xb = ix + iw + 3 - cut; if (xb - xa < 4) break; for (let x = xa; x < xb; x++) { let col = r % 3 === 0 ? shade(roof2, -0.2) : roof2; if (x - xa < 2) col = shade(col, 0.18); if (xb - x <= 2) col = shade(col, -0.25); px(g, x, gy - 3 - r, col); } }
    if (b.tierFinial) { const fx = ix + (iw >> 1); rect(g, fx - 1, gy - 17, 3, 6, "#e3b341"); px(g, fx, gy - 18, "#fff1a8"); rect(g, fx - 2, gy - 12, 5, 1, "#b8862a"); }
  }
  if (b.parapet) { rect(g, rx0, roofTop - 2, rw, 2, b.parapet); rect(g, rx0, roofTop - 2, rw, 1, shade(b.parapet, 0.3)); }
  if (b.solar) { // rows of blue photovoltaic panels on the flat roof
    const sx0 = rx0 + 5, sx1 = rx0 + rw - 5; const rows = Math.max(1, Math.floor((b.rd - 3) / 3));
    for (let r = 0; r < rows; r++) for (let x = sx0; x < sx1 - 10; x += 13) { const y = roofTop + 1 + r * 3; rect(g, x, y, 11, 2, "#2c4f86"); for (let xx = x + 2; xx < x + 11; xx += 3) px(g, xx, y, "#6f9ad6"); rect(g, x, y + 2, 11, 1, "#6a6f78"); }
  }
  if (b.antenna != null) { const ax = x0 + b.antenna; rect(g, ax, roofTop - 16, 1, 16, "#8a9096"); for (let k = 0; k < 4; k++) rect(g, ax - 2 + (k % 2), roofTop - 14 + k * 4, 5 - 2 * (k % 2), 1, "#9aa2aa"); px(g, ax, roofTop - 17, "#e2455a"); rect(gg, ax, roofTop - 17, 1, 1, "#ff6a5a");
    const dx = ax + 6; rect(g, dx - 2, roofTop - 6, 6, 1, "#e9eef2"); rect(g, dx - 3, roofTop - 5, 8, 1, "#cfd6dc"); rect(g, dx - 2, roofTop - 4, 6, 1, "#aab3bb"); rect(g, dx, roofTop - 3, 2, 3, "#7f878f"); }
  // ---- tower (utse) rising from the roof
  if (b.tower) towerOn(g, gg, b, rx0, rw, roofTop, R);
  if (b.cupola) for (const cx of b.cupola) cupola(g, gg, x0 + cx, roofTop + 2);
  if (b.finial) for (const fx of b.finial) { const xx = x0 + fx; rect(g, xx - 1, roofTop - 6, 3, 6, "#e3b341"); px(g, xx, roofTop - 7, "#fff1a8"); px(g, xx - 1, roofTop - 6, "#fff1a8"); rect(g, xx - 2, roofTop - 1, 5, 1, "#b8862a"); }
}

function towerOn(g, gg, b, rx0, rw, roofTop, R) {
  const t = b.tower; const tw = t.w, tx = rx0 + Math.round((rw - tw) / 2) + (t.dx || 0); const tb = roofTop + 6; const ty = tb - t.h;
  for (let y = ty; y < tb; y++) for (let x = tx; x < tx + tw; x++) { let col = b.wall || "#e3d3b2"; if (hash2(x, y, 3) > 0.88) col = shade(col, -0.06); if (x - tx < 1) col = shade(col, 0.2); if (tx + tw - x <= 2) col = shade(col, -0.2); px(g, x, y, col); }
  rect(g, tx - 1, ty, tw + 2, 6, b.bandC || "#8e2d22"); rect(g, tx - 1, ty, tw + 2, 1, shade(b.bandC || "#8e2d22", 0.2)); for (let x = tx + 5; x < tx + tw - 3; x += 12) mandala(g, x, ty + 3, true);
  if (t.belfry) { // open arched bell chamber
    const cx = tx + (tw >> 1), aw = Math.min(tw - 6, 12), ay = ty + 8, ah = Math.min(t.h - 12, 14);
    for (let j = 0; j < ah; j++) for (let i = 0; i < aw; i++) { const dx = i - aw / 2 + 0.5; if (j < aw / 2 && dx * dx + (j - aw / 2) ** 2 > (aw / 2) ** 2) continue; px(g, cx - (aw >> 1) + i, ay + j, j < 2 ? "#1c1410" : "#2a1f1c"); }
    rect(g, cx - 3, ay + 4, 6, 5, "#c99a3a"); rect(g, cx - 4, ay + 8, 8, 1, "#a8782a"); rect(g, cx - 2, ay + 4, 2, 4, "#f0c860"); px(g, cx, ay + 9, "#6a4a22"); rect(g, cx, ay + 2, 1, 2, "#6a4a22");
    rect(g, cx - (aw >> 1) - 1, ay + ah, aw + 2, 1, "#f3ead6");
  } else if (t.clock) { const cx = tx + (tw >> 1), cy = ty + 14; for (let j = -5; j <= 5; j++) for (let i = -5; i <= 5; i++) { const d = i * i + j * j; if (d <= 25) px(g, cx + i, cy + j, d > 16 ? "#2a1f1c" : "#fbf6ea"); } rect(g, cx, cy - 3, 1, 4, "#2a1f1c"); rect(g, cx, cy, 3, 1, "#2a1f1c"); for (const [i, j] of [[0, -4], [4, 0], [0, 4], [-4, 0]]) px(g, cx + i, cy + j, "#8e2d22"); rect(gg, cx - 3, cy - 3, 7, 7, "#fff0c2"); }
  else { const n = Math.max(1, Math.floor((tw - 6) / 9)); for (let k = 0; k < n; k++) win(g, gg, tx + 4 + k * Math.floor((tw - 8) / n) + 1, ty + 9, 5, Math.min(9, t.h - 14), R, b.trim || "#3f7f5a", false); }
  const ov = 4; rect(g, tx - ov, ty - 3, tw + ov * 2, 3, "#3a2a22"); for (let x = tx - ov + 1, k = 0; x < tx + tw + ov - 1; x += 2, k++) px(g, x, ty - 2, ["#e3b341", "#2f8f86", "#d8382e"][k % 3]);
  const roof = t.roofC || b.roofC || "#5b4636"; const tr = t.belfry ? 14 : 8; for (let r = 0; r < tr; r++) { const cut = Math.round(r * (t.belfry ? (tw + ov * 2) / 2 / tr : 1.3)); if (tw + ov * 2 - cut * 2 > 0) rect(g, tx - ov + cut, ty - 4 - r, tw + ov * 2 - cut * 2, 1, r % 3 === 0 ? shade(roof, -0.2) : r > tr - 3 ? shade(roof, 0.15) : roof); }
  if (t.finial) { const fy = t.belfry ? ty - 24 : ty - 18; const fx = tx + (tw >> 1); rect(g, fx - 1, fy, 3, 7, "#e3b341"); px(g, fx, ty - 19, "#fff1a8"); rect(g, fx - 2, ty - 12, 5, 1, "#b8862a"); }
}
function cupola(g, gg, cx, y) { rect(g, cx - 5, y - 10, 10, 10, "#e3d3b2"); rect(g, cx - 2, y - 7, 4, 5, "#2d4258"); rect(gg, cx - 2, y - 7, 4, 5, "#ffcf6a"); rect(g, cx - 7, y - 12, 14, 2, "#3a2a22"); rect(g, cx - 5, y - 15, 10, 3, "#5b4636"); rect(g, cx - 3, y - 17, 6, 2, "#6a5444"); rect(g, cx, y - 20, 1, 3, "#e3b341"); }

function mandala(g, cx, cy, small) {
  if (small) { px(g, cx, cy, "#f2c832"); px(g, cx - 1, cy, "#f7f1e1"); px(g, cx + 1, cy, "#f7f1e1"); px(g, cx, cy - 1, "#2f9a4a"); px(g, cx, cy + 1, "#2f6fd0"); return; }
  const ring = [[-1, -3], [0, -3], [1, -3], [2, -2], [3, -1], [3, 0], [3, 1], [2, 2], [1, 3], [0, 3], [-1, 3], [-2, 2], [-3, 1], [-3, 0], [-3, -1], [-2, -2]];
  for (const [x, y] of ring) px(g, cx + x, cy + y, "#f2c832");
  for (const [x, y, c] of [[0, -2, "#f7f1e1"], [0, 2, "#f7f1e1"], [-2, 0, "#f7f1e1"], [2, 0, "#f7f1e1"], [-1, -1, "#2f9a4a"], [1, -1, "#2f6fd0"], [-1, 1, "#2f6fd0"], [1, 1, "#2f9a4a"], [0, 0, "#d8382e"], [0, -1, "#d8382e"], [0, 1, "#d8382e"], [-1, 0, "#d8382e"], [1, 0, "#d8382e"]]) px(g, cx + x, cy + y, c);
}

function win(g, gg, x, y, w, h, R, trim, big) {
  if (big) { x -= 1; w += 2; }
  // dark trapezoid surround, narrower at the top (deep set)
  for (let j = -1; j <= h; j++) { const i = j < 1 ? 1 : 0; rect(g, x - 1 + i, y + j, w + 2 - i * 2, 1, "#2a1f1c"); }
  // painted lintel (trim colour) and cream cap
  rect(g, x - 2, y - 3, w + 4, 2, trim); rect(g, x - 2, y - 3, w + 4, 1, shade(trim, 0.25)); px(g, x - 2, y - 2, shade(trim, -0.3)); px(g, x + w + 1, y - 2, shade(trim, -0.3));
  // glass with reveal shadow, sky gradient and glint
  for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) { let col = mix("#7ea8c4", "#2e4a63", j / h); if (j === 0 || i === 0) col = "#22344a"; else if ((i + j) === 3 || (i + j) === 4) col = shade(col, 0.3); px(g, x + i, y + j, col); }
  px(g, x + 1, y + 1, "#e9f4fb");
  const blinds = R() < 0.18; if (blinds) rect(g, x + 1, y + 1, w - 1, Math.max(1, h >> 2), "#e8d9b8");
  if (w >= 6) rect(g, x + (w >> 1), y, 1, h, "#4a3424"); if (h >= 8) rect(g, x, y + Math.round(h * 0.38), w, 1, "#4a3424");
  // sill
  rect(g, x - 1, y + h + 1, w + 2, 1, "#f3ead6"); rect(g, x - 1, y + h + 2, w + 2, 1, "rgba(60,40,30,0.25)");
  if (R() < 0.75) { gg.fillStyle = "#ffcf6a"; gg.fillRect(x + 1, y + 1, w - 1, h - 1); gg.fillStyle = "#fff0c2"; gg.fillRect(x + 1, y + 1, w - 1, 1); if (w >= 6) gg.clearRect(x + (w >> 1), y, 1, h); }
}

function tallWin(g, gg, x, y, w, h, trim, fh) { // two-plus storey reading-room window with a round head
  rect(g, x - 2, y - 2, w + 4, h + 3, trim); rect(g, x - 2, y - 2, w + 4, 1, shade(trim, 0.3));
  for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) {
    const dx = i - (w - 1) / 2; if (j < w / 2 && dx * dx + (j - w / 2) ** 2 > (w / 2) ** 2 + 0.5) { px(g, x + i, y + j, trim); continue; }
    let col = mix("#a9d2e6", "#2e4a63", j / h); if (i === 0) col = "#22344a"; if (i === (w >> 1) || (j > w / 2 && (j - (w >> 1)) % 6 === 0)) col = "#efe6d2"; if ((i + j) % 13 === 2) col = shade(col, 0.3);
    px(g, x + i, y + j, col); if (col !== "#efe6d2") px(gg, x + i, y + j, "#ffd98a");
  }
  rect(g, x - 2, y + h, w + 4, 1, "#f3ead6");
}
function rabselWin(g, gg, x, y, w, h, trim, R) { // Bhutanese wooden bay window: painted frame, lattice head, cusped lintel
  rect(g, x - 2, y - 2, w + 4, h + 4, "#5a2a1a"); rect(g, x - 1, y - 1, w + 2, h + 2, trim); rect(g, x - 1, y - 1, w + 2, 1, shade(trim, 0.3));
  const lh = Math.max(2, (h / 3) | 0);
  for (let j = 0; j < lh; j++) for (let i = 0; i < w; i++) px(g, x + i, y + j, (i + j) % 2 ? "#f2c832" : "#8e2d22");
  for (let j = lh; j < h; j++) for (let i = 0; i < w; i++) { let col = mix("#7ea8c4", "#2e4a63", (j - lh) / (h - lh)); if (i === (w >> 1)) col = trim; if (j === lh) col = "#2a1f1c"; px(g, x + i, y + j, col); if (col !== trim && R() < 0.9) px(gg, x + i, y + j, "#ffcf6a"); }
  rect(g, x - 3, y - 3, w + 6, 1, "#efe2c0"); px(g, x - 3, y - 2, "#efe2c0"); px(g, x + w + 2, y - 2, "#efe2c0");
  rect(g, x - 2, y + h + 2, w + 4, 1, "rgba(60,40,30,0.3)");
}
function door(g, gg, d, base, plinth, spec) {
  const dw = d.w || 14, dh = d.h || 12, dx = Math.round(d.x - dw / 2), dy = base - dh;
  // recess + doors
  rect(g, dx - 2, dy - 2, dw + 4, dh + 2, "#2a1f1c");
  if (d.style === "wood") { rect(g, dx, dy, dw, dh, "#7a4524"); for (let x = dx + 2; x < dx + dw; x += 3) rect(g, x, dy, 1, dh, "#5f341a"); rect(g, dx + (dw >> 1), dy, 1, dh, "#3b2418"); for (let y = dy + 2; y < base; y += 4) { px(g, dx + 1, y, "#e3b341"); px(g, dx + dw - 2, y, "#e3b341"); } }
  else { for (let y = dy; y < base; y++) for (let x = dx; x < dx + dw; x++) { const u = x - dx; const m = u % Math.max(3, dw >> 2) === 0 || y === dy; px(g, x, y, m ? "#c8d2da" : ((u + y) % 9 < 2 ? "#a9d0e6" : mix("#6f9fc0", "#2e5878", (y - dy) / dh))); } rect(gg, dx, dy, dw, dh, "#ffe2a0"); rect(g, dx + (dw >> 1) - 2, dy + (dh >> 1), 1, 2, "#e9eef2"); rect(g, dx + (dw >> 1) + 1, dy + (dh >> 1), 1, 2, "#e9eef2"); }
  rect(gg, dx, dy, dw, 2, "#ffcf6a");
  // portico (stone columns and a red lintel) or a cloth awning
  if (d.portico) {
    const pw = dw + 12, px0 = Math.round(d.x - pw / 2);
    for (const cx of [px0 + 1, px0 + pw - 4]) { rect(g, cx, dy - 4, 3, dh + 4, "#efe6d2"); rect(g, cx + 2, dy - 4, 1, dh + 4, "#c9bba2"); rect(g, cx - 1, base - 1, 5, 1, "#c9bba2"); }
    rect(g, px0 - 2, dy - 9, pw + 4, 6, spec.portico || "#8e2d22"); rect(g, px0 - 2, dy - 9, pw + 4, 1, "#e3b341"); rect(g, px0 - 2, dy - 4, pw + 4, 1, "#2a1f1c"); mandala(g, Math.round(d.x), dy - 6, true);
    rect(g, px0 - 3, dy - 11, pw + 6, 2, "#3a2a22");
  } else if (d.awning) {
    const aw = dw + 8, ax = Math.round(d.x - aw / 2); const col = d.awning;
    for (let r = 0; r < 5; r++) rect(g, ax - (r >> 1), dy - 7 + r, aw + (r >> 1) * 2, 1, r % 2 ? shade(col, -0.12) : col);
    for (let x = ax; x < ax + aw; x += 4) rect(g, x, dy - 7, 2, 5, shade(col, 0.25));
    for (let x = ax - 2; x < ax + aw + 2; x += 2) px(g, x, dy - 2, shade(col, -0.35));
    rect(g, ax - 2, dy - 1, aw + 4, 1, "rgba(30,20,20,0.35)");
  }
  // steps
  for (let s = 0; s < plinth + 1; s += 2) { rect(g, dx - 4 - s, base + s - 1, dw + 8 + s * 2, 2, s % 4 ? "#d8cab3" : "#c4b49b"); rect(g, dx - 4 - s, base + s - 1, dw + 8 + s * 2, 1, "#ece2cf"); }
}
function shrubAt(g, x, y, R, flowers) {
  const pal = ["#3f5f24", "#58802e", "#78a03c", "#9cbe58"]; const r = 3 + ((R() * 2) | 0);
  for (let j = -r; j <= 1; j++) for (let i = -r - 1; i <= r + 1; i++) { const d = (i * i) / ((r + 1) * (r + 1)) + (j * j) / (r * r); if (d > 1) continue; const l = -i * 0.3 - j * 0.5 + (R() - 0.5) * 0.8; px(g, x + i, y + j, l > 0.9 ? pal[3] : l > 0 ? pal[2] : l > -0.9 ? pal[1] : pal[0]); }
  const fl = flowers || ["#ff8200", "#f2d35e", "#f7f1e1", "#e2455a"]; if (R() < 0.7) for (let k = 0; k < 3; k++) px(g, x - r + ((R() * r * 2) | 0), y - r + 1 + ((R() * r) | 0), fl[(R() * fl.length) | 0]);
}

// ---------------------------------------------------------------- the campus set
// Every building gets its own mix of footprint, height, wall material, window style, roof and trim so no two read alike.
const SAND = "#e6d4b0", TAN = "#d9c39c", GRAYB = "#cdbfa8", CREAM = "#efe3c8", PINK = "#e2c4a2", LGRAY = "#d4d0c6";
const RED_BRICK = "#b8644a", BROWN_BRICK = "#9c6a4e", STONE = "#c9bfae", WARMSTONE = "#d3b48c", WHITE = "#f4efe4", CONCRETE = "#d8d4cb", OCHRE = "#e0b878";
const ROOF = { brown: "#5b4636", red: "#a8412f", terracotta: "#c4622d", green: "#4f6e4f", slate: "#4a5a68", plum: "#6a3a40", charcoal: "#3f4448" };
export const BUILDINGS = {
  // Library: stone base, tall two-storey reading-room windows, a raised tiered roof and a clock tower
  library: () => paintBuilding({ w: 224, seed: 3, flowers: ["#ff8200", "#f2d35e"], blocks: [
    { x: 0, w: 64, floors: 3, wall: SAND, tex: "stone", roof: "hip", roofC: ROOF.red, win: "rabsel", winW: 7, winGap: 14, trim: "#2f8f5a", stripe: WHITE },
    { x: 160, w: 64, floors: 3, wall: SAND, tex: "stone", roof: "hip", roofC: ROOF.red, win: "rabsel", winW: 7, winGap: 14, trim: "#2f8f5a", stripe: WHITE },
    { x: 56, w: 112, floors: 4, wall: CREAM, lower: STONE, roof: "tiered", roofC: ROOF.red, win: "tall", winW: 8, winGap: 14, set: 4, trim: "#8e2d22", tierW: 0.5 },
  ], doors: [{ x: 112, w: 20, h: 13, portico: true }] }),
  // Union: long striped awning over the cafe frontage, glass atrium, terracotta roofs with skylights
  union: () => paintBuilding({ w: 208, seed: 5, flowers: ["#ff8200", "#e2455a", "#f7f1e1"], blocks: [
    { x: 0, w: 88, floors: 2, fh: 16, wall: OCHRE, roof: "hip", roofC: ROOF.terracotta, winW: 8, winGap: 13, rooflights: 16, awningRow: "#ff8200", trim: "#1f3a6e" },
    { x: 120, w: 88, floors: 2, fh: 16, wall: OCHRE, roof: "hip", roofC: ROOF.terracotta, winW: 8, winGap: 13, rooflights: 16, awningRow: "#ff8200", trim: "#1f3a6e" },
    { x: 84, w: 40, floors: 3, wall: OCHRE, roof: "flat", glass: [{ x: 4, w: 32, full: true }], set: 6, band: false, parapet: "#1f3a6e" },
  ], doors: [{ x: 104, w: 18, h: 13 }] }),
  // CCSB: modern concrete panels, ribbon windows, glass atrium, rooftop antenna
  ccsb: () => paintBuilding({ w: 176, seed: 13, blocks: [
    { x: 0, w: 112, floors: 4, fh: 13, wall: CONCRETE, tex: "panel", roof: "flat", win: "ribbon", mull: 7, set: 8, trim: "#2f6f8f", bandC: "#7e2a1c", bandH: 6, antenna: 22 },
    { x: 104, w: 72, floors: 4, fh: 13, wall: CREAM, roof: "flat", winW: 6, winGap: 10, trim: "#2f6f8f", glass: [{ x: 8, w: 24, full: true }], parapet: "#2f6f8f" },
    { x: 0, w: 60, floors: 2, wall: PINK, roof: "hip", roofC: ROOF.slate, winW: 6, winGap: 11, trim: "#2f6f8f" },
  ], doors: [{ x: 124, w: 16, awning: "#2a9d8f" }] }),
  // Engineering: brick lab wing with solar panels, a glass link, and a tower wing with antenna and dish
  engineering: () => paintBuilding({ w: 208, seed: 17, blocks: [
    { x: 0, w: 92, floors: 3, wall: BROWN_BRICK, tex: "brick", roof: "flat", solar: true, rd: 10, winW: 7, winGap: 11, trim: "#e3b341", stripe: "#efe2c0", bandC: "#5a2a1a", bandH: 6 },
    { x: 124, w: 84, floors: 4, fh: 13, wall: CONCRETE, tex: "panel", roof: "flat", win: "ribbon", mull: 5, trim: "#8e2d22", antenna: 60, solar: true, rd: 9 },
    { x: 88, w: 40, floors: 3, wall: SAND, roof: "flat", glass: [{ x: 3, w: 34, full: true }], band: false, set: 2 },
  ], doors: [{ x: 108, w: 18, h: 13 }] }),
  // Centennial Museum: stone, painted wooden bay windows, plum hip roof
  museum: () => paintBuilding({ w: 128, seed: 8, flowers: ["#e2455a", "#f2d35e"], blocks: [
    { x: 0, w: 128, floors: 2, fh: 16, wall: WARMSTONE, tex: "stone", roof: "hip", roofC: ROOF.plum, bandC: "#7e2a1c", win: "rabsel", winW: 8, winGap: 16, trim: "#2f8f5a", hip: 1.6, rd: 13 },
  ], doors: [{ x: 64, w: 14, style: "wood", portico: true }] }),
  lhakhang: () => paintBuilding({ w: 96, seed: 41, shrubs: false, blocks: [
    { x: 6, w: 84, floors: 1, fh: 22, wall: "#f4efe4", lower: null, roof: "hip", roofC: "#a8742a", bandC: "#9c2a1c", bandH: 10, winW: 7, winGap: 22, rabsel: true, finial: [42], hip: 1.6, rd: 14 },
  ], doors: [{ x: 48, w: 14, h: 16, style: "wood" }] }),
  // supporting cast (not landmarks)
  oldmain: () => paintBuilding({ w: 144, seed: 21, blocks: [{ x: 0, w: 144, floors: 3, wall: WHITE, lower: "#bdb3a4", roof: "tiered", roofC: ROOF.brown, win: "slit", winGap: 20, rd: 11, batter: 5, trim: "#8e2d22" }], doors: [{ x: 72, w: 14, style: "wood", portico: true }] }),
  admin: () => paintBuilding({ w: 160, seed: 23, blocks: [{ x: 0, w: 160, floors: 2, fh: 16, wall: SAND, roof: "flat", winW: 10, winGap: 16, parapet: "#8e2d22", trim: "#1f3a6e" }, { x: 60, w: 40, floors: 3, wall: SAND, roof: "hip", roofC: ROOF.red, set: 5, winW: 6, winGap: 12, tower: { w: 22, h: 26, clock: true } }], doors: [{ x: 80, w: 16, awning: "#1f3a6e" }] }),
  psych: () => paintBuilding({ w: 128, seed: 27, blocks: [{ x: 0, w: 128, floors: 2, fh: 15, wall: PINK, roof: "hip", roofC: ROOF.red, winW: 6, winGap: 10, pairs: true, rooflights: 22, trim: "#e0703a", stripe: WHITE }], doors: [{ x: 64, w: 14, awning: "#e0703a" }] }),
  geo: () => paintBuilding({ w: 128, seed: 29, blocks: [{ x: 0, w: 128, floors: 3, wall: STONE, tex: "stone", roof: "hip", roofC: ROOF.slate, win: "slit", winGap: 18, trim: "#3f5a6a" }], doors: [{ x: 64, w: 14, style: "wood" }] }),
  physci: () => paintBuilding({ w: 128, seed: 45, blocks: [{ x: 0, w: 128, floors: 3, fh: 13, wall: CONCRETE, tex: "panel", roof: "flat", win: "ribbon", mull: 8, solar: true, rd: 9, trim: "#2a9d8f", bandC: "#2a9d8f", bandH: 4 }], doors: [{ x: 64, w: 16, style: "glass" }] }),
  libarts: () => paintBuilding({ w: 144, seed: 31, blocks: [{ x: 0, w: 144, floors: 2, fh: 16, wall: CREAM, roof: "hip", roofC: ROOF.green, winW: 7, winGap: 13, rabsel: true, colonnade: { n: 9 }, trim: "#2f8f5a" }], doors: [{ x: 72, w: 14, style: "wood" }] }),
  ulc: () => paintBuilding({ w: 176, seed: 33, blocks: [{ x: 0, w: 176, floors: 3, fh: 13, wall: TAN, tex: "panel", roof: "flat", win: "ribbon", mull: 6, parapet: "#ff8200" }, { x: 0, w: 36, floors: 4, fh: 13, wall: RED_BRICK, tex: "brick", roof: "hip", roofC: ROOF.charcoal, winW: 6, winGap: 10, trim: "#efe2c0" }, { x: 140, w: 36, floors: 4, fh: 13, wall: RED_BRICK, tex: "brick", roof: "hip", roofC: ROOF.charcoal, winW: 6, winGap: 10, trim: "#efe2c0" }], doors: [{ x: 88, w: 18, awning: "#2a9d8f" }] }),
  education: () => paintBuilding({ w: 128, seed: 35, blocks: [{ x: 0, w: 128, floors: 3, fh: 13, wall: RED_BRICK, tex: "brick", roof: "hip", roofC: ROOF.charcoal, winW: 6, winGap: 12, stripe: "#efe2c0", trim: "#efe2c0", bandC: "#6a2a1c" }], doors: [{ x: 64, w: 14, awning: "#ff8200" }] }),
  kelly: () => paintBuilding({ w: 112, seed: 37, blocks: [{ x: 0, w: 112, floors: 1, fh: 20, wall: OCHRE, roof: "hip", roofC: ROOF.green, win: "tall", winW: 8, winGap: 16, trim: "#2f8f5a", hip: 1.5, rd: 13 }], doors: [{ x: 56, w: 12, style: "wood", portico: true }] }),
  quinn: () => paintBuilding({ w: 112, seed: 39, blocks: [{ x: 0, w: 112, floors: 4, fh: 13, wall: "#d5c3a3", roof: "flat", winW: 5, winGap: 9, parapet: "#8e2d22", trim: "#1f3a6e", stripe: WHITE }], doors: [{ x: 56, w: 12, style: "glass" }] }),
  // Bell Hall: chapel-like hall with a bell tower
  bell: () => paintBuilding({ w: 128, seed: 43, blocks: [{ x: 0, w: 92, floors: 2, fh: 15, wall: WHITE, roof: "hip", roofC: ROOF.terracotta, win: "tall", winW: 6, winGap: 14, trim: "#8e2d22" }, { x: 92, w: 36, floors: 3, fh: 13, wall: WHITE, roof: "flat", rd: 6, band: false, winW: 5, winGap: 12, trim: "#8e2d22", tower: { w: 24, h: 30, belfry: true, roofC: ROOF.terracotta } }], doors: [{ x: 46, w: 14, style: "wood", portico: true }] }),
  // athletics side
  memgym: () => paintBuilding({ w: 144, seed: 51, blocks: [{ x: 0, w: 144, floors: 2, fh: 18, wall: RED_BRICK, tex: "brick", roof: "hip", roofC: ROOF.charcoal, win: "tall", winW: 8, winGap: 16, trim: "#efe2c0", hip: 0.9 }], doors: [{ x: 72, w: 16, portico: true }] }),
  fitness: () => paintBuilding({ w: 160, seed: 53, blocks: [{ x: 0, w: 160, floors: 2, fh: 16, wall: CONCRETE, tex: "panel", roof: "flat", win: "ribbon", mull: 8, solar: true, rd: 9, glass: [{ x: 40, w: 50, full: true }], parapet: "#ff8200" }], doors: [{ x: 120, w: 16, awning: "#ff8200" }] }),
  foster: () => paintBuilding({ w: 128, seed: 55, blocks: [{ x: 0, w: 128, floors: 2, fh: 16, wall: SAND, roof: "tiered", roofC: ROOF.brown, win: "rabsel", winW: 7, winGap: 15, trim: "#1f3a6e" }], doors: [{ x: 64, w: 14, awning: "#1f3a6e" }] }),
  brumbelow: () => paintBuilding({ w: 112, seed: 57, blocks: [{ x: 0, w: 112, floors: 1, fh: 20, wall: STONE, tex: "stone", roof: "flat", winW: 10, winGap: 18, parapet: "#575b5a", antenna: 90 }], doors: [{ x: 56, w: 14, style: "glass" }] }),
  durham: () => paintBuilding({ w: 128, seed: 59, blocks: [{ x: 0, w: 128, floors: 3, fh: 14, wall: PINK, roof: "hip", roofC: ROOF.red, winW: 6, winGap: 12, colonnade: { n: 7 }, stripe: WHITE, trim: "#ff8200" }], doors: [{ x: 64, w: 14, style: "glass" }] }),
  glory: () => paintBuilding({ w: 160, seed: 63, blocks: [{ x: 0, w: 160, floors: 3, fh: 13, wall: "#d9c39c", roof: "flat", win: "ribbon", mull: 10, bandH: 6, parapet: "#1f3a6e", solar: true, rd: 9 }], doors: [{ x: 40, w: 16, style: "glass" }] }),
};
