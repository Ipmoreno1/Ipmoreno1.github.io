// Voxel grid, light propagation, greedy-free face mesher with baked AO + block light.
import * as THREE from "three";
import { buildAtlas, tileUV, BLOCKS, B } from "./blocks.js";

// Face table: origin corner, right vector, up vector (normal = r x u)
const FACES = [
  { n: [1, 0, 0], o: [1, 0, 1], r: [0, 0, -1], u: [0, 1, 0], kind: "side", shade: 0.86 },
  { n: [-1, 0, 0], o: [0, 0, 0], r: [0, 0, 1], u: [0, 1, 0], kind: "side", shade: 0.86 },
  { n: [0, 1, 0], o: [0, 1, 1], r: [1, 0, 0], u: [0, 0, -1], kind: "top", shade: 1 },
  { n: [0, -1, 0], o: [0, 0, 0], r: [1, 0, 0], u: [0, 0, 1], kind: "bottom", shade: 0.6 },
  { n: [0, 0, 1], o: [0, 0, 1], r: [1, 0, 0], u: [0, 1, 0], kind: "side", shade: 0.92 },
  { n: [0, 0, -1], o: [1, 0, 0], r: [-1, 0, 0], u: [0, 1, 0], kind: "side", shade: 0.8 },
];
const AO_CURVE = [0.42, 0.62, 0.8, 1.0];

const hash3 = (x, y, z) => { let h = (x * 374761393 + y * 668265263 + z * 2147483647) | 0; h = (h ^ (h >>> 13)) * 1274126177; return ((h ^ (h >>> 16)) >>> 0) / 4294967296; };

export class Voxels {
  constructor(w, h, d) {
    this.w = w; this.h = h; this.d = d;
    this.data = new Uint8Array(w * h * d);
    this.light = new Uint8Array(w * h * d);
    this.extraLights = [];
    this.tint = null; // optional fn(x,y,z,id) -> [r,g,b]
  }
  idx(x, y, z) { return (y * this.d + z) * this.w + x; }
  inb(x, y, z) { return x >= 0 && y >= 0 && z >= 0 && x < this.w && y < this.h && z < this.d; }
  get(x, y, z) { return this.inb(x, y, z) ? this.data[this.idx(x, y, z)] : 0; }
  set(x, y, z, id) { if (this.inb(x, y, z)) this.data[this.idx(x, y, z)] = id; }
  box(x0, y0, z0, x1, y1, z1, id) {
    for (let y = Math.min(y0, y1); y <= Math.max(y0, y1); y++) for (let z = Math.min(z0, z1); z <= Math.max(z0, z1); z++) for (let x = Math.min(x0, x1); x <= Math.max(x0, x1); x++) this.set(x, y, z, id);
  }
  opaque(x, y, z) { const id = this.get(x, y, z); return id > 0 && !BLOCKS[id].liquid; }
  // Height of the first air cell above the contiguous solid column (walkable floor).
  ground(x, z) {
    if (x < 0 || z < 0 || x >= this.w || z >= this.d) return 99;
    let y = 0; while (y < this.h && this.opaque(x, y, z)) y++;
    return y;
  }
  topSolid(x, z) { for (let y = this.h - 1; y >= 0; y--) if (this.opaque(x, y, z)) return y + 1; return 0; }
  addLight(x, y, z, level) { this.extraLights.push([x | 0, y | 0, z | 0, level]); }
  computeLight() {
    const L = this.light; L.fill(0);
    const q = [];
    const push = (x, y, z, lv) => { if (!this.inb(x, y, z)) return; const i = this.idx(x, y, z); if (L[i] >= lv) return; L[i] = lv; q.push(x, y, z); };
    for (let y = 0; y < this.h; y++) for (let z = 0; z < this.d; z++) for (let x = 0; x < this.w; x++) {
      const id = this.data[this.idx(x, y, z)]; if (!id) continue; const lv = BLOCKS[id].light; if (lv) { L[this.idx(x, y, z)] = lv; q.push(x, y, z); }
    }
    for (const [x, y, z, lv] of this.extraLights) push(x, y, z, lv);
    let h = 0;
    while (h < q.length) {
      const x = q[h++], y = q[h++], z = q[h++]; const lv = L[this.idx(x, y, z)] - 1; if (lv <= 0) continue;
      for (const [dx, dy, dz] of [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]]) {
        const nx = x + dx, ny = y + dy, nz = z + dz; if (!this.inb(nx, ny, nz)) continue;
        if (this.opaque(nx, ny, nz)) continue;
        const i = this.idx(nx, ny, nz); if (L[i] < lv) { L[i] = lv; q.push(nx, ny, nz); }
      }
    }
  }
  lightAt(x, y, z) { x |= 0; y |= 0; z |= 0; return this.inb(x, y, z) ? this.light[this.idx(x, y, z)] / 15 : 0; }

  buildMesh() {
    const atlas = buildAtlas();
    const out = { pos: [], nor: [], uv: [], col: [], lit: [], idx: [] };
    const water = { pos: [], nor: [], uv: [], col: [], lit: [], idx: [] };
    const { w, h, d } = this;
    for (let y = 0; y < h; y++) for (let z = 0; z < d; z++) for (let x = 0; x < w; x++) {
      const id = this.data[this.idx(x, y, z)]; if (!id) continue;
      const bf = atlas.faces[id];
      if (bf.liquid) {
        if (this.get(x, y + 1, z) === 0) this.emitFace(water, x, y, z, FACES[2], bf.top, id, 0.84);
        continue;
      }
      for (const f of FACES) {
        const nx = x + f.n[0], ny = y + f.n[1], nz = z + f.n[2];
        if (this.opaque(nx, ny, nz)) continue;
        if (ny < 0) continue;
        const tile = f.kind === "top" ? bf.top : f.kind === "bottom" ? bf.bottom : bf.side;
        this.emitFace(out, x, y, z, f, tile, id);
      }
    }
    return { opaque: toGeometry(out), water: water.pos.length ? toGeometry(water) : null };
  }
  emitFace(g, x, y, z, f, tile, id, topH = 1) {
    const [u0, v0, u1, v1] = tileUV(tile);
    const base = g.pos.length / 3;
    const bx = x + f.n[0], by = y + f.n[1], bz = z + f.n[2];
    const ao = [], lt = [];
    const corners = [[0, 0], [1, 0], [1, 1], [0, 1]];
    const rnd = 0.93 + hash3(x, y, z) * 0.1;
    let tint = [rnd, rnd, rnd];
    if (this.tint) { const t = this.tint(x, y, z, id); if (t) tint = [t[0] * rnd, t[1] * rnd, t[2] * rnd]; }
    for (const [cr, cu] of corners) {
      const ro = cr ? f.r : f.r.map((v) => -v), uo = cu ? f.u : f.u.map((v) => -v);
      const s1 = this.opaque(bx + ro[0], by + ro[1], bz + ro[2]) ? 1 : 0;
      const s2 = this.opaque(bx + uo[0], by + uo[1], bz + uo[2]) ? 1 : 0;
      const c = this.opaque(bx + ro[0] + uo[0], by + ro[1] + uo[1], bz + ro[2] + uo[2]) ? 1 : 0;
      const a = s1 && s2 ? 0 : 3 - (s1 + s2 + c);
      ao.push(a);
      // smooth light: average of the non-opaque cells around this corner
      let sum = this.lightAt(bx, by, bz) * 15, n = 1;
      if (!s1) { sum += this.light[this.idx2(bx + ro[0], by + ro[1], bz + ro[2])] || 0; n++; }
      if (!s2) { sum += this.light[this.idx2(bx + uo[0], by + uo[1], bz + uo[2])] || 0; n++; }
      if (!c && !(s1 && s2)) { sum += this.light[this.idx2(bx + ro[0] + uo[0], by + ro[1] + uo[1], bz + ro[2] + uo[2])] || 0; n++; }
      lt.push(sum / n / 15);
      const px = x + f.o[0] + f.r[0] * cr + f.u[0] * cu;
      let py = y + f.o[1] + f.r[1] * cr + f.u[1] * cu;
      const pz = z + f.o[2] + f.r[2] * cr + f.u[2] * cu;
      if (topH !== 1 && py > y) py = y + topH;
      g.pos.push(px, py, pz); g.nor.push(...f.n);
      g.uv.push(cr ? u1 : u0, cu ? v1 : v0);
      const k = AO_CURVE[a] * f.shade;
      g.col.push(tint[0] * k, tint[1] * k, tint[2] * k);
    }
    for (const l of lt) g.lit.push(l);
    if (ao[0] + ao[2] < ao[1] + ao[3]) g.idx.push(base + 1, base + 2, base + 3, base + 1, base + 3, base);
    else g.idx.push(base, base + 1, base + 2, base, base + 2, base + 3);
  }
  idx2(x, y, z) { return this.inb(x, y, z) ? this.idx(x, y, z) : -1; }
}

export function toGeometry(g) {
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(g.pos, 3));
  geo.setAttribute("normal", new THREE.Float32BufferAttribute(g.nor, 3));
  geo.setAttribute("uv", new THREE.Float32BufferAttribute(g.uv, 2));
  geo.setAttribute("color", new THREE.Float32BufferAttribute(g.col, 3));
  geo.setAttribute("aLight", new THREE.Float32BufferAttribute(g.lit, 1));
  geo.setIndex(g.pos.length / 3 > 65535 ? new THREE.Uint32BufferAttribute(g.idx, 1) : new THREE.Uint16BufferAttribute(g.idx, 1));
  geo.computeBoundingSphere(); geo.computeBoundingBox();
  return geo;
}

// Free-form boxes (props, slabs, fences, furniture) sharing the block atlas.
export class BoxBuilder {
  constructor(vox) { this.vox = vox; this.g = { pos: [], nor: [], uv: [], col: [], lit: [], idx: [] }; }
  // tiles: block name or {top, side, bottom} block names; opts: {tint:[r,g,b], light, glow}
  box(x0, y0, z0, x1, y1, z1, tiles, opts = {}) {
    const atlas = buildAtlas();
    const bf = (n) => atlas.faces[B[n]];
    const t = typeof tiles === "string" ? { top: bf(tiles).top, side: bf(tiles).side, bottom: bf(tiles).bottom } : { top: bf(tiles.top).top, side: bf(tiles.side).side, bottom: bf(tiles.bottom || tiles.top).bottom };
    const sx = x1 - x0, sy = y1 - y0, sz = z1 - z0;
    const L = opts.light != null ? opts.light : this.vox ? Math.max(this.vox.lightAt((x0 + x1) / 2, y1 + 0.2, (z0 + z1) / 2), this.vox.lightAt((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2)) : 0;
    const tint = opts.tint || [1, 1, 1];
    for (const f of FACES) {
      if (opts.skip && opts.skip.includes(f.kind === "side" ? sideName(f) : f.kind)) continue;
      const tile = f.kind === "top" ? t.top : f.kind === "bottom" ? t.bottom : t.side;
      const [u0, v0, u1, v1] = tileUV(tile);
      const base = this.g.pos.length / 3;
      // face extents along r and u
      const ext = (vec) => Math.abs(vec[0]) * sx + Math.abs(vec[1]) * sy + Math.abs(vec[2]) * sz;
      const er = Math.min(1, ext(f.r)), eu = Math.min(1, ext(f.u));
      for (const [cr, cu] of [[0, 0], [1, 0], [1, 1], [0, 1]]) {
        const fx = f.o[0] + f.r[0] * cr + f.u[0] * cu, fy = f.o[1] + f.r[1] * cr + f.u[1] * cu, fz = f.o[2] + f.r[2] * cr + f.u[2] * cu;
        const px = x0 + fx * sx, py = y0 + fy * sy, pz = z0 + fz * sz;
        this.g.pos.push(px, py, pz); this.g.nor.push(...f.n);
        const uu = u0 + (u1 - u0) * (cr ? er : 0) + (opts.uoff || 0) * (u1 - u0);
        const vv = v0 + (v1 - v0) * (cu ? eu : 0);
        this.g.uv.push(Math.min(uu, u1), vv);
        const aoK = opts.noAO ? 1 : (fy < 0.5 ? 0.72 : 1);
        const k = f.shade * aoK;
        this.g.col.push(tint[0] * k, tint[1] * k, tint[2] * k);
        this.g.lit.push(L);
      }
      this.g.idx.push(base, base + 1, base + 2, base, base + 2, base + 3);
    }
  }
  geometry() { return this.g.pos.length ? toGeometry(this.g) : null; }
}
function sideName(f) { return f.n[0] === 1 ? "px" : f.n[0] === -1 ? "nx" : f.n[2] === 1 ? "pz" : "nz"; }

// Shared uniforms for baked torch light, wind and time.
export const WORLD_UNIFORMS = {
  uTorch: { value: new THREE.Color(1.0, 0.62, 0.28) },
  uTorchStrength: { value: 1.6 },
  uTime: { value: 0 },
  uEmissiveBoost: { value: 1 },
};

export function patchTorchLight(mat, perObject) {
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uTorch = WORLD_UNIFORMS.uTorch;
    sh.uniforms.uTorchStrength = WORLD_UNIFORMS.uTorchStrength;
    sh.uniforms.uEmissiveBoost = WORLD_UNIFORMS.uEmissiveBoost;
    if (perObject) sh.uniforms.uLocalLight = perObject;
    sh.vertexShader = sh.vertexShader
      .replace("#include <common>", `#include <common>\n${perObject ? "" : "attribute float aLight;"}\nvarying float vLight;`)
      .replace("#include <color_vertex>", `#include <color_vertex>\n${perObject ? "vLight = 0.0;" : "vLight = aLight;"}`);
    sh.fragmentShader = sh.fragmentShader
      .replace("#include <common>", `#include <common>\nvarying float vLight;\nuniform vec3 uTorch;\nuniform float uTorchStrength;\nuniform float uEmissiveBoost;\n${perObject ? "uniform float uLocalLight;" : ""}`)
      .replace("#include <emissivemap_fragment>", "#include <emissivemap_fragment>\ntotalEmissiveRadiance *= uEmissiveBoost;")
      .replace("#include <aomap_fragment>", `#include <aomap_fragment>\n{ float tl = ${perObject ? "uLocalLight" : "vLight"}; reflectedLight.indirectDiffuse += diffuseColor.rgb * uTorch * (tl * tl * (0.4 + 0.6 * tl)) * uTorchStrength; }`);
  };
  mat.customProgramCacheKey = () => (perObject ? "torch-obj" : "torch-vox");
  return mat;
}

let voxMat = null, waterMat = null;
export function voxelMaterial() {
  if (voxMat) return voxMat;
  const a = buildAtlas();
  voxMat = patchTorchLight(new THREE.MeshLambertMaterial({ map: a.map, emissiveMap: a.emissiveMap, emissive: new THREE.Color(1, 1, 1), emissiveIntensity: 1.2, vertexColors: true }));
  return voxMat;
}
// a separate instance (same atlas, same shader) for things that fade
export function voxelMaterialUnique() {
  const base = voxelMaterial();
  const m = patchTorchLight(new THREE.MeshLambertMaterial({ map: base.map, emissiveMap: base.emissiveMap, emissive: new THREE.Color(1, 1, 1), emissiveIntensity: 1.2, vertexColors: true }));
  return m;
}
export function waterMaterial() {
  if (waterMat) return waterMat;
  const a = buildAtlas();
  waterMat = new THREE.MeshLambertMaterial({ map: a.map, color: 0x9fd4ff, transparent: true, opacity: 0.78, vertexColors: true, emissive: 0x0a2a48, depthWrite: false });
  waterMat.onBeforeCompile = (sh) => {
    sh.uniforms.uTime = WORLD_UNIFORMS.uTime;
    sh.vertexShader = sh.vertexShader.replace("#include <common>", "#include <common>\nuniform float uTime;").replace("#include <begin_vertex>", "#include <begin_vertex>\ntransformed.y += sin(position.x * 1.7 + uTime * 1.6) * 0.03 + cos(position.z * 1.3 + uTime * 1.2) * 0.03;");
    sh.fragmentShader = sh.fragmentShader.replace("#include <common>", "#include <common>\nuniform float uTime;").replace("#include <map_fragment>", "#include <map_fragment>\n");
  };
  return waterMat;
}
