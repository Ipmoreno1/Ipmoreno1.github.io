// Mission levels: each UTEP landmark becomes a short voxel dungeon built from its ASCII layout.
import * as THREE from "three";
import { LevelBuilder, GY } from "./builder.js";
import { B } from "./blocks.js";
import { parseMap } from "../missions.js";

const S = 2;      // blocks per map cell
const M = 7;      // margin around the layout

// Per-mission look: floor/wall blocks, lighting, enemies, decor style
export const THEMES = {
  plaza: { floor: ["path", "stonebrick", "gravel"], accent: "carpet_orange", wall: "plaster", wallTop: "kemar", cap: "roof", outer: "rock", time: "dusk", enemies: ["blob", "raider"], decor: "courtyard", wallH: 4 },
  union: { floor: ["tile"], accent: "carpet_blue", wall: "bricks", wallTop: "planks_dark", cap: "planks_dark", outer: "stonebrick", time: "dungeon", enemies: ["raider"], decor: "hall", wallH: 4 },
  library: { floor: ["stonebrick", "mossy", "stonebrick", "stone"], accent: "carpet_blue", wall: "bookshelf", wallTop: "stonebrick", cap: "deepbrick", outer: "deepbrick", time: "dungeon", enemies: ["wisp"], decor: "library", wallH: 5, magic: "#7ac8ff" },
  ccsb: { floor: ["tile", "concrete"], accent: "carpet_blue", wall: "iron", wallTop: "terminal", cap: "iron", outer: "concrete", time: "cave", enemies: ["bug"], decor: "lab", wallH: 4, magic: "#6affd0" },
  engineering: { floor: ["cobble", "stonebrick", "gravel"], accent: "circuit", wall: "copper", wallTop: "circuit", cap: "iron", outer: "stone", time: "dungeon", enemies: ["bug", "wisp"], decor: "workshop", wallH: 4 },
  sunbowl: { floor: ["field"], accent: "field_line", wall: "seats_orange", wallTop: "seats_blue", cap: "concrete", outer: "rock", time: "day", enemies: ["raider"], decor: "stadium", wallH: 3, outdoor: true },
  museum: { floor: ["marble", "marble", "tile"], accent: "carpet_orange", wall: "plaster", wallTop: "kemar", cap: "planks_dark", outer: "plaster", time: "dungeon", enemies: ["wisp"], decor: "museum", wallH: 5 },
  haskins: { floor: ["planks"], accent: "planks_orange", wall: "seats_blue", wallTop: "seats_orange", cap: "concrete", outer: "concrete", time: "dungeon", enemies: ["raider", "blob"], decor: "arena", wallH: 3 },
  pick: { floor: ["gravel", "cobble", "stone"], accent: "path", wall: "stone", wallTop: "ore", cap: "rock_dark", outer: "rock_dark", time: "cave", enemies: ["bug", "blob"], decor: "mine", wallH: 5, magic: "#5ad0ff" },
  lhakhang: { floor: ["path", "path", "gravel"], accent: "gold", wall: "plaster", wallTop: "temple", cap: "roof_dark", outer: "rock", time: "night", enemies: ["blob"], decor: "temple", wallH: 4, outdoor: true },
};

// per-mission light palettes so each level has its own mood; torches stay warm accents
const MOODS = {
  plaza: { hemiSky: 0x9aa8e0, hemiGround: 0x4a3a30, hemiI: 0.85, torch: 0.85 },
  union: { hemiSky: 0x9aa6c8, hemiGround: 0x3a3028, hemiI: 0.85, sun: 0xdfe6ff, sunI: 0.9, fog: 0x1c1e26, torch: 0.6 },
  library: { hemiSky: 0x78b8c0, hemiGround: 0x18241f, hemiI: 1.0, sun: 0xbfe8ff, sunI: 0.95, fog: 0x0c1c1e, torch: 0.5, tint: [0.55, 0.9, 0.85] },
  ccsb: { hemiSky: 0x7ab8ff, hemiGround: 0x1a2840, hemiI: 1.0, sun: 0xa8d8ff, sunI: 1.0, fog: 0x0c1a2a, torch: 0.55, tint: [0.6, 0.85, 1.0] },
  engineering: { hemiSky: 0x8aa8d8, hemiGround: 0x22262e, hemiI: 0.95, sun: 0xc8d8ff, sunI: 1.1, fog: 0x141c28, torch: 0.55 },
  sunbowl: { hemiSky: 0xbfe0ff, hemiGround: 0x3a6a2a, hemiI: 1.0, sun: 0xfff0d0, sunI: 2.4, fog: 0xa8c8b0, torch: 0.3 },
  museum: { hemiSky: 0xc8ccd8, hemiGround: 0x48484c, hemiI: 1.0, sun: 0xf0f0ff, sunI: 1.0, fog: 0x22242a, torch: 0.5, tint: [1.0, 0.82, 0.6] },
  haskins: { hemiSky: 0x6a8ae0, hemiGround: 0x2a2440, hemiI: 0.9, sun: 0xd0dcff, sunI: 1.2, fog: 0x101830, torch: 0.6 },
  pick: { hemiSky: 0x5ab0c8, hemiGround: 0x1a2024, hemiI: 0.75, sun: 0x8ad8ff, sunI: 0.6, fog: 0x0a1a20, torch: 0.75 },
  lhakhang: { hemiSky: 0x5a7ad0, hemiGround: 0x1a1a30, hemiI: 0.65, sun: 0xa0b8ff, sunI: 0.85, fog: 0x0e1830, torch: 0.8 },
};

export function buildMission(m) {
  const map = parseMap(m);
  const T = THEMES[m.id] || THEMES.plaza;
  const W = map.w * S + M * 2, D = map.h * S + M * 2, H = 30;
  const L = new LevelBuilder(W, H, D, 100 + m.id.length * 7);
  const r = L.r;
  const cellOf = (x, z) => { const cx = Math.floor((x - M) / S), cz = Math.floor((z - M) / S); return (cx >= 0 && cz >= 0 && cx < map.w && cz < map.h) ? map.tiles[cz][cx] : null; };
  const isFloor = (cx, cz) => cx >= 0 && cz >= 0 && cx < map.w && cz < map.h && !map.tiles[cz][cx].solid;
  const isWallCell = (cx, cz) => !(cx >= 0 && cz >= 0 && cx < map.w && cz < map.h) || map.tiles[cz][cx].solid;
  const floorPick = (x, z) => T.floor[(Math.abs(x * 7 + z * 13 + ((x * z) % 5))) % T.floor.length];

  // ---------------- base + outer rock mass
  for (let z = 0; z < D; z++) for (let x = 0; x < W; x++) {
    const t = cellOf(x, z);
    for (let y = 0; y < GY - 1; y++) L.set(x, y, z, y < GY - 2 ? "stone" : "dirt");
    if (!t) {
      // outside the layout: rough rock/terrain, low toward the camera (+x, +z), high behind
      const behind = (z < M) || (x < M);
      const front = !behind;
      const n = Math.sin(x * 0.7) + Math.cos(z * 0.6) + Math.sin((x + z) * 0.3);
      let h = front ? 1 + (n > 1.2 ? 1 : 0) : 6 + Math.round(n * 1.5) + Math.min(6, (behind ? (z < M ? (M - z) : (M - x)) : 0));
      if (T.outdoor && front) h = 1;
      for (let y = GY - 1; y < GY - 1 + h; y++) L.set(x, y, z, y === GY - 2 + h ? (T.outdoor ? "grass" : T.outer) : T.outer === "rock" ? (y % 4 === 0 ? "rock_dark" : "rock") : T.outer);
      if (T.outdoor && front && r() < 0.5) L.grass(x + 0.5, GY - 1 + h, z + 0.5, r() < 0.1 ? 3 : r() < 0.4 ? 2 : 0, 1);
      continue;
    }
    L.set(x, GY - 1, z, t.floor === T.accent || t.ch === "+" ? T.accent : t.ch === "=" ? (T.decor === "stadium" ? "field_line" : "path") : floorPick(x, z));
    if (T.decor === "stadium" && !t.solid) L.set(x, GY - 1, z, (Math.floor((x - M) / 3) % 2) ? "field" : "grass");
  }
  // ---------------- walls (lower when they face the camera so the hero stays visible)
  for (let cz = 0; cz < map.h; cz++) for (let cx = 0; cx < map.w; cx++) {
    const t = map.tiles[cz][cx]; if (!t.solid || t.kind === "void" && false) continue;
    if (t.ch === "P") continue;
    const facingCam = isFloor(cx, cz - 1) || isFloor(cx - 1, cz) || (isFloor(cx - 1, cz - 1) && !isFloor(cx + 1, cz + 1));
    const behindFloor = isFloor(cx, cz + 1) || isFloor(cx + 1, cz);
    let h = T.wallH;
    if (facingCam && !behindFloor) h = 1;
    else if (facingCam && behindFloor) h = 2;
    if (t.kind === "void") h = 0;
    const x0 = M + cx * S, z0 = M + cz * S;
    for (let dz = 0; dz < S; dz++) for (let dx = 0; dx < S; dx++) {
      const x = x0 + dx, z = z0 + dz;
      if (t.kind === "void") { for (let y = 0; y < GY; y++) L.set(x, y, z, 0); L.set(x, 0, z, T.decor === "mine" ? "lava" : "deep"); continue; }
      for (let y = GY; y < GY + h; y++) {
        let id = T.wall;
        if (y === GY + h - 1 && h > 1) id = T.wallTop;
        if (T.decor === "library" && h > 2 && y === GY) id = "stonebrick";
        if (T.decor === "mine" && r() < 0.12) id = "ore";
        if (T.decor === "mine" && r() < 0.05) id = "crystal";
        if (T.decor === "stadium") id = (y - GY) % 2 ? "seats_blue" : "seats_orange";
        if (T.decor === "lab" && h > 2 && y === GY + 1 && (x + z) % 3 === 0) id = "terminal";
        if (T.decor === "workshop" && h > 2 && y === GY + 1 && (x + z) % 4 === 0) id = "circuit";
        if (T.decor === "museum" && h > 3 && y === GY + 2 && (x + z) % 5 === 0) id = (x % 2) ? "painting" : "photo";
        if (T.decor === "hall" && h > 3 && y === GY + 2 && (x + z) % 4 === 0) id = "window";
        if (T.decor === "courtyard" && h > 3 && y === GY + 2 && (x + z) % 4 === 0) id = "window";
        L.set(x, y, z, id);
      }
      if (h > 2 && T.cap) L.set(x, GY + h, z, T.cap);
    }
  }
  // ---------------- markers
  const C = (p) => ({ x: M + (p.x - 0.5) * S + S / 2, z: M + (p.y - 0.5) * S + S / 2 });
  const spawn = C(map.spawn);
  const chest = C(map.chest);
  // torches: wall-mounted if next to a wall, else standing braziers
  for (const t of map.torches) {
    const p = C(t); const cx = Math.floor(t.x), cz = Math.floor(t.y);
    const bx = Math.floor(p.x - 0.5), bz = Math.floor(p.z - 0.5);
    if (isWallCell(cx, cz - 1)) L.torch(bx, GY + 1, M + cz * S, [0, -1]);
    else if (isWallCell(cx - 1, cz)) L.torch(M + cx * S, GY + 1, bz, [-1, 0]);
    else brazier(L, bx, bz, T);
  }
  for (const pr of map.props) {
    const p = C(pr); const bx = Math.floor(p.x - 1), bz = Math.floor(p.z - 1);
    if (pr.type === "pillar") pillar(L, bx, bz, T);
    else if (pr.type === "barrel") { L.barrel(bx, GY, bz); L.barrel(bx + 1, GY, bz); if (r() < 0.6) L.crate(bx, GY, bz + 1); }
    else if (pr.type === "crate") { L.crate(bx, GY, bz); L.crate(bx + 1, GY, bz, 0.7); L.crate(bx, GY + 0, bz + 1, 0.9); }
    else if (pr.type === "banner") L.banner(bx, GY, bz, (bx + bz) % 2 ? "orange" : "blue");
  }
  // ---------------- theme decor scattered on free floor tiles along walls
  decorate(L, map, T, M, S, r, isFloor, spawn, chest);
  // chest dais
  const cbx = Math.floor(chest.x), cbz = Math.floor(chest.z);
  for (let dz = -2; dz <= 2; dz++) for (let dx = -2; dx <= 2; dx++) { const x = cbx + dx, z = cbz + dz; if (L.get(x, GY, z) || L.blocked[z * W + x]) continue; const d = Math.max(Math.abs(dx), Math.abs(dz)); L.set(x, GY - 1, z, d === 2 ? "stonebrick" : d === 1 ? (Math.abs(dx) === Math.abs(dz) ? "gold" : "deepbrick") : "glowstone"); }
  L.vox.addLight(cbx, GY, cbz, 10);
  L.block(cbx, cbz);
  // enemies
  L.enemySpots = map.enemies.map((e, i) => ({ ...C(e), type: T.enemies[i % T.enemies.length] }));
  // a couple of extra enemies near the chest guard for a final fight
  L.enemySpots.push({ x: chest.x + 2.2, z: chest.z - 1.6, type: T.enemies[0] });
  // thin maps get a few extra wanderers on open floor away from the spawn
  for (let tries = 0; L.enemySpots.length < 5 && tries < 400; tries++) {
    const cx = (r() * map.w) | 0, cz = (r() * map.h) | 0;
    if (!isFloor(cx, cz)) continue;
    const x = M + cx * S + 1, z = M + cz * S + 1;
    if (Math.hypot(x - spawn.x, z - spawn.z) < 9 || L.blocked[Math.floor(z) * W + Math.floor(x)] || L.get(Math.floor(x), GY, Math.floor(z))) continue;
    if (L.enemySpots.some((e) => Math.hypot(e.x - x, e.z - z) < 4)) continue;
    L.enemySpots.push({ x, z, type: T.enemies[L.enemySpots.length % T.enemies.length] });
  }

  L.finish();
  L.kind = "mission"; L.mission = m; L.theme = T; L.time = T.time; L.mood = MOODS[m.id];
  L.spawn = spawn; L.chest = chest;
  L.bounds = [M + 0.3, M + 0.3, M + map.w * S - 0.3, M + map.h * S - 0.3];
  return L;
}

function brazier(L, x, z, T) {
  const cx = x + 0.5, cz = z + 0.5;
  const fireHue = T.magic && T.decor !== "library" ? "blue" : "fire";
  L.prop((bb) => {
    bb.box(cx - 0.35, GY, cz - 0.35, cx + 0.35, GY + 0.2, cz + 0.35, "stonebrick");
    bb.box(cx - 0.15, GY + 0.2, cz - 0.15, cx + 0.15, GY + 0.8, cz + 0.15, "iron");
    bb.box(cx - 0.4, GY + 0.8, cz - 0.4, cx + 0.4, GY + 1.0, cz + 0.4, "iron");
  });
  L.flames.push([cx, GY + 1.05, cz, 0.24, false, fireHue]);
  L.vox.addLight(x, GY + 1, z, 14);
  L.lights.push({ x: cx, y: GY + 1.6, z: cz, color: fireHue === "blue" ? 0x60b0ff : 0xff8a30, intensity: 8, range: 10 });
  L.emitters.push({ type: fireHue === "blue" ? "magicup" : "ember", x: cx, y: GY + 1.2, z: cz, rate: 2.5, color: T.magic });
  L.block(x, z);
}
function pillar(L, x, z, T) {
  const id = T.decor === "library" ? "bookshelf" : T.decor === "mine" ? "log" : T.decor === "lab" ? "iron" : T.decor === "workshop" ? "copper" : T.decor === "museum" ? "marble" : T.decor === "temple" ? "temple" : "stonebrick";
  const h = 4;
  for (let y = GY; y < GY + h; y++) for (let dz = 0; dz < 2; dz++) for (let dx = 0; dx < 2; dx++) L.set(x + dx, y, z + dz, y === GY ? "stonebrick" : id);
  for (let dz = -1; dz < 3; dz++) for (let dx = -1; dx < 3; dx++) if (dx < 0 || dz < 0 || dx > 1 || dz > 1) { if (!L.get(x + dx, GY + h, z + dz)) L.set(x + dx, GY + h, z + dz, T.cap || "stonebrick"); }
  for (let dz = 0; dz < 2; dz++) for (let dx = 0; dx < 2; dx++) L.set(x + dx, GY + h, z + dz, T.cap || "stonebrick");
  if (T.decor === "lab") L.set(x, GY + h, z, "terminal");
  else { L.prop((bb) => { bb.box(x + 0.7, GY + h + 1, z + 0.7, x + 1.3, GY + h + 1.7, z + 1.3, "lantern", { light: 1, noAO: true }); }); L.vox.addLight(x, GY + h + 1, z, 12); }
  L.blockRect(x, z, x + 1, z + 1);
}

function decorate(L, map, T, M, S, r, isFloor, spawn, chest) {
  const near = (x, z, p, d) => Math.hypot(x - p.x, z - p.z) < d;
  const freeAt = (x, z) => !L.get(x, GY, z) && !L.blocked[z * L.w + x] && L.get(x, GY - 1, z) && !near(x + 0.5, z + 0.5, spawn, 3) && !near(x + 0.5, z + 0.5, chest, 3.2);
  const wallN = (x, z) => L.get(x, GY, z - 1) && L.get(x, GY + 1, z - 1);
  const wallW = (x, z) => L.get(x - 1, GY, z) && L.get(x - 1, GY + 1, z);
  for (let z = M; z < M + map.h * S; z++) for (let x = M; x < M + map.w * S; x++) {
    if (!freeAt(x, z)) continue;
    const k = r();
    const byWall = wallN(x, z) || wallW(x, z);
    switch (T.decor) {
      case "library":
        if (byWall && k < 0.18) { L.set(x, GY, z, "bookshelf"); if (r() < 0.5) L.set(x, GY + 1, z, "bookshelf"); L.block(x, z); }
        else if (!byWall && k < 0.012) { L.table(x, GY, z, 2, 1, "planks"); L.prop((bb) => bb.box(x + 0.3, GY + 0.95, z + 0.2, x + 0.8, GY + 1.08, z + 0.7, "bookshelf")); }
        else if (k < 0.03) L.emitters.push({ type: "magic", x: x + 0.5, y: GY + 0.5, z: z + 0.5, rate: 0.6, spread: 1.2, color: T.magic });
        break;
      case "lab":
        if (byWall && k < 0.14) { L.set(x, GY, z, "iron"); L.set(x, GY + 1, z, "terminal"); L.block(x, z); }
        else if (!byWall && k < 0.01) { L.table(x, GY, z, 2, 1, "iron"); L.prop((bb) => { bb.box(x + 0.5, GY + 0.95, z + 0.3, x + 1.3, GY + 1.5, z + 0.4, "terminal", { light: 1 }); }); L.vox.addLight(x, GY + 1, z, 8); }
        else if (k < 0.02) L.emitters.push({ type: "magic", x: x + 0.5, y: GY + 0.3, z: z + 0.5, rate: 0.5, spread: 1, color: T.magic });
        break;
      case "workshop":
        if (byWall && k < 0.12) { L.set(x, GY, z, k < 0.05 ? "copper" : "iron"); L.block(x, z); }
        else if (!byWall && k < 0.012) { L.set(x, GY, z, "magma"); L.block(x, z); L.emitters.push({ type: "spark", x: x + 0.5, y: GY + 1.1, z: z + 0.5, rate: 2 }); }
        else if (k < 0.04) L.set(x, GY - 1, z, "circuit");
        break;
      case "mine":
        if (byWall && k < 0.16) { L.set(x, GY, z, k < 0.06 ? "crystal" : "rock_dark"); L.block(x, z); }
        else if (!byWall && k < 0.01) { L.set(x, GY, z, "crystal"); L.block(x, z); }
        else if (k < 0.05) L.set(x, GY - 1, z, "gravel");
        if (k > 0.985) L.emitters.push({ type: "magic", x: x + 0.5, y: GY + 0.4, z: z + 0.5, rate: 0.5, spread: 1, color: T.magic });
        break;
      case "museum":
        if (!byWall && k < 0.012) { // display pedestal with glowing item
          L.prop((bb) => { bb.box(x + 0.15, GY, z + 0.15, x + 0.85, GY + 0.9, z + 0.85, "marble"); bb.box(x + 0.35, GY + 0.9, z + 0.35, x + 0.65, GY + 1.2, z + 0.65, k < 0.006 ? "gold" : "crystal", { light: 1 }); });
          L.vox.addLight(x, GY + 1, z, 9); L.block(x, z);
        } else if (byWall && k < 0.06) { // urn shaped like a prayer wheel
          L.prop((bb) => { bb.box(x + 0.2, GY, z + 0.2, x + 0.8, GY + 0.2, z + 0.8, "stonebrick"); bb.box(x + 0.25, GY + 0.2, z + 0.25, x + 0.75, GY + 1.1, z + 0.75, "temple"); bb.box(x + 0.2, GY + 1.1, z + 0.2, x + 0.8, GY + 1.25, z + 0.8, "gold"); });
          L.block(x, z);
        }
        break;
      case "stadium":
        if (k < 0.1) L.grass(x + 0.5, GY, z + 0.5, 0, 0.6);
        break;
      case "arena":
        if (byWall && k < 0.05) { L.prop((bb) => { bb.box(x + 0.1, GY, z + 0.1, x + 0.9, GY + 0.7, z + 0.9, "iron"); }); L.block(x, z); }
        if ((x + z) % 9 === 0) L.set(x, GY - 1, z, "planks_orange");
        break;
      case "hall":
        if (!byWall && k < 0.014) { L.table(x, GY, z, 1, 1, "wool_white"); L.prop((bb) => { bb.box(x + 0.35, GY + 0.95, z + 0.35, x + 0.65, GY + 1.25, z + 0.65, "lantern", { light: 1, noAO: true }); }); L.vox.addLight(x, GY + 1, z, 11); }
        else if (byWall && k < 0.05) { L.barrel(x, GY, z); }
        break;
      case "temple":
        if (byWall && k < 0.08) { L.prop((bb) => { bb.box(x + 0.25, GY, z + 0.25, x + 0.75, GY + 0.2, z + 0.75, "stonebrick"); bb.box(x + 0.3, GY + 0.2, z + 0.3, x + 0.7, GY + 1.2, z + 0.7, "temple"); bb.box(x + 0.25, GY + 1.2, z + 0.25, x + 0.75, GY + 1.3, z + 0.75, "gold"); }); L.block(x, z); L.wheels = (L.wheels || 0) + 1; }
        else if (k < 0.25 && L.get(x, GY - 1, z) === B.path) { L.set(x, GY - 1, z, "grass"); L.grass(x + 0.5, GY, z + 0.5, r() < 0.2 ? 3 : r() < 0.4 ? 5 : 0, 1); }
        else if (k > 0.99) L.emitters.push({ type: "firefly", x: x + 0.5, y: GY + 1, z: z + 0.5, rate: 0.3 });
        break;
      case "courtyard":
        if (k < 0.15 && L.get(x, GY - 1, z) !== B.carpet_orange) { L.set(x, GY - 1, z, "grass"); L.grass(x + 0.5, GY, z + 0.5, r() < 0.15 ? 3 : r() < 0.3 ? 4 : r() < 0.5 ? 2 : 0, 1); }
        else if (byWall && k > 0.97) { L.tree(x, GY, z, 1); }
        break;
    }
  }
  // stadium: scoreboard + light towers on the far side
  if (T.decor === "stadium") {
    const z0 = M - 4, x0 = M + Math.floor(map.w * S / 2) - 4;
    L.box(x0, GY + 4, z0, x0 + 8, GY + 8, z0, "scoreboard"); L.box(x0 - 1, GY + 3, z0, x0 + 9, GY + 3, z0, "concrete"); L.box(x0 + 3, GY, z0, x0 + 5, GY + 2, z0, "concrete");
    for (const tx of [M + 2, M + map.w * S - 3]) { for (let y = GY; y < GY + 9; y++) L.set(tx, y, M - 3, "iron"); L.box(tx - 1, GY + 9, M - 3, tx + 1, GY + 10, M - 3, "glowstone"); L.lights.push({ x: tx + 0.5, y: GY + 9, z: M - 1, color: 0xfff0d0, intensity: 10, range: 22 }); }
  }
  // engineering: rotating gears as meshes
  if (T.decor === "workshop" || T.decor === "lab") {
    L.gears = [];
    for (let i = 0; i < 3; i++) {
      const g = gearMesh(T.decor === "lab" ? "#5a6a7a" : "#b06a34");
      g.position.set(M + 3 + i * 9, GY + 3.2, M - 0.4); L.extra.add(g); L.gears.push({ g, s: i % 2 ? -0.8 : 1 });
    }
  }
}

function gearMesh(color) {
  const g = new THREE.Group();
  const mat = new THREE.MeshLambertMaterial({ color });
  const hub = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.6, 0.4), mat); g.add(hub);
  for (let i = 0; i < 8; i++) { const t = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.6, 0.4), mat); const a = i / 8 * Math.PI * 2; t.position.set(Math.cos(a) * 1.05, Math.sin(a) * 1.05, 0); t.rotation.z = a; g.add(t); }
  const c = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), new THREE.MeshBasicMaterial({ color: new THREE.Color(3, 1.4, 0.4) })); g.add(c);
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return g;
}
