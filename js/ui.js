// ui.js : HUD, signs, toasts and every panel (Dig Log, project detail, landmarks, map, MinerDex, contact, help, dialogue).
import { PROFILE, DEX, ABOUT, EDUCATION, PROJECTS, EXPERIENCE_IDS, SKILLS, INTERESTS, LANDMARKS, CAMPUS_FACTS, MASCOTS, PET_TALK, SITE, QUEST } from "./data.js?v=22";

const $ = (s, r = document) => r.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const MONO = { "moreno-captures": "MC", "espn-hub": "EH", "code-valkyrie": "CV", "javadoc-llm-tests": "DH", "disney-photopass": "DP", "clear-view-realty": "CR", "this-site": "PP" };
const group = (p) => (p.categories.includes("Experience") ? "Experience" : p.categories.includes("Research") ? "Research" : "Projects");
const ORDER = ["Experience", "Projects", "Research"];
const sorted = () => ORDER.flatMap((g) => PROJECTS.filter((p) => group(p) === g));
const num = (p) => String(sorted().indexOf(p) + 1).padStart(2, "0");
const SHORT = { "moreno-captures": "Moreno Captures", "espn-hub": "ESPN Hub", "code-valkyrie": "Code Valkyrie", "javadoc-llm-tests": "Javadoc + LLM tests", "this-site": "This site" };
const LM = Object.fromEntries(LANDMARKS.map((l) => [l.id, l]));
LM.lhakhang = LM.lhakhang || { id: "lhakhang", name: "The Lhakhang" };
const THEME = { plaza: "About me", union: "Experience: Disney PhotoPass and Clear View Realty", library: "Resume and education", ccsb: "Research: Does Documentation Help?", engineering: "Hackathon: Code Valkyrie", museum: "Project: Moreno Captures", lhakhang: "About this site", sunbowl: "Project: ESPN Hub", haskins: "Skills: tools in the pack", pick: "Contact" };
const AREA_OF = { plaza: "main", union: "main", library: "main", ccsb: "main", engineering: "main", museum: "main", lhakhang: "main", sunbowl: "athletics", haskins: "athletics", pick: "athletics" };
const AREA_NAME = { main: "Main Campus", athletics: "Sun Bowl & Athletics" };

// Isaac's portrait. Preferred: the HD bust (assets/isaac-portrait-hd.png 256px, -hd@2x 512px for
// 2x+ screens; isaac-portrait-hud.png 80px / -hud@2x 160px for the small HUD chip), drawn with
// high-quality smoothing so it looks like the source art. Fallbacks: the 64x64 / 32x32 pixel
// sprites (whole-number scale, smoothing off), then the in-code character portrait.
const HI = (window.devicePixelRatio || 1) >= 1.5;
const img = (src) => { const i = new Image(); i.decoding = "async"; i.src = src; return i; };
const AV_HD = img(HI ? "assets/isaac-portrait-hd@2x.png?v=22" : "assets/isaac-portrait-hd.png?v=22");
const AV_HUD = img(HI ? "assets/isaac-portrait-hud@2x.png?v=22" : "assets/isaac-portrait-hud.png?v=22");
const AVATAR = img("assets/isaac-portrait.png?v=22");
const AVATAR32 = img("assets/isaac-portrait-32.png?v=22");
const AV_BG = "#d1e3d3"; // the portrait's mint background, used to pad the frame
function drawPortrait(c) {
  if (!c) return;
  const css = c.clientWidth || +c.dataset.css || 40; const dpr = window.devicePixelRatio || 1; const dev = Math.round(css * dpr);
  const ok = (im) => im.complete && im.naturalWidth > 0;
  const g = c.getContext("2d");
  const hd = css >= 96 ? AV_HD : AV_HUD;
  const hdSrc = ok(hd) ? hd : ok(AV_HD) ? AV_HD : ok(AV_HUD) ? AV_HUD : null;
  if (hdSrc) {
    c.width = c.height = dev; g.imageSmoothingEnabled = true; g.imageSmoothingQuality = "high";
    g.drawImage(hdSrc, 0, 0, dev, dev); return;
  }
  const big = ok(AVATAR) && dev >= 64, small = ok(AVATAR32);
  const src = big ? AVATAR : small ? AVATAR32 : ok(AVATAR) ? AVATAR : null;
  if (!src) { c.width = c.height = 80; g.imageSmoothingEnabled = false; g.drawImage(G.chars.isaac.portrait, 0, 0, 80, 80); return; }
  const n = src.naturalWidth; const k = Math.max(1, Math.floor(dev / n));
  c.width = c.height = dev; g.imageSmoothingEnabled = false;
  g.fillStyle = AV_BG; g.fillRect(0, 0, dev, dev);
  const o = Math.floor((dev - n * k) / 2); g.drawImage(src, o, o, n * k, n * k);
}
let G = null; let lastFocus = null; let history = [];
const visited = new Set(JSON.parse(localStorage.getItem("utepx.visited") || "[]"));
function markVisited(id) { if (!visited.has(id)) { visited.add(id); try { localStorage.setItem("utepx.visited", JSON.stringify([...visited])); } catch {} } }

export const UI = {
  init(game) {
    G = game;
    $("#modal-close").addEventListener("click", () => UI.close());
    $("#modal-wrap").addEventListener("pointerdown", (e) => { if (e.target.id === "modal-wrap") UI.close(); });
    document.querySelectorAll("[data-open]").forEach((b) => b.addEventListener("click", () => UI.open(b.dataset.open)));
    $("#about-btn").addEventListener("click", () => UI.open("about"));
    $("#world-btn").addEventListener("click", () => UI.toggleWorld());
    $("#modal-body").addEventListener("click", onBodyClick);
    $("#modal-body").addEventListener("input", (e) => { if (e.target.id === "log-search") renderLogList(); });
    $("#modal").addEventListener("keydown", trapFocus);
    // world options
    const wm = $("#world-menu");
    $("#opt-time").value = G.state.time; $("#opt-weather").value = G.state.weather;
    $("#opt-time").addEventListener("change", (e) => { G.setTime(e.target.value); syncWorld(); });
    $("#opt-weather").addEventListener("change", (e) => { G.setWeather(e.target.value); syncWorld(); });
    $("#opt-dusk").addEventListener("click", () => { const k = G.timeKey(); G.setTime(k === "day" ? "dusk" : k === "dusk" ? "night" : "day"); syncWorld(); });
    $("#opt-sound").addEventListener("click", () => { G.setSound(!G.state.sound); syncWorld(); });
    $("#opt-start").addEventListener("click", () => { UI.toggleWorld(false); G.backToStart(); });
    $("#opt-zin").addEventListener("click", () => G.setZoom(1)); $("#opt-zout").addEventListener("click", () => G.setZoom(-1));
    document.addEventListener("pointerdown", (e) => { if (!wm.hidden && !e.target.closest("#world-menu, #world-btn")) UI.toggleWorld(false); });
    syncWorld();
    $("#quest-win-close")?.addEventListener("click", () => UI.hideQuestWin());
    $("#quest-contact")?.addEventListener("click", () => { UI.hideQuestWin(); UI.open("contact"); });
    $("#quest-win")?.addEventListener("pointerdown", (e) => { if (e.target.id === "quest-win") UI.hideQuestWin(); });
    // profile portrait
    drawPortrait($("#portrait")); const redraw = () => { drawPortrait($("#portrait")); const m = $("#mc-portrait"); if (m) drawPortrait(m); }; for (const i of [AV_HD, AV_HUD, AVATAR, AVATAR32]) i.addEventListener("load", redraw);
  },
  isOpen: () => !$("#modal-wrap").hidden,
  toggleWorld(force) { const wm = $("#world-menu"); const show = force ?? wm.hidden; wm.hidden = !show; $("#world-btn").setAttribute("aria-expanded", String(show)); if (show) $("#opt-time").focus(); },
  toast(msg) { const t = $("#toast"); t.textContent = msg; t.classList.remove("show"); void t.offsetWidth; t.classList.add("show"); clearTimeout(UI._tt); UI._tt = setTimeout(() => t.classList.remove("show"), 3600); },
  showQuestWin() {
    const w = $("#quest-win"); if (!w) return;
    w.hidden = false;
    const fx = $("#quest-fx"); const reduce = G.state.reduce || matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fx) return;
    const g = fx.getContext("2d"); fx.width = innerWidth; fx.height = innerHeight; g.imageSmoothingEnabled = false;
    if (UI._confetti) cancelAnimationFrame(UI._confetti);
    if (reduce) { g.clearRect(0, 0, fx.width, fx.height); return; }
    const cols = ["#ff8200", "#1f3a6e", "#f2c94c", "#e2455a", "#4f9a5c", "#f7f1e1"];
    const bits = Array.from({ length: 70 }, () => ({ x: Math.random() * fx.width, y: -Math.random() * fx.height, v: 40 + Math.random() * 90, s: 3 + Math.random() * 5, c: cols[Math.floor(Math.random() * cols.length)], r: Math.random() * 4 }));
    const t0 = performance.now();
    const step = (now) => {
      if (w.hidden) { UI._confetti = 0; return; }
      const dt = Math.min(0.05, (now - (step.t || now)) / 1000); step.t = now;
      g.clearRect(0, 0, fx.width, fx.height);
      for (const b of bits) { b.y += b.v * dt; b.x += Math.sin((now / 400) + b.r) * 20 * dt; if (b.y > fx.height) { b.y = -8; b.x = Math.random() * fx.width; } g.fillStyle = b.c; g.fillRect(Math.round(b.x), Math.round(b.y), b.s, b.s); }
      if (now - t0 < 8000) UI._confetti = requestAnimationFrame(step);
    };
    UI._confetti = requestAnimationFrame(step);
  },
  hideQuestWin() { const w = $("#quest-win"); if (w) w.hidden = true; if (UI._confetti) cancelAnimationFrame(UI._confetti); },
  close() {
    $("#modal-wrap").hidden = true; $("#modal").className = ""; history = [];
    if (lastFocus && document.contains(lastFocus)) lastFocus.focus(); else document.body.focus();
    if (G && G.Quest && G.Quest._pendingWin) { G.Quest._pendingWin = false; setTimeout(() => G.Quest.showWin(), 160); }
  },
  open(kind, arg, push = false) {
    UI.toggleWorld(false);
    if (!UI.isOpen()) { lastFocus = document.activeElement; history = []; }
    else if (push && UI._cur) history.push(UI._cur);
    UI._cur = [kind, arg];
    const m = $("#modal"); m.className = "k-" + kind;
    const v = VIEWS[kind](arg);
    $("#crumb").textContent = v.crumb; $("#modal-title-sr").textContent = v.title || v.crumb;
    $("#hdr-extra").innerHTML = history.length ? `<button class="btn ghost" data-act="back">◀ Back</button>` : "";
    if (v.backTo) $("#hdr-extra").innerHTML = `<button class="btn ghost" data-act="back-log">◀ Back to Dig Log</button>`;
    $("#modal-body").innerHTML = v.html; $("#modal-head").className = v.head || "";
    $("#modal-wrap").hidden = false; $("#modal-body").scrollTop = 0;
    if (v.after) v.after();
    ($("#modal-body [autofocus]") || $("#modal-close")).focus({ preventScroll: true }); $("#modal-body").scrollTop = 0;
  },
  buildSigns(area) {
    const box = $("#signs"); box.innerHTML = "";
    const chipFor = (id) => { const lm = LM[id]; const ps = PROJECTS.filter((p) => p.landmark === id); if (lm && lm.panel && lm.panel.type === "project") { const p = PROJECTS.find((q) => q.id === lm.panel.id); if (p) return { m: MONO[p.id] || p.title.slice(0, 2).toUpperCase(), t: SHORT[p.id] || p.title }; } const TY = { about: ["ME", "About me"], resume: ["RS", "Resume"], skills: ["SK", "Skills"], contact: ["HI", "Contact"], experience: ["XP", "Experience"], lhakhang: ["PP", "This site"] }; const ty = lm && lm.panel && TY[lm.panel.type]; return ty ? { m: ty[0], t: ty[1] } : null; };
    const items = area.landmarks.map((l) => ({ x: l.signX, y: l.signY, t: l.label, id: l.id, chip: chipFor(l.id) }))
      .concat((area.minor || []).map((m) => ({ x: m.x, y: m.y, t: m.label, minor: true })))
      .concat(area.bus ? [{ x: area.bus.signX, y: area.bus.signY, t: "Sun Metro", id: "bus", bus: true }] : []);
    UI._signs = items.map((s) => {
      const d = document.createElement("div"); d.className = "sign" + (s.bus ? " bus" : "") + (s.minor ? " minor" : "");
      if (s.chip) { const c = document.createElement("span"); c.className = "chip"; if (s.chip.m) { const i = document.createElement("i"); i.textContent = s.chip.m; c.appendChild(i); } c.appendChild(document.createTextNode(s.chip.t)); d.appendChild(c); }
      const b = document.createElement("b"); b.textContent = s.t; d.appendChild(b); box.appendChild(d); return { el: d, ...s };
    });
    UI.measureSigns();
  },
  measureSigns() { for (const s of UI._signs || []) { s.el.style.display = ""; s.w = s.el.offsetWidth; s.h = s.el.offsetHeight; } },
  placeSigns(toScreen) {
    for (const s of UI._signs || []) { const [x, y] = toScreen(s.x, s.y); const vis = x > -200 && y > -60 && x < innerWidth + 200 && y < innerHeight + 60; s.el.style.display = vis ? "" : "none"; if (vis) s.el.style.transform = `translate(${Math.round(x - s.w / 2)}px, ${Math.round(y - s.h)}px)`; }
  },
};

function syncWorld() {
  $("#opt-time").value = G.state.time; $("#opt-weather").value = G.state.weather;
  const k = G.timeKey(); $("#opt-dusk").textContent = k === "day" ? "Switch to dusk" : k === "dusk" ? "Switch to night" : "Switch to day";
  $("#opt-sound").textContent = G.state.sound ? "Sound on" : "Sound off"; $("#opt-sound").setAttribute("aria-pressed", String(G.state.sound));
}
function trapFocus(e) {
  if (e.key !== "Tab") return;
  const f = [...$("#modal").querySelectorAll("button, a[href], input, select, [tabindex='0']")].filter((x) => !x.disabled && x.offsetParent !== null);
  if (!f.length) return; const first = f[0], last = f[f.length - 1];
  if (e.shiftKey && document.activeElement === first) { last.focus(); e.preventDefault(); } else if (!e.shiftKey && document.activeElement === last) { first.focus(); e.preventDefault(); }
}
function onBodyClick(e) {
  const b = e.target.closest("[data-act]"); if (!b) return;
  const a = b.dataset.act, id = b.dataset.id;
  if (a === "project") UI.open("project", id, true);
  else if (a === "landmark") UI.open("landmark", id, true);
  else if (a === "open") UI.open(id, b.dataset.arg, true);
  else if (a === "go") { UI.close(); G.goToLandmark(id); }
  else if (a === "bus") { UI.close(); if (G.state.areaId !== id) G.rideBus(id); else UI.toast("You are already at " + AREA_NAME[id] + "."); }
  else if (a === "close") UI.close();
  else if (a === "chip") { document.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", String(c === b))); renderLogList(); }
  else if (a === "copy") { const done = () => UI.toast("Email copied: " + PROFILE.email); if (navigator.clipboard) navigator.clipboard.writeText(PROFILE.email).then(done, () => UI.toast(PROFILE.email)); else UI.toast(PROFILE.email); }
  else if (a === "mcard") {
    const M = UI._npc === "pet" ? PET_TALK : MASCOTS[UI._npc]; const c = M && M.cards[+id]; if (!c) return;
    let ans = c.a, go = c.open ? openBtn(c.open) : "";
    if (ans === "fact") ans = CAMPUS_FACTS[(UI._fact = ((UI._fact ?? -1) + 1) % CAMPUS_FACTS.length)];
    else if (ans === "pet") { G.petBird(); ans = PET_TALK.short + " leans into your hand, purrs, and does a happy little hop."; }
    else if (ans === "next") { const n = nextUnvisited(); const q = G.Quest && G.Quest.next(); let ansQ = n ? PET_TALK.short + " looks toward " + n.name + ". You haven't opened that one yet." : "You've opened every landmark. " + PET_TALK.short + " is impressed."; if (q) ansQ = "Tour: " + q.objective + ". " + ansQ; ans = ansQ; go = n ? `<button class="btn primary" data-act="go" data-id="${n.id}">Take me there ▶</button>` : ""; }
    $("#npc-text").textContent = ans; $("#npc-go").innerHTML = go;
    document.querySelectorAll(".mcard").forEach((x) => x.classList.toggle("on", x === b));
  }
  else if (a === "reduce") { G.setReduce(b.checked); }
}
document.addEventListener("click", (e) => { const b = e.target.closest("[data-act='back'], [data-act='back-log']"); if (!b) return; if (b.dataset.act === "back-log") { history = []; UI.open("log"); return; } const prev = history.pop(); if (prev) { UI._cur = prev; UI.open(prev[0], prev[1], false); } });
document.addEventListener("change", (e) => { if (e.target.id === "reduce-cb") G.setReduce(e.target.checked); });

// ---------------------------------------------------------------- pieces
const link = (href, label, cls = "btn") => `<a class="${cls}" href="${esc(href)}" target="_blank" rel="noopener">${esc(label)} ↗</a>`;
const mono = (p, big) => `<span class="mono${big ? " big" : ""}" aria-hidden="true">${MONO[p.id] || p.title.slice(0, 2).toUpperCase()}</span>`;
function card(p, opts = {}) {
  const v = visited.has(p.id);
  return `<button class="pcard" data-act="project" data-id="${p.id}" aria-label="${esc(p.title)}${v ? ", visited" : ""}">
    <span class="pc-top">${mono(p)}<span class="no">${v ? '<span class="vis">✓ Visited</span>' : ""} NO. ${num(p)}</span></span>
    <span class="pc-title">${esc(p.title)}</span>
    <span class="pc-sum">${esc(p.summary)}</span>
    ${opts.short ? "" : `<span class="pc-meta">${esc(p.kind)} · ${esc(p.dates)}</span><span class="pc-stack">${p.stack.map(esc).join(" · ")}</span>`}
  </button>`;
}
function renderLogList() {
  const q = ($("#log-search")?.value || "").trim().toLowerCase(); const f = $(".chip[aria-pressed='true']")?.dataset.id || "All";
  const list = sorted().filter((p) => (f === "All" || group(p) === f) && (!q || [p.title, p.summary, p.kind, ...p.stack, ...p.categories].join(" ").toLowerCase().includes(q)));
  const vcount = PROJECTS.filter((p) => visited.has(p.id)).length;
  $("#log-count").textContent = `${list.length} ${list.length === 1 ? "entry" : "entries"} shown · ${vcount} of ${PROJECTS.length} visited`;
  $("#log-list").innerHTML = ORDER.map((g) => { const items = list.filter((p) => group(p) === g); return items.length ? `<h3 class="sec">${g}</h3><div class="grid2">${items.map((p) => card(p)).join("")}</div>` : ""; }).join("") || `<p class="muted">No entries match. Try another word, like React or Java.</p>`;
}
function controlsStrip() { return `<p class="controls"><kbd>WASD</kbd> / <kbd>arrows</kbd> move · hold <kbd>Shift</kbd> run · <kbd>E</kbd> interact · <kbd>P</kbd> Dig Log · <kbd>M</kbd> map · <kbd>C</kbd> contact · <kbd>Esc</kbd> close</p>`; }
function contactBlock() {
  return `<div class="talk"><div><h3 class="h3">Let's talk.</h3><p class="muted">${esc(PROFILE.lookingFor)}. Based in ${esc(PROFILE.location)}.</p></div>
  <div class="btnrow"><a class="btn" href="mailto:${esc(PROFILE.email)}">Email me ↗</a><button class="btn" data-act="copy">Copy email</button>${link(PROFILE.github, "GitHub")}${link(PROFILE.linkedin, "LinkedIn")}</div></div>`;
}
function skillsBlock() { return `<div class="skills">${SKILLS.map((s) => `<div class="skrow"><span class="sklabel">${esc(s.label)}</span><span class="skitems">${s.items.map((i) => `<span class="tchip">${esc(i)}</span>`).join("")}</span></div>`).join("")}</div>`; }

// ---------------------------------------------------------------- views
const VIEWS = {
  log() {
    return {
      crumb: "THE DIG LOG", title: "Dig Log",
      html: `<p class="eyebrow">${PROJECTS.length} entries · experience, projects and research</p><h2 class="h1" id="modal-title">What I've built.</h2>
      <p>Jobs, apps, and research. Pick one to see what I did and how it works. Each entry also lives at a building on campus.</p>
      <div class="filters"><label class="sr" for="log-search">Search entries</label><input id="log-search" type="search" placeholder="Search entries or tech, like React" autocomplete="off">
      <div class="chips" role="group" aria-label="Filter">${["All", ...ORDER].map((c, i) => `<button class="chip" data-act="chip" data-id="${c}" aria-pressed="${i === 0}">${c}</button>`).join("")}</div></div>
      <p class="count" id="log-count" aria-live="polite"></p><div id="log-list"></div>`,
      after: renderLogList,
    };
  },
  project(id) {
    const p = PROJECTS.find((x) => x.id === id); markVisited(id);
    const lm = LM[p.landmark]; const g = group(p);
    const facts = [p.dates, p.status.split(".")[0], lm ? "Found at " + lm.name : null].filter(Boolean);
    const links = (p.links || []).map((l) => link(l.url, l.label, "btn primary")).join("");
    const extra = p.id === "this-site" && SITE.dungeonsVersionUrl ? link(SITE.dungeonsVersionUrl, "Play the 3D version", "btn primary") : "";
    return {
      crumb: `DIG LOG / NO. ${num(p)}`, title: p.title, backTo: true,
      html: `<div class="phead"><div><p class="eyebrow">${esc(g)} · ${esc(p.dates)}</p><h2 class="h1" id="modal-title">${esc(p.title)}</h2>${p.fullTitle ? `<p class="full">${esc(p.fullTitle)}</p>` : ""}</div>${mono(p, true)}</div>
      <p class="lead">${esc(p.summary)}</p>
      <div class="callout"><span class="eyebrow">Context</span><p>${esc(p.kind)}</p></div>
      <div class="tchips" aria-label="Tech and skills">${p.stack.map((s) => `<span class="tchip">${esc(s)}</span>`).join("")}</div>
      <div class="fchips">${facts.map((f) => `<span class="fchip">${esc(f)}</span>`).join("")}</div>
      ${p.status.includes(".") ? `<p class="muted small">Status: ${esc(p.status)}</p>` : ""}
      <div class="btnrow">${links}${extra}${lm ? `<button class="btn ghost" data-act="go" data-id="${lm.id}">Find on the map ▶</button>` : ""}<a class="btn ghost" href="${esc(PROFILE.resumePdf)}" target="_blank" rel="noopener">Resume PDF ↗</a></div>
      <h3 class="h3">${g === "Experience" ? "What I did" : "How it works"}</h3>
      <div class="steps">${p.bullets.map((b, i) => `<div class="step"><span class="stepn">${String(i + 1).padStart(2, "0")}</span><p>${esc(b)}</p></div>`).join("")}</div>`,
    };
  },
  landmark(id) {
    const l = LM[id]; const type = l.panel?.type; const here = PROJECTS.filter((p) => p.landmark === id);
    let body = "";
    if (type === "about") body = `<div class="feature"><div><p class="eyebrow">Here</p><h3 class="h3">Meet Isaac</h3><p>${esc(ABOUT[0])}</p></div><button class="btn primary" data-act="open" data-id="about" autofocus>Open my MinerDex ▶</button></div>`;
    else if (type === "resume") body = `<div class="feature"><div><p class="eyebrow">Here</p><h3 class="h3">Resume</h3><p>${esc(EDUCATION.degree)}, ${esc(EDUCATION.minor)}. ${esc(EDUCATION.school)}. ${esc(EDUCATION.dates)}.</p></div><a class="btn primary" href="${esc(PROFILE.resumePdf)}" target="_blank" rel="noopener" autofocus>Open resume PDF ↗</a></div>
      <h3 class="h3">On the resume</h3><div class="grid2">${sorted().filter((p) => p.id !== "this-site").map((p) => card(p, { short: true })).join("")}</div>`;
    else if (type === "skills") body = `<p class="eyebrow">Here</p><h3 class="h3">Tools in the pack</h3>${skillsBlock()}<p class="muted small">Interests: ${INTERESTS.map(esc).join(" · ")}</p>`;
    else if (type === "contact") body = `<p class="eyebrow">Here</p>${contactBlock()}<p class="muted small">Email: ${esc(PROFILE.email)} · Resume: <a href="${esc(PROFILE.resumePdf)}" target="_blank" rel="noopener">PDF ↗</a></p>`;
    else if (type === "lhakhang") body = `<p class="eyebrow">Here</p><h3 class="h3">About this site</h3><p>This campus is a fan-inspired, playable portfolio. Every landmark opens a real part of my work, and the art is original pixel art drawn in code. The map is stylized and not to scale. The star on the Franklin Mountains is a nod to the El Paso star.</p>${SITE.dungeonsVersionUrl ? `<p>${link(SITE.dungeonsVersionUrl, "There is also a 3D version")}</p>` : ""}`;
    if (here.length && type !== "resume") body += `<h3 class="h3">${here.length > 1 ? "Entries here" : "Entry here"}</h3><div class="grid2">${here.map((p) => card(p)).join("")}</div>`;
    return {
      crumb: `${AREA_NAME[AREA_OF[id]].toUpperCase()} / ${l.name.toUpperCase()}`, title: l.name,
      html: `<p class="eyebrow">Landmark</p><h2 class="h1" id="modal-title">${esc(l.name)}</h2>${l.fact ? `<p>${esc(l.fact)} ${l.source ? `<a class="src" href="${esc(l.source)}" target="_blank" rel="noopener">Source ↗</a>` : ""}</p>` : ""}
      <div class="box">${body}</div><div class="btnrow"><button class="btn ghost" data-act="open" data-id="map">Open map ▶</button><button class="btn ghost" data-act="open" data-id="log">Dig Log ▶</button></div>`,
      after: () => { markVisited("lm:" + id); here.forEach((p) => p.landmark === id && type === "project" && markVisited(p.id)); },
    };
  },
  map() {
    const thumbs = { main: thumb("main"), athletics: thumb("athletics") };
    const cur = G.state.areaId;
    const areaCard = (aid, desc) => `<div class="acard${aid === cur ? " here" : ""}"><img src="${thumbs[aid]}" alt="Overview of ${AREA_NAME[aid]}" width="360" height="240"><div class="ac-body"><h3 class="h3">${AREA_NAME[aid]}</h3><p class="muted small">${desc}</p>${aid === cur ? `<span class="here-tag">You are here</span>` : `<button class="btn" data-act="bus" data-id="${aid}">Take the bus ▶</button>`}</div></div>`;
    const places = (aid) => Object.keys(AREA_OF).filter((k) => AREA_OF[k] === aid).map((k) => `<button class="place" data-act="go" data-id="${k}"><span class="pl-star" aria-hidden="true">★</span><span class="pl-name">${esc(LM[k].name)}</span><span class="pl-theme">${esc(THEME[k])}</span><span aria-hidden="true">▶</span></button>`).join("");
    return {
      crumb: "EL PASO / MAP", title: "Map",
      html: `<p class="eyebrow">2 areas · 10 landmarks</p><h2 class="h1" id="modal-title">Explore campus.</h2><p>Main Campus holds the experience, projects, research and resume. Ride the Sun Metro to the Sun Bowl side for ESPN Hub, skills and contact. Stylized, not to scale.</p>
      <div class="grid2">${areaCard("main", "Centennial Plaza, the Library, the Union, CCSB, Engineering, the Museum and the Lhakhang")}${areaCard("athletics", "Sun Bowl Stadium, the Don Haskins Center and the Mining Minds sculpture")}</div>
      <h3 class="sec">Main Campus · Places</h3><p class="note">Choose a place to walk straight there.</p><div class="grid2">${places("main")}</div>
      <h3 class="sec">Sun Bowl & Athletics · Places</h3><div class="grid2">${places("athletics")}</div>`,
    };
  },
  about() {
    const exp = EXPERIENCE_IDS.map((id) => PROJECTS.find((p) => p.id === id));
    const work = DEX.selected.map((id) => PROJECTS.find((p) => p.id === id));
    const xcard = (p) => `<button class="dexc" data-act="project" data-id="${p.id}"><span class="dx-mono" aria-hidden="true">${MONO[p.id]}</span><span class="dx-body"><small>${esc(p.dates)}</small><strong>${esc(p.title)}</strong><em>${esc(p.role || p.kind)}</em><span class="dx-sum">${esc(p.dexLine || p.summary)}</span></span><span class="dx-go" aria-hidden="true">↗</span></button>`;
    const wcard = (p) => `<button class="dexc" data-act="project" data-id="${p.id}"><span class="dx-mono" aria-hidden="true">${MONO[p.id]}</span><span class="dx-body"><small>${esc(p.tag)}</small><strong>${esc(SHORT[p.id] || p.title)}</strong><span class="dx-stack">${p.stack.slice(0, 3).map(esc).join(" · ")}</span></span><span class="dx-go" aria-hidden="true">↗</span></button>`;
    const core = SKILLS[0].items, more = [...SKILLS[1].items, ...SKILLS[3].items.slice(0, 3), SKILLS[2].items[1]];
    return {
      crumb: "MINERDEX", title: "MinerDex: About Isaac",
      html: `<section class="dex-hero" aria-labelledby="modal-title">
        <div class="dex-pic"><canvas id="mc-portrait" width="128" height="128" data-css="128" aria-hidden="true"></canvas></div>
        <div class="dex-id"><p class="dex-eyebrow">${esc(DEX.school)}</p><h2 class="dex-name" id="modal-title">${esc(PROFILE.name)}</h2><p class="dex-tag">${esc(DEX.tagline)}</p><p class="dex-deg">${esc(DEX.degree)}</p></div>
        <div class="dex-side"><div class="dex-types"><span class="type t1"><i>TYPE:</i> ${esc(DEX.type)}</span><span class="type t2"><i>SECOND TYPE:</i> ${esc(DEX.secondType)}</span></div>
          <div class="dex-stats"><div><i>YEAR:</i><b>${esc(DEX.year)}</b></div><div><i>EXPECTED GRADUATION:</i><b>${esc(DEX.graduation)}</b></div></div></div>
        <p class="dex-bio">${esc(DEX.bio)}</p>
      </section>
      <div class="dex-actions"><button class="btn primary" data-act="close" autofocus>Explore campus <span aria-hidden="true">▸</span></button><button class="btn" data-act="open" data-id="log">View projects</button><a class="btn" href="${esc(PROFILE.resumePdf)}" target="_blank" rel="noopener">Full resume PDF ↗</a></div>
      <p class="dex-controls"><span><kbd>WASD</kbd> / pad <b>Move</b></span><span>Hold <kbd>Run</kbd> or <kbd>Shift</kbd></span><span><b>Interact</b> <kbd>E</kbd></span><span><kbd>P</kbd> Dig Log</span><span><kbd>M</kbd> Map</span></p>
      <h3 class="dex-h">Experience</h3><div class="dex-grid2">${exp.map(xcard).join("")}</div>
      <div class="dex-hrow"><h3 class="dex-h">Selected work</h3><button class="dex-link" data-act="open" data-id="log">All work <span aria-hidden="true">▶</span></button></div>
      <div class="dex-grid3">${work.map(wcard).join("")}</div>
      <div class="dex-edu"><b>Education</b><span>${esc(DEX.degree)} · ${esc(EDUCATION.school)} · Expected graduation ${esc(DEX.graduation)}</span></div>
      <div class="dex-moves"><span><b>MOVES:</b> ${core.map(esc).join(" · ")}</span><span>${more.map(esc).join(" · ")}</span></div>
      <div class="dex-talk"><div><h3 class="dex-h">Let's talk.</h3><p>Open to ${esc(PROFILE.lookingFor.toLowerCase())} · ${esc(PROFILE.location)}</p></div>
        <div class="dex-btns"><a class="btn sm" href="mailto:${esc(PROFILE.email)}">Email me ↗</a><button class="btn sm" data-act="copy">Copy email</button>${link(PROFILE.github, "GitHub", "btn sm")}${link(PROFILE.linkedin, "LinkedIn", "btn sm")}</div></div>
      <p class="fine">${esc(SITE.footer)} Not an official UTEP site.</p>`,
      after: () => drawPortrait($("#mc-portrait")),
    };
  },
  contact() {
    return { crumb: "CONTACT", title: "Contact", html: `<p class="eyebrow">Contact</p><h2 class="h1" id="modal-title">Say hello.</h2><p>${esc(PROFILE.lookingFor)}. I'm in ${esc(PROFILE.location)} and I read every email.</p>${contactBlock()}<p class="muted small">${esc(PROFILE.email)} · <a href="${esc(PROFILE.resumePdf)}" target="_blank" rel="noopener">Resume PDF ↗</a> · <a href="recruiter.html">Plain recruiter view</a></p>` };
  },
  help() {
    const rows = [["Move", "WASD, arrow keys, or the direction pad."], ["Run", "Hold Shift, or toggle Run."], ["Talk", "Walk up to someone with a ! and press E."], ["Places", "Press E near a building, or use the yellow button."], ["Tour", "Optional campus tour: talk to the five host mascots. Progress is in the top right. It never blocks the rest of the site."], ["Dig Log", "Press P to see every project and job."], ["Map", "Press M. Take the bus between areas."], ["Contact", "Press C."], ["Close", "Press Escape, or select Close."]];
    return { crumb: "HELP", title: "How to play", html: `<div class="narrow"><h2 class="h1" id="modal-title">How to play.</h2><p>Explore the UTEP campus. Each landmark holds part of Isaac's portfolio. The Sun Metro bus runs between Main Campus and the Sun Bowl side. An optional campus tour is in the top right.</p>
      <table class="help"><tbody>${rows.map(([a, b]) => `<tr><th scope="row">${a}</th><td>${b}</td></tr>`).join("")}</tbody></table>
      <p class="muted small">World options change the time of day, the weather, sound and zoom.</p>
      <label class="check"><input type="checkbox" id="reduce-cb" ${G.state.reduce ? "checked" : ""}> Reduce animation</label>
      <p class="fine">${esc(SITE.footer)} Not an official UTEP site. Visiting mascots are original fan-inspired characters, not official school marks. All art is original. <a href="recruiter.html">Skip the game</a>.</p></div>` };
  },
  npc(o) {
    const M = o.pet ? PET_TALK : o.mascot ? MASCOTS[o.mascot] : null; UI._npc = o.pet ? "pet" : o.mascot || null;
    const top = `<div class="npc-top"><canvas id="npc-portrait" width="64" height="64" aria-hidden="true"></canvas><div><p class="eyebrow light">Talking with</p><h2 class="h2" id="modal-title">${esc(o.name)}</h2></div></div>`;
    const html = M
      ? `${top}<p id="npc-text" aria-live="polite">${esc(M.greet)}</p>
      <h3 class="h3">${esc(M.title)}</h3><div class="grid3 mcards n${M.cards.length}">${M.cards.map((c, i) => `<button class="choice mcard" data-act="mcard" data-id="${i}" ${i === 0 ? "autofocus" : ""}><span><b class="mc-t">${esc(c.t)}</b><span class="mc-s">${esc(c.s)}</span></span><span class="mc-go" aria-hidden="true">▶</span></button>`).join("")}</div>
      <div class="btnrow npc-foot"><span id="npc-go"></span><button class="btn ghost" data-act="open" data-id="log">All work ▶</button></div>`
      : `${top}<p id="npc-text" aria-live="polite">${esc(o.line)}</p><div class="btnrow"><button class="btn" data-act="close" autofocus>Thanks!</button></div>`;
    return { crumb: "", title: o.name, head: "npc", html,
      after: () => { const g = $("#npc-portrait").getContext("2d"); g.imageSmoothingEnabled = false; g.drawImage(o.portrait, 0, 0, 64, 64); } };
  },
};

function openBtn([kind, id, label]) {
  const act = kind === "project" || kind === "landmark" ? kind : "open"; const did = act === "open" ? kind : id;
  return `<button class="btn primary" data-act="${act}" data-id="${esc(did)}">${esc(label)} ▶</button>`;
}
function nextUnvisited() {
  for (const l of LANDMARKS) { const pid = l.panel && l.panel.type === "project" ? l.panel.id : null; if (!visited.has("lm:" + l.id) && !(pid && visited.has(pid))) return l; }
  return null;
}
const thumbCache = {};
function thumb(aid) {
  if (thumbCache[aid]) return thumbCache[aid];
  const a = G.areas[aid]; const W = a.ground.width, H = a.ground.height;
  const c = document.createElement("canvas"); c.width = W; c.height = H; const g = c.getContext("2d"); g.drawImage(a.ground, 0, 0);
  for (const o of a.objs) g.drawImage(o.frames[0], o.x, o.y);
  const t = document.createElement("canvas"); t.width = 360; t.height = 240; const tg = t.getContext("2d"); tg.imageSmoothingEnabled = true; tg.imageSmoothingQuality = "high";
  const sy = a.mtnRows * 16 * 0.55; const sh = H - sy; const k = Math.max(360 / W, 240 / sh);
  tg.drawImage(c, (W - 360 / k) / 2, sy, 360 / k, 240 / k, 0, 0, 360, 240);
  return (thumbCache[aid] = t.toDataURL("image/png"));
}
