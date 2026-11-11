// ui.js : HUD, signs, toasts and every panel (Dig Log, project detail, landmarks, map, Miner Card, contact, help, dialogue).
import { PROFILE, ABOUT, EDUCATION, PROJECTS, EXPERIENCE_IDS, SKILLS, INTERESTS, LANDMARKS, CAMPUS_FACTS, PETE_TALK, SITE } from "./data.js";

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
    // profile portrait
    const pc = $("#portrait"); const g = pc.getContext("2d"); g.imageSmoothingEnabled = false; g.drawImage(G.chars.isaac.portrait, 0, 0);
  },
  isOpen: () => !$("#modal-wrap").hidden,
  toggleWorld(force) { const wm = $("#world-menu"); const show = force ?? wm.hidden; wm.hidden = !show; $("#world-btn").setAttribute("aria-expanded", String(show)); if (show) $("#opt-time").focus(); },
  toast(msg) { const t = $("#toast"); t.textContent = msg; t.classList.remove("show"); void t.offsetWidth; t.classList.add("show"); clearTimeout(UI._tt); UI._tt = setTimeout(() => t.classList.remove("show"), 3600); },
  close() {
    $("#modal-wrap").hidden = true; $("#modal").className = ""; history = [];
    if (lastFocus && document.contains(lastFocus)) lastFocus.focus(); else document.body.focus();
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
    ($("#modal-body [autofocus]") || $("#modal-close")).focus();
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
  },
  placeSigns(toScreen) {
    for (const s of UI._signs || []) { const [x, y] = toScreen(s.x, s.y); const vis = x > -200 && y > -60 && x < innerWidth + 200 && y < innerHeight + 60; s.el.style.display = vis ? "" : "none"; if (vis) s.el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -100%)`; }
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
  else if (a === "ask") { const c = PETE_TALK.choices[+id]; let ans = c.a; if (ans === "fact") ans = CAMPUS_FACTS[(UI._fact = ((UI._fact ?? -1) + 1) % CAMPUS_FACTS.length)]; $("#npc-text").textContent = ans; document.querySelectorAll(".choice").forEach((x) => x.classList.toggle("on", x === b)); }
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
    if (type === "about") body = `<div class="feature"><div><p class="eyebrow">Here</p><h3 class="h3">Meet Isaac</h3><p>${esc(ABOUT[0])}</p></div><button class="btn primary" data-act="open" data-id="about" autofocus>Open my Miner Card ▶</button></div>`;
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
      after: () => here.forEach((p) => p.landmark === id && type === "project" && markVisited(p.id)),
    };
  },
  map() {
    const thumbs = { main: thumb("main"), athletics: thumb("athletics") };
    const cur = G.state.areaId;
    const areaCard = (aid, desc) => `<div class="acard${aid === cur ? " here" : ""}"><img src="${thumbs[aid]}" alt="Overview of ${AREA_NAME[aid]}" width="360" height="240"><div class="ac-body"><h3 class="h3">${AREA_NAME[aid]}</h3><p class="muted small">${desc}</p>${aid === cur ? `<span class="here-tag">You are here</span>` : `<button class="btn" data-act="bus" data-id="${aid}">Take the bus ▶</button>`}</div></div>`;
    const places = (aid) => Object.keys(AREA_OF).filter((k) => AREA_OF[k] === aid).map((k) => `<button class="place" data-act="go" data-id="${k}"><span class="pl-name">${esc(LM[k].name)}</span><span class="pl-theme">${esc(THEME[k])}</span><span aria-hidden="true">▶</span></button>`).join("");
    return {
      crumb: "EL PASO / MAP", title: "Map",
      html: `<p class="eyebrow">2 areas · 10 landmarks</p><h2 class="h1" id="modal-title">Explore campus.</h2><p>Main Campus holds the experience, projects, research and resume. Ride the Sun Metro to the Sun Bowl side for ESPN Hub, skills and contact. Stylized, not to scale.</p>
      <div class="grid2">${areaCard("main", "Centennial Plaza, the Library, the Union, CCSB, Engineering, the Museum and the Lhakhang")}${areaCard("athletics", "Sun Bowl Stadium, the Don Haskins Center and the Mining Minds sculpture")}</div>
      <h3 class="sec">Main Campus · places</h3><div class="grid2">${places("main")}</div>
      <h3 class="sec">Sun Bowl & Athletics · places</h3><div class="grid2">${places("athletics")}</div>`,
    };
  },
  about() {
    const exp = EXPERIENCE_IDS.map((id) => PROJECTS.find((p) => p.id === id));
    const work = PROJECTS.filter((p) => !EXPERIENCE_IDS.includes(p.id));
    return {
      crumb: "MINER CARD", title: "About Isaac",
      html: `<div class="mcard"><canvas id="mc-portrait" width="64" height="64" aria-hidden="true"></canvas>
        <div class="mc-main"><p class="eyebrow">${esc(EDUCATION.school)}</p><h2 class="h1" id="modal-title">${esc(PROFILE.fullName)}</h2><p class="role">${esc(PROFILE.headline)}.</p><p class="small">${esc(EDUCATION.degree)} · ${esc(EDUCATION.minor)}</p></div>
        <div class="mc-side"><div class="badges"><span class="badge">Class: Full-stack builder</span><span class="badge alt">Focus: Testing research</span></div>
        <div class="stats"><div class="stat"><span>Year</span><b>Senior</b></div><div class="stat"><span>Expected graduation</span><b>Dec 2026</b></div></div></div>
        <div class="mc-bio">${ABOUT.map((a) => `<p>${esc(a)}</p>`).join("")}</div></div>
      <div class="btnrow wide"><button class="btn primary" data-act="close">Explore campus ▶</button><button class="btn" data-act="open" data-id="log">View projects</button><a class="btn" href="${esc(PROFILE.resumePdf)}" target="_blank" rel="noopener">Full resume ↗</a></div>
      ${controlsStrip()}
      <h3 class="sec">Experience</h3><div class="grid2">${exp.map((p) => card(p, { short: true })).join("")}</div>
      <h3 class="sec">Selected work</h3><div class="grid3">${work.map((p) => card(p, { short: true })).join("")}</div>
      <div class="moves"><b>Tools in the pack:</b> ${SKILLS.slice(0, 2).flatMap((s) => s.items).map(esc).join(" · ")}<br><b>Also:</b> ${SKILLS.slice(2).flatMap((s) => s.items).map(esc).join(" · ")}</div>
      ${contactBlock()}<p class="fine">${esc(SITE.footer)} Not an official UTEP site.</p>`,
      after: () => { const g = $("#mc-portrait").getContext("2d"); g.imageSmoothingEnabled = false; g.drawImage(G.chars.isaac.portrait, 0, 0, 64, 64); },
    };
  },
  contact() {
    return { crumb: "CONTACT", title: "Contact", html: `<p class="eyebrow">Contact</p><h2 class="h1" id="modal-title">Say hello.</h2><p>${esc(PROFILE.lookingFor)}. I'm in ${esc(PROFILE.location)} and I read every email.</p>${contactBlock()}<p class="muted small">${esc(PROFILE.email)} · <a href="${esc(PROFILE.resumePdf)}" target="_blank" rel="noopener">Resume PDF ↗</a> · <a href="recruiter.html">Plain recruiter view</a></p>` };
  },
  help() {
    const rows = [["Move", "WASD, arrow keys, or the direction pad."], ["Run", "Hold Shift, or toggle Run."], ["Talk", "Walk up to someone with a ! and press E."], ["Places", "Press E near a building, or use the yellow button."], ["Dig Log", "Press P to see every project and job."], ["Map", "Press M. Take the bus between areas."], ["Contact", "Press C."], ["Close", "Press Escape, or select Close."]];
    return { crumb: "HELP", title: "How to play", html: `<h2 class="h1" id="modal-title">How to play.</h2><p>Explore the UTEP campus. Each landmark holds part of Isaac's portfolio. The Sun Metro bus runs between Main Campus and the Sun Bowl side.</p>
      <table class="help"><tbody>${rows.map(([a, b]) => `<tr><th scope="row">${a}</th><td>${b}</td></tr>`).join("")}</tbody></table>
      <p class="muted small">World options change the time of day, the weather, sound and zoom.</p>
      <label class="check"><input type="checkbox" id="reduce-cb" ${G.state.reduce ? "checked" : ""}> Reduce animation</label>
      <p class="fine">${esc(SITE.footer)} Not an official UTEP site. All art is original. <a href="recruiter.html">Skip the game</a>.</p>` };
  },
  npc(o) {
    const pete = o.id === "pete";
    return {
      crumb: "", title: o.name, head: "npc",
      html: `<div class="npc-top"><canvas id="npc-portrait" width="64" height="64" aria-hidden="true"></canvas><div><p class="eyebrow light">Talking with</p><h2 class="h2" id="modal-title">${esc(o.name)}</h2></div></div>
      <p id="npc-text" aria-live="polite">${esc(pete ? PETE_TALK.greet : o.line)}</p>
      ${pete ? `<h3 class="h3">Ask Pete</h3><div class="grid3">${PETE_TALK.choices.map((c, i) => `<button class="choice" data-act="ask" data-id="${i}" ${i === 0 ? "autofocus" : ""}>${esc(c.q)} <span aria-hidden="true">▶</span></button>`).join("")}</div><div class="btnrow"><button class="btn ghost" data-act="open" data-id="about">Miner Card ▶</button><button class="btn ghost" data-act="open" data-id="log">Dig Log ▶</button></div>` : `<div class="btnrow"><button class="btn" data-act="close" autofocus>Thanks!</button></div>`}`,
      after: () => { const g = $("#npc-portrait").getContext("2d"); g.imageSmoothingEnabled = false; g.drawImage(o.portrait, 0, 0, 64, 64); },
    };
  },
};

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
