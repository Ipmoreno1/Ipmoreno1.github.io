// Voxel characters built from textured cubes (original pixel skins painted at runtime).
import * as THREE from "three";
import { patchTorchLight } from "./voxel.js";
import { rng } from "../util.js";

const PX = 1 / 16;
const FACE_NAMES = ["left", "right", "top", "bottom", "front", "back"]; // BoxGeometry px,nx,py,ny,pz,nz (model faces +z)

const hexRGB = (h) => { const n = parseInt(h.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; };
const shadeHex = (h, f) => { const [r, g, b] = hexRGB(h); const c = (v) => Math.max(0, Math.min(255, Math.round(v * f))); return `rgb(${c(r)},${c(g)},${c(b)})`; };

class Skin {
  constructor(size = 128, seed = 1) {
    this.size = size; this.c = document.createElement("canvas"); this.c.width = this.c.height = size;
    this.ctx = this.c.getContext("2d"); this.ctx.imageSmoothingEnabled = false;
    this.sx = 0; this.sy = 0; this.rowH = 0; this.r = rng(seed);
    this.tex = null;
  }
  alloc(w, h) {
    if (this.sx + w > this.size) { this.sx = 0; this.sy += this.rowH; this.rowH = 0; }
    const r = { x: this.sx, y: this.sy, w, h }; this.sx += w; this.rowH = Math.max(this.rowH, h); return r;
  }
  texture() {
    if (!this.tex) { this.tex = new THREE.CanvasTexture(this.c); this.tex.magFilter = THREE.NearestFilter; this.tex.minFilter = THREE.NearestFilter; this.tex.generateMipmaps = false; this.tex.colorSpace = THREE.SRGBColorSpace; }
    return this.tex;
  }
}

// painter helper bound to one face region
function painterFor(skin, reg) {
  const ctx = skin.ctx, r = skin.r;
  const P = {
    w: reg.w, h: reg.h,
    px(x, y, c, f = 1) { if (x < 0 || y < 0 || x >= reg.w || y >= reg.h) return; ctx.fillStyle = f === 1 ? c : shadeHex(c, f); ctx.fillRect(reg.x + x, reg.y + y, 1, 1); },
    rect(x, y, w, h, c, jit = 0.08) { for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) P.px(x + i, y + j, c, 1 + (r() - 0.5) * jit); },
    fill(c, jit = 0.1) { P.rect(0, 0, reg.w, reg.h, c, jit); },
    hline(y, c, jit = 0.06) { P.rect(0, y, reg.w, 1, c, jit); },
    vline(x, c, jit = 0.06) { P.rect(x, 0, 1, reg.h, c, jit); },
    border(c) { P.hline(0, c); P.hline(reg.h - 1, c); P.vline(0, c); P.vline(reg.w - 1, c); },
    rnd: r,
  };
  return P;
}

// Build one textured cuboid. size in skin pixels; pivot offset moves geometry so the pivot is at the origin.
function cube(skin, w, h, d, paint, pivot = [0, 0, 0], inflate = 0) {
  const geo = new THREE.BoxGeometry((w + inflate) * PX, (h + inflate) * PX, (d + inflate) * PX);
  const dims = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]];
  const uv = geo.attributes.uv; const S = skin.size;
  for (let f = 0; f < 6; f++) {
    const [fw, fh] = dims[f];
    const reg = skin.alloc(fw, fh);
    const P = painterFor(skin, reg);
    paint(FACE_NAMES[f], P);
    for (let k = 0; k < 4; k++) {
      const i = f * 4 + k; const u = uv.getX(i), v = uv.getY(i);
      uv.setXY(i, (reg.x + u * fw) / S, 1 - (reg.y + (1 - v) * fh) / S);
    }
  }
  uv.needsUpdate = true;
  geo.translate(-pivot[0] * PX, -pivot[1] * PX, -pivot[2] * PX);
  return geo;
}

function makeMat(skin) {
  const light = { value: 0 };
  const mat = patchTorchLight(new THREE.MeshLambertMaterial({ map: skin.texture() }), light);
  mat.userData.light = light;
  return mat;
}
export const glowMat = (hex, k = 3) => { const c = new THREE.Color(hex); return new THREE.MeshBasicMaterial({ color: c.multiplyScalar(k), toneMapped: true }); };

function mesh(geo, mat, x = 0, y = 0, z = 0) { const m = new THREE.Mesh(geo, mat); m.position.set(x * PX, y * PX, z * PX); m.castShadow = true; m.receiveShadow = false; return m; }
function pivotGroup(x, y, z) { const g = new THREE.Group(); g.position.set(x * PX, y * PX, z * PX); return g; }

// ---------------------------------------------------------------- humanoid
// spec: { skin, hair, eyes, shirt, shirtTrim, pants, boots, belt, ... painters overrides }
function humanoid(spec, seed = 7) {
  const skin = new Skin(128, seed);
  const S = spec;
  const root = new THREE.Group();
  const body = new THREE.Group(); root.add(body);
  const mat = makeMat(skin);
  const parts = {};

  // legs (pivot at hip)
  const legPaint = (side) => (face, P) => {
    if (face === "top") return P.fill(S.pants);
    if (face === "bottom") return P.fill(S.boots, 0.05);
    P.fill(S.pants, 0.12);
    if (S.pantsDetail) S.pantsDetail(face, P, side);
    P.rect(0, P.h - 4, P.w, 4, S.boots, 0.1); P.hline(P.h - 4, S.bootsTop || shadeHex(S.boots, 1.25));
    if (face === "front") P.hline(P.h - 1, shadeHex(S.boots, 0.7));
  };
  const legL = pivotGroup(2, 12, 0), legR = pivotGroup(-2, 12, 0);
  legL.add(mesh(cube(skin, 4, 12, 4, legPaint("L"), [0, 6, 0]), mat, 0, 0, 0)); legR.add(mesh(cube(skin, 4, 12, 4, legPaint("R"), [0, 6, 0]), mat));
  body.add(legL, legR);

  // torso
  const torso = pivotGroup(0, 12, 0); body.add(torso);
  const torsoH = S.torsoH || 12;
  torso.add(mesh(cube(skin, 8, torsoH, 4, (face, P) => {
    P.fill(S.shirt, 0.12);
    if (face === "top" || face === "bottom") return;
    if (S.torsoDetail) S.torsoDetail(face, P);
    if (S.belt) { P.hline(P.h - 3, S.belt); P.hline(P.h - 2, shadeHex(S.belt, 0.8)); if (face === "front" && S.buckle) { P.px(3, P.h - 3, S.buckle); P.px(4, P.h - 3, S.buckle); } }
  }, [0, -torsoH / 2, 0]), mat));

  // arms (pivot at shoulder)
  const armPaint = (side) => (face, P) => {
    if (face === "top") return P.fill(S.sleeve || S.shirt);
    if (face === "bottom") return P.fill(S.hand || S.skin);
    P.fill(S.sleeve || S.shirt, 0.12);
    const sl = S.sleeveLen ?? 5;
    P.rect(0, sl, P.w, P.h - sl, S.arm || S.skin, 0.06);
    if (S.glove) P.rect(0, P.h - 5, P.w, 5, S.glove, 0.08);
    if (S.armDetail) S.armDetail(face, P, side);
    P.rect(0, P.h - 2, P.w, 2, S.hand || S.skin, 0.05);
  };
  const armL = pivotGroup(6, 22, 0), armR = pivotGroup(-6, 22, 0);
  armL.add(mesh(cube(skin, 4, 12, 4, armPaint("L"), [0, 4, 0]), mat));
  armR.add(mesh(cube(skin, 4, 12, 4, armPaint("R"), [0, 4, 0]), mat));
  torso.add(armL, armR); armL.position.set(6 * PX, 10 * PX, 0); armR.position.set(-6 * PX, 10 * PX, 0);

  // head (pivot at neck)
  const head = pivotGroup(0, torsoH, 0); torso.add(head);
  head.add(mesh(cube(skin, 8, 8, 8, (face, P) => {
    P.fill(S.skin, 0.06);
    if (S.headPaint) return S.headPaint(face, P);
    const hair = S.hair;
    if (face === "top") return P.fill(hair, 0.15);
    if (face === "bottom") return;
    if (face === "back") { P.fill(hair, 0.15); return; }
    if (face === "left" || face === "right") { P.rect(0, 0, 8, 3, hair, 0.15); if (face === "left") P.rect(0, 0, 3, 6, hair, 0.15); else P.rect(5, 0, 3, 6, hair, 0.15); P.px(face === "left" ? 4 : 3, 4, shadeHex(S.skin, 0.85)); return; }
    // front face
    P.rect(0, 0, 8, 2, hair, 0.15); P.px(0, 2, hair); P.px(7, 2, hair); if (S.fringe) P.rect(1, 2, 3, 1, hair);
    const eb = S.brow || shadeHex(hair, 0.8);
    P.px(1, 3, eb); P.px(2, 3, eb); P.px(5, 3, eb); P.px(6, 3, eb);
    P.px(1, 4, "#ffffff"); P.px(2, 4, S.eyes); P.px(5, 4, S.eyes); P.px(6, 4, "#ffffff");
    P.px(3, 5, shadeHex(S.skin, 0.88)); P.px(4, 5, shadeHex(S.skin, 0.88));
    P.px(3, 6, shadeHex(S.skin, 0.62)); P.px(4, 6, shadeHex(S.skin, 0.62));
    if (S.beard) { P.rect(0, 5, 8, 3, S.beard, 0.15); P.rect(3, 6, 2, 1, shadeHex(S.beard, 0.6)); P.px(3, 5, shadeHex(S.skin, 0.88)); P.px(4, 5, shadeHex(S.skin, 0.88)); }
    if (S.mustache) { P.rect(1, 6, 6, 1, S.mustache, 0.1); P.px(0, 7, S.mustache); P.px(7, 7, S.mustache); }
    if (S.glasses) { for (const x of [1, 5]) { P.px(x - 0, 3, S.glasses); P.px(x + 1, 3, S.glasses); } P.px(3, 4, S.glasses); P.px(4, 4, S.glasses); }
  }, [0, -4, 0]), mat));

  parts.root = root; parts.body = body; parts.torso = torso; parts.head = head; parts.armL = armL; parts.armR = armR; parts.legL = legL; parts.legR = legR; parts.skin = skin; parts.mat = mat;
  return parts;
}

function addTo(parent, geoMesh) { parent.add(geoMesh); return geoMesh; }

// ---------------------------------------------------------------- hero (Isaac the Miner)
export function makeHero() {
  const O = "#ef7a12", Ob = "#c45a0c", BL = "#1f4a8a", BLd = "#14306a", ST = "#b8c0cc";
  const p = humanoid({
    skin: "#c08a62", hair: "#2a1a10", eyes: "#3a2414", fringe: true,
    shirt: O, sleeve: O, sleeveLen: 7, arm: BL, glove: "#6a4426", hand: "#c08a62",
    pants: BLd, boots: "#4a2e18", bootsTop: "#7a5030", belt: "#5a3a1e", buckle: "#f0c840",
    torsoDetail(face, P) {
      if (face === "front") { P.rect(0, 0, 8, 2, BL); P.rect(3, 2, 2, 6, BL, 0.05); P.px(3, 3, "#f0c840"); P.px(4, 3, "#f0c840"); P.px(1, 7, Ob); P.px(6, 7, Ob); P.hline(8, Ob); }
      else if (face === "back") { P.rect(0, 0, 8, 2, BL); P.hline(8, Ob); }
      else { P.rect(0, 0, 4, 2, BL); }
    },
    pantsDetail(face, P) { if (face === "front") { P.rect(0, 4, 4, 2, ST, 0.1); P.hline(4, "#e0e6ee"); } },
  }, 11);
  const skin = p.skin, mat = p.mat;
  // pauldrons
  for (const [g, sx] of [[p.armL, 1], [p.armR, -1]]) {
    const pd = mesh(cube(skin, 6, 4, 6, (face, P) => { P.fill(ST, 0.12); P.hline(P.h - 1, O); if (face === "top") { P.border(shadeHex(ST, 0.7)); P.px(2, 2, "#ffffff"); } }, [0, 0, 0]), mat, sx * 0.5, 1.5, 0);
    g.add(pd);
  }
  // helmet + lamp
  const helm = mesh(cube(skin, 9, 4, 9, (face, P) => { P.fill(O, 0.1); P.hline(P.h - 1, BL); if (face === "top") { P.rect(3, 0, 3, 9, "#ffa040", 0.05); } }, [0, 0, 0]), mat, 0, 6.6, 0);
  p.head.add(helm);
  const brim = mesh(cube(skin, 10, 1, 4, (face, P) => P.fill(Ob, 0.08), [0, 0, 0]), mat, 0, 4.4, 4.6);
  p.head.add(brim);
  const lampBase = mesh(cube(skin, 3, 3, 1, (face, P) => { P.fill("#3a3a40"); }, [0, 0, 0]), mat, 0, 6.6, 4.9);
  p.head.add(lampBase);
  const lamp = new THREE.Mesh(new THREE.BoxGeometry(2 * PX, 2 * PX, 0.6 * PX), glowMat("#fff2b0", 6));
  lamp.position.set(0, 6.6 * PX, 5.5 * PX); p.head.add(lamp);
  // cape
  const cape = pivotGroup(0, 11.5, -2.4); p.torso.add(cape);
  cape.add(mesh(cube(skin, 8, 13, 1, (face, P) => { P.fill(BL, 0.12); if (face === "back") { P.rect(0, 0, 8, 1, "#f0c840"); P.rect(3, 4, 2, 5, O); P.rect(2, 5, 4, 1, O); } P.hline(P.h - 1, BLd); }, [0, 6.5, 0]), mat));
  p.cape = cape;
  // pickaxe-sword in right hand
  const weapon = new THREE.Group(); weapon.position.set(0, -10 * PX, 1.2 * PX); p.armR.add(weapon);
  const handle = mesh(cube(skin, 1, 14, 1, (f, P) => { P.fill("#5a3a1e"); P.rect(0, 10, 1, 3, "#2a1a10"); }, [0, 0, 0]), mat, 0, 2, 0);
  const blade = mesh(cube(skin, 2, 12, 1, (f, P) => { P.fill("#d8e0e8", 0.08); P.vline(0, "#ffffff"); P.px(0, 0, "#ffffff"); }, [0, -6, 0]), mat, 0, 9, 0);
  const guard = mesh(cube(skin, 7, 2, 2, (f, P) => { P.fill("#c8a040"); P.px(3, 0, "#ffe080"); }, [0, 0, 0]), mat, 0, 8.5, 0);
  const pick = mesh(cube(skin, 9, 2, 2, (f, P) => { P.fill("#8a96a4"); P.hline(0, "#c8d0da"); P.px(0, 1, "#4a5260"); P.px(8, 1, "#4a5260"); }, [0, 0, 0]), mat, 0, 18.5, 0);
  const edge = new THREE.Mesh(new THREE.BoxGeometry(0.6 * PX, 10 * PX, 1.2 * PX), glowMat("#ff9a30", 2.4)); edge.position.set(1.1 * PX, 15 * PX, 0);
  weapon.add(handle, blade, guard, pick, edge);
  weapon.rotation.x = Math.PI / 2 * 0.9;
  p.weapon = weapon; p.lamp = lamp;
  p.kind = "hero";
  return finish(p);
}

// ---------------------------------------------------------------- NPCs
export function makePete() {
  const p = humanoid({
    skin: "#e0a880", hair: "#4a2a14", eyes: "#2a1a10", mustache: "#3a2210", brow: "#3a2210",
    shirt: "#ef7a12", sleeve: "#ef7a12", sleeveLen: 9, pants: "#2a4a8a", boots: "#5a3a1e", belt: "#3a2414", buckle: "#f0c840",
    torsoDetail(face, P) { if (face === "front" || face === "back") { P.rect(1, 0, 2, 12, "#2a4a8a"); P.rect(5, 0, 2, 12, "#2a4a8a"); P.rect(1, 4, 6, 6, "#2a4a8a"); P.px(2, 1, "#f0c840"); P.px(5, 1, "#f0c840"); } for (let y = 0; y < P.h; y += 3) P.hline(y, "#d8661a"); },
  }, 21);
  const skin = p.skin, mat = p.mat;
  const brim = mesh(cube(skin, 14, 1, 14, (f, P) => { P.fill("#e8d8b0", 0.08); if (f === "top") P.border("#c8b890"); }, [0, 0, 0]), mat, 0, 8.2, 0);
  const crown = mesh(cube(skin, 8, 5, 8, (f, P) => { P.fill("#efe2bf", 0.06); P.hline(P.h - 2, "#ef7a12"); P.hline(P.h - 1, "#ef7a12"); if (f === "top") { P.rect(3, 0, 2, 8, "#d8c8a0"); } }, [0, 0, 0]), mat, 0, 11, 0);
  p.head.add(brim, crown);
  const nose = mesh(cube(skin, 2, 2, 2, (f, P) => P.fill("#d0906a"), [0, 0, 0]), mat, 0, 3.2, 4.6); p.head.add(nose);
  // pickaxe on shoulder
  const tool = new THREE.Group(); tool.position.set(0, -9 * PX, 1.5 * PX); p.armR.add(tool);
  tool.add(mesh(cube(skin, 1, 16, 1, (f, P) => P.fill("#6a4a2a"), [0, 0, 0]), mat, 0, 4, 0));
  tool.add(mesh(cube(skin, 10, 2, 2, (f, P) => { P.fill("#9aa4b0"); P.hline(0, "#d8e0e8"); }, [0, 0, 0]), mat, 0, 12, 0));
  tool.rotation.x = -0.3; p.armR.rotation.x = -0.4;
  p.kind = "npc";
  return finish(p);
}
export function makeSmith() {
  const p = humanoid({
    skin: "#a8724e", hair: "#1a1410", eyes: "#1a1010", beard: "#2a1e16", brow: "#1a1410",
    headPaint: null,
    shirt: "#6a6e78", sleeve: "#6a6e78", sleeveLen: 3, pants: "#3a2e24", boots: "#2a1e16", belt: "#2a1a10", buckle: "#c8c8c8",
    torsoDetail(face, P) { if (face === "front") { P.rect(1, 1, 6, 11, "#7a4a24", 0.12); P.hline(1, "#5a3418"); P.px(1, 0, "#5a3418"); P.px(6, 0, "#5a3418"); P.rect(3, 5, 2, 2, "#5a3418"); } },
  }, 31);
  // bald top: repaint hair via a skullcap
  const cap = mesh(cube(p.skin, 8.4, 2, 8.4, (f, P) => P.fill("#a8724e", 0.05), [0, 0, 0]), p.mat, 0, 7.1, 0); p.head.add(cap);
  const hammer = new THREE.Group(); hammer.position.set(0, -10 * PX, 1 * PX); p.armR.add(hammer);
  hammer.add(mesh(cube(p.skin, 1, 9, 1, (f, P) => P.fill("#5a3a1e"), [0, 0, 0]), p.mat, 0, 1, 0));
  hammer.add(mesh(cube(p.skin, 4, 3, 3, (f, P) => { P.fill("#5a5e68"); P.hline(0, "#9aa0aa"); }, [0, 0, 0]), p.mat, 0, 6, 0));
  hammer.rotation.x = 0.6;
  p.kind = "npc";
  return finish(p);
}
export function makeCartographer() {
  const p = humanoid({
    skin: "#d8a07a", hair: "#d8d8d0", eyes: "#2a3a6a", glasses: "#2a2a2a", brow: "#b8b8b0",
    shirt: "#2a5aa8", sleeve: "#2a5aa8", sleeveLen: 11, pants: "#2a5aa8", boots: "#3a2414", belt: "#e8c56b", buckle: "#ffffff",
    torsoH: 12,
    torsoDetail(face, P) { if (face === "front") { P.vline(3, "#e8c56b"); P.vline(4, "#e8c56b"); } P.hline(0, "#e8c56b"); },
    pantsDetail(face, P) { P.rect(0, 0, 4, 8, "#2a5aa8"); },
  }, 41);
  // robe skirt over legs
  const skirt = mesh(cube(p.skin, 9, 9, 5, (f, P) => { P.fill("#244e94", 0.1); P.hline(P.h - 1, "#e8c56b"); if (f === "front") P.vline(4, "#e8c56b"); }, [0, 0, 0]), p.mat, 0, 7.5, 0); p.body.add(skirt);
  const hat = mesh(cube(p.skin, 9, 3, 9, (f, P) => { P.fill("#7a3a8a"); P.hline(P.h - 1, "#e8c56b"); }, [0, 0, 0]), p.mat, 0, 9, 0); p.head.add(hat);
  const hat2 = mesh(cube(p.skin, 5, 3, 5, (f, P) => P.fill("#7a3a8a"), [0, 0, 0]), p.mat, 0, 12, 0); p.head.add(hat2);
  const scroll = mesh(cube(p.skin, 2, 2, 8, (f, P) => { P.fill("#f0e0b0"); if (f === "left" || f === "right") P.hline(1, "#b8a070"); }, [0, 0, 0]), p.mat, 0, -10, 3); p.armL.add(scroll);
  p.armL.rotation.x = -0.6;
  p.kind = "npc";
  return finish(p);
}
export function makeStudent(seed = 5) {
  const r = rng(seed);
  const shirts = ["#ef7a12", "#1f4a8a", "#e8e8e4", "#2a6a3a", "#8a2a2a"];
  const skins = ["#e0b08a", "#c08a62", "#8a5a3a", "#f0c8a0"];
  const hairs = ["#2a1a10", "#5a3a1e", "#1a1410", "#a06a30"];
  const p = humanoid({ skin: skins[(r() * 4) | 0], hair: hairs[(r() * 4) | 0], eyes: "#2a1a10", shirt: shirts[(r() * 5) | 0], sleeveLen: 4, pants: "#3a4a6a", boots: "#e8e8e8", belt: null }, 50 + seed);
  p.kind = "npc"; return finish(p);
}

// ---------------------------------------------------------------- enemies (original designs)
export function makeRaider(seed = 1) {
  const cloak = "#3e4a3a", cloakD = "#2a3428", trim = "#a03020";
  const p = humanoid({
    skin: "#7a8a8a", hair: cloak, eyes: "#ffe040", shirt: cloak, sleeve: cloak, sleeveLen: 12, pants: "#2a2a30", boots: "#1a1a1e", belt: trim, buckle: "#c8c8c8",
    headPaint(face, P) {
      P.fill(cloak, 0.12);
      if (face === "front") { P.rect(1, 2, 6, 6, "#141814", 0.05); P.px(2, 4, "#ffe040"); P.px(5, 4, "#ffe040"); P.px(2, 5, "#ffa020"); P.px(5, 5, "#ffa020"); P.hline(0, trim); }
    },
    torsoDetail(face, P) { if (face === "front") { P.vline(3, trim); P.vline(4, trim); } },
  }, 60 + seed);
  const hood = mesh(cube(p.skin, 9, 3, 9, (f, P) => { P.fill(cloakD, 0.1); }, [0, 0, 0]), p.mat, 0, 8, -0.5); p.head.add(hood);
  const eyes = new THREE.Mesh(new THREE.BoxGeometry(5 * PX, 1 * PX, 0.4 * PX), glowMat("#ffd040", 3)); eyes.position.set(0, 3.5 * PX, 4.2 * PX); p.head.add(eyes);
  const club = new THREE.Group(); club.position.set(0, -10 * PX, 1 * PX); p.armR.add(club);
  club.add(mesh(cube(p.skin, 2, 12, 2, (f, P) => { P.fill("#5a3e24"); P.rect(0, 0, 2, 3, "#6a6e78"); }, [0, 0, 0]), p.mat, 0, 5, 0));
  club.add(mesh(cube(p.skin, 4, 4, 4, (f, P) => { P.fill("#6a6e78"); P.px(1, 1, "#aab0ba"); }, [0, 0, 0]), p.mat, 0, 11, 0));
  club.rotation.x = 1.2;
  p.kind = "raider"; p.eyes = eyes;
  return finish(p);
}

export function makeBug(seed = 1) {
  const skin = new Skin(64, 70 + seed), mat = makeMat(skin);
  const root = new THREE.Group(), body = new THREE.Group(); root.add(body);
  const shell = "#3a2a5a", shellH = "#5a4a8a", glow = "#7aff9a";
  const carapace = mesh(cube(skin, 10, 5, 12, (f, P) => { P.fill(shell, 0.12); if (f === "top") { P.vline(4, "#1a1030"); P.vline(5, "#1a1030"); for (let y = 2; y < 12; y += 3) { P.px(2, y, glow); P.px(7, y, glow); } P.rect(1, 0, 8, 1, shellH); } }, [0, 0, 0]), mat, 0, 6, 0);
  const headB = mesh(cube(skin, 6, 4, 4, (f, P) => { P.fill("#2a1e40"); }, [0, 0, 0]), mat, 0, 5.5, 7.5);
  body.add(carapace, headB);
  const eyeGeo = new THREE.BoxGeometry(1.4 * PX, 1.4 * PX, 0.6 * PX), em = glowMat("#ff3a3a", 4);
  for (const x of [-1.8, 1.8]) { const e = new THREE.Mesh(eyeGeo, em); e.position.set(x * PX, 6 * PX, 9.6 * PX); body.add(e); }
  const legs = [];
  for (const side of [-1, 1]) for (const z of [-3.5, 0.5, 4.5]) {
    const g = pivotGroup(side * 5, 5, z); g.add(mesh(cube(skin, 5, 1, 1, (f, P) => P.fill("#1e1630"), [side * -2.5, 0, 0]), mat)); body.add(g); legs.push({ g, side, z });
  }
  for (const s of [-1, 1]) { const m = mesh(cube(skin, 1, 1, 4, (f, P) => P.fill("#1e1630"), [0, 0, -2]), mat, s * 1.5, 7, 9.5); m.rotation.x = -0.5; body.add(m); }
  const p = { root, body, legs, skin, mat, kind: "bug" };
  return finish(p);
}

export function makeWisp(seed = 1, color = "#5ad0ff") {
  const skin = new Skin(64, 80 + seed), mat = makeMat(skin);
  const root = new THREE.Group(), body = new THREE.Group(); root.add(body);
  const head = mesh(cube(skin, 10, 10, 10, (f, P) => { P.fill("#5a5e6a", 0.15); P.border("#3a3e48"); if (f === "front") { P.rect(2, 3, 2, 2, "#101014"); P.rect(6, 3, 2, 2, "#101014"); P.rect(3, 7, 4, 1, "#101014"); } if (f === "top") P.rect(3, 3, 4, 4, "#7a7e8a"); }, [0, 0, 0]), mat, 0, 20, 0);
  body.add(head);
  const em = glowMat(color, 4);
  for (const x of [-2, 2]) { const e = new THREE.Mesh(new THREE.BoxGeometry(2 * PX, 2 * PX, 0.5 * PX), em); e.position.set(x * PX, 22 * PX, 5.2 * PX); body.add(e); }
  const core = new THREE.Mesh(new THREE.BoxGeometry(4 * PX, 4 * PX, 4 * PX), glowMat(color, 2.5)); core.position.set(0, 12 * PX, 0); body.add(core);
  const hands = [];
  for (const s of [-1, 1]) { const h = mesh(cube(skin, 4, 4, 4, (f, P) => { P.fill("#5a5e6a", 0.12); P.border("#3a3e48"); }, [0, 0, 0]), mat, s * 9, 14, 2); body.add(h); hands.push(h); }
  const p = { root, body, head, hands, core, skin, mat, kind: "wisp" };
  return finish(p);
}

export function makeBlob(seed = 1) {
  const skin = new Skin(64, 90 + seed), mat = makeMat(skin);
  const root = new THREE.Group(), body = new THREE.Group(); root.add(body);
  const outer = new THREE.Mesh(cube(skin, 12, 12, 12, (f, P) => { P.fill("#2a3a8a", 0.18); P.border("#1a2460"); if (f === "front") { P.rect(2, 3, 3, 3, "#0a0a1a"); P.rect(7, 3, 3, 3, "#0a0a1a"); P.px(3, 4, "#ffffff"); P.px(8, 4, "#ffffff"); P.rect(4, 8, 4, 1, "#0a0a1a"); } }, [0, -6, 0]), new THREE.MeshLambertMaterial({ map: skin.texture(), transparent: true, opacity: 0.88 }));
  outer.castShadow = true; body.add(outer);
  const core = new THREE.Mesh(new THREE.BoxGeometry(5 * PX, 5 * PX, 5 * PX), glowMat("#ff9a30", 2)); core.position.y = 5 * PX; body.add(core);
  const p = { root, body, outer, core, skin, mat, kind: "blob" };
  return finish(p);
}

// ---------------------------------------------------------------- animals
export function makeWolf() {
  const skin = new Skin(64, 101), mat = makeMat(skin);
  const root = new THREE.Group(), body = new THREE.Group(); root.add(body);
  const fur = "#d8d4cc", furD = "#a8a49c";
  body.add(mesh(cube(skin, 6, 6, 12, (f, P) => { P.fill(fur, 0.12); if (f === "top") P.rect(0, 0, 6, 5, furD, 0.1); }, [0, 0, 0]), mat, 0, 9, 0));
  body.add(mesh(cube(skin, 8, 6, 6, (f, P) => { P.fill(fur, 0.1); }, [0, 0, 0]), mat, 0, 10, 4));
  const head = pivotGroup(0, 11, 8); body.add(head);
  head.add(mesh(cube(skin, 6, 6, 4, (f, P) => { P.fill(fur, 0.08); if (f === "front") { P.px(1, 2, "#1a1a1a"); P.px(4, 2, "#1a1a1a"); } }, [0, 0, -2]), mat));
  head.add(mesh(cube(skin, 3, 3, 4, (f, P) => { P.fill("#e8e4dc"); if (f === "front") P.rect(1, 0, 1, 1, "#1a1a1a"); }, [0, 0, 0]), mat, 0, -1.2, 4));
  for (const s of [-1, 1]) head.add(mesh(cube(skin, 2, 2, 1, (f, P) => P.fill(furD), [0, 0, 0]), mat, s * 2, 4, 1));
  const collar = mesh(cube(skin, 6.6, 1.4, 4.6, (f, P) => { P.fill("#ef7a12"); P.px(3, 0, "#f0c840"); }, [0, 0, 0]), mat, 0, -2.2, 1.5); head.add(collar);
  const legs = [];
  for (const [x, z] of [[-2, 4], [2, 4], [-2, -4], [2, -4]]) { const g = pivotGroup(x, 7, z); g.add(mesh(cube(skin, 2, 7, 2, (f, P) => P.fill(fur, 0.1), [0, 3.5, 0]), mat)); body.add(g); legs.push(g); }
  const tail = pivotGroup(0, 10, -6); tail.add(mesh(cube(skin, 2, 2, 7, (f, P) => P.fill(fur, 0.1), [0, 0, -3.5]), mat)); tail.rotation.x = 0.6; body.add(tail);
  return finish({ root, body, head, legs, tail, skin, mat, kind: "quad" });
}
export function makeSheep(seed = 1) {
  const skin = new Skin(64, 111 + seed), mat = makeMat(skin);
  const root = new THREE.Group(), body = new THREE.Group(); root.add(body);
  body.add(mesh(cube(skin, 9, 8, 12, (f, P) => { P.fill("#ecebe6", 0.18); for (let i = 0; i < 12; i++) P.px((P.rnd() * P.w) | 0, (P.rnd() * P.h) | 0, "#d0cec8"); }, [0, 0, 0]), mat, 0, 10, 0));
  const head = pivotGroup(0, 12, 6); body.add(head);
  head.add(mesh(cube(skin, 6, 6, 6, (f, P) => { P.fill("#ecebe6", 0.12); if (f === "front") { P.rect(1, 2, 4, 4, "#d8b8a0"); P.px(1, 3, "#1a1a1a"); P.px(4, 3, "#1a1a1a"); P.rect(2, 5, 2, 1, "#c09080"); } }, [0, 0, -3]), mat));
  const legs = [];
  for (const [x, z] of [[-3, 4], [3, 4], [-3, -4], [3, -4]]) { const g = pivotGroup(x, 6, z); g.add(mesh(cube(skin, 3, 6, 3, (f, P) => { P.fill("#ecebe6"); P.rect(0, 3, 3, 3, "#d8b8a0"); }, [0, 3, 0]), mat)); body.add(g); legs.push(g); }
  return finish({ root, body, head, legs, skin, mat, kind: "quad" });
}
export function makeChicken(seed = 1) {
  const skin = new Skin(32, 121 + seed), mat = makeMat(skin);
  const root = new THREE.Group(), body = new THREE.Group(); root.add(body);
  body.add(mesh(cube(skin, 5, 5, 6, (f, P) => P.fill("#f4f2ee", 0.08), [0, 0, 0]), mat, 0, 5.5, 0));
  const head = pivotGroup(0, 8, 3); body.add(head);
  head.add(mesh(cube(skin, 3, 4, 3, (f, P) => { P.fill("#f4f2ee"); if (f === "front") { P.px(0, 1, "#1a1a1a"); P.px(2, 1, "#1a1a1a"); } }, [0, 0, 0]), mat));
  head.add(mesh(cube(skin, 2, 1, 2, (f, P) => P.fill("#f0a020"), [0, 0, 0]), mat, 0, 0, 2));
  head.add(mesh(cube(skin, 1, 2, 1, (f, P) => P.fill("#d02020"), [0, 0, 0]), mat, 0, -1.5, 1.8));
  const legs = [];
  for (const x of [-1, 1]) { const g = pivotGroup(x, 3, 0); g.add(mesh(cube(skin, 1, 3, 1, (f, P) => P.fill("#f0a020"), [0, 1.5, 0]), mat)); body.add(g); legs.push(g); }
  return finish({ root, body, head, legs, skin, mat, kind: "quad", small: true });
}

// ---------------------------------------------------------------- chest
export function makeChest(rare = false) {
  const skin = new Skin(64, rare ? 131 : 132), mat = makeMat(skin);
  const wood = rare ? "#2a4a8a" : "#8a5a2a", woodD = rare ? "#1a2e5a" : "#5a3a1a", metal = rare ? "#f0c840" : "#c8c8c8";
  const root = new THREE.Group();
  const base = mesh(cube(skin, 14, 10, 14, (f, P) => { P.fill(wood, 0.12); for (let y = 2; y < P.h; y += 4) P.hline(y, woodD); P.vline(0, metal); P.vline(P.w - 1, metal); P.hline(0, metal); }, [0, -5, 0]), mat, 0, 0, 0);
  root.add(base);
  const lid = pivotGroup(0, 10, -7); root.add(lid);
  lid.add(mesh(cube(skin, 14, 5, 14, (f, P) => { P.fill(wood, 0.1); P.border(metal); if (f === "top") { P.vline(6, metal); P.vline(7, metal); } }, [0, -2.5, 7]), mat));
  lid.add(mesh(cube(skin, 2, 4, 1, (f, P) => { P.fill(metal); P.px(0, 2, "#1a1a1a"); }, [0, 0, 0]), mat, 0, 0, 14.5));
  const p = { root, lid, skin, mat, kind: "chest" };
  root.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return p;
}

// readability: models are drawn a bit larger than life, and get a fresnel rim light
// (warm on the hero, soft on friends, hot red on enemies) so they pop off dark floors
const RIM = { hero: [1.0, 0.72, 0.4], npc: [0.55, 0.5, 0.42], quad: [0.4, 0.38, 0.34], raider: [0.46, 0.5, 0.56], bug: [0.46, 0.5, 0.56], wisp: [0.4, 0.9, 1.4], blob: [0.46, 0.5, 0.56], chest: [0.5, 0.4, 0.2] };
const SCALE = { hero: 1.28, npc: 1.22, quad: 1.15, raider: 1.3, bug: 1.3, wisp: 1.3, blob: 1.3, chest: 1.1 };
function addRim(mat, rimU) {
  if (!mat || !mat.isMeshLambertMaterial || mat.userData.rim) return;
  mat.userData.rim = rimU;
  const prev = mat.onBeforeCompile, prevKey = mat.customProgramCacheKey ? mat.customProgramCacheKey.call(mat) : "";
  mat.onBeforeCompile = (sh, r) => {
    if (prev) prev.call(mat, sh, r);
    sh.uniforms.uRim = rimU;
    sh.fragmentShader = sh.fragmentShader.replace("#include <common>", "#include <common>\nuniform vec3 uRim;")
      .replace("#include <emissivemap_fragment>", "#include <emissivemap_fragment>\n{ float rimF = 1.0 - abs(dot(normalize(normal), normalize(vViewPosition))); totalEmissiveRadiance += uRim * (rimF * rimF * 0.9); }");
  };
  mat.customProgramCacheKey = () => "rim|" + prevKey;
}
function finish(p) {
  const rc = RIM[p.kind] || RIM.npc;
  const rimU = { value: new THREE.Color(rc[0], rc[1], rc[2]) };
  p.rim = rimU;
  if (SCALE[p.kind] && !p.small) p.root.scale.setScalar(SCALE[p.kind]);
  p.root.traverse((o) => { if (o.isMesh) { o.castShadow = true; addRim(o.material, rimU); } });
  p.phase = Math.random() * 10;
  return p;
}

// ---------------------------------------------------------------- animation
// state: {speed (0..1), t, action, actionT, actionDur}
export function animate(p, s, dt) {
  p.phase += dt * (2 + (s.speed || 0) * 9);
  const ph = p.phase, sp = Math.min(1, s.speed || 0);
  if (p.kind === "hero" || p.kind === "npc" || p.kind === "raider") {
    const sw = Math.sin(ph) * 0.9 * sp;
    p.legL.rotation.x = sw; p.legR.rotation.x = -sw;
    let aL = -sw * 0.8, aR = sw * 0.8;
    const breathe = Math.sin(performance.now() / 600 + (p.phase0 || 0)) * 0.03;
    p.body.position.y = Math.abs(Math.cos(ph)) * 0.05 * sp;
    p.torso.rotation.y = 0; p.torso.rotation.x = 0.04 * sp;
    p.head.rotation.x = -0.04 * sp + breathe * 0.5;
    if (p.kind === "npc" && !sp) { aL = breathe * 2; aR = (p.armR.userData.base ?? p.armR.rotation.x); p.head.rotation.y = Math.sin(performance.now() / 1700 + p.phase) * 0.3; }
    p.armL.rotation.x = aL; p.armL.rotation.z = 0.06 + breathe;
    if (p.kind !== "npc") { p.armR.rotation.x = aR; p.armR.rotation.z = -0.06 - breathe; }
    if (s.action === "attack") {
      const k = 1 - Math.max(0, s.actionT) / (s.actionDur || 0.3);
      const swing = k < 0.35 ? -2.6 * (k / 0.35) : -2.6 + 3.6 * ((k - 0.35) / 0.65);
      p.armR.rotation.x = swing; p.armR.rotation.z = -0.3;
      p.torso.rotation.y = Math.sin(k * Math.PI) * -0.6;
      p.body.position.y = 0;
    }
    if (p.cape) p.cape.rotation.x = 0.12 + sp * 0.5 + Math.sin(ph * 2) * 0.06 * sp;
    if (p.weapon && s.action !== "attack") { p.weapon.rotation.x = Math.PI / 2 * 0.9; }
    if (s.action === "roll") {
      const k = 1 - Math.max(0, s.actionT) / (s.actionDur || 0.35);
      p.body.rotation.x = k * Math.PI * 2; p.body.position.y = Math.sin(k * Math.PI) * 0.35 + 0.0;
      p.legL.rotation.x = -1.2; p.legR.rotation.x = -1.2; p.armL.rotation.x = -1.4; p.armR.rotation.x = -1.4;
    } else p.body.rotation.x = 0;
    if (s.hurt > 0) p.body.rotation.z = Math.sin(s.hurt * 40) * 0.08; else p.body.rotation.z = 0;
  } else if (p.kind === "quad") {
    const sw = Math.sin(ph) * 0.7 * sp;
    p.legs.forEach((L, i) => { L.rotation.x = (i === 0 || i === 3) ? sw : -sw; });
    if (s.sit && p.legs.length > 3) { p.legs[2].rotation.x = -1.4; p.legs[3].rotation.x = -1.4; p.body.rotation.x = -0.35; p.body.position.y = -0.12; }
    else { p.body.rotation.x = 0; p.body.position.y = 0; }
    if (p.tail) p.tail.rotation.y = Math.sin(performance.now() / 120) * 0.5;
    if (p.head) p.head.rotation.x = s.graze ? 0.6 + Math.sin(performance.now() / 300) * 0.1 : Math.sin(performance.now() / 900 + p.phase) * 0.08;
    if (p.small) p.body.position.y = Math.abs(Math.sin(ph)) * 0.04 * sp;
  } else if (p.kind === "bug") {
    for (const L of p.legs) L.g.rotation.y = Math.sin(ph * 2 + L.z) * 0.5 * L.side * (0.3 + sp);
    p.body.position.y = Math.abs(Math.sin(ph * 2)) * 0.03;
    if (s.action === "attack") p.body.rotation.x = -Math.sin((1 - s.actionT / 0.4) * Math.PI) * 0.4; else p.body.rotation.x = 0;
  } else if (p.kind === "wisp") {
    const t = performance.now() / 1000 + p.phase;
    p.body.position.y = Math.sin(t * 2) * 0.12 + 0.2;
    p.hands.forEach((h, i) => { h.position.y = (14 + Math.sin(t * 3 + i * 2) * 1.5) * PX; h.position.z = (2 + (s.action === "attack" ? 6 : 0)) * PX; });
    p.core.rotation.y = t * 2; p.core.rotation.x = t;
  } else if (p.kind === "blob") {
    const t = p.phase;
    const hop = Math.max(0, Math.sin(t * 1.2));
    p.body.position.y = hop * 0.35;
    p.outer.scale.set(1 + (1 - hop) * 0.12, 1 - (1 - hop) * 0.14, 1 + (1 - hop) * 0.12);
    p.core.rotation.y = t;
  }
  if (p.mat?.userData?.light && s.light != null) p.mat.userData.light.value = s.light;
}

// hit flash: tint material emissive red briefly
export function flash(p, amt) {
  if (!p.mat) return;
  p.mat.emissive = p.mat.emissive || new THREE.Color();
  p.mat.emissive.setRGB(amt * 0.9, amt * 0.15, amt * 0.1);
}
