// Camp hub: a compact, dense Centennial Plaza with Bhutanese-style buildings and the Franklin Mountains behind.
import * as THREE from "three";
import { LevelBuilder, GY } from "./builder.js";
import { Voxels, voxelMaterial, voxelMaterialUnique } from "./voxel.js";
import { B } from "./blocks.js";

const W = 84, H = 48, D = 80;

function mountainHeight(x, z) {
  const n = Math.sin(x * 0.21) * 2.2 + Math.sin(x * 0.53 + 1.3) * 1.4 + Math.cos(z * 0.37 + x * 0.11) * 1.6 + Math.sin((x + z) * 0.9) * 0.6;
  let m = 0;
  const dn = 9 - z; if (dn > 0) m = Math.max(m, dn * 0.35 + n * 0.4);
  const dw = 8 - x; if (dw > 0) m = Math.max(m, dw * 0.8 + n * 0.6);
  return Math.max(0, Math.round(m));
}

export function buildCamp() {
  const L = new LevelBuilder(W, H, D, 42);
  const r = L.r;
  // ---------------- terrain
  for (let z = 0; z < D; z++) for (let x = 0; x < W; x++) {
    let top = GY;
    if (z > 63) top = GY - 1; // terrace down toward the camera
    if (x > 66) top = GY + (x > 74 ? 1 : 0);
    const m = mountainHeight(x, z);
    top += m;
    top = Math.min(H - 3, top);
    for (let y = 0; y < top; y++) {
      let id = "dirt";
      if (m > 2) id = y === top - 1 ? "rock" : ((y + (x * 7 + z * 3) % 5) % 7 === 0 ? "rock_dark" : (y < GY + 2 ? "stone" : "rock"));
      else if (y === top - 1) id = "grass";
      else if (y < top - 3) id = "stone";
      L.set(x, y, z, id);
    }
    if (m > 2 && m < 9 && r() < 0.35) L.grass(x + 0.5, top, z + 0.5, 6, 0.9);
    if (m > 2 && r() < 0.05) L.set(x, top, z, r() < 0.5 ? "leaves_dry" : "rock_dark");
  }
  // ---------------- plaza paving
  const pave = (x0, z0, x1, z1, id) => { for (let z = z0; z <= z1; z++) for (let x = x0; x <= x1; x++) L.set(x, GY - 1, z, id); };
  for (let z = 29; z <= 63; z++) for (let x = 23; x <= 63; x++) L.set(x, GY - 1, z, "grass");
  // worn dirt paths with ragged edges, sandstone flagstones down the middle
  const lane = (x0, z0, x1, z1) => {
    for (let z = z0 - 1; z <= z1 + 1; z++) for (let x = x0 - 1; x <= x1 + 1; x++) {
      const edge = x < x0 || x > x1 || z < z0 || z > z1;
      if (edge) { if (r() < 0.55) L.set(x, GY - 1, z, r() < 0.3 ? "gravel" : "path"); continue; }
      const inner = (x1 - x0 > 3 ? x > x0 && x < x1 : true) && (z1 - z0 > 3 ? z > z0 && z < z1 : true);
      L.set(x, GY - 1, z, inner ? (r() < 0.12 ? "path" : "sandstone") : (r() < 0.25 ? "gravel" : "path"));
    }
  };
  lane(40, 29, 44, 63); lane(23, 45, 63, 49);
  lane(30, 33, 54, 35); // walkway past the library steps and storage chests
  for (let z = 29; z <= 63; z++) for (let x = 23; x <= 63; x++) if ((x === 23 || x === 63 || z === 29 || z === 63) && r() < 0.5) L.set(x, GY - 1, z, "path");
  // central tile circle
  for (let z = 41; z <= 53; z++) for (let x = 36; x <= 48; x++) { const d = Math.hypot(x - 42, z - 47); if (d < 6.2) L.set(x, GY - 1, z, d < 2 ? "cobble" : d > 5.2 ? "stonebrick" : ((x + z) % 2 ? "tile" : "sandstone")); }
  // lawns (raised planters)
  const planter = (x0, z0, x1, z1, trees) => {
    for (let z = z0; z <= z1; z++) for (let x = x0; x <= x1; x++) {
      const edge = x === x0 || x === x1 || z === z0 || z === z1;
      L.set(x, GY, z, edge ? "sandstone" : "grass");
      L.set(x, GY - 1, z, "dirt");
      if (!edge) { const k = r(); if (k < 0.5) L.grass(x + 0.5, GY + 1, z + 0.5, k < 0.08 ? 3 : k < 0.14 ? 5 : k < 0.18 ? 4 : (k < 0.3 ? 2 : 0), 0.9 + r() * 0.4); }
    }
    for (const [tx, tz, s] of trees) L.tree(tx, GY + 1, tz, s, false, true);
  };
  planter(24, 50, 34, 55, [[27, 52, 1], [31, 53, 2]]);
  planter(51, 50, 61, 55, [[54, 52, 2], [58, 53, 1]]);
  planter(24, 39, 30, 43, [[27, 41, 1]]);
  planter(55, 39, 61, 43, [[58, 41, 1]]);

  // ---------------- buildings
  L.building(25, 14, 58, 26, 7, { door: ["s", 40], doorW: 5, overhang: 2, roofLayers: 2, crown: false });         // Library
  L.building(9, 31, 20, 47, 7, { door: ["e", 37], overhang: 1, roofLayers: 2, crown: false });                    // Union
  L.building(61, 13, 73, 24, 8, { overhang: 1, roofLayers: 2 });                                     // CCSB (behind, right)
  // Lhakhang temple (smaller, ornate)
  {
    const x0 = 12, z0 = 51, x1 = 20, z1 = 59, y0 = GY;
    L.box(x0 - 1, y0, z0 - 1, x1 + 1, y0, z1 + 1, "stonebrick");
    L.box(x0, y0 + 1, z0, x1, y0 + 5, z1, "plaster"); L.box(x0, y0 + 1, z0, x1, y0 + 1, z1, "plaster_base");
    L.box(x0, y0 + 4, z0, x1, y0 + 5, z1, "temple");
    for (let z = z0 + 2; z <= z1 - 2; z += 2) { L.set(x1, y0 + 2, z, "window"); L.set(x1, y0 + 3, z, "planks_dark"); }
    L.box(x0 - 2, y0 + 6, z0 - 2, x1 + 2, y0 + 6, z1 + 2, "planks_orange");
    L.box(x0 - 1, y0 + 7, z0 - 1, x1 + 1, y0 + 7, z1 + 1, "roof_dark");
    L.box(x0 + 1, y0 + 8, z0 + 1, x1 - 1, y0 + 8, z1 - 1, "roof_dark");
    L.box(x0 + 2, y0 + 9, z0 + 2, x1 - 2, y0 + 9, z1 - 2, "temple");
    L.box(x0 + 2, y0 + 10, z0 + 2, x1 - 2, y0 + 10, z1 - 2, "roof_dark");
    L.box(x0 + 3, y0 + 11, z0 + 3, x1 - 3, y0 + 11, z1 - 3, "roof_dark");
    L.set(16, y0 + 12, 55, "gold"); L.set(16, y0 + 13, 55, "gold"); L.set(16, y0 + 14, 55, "glowstone");
    for (let z = z0 - 2; z <= z1 + 2; z++) for (let x = x0 - 2; x <= x1 + 2; x++) L.block(x, z);
    L.torch(x1 + 2, y0 + 1, 53); L.torch(x1 + 2, y0 + 1, 57);
    // prayer flags strung from the roof
    L.flagLine = [[x1 + 2, y0 + 6.5, z0 - 2], [26, GY + 4, 49]];
  }
  // pond by the Lhakhang
  for (let z = 51; z <= 57; z++) for (let x = 23; x <= 26; x++) { L.set(x, GY - 1, z, "water"); L.set(x, GY - 2, z, "sand"); L.block(x, z); }
  for (let z = 50; z <= 58; z++) { L.set(22, GY - 1, z, "stonebrick"); L.set(27, GY, z, z % 2 ? "sandstone" : "stonebrick"); }

  // ---------------- Mining Minds sculpture (giant pickaxe)
  {
    const sx = 64, sz = 34, y0 = GY;
    L.box(sx - 2, y0, sz - 2, sx + 2, y0, sz + 2, "stonebrick"); L.box(sx - 1, y0 + 1, sz - 1, sx + 1, y0 + 1, sz + 1, "iron");
    for (let i = 0; i < 9; i++) L.set(sx, y0 + 2 + i, sz, i % 3 === 1 ? "crystal" : "iron");
    const head = [[-5, 0], [-4, 1], [-3, 1], [-2, 1], [-1, 1], [0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 0]];
    for (const [dx, dy] of head) { L.set(sx + dx, y0 + 10 + dy, sz, Math.abs(dx) > 3 ? "glowstone" : "iron"); }
    L.set(sx, y0 + 10, sz, "iron"); L.set(sx, y0 + 12, sz, "crystal");
    L.blockRect(sx - 2, sz - 2, sx + 2, sz + 2);
  }

  // ---------------- smith stall (NW of plaza)
  {
    const x0 = 25, z0 = 31, x1 = 33, z1 = 37;
    for (const [px, pz] of [[x0, z0], [x1, z0], [x0, z1], [x1, z1]]) for (let y = GY; y < GY + 4; y++) L.set(px, y, pz, "log");
    L.canopy(x0 - 1, z0 - 1, x1 + 1, z1 + 1, GY + 4, "wool_orange", "wool_white");
    // forge
    L.box(x0 + 1, GY, z0 + 1, x0 + 3, GY + 1, z0 + 2, "stonebrick"); L.set(x0 + 2, GY + 1, z0 + 1, "magma"); L.set(x0 + 2, GY + 1, z0 + 2, "lava");
    L.box(x0 + 1, GY + 2, z0 + 1, x0 + 3, GY + 3, z0 + 1, "bricks"); L.box(x0 + 2, GY + 4, z0 + 1, x0 + 2, GY + 7, z0 + 1, "bricks");
    L.emitters.push({ type: "smoke", x: x0 + 2.5, y: GY + 8.2, z: z0 + 1.5, rate: 2.5 });
    L.emitters.push({ type: "spark", x: x0 + 2.5, y: GY + 2.2, z: z0 + 2.5, rate: 3 });
    L.lights.push({ x: x0 + 2.5, y: GY + 2.5, z: z0 + 3, color: 0xff6a20, intensity: 9, range: 9 });
    L.blockRect(x0 + 1, z0 + 1, x0 + 3, z0 + 2);
    // anvil
    L.prop((bb) => { const ax = x0 + 6, az = z0 + 3; bb.box(ax + 0.2, GY, az + 0.25, ax + 0.8, GY + 0.25, az + 0.75, "iron"); bb.box(ax + 0.35, GY + 0.25, az + 0.35, ax + 0.65, GY + 0.55, az + 0.65, "iron"); bb.box(ax, GY + 0.55, az + 0.2, ax + 1.0, GY + 0.85, az + 0.8, "iron"); });
    L.block(x0 + 6, z0 + 3);
    L.barrel(x1 - 1, GY, z0 + 1); L.barrel(x1 - 2, GY, z0 + 1); L.crate(x1 - 1, GY, z0 + 2);
    L.prop((bb) => { // weapon rack
      bb.box(x0 + 4, GY, z0 + 0.7, x0 + 6, GY + 0.15, z0 + 1, "planks_dark");
      for (let i = 0; i < 3; i++) bb.box(x0 + 4.3 + i * 0.6, GY + 0.15, z0 + 0.8, x0 + 4.4 + i * 0.6, GY + 1.5, z0 + 0.9, "iron");
    });
    L.blockRect(x0 + 4, z0, x0 + 6, z0 + 1);
    L.npcs.push({ type: "smith", x: x0 + 5.5, z: z0 + 4.5, rot: Math.PI * 0.25, interact: "smith", label: "Smith (gear)" });
    L.lamppost(x1 + 1, GY, z1 + 1, 4);
  }
  // ---------------- cartographer stall (NE of plaza)
  {
    const x0 = 51, z0 = 31, x1 = 59, z1 = 37;
    for (const [px, pz] of [[x0, z0], [x1, z0], [x0, z1], [x1, z1]]) for (let y = GY; y < GY + 4; y++) L.set(px, y, pz, "log");
    L.canopy(x0 - 1, z0 - 1, x1 + 1, z1 + 1, GY + 4, "wool_blue", "wool_white");
    L.box(x0 + 1, GY, z0 + 1, x1 - 1, GY + 2, z0 + 1, "bookshelf");
    L.table(x0 + 2, GY, z0 + 3, 3, 1, "parchment");
    L.prop((bb) => { bb.box(x0 + 2.4, GY + 0.95, z0 + 3.2, x0 + 2.8, GY + 1.25, z0 + 3.6, "lantern", { light: 1, noAO: true }); bb.box(x0 + 3.6, GY + 0.95, z0 + 3.2, x0 + 4.6, GY + 1.0, z0 + 3.8, "map_parchment" in B ? "parchment" : "parchment"); });
    L.vox.addLight(x0 + 2, GY + 1, z0 + 3, 12);
    L.lights.push({ x: x0 + 2.6, y: GY + 1.4, z: z0 + 3.4, color: 0xffb060, intensity: 4, range: 6 });
    L.crate(x1 - 1, GY, z1 - 1); L.crate(x1 - 1, GY + 0, z1 - 2, 0.7); L.barrel(x0 + 1, GY, z1 - 1);
    L.npcs.push({ type: "mapper", x: x0 + 3.5, z: z0 + 5.2, rot: Math.PI * 0.9, interact: "map", label: "Cartographer (missions)" });
    L.lamppost(x0 - 1, GY, z1 + 1, 4);
  }
  // ---------------- map table (center north)
  {
    const tx = 40, tz = 39;
    L.prop((bb) => {
      bb.box(tx, GY + 0.85, tz, tx + 5, GY + 1.05, tz + 3, "planks_dark");
      bb.box(tx + 0.2, GY + 1.05, tz + 0.2, tx + 4.8, GY + 1.12, tz + 2.8, "parchment", { light: 0.45, noAO: true });
      for (const [lx, lz] of [[tx + 0.2, tz + 0.2], [tx + 4.5, tz + 0.2], [tx + 0.2, tz + 2.5], [tx + 4.5, tz + 2.5]]) bb.box(lx, GY, lz, lx + 0.3, GY + 0.85, lz + 0.3, "log");
      // tiny map relief
      bb.box(tx + 0.6, GY + 1.12, tz + 0.5, tx + 1.8, GY + 1.45, tz + 1.2, "rock", { light: 1 });
      bb.box(tx + 0.9, GY + 1.45, tz + 0.6, tx + 1.4, GY + 1.7, tz + 1.0, "rock", { light: 1 });
      bb.box(tx + 2.4, GY + 1.12, tz + 1.4, tx + 3.0, GY + 1.4, tz + 1.9, "plaster", { light: 1 });
      bb.box(tx + 3.4, GY + 1.12, tz + 0.8, tx + 3.9, GY + 1.3, tz + 1.3, "plaster", { light: 1 });
      bb.box(tx + 0.4, GY + 1.12, tz + 2.2, tx + 4.6, GY + 1.16, tz + 2.5, "water", { light: 1 });
    });
    L.blockRect(tx, tz, tx + 4, tz + 2);
    L.interacts.push({ x: tx + 2.5, z: tz + 1.5, r: 3.2, interact: "map", label: "Mission table" });
    L.mapTable = { x: tx + 2.5, y: GY + 1.3, z: tz + 1.5 };
    L.emitters.push({ type: "magic", x: tx + 2.5, y: GY + 1.4, z: tz + 1.5, rate: 6, spread: 2.2 });
    L.lights.push({ x: tx + 2.5, y: GY + 2.2, z: tz + 1.5, color: 0xffd080, intensity: 4, range: 6, flicker: false });
    L.vox.addLight(tx + 2, GY + 2, tz + 1, 10);
    L.npcs.push({ type: "pete", x: tx - 0.8, z: tz + 2.2, rot: Math.PI * 0.35, interact: "pete", label: "Talk to Paydirt Pete" });
  }
  // ---------------- campfire + benches
  L.campfire(42, GY, 47);
  L.bench(39, GY, 44, 3, true); L.bench(39, GY, 50, 3, true); L.bench(38, GY, 45, 3, false); L.bench(46, GY, 45, 3, false);
  L.animals.push({ type: "wolf", x: 44.6, z: 49.3, rot: -0.6, sit: true, interact: "wolf", label: "Pet the wolf" });

  // ---------------- tents (east)
  const tent = (x0, z0, a, b) => {
    for (let i = 0; i < 3; i++) for (let z = z0; z <= z0 + 5; z++) { L.set(x0 + i, GY + i, z, i % 2 ? b : a); L.set(x0 + 6 - i, GY + i, z, i % 2 ? b : a); }
    for (let z = z0; z <= z0 + 5; z++) L.set(x0 + 3, GY + 3, z, a);
    for (let z = z0 + 1; z <= z0 + 5; z++) for (let x = x0 + 1; x <= x0 + 5; x++) if (!L.get(x, GY, z)) L.set(x, GY, z, "planks");
    L.box(x0 + 1, GY + 1, z0 + 5, x0 + 5, GY + 2, z0 + 5, a);
    L.blockRect(x0, z0, x0 + 6, z0 + 5);
    L.torch(x0 + 2, GY, z0 - 1);
  };
  tent(65, 37, "wool_orange", "wool_white");
  tent(65, 47, "wool_blue", "wool_white");
  L.barrel(64, GY, 44); L.crate(64, GY, 45); L.crate(64, GY + 0, 46, 0.7);
  for (const [hx, hz] of [[72, 45], [72, 46], [73, 45]]) L.set(hx, GY + 1, hz, "hay");
  L.set(72, GY + 2, 45, "hay");
  // chests (storage)
  L.storage = [{ x: 36.5, z: 34.5 }, { x: 47.5, z: 34.5 }];
  for (const s of L.storage) { L.block(s.x, s.z); L.interacts.push({ x: s.x, z: s.z, r: 1.4, interact: "storage", label: "Storage chest" }); }

  // ---------------- sheep pen (south west)
  L.fence(24, 57, 34, 57, GY); L.fence(24, 57, 24, 62, GY); L.fence(34, 57, 34, 62, GY); L.fence(24, 62, 34, 62, GY);
  for (let z = 58; z <= 61; z++) for (let x = 25; x <= 33; x++) { L.set(x, GY - 1, z, "grass"); if (r() < 0.45) L.grass(x + 0.5, GY, z + 0.5, r() < 0.1 ? 3 : 0, 1); }
  L.animals.push({ type: "sheep", x: 27.5, z: 59.5, rot: 0.4, pen: [25, 58, 33, 61] });
  L.animals.push({ type: "sheep", x: 31.5, z: 60.2, rot: 2.4, pen: [25, 58, 33, 61] });
  for (let i = 0; i < 3; i++) L.animals.push({ type: "chicken", x: 58 + i * 1.5, z: 58 + (i % 2), rot: i, pen: [52, 57, 62, 62] });

  // ---------------- lampposts, banners, torches
  for (const [x, z] of [[36, 40], [48, 40], [36, 55], [48, 55], [23, 46], [61, 46], [42, 61]]) L.lamppost(x, GY, z, 4);
  L.banner(37, GY, 28, "orange"); L.banner(46, GY, 28, "blue");
  L.banner(23, GY, 30, "blue"); L.banner(62, GY, 30, "orange");
  L.banner(23, GY, 62, "orange", 0); L.banner(62, GY, 62, "blue", 0);
  for (const x of [28, 33, 51, 56]) L.torch(x, GY + 2, 27, [0, -1]);
  L.torch(21, GY + 2, 33, [-1, 0]); L.torch(21, GY + 2, 44, [-1, 0]);

  // ---------------- edges: trees and bushes, grass everywhere grassy
  const treeSpots = [[67, 30, 2], [72, 33, 1], [77, 38, 2], [79, 50, 1], [76, 56, 2], [70, 60, 1], [64, 67, 2], [56, 69, 1], [47, 71, 2], [36, 68, 1], [28, 70, 2], [18, 66, 1], [10, 63, 2], [14, 70, 1], [5, 56, 2], [6, 44, 1], [74, 66, 2], [80, 62, 1], [60, 74, 1], [40, 76, 2], [22, 75, 1], [80, 44, 2]];
  for (const [x, z, s] of treeSpots) { const y = L.vox.ground(x, z); if (y < GY + 3) L.tree(x, y, z, s === 2 && (x + z) % 3 === 0 ? 3 : s, (x + z) % 5 === 0); }
  for (let z = 0; z < D; z++) for (let x = 0; x < W; x++) {
    const y = L.vox.ground(x, z) - 1; if (y < 0) continue;
    if (L.vox.get(x, y, z) === B.grass && !L.get(x, y + 1, z) && !L.blocked[z * W + x]) {
      const inside = x >= 23 && x <= 63 && z >= 29 && z <= 63;
      const k = r() * (inside ? 0.92 : 1);
      if (k < 0.62) L.grass(x + 0.5, y + 1, z + 0.5, k < 0.05 ? 3 : k < 0.09 ? 4 : k < 0.12 ? 5 : k < 0.3 ? 2 : k < 0.45 ? 1 : 0, 0.85 + r() * 0.5);
    }
    if (!(x >= 23 && x <= 63 && z >= 29 && z <= 63) && r() < 0.012 && L.vox.get(x, y, z) === B.grass && !L.get(x, y + 1, z)) L.bush(x, y + 1, z);
  }

  // students strolling (ambient)
  L.npcs.push({ type: "student", seed: 3, x: 38.5, z: 31.5, rot: 0.2, interact: "student", label: "Chat with a student", path: [[38.5, 31.5], [47.5, 31.5]] });
  L.npcs.push({ type: "student", seed: 8, x: 56.5, z: 45.5, rot: 2, interact: "student", label: "Chat with a student", path: [[56.5, 44.5], [56.5, 48.5]] });

  L.finish();
  L.kind = "camp"; L.time = null; L.spawn = { x: 42.5, z: 55.5 };
  L.bounds = [23.4, 29.6, 63.6, 63.4];
  L.farMtn = buildFarMountains(); L.group.add(L.farMtn);
  return L;
}

// Distant Franklin Mountains: a jagged ridge line with several peaks (the tallest, left of
// center, nods to North Franklin Peak), built as coarse voxels at 3x scale behind the camp.
const hash = (n) => { const s = Math.sin(n * 127.1 + 311.7) * 43758.5453; return s - Math.floor(s); };
export function buildFarMountains() {
  const w = 110, h = 44, d = 34;
  const v = new Voxels(w, h, d);
  const peaks = [[4, 22, 3.5], [11, 27, 3], [17, 34, 3], [22, 30, 2.5], [27, 40, 3.2], [33, 31, 2.6], [38, 35, 3], [45, 26, 3.5], [53, 31, 3.5], [62, 24, 4], [72, 29, 4], [84, 23, 5], [96, 27, 5], [106, 20, 5]];
  const crest = new Float32Array(w);
  for (let x = 0; x < w; x++) {
    let c = 9 + Math.sin(x * 0.19) * 2;
    for (const [px, ph, pw] of peaks) c = Math.max(c, ph * Math.exp(-((x - px) ** 2) / (2 * pw * pw)) + (ph * 0.45) * Math.exp(-((x - px) ** 2) / (12 * pw * pw)));
    crest[x] = c * 0.47 + (hash(x) - 0.5) * 2.0 + (hash(x * 0.37 | 0) - 0.5) * 1.6; // jagged
  }
  for (let z = 0; z < d; z++) for (let x = 0; x < w; x++) {
    const zc = 12 + Math.sin(x * 0.07) * 2; // crest line; the long gentle slope faces camp (+z)
    const dz = z - zc;
    const t = dz < 0 ? -dz / 8 : dz / 18; // steep back side, long front slope
    const prof = Math.max(0, 1 - Math.pow(t, 1.15));
    // terraces and gullies give the front faces definition
    const gully = 1 - 0.18 * Math.max(0, Math.sin(x * 0.55 + z * 0.15));
    const hh = Math.max(1, Math.round(crest[x] * prof * gully + (dz > 0 ? 1.5 : 0) + (hash(x * 31 + z * 7) - 0.5) * 1.2));
    for (let y = 0; y < Math.min(h, hh); y++) {
      const top = y === hh - 1;
      const strata = (y + ((x * 3 + z) >> 3)) % 4 === 0;
      v.set(x, y, z, top ? (y > 26 ? B.rock_dark : y < 4 ? B.leaves_dry : (hash(x + y * 9 + z * 3) < 0.25 ? B.gravel : B.rock)) : (strata ? B.rock_dark : y < 2 ? B.sandstone : B.rock));
    }
  }
  v.computeLight();
  const { opaque } = v.buildMesh();
  // own material: no fog (we fake aerial haze with a cool tint) so the range reads at distance
  const mat = voxelMaterialUnique(); mat.fog = false; mat.color.setRGB(0.8, 0.86, 1.0);
  const haze = { value: new THREE.Color(0xd8c8a8) }, hazeK = { value: 0.4 };
  const prev = mat.onBeforeCompile;
  mat.onBeforeCompile = (sh, r) => { prev.call(mat, sh, r); sh.uniforms.uHaze = haze; sh.uniforms.uHazeK = hazeK; sh.fragmentShader = sh.fragmentShader.replace("#include <common>", "#include <common>\nuniform vec3 uHaze;\nuniform float uHazeK;").replace("#include <fog_fragment>", "gl_FragColor.rgb = mix(gl_FragColor.rgb, uHaze, uHazeK);"); };
  mat.customProgramCacheKey = () => "farmtn";
  const m = new THREE.Mesh(opaque, mat);
  m.scale.setScalar(3); m.position.set(-140, -18, -112); m.userData.haze = haze; m.userData.hazeK = hazeK;
  m.receiveShadow = false; m.castShadow = false;
  return m;
}

// The star on the mountain (a nod to the lit star on the Franklins): a 5-point outline of
// small glowing cubes. It is placed by casting a ray from the default camp camera through a
// spot left of center just above the rooflines, so it sits on the slope facing camp.
export function makeStar(R = 6.5, step = 0.8, cube = 0.6) {
  const pts = [];
  const corners = [];
  for (let i = 0; i < 10; i++) { const a = Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? R * 0.4 : R; corners.push([Math.cos(a) * rr, Math.sin(a) * rr]); }
  for (let i = 0; i < 10; i++) {
    const [x0, y0] = corners[i], [x1, y1] = corners[(i + 1) % 10];
    const n = Math.max(1, Math.round(Math.hypot(x1 - x0, y1 - y0) / step));
    for (let k = 0; k < n; k++) pts.push([x0 + (x1 - x0) * k / n, y0 + (y1 - y0) * k / n]);
  }
  const mat = new THREE.MeshBasicMaterial({ color: new THREE.Color(2.0, 1.8, 1.25), fog: false });
  const geo = new THREE.BoxGeometry(cube, cube, cube * 0.5);
  const inst = new THREE.InstancedMesh(geo, mat, pts.length);
  const m4 = new THREE.Matrix4();
  pts.forEach(([x, y], i) => { m4.makeTranslation(x, y, 0); inst.setMatrixAt(i, m4); });
  inst.instanceMatrix.needsUpdate = true;
  const g = new THREE.Group(); g.add(inst);
  // soft glow card behind the lights, very faint so it never blows out
  const cv = document.createElement("canvas"); cv.width = cv.height = 64; const cx = cv.getContext("2d");
  const gr = cx.createRadialGradient(32, 32, 2, 32, 32, 32); gr.addColorStop(0, "rgba(255,230,170,0.55)"); gr.addColorStop(1, "rgba(255,230,170,0)"); cx.fillStyle = gr; cx.fillRect(0, 0, 64, 64);
  const glowMat = new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(cv), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false, opacity: 0.25 });
  const glow = new THREE.Mesh(new THREE.PlaneGeometry(R * 3.2, R * 3.2), glowMat); glow.position.z = -0.4; g.add(glow);
  g.userData = { mat, glowMat, count: pts.length };
  return g;
}
export function placeStar(L, camera) {
  if (!L.farMtn) return null;
  L.farMtn.updateMatrixWorld(true);
  const ray = new THREE.Raycaster();
  ray.setFromCamera(new THREE.Vector2(-0.15, 0.7), camera);
  const hit = ray.intersectObject(L.farMtn, false)[0];
  if (!hit) return null;
  const star = makeStar();
  const p = hit.point.clone().addScaledVector(ray.ray.direction, -3);
  star.position.copy(p);
  // face the camp, stay upright, then lean back a little to lie on the slope
  star.lookAt(camera.position.x, p.y, camera.position.z);
  star.rotateX(-0.22);
  L.group.add(star); L.star = star;
  return star;
}
