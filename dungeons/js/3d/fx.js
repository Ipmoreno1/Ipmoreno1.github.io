// Particles, flames, foliage, loot beams, banners, health bars.
import * as THREE from "three";
import { patchTorchLight, WORLD_UNIFORMS } from "./voxel.js";
import { rng } from "../util.js";

// ---------------------------------------------------------------- particles (square pixels)
export class Particles {
  constructor(max = 1600, additive = true) {
    this.max = max; this.n = 0;
    this.p = new Float32Array(max * 3); this.c = new Float32Array(max * 3); this.s = new Float32Array(max); this.a = new Float32Array(max);
    this.v = new Float32Array(max * 3); this.life = new Float32Array(max); this.life0 = new Float32Array(max); this.g = new Float32Array(max); this.drag = new Float32Array(max); this.size0 = new Float32Array(max); this.kind = new Uint8Array(max);
    const geo = new THREE.BufferGeometry();
    this.attrP = new THREE.BufferAttribute(this.p, 3).setUsage(THREE.DynamicDrawUsage);
    this.attrC = new THREE.BufferAttribute(this.c, 3).setUsage(THREE.DynamicDrawUsage);
    this.attrS = new THREE.BufferAttribute(this.s, 1).setUsage(THREE.DynamicDrawUsage);
    this.attrA = new THREE.BufferAttribute(this.a, 1).setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute("position", this.attrP); geo.setAttribute("color", this.attrC); geo.setAttribute("size", this.attrS); geo.setAttribute("alpha", this.attrA);
    geo.setDrawRange(0, 0);
    const mat = new THREE.ShaderMaterial({
      uniforms: { uScale: { value: 400 } },
      vertexShader: `attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vC; varying float vA; uniform float uScale;
        void main(){ vC = color; vA = alpha; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = size * uScale / -mv.z; gl_Position = projectionMatrix * mv; }`,
      fragmentShader: `varying vec3 vC; varying float vA; void main(){ vec2 q = abs(gl_PointCoord - 0.5); float m = max(q.x, q.y); if (m > 0.5) discard; float edge = smoothstep(0.5, 0.3, m); gl_FragColor = vec4(vC * vA * (0.7 + 0.3 * edge), ${additive ? "1.0" : "vA"}); }`,
      transparent: true, depthWrite: false, blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    this.points = new THREE.Points(geo, mat); this.points.frustumCulled = false; this.points.renderOrder = 5;
    this.mat = mat;
  }
  spawn(o) {
    if (this.n >= this.max) return;
    const i = this.n++;
    this.p[i * 3] = o.x; this.p[i * 3 + 1] = o.y; this.p[i * 3 + 2] = o.z;
    this.v[i * 3] = o.vx || 0; this.v[i * 3 + 1] = o.vy || 0; this.v[i * 3 + 2] = o.vz || 0;
    const col = o.color || [1, 0.6, 0.2];
    this.c[i * 3] = col[0]; this.c[i * 3 + 1] = col[1]; this.c[i * 3 + 2] = col[2];
    this.life[i] = this.life0[i] = o.life || 1; this.size0[i] = o.size || 0.12; this.g[i] = o.grav ?? 0; this.drag[i] = o.drag ?? 0.5; this.kind[i] = o.kind || 0;
  }
  burst(x, y, z, color, n = 10, speed = 2.5, size = 0.12, life = 0.7, grav = -6) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, u = Math.random();
      this.spawn({ x, y, z, vx: Math.cos(a) * speed * (0.4 + u), vy: speed * (0.6 + Math.random()), vz: Math.sin(a) * speed * (0.4 + u), color, size: size * (0.6 + Math.random() * 0.8), life: life * (0.6 + Math.random() * 0.6), grav, drag: 1.5 });
    }
  }
  update(dt, t) {
    let j = 0;
    for (let i = 0; i < this.n; i++) {
      this.life[i] -= dt;
      if (this.life[i] <= 0) continue;
      if (j !== i) {
        for (let k = 0; k < 3; k++) { this.p[j * 3 + k] = this.p[i * 3 + k]; this.v[j * 3 + k] = this.v[i * 3 + k]; this.c[j * 3 + k] = this.c[i * 3 + k]; }
        this.life[j] = this.life[i]; this.life0[j] = this.life0[i]; this.size0[j] = this.size0[i]; this.g[j] = this.g[i]; this.drag[j] = this.drag[i]; this.kind[j] = this.kind[i];
      }
      const dr = Math.max(0, 1 - this.drag[j] * dt);
      this.v[j * 3] *= dr; this.v[j * 3 + 2] *= dr; this.v[j * 3 + 1] = this.v[j * 3 + 1] * dr + this.g[j] * dt;
      if (this.kind[j] === 1) { // firefly wander
        this.v[j * 3] += Math.sin(t * 2 + j) * dt * 0.8; this.v[j * 3 + 2] += Math.cos(t * 1.7 + j * 1.3) * dt * 0.8; this.v[j * 3 + 1] += Math.sin(t * 3 + j * 0.7) * dt * 0.3;
      }
      this.p[j * 3] += this.v[j * 3] * dt; this.p[j * 3 + 1] += this.v[j * 3 + 1] * dt; this.p[j * 3 + 2] += this.v[j * 3 + 2] * dt;
      const k = this.life[j] / this.life0[j];
      const fadeIn = Math.min(1, (1 - k) * 6);
      this.a[j] = Math.min(1, k * 1.6) * fadeIn * (this.kind[j] === 1 ? 0.6 + 0.4 * Math.sin(t * 6 + j) : 1);
      this.s[j] = this.size0[j] * (0.5 + 0.5 * k);
      j++;
    }
    this.n = j;
    this.points.geometry.setDrawRange(0, this.n);
    this.attrP.needsUpdate = true; this.attrC.needsUpdate = true; this.attrS.needsUpdate = true; this.attrA.needsUpdate = true;
  }
  clear() { this.n = 0; this.points.geometry.setDrawRange(0, 0); }
}

// ---------------------------------------------------------------- flames as instanced glowing cubes
export class Flames {
  constructor(max = 400) {
    const geo = new THREE.BoxGeometry(1, 1, 1);
    const mat = new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: true });
    this.mesh = new THREE.InstancedMesh(geo, mat, max); this.mesh.count = 0; this.mesh.frustumCulled = false;
    this.mesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(max * 3), 3);
    this.list = []; this.m = new THREE.Matrix4(); this.q = new THREE.Quaternion(); this.v = new THREE.Vector3(); this.sc = new THREE.Vector3(); this.col = new THREE.Color();
  }
  // add a flame at x,y,z with base size; big = campfire style
  add(x, y, z, size = 0.16, big = false, hue = "fire") { this.list.push({ x, y, z, size, big, hue, seed: Math.random() * 100 }); }
  update(t) {
    let n = 0; const M = this.mesh;
    const pal = { fire: [[3.2, 1.4, 0.35], [3.6, 2.6, 0.9], [2.6, 0.7, 0.15]], blue: [[0.6, 1.8, 3.6], [1.4, 2.8, 3.8], [0.3, 1.0, 3.0]], green: [[0.8, 3.2, 1.2], [1.8, 3.6, 2.0], [0.4, 2.2, 0.7]] };
    for (const f of this.list) {
      const P = pal[f.hue] || pal.fire;
      const layers = f.big ? 6 : 3;
      for (let i = 0; i < layers; i++) {
        if (n >= M.instanceMatrix.count) break;
        const ph = t * (7 + i * 2) + f.seed + i * 1.7;
        const s = f.size * (1 - i * (f.big ? 0.12 : 0.24)) * (0.85 + Math.sin(ph) * 0.15);
        const ox = f.big ? Math.sin(f.seed * 3 + i * 2.1) * f.size * 0.6 : 0, oz = f.big ? Math.cos(f.seed * 5 + i * 1.3) * f.size * 0.6 : 0;
        this.v.set(f.x + ox + Math.sin(ph * 1.3) * s * 0.12, f.y + i * f.size * (f.big ? 0.42 : 0.55) + Math.abs(Math.sin(ph)) * s * 0.15, f.z + oz);
        this.q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), ph * 0.2);
        this.sc.set(s, s * 1.2, s);
        this.m.compose(this.v, this.q, this.sc); M.setMatrixAt(n, this.m);
        const c = P[i % 3]; this.col.setRGB(c[0], c[1], c[2]); M.setColorAt(n, this.col);
        n++;
      }
    }
    M.count = n; M.instanceMatrix.needsUpdate = true; if (M.instanceColor) M.instanceColor.needsUpdate = true;
  }
}

// ---------------------------------------------------------------- foliage (cross quads, one draw call)
let foliageAtlas = null;
function buildFoliageAtlas() {
  if (foliageAtlas) return foliageAtlas;
  const c = document.createElement("canvas"); c.width = 128; c.height = 16; const ctx = c.getContext("2d");
  const r = rng(77);
  const px = (sx, x, y, col) => { ctx.fillStyle = col; ctx.fillRect(sx * 16 + x, y, 1, 1); };
  const greens = ["#4f9a2c", "#5eae36", "#3e8424", "#6cbe40", "#2f6e1c"];
  // 0,1: short grass, 2: tall grass
  for (const [s, hMax, n] of [[0, 8, 9], [1, 11, 11], [2, 15, 13]]) for (let i = 0; i < n; i++) {
    const x = 1 + ((r() * 14) | 0); const h = 3 + ((r() * hMax) | 0); let cx = x;
    for (let y = 15; y > 15 - h; y--) { px(s, cx, y, greens[(r() * greens.length) | 0]); if (r() < 0.25) cx += r() < 0.5 ? -1 : 1; cx = Math.max(0, Math.min(15, cx)); }
  }
  // 3: orange flower, 4: blue flower, 5: white/yellow flower, 6: desert shrub, 7: fern
  const flower = (s, petal, center) => { for (let y = 9; y < 16; y++) px(s, 7, y, "#3e8424"); px(s, 6, 12, "#4f9a2c"); px(s, 8, 13, "#4f9a2c"); for (const [dx, dy] of [[0, -1], [1, 0], [-1, 0], [0, 1], [1, -1], [-1, -1]]) px(s, 7 + dx, 7 + dy, petal); px(s, 7, 7, center); };
  flower(3, "#f07a1a", "#ffd040"); flower(4, "#3a6ad8", "#ffffff"); flower(5, "#f4f4ee", "#f0c020");
  for (let i = 0; i < 18; i++) { const x = 2 + ((r() * 12) | 0), y = 6 + ((r() * 10) | 0); px(6, x, y, ["#8a7a3a", "#6a5a2a", "#9a8a4a"][(r() * 3) | 0]); }
  for (let y = 4; y < 16; y++) { const w = Math.round((16 - y) * 0.4); px(7, 7 - w, y, "#3e8424"); px(7, 8 + w, y, "#3e8424"); px(7, 7, y, "#2f6e1c"); }
  const t = new THREE.CanvasTexture(c); t.magFilter = THREE.NearestFilter; t.minFilter = THREE.NearestFilter; t.generateMipmaps = false; t.colorSpace = THREE.SRGBColorSpace;
  foliageAtlas = t; return t;
}

export function buildFoliage(items, vox) {
  // items: [{x,y,z,kind,scale}]
  const pos = [], uv = [], nor = [], lit = [], col = [], idx = [];
  for (const it of items) {
    const s = it.scale || 1, h = 0.9 * s, w = 0.5 * s;
    const u0 = it.kind / 8 + 0.001, u1 = (it.kind + 1) / 8 - 0.001;
    const L = vox ? vox.lightAt(it.x, it.y + 0.2, it.z) : 0;
    const tint = it.tint || 1;
    for (const a of [Math.PI / 4 + (it.rot || 0), -Math.PI / 4 + (it.rot || 0)]) {
      const dx = Math.cos(a) * w, dz = Math.sin(a) * w; const b = pos.length / 3;
      pos.push(it.x - dx, it.y, it.z - dz, it.x + dx, it.y, it.z + dz, it.x + dx, it.y + h, it.z + dz, it.x - dx, it.y + h, it.z - dz);
      uv.push(u0, 0, u1, 0, u1, 1, u0, 1);
      for (let k = 0; k < 4; k++) { nor.push(0, 1, 0); lit.push(L); const g = k < 2 ? 0.7 : 1; col.push(g * tint, g * tint, g * tint); }
      idx.push(b, b + 1, b + 2, b, b + 2, b + 3);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  geo.setAttribute("normal", new THREE.Float32BufferAttribute(nor, 3));
  geo.setAttribute("aLight", new THREE.Float32BufferAttribute(lit, 1));
  geo.setAttribute("color", new THREE.Float32BufferAttribute(col, 3));
  geo.setIndex(idx);
  const mat = new THREE.MeshLambertMaterial({ map: buildFoliageAtlas(), alphaTest: 0.5, side: THREE.DoubleSide, vertexColors: true });
  patchTorchLight(mat);
  const base = mat.onBeforeCompile;
  mat.onBeforeCompile = (sh) => {
    base(sh);
    sh.uniforms.uTime = WORLD_UNIFORMS.uTime;
    sh.vertexShader = sh.vertexShader.replace("#include <common>", "#include <common>\nuniform float uTime;")
      .replace("#include <begin_vertex>", "#include <begin_vertex>\nfloat sway = uv.y * 0.12; transformed.x += sin(uTime * 1.8 + position.x * 0.7 + position.z * 0.4) * sway; transformed.z += cos(uTime * 1.4 + position.x * 0.3) * sway * 0.6;");
  };
  mat.customProgramCacheKey = () => "foliage";
  const m = new THREE.Mesh(geo, mat); m.receiveShadow = true;
  return m;
}

// ---------------------------------------------------------------- loot beam
export function makeLootBeam(color = "#ff9a2a") {
  const g = new THREE.Group();
  const mk = (r0, r1, h, a) => {
    const geo = new THREE.CylinderGeometry(r0, r1, h, 12, 1, true); geo.translate(0, h / 2, 0);
    const mat = new THREE.ShaderMaterial({
      uniforms: { uColor: { value: new THREE.Color(color).multiplyScalar(1.4) }, uA: { value: a }, uTime: WORLD_UNIFORMS.uTime },
      vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: `uniform vec3 uColor; uniform float uA; uniform float uTime; varying vec2 vUv; void main(){ float f = pow(1.0 - vUv.y, 1.6); float s = 0.75 + 0.25 * sin(vUv.x * 40.0 + uTime * 3.0 - vUv.y * 8.0); gl_FragColor = vec4(uColor * f * s * uA, 1.0); }`,
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
    });
    return new THREE.Mesh(geo, mat);
  };
  g.add(mk(0.5, 0.7, 16, 0.35), mk(0.2, 0.32, 18, 0.6));
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.6, 1.1, 24), new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(2), transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
  ring.rotation.x = -Math.PI / 2; ring.position.y = 0.05; g.add(ring);
  g.userData.ring = ring;
  g.renderOrder = 4;
  return g;
}

// ---------------------------------------------------------------- banners (waving cloth)
export function makeBanner(kind = "orange") {
  const c = document.createElement("canvas"); c.width = 16; c.height = 32; const ctx = c.getContext("2d");
  const base = kind === "orange" ? "#e8701a" : kind === "blue" ? "#1f4a8a" : "#e8e4d8";
  const ink = kind === "orange" ? "#1f4a8a" : kind === "blue" ? "#ef7a12" : "#8a2418";
  ctx.fillStyle = base; ctx.fillRect(0, 0, 16, 32);
  ctx.fillStyle = "rgba(0,0,0,0.12)"; for (let y = 0; y < 32; y += 2) ctx.fillRect(0, y, 16, 1);
  ctx.fillStyle = "#e8c56b"; ctx.fillRect(0, 0, 16, 2); ctx.fillRect(0, 30, 16, 2);
  // pickaxe emblem
  ctx.fillStyle = ink; for (let i = 0; i < 9; i++) ctx.fillRect(4 + i, 18 - i, 2, 2);
  ctx.fillRect(3, 8, 10, 2); ctx.fillRect(2, 10, 2, 2); ctx.fillRect(12, 10, 2, 2);
  for (let x = 0; x < 16; x += 4) { ctx.fillStyle = base; ctx.fillRect(x, 30, 2, 2); }
  const tex = new THREE.CanvasTexture(c); tex.magFilter = THREE.NearestFilter; tex.minFilter = THREE.NearestFilter; tex.colorSpace = THREE.SRGBColorSpace;
  const geo = new THREE.PlaneGeometry(0.9, 1.8, 1, 8); geo.translate(0, -0.9, 0);
  const mat = new THREE.MeshLambertMaterial({ map: tex, side: THREE.DoubleSide });
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uTime = WORLD_UNIFORMS.uTime;
    sh.vertexShader = sh.vertexShader.replace("#include <common>", "#include <common>\nuniform float uTime;").replace("#include <begin_vertex>", "#include <begin_vertex>\nfloat k = -position.y / 1.8; transformed.z += sin(uTime * 2.2 + position.y * 2.0 + modelMatrix[3].x) * 0.12 * k;");
  };
  const m = new THREE.Mesh(geo, mat); m.castShadow = true;
  return m;
}

// ---------------------------------------------------------------- health bar (billboard)
export function makeHPBar() {
  const g = new THREE.Group();
  const bg = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.12), new THREE.MeshBasicMaterial({ color: 0x120404, depthTest: false, transparent: true, opacity: 0.85 }));
  const fgGeo = new THREE.PlaneGeometry(0.84, 0.07); fgGeo.translate(0.42, 0, 0);
  const fg = new THREE.Mesh(fgGeo, new THREE.MeshBasicMaterial({ color: new THREE.Color(2.2, 0.2, 0.15), depthTest: false, transparent: true }));
  fg.position.set(-0.42, 0, 0.001);
  g.add(bg, fg); g.renderOrder = 10; bg.renderOrder = 10; fg.renderOrder = 11;
  g.userData.fg = fg;
  return g;
}

// ground decal ring (interaction marker / mission node)
export function makeRing(color = "#ffd060", r0 = 0.5, r1 = 0.7) {
  const m = new THREE.Mesh(new THREE.RingGeometry(r0, r1, 4, 1), new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(1.6), transparent: true, opacity: 0.7, depthWrite: false, blending: THREE.AdditiveBlending }));
  m.rotation.x = -Math.PI / 2; m.rotation.z = Math.PI / 4;
  return m;
}
