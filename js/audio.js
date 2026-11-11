// Tiny WebAudio blips. Off by default.
let ctx, on = false;
function ac() { if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)(); return ctx; }
function beep(freq, dur, type = "square", vol = 0.04, slide = 0) {
  if (!on) return;
  const c = ac();
  const o = c.createOscillator(), g = c.createGain();
  o.type = type; o.frequency.setValueAtTime(freq, c.currentTime);
  if (slide) o.frequency.linearRampToValueAtTime(freq + slide, c.currentTime + dur);
  g.gain.setValueAtTime(vol, c.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + dur);
  o.connect(g).connect(c.destination);
  o.start(); o.stop(c.currentTime + dur);
}
export function setSound(v) { on = !!v; if (on) ac().resume?.(); }
export const sfx = {
  click: () => beep(420, 0.05, "square", 0.03),
  open: () => beep(300, 0.08, "square", 0.03, 80),
  close: () => beep(380, 0.06, "square", 0.03, -80),
  page: () => beep(520, 0.05, "triangle", 0.03),
  hit: () => beep(180, 0.07, "sawtooth", 0.05, -60),
  swing: () => beep(240, 0.06, "square", 0.03, 40),
  roll: () => beep(200, 0.1, "triangle", 0.04, 120),
  potion: () => beep(440, 0.16, "sine", 0.04, 200),
  chest: () => { beep(260, 0.1, "square", 0.05, 80); setTimeout(() => beep(390, 0.16, "triangle", 0.05, 120), 80); },
  loot: () => { beep(520, 0.12, "sine", 0.05); setTimeout(() => beep(660, 0.18, "sine", 0.05), 90); },
  complete: () => { beep(392, 0.12, "triangle", 0.05); setTimeout(() => beep(523, 0.14, "triangle", 0.05), 120); setTimeout(() => beep(659, 0.22, "triangle", 0.05), 240); },
  hurt: () => beep(140, 0.12, "sawtooth", 0.06, -40),
  step: () => beep(90, 0.03, "triangle", 0.02),
  talk: () => beep(300, 0.05, "square", 0.025, 40),
};
