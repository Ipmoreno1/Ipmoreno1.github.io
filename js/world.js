// world.js : the two walkable areas (Main Campus and the Sun Bowl side), built from tiles, buildings and props.
import * as A from "./art.js";
import { BUILDINGS, paintBuilding } from "./buildings.js";
const T = A.T;
export const TILE = { ground: 0, lawn: 1, path: 2, plaza: 3, road: 4, walk: 5, turf: 6, water: 7, mtn: 8, dg: 9, park: 10 };
const SOFT = [TILE.ground, TILE.lawn, TILE.path, TILE.dg];
const OPEN = new Set([TILE.ground, TILE.lawn, TILE.dg]);

class Area {
  constructor(id, name, w, h, mtnRows) {
    Object.assign(this, { id, name, w, h, mtnRows });
    this.tiles = new Uint8Array(w * h); this.solid = new Uint8Array(w * h); this.used = new Uint8Array(w * h);
    this.objs = []; this.landmarks = []; this.lights = []; this.waters = []; this.npcs = []; this.minor = []; this.decals = []; this.shadows = [];
    this.fill(0, mtnRows, w, h, TILE.ground);
    this.fill(0, 0, w, mtnRows, TILE.mtn); this.block(0, 0, w, mtnRows);
  }
  t(x, y) { return x < 0 || y < 0 || x >= this.w || y >= this.h ? TILE.mtn : this.tiles[y * this.w + x]; }
  fill(x0, y0, x1, y1, t) { for (let y = Math.max(0, y0); y < Math.min(this.h, y1); y++) for (let x = Math.max(0, x0); x < Math.min(this.w, x1); x++) this.tiles[y * this.w + x] = t; }
  block(x0, y0, x1, y1, v = 1) { for (let y = Math.max(0, y0); y < Math.min(this.h, y1); y++) for (let x = Math.max(0, x0); x < Math.min(this.w, x1); x++) { this.solid[y * this.w + x] = v; this.used[y * this.w + x] = 1; } }
  mark(x0, y0, x1, y1) { for (let y = Math.max(0, y0); y < Math.min(this.h, y1); y++) for (let x = Math.max(0, x0); x < Math.min(this.w, x1); x++) this.used[y * this.w + x] = 1; }
  isSolid(tx, ty) { return tx < 0 || ty < 0 || tx >= this.w || ty >= this.h || this.solid[ty * this.w + tx] === 1; }
  isUsed(tx, ty) { return tx < 0 || ty < 0 || tx >= this.w || ty >= this.h || this.used[ty * this.w + tx] === 1; }
  free(tx, ty, r = 0) { for (let y = ty - r; y <= ty + r; y++) for (let x = tx - r; x <= tx + r; x++) if (this.isSolid(x, y)) return false; return true; }
  add(frames, fx, fy, o = {}) {
    if (!Array.isArray(frames)) frames = [frames];
    const ob = Object.assign({ frames, fx, fy, w: frames[0].width, h: frames[0].height, sortY: fy + (o.sortOff || 0), rate: 0, phase: Math.random() * 10 }, o);
    ob.x = Math.round(fx - ob.w / 2); ob.y = Math.round(fy - ob.h);
    this.objs.push(ob); return ob;
  }
  // place a painted building with its bottom edge on tile row `by`
  building(b, tx, by, id, label, o = {}) {
    const tw = Math.round(b.w / T), th = Math.round(b.h / T); const ty = by - th;
    const ob = this.add(b.img, tx * T + b.w / 2, by * T, { glow: b.glow, kind: o.kind || "building" });
    // the roof band at the very top stays walkable-looking but solid; leave nothing to walk "inside"
    this.block(tx, ty + (o.openTop || 1), tx + tw, by); this.mark(tx, ty, tx + tw, by);
    const door = { x: tx * T + b.doorX, y: by * T + 8 };
    this.shadows.push({ x: tx * T, y: by * T, w: b.w, h: b.h, kind: o.kind || "building" });
    if (id) this.landmarks.push({ id, label, x: door.x, y: door.y, r: 30, signX: door.x, signY: by * T - (o.signUp ?? 26) });
    else if (label) this.minor.push({ label, x: door.x, y: by * T - (o.signUp ?? 24) });
    return Object.assign(ob, { door, tw, th, tx, ty, by, doorTx: Math.floor(door.x / T) });
  }
  prop(frames, tx, ty, o = {}) {
    const ob = this.add(frames, tx * T + 8 + (o.dx || 0), ty * T + 15 + (o.dy || 0), o);
    if (o.solid !== false) { const s = o.solidRect || [tx, ty, 1, 1]; this.block(s[0], s[1], s[0] + s[2], s[1] + s[3]); } else this.mark(tx, ty, tx + 1, ty + 1);
    return ob;
  }
  lamp(tx, ty, art) { const ob = this.prop(art.lamp, tx, ty, { shadow: [4, 2] }); this.lights.push({ x: tx * T + 8, y: ty * T - 10, r: 44, warm: 1 }); return ob; }
  tree(tx, ty, art, kind) { const set = art.trees[kind || "mesquite"]; const fr = set[(tx * 7 + ty * 3) % set.length]; for (let k = 0; k < 7; k++) this.decals.push(["leaf", tx * T + 8 + (A.hash2(tx, ty, k) - 0.5) * 34, ty * T + 12 + (A.hash2(ty, tx, k) - 0.5) * 16, kind]); return this.prop(fr, tx, ty, { rate: 0.6, shadow: [12, 4], sway: true }); }
  hpath(x0, x1, y, w = 2, t = TILE.path) { this.fill(Math.min(x0, x1), y, Math.max(x0, x1) + 1, y + w, t); }
  vpath(x, y0, y1, w = 2, t = TILE.path) { this.fill(x, Math.min(y0, y1), x + w, Math.max(y0, y1) + 1, t); }
  spur(b, toRow, w = 2) { const x = b.doorTx - (w >> 1) + (w % 2 ? 0 : 1) - 1 + 1; this.vpath(x - 1 + (w === 2 ? 0 : 0), b.by, toRow, w); return x; }
}

export function makeArt() {
  const art = {};
  art.trees = { mesquite: [A.makeTree("mesquite", 1), A.makeTree("mesquite", 2), A.makeTree("mesquite", 3)], paloverde: [A.makeTree("paloverde", 4), A.makeTree("paloverde", 5)], willow: [A.makeTree("willow", 6)], ash: [A.makeTree("ash", 7), A.makeTree("ash", 8)], sumac: [A.makeTree("sumac", 9)] };
  art.yucca = [A.makeYucca(1), A.makeYucca(2)]; art.ocotillo = [A.makeOcotillo(2)]; art.pear = A.makePear(3); art.barrel = A.makeBarrel(); art.agave = A.makeAgave();
  art.rock = [A.makeRock(4), A.makeRock(5)]; art.boulder = [A.makeBoulder(4), A.makeBoulder(6, 22, 14)]; art.lamp = A.makeLamp(); art.bench = A.makeBench(); art.trash = A.makeTrash(); art.flag = A.makeFlag();
  art.prayer = A.makePrayerFlags(); art.planter = A.makePlanter(32); art.urn = A.makeUrn();
  art.busStop = A.makeBusStop(); art.bus = A.makeBus(); art.picnic = A.makePicnic(); art.shade = A.makeShade();
  art.cars = ["#c0392b", "#2c6fb5", "#e9e9e4", "#3a3a44", "#d9a43a", "#4f8a5a"].map(A.makeCar);
  art.pick = A.makePickaxe(); A.outline(art.pick.img, 0.4);
  art.shrub = [A.makeShrub(1), A.makeShrub(2, ["#ff8200", "#f2d35e"]), A.makeShrub(3, ["#e2455a", "#f7f1e1"]), A.makeShrub(4)];
  art.bed = [A.makeFlowerbed(30, 2), A.makeFlowerbed(30, 5, ["#f2d35e", "#ff8200", "#e8742a"]), A.makeFlowerbed(30, 7, ["#c46ad0", "#f7f1e1", "#e2455a"])];
  art.bike = A.makeBikeRack(); art.post = [A.makeSignpost("", "#1f3a6e"), A.makeSignpost("", "#ff8200")]; art.fire = A.makeFirePit(); art.trough = A.makeTrough();
  art.umbrella = A.makeUmbrellaTable();
  const [c2, g2] = A.mk(22, 34); g2.drawImage(art.ocotillo[0], 1, 0); art.ocotillo.push(c2);
  return art;
}

// ---------------------------------------------------------------- dressing helpers
function lineTrees(a, art, x0, x1, y, step, kinds, R) { for (let x = x0; x <= x1; x += step) { if (a.isUsed(x, y) || !OPEN.has(a.t(x, y))) continue; a.tree(x, y, art, kinds[(R() * kinds.length) | 0]); } }
function lineLamps(a, art, x0, x1, y, step) { for (let x = x0; x <= x1; x += step) if (!a.isUsed(x, y) && OPEN.has(a.t(x, y))) a.lamp(x, y, art); }
function grove(a, art, x0, y0, x1, y1, n, kinds, R) { let k = 0, tries = 0; while (k < n && tries++ < n * 40) { const x = x0 + ((R() * (x1 - x0)) | 0), y = y0 + ((R() * (y1 - y0)) | 0); if (!OPEN.has(a.t(x, y)) || a.isUsed(x, y) || a.isUsed(x, y - 1) || a.isUsed(x - 1, y) || a.isUsed(x + 1, y)) continue; a.tree(x, y, art, kinds[(R() * kinds.length) | 0]); k++; } }
function scatter(a, art, R, x0, y0, x1, y1, density, kinds) {
  for (let y = y0; y < y1; y++) for (let x = x0; x < x1; x++) {
    const t = a.t(x, y); if (!OPEN.has(t) || a.isUsed(x, y)) continue;
    const pt = a.t(x, y + 1), nb = [a.t(x - 1, y), a.t(x + 1, y), a.t(x, y - 1), pt];
    if (nb.some((v) => v === TILE.path || v === TILE.walk || v === TILE.plaza)) { if (R() > density * 0.35) continue; } else if (R() > density) continue;
    const k = kinds[(R() * kinds.length) | 0];
    if (k === "shrub") a.prop(art.shrub[(R() * 4) | 0], x, y, { solid: false, shadow: [6, 2] });
    else if (k === "yucca") a.prop(art.yucca[(R() * 2) | 0], x, y, { shadow: [5, 2] });
    else if (k === "ocotillo") a.prop(art.ocotillo, x, y, { shadow: [6, 2], rate: 0.5, sway: true });
    else if (k === "pear") a.prop(art.pear, x, y, { shadow: [7, 2], solid: false });
    else if (k === "barrel") a.prop(art.barrel, x, y, { shadow: [5, 2], solid: false });
    else if (k === "agave") a.prop(art.agave, x, y, { shadow: [7, 2], solid: false });
    else if (k === "rock") a.prop(art.rock[(R() * 2) | 0], x, y, { shadow: [6, 2], solid: false });
    else if (k === "boulder") a.prop(art.boulder[(R() * 2) | 0], x, y, { shadow: [9, 3] });
    else if (k === "tree") { if (!a.isUsed(x, y - 1) && !a.isUsed(x - 1, y) && !a.isUsed(x + 1, y)) a.tree(x, y, art, ["mesquite", "paloverde", "mesquite", "ash"][(R() * 4) | 0]); }
    else if (k === "pebbles") a.decals.push(["pebbles", x * T + 8, y * T + 8]);
    else if (k === "stones") a.decals.push(["stones", x * T + 8, y * T + 8]);
  }
}
function frontDress(a, art, b, R) { // flowerbeds, a bike rack and lamps by the door
  const dx = b.doorTx, y = b.by;
  if (!a.isUsed(dx - 3, y) && OPEN.has(a.t(dx - 3, y))) a.prop(art.bed[(R() * 3) | 0], dx - 3, y, { solid: false, dy: -4 });
  if (!a.isUsed(dx + 3, y) && OPEN.has(a.t(dx + 3, y))) a.prop(art.bed[(R() * 3) | 0], dx + 3, y, { solid: false, dy: -4 });
  if (!a.isUsed(dx - 2, y + 1) && OPEN.has(a.t(dx - 2, y + 1))) a.lamp(dx - 2, y + 1, art);
  if (!a.isUsed(dx + 2, y + 1) && OPEN.has(a.t(dx + 2, y + 1))) a.lamp(dx + 2, y + 1, art);
}

// ---------------------------------------------------------------- Main Campus
export function buildMain(art) {
  const a = new Area("main", "Main Campus", 104, 62, 8); const R = A.rng(11);
  // paseos (pale cobble) first so buildings can sit on them cleanly
  a.hpath(0, 103, 9, 2); // ridge walk at the foot of the Franklins
  a.hpath(1, 102, 19, 3); // north paseo
  a.hpath(1, 102, 38, 2); // plaza south paseo
  a.hpath(1, 102, 46, 3); // south paseo
  for (const x of [16, 34, 68, 97]) a.vpath(x, 9, 48, 2);
  // Centennial Plaza: brick court with the emblem, oval lawn ringed by a paseo
  a.fill(46, 22, 59, 28, TILE.plaza);
  const ocx = 52.5, ocy = 32.6, orx = 11.5, ory = 4.9;
  for (let y = 26; y < 39; y++) for (let x = 36; x < 69; x++) { const d = ((x + 0.5 - ocx) / orx) ** 2 + ((y + 0.5 - ocy) / ory) ** 2; if (d < 1) a.tiles[y * a.w + x] = TILE.lawn; else if (d < 1.2 && a.t(x, y) !== TILE.plaza) a.tiles[y * a.w + x] = TILE.path; }
  for (let y = 26; y < 39; y++) for (let x = 36; x < 69; x++) if (a.t(x, y) === TILE.lawn) a.mark(x, y, x + 1, y + 1);
  a.vpath(51, 21, 22, 3); a.vpath(51, 38, 46, 3);
  // desert garden beds (decomposed granite)
  a.fill(18, 35, 33, 37, TILE.dg); a.fill(70, 22, 79, 25, TILE.dg); a.fill(84, 40, 96, 45, TILE.dg); a.fill(36, 40, 50, 45, TILE.dg); a.fill(55, 40, 67, 45, TILE.dg);
  a.fill(18, 40, 33, 45, TILE.lawn); a.fill(70, 40, 82, 45, TILE.lawn); a.fill(18, 22, 33, 27, TILE.lawn); a.fill(84, 22, 96, 29, TILE.dg);
  // road along the south and the bus stop
  a.fill(0, 50, 104, 51, TILE.walk); a.fill(0, 51, 104, 56, TILE.road); a.fill(0, 56, 104, 57, TILE.walk); a.block(0, 51, 104, 56);
  a.vpath(51, 48, 49, 3);
  // ---- buildings (north row)
  const mus = a.building(BUILDINGS.museum(), 1, 18, "museum", "Centennial Museum");
  const ps = a.building(BUILDINGS.psych(), 10, 18, null, "Psychology");
  const om = a.building(BUILDINGS.oldmain(), 18, 18, null, "Old Main");
  const lib = a.building(BUILDINGS.library(), 45, 19, "library", "UTEP Library", { signUp: 30 });
  const ke = a.building(BUILDINGS.kelly(), 36, 18, null, "Kelly Hall");
  const qu = a.building(BUILDINGS.quinn(), 60, 18, null, "Quinn Hall");
  const cc = a.building(BUILDINGS.ccsb(), 74, 18, "ccsb", "Chemistry & Computer Science", { signUp: 30 });
  const bell = a.building(BUILDINGS.bell(), 87, 18, null, "Bell Hall");
  // around the plaza
  const un = a.building(BUILDINGS.union(), 2, 34, "union", "Union Building", { signUp: 26 });
  const lh = a.building(BUILDINGS.lhakhang(), 26, 33, "lhakhang", "The Lhakhang", { signUp: 30 });
  const geo = a.building(BUILDINGS.geo(), 70, 33, null, "Geological Sciences");
  const adm = a.building(BUILDINGS.admin(), 86, 33, null, "Administration");
  // south row
  const la = a.building(BUILDINGS.libarts(), 18, 45, null, "Liberal Arts");
  const ulc = a.building(BUILDINGS.ulc(), 36, 45, null, "Undergraduate Learning Center");
  const ed = a.building(BUILDINGS.education(), 2, 45, null, "Education");
  const en = a.building(BUILDINGS.engineering(), 70, 45, "engineering", "Engineering Sciences Complex", { signUp: 30 });
  const bx = a.building(BUILDINGS.geo(), 56, 45, null, "Physical Science");
  // door spurs to the nearest paseo
  for (const b of [mus, ps, om, ke, qu, cc, bell]) a.vpath(b.doorTx - 1, b.by, 19, 2);
  for (const b of [un, lh, geo, adm]) a.vpath(b.doorTx - 1, b.by, 38, 2);
  a.hpath(lh.doorTx, 37, 34, 2);
  for (const b of [la, ulc, ed, en, bx]) a.vpath(b.doorTx - 1, b.by, 46, 2);
  // ---- Centennial Plaza details: emblem, troughs, flags, benches, lamps, mesquite arc
  a.emblem = { x: 52.5 * T, y: 25 * T };
  a.mark(49, 23, 56, 27);
  a.prop(art.trough, 47, 26, { rate: 5, solidRect: [46, 26, 3, 1], shadow: null }); a.prop(art.trough, 58, 26, { rate: 5, phase: 1.2, solidRect: [57, 26, 3, 1], shadow: null });
  a.landmarks.push({ id: "plaza", label: "Centennial Plaza", x: 52.5 * T, y: 27.4 * T, r: 34, signX: 52.5 * T, signY: 22.2 * T });
  a.prop(art.flag, 45, 23, { rate: 4, shadow: [4, 2] }); a.prop(art.flag, 59, 23, { rate: 4, shadow: [4, 2], phase: 1.3 });
  for (const [x, y] of [[46, 22], [58, 22], [44, 27], [60, 27]]) a.lamp(x, y, art);
  for (const [x, y] of [[48, 27], [56, 27]]) a.prop(art.bench, x, y, { solidRect: [x - 1, y, 2, 1], shadow: [10, 2], dy: -2 });
  for (let k = 0; k < 16; k++) { const ang = Math.PI * (0.06 + 0.88 * (k / 15)); const x = Math.round(ocx + Math.cos(ang) * (orx + 3.2)), y = Math.round(ocy + Math.sin(ang) * (ory + 2.4)); if (!a.isUsed(x, y) && OPEN.has(a.t(x, y))) a.tree(x, y, art, "mesquite"); }
  for (let k = 0; k < 10; k++) { const ang = Math.PI * (1.12 + 0.76 * (k / 9)); const x = Math.round(ocx + Math.cos(ang) * (orx + 2.6)), y = Math.round(ocy + Math.sin(ang) * (ory + 2.0)); if (!a.isUsed(x, y) && OPEN.has(a.t(x, y))) a.tree(x, y, art, k % 2 ? "ash" : "mesquite"); }
  for (let y = 28; y < 37; y += 1) a.decals.push(["stone1", 52.5 * T + ((y % 2) ? -4 : 4), y * T + 8]);
  for (const [x, y] of [[43, 30], [62, 30], [43, 35], [62, 35]]) a.prop(art.bed[(x + y) % 3], x, y, { solid: false });
  // amphitheater seat walls on the south edge of the lawn, picnic + umbrellas east of the Union, fire pits by Psychology
  for (const x of [44, 49, 55, 60]) a.prop(art.bench, x, 37, { solidRect: [x - 1, 37, 2, 1], shadow: [10, 2], dy: -3 });
  for (const [x, y] of [[20, 36], [24, 36]]) a.prop(art.umbrella, x, y, { solidRect: [x, y, 1, 1], shadow: [10, 3] });
  for (const [x, y] of [[36, 25], [40, 24]]) a.prop(art.fire, x, y, { rate: 8, solidRect: [x, y, 1, 1], shadow: null });
  a.prop(art.prayer, 28, 27, { rate: 3, solid: false, sortOff: -30, dy: -2 }); a.prop(art.prayer, 32, 27, { rate: 3, solid: false, sortOff: -30, dy: -2, phase: 1 });
  for (const [x, y] of [[3, 17], [7, 17]]) a.prop(art.urn, x, y, { shadow: [5, 2], dy: 4 });
  // fronts of buildings
  for (const b of [mus, om, lib, ke, qu, cc, bell, un, ps, geo, adm, la, ulc, ed, en, bx, lh]) frontDress(a, art, b, R);
  for (const [x, y] of [[27, 22], [62, 22], [80, 22], [40, 41], [76, 48]]) a.prop(art.bike, x, y, { solidRect: [x - 1, y, 2, 1], shadow: null });
  // lamps and street trees along the paseos
  lineLamps(a, art, 3, 101, 18, 8); lineLamps(a, art, 6, 100, 22, 8); lineLamps(a, art, 4, 100, 40, 9); lineLamps(a, art, 2, 100, 49, 8);
  lineTrees(a, art, 1, 102, 11, 3, ["mesquite", "paloverde", "mesquite"], R);
  lineTrees(a, art, 2, 100, 49, 4, ["ash", "mesquite"], R);
  for (const [x, y] of [[18, 22], [33, 23], [70, 37], [96, 37], [33, 40], [69, 41], [16, 49], [98, 49]]) if (!a.isUsed(x, y)) a.prop(art.post[(x + y) % 2], x, y, { shadow: [4, 2] });
  for (const [x, y] of [[15, 21], [36, 21], [66, 21], [96, 21], [15, 40], [96, 41]]) if (!a.isUsed(x, y)) a.prop(art.trash, x, y, { shadow: [4, 2] });
  // gardens, groves and desert planting everywhere else
  grove(a, art, 18, 22, 33, 27, 5, ["willow", "ash", "mesquite"], R);
  grove(a, art, 84, 22, 96, 29, 4, ["paloverde"], R);
  grove(a, art, 18, 40, 33, 45, 5, ["ash", "sumac", "mesquite"], R); grove(a, art, 70, 40, 82, 45, 5, ["ash", "sumac", "willow"], R);
  scatter(a, art, R, 0, 12, 104, 18, 0.32, ["yucca", "ocotillo", "agave", "barrel", "pear", "boulder", "shrub", "tree", "stones"]);
  scatter(a, art, R, 0, 20, 104, 50, 0.34, ["shrub", "shrub", "agave", "barrel", "pear", "rock", "pebbles", "tree", "tree", "shrub", "stones"]);
  scatter(a, art, R, 0, 57, 104, 62, 0.45, ["yucca", "ocotillo", "agave", "barrel", "pear", "boulder", "rock", "tree"]);
  scatter(a, art, R, 0, 10, 104, 12, 0.25, ["agave", "rock", "pebbles", "shrub"]);
  // bus stop and bus
  a.prop(art.busStop, 55, 49, { solidRect: [54, 49, 2, 1], shadow: null, dy: 1 });
  const bus = a.add(art.bus, 45 * T, 52 * T + 10, { kind: "bus" }); a.block(43, 51, 47, 53);
  a.bus = { x: 52 * T, y: 50 * T + 6, r: 34, obj: bus, label: "Sun Metro stop", signX: 55.5 * T, signY: 48 * T + 2 };
  a.spawn = { x: 52.5 * T, y: 28.4 * T };
  a.npcs = [
    { id: "pete", x: 57 * T, y: 27 * T, home: [57, 27], wander: 2 },
    { id: "s0", route: [[17, 20], [17, 44], [35, 44], [35, 20]] },
    { id: "s1", route: [[69, 20], [98, 20], [98, 39], [69, 39]] },
    { id: "s2", x: 29 * T, y: 39 * T, home: [29, 39], wander: 4 },
    { id: "s3", route: [[4, 10], [100, 10]] },
    { id: "s7", x: 76 * T, y: 20 * T, home: [79, 20], wander: 2 },
    { id: "s8", route: [[38, 47], [96, 47], [96, 39], [38, 39]] },
  ];
  a.sub = "Desert";
  return a;
}

// ---------------------------------------------------------------- Sun Bowl & Athletics
export function buildAthletics(art) {
  const Y = 6; const a = new Area("athletics", "Sun Bowl & Athletics", 88, 51 + Y - 6 + 2, 7); const R = A.rng(23);
  // Sun Metro road right under the Franklins: you step off the bus with the whole athletics side below you
  a.fill(0, 7, 88, 8, TILE.walk); a.fill(0, 8, 88, 13, TILE.road); a.fill(0, 13, 88, 14, TILE.walk); a.block(0, 7, 88, 13);
  a.hpath(0, 87, 8 + Y, 2);
  a.hpath(1, 86, 27 + Y, 3); a.hpath(1, 86, 41 + Y, 2);
  for (const x of [31, 58, 84]) a.vpath(x, 13, 43 + Y, 2);
  const st = A.paintStadium(); const pb = paintBuilding({ w: 96, seed: 61, shrubs: false, plinth: 2, blocks: [{ x: 0, w: 96, floors: 2, wall: "#e3d3b2", roof: "flat", winW: 6, winGap: 10, glass: [{ x: 14, w: 68 }] }] });
  const sg = st.img.getContext("2d"); sg.drawImage(pb.img, st.w / 2 - 48, -6); st.glow.getContext("2d").drawImage(pb.glow, st.w / 2 - 48, -6);
  const sto = a.building(st, 4, 26 + Y, "sunbowl", "Sun Bowl Stadium", { kind: "stadium", signUp: 30 });
  for (const [x, y] of st.towers) a.lights.push({ x: 4 * T + x, y: (26 + Y - sto.th) * T + y, r: 56, warm: 0 });
  const ar = A.paintArena(); const arn = a.building(ar, 60, 25 + Y, "haskins", "Don Haskins Center", { signUp: 34 });
  const mg = a.building(BUILDINGS.memgym(), 34, 25 + Y, null, "Memorial Gym");
  const fs = a.building(BUILDINGS.foster(), 74, 25 + Y, null, "Foster-Stevens Center");
  const fit = a.building(BUILDINGS.fitness(), 34, 40 + Y, null, "Swimming & Fitness Center");
  const br = a.building(BUILDINGS.brumbelow(), 4, 40 + Y, null, "Brumbelow Building");
  const du = a.building(BUILDINGS.durham(), 74, 40 + Y, null, "Larry K. Durham Center");
  const kf = a.building(paintTrack(), 34, 19 + Y, null, "Kidd Field", { kind: "stadium", signUp: 14 });
  const grg = a.building(paintBuilding({ w: 160, seed: 63, blocks: [{ x: 0, w: 160, floors: 3, fh: 13, wall: "#d9c39c", roof: "flat", winW: 12, winGap: 16, bandH: 6 }], doors: [{ x: 40, w: 16, style: "glass" }] }), 74, 19 + Y, null, "Glory Road Transfer Center");
  for (const b of [sto, arn, mg, fs, grg]) a.vpath(b.doorTx - 1, b.by, 27 + Y, 2);
  for (const b of [fit, br, du]) a.vpath(b.doorTx - 1, b.by, 41 + Y, 2);
  // Mining Minds plaza
  a.fill(48, 30 + Y, 57, 39 + Y, TILE.plaza);
  a.add(art.pick.img, 52 * T, (35 + Y) * T + 2, { glow: art.pick.glow, kind: "sculpture" }); a.block(51, 33 + Y, 54, 35 + Y); a.mark(49, 30 + Y, 56, 36 + Y);
  a.landmarks.push({ id: "pick", label: "Mining Minds", x: 52.5 * T, y: (36.4 + Y) * T, r: 30, signX: 52.5 * T, signY: (29.4 + Y) * T });
  a.lights.push({ x: 52.5 * T, y: (32 + Y) * T, r: 40, warm: 2 });
  for (const [x, y] of [[48, 31], [56, 31], [48, 38], [56, 38]]) a.lamp(x, y + Y, art);
  for (const [x, y] of [[50, 38], [55, 38]]) a.prop(art.bench, x, y + Y, { solidRect: [x - 1, y + Y, 2, 1], shadow: [10, 2], dy: -2 });
  a.prop(art.flag, 47, 33 + Y, { rate: 4, shadow: [4, 2] }); a.prop(art.flag, 58, 33 + Y, { rate: 4, shadow: [4, 2], phase: 2 });
  // parking lot
  a.fill(4, 30 + Y, 30, 37 + Y, TILE.park);
  for (let i = 0; i < 8; i++) { const x = 5 + i * 3; if (i !== 3) a.prop(art.cars[(i * 5) % 6], x, 31 + Y, { solidRect: [x - 1, 30 + Y, 2, 2], shadow: null, dy: 2 }); if (i % 3 !== 1) a.prop(art.cars[(i * 3 + 2) % 6], x, 35 + Y, { solidRect: [x - 1, 34 + Y, 2, 2], shadow: null, dy: 0 }); }
  a.parking = [4, 30 + Y, 30, 37 + Y];
  for (const b of [mg, fs, fit, br, du, arn, grg]) frontDress(a, art, b, R);
  lineLamps(a, art, 3, 86, 26 + Y, 8); lineLamps(a, art, 6, 86, 30 + Y, 9); lineLamps(a, art, 3, 86, 44 + Y, 8); lineLamps(a, art, 4, 86, 13 + 1, 8);
  lineTrees(a, art, 1, 86, 10 + Y, 3, ["mesquite", "paloverde"], R); lineTrees(a, art, 2, 86, 44 + Y, 4, ["ash", "mesquite"], R); lineTrees(a, art, 2, 86, 15, 4, ["paloverde", "mesquite"], R);
  grove(a, art, 32, 29 + Y, 45, 39 + Y, 5, ["paloverde", "mesquite"], R); grove(a, art, 60, 29 + Y, 83, 39 + Y, 7, ["mesquite", "ash", "willow"], R);
  scatter(a, art, R, 0, 15, 88, 27 + Y, 0.3, ["yucca", "ocotillo", "agave", "barrel", "pear", "boulder", "shrub", "tree", "stones"]);
  scatter(a, art, R, 0, 28 + Y, 88, 45 + Y, 0.3, ["shrub", "agave", "barrel", "pear", "rock", "pebbles", "tree", "tree"]);
  scatter(a, art, R, 0, 45 + Y, 88, a.h, 0.45, ["yucca", "ocotillo", "agave", "barrel", "boulder", "rock", "tree"]);
  for (const [x, y] of [[33, 29], [60, 29], [82, 29], [33, 43]]) if (!a.isUsed(x, y + Y)) a.prop(art.post[(x + y) % 2], x, y + Y, { shadow: [4, 2] });
  a.vpath(31, 13, 15, 2);
  a.prop(art.busStop, 35, 14, { solidRect: [34, 14, 2, 1], shadow: null, dy: 1 });
  const bus = a.add(art.bus, 26 * T, 12 * T + 10, { kind: "bus" }); a.block(24, 11, 28, 13);
  a.bus = { x: 32 * T, y: 14.5 * T, r: 34, obj: bus, label: "Sun Metro stop", signX: 35.5 * T, signY: 13 * T + 2 };
  a.road = [8, 13];
  a.spawn = { x: 32 * T + 8, y: 15 * T + 4 };
  a.npcs = [
    { id: "s4", route: [[32, 28 + Y], [32, 42 + Y], [59, 42 + Y], [59, 28 + Y]] },
    { id: "s5", x: 66 * T, y: (28 + Y) * T, home: [66, 28 + Y], wander: 3 },
    { id: "s6", x: 50 * T, y: (37 + Y) * T, home: [50, 37 + Y], wander: 2 },
    { id: "s9", route: [[2, 28 + Y], [56, 28 + Y]] },
  ];
  a.sub = "Foothills";
  return a;
}

// ---------------------------------------------------------------- ground painting (per pixel, soft dithered edges)
const PAL = {
  ground: ["#c8b46c", "#d1bd76", "#bea961", "#dac684"], lawn: ["#93b44e", "#9ebe58", "#87a845", "#abc966"], dg: ["#d8b994", "#ceae88", "#e3c7a4", "#c4a37e"],
  path: ["#f2ead0", "#ebe2c4", "#f6f0dc", "#e5dabb"], plaza: ["#c97a52", "#d08a5e", "#bf704a", "#d6936a"], road: ["#5d5b68", "#595764", "#625f6d"], walk: ["#dcd5c5", "#d4ccba"],
  park: ["#6a6874", "#66646f", "#6f6d79"], turf: ["#4f9a3f", "#58a646"], water: ["#2c88a0"],
};
const BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];
function hexRGB(h) { return [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)]; }
const PALRGB = Object.fromEntries(Object.entries(PAL).map(([k, v]) => [k, v.map(hexRGB)]));
const NAME = Object.fromEntries(Object.entries(TILE).map(([k, v]) => [v, k]));
function materialAt(a, x, y) {
  const tx = Math.floor(x / T), ty = Math.floor(y / T); const t0 = a.t(tx, ty);
  if (!SOFT.includes(t0)) return t0;
  // bilinear masks over neighbour tile centres for soft materials
  const u = (x + 0.5) / T - 0.5, v = (y + 0.5) / T - 0.5; const ux = Math.floor(u), vy = Math.floor(v); const fx = u - ux, fy = v - vy;
  let best = t0, bv = -9;
  for (const m of SOFT) {
    let s = 0; for (const [dx, dy, w] of [[0, 0, (1 - fx) * (1 - fy)], [1, 0, fx * (1 - fy)], [0, 1, (1 - fx) * fy], [1, 1, fx * fy]]) { const tt = a.t(ux + dx, vy + dy); if (tt === m) s += w; else if (!SOFT.includes(tt) && m === t0) s += w; }
    if (s <= 0) continue;
    const n = (A.hash2(x >> 2, y >> 2, m * 7 + 1) - 0.5) * 0.34 + (A.hash2(x, y, m * 3 + 5) - 0.5) * 0.18 + (m === TILE.path ? 0.04 : 0);
    if (s + n > bv) { bv = s + n; best = m; }
  }
  return best;
}
export function renderGround(a, art) {
  const W = a.w * T, Hh = a.h * T; const [c, g] = A.mk(W, Hh);
  const img = g.createImageData(W, Hh); const d = img.data;
  for (let y = a.mtnRows * T; y < Hh; y++) for (let x = 0; x < W; x++) {
    const m = materialAt(a, x, y); const name = NAME[m]; const pal = PALRGB[name] || PALRGB.ground; let col;
    const b = BAYER[(y & 3) * 4 + (x & 3)] / 16; const n = A.hash2(x, y, 1); const n2 = A.hash2(x >> 3, y >> 3, 2);
    if (m === TILE.path) { // running-bond cobble 6x4 with soft mortar
      const row = y >> 2, off = row % 2 ? 3 : 0; const cx = (x + off) / 6 | 0; const edge = (y & 3) === 3 || ((x + off) % 6) === 5; const k = (A.hash2(cx, row, 9) * 4) | 0;
      col = edge ? [221, 209, 176] : pal[k]; if (!edge && (y & 3) === 0) col = col.map((v) => Math.min(255, v + 6)); if (n > 0.97) col = [214, 200, 166];
    } else if (m === TILE.plaza) {
      const row = y >> 2, off = row % 2 ? 4 : 0; const mortar = (y & 3) === 3 || ((x + off) & 7) === 7; col = mortar ? [168, 96, 64] : pal[(A.hash2((x + off) >> 3, row, 4) * 4) | 0]; if (!mortar && (y & 3) === 0) col = col.map((v) => Math.min(255, v + 12));
    } else if (m === TILE.walk) { const j = (x % 16 === 0) || (y % 16 === 0); col = j ? [184, 176, 160] : pal[n > 0.5 ? 0 : 1]; if (!j && (y % 16) === 1) col = [232, 226, 214]; }
    else if (m === TILE.road || m === TILE.park) { col = pal[(n * pal.length) | 0]; }
    else if (m === TILE.turf) { col = pal[((x >> 4) % 2)]; }
    else if (m === TILE.mtn) { col = [190, 160, 130]; }
    else { // ground, lawn, dg: tonal dither
      const t2 = n2 * 0.6 + n * 0.4; const stripe = m === TILE.lawn && (((x + (y >> 1)) >> 4) & 1) ? 0.16 : 0; const idx = t2 + (b - 0.5) * 0.35 + stripe; col = pal[idx < 0.3 ? 2 : idx < 0.62 ? 0 : idx < 0.82 ? 1 : 3];
      if (m === TILE.dg) { if (n > 0.93) col = [240, 222, 196]; else if (n < 0.05) col = [168, 136, 104]; }
    }
    const i = (y * W + x) * 4; d[i] = col[0]; d[i + 1] = col[1]; d[i + 2] = col[2]; d[i + 3] = 255;
  }
  g.putImageData(img, 0, 0);
  // tufts, pebbles and tiny flowers on the open ground and lawn
  for (let ty = a.mtnRows; ty < a.h; ty++) for (let tx = 0; tx < a.w; tx++) {
    const t = a.t(tx, ty); if (t !== TILE.ground && t !== TILE.lawn && t !== TILE.dg) continue;
    for (let k = 0; k < 4; k++) {
      const x = tx * T + ((A.hash2(tx, ty, k * 3) * 15) | 0), y = ty * T + 2 + ((A.hash2(ty, tx, k * 5) * 13) | 0); if (materialAt(a, x, y) !== t) continue;
      const r = A.hash2(tx, ty, k + 40);
      if (t === TILE.ground) { if (r < 0.55) tuft(g, x, y, "#9a9446", "#b8b062", "#7d7a36"); else if (r < 0.7) { g.fillStyle = "#e9dfc2"; g.fillRect(x, y, 2, 1); g.fillStyle = "#a08a64"; g.fillRect(x, y + 1, 2, 1); } else if (r < 0.78) { g.fillStyle = r < 0.74 ? "#e8742a" : "#f2d35e"; g.fillRect(x, y, 1, 1); } }
      else if (t === TILE.lawn) { if (r < 0.6) tuft(g, x, y, "#6f9038", "#b4d070", "#5f7f30"); else if (r < 0.7) { g.fillStyle = "#f7f1e1"; g.fillRect(x, y, 1, 1); g.fillStyle = "#f2d35e"; g.fillRect(x + 1, y + 1, 1, 1); } }
      else if (r < 0.5) { g.fillStyle = "#b8936e"; g.fillRect(x, y, 2, 1); g.fillStyle = "#f0dcc0"; g.fillRect(x, y - 1, 1, 1); }
    }
  }
  // decals: fallen leaves under trees, pebble clusters, stepping stones
  for (const [k, x, y, kind] of a.decals) {
    const xi = Math.round(x), yi = Math.round(y);
    if (k === "leaf") { const cols = kind === "sumac" ? ["#d0643a", "#a8402a"] : kind === "paloverde" ? ["#f2d35e", "#c9b04a"] : ["#b08a3a", "#8a6a2a", "#c9a44a"]; g.fillStyle = cols[(xi + yi) % cols.length]; g.fillRect(xi, yi, 2, 1); g.fillRect(xi + 1, yi - 1, 1, 1); }
    else if (k === "pebbles") for (let j = 0; j < 4; j++) { const px = xi + ((A.hash2(xi, j, 1) - 0.5) * 12 | 0), py = yi + ((A.hash2(yi, j, 2) - 0.5) * 10 | 0); g.fillStyle = "#e2d6bc"; g.fillRect(px, py, 2, 1); g.fillStyle = "#8f7d62"; g.fillRect(px, py + 1, 2, 1); }
    else if (k === "stone1") { g.fillStyle = "#8f9a62"; g.fillRect(xi - 5, yi + 2, 11, 2); g.fillStyle = "#e7dcc3"; g.fillRect(xi - 5, yi - 1, 10, 4); g.fillStyle = "#f6efdc"; g.fillRect(xi - 4, yi - 1, 5, 1); g.fillStyle = "#c9bba0"; g.fillRect(xi - 5, yi + 2, 10, 1); }
    else if (k === "stones") for (let j = 0; j < 3; j++) { const px = xi - 10 + j * 8, py = yi + (j % 2) * 3; g.fillStyle = "#a99a80"; g.fillRect(px, py + 1, 6, 3); g.fillStyle = "#e7dcc3"; g.fillRect(px, py, 6, 3); g.fillStyle = "#f6efdc"; g.fillRect(px + 1, py, 3, 1); }
  }
  // curbs, road markings, crosswalks, parking lines
  for (let y = 0; y < a.h; y++) for (let x = 0; x < a.w; x++) if (a.t(x, y) === TILE.road) {
    if (a.t(x, y - 1) === TILE.walk) { g.fillStyle = "#8f877a"; g.fillRect(x * T, y * T, T, 2); g.fillStyle = "#ece6da"; g.fillRect(x * T, y * T, T, 1); }
    if (a.t(x, y + 1) === TILE.walk) { g.fillStyle = "#8f877a"; g.fillRect(x * T, y * T + 14, T, 2); }
  }
  const dashRow = (y0, y1) => { const my = ((y0 + y1) / 2) * T - 1; for (let x = 0; x < W; x += 12) { g.fillStyle = "#f2c94c"; g.fillRect(x, my, 7, 2); } };
  if (a.id === "main") { dashRow(51, 56); crosswalk(g, 51 * T, 51 * T, 3 * T, 5 * T); } else { dashRow(8, 13); crosswalk(g, 31 * T, 8 * T, 2 * T, 5 * T); }
  if (a.parking) { const [x0, y0, x1, y1] = a.parking; g.fillStyle = "#e9e4d8"; for (let x = x0 * T + 12; x < x1 * T; x += 3 * T) { g.fillRect(x, y0 * T + 2, 1, 2 * T - 2); g.fillRect(x, (y1 - 2) * T, 1, 2 * T - 2); } g.fillStyle = "#8f877a"; g.fillRect(x0 * T, y0 * T, (x1 - x0) * T, 1); g.fillRect(x0 * T, y1 * T - 1, (x1 - x0) * T, 1); }
  // Centennial Plaza emblem (original): a miner's pickaxe crossed over the Franklins with a star
  if (a.emblem) emblem(g, a.emblem.x, a.emblem.y);
  // building contact shadows: a soft band below and to the right (sun from the upper left)
  for (const s of a.shadows) {
    if (s.kind === "stadium") { g.fillStyle = "rgba(48,30,40,0.18)"; g.beginPath(); g.ellipse(s.x + s.w / 2 + 6, s.y - s.h / 2 + 8, s.w / 2, s.h / 2 - 2, 0, 0, 7); g.fill(); continue; }
    g.fillStyle = "rgba(60,36,30,0.22)"; g.fillRect(s.x + 2, s.y, s.w + 2, 3); g.fillStyle = "rgba(60,36,30,0.12)"; g.fillRect(s.x + 4, s.y + 3, s.w, 2);
    g.fillStyle = "rgba(60,36,30,0.18)"; g.beginPath(); g.moveTo(s.x + s.w, s.y - s.h + 24); g.lineTo(s.x + s.w + 6, s.y - s.h + 30); g.lineTo(s.x + s.w + 6, s.y + 3); g.lineTo(s.x + s.w, s.y + 3); g.closePath(); g.fill();
  }
  // Franklin Mountains with the El Paso star
  const mh = a.mtnRows * T + 8; const [mc, mg] = A.mk(W, mh);
  const sx = (a.spawn.x / W);
  const m = A.paintMountains(mg, W, mh, a.id === "main" ? 3 : 8, sx);
  g.drawImage(mc, 0, 0, W, mh - 8, 0, 0, W, mh - 8);
  for (let x = 0; x < W; x++) for (let k = 0; k < 8; k++) if (A.hash2(x, k, 2) > k / 8) { g.fillStyle = (k + x) % 3 ? "#b49a68" : "#a08a5e"; g.fillRect(x, mh - 8 + k, 1, 1); }
  a.star = m.star; a.starCenter = m.starCenter;
  return c;
}
function paintTrack() { // Kidd Field: a running track around a green infield, with small bleachers
  const W = 22 * T, Hh = 8 * T; const [c, g] = A.mk(W, Hh); const [gc] = A.mk(W, Hh);
  const cx = W / 2, cy = Hh / 2 + 6, rx = W / 2 - 4, ry = Hh / 2 - 12;
  for (let y = 0; y < Hh; y++) for (let x = 0; x < W; x++) { const dx = Math.max(0, Math.abs(x - cx) - (rx - ry)), d = Math.hypot(dx, y - cy) / ry; if (d > 1) continue; let col; if (d > 0.62) { const lane = Math.floor((d - 0.62) / 0.0633); col = (d - 0.62) % 0.0633 < 0.012 ? "#f3e9dc" : lane % 2 ? "#b8573e" : "#c4644a"; } else if (d > 0.58) col = "#e9e2d4"; else col = ((x >> 4) % 2) ? "#5aa848" : "#4f9a3f"; g.fillStyle = col; g.fillRect(x, y, 1, 1); }
  g.fillStyle = "#ffffff"; g.fillRect(cx - 1, cy - ry * 0.58, 1, ry * 1.16);
  for (let i = 0; i < 4; i++) { g.fillStyle = i % 2 ? "#8a8f99" : "#a8adb5"; g.fillRect(cx - 60, 2 + i * 3, 120, 3); } g.fillStyle = "#1f3a6e"; g.fillRect(cx - 62, 14, 124, 2); g.fillStyle = "#ff8200"; g.fillRect(cx - 62, 0, 124, 2);
  A.outline(c, 0.4);
  return { img: c, glow: gc, w: W, h: Hh, doorX: cx };
}
function tuft(g, x, y, c1, c2, c3) { g.fillStyle = c1; g.fillRect(x, y, 1, 2); g.fillRect(x - 1, y + 1, 1, 1); g.fillRect(x + 1, y + 1, 1, 1); g.fillStyle = c2; g.fillRect(x, y - 1, 1, 1); g.fillStyle = c3; g.fillRect(x - 1, y + 2, 3, 1); }
function crosswalk(g, x, y, w, h) { for (let i = 2; i < w; i += 6) { g.fillStyle = "#efeae0"; g.fillRect(x + i, y + 3, 4, h - 6); } }
function emblem(g, cx, cy) {
  const P = (x, y, c) => { g.fillStyle = c; g.fillRect(Math.round(cx + x), Math.round(cy + y), 1, 1); };
  for (let y = -26; y <= 26; y++) for (let x = -40; x <= 40; x++) { const d = (x / 40) ** 2 + (y / 26) ** 2; if (d > 1) continue; let c = d > 0.86 ? "#1f3a6e" : d > 0.78 ? "#f7f1e1" : "#ff8200"; if (d <= 0.78) { const mortar = ((y + 26) & 3) === 3 || (((x + 40) + (((y + 26) >> 2) % 2 ? 4 : 0)) & 7) === 7; if (mortar) c = "#d86a10"; else if (A.hash2(x + 40 >> 3, y + 26 >> 2, 6) > 0.7) c = "#ff9426"; } if (d > 0.86 && ((x + 40) & 7) === 0) c = "#2f5a9a"; P(x, y, c); }
  // mountains silhouette
  for (let x = -26; x <= 26; x++) { const h = Math.max(0, 12 - Math.abs(x + 10) * 0.9, 9 - Math.abs(x - 9) * 0.8); for (let y = 0; y < h; y++) P(x, 12 - y, y > h - 2 ? "#f7f1e1" : "#1f3a6e"); }
  // pickaxe: handle diagonal, curved head
  for (let t = 0; t < 30; t++) { const x = -12 + t * 0.95, y = 11 - t * 0.85; P(x, y, "#f7f1e1"); P(x + 1, y, "#f7f1e1"); P(x + 1, y + 1, "#c9b8a0"); }
  for (let i = -15; i <= 15; i++) { const th = Math.max(1, 3 - Math.floor(Math.abs(i) / 6)); const x = 16 + i * 0.66 - Math.abs(i) * 0.35, y = -14 + i * 0.72 - Math.abs(i) * 0.38 + 0.0 * i; for (let k = 0; k < th; k++) P(x + k * 0.7, y + k * 0.7, k === th - 1 ? "#d8cdb8" : "#f7f1e1"); }
  // star
  for (let k = 0; k < 5; k++) for (let r = 0; r < 6; r++) { const ang = -Math.PI / 2 + k * (2 * Math.PI / 5); P(-14 + Math.cos(ang) * r, -10 + Math.sin(ang) * r, "#fff3c4"); }
  P(-14, -10, "#ffffff");
}

export function buildAreas() {
  const art = makeArt();
  const areas = { main: buildMain(art), athletics: buildAthletics(art) };
  for (const a of Object.values(areas)) { a.ground = renderGround(a, art); a.objs.sort((p, q) => p.sortY - q.sortY); }
  return { art, areas };
}
