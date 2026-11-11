// Level builder: voxels + deferred props + foliage + light sources + collision.
import * as THREE from "three";
import { Voxels, BoxBuilder, voxelMaterial, voxelMaterialUnique, waterMaterial } from "./voxel.js";
import { B } from "./blocks.js";
import { buildFoliage, makeBanner } from "./fx.js";
import { rng } from "../util.js";

export const GY = 4; // walkable ground height (solid 0..3)

export class LevelBuilder {
  constructor(w, h, d, seed = 1) {
    this.vox = new Voxels(w, h, d);
    this.w = w; this.h = h; this.d = d;
    this.r = rng(seed);
    this.props = []; // deferred (bb) => void
    this.foliage = [];
    this.lights = []; // dynamic light sources for the point-light pool
    this.flames = [];
    this.emitters = [];
    this.blocked = new Uint8Array(w * d);
    this.banners = [];
    this.extra = new THREE.Group();
    this.interacts = [];
    this.npcs = [];
    this.animals = [];
  }
  set(x, y, z, name) { this.vox.set(x, y, z, typeof name === "number" ? name : B[name]); }
  get(x, y, z) { return this.vox.get(x, y, z); }
  box(x0, y0, z0, x1, y1, z1, name) { this.vox.box(x0, y0, z0, x1, y1, z1, typeof name === "number" ? name : B[name]); }
  block(x, z) { x |= 0; z |= 0; if (x >= 0 && z >= 0 && x < this.w && z < this.d) this.blocked[z * this.w + x] = 1; }
  blockRect(x0, z0, x1, z1) { for (let z = Math.floor(z0); z <= Math.floor(z1); z++) for (let x = Math.floor(x0); x <= Math.floor(x1); x++) this.block(x, z); }
  prop(fn) { this.props.push(fn); }
  // a roof that fades out when the hero walks under it
  canopy(x0, z0, x1, z1, y, a, b, pat = (x, z) => (x + z) % 4 < 2) {
    (this.canopies ||= []).push({ x0, z0, x1, z1, h: y - GY + 1, fn: (bb) => { for (let z = z0; z <= z1; z++) for (let x = x0; x <= x1; x++) bb.box(x, y, z, x + 1, y + 1, z + 1, pat(x, z) ? a : b); } });
  }
  grass(x, y, z, kind, scale = 1) { this.foliage.push({ x, y, z, kind, scale, rot: this.r() * 0.6 }); }
  light(x, y, z, level = 14, color = 0xff9a40, intensity = 6, range = 9) {
    this.vox.addLight(x, y, z, level);
    this.lights.push({ x: x + 0.5, y: y + 0.5, z: z + 0.5, color, intensity, range });
  }

  // ------------------------------------------------ decor helpers
  torch(x, y, z, wall = null) {
    // standing torch at block (x,y,z) on top of floor y
    const cx = x + 0.5, cz = z + 0.5;
    if (wall) {
      const [dx, dz] = wall; const px = cx + dx * 0.38, pz = cz + dz * 0.38;
      this.prop((bb) => { bb.box(px - 0.06, y + 0.2, pz - 0.06, px + 0.06, y + 0.75, pz + 0.06, "log", { light: 1 }); bb.box(px - 0.09, y + 0.72, pz - 0.09, px + 0.09, y + 0.8, pz + 0.09, "iron", { light: 1 }); });
      this.flames.push([px, y + 0.88, pz, 0.15, false]);
      this.light(x, y, z, 13, 0xff9040, 5, 8);
    } else {
      this.prop((bb) => { bb.box(cx - 0.07, y, cz - 0.07, cx + 0.07, y + 0.85, cz + 0.07, "log", { light: 1 }); });
      this.flames.push([cx, y + 0.93, cz, 0.16, false]);
      this.light(x, y, z, 13, 0xff9040, 5, 8);
      this.block(x, z);
    }
    this.emitters.push({ type: "ember", x: cx, y: y + 1.05, z: cz, rate: 0.6 });
  }
  lamppost(x, y, z, h = 4) {
    const cx = x + 0.5, cz = z + 0.5;
    this.prop((bb) => {
      bb.box(cx - 0.2, y, cz - 0.2, cx + 0.2, y + 0.4, cz + 0.2, "stonebrick");
      bb.box(cx - 0.09, y + 0.4, cz - 0.09, cx + 0.09, y + h - 0.3, cz + 0.09, "planks_dark");
      bb.box(cx - 0.35, y + h - 0.35, cz - 0.08, cx + 0.35, y + h - 0.22, cz + 0.08, "planks_dark");
    });
    this.vox.addLight(x, y + h - 1, z, 14);
    this.prop((bb) => {
      bb.box(cx - 0.26, y + h - 0.95, cz - 0.26, cx + 0.26, y + h - 0.35, cz + 0.26, "lantern", { light: 1, noAO: true });
      bb.box(cx - 0.32, y + h - 0.35, cz - 0.32, cx + 0.32, y + h - 0.25, cz + 0.32, "planks_dark", { light: 0.9 });
    });
    this.lights.push({ x: cx, y: y + h - 0.5, z: cz, color: 0xffb050, intensity: 7, range: 10 });
    this.block(x, z);
  }
  // layered voxel canopy: stacked rounded slabs that shrink upward, ragged edges, a few
  // hanging leaves, and a side lobe on big trees. fade=true puts the leaves in their own
  // mesh that turns see-through when it would hide the hero.
  tree(x, y, z, size = 1, dry = false, fade = false) {
    const r = this.r;
    const big = size >= 3, hgt = (big ? 7 : size > 1 ? 5 : 3) + ((r() * 2) | 0);
    for (let i = 0; i < hgt; i++) { this.set(x, y + i, z, "log"); if (big) { this.set(x + 1, y + i, z, "log"); this.set(x, y + i, z + 1, "log"); this.set(x + 1, y + i, z + 1, "log"); } }
    if (big) { this.set(x - 1, y, z, "log"); this.set(x + 2, y, z + 1, "log"); this.set(x, y, z + 2, "log"); }
    const leaf = dry ? "leaves_dry" : "leaves", alt = dry ? "leaves" : "leaves_dry";
    const cx = big ? x + 0.5 : x, cz = big ? z + 0.5 : z;
    const R0 = big ? 4.6 : size > 1 ? 3.4 : 2.4;
    const cells = new Map();
    const put = (X, Y, Z) => { const k = X + "," + Y + "," + Z; if (!cells.has(k) && !this.get(X, Y, Z)) cells.set(k, [X, Y, Z]); };
    const slab = (ox, oz, yy, R) => {
      const ri = Math.ceil(R);
      for (let dz = -ri; dz <= ri; dz++) for (let dx = -ri; dx <= ri; dx++) {
        const d = Math.max(Math.abs(dx + 0.5 - (ox % 1)), Math.abs(dz + 0.5 - (oz % 1))) * 0.55 + Math.hypot(dx, dz) * 0.55;
        if (d > R + (r() - 0.5) * 0.7) continue;
        put(Math.floor(ox) + dx, yy, Math.floor(oz) + dz);
      }
    };
    const top = y + hgt;
    const layers = big ? 5 : size > 1 ? 4 : 3;
    for (let L = 0; L < layers; L++) {
      const t = L / (layers - 1);
      const R = R0 * (L === 0 ? 0.82 : 1 - t * 0.62);
      slab(cx, cz, top - 2 + L, R);
    }
    if (size > 1) { const a = r() * 6.28; slab(cx + Math.cos(a) * R0 * 0.8, cz + Math.sin(a) * R0 * 0.8, top - 1, R0 * 0.55); slab(cx + Math.cos(a) * R0 * 0.8, cz + Math.sin(a) * R0 * 0.8, top, R0 * 0.35); }
    // hanging leaves along the underside
    for (const [X, Y, Z] of [...cells.values()]) if (Y === top - 2 && r() < 0.14) put(X, Y - 1, Z);
    const list = [...cells.values()].map(([X, Y, Z]) => [X, Y, Z, r() < 0.14 ? alt : leaf]);
    if (fade) {
      let x0 = 1e9, z0 = 1e9, x1 = -1e9, z1 = -1e9;
      for (const c of list) { x0 = Math.min(x0, c[0]); z0 = Math.min(z0, c[2]); x1 = Math.max(x1, c[0]); z1 = Math.max(z1, c[2]); }
      (this.canopies ||= []).push({ x0, z0, x1, z1, h: top + layers - y, tree: true, fn: (bb) => { for (const [X, Y, Z, id] of list) bb.box(X, Y, Z, X + 1, Y + 1, Z + 1, id); } });
    } else for (const [X, Y, Z, id] of list) this.set(X, Y, Z, id);
    this.block(x, z); if (big) { this.block(x + 1, z); this.block(x, z + 1); this.block(x + 1, z + 1); }
  }
  bush(x, y, z) { this.set(x, y, z, "leaves"); if (this.r() < 0.5) this.set(x + 1, y, z, "leaves"); this.block(x, z); }
  barrel(x, y, z) { this.prop((bb) => bb.box(x + 0.12, y, z + 0.12, x + 0.88, y + 0.95, z + 0.88, "barrel")); this.block(x, z); }
  crate(x, y, z, s = 0.8) { const o = (1 - s) / 2; this.prop((bb) => bb.box(x + o, y, z + o, x + 1 - o, y + s, z + 1 - o, "crate")); this.block(x, z); }
  bench(x, y, z, len = 3, alongX = true) {
    this.prop((bb) => {
      if (alongX) { bb.box(x, y + 0.3, z + 0.25, x + len, y + 0.45, z + 0.75, "planks"); bb.box(x + 0.1, y, z + 0.35, x + 0.3, y + 0.3, z + 0.65, "planks_dark"); bb.box(x + len - 0.3, y, z + 0.35, x + len - 0.1, y + 0.3, z + 0.65, "planks_dark"); }
      else { bb.box(x + 0.25, y + 0.3, z, x + 0.75, y + 0.45, z + len, "planks"); bb.box(x + 0.35, y, z + 0.1, x + 0.65, y + 0.3, z + 0.3, "planks_dark"); bb.box(x + 0.35, y, z + len - 0.3, x + 0.65, y + 0.3, z + len - 0.1, "planks_dark"); }
    });
    for (let i = 0; i < len; i++) alongX ? this.block(x + i, z) : this.block(x, z + i);
  }
  table(x, y, z, w = 2, d = 1, top = "planks") {
    this.prop((bb) => {
      bb.box(x + 0.05, y + 0.8, z + 0.05, x + w - 0.05, y + 0.95, z + d - 0.05, top);
      for (const [lx, lz] of [[x + 0.1, z + 0.1], [x + w - 0.25, z + 0.1], [x + 0.1, z + d - 0.25], [x + w - 0.25, z + d - 0.25]]) bb.box(lx, y, lz, lx + 0.15, y + 0.8, lz + 0.15, "planks_dark");
    });
    this.blockRect(x, z, x + w - 1, z + d - 1);
  }
  fence(x0, z0, x1, z1, y) {
    const pts = []; const dx = Math.sign(x1 - x0), dz = Math.sign(z1 - z0); const n = Math.max(Math.abs(x1 - x0), Math.abs(z1 - z0));
    for (let i = 0; i <= n; i++) pts.push([x0 + dx * i, z0 + dz * i]);
    this.prop((bb) => {
      for (const [x, z] of pts) bb.box(x + 0.38, y, z + 0.38, x + 0.62, y + 1.0, z + 0.62, "planks");
      for (let i = 0; i < pts.length - 1; i++) {
        const [ax, az] = pts[i], [bx, bz] = pts[i + 1];
        for (const hy of [0.4, 0.75]) bb.box(Math.min(ax, bx) + 0.45, y + hy, Math.min(az, bz) + 0.45, Math.max(ax, bx) + 0.55, y + hy + 0.12, Math.max(az, bz) + 0.55, "planks");
      }
    });
    for (const [x, z] of pts) this.block(x, z);
  }
  banner(x, y, z, kind, rotY = 0, pole = true) {
    const cx = x + 0.5, cz = z + 0.5;
    if (pole) {
      this.prop((bb) => { bb.box(cx - 0.07, y, cz - 0.07, cx + 0.07, y + 3.4, cz + 0.07, "planks_dark"); bb.box(cx - 0.55, y + 3.2, cz - 0.06, cx + 0.55, y + 3.32, cz + 0.06, "planks_dark"); });
      this.block(x, z);
    }
    this.banners.push({ x: cx, y: pole ? y + 3.2 : y, z: cz + (pole ? 0.09 : 0), kind, rotY });
  }
  campfire(x, y, z) {
    const cx = x + 0.5, cz = z + 0.5;
    this.prop((bb) => {
      for (let i = 0; i < 4; i++) { const a = i * Math.PI / 2; const ox = Math.cos(a) * 0.62, oz = Math.sin(a) * 0.62; bb.box(cx + ox - 0.22, y, cz + oz - 0.22, cx + ox + 0.22, y + 0.25, cz + oz + 0.22, "cobble"); }
      bb.box(cx - 0.6, y, cz - 0.12, cx + 0.6, y + 0.22, cz + 0.12, "log"); bb.box(cx - 0.12, y + 0.12, cz - 0.6, cx + 0.12, y + 0.34, cz + 0.6, "log");
    });
    this.set(x, y - 1, z, "magma");
    this.flames.push([cx, y + 0.3, cz, 0.42, true]);
    this.vox.addLight(x, y, z, 15);
    this.lights.push({ x: cx, y: y + 1.1, z: cz, color: 0xff8030, intensity: 14, range: 13 });
    this.emitters.push({ type: "fire", x: cx, y: y + 0.6, z: cz, rate: 14 });
    this.emitters.push({ type: "smoke", x: cx, y: y + 1.6, z: cz, rate: 2 });
    this.block(x, z);
  }
  chestSpot(x, z) { this.block(x, z); }
  // Bhutanese-inspired campus building: white battered walls, dark window frames, red-brown kemar band, wide stepped roof, gold crown.
  building(x0, z0, x1, z1, H, opts = {}) {
    const y0 = opts.y ?? GY;
    const wall = opts.wall || "plaster";
    this.box(x0, y0, z0, x1, y0 + H - 1, z1, wall);
    this.box(x0, y0, z0, x1, y0, z1, "plaster_base");
    // kemar band
    this.box(x0, y0 + H - 2, z0, x1, y0 + H - 1, z1, "kemar");
    // windows on all sides: every 3 blocks, on floors every 4 blocks
    const floors = Math.max(1, Math.floor((H - 3) / 4));
    for (let f = 0; f < floors; f++) {
      const wy = y0 + 2 + f * 4;
      for (let x = x0 + 2; x <= x1 - 2; x += 3) for (const z of [z0, z1]) { this.set(x, wy, z, "window"); this.set(x, wy + 1, z, "window"); this.set(x, wy - 1, z, "planks_dark"); this.set(x, wy + 2, z, "planks_dark"); }
      for (let z = z0 + 2; z <= z1 - 2; z += 3) for (const x of [x0, x1]) { this.set(x, wy, z, "window"); this.set(x, wy + 1, z, "window"); this.set(x, wy - 1, z, "planks_dark"); this.set(x, wy + 2, z, "planks_dark"); }
    }
    // timber bands between floors, protruding stone plinth and timber pilasters for depth
    for (let f = 1; f <= floors; f++) {
      const by = y0 + 1 + f * 4; if (by >= y0 + H - 2) break;
      for (let x = x0; x <= x1; x++) for (const z of [z0, z1]) this.set(x, by, z, "planks_dark");
      for (let z = z0; z <= z1; z++) for (const x of [x0, x1]) this.set(x, by, z, "planks_dark");
    }
    for (let x = x0 - 1; x <= x1 + 1; x++) for (const z of [z0 - 1, z1 + 1]) if (!this.get(x, y0, z)) this.set(x, y0, z, "stonebrick");
    for (let z = z0; z <= z1; z++) for (const x of [x0 - 1, x1 + 1]) if (!this.get(x, y0, z)) this.set(x, y0, z, "stonebrick");
    const pil = (x, z) => { for (let yy = y0 + 1; yy < y0 + H - 2; yy++) this.set(x, yy, z, "log"); this.set(x, y0 + H - 2, z, "planks_dark"); };
    for (let x = x0 + 1; x <= x1 - 1; x += 3) if ((x - x0 - 1) % 6 === 0) { const nearDoor = opts.door && opts.door[0] === "s" && x >= opts.door[1] - 1 && x <= opts.door[1] + (opts.doorW || 3); if (!nearDoor) pil(x, z1 + 1); pil(x, z0 - 1); }
    for (const [x, z] of [[x0 - 1, z0 - 1], [x1 + 1, z0 - 1], [x0 - 1, z1 + 1], [x1 + 1, z1 + 1]]) pil(x, z);
    // eave
    const ov = Math.max(opts.overhang ?? 1, 2);
    this.box(x0 - ov, y0 + H, z0 - ov, x1 + ov, y0 + H, z1 + ov, "planks_dark");
    // stepped hip roof
    let lx0 = x0 - ov, lx1 = x1 + ov, lz0 = z0 - ov, lz1 = z1 + ov, y = y0 + H + 1;
    const roof = opts.roof || "roof";
    const maxL = opts.roofLayers ?? 4;
    for (let L = 0; L < maxL && lx1 - lx0 > 2 && lz1 - lz0 > 2; L++) {
      // ring only (interior filled at the end)
      this.box(lx0, y, lz0, lx1, y, lz1, roof);
      lx0++; lx1--; lz0++; lz1--; y++;
    }
    // raised clerestory + gold crown
    const cx = ((x0 + x1) / 2) | 0, cz = ((z0 + z1) / 2) | 0;
    if (opts.crown !== false) {
      this.box(cx - 1, y, cz - 1, cx + 1, y + 1, cz + 1, "plaster"); this.box(cx - 1, y + 1, cz - 1, cx + 1, y + 1, cz + 1, "kemar");
      this.box(cx - 2, y + 2, cz - 2, cx + 2, y + 2, cz + 2, roof); this.box(cx - 1, y + 3, cz - 1, cx + 1, y + 3, cz + 1, roof);
      this.set(cx, y + 4, cz, "gold"); this.set(cx, y + 5, cz, "gold");
    }
    // door on the requested side
    if (opts.door) {
      const [side, pos] = opts.door; const dw = opts.doorW || 3;
      const put = (x, z) => { for (let yy = y0; yy < y0 + 4; yy++) this.set(x, yy, z, yy === y0 + 3 ? "planks_orange" : "planks_dark"); };
      for (let i = 0; i < dw; i++) { if (side === "s") put(pos + i, z1); if (side === "n") put(pos + i, z0); if (side === "e") put(x1, pos + i); if (side === "w") put(x0, pos + i); }
      // door torches
      if (side === "s") { this.torch(pos - 1, y0 + 2, z1 + 1, [0, -1]); this.torch(pos + dw, y0 + 2, z1 + 1, [0, -1]); }
      if (side === "e") { this.torch(x1 + 1, y0 + 2, pos - 1, [-1, 0]); this.torch(x1 + 1, y0 + 2, pos + dw, [-1, 0]); }
    }
    for (let z = z0 - ov; z <= z1 + ov; z++) for (let x = x0 - ov; x <= x1 + ov; x++) this.block(x, z);
  }

  // ------------------------------------------------ finalize
  finish(opts = {}) {
    const vox = this.vox;
    vox.computeLight();
    const group = new THREE.Group();
    const { opaque, water } = vox.buildMesh();
    const terrain = new THREE.Mesh(opaque, voxelMaterial());
    terrain.castShadow = true; terrain.receiveShadow = true; group.add(terrain);
    if (water) { const wm = new THREE.Mesh(water, waterMaterial()); wm.receiveShadow = true; group.add(wm); }
    const bb = new BoxBuilder(vox);
    for (const fn of this.props) fn(bb);
    const pg = bb.geometry();
    if (pg) { const pm = new THREE.Mesh(pg, voxelMaterial()); pm.castShadow = true; pm.receiveShadow = true; group.add(pm); }
    this.fades = [];
    for (const c of this.canopies || []) {
      const cb = new BoxBuilder(vox); c.fn(cb);
      const mat = voxelMaterialUnique(); mat.transparent = true;
      const m = new THREE.Mesh(cb.geometry(), mat); m.castShadow = true; m.receiveShadow = true; group.add(m);
      this.fades.push({ mesh: m, mat, rect: [c.x0 - 0.3, c.z0 - 0.3, c.x1 + 1.3, c.z1 + 1.3], cx: (c.x0 + c.x1 + 1) / 2, cz: (c.z0 + c.z1 + 1) / 2, rad: Math.max(c.x1 - c.x0 + 1, c.z1 - c.z0 + 1) / 2, h: c.h || 5, tree: !!c.tree, k: 1 });
    }
    if (this.foliage.length) group.add(buildFoliage(this.foliage, vox));
    for (const b of this.banners) { const m = makeBanner(b.kind); m.position.set(b.x, b.y, b.z); m.rotation.y = b.rotY; group.add(m); }
    group.add(this.extra);
    // walk heights
    const floor = new Int16Array(this.w * this.d);
    for (let z = 0; z < this.d; z++) for (let x = 0; x < this.w; x++) floor[z * this.w + x] = this.blocked[z * this.w + x] ? 99 : vox.ground(x, z);
    this.floor = floor;
    this.group = group;
    return this;
  }
}

// Collision helpers for any built level
export function floorAt(L, x, z) {
  const xi = Math.floor(x), zi = Math.floor(z);
  if (xi < 0 || zi < 0 || xi >= L.w || zi >= L.d) return 99;
  return L.floor[zi * L.w + xi];
}
export function canStand(L, x, z, curY, rad = 0.28) {
  if (L.bounds && (x < L.bounds[0] || z < L.bounds[1] || x > L.bounds[2] || z > L.bounds[3])) return false;
  for (const [ox, oz] of [[-rad, -rad], [rad, -rad], [-rad, rad], [rad, rad]]) {
    const f = floorAt(L, x + ox, z + oz);
    if (f >= 99 || f - curY > 1.05) return false;
  }
  return true;
}
export function standY(L, x, z) {
  let m = 0; for (const [ox, oz] of [[-0.2, -0.2], [0.2, -0.2], [-0.2, 0.2], [0.2, 0.2]]) { const f = floorAt(L, x + ox, z + oz); if (f < 99) m = Math.max(m, f); }
  return m;
}
