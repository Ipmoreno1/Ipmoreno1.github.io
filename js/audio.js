// audio.js : tiny WebAudio blips and a soft chiptune loop. Off until the player turns sound on.
let ctx = null, on = false, loopTimer = null, master = null;
function ac() { if (!ctx) { const C = window.AudioContext || window.webkitAudioContext; if (!C) return null; ctx = new C(); master = ctx.createGain(); master.gain.value = 0.08; master.connect(ctx.destination); } return ctx; }
function tone(f, t0, d, type = "square", v = 1) { const c = ac(); if (!c) return; const o = c.createOscillator(), g = c.createGain(); o.type = type; o.frequency.value = f; g.gain.setValueAtTime(0, t0); g.gain.linearRampToValueAtTime(v, t0 + 0.01); g.gain.exponentialRampToValueAtTime(0.001, t0 + d); o.connect(g); g.connect(master); o.start(t0); o.stop(t0 + d + 0.02); }
const SONG = [392, 0, 440, 494, 587, 0, 494, 440, 392, 0, 330, 392, 440, 0, 392, 0, 523, 0, 494, 440, 392, 0, 440, 494, 392, 0, 330, 294, 330, 0, 0, 0];
const BASS = [196, 196, 165, 165, 147, 147, 165, 165];
function loop() { const c = ac(); if (!c || !on) return; const t = c.currentTime + 0.05, s = 0.2; SONG.forEach((f, i) => f && tone(f, t + i * s, 0.16, "square", 0.35)); for (let i = 0; i < 8; i++) tone(BASS[i], t + i * s * 4, 0.7, "triangle", 0.6); loopTimer = setTimeout(loop, SONG.length * s * 1000 - 40); }
export const Sound = {
  enable(v) { on = v; if (v) { const c = ac(); if (c && c.state === "suspended") c.resume(); clearTimeout(loopTimer); loop(); } else clearTimeout(loopTimer); },
  blip(kind) { if (!on) return; const c = ac(); if (!c) return; const t = c.currentTime; if (kind === "open") { tone(660, t, 0.08); tone(990, t + 0.07, 0.1); } else if (kind === "pet") { tone(880, t, 0.08, "triangle"); tone(1175, t + 0.09, 0.12, "triangle"); } else if (kind === "bus") { tone(330, t, 0.15); tone(440, t + 0.15, 0.15); tone(554, t + 0.3, 0.25); } },
};
