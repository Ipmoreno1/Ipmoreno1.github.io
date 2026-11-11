// Builds the stylized, not-to-scale blocky UTEP campus and paints it to an offscreen canvas.
import { TILE, rng, makeCanvas, shade, pick } from "./util.js";
import { T, makeTileset, SEASON_PAL } from "./textures.js";

export const W = 100, H = 72;

// Landmark footprints in tiles. "kind" picks the drawing style.
export const BUILDINGS = [
  { id: "sunbowl", x: 6, y: 13, w: 22, h: 14, kind: "stadium" },
  { id: "haskins", x: 31, y: 14, w: 11, h: 8, kind: "arena" },
  { id: "ccsb", x: 55, y: 15, w: 11, h: 8, kind: "bhutan", awning: "#1f4a8a" },
  { id: "engineering", x: 74, y: 13, w: 18, h: 9, kind: "bhutan", tall: true },
  { id: "museum", x: 6, y: 34, w: 11, h: 8, kind: "bhutan", urns: true },
  { id: "lhakhang", x: 27, y: 37, w: 5, h: 5, kind: "temple" },
  { id: "union", x: 61, y: 34, w: 12, h: 9, kind: "bhutan", awning: "#e8761c" },
  { id: "library", x: 37, y: 53, w: 20, h: 10, kind: "bhutan", tall: true },
  { id: "pick", x: 45, y: 30, w: 3, h: 2, kind: "pick" },
];
// The plaza is a walkable landmark (no building)
export const PLAZA = { id: "plaza", x: 37, y: 35, w: 20, h: 12 };

export function buildWorld() {
  const r = rng(1914);
  const tiles = Array.from({ length: H }, () => new Uint8Array(W).fill(T.GRASS));
  const solid = Array.from({ length: H }, () => new Uint8Array(W));
  const objects = []; // trees, cacti, torches, ores, firepits
  const ridge = [];
  for (let x = 0; x < W; x++) {
    const v = 7.5 + 2.6 * Math.sin(x * 0.11 + 0.5) + 1.6 * Math.sin(x * 0.29 + 2) + 0.9 * Math.sin(x * 0.71);
    ridge[x] = Math.round(v);
  }
  const set = (x, y, t) => { if (x >= 0 && y >= 0 && x < W && y < H) tiles[y][x] = t; };
  const rect = (x0, y0, w, h, t) => { for (let y = y0; y < y0 + h; y++) for (let x = x0; x < x0 + w; x++) set(x, y, t); };

  // desert edges + foothills
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const edge = Math.min(x, W - 1 - x, H - 1 - y);
    const nz = Math.sin(x * 0.37 + y * 0.21) + Math.sin(x * 0.13 - y * 0.41);
    if (edge < 3 + (nz > 0.8 ? 1 : 0)) tiles[y][x] = T.SAND;
    if (y < ridge[x]) { tiles[y][x] = T.ROCK; solid[y][x] = 1; }
    else if (y < ridge[x] + 3) tiles[y][x] = T.FOOTHILL;
  }
  // sandy patches in the middle (El Paso is the desert after all)
  for (let k = 0; k < 9; k++) {
    const cx = 4 + Math.floor(r() * 92), cy = 14 + Math.floor(r() * 54), rad = 2 + r() * 3;
    for (let y = cy - 5; y <= cy + 5; y++) for (let x = cx - 5; x <= cx + 5; x++)
      if ((x - cx) ** 2 + (y - cy) ** 2 < rad * rad && tiles[y]?.[x] === T.GRASS) tiles[y][x] = T.SAND;
  }
  // roads
  rect(3, 28, 94, 2, T.COBBLE);
  rect(3, 49, 94, 2, T.COBBLE);
  rect(22, 29, 2, 37, T.COBBLE);
  rect(76, 23, 2, 43, T.COBBLE);
  rect(3, 64, 94, 2, T.COBBLE);
  rect(46, 30, 2, 5, T.PAVE);   // plaza north entry (pick)
  rect(46, 47, 2, 6, T.PAVE);   // plaza south to library
  rect(16, 27, 2, 1, T.COBBLE); // stadium gate
  rect(36, 22, 2, 6, T.COBBLE); // haskins
  rect(60, 23, 2, 5, T.COBBLE); // ccsb
  rect(82, 22, 2, 6, T.COBBLE); // engineering
  rect(11, 42, 2, 7, T.COBBLE); // museum
  rect(29, 42, 1, 7, T.PAVE);   // lhakhang
  rect(66, 43, 2, 6, T.PAVE);   // union
  rect(57, 39, 4, 2, T.PAVE);   // plaza -> union
  rect(46, 63, 2, 1, T.COBBLE); // library front
  rect(32, 39, 5, 2, T.PAVE);   // lhakhang approach (bridge goes over water)
  // Centennial Plaza: paving ring + oval lawn
  const pcx = 46.5, pcy = 40.5;
  for (let y = 33; y <= 48; y++) for (let x = 35; x <= 58; x++) {
    const d = ((x - pcx) / 11.5) ** 2 + ((y - pcy) / 7.6) ** 2;
    const d2 = ((x - pcx) / 9) ** 2 + ((y - pcy) / 5.4) ** 2;
    if (d2 < 1) tiles[y][x] = T.LAWN;
    else if (d < 1) tiles[y][x] = T.PAVE;
  }
  // cross paths through the lawn
  rect(46, 35, 2, 12, T.PAVE); rect(38, 40, 18, 1, T.PAVE);
  // arroyo with water (acequia-like channel) west of the plaza + steel bridge
  for (let y = 30; y < 49; y++) { set(34, y, T.WATER); set(33, y, T.GRAVEL); set(35, y, tiles[y][35] === T.GRASS ? T.GRAVEL : tiles[y][35]); }
  rect(33, 39, 3, 2, T.BRIDGE);
  // two small water features
  rect(40, 36, 2, 1, T.WATER); rect(52, 45, 2, 1, T.WATER);
  // flowers in lawns
  for (let k = 0; k < 160; k++) {
    const x = Math.floor(r() * W), y = Math.floor(r() * H);
    if (tiles[y][x] === T.GRASS) tiles[y][x] = T.FLOWER;
  }
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) if (tiles[y][x] === T.WATER) solid[y][x] = 1;

  // buildings are solid
  const occupied = Array.from({ length: H }, () => new Uint8Array(W));
  for (const b of BUILDINGS) {
    for (let y = b.y; y < b.y + b.h; y++) for (let x = b.x; x < b.x + b.w; x++) { solid[y][x] = 1; occupied[y][x] = 1; }
    for (let y = b.y - 1; y <= b.y + b.h; y++) for (let x = b.x - 1; x <= b.x + b.w; x++) if (occupied[y]?.[x] === 0) occupied[y][x] = 2;
  }
  const free = (x, y, w, h) => {
    for (let j = y - 1; j < y + h + 1; j++) for (let i = x - 1; i < x + w + 1; i++) {
      if (i < 0 || j < 0 || i >= W || j >= H) return false;
      if (occupied[j][i]) return false;
      const t = tiles[j][i];
      if (t !== T.GRASS && t !== T.FLOWER && t !== T.SAND) return false;
    }
    return true;
  };
  const place = (o) => {
    objects.push(o);
    for (let y = o.y; y < o.y + o.h; y++) for (let x = o.x; x < o.x + o.w; x++) { occupied[y][x] = 1; if (o.solid) solid[y][x] = 1; }
  };
  // fire pits in the plaza (Centennial Plaza has fire pits)
  place({ type: "firepit", x: 42, y: 43, w: 1, h: 1, solid: 1 });
  place({ type: "firepit", x: 51, y: 37, w: 1, h: 1, solid: 1 });
  // torches: along roads + plaza
  const torchAt = (x, y) => { if (x > 1 && y > 1 && x < W - 1 && y < H - 1 && !occupied[y][x] && !solid[y][x]) place({ type: "torch", x, y, w: 1, h: 1, solid: 0 }); };
  for (let x = 6; x < 96; x += 7) { torchAt(x, 27); torchAt(x, 30); torchAt(x + 3, 48); torchAt(x + 3, 51); torchAt(x, 63); }
  for (let y = 33; y < 64; y += 7) { torchAt(21, y); torchAt(24, y); torchAt(75, y); torchAt(78, y); }
  for (const [x, y] of [[45, 33], [48, 33], [45, 52], [48, 52], [36, 37], [36, 44], [57, 37], [57, 44], [10, 43], [13, 43], [65, 44], [68, 44]]) torchAt(x, y);
  // ore boulders (breakable decoration)
  let ores = 0, tries = 0;
  while (ores < 16 && tries++ < 4000) {
    const x = 3 + Math.floor(r() * 94), y = 12 + Math.floor(r() * 56);
    if (free(x, y, 1, 1)) { place({ type: "ore", x, y, w: 1, h: 1, solid: 1, kind: pick(r, ["copper", "gold", "iron", "copper"]), broken: 0 }); ores++; }
  }
  // cacti + yucca on sand, trees on grass
  for (let k = 0; k < 2600; k++) {
    const x = 1 + Math.floor(r() * 97), y = 10 + Math.floor(r() * 61);
    const t = tiles[y][x];
    if (t === T.SAND && r() < 0.5 && free(x, y, 1, 1)) place({ type: r() < 0.6 ? "cactus" : "yucca", x, y, w: 1, h: 1, solid: 1 });
    else if ((t === T.GRASS || t === T.FLOWER) && r() < 0.25 && free(x, y, 2, 2)) place({ type: r() < 0.65 ? "oak" : "spruce", x, y, w: 2, h: 2, solid: 1 });
  }
  // Chihuahuan Desert Gardens style cactus garden by the museum
  for (const [x, y] of [[4, 44], [6, 46], [8, 44], [15, 44], [17, 46], [4, 39]]) if (!occupied[y][x]) place({ type: "cactus", x, y, w: 1, h: 1, solid: 1 });
  objects.sort((a, b) => a.y - b.y);
  return { tiles, solid, objects, ridge };
}

// ---------------------------------------------------------------- painting
export function paintWorld(world, season) {
  const P = SEASON_PAL[season];
  const ts = makeTileset(season);
  const [c, ctx] = makeCanvas(W * TILE, H * TILE);
  const r = rng(7);
  const windows = [];
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const t = world.tiles[y][x];
    ctx.drawImage(ts[t][(x * 7 + y * 13) % 4], x * TILE, y * TILE);
  }
  // mountain shading: darker toward the peaks, light rim at the ridge, snow caps in winter
  for (let x = 0; x < W; x++) {
    const rdg = world.ridge[x];
    for (let y = 0; y < rdg; y++) {
      const depth = rdg - y;
      ctx.fillStyle = `rgba(40,28,22,${Math.min(0.5, depth * 0.055)})`;
      ctx.fillRect(x * TILE, y * TILE, TILE, TILE);
      if (season === "winter" && depth > 3) { ctx.fillStyle = "rgba(245,250,255,0.85)"; ctx.fillRect(x * TILE, y * TILE, TILE, TILE); }
    }
    // strata ledges + boulders + scrub so the mountains read as terrain, not noise
    for (let y = 0; y < rdg; y++) {
      const X = x * TILE, Y = y * TILE, depth = rdg - y;
      if ((y + (x >> 2)) % 3 === 0) { ctx.fillStyle = "rgba(30,20,14,0.35)"; ctx.fillRect(X, Y + 13, TILE, 3); ctx.fillStyle = "rgba(255,235,200,0.18)"; ctx.fillRect(X, Y + 12, TILE, 1); }
      if (r() < 0.22) {
        const bx = X + Math.floor(r() * 8), by = Y + Math.floor(r() * 8);
        ctx.fillStyle = "#9b8571"; ctx.fillRect(bx, by, 7, 5);
        ctx.fillStyle = "#b39c86"; ctx.fillRect(bx, by, 7, 1);
        ctx.fillStyle = "#4e3f33"; ctx.fillRect(bx, by + 5, 7, 2);
      }
      if (depth < 4 && season !== "winter" && r() < 0.35) { ctx.fillStyle = season === "autumn" ? "#8c7a2e" : "#5d7a2e"; ctx.fillRect(X + Math.floor(r() * 12), Y + Math.floor(r() * 12), 3, 2); }
    }
    ctx.fillStyle = "rgba(255,240,210,0.25)"; ctx.fillRect(x * TILE, (rdg - 1) * TILE + 12, TILE, 4);
    ctx.fillStyle = "rgba(0,0,0,0.18)"; ctx.fillRect(x * TILE, rdg * TILE, TILE, 3);
  }
  // water edges
  for (let y = 1; y < H - 1; y++) for (let x = 1; x < W - 1; x++) if (world.tiles[y][x] === T.WATER) {
    ctx.fillStyle = "rgba(0,0,40,0.25)";
    if (world.tiles[y - 1][x] !== T.WATER && world.tiles[y - 1][x] !== T.BRIDGE) ctx.fillRect(x * TILE, y * TILE, TILE, 3);
  }
  for (const b of BUILDINGS) drawBuilding(ctx, b, season, windows);
  for (const o of world.objects) if (o.type !== "ore" && o.type !== "torch" && o.type !== "firepit") drawObject(ctx, o, P, season, r);
  for (const o of world.objects) if (o.type === "torch") drawTorchBase(ctx, o);
  for (const o of world.objects) if (o.type === "firepit") drawFirepit(ctx, o, season);
  return { canvas: c, windows };
}

function drawObject(ctx, o, P, season, r) {
  const X = o.x * TILE, Y = o.y * TILE;
  if (o.type === "oak" || o.type === "spruce") {
    ctx.fillStyle = "rgba(0,0,0,0.22)"; ctx.fillRect(X + 3, Y + 26, 28, 6);
    ctx.fillStyle = "#6b4a2b"; ctx.fillRect(X + 13, Y + 18, 6, 12);
    ctx.fillStyle = "#4f3520"; ctx.fillRect(X + 13, Y + 18, 2, 12); ctx.fillRect(X + 16, Y + 22, 1, 3);
    const leaves = o.type === "spruce" ? SEASON_PAL.winter.leaves : P.leaves;
    if (o.type === "oak") {
      blockyBlob(ctx, r, X + 1, Y - 2, 30, 22, leaves);
    } else {
      blockyBlob(ctx, r, X + 7, Y - 8, 18, 10, leaves);
      blockyBlob(ctx, r, X + 4, Y + 1, 24, 10, leaves);
      blockyBlob(ctx, r, X + 2, Y + 9, 28, 10, leaves);
    }
    if (season === "winter") {
      ctx.fillStyle = "#ffffff";
      const top = o.type === "oak" ? Y - 2 : Y - 8;
      ctx.fillRect(X + (o.type === "oak" ? 3 : 9), top, o.type === "oak" ? 26 : 14, 4);
      if (o.type === "spruce") { ctx.fillRect(X + 6, Y + 1, 20, 3); ctx.fillRect(X + 4, Y + 9, 24, 3); }
      else { for (let k = 0; k < 10; k++) ctx.fillRect(X + 3 + Math.floor(r() * 24), Y + Math.floor(r() * 14), 3, 2); }
    }
  } else if (o.type === "cactus") {
    ctx.fillStyle = "rgba(0,0,0,0.2)"; ctx.fillRect(X + 3, Y + 13, 12, 3);
    ctx.fillStyle = "#3f7d33"; ctx.fillRect(X + 5, Y - 6, 6, 20);
    ctx.fillStyle = "#58a046"; ctx.fillRect(X + 6, Y - 6, 2, 20);
    ctx.fillStyle = "#3f7d33"; ctx.fillRect(X + 1, Y, 4, 3); ctx.fillRect(X + 1, Y - 4, 3, 5); ctx.fillRect(X + 11, Y + 2, 4, 3); ctx.fillRect(X + 12, Y - 2, 3, 5);
    ctx.fillStyle = "#24501f"; for (let k = 0; k < 6; k++) ctx.fillRect(X + 5 + (k % 2) * 5, Y - 4 + k * 3, 1, 1);
    if (season === "winter") { ctx.fillStyle = "#fff"; ctx.fillRect(X + 5, Y - 6, 6, 2); }
  } else if (o.type === "yucca") {
    ctx.fillStyle = "rgba(0,0,0,0.2)"; ctx.fillRect(X + 2, Y + 13, 12, 3);
    ctx.fillStyle = "#6f8c3a";
    for (let k = -3; k <= 3; k++) ctx.fillRect(X + 7 + k * 2, Y + 4 + Math.abs(k), 2, 10 - Math.abs(k) * 2);
    ctx.fillStyle = "#8aa84a"; ctx.fillRect(X + 7, Y + 2, 2, 12);
    if (season === "summer") { ctx.fillStyle = "#f4efd2"; ctx.fillRect(X + 7, Y - 4, 2, 5); }
  }
}

function blockyBlob(ctx, r, x, y, w, h, cols) {
  // a rounded rectangle of 2px leaf "blocks"
  const s = 2;
  for (let j = 0; j < h; j += s) for (let i = 0; i < w; i += s) {
    const dx = (i - w / 2) / (w / 2), dy = (j - h / 2) / (h / 2);
    if (dx * dx + dy * dy > 1.05) continue;
    let col = cols[Math.floor(r() * cols.length)];
    if (dy < -0.4) col = shade(col, 18); else if (dy > 0.45) col = shade(col, -22);
    ctx.fillStyle = col; ctx.fillRect(x + i, y + j, s, s);
  }
}

function drawTorchBase(ctx, o) {
  const X = o.x * TILE + 7, Y = o.y * TILE + 3;
  ctx.fillStyle = "rgba(0,0,0,0.25)"; ctx.fillRect(X - 1, Y + 11, 4, 2);
  ctx.fillStyle = "#6b4a2b"; ctx.fillRect(X, Y + 2, 2, 10);
  ctx.fillStyle = "#4b331d"; ctx.fillRect(X + 1, Y + 2, 1, 10);
}
function drawFirepit(ctx, o, season) {
  const X = o.x * TILE, Y = o.y * TILE;
  ctx.fillStyle = "#6e6e6e"; ctx.fillRect(X + 1, Y + 4, 14, 10);
  ctx.fillStyle = "#8f8f8f"; ctx.fillRect(X + 1, Y + 4, 14, 2);
  ctx.fillStyle = "#3a2a1f"; ctx.fillRect(X + 3, Y + 6, 10, 6);
  ctx.fillStyle = "#6b4a2b"; ctx.fillRect(X + 3, Y + 9, 10, 2);
}

function drawBuilding(ctx, b, season, windows) {
  const X = b.x * TILE, Y = b.y * TILE, Wp = b.w * TILE, Hp = b.h * TILE;
  // drop shadow
  if (b.kind === "bhutan" || b.kind === "temple") { ctx.fillStyle = "rgba(0,0,0,0.22)"; ctx.fillRect(X + 4, Y + Hp - 2, Wp, 6); ctx.fillRect(X + Wp, Y + 6, 5, Hp - 4); }
  if (b.kind === "stadium") return drawStadium(ctx, X, Y, Wp, Hp, season);
  if (b.kind === "arena") return drawArena(ctx, X, Y, Wp, Hp, season, windows);
  if (b.kind === "pick") return drawPickSculpture(ctx, X, Y);
  if (b.kind === "temple") return drawTemple(ctx, X, Y, Wp, Hp, season);
  // Bhutanese-inspired block: dark overhanging roof, red brick band with tile mandalas, sloped tan walls
  const roofH = Math.round(Hp * (b.tall ? 0.46 : 0.42));
  const bandH = 9;
  const wallY = Y + roofH + bandH, wallH = Hp - roofH - bandH;
  // walls (slope: inset 1px every 4px going up)
  for (let j = 0; j < wallH; j++) {
    const inset = Math.floor((wallH - j) / 5);
    ctx.fillStyle = j % 6 === 5 ? "#cdb68b" : "#dcc7a0";
    ctx.fillRect(X + 2 + inset, wallY + j, Wp - 4 - inset * 2, 1);
  }
  ctx.fillStyle = "#b99e72"; ctx.fillRect(X + 2, wallY + wallH - 3, Wp - 4, 3);
  // windows (tall, high-set, dark trim)
  const winRow = wallY + 4, winH = Math.max(8, wallH - 18);
  const doorW = 14, doorX = X + Wp / 2 - doorW / 2;
  for (let wx = X + 10; wx < X + Wp - 14; wx += 16) {
    if (wx + 8 > doorX - 3 && wx < doorX + doorW + 3) continue;
    ctx.fillStyle = "#4a2a18"; ctx.fillRect(wx - 1, winRow - 1, 8, winH + 2);
    ctx.fillStyle = "#283544"; ctx.fillRect(wx, winRow, 6, winH);
    ctx.fillStyle = "#3d5268"; ctx.fillRect(wx, winRow, 6, 2);
    ctx.fillStyle = "#4a2a18"; ctx.fillRect(wx + 2, winRow, 2, winH);
    windows.push([wx, winRow, 6, winH]);
  }
  // door + awning
  ctx.fillStyle = "#3a2414"; ctx.fillRect(doorX - 2, Y + Hp - 22, doorW + 4, 22);
  ctx.fillStyle = "#6b3f1f"; ctx.fillRect(doorX, Y + Hp - 20, doorW, 20);
  ctx.fillStyle = "#87542b"; ctx.fillRect(doorX + 2, Y + Hp - 18, 4, 16); ctx.fillRect(doorX + 8, Y + Hp - 18, 4, 16);
  ctx.fillStyle = "#e0b040"; ctx.fillRect(doorX + 6, Y + Hp - 10, 2, 2);
  if (b.awning) { ctx.fillStyle = b.awning; ctx.fillRect(doorX - 5, Y + Hp - 25, doorW + 10, 4); ctx.fillStyle = shade(b.awning, 30); ctx.fillRect(doorX - 5, Y + Hp - 25, doorW + 10, 1); }
  if (b.urns) {
    for (const ux of [doorX - 10, doorX + doorW + 4]) {
      ctx.fillStyle = "#8a8a8a"; ctx.fillRect(ux, Y + Hp - 12, 6, 10);
      ctx.fillStyle = "#a9a9a9"; ctx.fillRect(ux, Y + Hp - 12, 6, 2);
      ctx.fillStyle = "#5e5e5e"; ctx.fillRect(ux + 1, Y + Hp - 7, 4, 1);
    }
  }
  // brick band with mandala tiles
  const bandY = Y + roofH;
  ctx.fillStyle = "#7b2a20"; ctx.fillRect(X + 1, bandY, Wp - 2, bandH);
  ctx.fillStyle = "#5e1f17";
  for (let j = 0; j < bandH; j += 3) ctx.fillRect(X + 1, bandY + j, Wp - 2, 1);
  for (let mx = X + 12; mx < X + Wp - 10; mx += 24) {
    ctx.fillStyle = "#f1e6cf"; ctx.fillRect(mx - 3, bandY + 1, 7, 7);
    ctx.fillStyle = "#2f6fb5"; ctx.fillRect(mx - 2, bandY + 2, 5, 5);
    ctx.fillStyle = "#ff8200"; ctx.fillRect(mx - 1, bandY + 3, 3, 3);
    ctx.fillStyle = "#fff4c2"; ctx.fillRect(mx, bandY + 4, 1, 1);
  }
  // roof: dark, overhanging eaves, ribbed
  const roofCol = season === "winter" ? "#e9eef3" : "#4a3d36";
  ctx.fillStyle = "#2e2420"; ctx.fillRect(X - 2, bandY - 3, Wp + 4, 4);       // eave shadow line
  ctx.fillStyle = roofCol; ctx.fillRect(X - 1, Y, Wp + 2, roofH - 2);
  ctx.fillStyle = season === "winter" ? "#d6dee6" : "#5b4b42";
  for (let j = Y + 3; j < Y + roofH - 3; j += 4) ctx.fillRect(X, j, Wp, 1);
  ctx.fillStyle = season === "winter" ? "#ffffff" : "#6e5a4e"; ctx.fillRect(X - 1, Y, Wp + 2, 2);
  // raised central roof section (tower feel)
  const tw = Math.round(Wp * 0.4), tx = X + (Wp - tw) / 2, th = Math.round(roofH * 0.55);
  ctx.fillStyle = season === "winter" ? "#f6f8fb" : "#3c312b"; ctx.fillRect(tx, Y + 4, tw, th);
  ctx.fillStyle = "#7b2a20"; ctx.fillRect(tx, Y + 4 + th, tw, 3);
  ctx.fillStyle = season === "winter" ? "#ffffff" : "#5f4e44"; ctx.fillRect(tx, Y + 4, tw, 2);
  ctx.fillStyle = "#d4a62a"; ctx.fillRect(tx + tw / 2 - 1, Y + 1, 3, 4);
}

function drawStadium(ctx, X, Y, Wp, Hp, season) {
  const cx = X + Wp / 2, cy = Y + Hp / 2;
  // stands: concentric rings of blocky rows
  for (let k = 0; k < 14; k++) {
    const rx = Wp / 2 - k * 4, ry = Hp / 2 - k * 4;
    if (rx < 60 || ry < 30) break;
    ctx.fillStyle = k === 0 ? "#6b6b6b" : (k % 2 ? "#a6a6a6" : "#bdbdbd");
    if (k > 1 && k < 8 && k % 3 === 0) ctx.fillStyle = "#e58a3a";
    ellipseBlocks(ctx, cx, cy, rx, ry, 2);
  }
  // field
  const fw = Wp - 112, fh = Hp - 92, fx = cx - fw / 2, fy = cy - fh / 2;
  ctx.fillStyle = season === "winter" ? "#4f8f3a" : "#3f8f3a"; ctx.fillRect(fx, fy, fw, fh);
  for (let i = 0; i < fw; i += 16) { ctx.fillStyle = "rgba(255,255,255,0.07)"; ctx.fillRect(fx + i, fy, 8, fh); }
  ctx.fillStyle = "#ff8200"; ctx.fillRect(fx, fy, 16, fh); ctx.fillRect(fx + fw - 16, fy, 16, fh);
  ctx.fillStyle = "#1f4a8a"; ctx.fillRect(fx + 4, fy + 4, 8, fh - 8); ctx.fillRect(fx + fw - 12, fy + 4, 8, fh - 8);
  ctx.fillStyle = "#ffffff";
  for (let i = 16; i <= fw - 16; i += 16) ctx.fillRect(fx + i, fy + 2, 1, fh - 4);
  ctx.fillRect(fx, fy, fw, 1); ctx.fillRect(fx, fy + fh - 1, fw, 1);
  ctx.fillStyle = "#ff8200"; ctx.fillRect(cx - 6, cy - 6, 12, 12);
  ctx.fillStyle = "#1f4a8a"; ctx.fillRect(cx - 4, cy - 4, 8, 8);
  // gate opening at the south
  ctx.fillStyle = "#2b2b2b"; ctx.fillRect(cx - 20, Y + Hp - 14, 24, 14);
  ctx.fillStyle = "#ff8200"; ctx.fillRect(cx - 22, Y + Hp - 16, 28, 3);
  if (season === "winter") { ctx.fillStyle = "rgba(255,255,255,0.6)"; ellipseBlocks(ctx, cx, cy, Wp / 2, Hp / 2, 2, true); }
}
function ellipseBlocks(ctx, cx, cy, rx, ry, s, ringOnly = false) {
  for (let y = -ry; y < ry; y += s) for (let x = -rx; x < rx; x += s) {
    const d = (x / rx) ** 2 + (y / ry) ** 2;
    if (d <= 1 && (!ringOnly || d > 0.86)) ctx.fillRect(Math.round(cx + x), Math.round(cy + y), s, s);
  }
}
function drawArena(ctx, X, Y, Wp, Hp, season, windows) {
  ctx.fillStyle = "#cdb68b"; ctx.fillRect(X + 2, Y + Hp - 30, Wp - 4, 30);
  ctx.fillStyle = "#7b2a20"; ctx.fillRect(X + 2, Y + Hp - 33, Wp - 4, 5);
  for (let wx = X + 10; wx < X + Wp - 12; wx += 14) {
    if (Math.abs(wx - (X + Wp / 2)) < 12) continue;
    ctx.fillStyle = "#283544"; ctx.fillRect(wx, Y + Hp - 24, 8, 12); windows.push([wx, Y + Hp - 24, 8, 12]);
  }
  ctx.fillStyle = "#3a2414"; ctx.fillRect(X + Wp / 2 - 9, Y + Hp - 20, 18, 20);
  ctx.fillStyle = "#1f4a8a"; ctx.fillRect(X + Wp / 2 - 7, Y + Hp - 18, 14, 18);
  // dome roof
  const cx = X + Wp / 2, cy = Y + (Hp - 33) / 2 + 2, rx = Wp / 2 - 1, ry = (Hp - 33) / 2 + 2;
  for (let k = 0; k < 8; k++) {
    ctx.fillStyle = season === "winter" ? shade("#e6edf3", k * 3) : ["#6f8496", "#7d92a4", "#8ba0b2", "#97acbd"][k % 4];
    ellipseBlocks(ctx, cx, cy, rx - k * 6, ry - k * 4, 2);
  }
  ctx.fillStyle = "#ff8200"; ctx.fillRect(cx - 2, cy - 2, 4, 4);
}
function drawTemple(ctx, X, Y, Wp, Hp, season) {
  ctx.fillStyle = "#f2ece0"; ctx.fillRect(X + 3, Y + 30, Wp - 6, Hp - 30);
  ctx.fillStyle = "#7b2a20"; ctx.fillRect(X + 2, Y + 26, Wp - 4, 6);
  ctx.fillStyle = "#e0b040"; for (let i = X + 6; i < X + Wp - 6; i += 8) ctx.fillRect(i, Y + 28, 3, 2);
  // painted windows
  ctx.fillStyle = "#4a2a18"; ctx.fillRect(X + 10, Y + 38, 10, 10); ctx.fillRect(X + Wp - 20, Y + 38, 10, 10);
  ctx.fillStyle = "#2f6fb5"; ctx.fillRect(X + 12, Y + 40, 6, 6); ctx.fillRect(X + Wp - 18, Y + 40, 6, 6);
  ctx.fillStyle = "#b8401f"; ctx.fillRect(X + Wp / 2 - 7, Y + Hp - 18, 14, 18);
  ctx.fillStyle = "#e0b040"; ctx.fillRect(X + Wp / 2 - 7, Y + Hp - 18, 14, 2); ctx.fillRect(X + Wp / 2 - 1, Y + Hp - 16, 2, 16);
  // two-tier roof + golden finial
  const roof = season === "winter" ? "#eef3f8" : "#5a4636";
  ctx.fillStyle = roof; ctx.fillRect(X - 3, Y + 14, Wp + 6, 13);
  ctx.fillStyle = season === "winter" ? "#fff" : "#6f5845"; ctx.fillRect(X - 3, Y + 14, Wp + 6, 2);
  ctx.fillStyle = roof; ctx.fillRect(X + 10, Y + 4, Wp - 20, 11);
  ctx.fillStyle = "#7b2a20"; ctx.fillRect(X + 10, Y + 12, Wp - 20, 2);
  ctx.fillStyle = "#e0b040"; ctx.fillRect(X + Wp / 2 - 2, Y - 4, 4, 9); ctx.fillRect(X + Wp / 2 - 4, Y + 2, 8, 2);
  // prayer flags
  const cols = ["#2f6fb5", "#ffffff", "#c8321e", "#3f8a2c", "#e0c020"];
  for (let i = 0; i < 10; i++) { ctx.fillStyle = cols[i % 5]; ctx.fillRect(X - 6 + i * 9, Y + 22 + (i % 2), 4, 4); }
}
function drawPickSculpture(ctx, X, Y) {
  // pedestal
  ctx.fillStyle = "#8f8f8f"; ctx.fillRect(X + 14, Y + 22, 20, 10);
  ctx.fillStyle = "#b0b0b0"; ctx.fillRect(X + 14, Y + 22, 20, 2);
  // handle (steel, diagonal)
  ctx.fillStyle = "#7d8790";
  for (let i = 0; i < 18; i++) ctx.fillRect(X + 22 + Math.round(i * 0.15), Y + 4 + i, 4, 2);
  // curved head
  ctx.fillStyle = "#c6ced6";
  const pts = [[2,10],[6,7],[10,5],[14,4],[18,3],[22,3],[26,3],[30,4],[34,5],[38,7],[42,10],[45,13]];
  for (const [px, py] of pts) ctx.fillRect(X + px, Y + py, 4, 4);
  ctx.fillStyle = "#e9eef2"; for (const [px, py] of pts) ctx.fillRect(X + px, Y + py, 4, 1);
  ctx.fillStyle = "#5c656e"; ctx.fillRect(X + 1, Y + 13, 3, 2); ctx.fillRect(X + 45, Y + 16, 3, 2);
}
