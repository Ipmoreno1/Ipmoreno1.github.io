// Tiny WebAudio blips. Off by default; nothing loads until sound is turned on.
let ac = null, enabled = false;
export function setSound(on) {
  enabled = on;
  if (on && !ac) { try { ac = new (window.AudioContext || window.webkitAudioContext)(); } catch { ac = null; } }
  if (ac && on && ac.state === "suspended") ac.resume();
}
export const soundOn = () => enabled;
function tone(freq, dur = 0.08, type = "square", vol = 0.05, when = 0, slide = 0) {
  if (!enabled || !ac) return;
  const t = ac.currentTime + when;
  const o = ac.createOscillator(), g = ac.createGain();
  o.type = type; o.frequency.setValueAtTime(freq, t);
  if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(40, freq + slide), t + dur);
  g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g).connect(ac.destination); o.start(t); o.stop(t + dur + 0.02);
}
function noise(dur = 0.12, vol = 0.08) {
  if (!enabled || !ac) return;
  const len = Math.floor(ac.sampleRate * dur), buf = ac.createBuffer(1, len, ac.sampleRate), d = buf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len);
  const s = ac.createBufferSource(), g = ac.createGain(), f = ac.createBiquadFilter();
  f.type = "lowpass"; f.frequency.value = 900; s.buffer = buf; g.gain.value = vol;
  s.connect(f).connect(g).connect(ac.destination); s.start();
}
export const sfx = {
  open: () => { tone(660, 0.06); tone(880, 0.08, "square", 0.04, 0.06); },
  close: () => tone(440, 0.06, "square", 0.03),
  xp: () => { tone(1320, 0.05, "sine", 0.05); tone(1760, 0.07, "sine", 0.04, 0.05); },
  adv: () => { [523, 659, 784, 1046].forEach((f, i) => tone(f, 0.12, "triangle", 0.05, i * 0.09)); },
  hit: () => noise(0.06, 0.06),
  brk: () => { noise(0.18, 0.1); tone(160, 0.12, "square", 0.03, 0, -80); },
  pet: () => { tone(900, 0.06, "sine", 0.05, 0, 300); tone(1200, 0.08, "sine", 0.04, 0.07, 200); },
  talk: () => tone(320 + Math.random() * 80, 0.04, "square", 0.025),
  step: () => tone(120, 0.03, "triangle", 0.015),
};
