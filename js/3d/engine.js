// Renderer, post-processing, lighting rig, camera, and adaptive quality.
import * as THREE from "three";
import { EffectComposer } from "three-addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three-addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three-addons/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three-addons/postprocessing/OutputPass.js";
import { ShaderPass } from "three-addons/postprocessing/ShaderPass.js";
import { WORLD_UNIFORMS } from "./voxel.js";

const GradeShader = {
  uniforms: {
    tDiffuse: { value: null }, uRes: { value: new THREE.Vector2(1, 1) },
    uVignette: { value: 0.42 }, uSat: { value: 1.12 }, uTint: { value: new THREE.Vector3(1.03, 1.0, 0.95) },
    uTilt: { value: 1.0 }, uFocusY: { value: 0.46 }, uTime: { value: 0 },
  },
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform vec2 uRes; uniform float uVignette; uniform float uSat; uniform vec3 uTint; uniform float uTilt; uniform float uFocusY; uniform float uTime;
    varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      if (uTilt > 0.0) {
        float d = abs(vUv.y - uFocusY);
        float b = smoothstep(0.22, 0.55, d) * uTilt * 2.6;
        if (b > 0.01) {
          vec2 px = b / uRes;
          vec4 acc = c;
          acc += texture2D(tDiffuse, vUv + vec2( 1.0, 0.0) * px);
          acc += texture2D(tDiffuse, vUv + vec2(-1.0, 0.0) * px);
          acc += texture2D(tDiffuse, vUv + vec2( 0.0, 1.0) * px);
          acc += texture2D(tDiffuse, vUv + vec2( 0.0,-1.0) * px);
          acc += texture2D(tDiffuse, vUv + vec2( 0.7, 0.7) * px * 1.6);
          acc += texture2D(tDiffuse, vUv + vec2(-0.7, 0.7) * px * 1.6);
          acc += texture2D(tDiffuse, vUv + vec2( 0.7,-0.7) * px * 1.6);
          acc += texture2D(tDiffuse, vUv + vec2(-0.7,-0.7) * px * 1.6);
          c = acc / 9.0;
        }
      }
      float l = dot(c.rgb, vec3(0.299, 0.587, 0.114));
      c.rgb = mix(vec3(l), c.rgb, uSat) * uTint;
      c.rgb = (c.rgb - 0.5) * 1.05 + 0.5;
      vec2 q = vUv - 0.5; q.x *= uRes.x / uRes.y;
      float v = smoothstep(0.35, 1.05, length(q));
      c.rgb *= 1.0 - v * uVignette;
      gl_FragColor = vec4(clamp(c.rgb, 0.0, 1.0), 1.0);
    }`,
};

export const QUALITY = [
  { name: "Low", pr: 0.75, shadows: false, bloom: false, tilt: false, shadowSize: 512 },
  { name: "Medium", pr: 1, shadows: true, bloom: true, tilt: false, shadowSize: 1024 },
  { name: "High", pr: 1.5, shadows: true, bloom: true, tilt: true, shadowSize: 2048 },
];

export function createEngine(canvas, opts = {}) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: "high-performance", alpha: false, stencil: false });
  } catch (e) { return null; }
  if (!renderer.getContext()) return null;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.info.autoReset = false;

  const camera = new THREE.PerspectiveCamera(44, 1, 0.5, 400);
  const composer = new EffectComposer(renderer);
  const renderPass = new RenderPass(new THREE.Scene(), camera);
  const bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.55, 0.55, 0.82);
  const output = new OutputPass();
  const grade = new ShaderPass(GradeShader);
  composer.addPass(renderPass); composer.addPass(bloom); composer.addPass(output); composer.addPass(grade);

  const eng = {
    renderer, camera, composer, bloom, grade, renderPass,
    quality: opts.quality ?? 2, auto: true,
    scene: null, w: 1, h: 1,
    stats: { calls: 0, tris: 0, frameMs: 0 },
    setQuality(q) {
      eng.quality = Math.max(0, Math.min(2, q));
      const Q = QUALITY[eng.quality];
      renderer.shadowMap.enabled = Q.shadows;
      eng.onQuality?.(Q);
      eng.resize();
    },
    resize() {
      const Q = QUALITY[eng.quality];
      const w = innerWidth, h = innerHeight;
      const pr = Math.min(window.devicePixelRatio || 1, Q.pr) * (w * h > 2.4e6 ? 0.8 : 1);
      renderer.setPixelRatio(pr);
      renderer.setSize(w, h, false);
      composer.setPixelRatio(pr); composer.setSize(w, h);
      bloom.resolution.set(w * pr / 2, h * pr / 2);
      grade.uniforms.uRes.value.set(w * pr, h * pr);
      camera.aspect = w / h; camera.updateProjectionMatrix();
      eng.w = w; eng.h = h;
    },
    render(scene, cam = camera) {
      const Q = QUALITY[eng.quality];
      renderer.info.reset();
      grade.uniforms.uTilt.value = Q.tilt ? 1 : 0;
      if (Q.bloom) { renderPass.scene = scene; renderPass.camera = cam; composer.render(); }
      else { renderer.setRenderTarget(null); renderer.render(scene, cam); }
      eng.stats.calls = renderer.info.render.calls; eng.stats.tris = renderer.info.render.triangles;
    },
  };
  addEventListener("resize", () => eng.resize());
  eng.setQuality(eng.quality);
  return eng;
}

// Lighting rig for a scene (sun with soft shadows, hemisphere fill, pooled point lights).
export function createLights(scene, poolSize = 4) {
  const hemi = new THREE.HemisphereLight(0xbfd8ff, 0x6a5038, 1.0);
  const amb = new THREE.AmbientLight(0xffffff, 0.12);
  const sun = new THREE.DirectionalLight(0xffe2b8, 2.6);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  const sc = sun.shadow.camera; sc.left = -22; sc.right = 22; sc.top = 22; sc.bottom = -22; sc.near = 1; sc.far = 120;
  sun.shadow.bias = -0.0006; sun.shadow.normalBias = 0.035; sun.shadow.radius = 3;
  scene.add(hemi, amb, sun, sun.target);
  const pool = [];
  for (let i = 0; i < poolSize; i++) { const p = new THREE.PointLight(0xff9a40, 0, 9, 1.6); scene.add(p); pool.push(p); }
  const rig = {
    hemi, amb, sun, pool, sunDir: new THREE.Vector3(-0.55, 1, 0.35).normalize(),
    follow(target) {
      sun.position.copy(target).addScaledVector(rig.sunDir, 50);
      sun.target.position.copy(target);
      // snap the shadow camera to texels to stop shimmering
      sun.target.updateMatrixWorld();
    },
    // assign pool lights to the nearest light sources
    assign(sources, focus, t) {
      const list = sources.map((s) => ({ s, d: (s.x - focus.x) ** 2 + (s.z - focus.z) ** 2 })).filter((o) => o.d < 260).sort((a, b) => a.d - b.d);
      pool.forEach((p, i) => {
        const o = list[i];
        if (!o) { p.intensity = 0; return; }
        const s = o.s;
        p.position.set(s.x, s.y, s.z);
        p.color.set(s.color || 0xff9a40);
        const fl = s.flicker === false ? 1 : 0.85 + Math.sin(t * 13 + s.x * 3) * 0.08 + Math.sin(t * 29 + s.z) * 0.06;
        p.intensity = (s.intensity || 6) * fl * (rig.torchK || 1);
        p.distance = s.range || 9;
      });
    },
  };
  return rig;
}

// sky gradient texture used as scene.background
export function skyTexture(top, mid, bottom) {
  const c = document.createElement("canvas"); c.width = 4; c.height = 256;
  const ctx = c.getContext("2d");
  const g = ctx.createLinearGradient(0, 0, 0, 256);
  g.addColorStop(0, top); g.addColorStop(0.55, mid); g.addColorStop(1, bottom);
  ctx.fillStyle = g; ctx.fillRect(0, 0, 4, 256);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

export const TIMES = {
  day: { sky: ["#5d93d6", "#a9cdec", "#f4dcb0"], fog: 0xd8c8a8, fogNear: 40, fogFar: 120, sun: 0xffe2b8, sunI: 2.7, hemiSky: 0xbfd8ff, hemiGround: 0x7a5a3a, hemiI: 1.05, torch: 0.45, emissive: 0.8, exposure: 0.95, bloomT: 1.35, bloomS: 0.38, sunDir: [-0.55, 1, 0.42] },
  dusk: { sky: ["#3a3a78", "#d0708a", "#ffb060"], fog: 0xc07858, fogNear: 34, fogFar: 110, sun: 0xff9a50, sunI: 2.2, hemiSky: 0x9a8ad0, hemiGround: 0x6a3a28, hemiI: 0.75, torch: 1.3, emissive: 1.0, exposure: 1.0, bloomT: 1.0, bloomS: 0.5, sunDir: [-0.9, 0.42, 0.3] },
  night: { sky: ["#05081a", "#101c3a", "#24304a"], fog: 0x0e1628, fogNear: 26, fogFar: 90, sun: 0x7a98ff, sunI: 0.28, hemiSky: 0x34509a, hemiGround: 0x100c1a, hemiI: 0.24, torch: 2.2, emissive: 1.3, exposure: 1.0, bloomT: 0.75, bloomS: 0.6, sunDir: [0.4, 1, 0.6] },
  dungeon: { sky: ["#0a0a14", "#141420", "#1a1a26"], fog: 0x14121c, fogNear: 22, fogFar: 70, sun: 0x9ab0ff, sunI: 0.7, hemiSky: 0x5a6a9a, hemiGround: 0x2a1e1a, hemiI: 0.5, torch: 2.0, emissive: 1.1, exposure: 1.12, bloomT: 0.8, bloomS: 0.6, sunDir: [-0.3, 1, 0.5] },
  cave: { sky: ["#06101a", "#0c1a26", "#102030"], fog: 0x0a1822, fogNear: 20, fogFar: 64, sun: 0x6ad0ff, sunI: 0.5, hemiSky: 0x3a7a9a, hemiGround: 0x1a1a24, hemiI: 0.5, torch: 2.0, emissive: 1.15, exposure: 1.15, bloomT: 0.8, bloomS: 0.6, sunDir: [-0.3, 1, 0.5] },
};

export function applyTime(scene, rig, eng, key) {
  const T = TIMES[key] || TIMES.day;
  scene.background = skyTexture(...T.sky);
  scene.fog = new THREE.Fog(T.fog, T.fogNear, T.fogFar);
  rig.sun.color.set(T.sun); rig.sun.intensity = T.sunI;
  rig.hemi.color.set(T.hemiSky); rig.hemi.groundColor.set(T.hemiGround); rig.hemi.intensity = T.hemiI;
  rig.sunDir.set(...T.sunDir).normalize();
  rig.torchK = T.torch;
  WORLD_UNIFORMS.uTorchStrength.value = 0.85 * T.torch;
  WORLD_UNIFORMS.uEmissiveBoost.value = T.emissive;
  eng.renderer.toneMappingExposure = T.exposure;
  if (eng.bloom) { eng.bloom.threshold = T.bloomT; eng.bloom.strength = T.bloomS; }
  return T;
}
