// Mission select: a 3D diorama of UTEP and the Franklin Mountains on a map table, with glowing mission nodes.
import * as THREE from "three";
import { Voxels, voxelMaterial, waterMaterial } from "./voxel.js";
import { B } from "./blocks.js";
import { createLights, skyTexture } from "./engine.js";
import { Particles, Flames } from "./fx.js";
import { MISSIONS } from "../missions.js";
import { WORLD_UNIFORMS } from "./voxel.js";
import { iconCanvas } from "../icons.js";
import { makeStar } from "./camp.js";

const MW = 72, MD = 48, MH = 22;

export function createMapScene() {
  const scene = new THREE.Scene();
  scene.background = skyTexture("#120c08", "#1e140c", "#2a1c10");
  scene.fog = new THREE.Fog(0x1a120a, 70, 140);
  const rig = createLights(scene, 2);
  rig.sun.intensity = 2.4; rig.sun.color.set(0xffe0b0); rig.hemi.intensity = 0.8; rig.hemi.color.set(0xd8c8ff); rig.hemi.groundColor.set(0x4a3020);
  rig.sunDir.set(-0.5, 1, 0.4).normalize();
  rig.sun.shadow.camera.left = -44; rig.sun.shadow.camera.right = 44; rig.sun.shadow.camera.top = 44; rig.sun.shadow.camera.bottom = -44; rig.sun.shadow.camera.updateProjectionMatrix();

  // terrain: El Paso basin, Franklin Mountains (north/east), Rio Grande (south/west)
  const v = new Voxels(MW, MH, MD);
  const nodeXZ = MISSIONS.map((m) => [Math.round(8 + m.pos.x * (MW - 16)), Math.round(8 + m.pos.y * (MD - 16))]);
  for (let z = 0; z < MD; z++) for (let x = 0; x < MW; x++) {
    const nx = x / MW, nz = z / MD;
    let h = 3 + Math.round(Math.sin(x * 0.3) * 0.6 + Math.cos(z * 0.4) * 0.6);
    // Franklin range: ridge from the north edge curving down the east side
    const ridgeD = Math.min(Math.abs(nz - 0.08) * 2.2 + Math.abs(nx - 0.6) * 0.2, Math.abs(nx - 0.94) * 2.6 + Math.abs(nz - 0.35) * 0.4);
    const mtn = Math.max(0, 1 - ridgeD * 2.6);
    h += Math.round(mtn * mtn * 15 + mtn * Math.sin(x * 0.9 + z * 0.6) * 2);
    // river
    const riverZ = 0.86 - Math.sin(nx * 4.2) * 0.05 - nx * 0.05;
    const isRiver = Math.abs(nz - riverZ) < 0.035;
    if (isRiver) h = 2;
    // campus plateau around nodes
    let near = 99; for (const [px, pz] of nodeXZ) near = Math.min(near, Math.hypot(x - px, z - pz));
    if (near < 4 && mtn < 0.4) h = Math.max(h, 4);
    for (let y = 0; y < h; y++) {
      let id = B.dirt;
      if (y === h - 1) id = mtn > 0.25 ? (h > 12 ? B.rock_dark : B.rock) : (near < 3.2 ? B.path : (Math.sin(x * 1.3 + z * 0.7) > 0.6 ? B.sand : B.grass));
      else if (mtn > 0.25) id = B.rock;
      v.set(x, y, z, id);
    }
    if (isRiver) v.set(x, 2, z, B.water);
    if (!isRiver && mtn < 0.25 && near > 3 && Math.sin(x * 2.1) * Math.cos(z * 1.7) > 0.82) v.set(x, h, z, B.leaves);
  }
  // little landmark buildings at nodes
  MISSIONS.forEach((m, i) => {
    const [x, z] = nodeXZ[i];
    const y = 4;
    const id = m.id;
    if (id === "sunbowl") { for (let dz = -2; dz <= 2; dz++) for (let dx = -3; dx <= 3; dx++) { const e = Math.abs(dx) === 3 || Math.abs(dz) === 2; v.set(x + dx, y, z + dz, e ? B.seats_orange : B.field); if (e) v.set(x + dx, y + 1, z + dz, B.seats_blue); } }
    else if (id === "pick") { for (let k = 0; k < 4; k++) v.set(x, y + k, z, B.iron); v.set(x - 1, y + 4, z, B.glowstone); v.set(x, y + 4, z, B.iron); v.set(x + 1, y + 4, z, B.crystal); }
    else if (id === "lhakhang") { v.box(x - 1, y, z - 1, x + 1, y + 1, z + 1, B.plaster); v.box(x - 2, y + 2, z - 2, x + 2, y + 2, z + 2, B.roof_dark); v.set(x, y + 3, z, B.gold); }
    else if (id === "haskins") { v.box(x - 2, y, z - 2, x + 2, y + 1, z + 2, B.concrete); v.box(x - 2, y + 2, z - 2, x + 2, y + 2, z + 2, B.wool_blue); }
    else { const big = id === "library" || id === "engineering"; const r = big ? 2 : 1; v.box(x - r, y, z - r, x + r, y + 1 + (big ? 1 : 0), z + r, B.plaster); v.box(x - r, y + 2 + (big ? 1 : 0), z - r, x + r, y + 2 + (big ? 1 : 0), z + r, B.kemar); v.box(x - r - 1, y + 3 + (big ? 1 : 0), z - r - 1, x + r + 1, y + 3 + (big ? 1 : 0), z + r + 1, B.roof); if (id === "ccsb") v.set(x, y + 4, z, B.terminal); }
  });
  // trail between nodes
  for (let i = 0; i < nodeXZ.length - 1; i++) {
    const [ax, az] = nodeXZ[i], [bx, bz] = nodeXZ[i + 1];
    const n = Math.ceil(Math.hypot(bx - ax, bz - az));
    for (let k = 0; k <= n; k++) { const x = Math.round(ax + (bx - ax) * k / n), z = Math.round(az + (bz - az) * k / n); const top = v.topSolid(x, z) - 1; if (top >= 0 && v.get(x, top, z) !== B.water && top < 7) v.set(x, top, z, B.path); }
  }
  v.computeLight();
  const { opaque, water } = v.buildMesh();
  const terrain = new THREE.Mesh(opaque, voxelMaterial()); terrain.castShadow = true; terrain.receiveShadow = true;
  const world = new THREE.Group(); world.add(terrain);
  if (water) { const wm = new THREE.Mesh(water, waterMaterial()); world.add(wm); }
  world.position.set(-MW / 2, 0, -MD / 2);
  scene.add(world);

  // the El Paso Star on the south face of the Franklin ridge
  {
    const sx = Math.round(MW * 0.42); let sz = 4;
    while (sz < MD - 1 && v.topSolid(sx, sz) > 11) sz++;
    const star = makeStar(1.7, 0.42, 0.24);
    star.position.set(sx - MW / 2 + 0.5, v.topSolid(sx, sz) + 1.4, sz - MD / 2 + 1.6);
    star.rotation.x = -0.9;
    star.userData.mat.color.setRGB(1.8, 1.6, 1.1); star.userData.glowMat.opacity = 0.35;
    scene.add(star);
  }
  // map table frame (dark wood with brass corners) and parchment skirt
  const wood = new THREE.MeshLambertMaterial({ color: 0x4a2c16 });
  const brass = new THREE.MeshLambertMaterial({ color: 0xc8962c, emissive: 0x3a2000 });
  const frame = new THREE.Group();
  const fr = (w, h, d, x, y, z, m = wood) => { const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); b.position.set(x, y, z); b.castShadow = true; b.receiveShadow = true; frame.add(b); };
  fr(MW + 6, 3, 3, 0, 1.5, -MD / 2 - 1.5); fr(MW + 6, 3, 3, 0, 1.5, MD / 2 + 1.5); fr(3, 3, MD, -MW / 2 - 1.5, 1.5, 0); fr(3, 3, MD, MW / 2 + 1.5, 1.5, 0);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) fr(3.6, 3.6, 3.6, sx * (MW / 2 + 1.5), 1.8, sz * (MD / 2 + 1.5), brass);
  fr(MW + 10, 1, MD + 10, 0, -0.5, 0, new THREE.MeshLambertMaterial({ color: 0x2a180c }));
  scene.add(frame);

  // nodes: beacons + floating icons
  const nodes = [];
  const flames = new Flames(80); scene.add(flames.mesh);
  const parts = new Particles(500, true); scene.add(parts.points);
  MISSIONS.forEach((m, i) => {
    const [x, z] = nodeXZ[i];
    const wx = x - MW / 2 + 0.5, wz = z - MD / 2 + 0.5;
    const top = v.topSolid(x, z);
    const g = new THREE.Group(); g.position.set(wx, top + 0.1, wz);
    const ped = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 1.1, 0.5, 8), brass); ped.position.y = 0.25; ped.castShadow = true; g.add(ped);
    const beamGeo = new THREE.CylinderGeometry(0.35, 0.6, 9, 10, 1, true); beamGeo.translate(0, 4.5, 0);
    const beamMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(2.2, 1.4, 0.5), transparent: true, opacity: 0.32, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide });
    const beam = new THREE.Mesh(beamGeo, beamMat); g.add(beam);
    const tex = new THREE.CanvasTexture(iconCanvas(m.loot.icon, 4)); tex.magFilter = THREE.NearestFilter; tex.colorSpace = THREE.SRGBColorSpace;
    const icon = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false, color: new THREE.Color(1.1, 1.1, 1.1) }));
    icon.scale.set(2.2, 2.2, 1); icon.position.y = 3.2; icon.renderOrder = 20; g.add(icon);
    const ring = new THREE.Mesh(new THREE.RingGeometry(1.2, 1.6, 24), new THREE.MeshBasicMaterial({ color: new THREE.Color(2.5, 1.6, 0.4), transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false }));
    ring.rotation.x = -Math.PI / 2; ring.position.y = 0.55; g.add(ring);
    scene.add(g);
    flames.add(wx, top + 0.7, wz, 0.25, false);
    nodes.push({ id: m.id, g, beam, beamMat, icon, ring, pos: new THREE.Vector3(wx, top + 4.5, wz), base: new THREE.Vector3(wx, top, wz) });
  });

  const camera = new THREE.PerspectiveCamera(40, 1, 0.5, 300);
  const st = { t: 0, open: 0, selected: null, visited: new Set() };
  const ctr = nodes.reduce((a, n) => a.add(n.base), new THREE.Vector3()).multiplyScalar(1 / nodes.length);
  const look = new THREE.Vector3(ctr.x - 7, 2, ctr.z - 2);
  const camFrom = new THREE.Vector3(look.x, 110, look.z + 24), camTo = new THREE.Vector3(look.x, 60, look.z + 43);
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();

  return {
    scene, camera, nodes, rig,
    open(selectId, visited) { st.open = 0; st.selected = selectId || st.selected; st.visited = visited || st.visited; },
    select(id) { st.selected = id; },
    update(dt, eng, reduced) {
      st.t += dt; st.open = Math.min(1, st.open + dt * (reduced ? 10 : 0.9));
      const k = 1 - Math.pow(1 - st.open, 3);
      const aspect = eng.w / eng.h;
      camera.aspect = aspect; camera.fov = aspect < 1 ? 62 : 40; camera.updateProjectionMatrix();
      const sel = nodes.find((n) => n.id === st.selected);
      const focus = look.clone(); if (sel && !reduced) focus.lerp(sel.base, 0.25);
      camera.position.lerpVectors(camFrom, camTo, k);
      if (aspect < 1) camera.position.y += 30;
      const sway = reduced ? 0 : Math.sin(st.t * 0.25) * 2.5;
      camera.position.x += sway + (sel ? (sel.base.x * 0.15) : 0);
      camera.lookAt(focus);
      rig.follow(new THREE.Vector3(0, 0, 0));
      WORLD_UNIFORMS.uTime.value = st.t;
      nodes.forEach((n) => {
        const on = n.id === st.selected || n.id === this.hover, done = st.visited.has(n.id);
        const pulse = 0.5 + 0.5 * Math.sin(st.t * 3 + n.pos.x);
        n.beamMat.color.setRGB(done ? 0.4 : 1.3, done ? 1.3 : 0.85, done ? 0.5 : 0.3);
        n.beamMat.opacity = (on ? 0.5 : 0.14) + pulse * 0.08;
        n.icon.position.y = 3.2 + Math.sin(st.t * 2 + n.pos.z) * 0.25 + (on ? 0.6 : 0);
        const s = on ? 2.9 : 2.2; n.icon.scale.set(s, s, 1);
        n.ring.scale.setScalar(on ? 1.3 + pulse * 0.2 : 1);
        n.ring.material.color.setRGB(on ? 2 : 1.2, on ? 1.6 : 0.75, on ? 0.6 : 0.2);
        if (!reduced && Math.random() < dt * (on ? 14 : 3)) parts.spawn({ x: n.base.x + (Math.random() - 0.5) * 1.2, y: n.base.y + 0.6, z: n.base.z + (Math.random() - 0.5) * 1.2, vy: 1.6 + Math.random(), color: done ? [0.6, 2, 0.8] : [2.2, 1.4, 0.4], size: 0.25, life: 1.6, drag: 0.2 });
      });
      flames.update(st.t); parts.mat.uniforms.uScale.value = eng.h * 0.9; parts.update(dt, st.t);
    },
    pick(clientX, clientY, el) {
      const r = el.getBoundingClientRect();
      ndc.set(((clientX - r.left) / r.width) * 2 - 1, -((clientY - r.top) / r.height) * 2 + 1);
      ray.setFromCamera(ndc, camera);
      let best = null, bd = 1e9;
      for (const n of nodes) {
        const d = ray.ray.distanceToPoint(n.pos); const d2 = ray.ray.distanceToPoint(n.base);
        const dm = Math.min(d, d2);
        if (dm < 3.2 && dm < bd) { bd = dm; best = n.id; }
      }
      return best;
    },
    project(n, eng) {
      const p = n.pos.clone(); p.y = n.base.y + (n.id === st.selected ? 5.6 : 4.9); p.project(camera);
      return { x: (p.x * 0.5 + 0.5) * eng.w, y: (-p.y * 0.5 + 0.5) * eng.h, vis: p.z < 1 };
    },
  };
}
