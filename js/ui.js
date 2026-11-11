// Overlays: content sheets, gear, mission map, loot, complete, HUD, title logo.
import { PROFILE, ABOUT, EDUCATION, PROJECTS, CATEGORIES, SKILLS, INTERESTS, LANDMARKS, CAMPUS_FACTS, EXPERIENCE_IDS } from "./data.js";
import { makeCanvas, clamp } from "./util.js";
import { MISSIONS, MISSION_BY_ID, RARITY, LOOT } from "./missions.js";
import { iconURL, iconCanvas, heartCanvas } from "./icons.js";
import { sfx } from "./audio.js";

const $ = (s, el = document) => el.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const LM = Object.fromEntries(LANDMARKS.map((l) => [l.id, l]));
const icon = (name, size = 48, alt = "") => `<img class="px-icon" src="${iconURL(name)}" width="${size}" height="${size}" alt="${esc(alt)}"${alt ? "" : ' aria-hidden="true"'}>`;

let handlers = {}, lastFocus = null;
const wraps = {};
function hideAllOverlays() {
  for (const w of Object.values(wraps)) if (w) w.hidden = true;
}

export function anyOverlay() {
  return !!(wraps.panel && !wraps.panel.hidden)
    || !!(wraps.inv && !wraps.inv.hidden)
    || !!(wraps.map && !wraps.map.hidden)
    || !!(wraps.loot && !wraps.loot.hidden)
    || !!(wraps.complete && !wraps.complete.hidden);
}
export const isOpen = anyOverlay;

export function initUI(h) {
  handlers = h;
  wraps.panel = $("#panel-wrap"); wraps.inv = $("#inv-wrap"); wraps.map = $("#map-wrap");
  wraps.loot = $("#loot-wrap"); wraps.complete = $("#complete-wrap");
  $("#panel-close").addEventListener("click", closeAll);
  $("#inv-close").addEventListener("click", closeAll);
  $("#map-close").addEventListener("click", closeAll);
  $("#loot-take").addEventListener("click", () => { sfx.loot(); handlers.onLootTake?.(); closeLoot(); });
  $("#complete-continue").addEventListener("click", () => { closeAll(); handlers.onReturnCamp?.(); });
  $("#complete-read").addEventListener("click", () => {
    const id = $("#complete-read").dataset.mission;
    closeAll();
    const m = MISSION_BY_ID[id];
    if (m) openPanel(m.panel.type, m.panel.id);
  });
  wraps.panel.addEventListener("mousedown", (e) => { if (e.target === wraps.panel) closeAll(); });
  wraps.inv.addEventListener("mousedown", (e) => { if (e.target === wraps.inv) closeAll(); });
  wraps.map.addEventListener("mousedown", (e) => { if (e.target === wraps.map) closeAll(); });
  document.addEventListener("keydown", (e) => {
    if (!anyOverlay()) return;
    if (e.key === "Escape") { e.preventDefault(); closeAll(); }
    if (e.key === "Tab" && !wraps.panel.hidden) trapFocus(e, $("#panel"));
    if ($("#panel")?.classList.contains("book") && !/INPUT/.test(e.target.tagName)) {
      if (e.key === "ArrowRight") { e.preventDefault(); turn(1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); turn(-1); }
    }
  });
  document.querySelectorAll("[data-open]").forEach((b) => b.addEventListener("click", () => {
    sfx.click();
    if (b.dataset.open === "inventory" || b.dataset.open === "gear") openInventory();
    else if (b.dataset.open === "map") openMissionMap();
    else openPanel(b.dataset.open);
  }));
  $("#btn-inv")?.addEventListener("click", () => { sfx.click(); openInventory(); });
  $("#btn-map")?.addEventListener("click", () => { sfx.click(); handlers.onMapButton?.(); });
  $("#btn-potion")?.addEventListener("click", () => handlers.onPotion?.());
  $("#btn-roll")?.addEventListener("click", () => handlers.onRoll?.());
  document.querySelectorAll("[data-art]").forEach((b) => b.addEventListener("click", () => handlers.onArtifact?.(+b.dataset.art)));

  const tip = $("#tooltip");
  const showTip = (el) => {
    const t = el.dataset.tip; if (!t) return;
    tip.innerHTML = t; tip.hidden = false;
    const r = el.getBoundingClientRect(), tw = tip.offsetWidth, th = tip.offsetHeight;
    let x = r.left + r.width / 2 - tw / 2, y = r.top - th - 8;
    if (y < 6) y = r.bottom + 8;
    x = Math.max(6, Math.min(innerWidth - tw - 6, x));
    tip.style.left = x + "px"; tip.style.top = y + "px";
  };
  const hideTip = () => { tip.hidden = true; };
  document.addEventListener("pointerover", (e) => { const el = e.target.closest?.("[data-tip]"); if (el) showTip(el); else hideTip(); });
  document.addEventListener("focusin", (e) => { const el = e.target.closest?.("[data-tip]"); if (el) showTip(el); else hideTip(); });
  document.addEventListener("focusout", hideTip);

  // HUD static icons
  $("#potion-icon").src = iconURL("potion");
  $("#map-icon").src = iconURL("map");
  $("#roll-icon").src = iconURL("roll");
  $("#arrows-icon").src = iconURL("arrows");
  $("#inv-icon").src = iconURL("bag");
  $("#coin-icon").src = iconURL("coin");
}

function trapFocus(e, panel) {
  const f = [...panel.querySelectorAll("a[href],button,input,iframe,[tabindex]")].filter((x) => !x.disabled && x.offsetParent !== null);
  if (!f.length) return;
  const first = f[0], last = f[f.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}

export function closeAll() {
  const was = anyOverlay();
  hideAllOverlays();
  $("#tooltip").hidden = true;
  if (was) { sfx.close(); handlers.onClose?.(); }
  if (lastFocus && document.body.contains(lastFocus) && lastFocus !== document.body) lastFocus.focus();
  else $("#game")?.focus();
}
export const closePanel = closeAll;
export const closeLoot = () => { wraps.loot.hidden = true; };

function showSheet(title, html, style = "", key = title) {
  if (wraps.panel.hidden) lastFocus = document.activeElement;
  hideAllOverlays();
  $("#panel-title").textContent = title;
  $("#panel").className = "sheet " + style;
  $("#panel-body").innerHTML = html;
  $("#panel-body").scrollTop = 0;
  wraps.panel.hidden = false;
  sfx.open();
  handlers.onOpen?.(key);
  setTimeout(() => $("#panel-close").focus({ preventScroll: true }), 0);
  bindSheet($("#panel-body"));
  if (style.includes("book")) initBook();
  syncOptionButtons();
}
function bindSheet(root) {
  root.querySelectorAll("[data-project]").forEach((b) => b.addEventListener("click", () => openPanel("project", b.dataset.project)));
  root.querySelectorAll("[data-open]").forEach((b) => b.addEventListener("click", () => {
    if (b.dataset.open === "map") { closeAll(); openMissionMap(); }
    else openPanel(b.dataset.open);
  }));
  root.querySelectorAll("[data-act]").forEach((b) => b.addEventListener("click", () => { handlers.actions?.[b.dataset.act]?.(); syncOptionButtons(); }));
  root.querySelectorAll("[data-copy]").forEach((b) => b.addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(b.dataset.copy); b.textContent = "Copied!"; } catch { b.textContent = "Copy failed"; }
    setTimeout(() => (b.textContent = "Copy"), 1500);
  }));
  root.querySelectorAll("[data-mission]").forEach((b) => b.addEventListener("click", () => { closeAll(); handlers.onStartMission?.(b.dataset.mission); }));
}

let page = 0;
function initBook() {
  page = 0;
  const body = $("#panel-body");
  const pages = body.querySelectorAll(".page");
  const nav = document.createElement("div"); nav.className = "book-nav";
  nav.innerHTML = `<button class="ui-btn small prev" type="button" aria-label="Previous page">Prev</button><span class="page-no" aria-live="polite"></span><button class="ui-btn small next" type="button" aria-label="Next page">Next</button>`;
  body.appendChild(nav);
  nav.querySelector(".prev").addEventListener("click", () => turn(-1));
  nav.querySelector(".next").addEventListener("click", () => turn(1));
  nav.hidden = pages.length < 2;
  turn(0);
}
function turn(d) {
  const pages = $("#panel-body").querySelectorAll(".page"); if (!pages.length) return;
  const n = Math.max(0, Math.min(pages.length - 1, page + d));
  if (d && n !== page) sfx.page();
  page = n;
  pages.forEach((p, i) => (p.hidden = i !== page));
  const no = $("#panel-body").querySelector(".page-no"); if (no) no.textContent = `Page ${page + 1} of ${pages.length}`;
  const pv = $("#panel-body").querySelector(".prev"), nx = $("#panel-body").querySelector(".next");
  if (pv) pv.disabled = page === 0; if (nx) nx.disabled = page === pages.length - 1;
}

function factBox(id) {
  const l = LM[id]; if (!l) return "";
  return `<aside class="sign-fact"><strong>${esc(l.name)}</strong><p>${esc(l.fact)} <a href="${esc(l.source)}" target="_blank" rel="noopener">Source</a></p></aside>`;
}
const chips = (arr) => `<ul class="chips">${arr.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>`;
function linkRow() {
  const parts = [`<a class="ui-btn" href="mailto:${esc(PROFILE.email)}">Email</a>`, `<a class="ui-btn" href="${esc(PROFILE.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>`];
  if (PROFILE.github) parts.push(`<a class="ui-btn" href="${esc(PROFILE.github)}" target="_blank" rel="noopener">GitHub</a>`);
  parts.push(`<a class="ui-btn" href="${esc(PROFILE.resumePdf)}" target="_blank" rel="noopener">Resume (PDF)</a>`);
  return `<div class="btn-row">${parts.join("")}</div>`;
}
export function panelLabel(l) {
  const t = l.panel.type;
  if (t === "project") return PROJECTS.find((p) => p.id === l.panel.id)?.title || "";
  return { about: "About Me", experience: "Experience", resume: "Resume", skills: "Skills", contact: "Contact", lhakhang: "About this site" }[t] || "";
}

let dexQuery = "", dexCat = "All";
export function openPanel(type, arg) {
  switch (type) {
    case "projects": return showSheet("Projects", projectsHTML(), "", "projects"), bindDex();
    case "project": return showSheet(PROJECTS.find((p) => p.id === arg)?.title || "Project", projectHTML(arg), "book", "project:" + arg);
    case "about": return showSheet("About Me", aboutHTML(), "book", "about");
    case "experience": return showSheet("Experience", experienceHTML(), "book", "experience");
    case "resume": return showSheet("Resume", resumeHTML(), "wide", "resume");
    case "skills": return showSheet("Skills", skillsHTML(), "", "skills");
    case "contact": return showSheet("Contact", contactHTML(), "", "contact");
    case "lhakhang": return showSheet("The Lhakhang", lhakhangHTML(), "book", "lhakhang");
    case "help": return showSheet("Paused", helpHTML(), "", "help");
    case "inventory": case "gear": return openInventory();
    case "map": return openMissionMap();
  }
}

const tipFor = (p) => `<span class="tt-title">${esc(p.title)}</span><span class="tt-line">${esc(p.kind)}</span><span class="tt-blue">${esc(p.categories.join(", "))}</span><span class="tt-sub">${esc(p.dates)}</span>`;
function projectsHTML() {
  return `<p class="lede">Every project and job, as items. Hover for details, click to open the full story.</p>
  <div class="dex-tools">
    <label class="sr-only" for="dex-search">Search projects</label>
    <input id="dex-search" class="mc-input" type="search" placeholder="Search: React, testing, Disney..." value="${esc(dexQuery)}" autocomplete="off">
    <div class="filters" role="group" aria-label="Filter by category">${CATEGORIES.map((c) => `<button class="ui-btn small ${c === dexCat ? "primary" : ""}" type="button" aria-pressed="${c === dexCat}" data-cat="${esc(c)}">${esc(c)}</button>`).join("")}</div>
  </div>
  <div id="dex-grid" class="dex-grid"></div>`;
}
function bindDex() {
  const input = $("#dex-search"), grid = $("#dex-grid");
  const render = () => {
    const q = dexQuery.trim().toLowerCase();
    const list = PROJECTS.filter((p) => (dexCat === "All" || p.categories.includes(dexCat)) &&
      (!q || [p.title, p.kind, p.summary, ...p.stack, ...p.categories, ...p.bullets].join(" ").toLowerCase().includes(q)));
    grid.innerHTML = list.map((p) => `<button class="slot-card" type="button" data-project="${p.id}" data-tip="${esc(tipFor(p))}" aria-label="${esc(p.title)}: ${esc(p.kind)}, ${esc(p.dates)}">
      ${icon(p.icon, 40)}<span class="ttl">${esc(p.title)}</span><span class="muted small">${esc(p.dates)}</span></button>`).join("") || `<p class="muted">No matches.</p>`;
    grid.querySelectorAll("[data-project]").forEach((b) => b.addEventListener("click", () => openPanel("project", b.dataset.project)));
  };
  input.addEventListener("input", () => { dexQuery = input.value; render(); });
  $("#panel-body").querySelectorAll("[data-cat]").forEach((b) => b.addEventListener("click", () => {
    dexCat = b.dataset.cat;
    $("#panel-body").querySelectorAll("[data-cat]").forEach((x) => { x.classList.toggle("primary", x === b); x.setAttribute("aria-pressed", x === b); });
    render();
  }));
  render();
}
function projectHTML(id) {
  const i = PROJECTS.findIndex((x) => x.id === id), p = PROJECTS[i];
  if (!p) return "<p>Not found.</p>";
  const prev = PROJECTS[(i + PROJECTS.length - 1) % PROJECTS.length], next = PROJECTS[(i + 1) % PROJECTS.length];
  return `<section class="page"><div class="case-head">${icon(p.icon, 56)}<div><p class="kicker">${esc(p.kind)}</p><p class="muted">${esc(p.dates)}</p></div></div>
    ${p.fullTitle ? `<p class="fulltitle">"${esc(p.fullTitle)}"</p>` : ""}
    <p class="lede">${esc(p.summary)}</p><h3>Status</h3><p>${esc(p.status)}</p></section>
    <section class="page"><h3>What I did</h3><ul class="bullets">${p.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul></section>
    <section class="page"><h3>Tools</h3>${chips(p.stack)}
    ${p.links.length ? `<h3>Links</h3><div class="btn-row">${p.links.map((k) => `<a class="ui-btn" href="${esc(k.url)}" target="_blank" rel="noopener">${esc(k.label)}</a>`).join("")}</div>` : ""}
    ${factBox(p.landmark)}
    <div class="btn-row"><button class="ui-btn small" type="button" data-project="${prev.id}">&lt; ${esc(prev.title)}</button><button class="ui-btn small" type="button" data-project="${next.id}">${esc(next.title)} &gt;</button></div>
    <div class="btn-row"><button class="ui-btn" type="button" data-open="projects">All projects</button><button class="ui-btn" type="button" data-mission="${p.landmark}">Play this mission</button></div></section>`;
}
function aboutHTML() {
  return ABOUT.map((p, i) => `<section class="page">${i === 0 ? `<div class="case-head">${icon("head", 56)}<div><p class="kicker">${esc(PROFILE.name)}</p><p class="muted">${esc(PROFILE.headline)}</p></div></div>` : ""}<p>${esc(p)}</p></section>`).join("") +
    `<section class="page"><h3>Education</h3><p><strong>${esc(EDUCATION.school)}</strong><br>${esc(EDUCATION.degree)}, ${esc(EDUCATION.minor)}<br>${esc(EDUCATION.dates)}, ${esc(EDUCATION.location)}</p>
    <h3>Interests</h3>${chips(INTERESTS)}</section>
    <section class="page">${factBox("plaza")}${linkRow()}<div class="btn-row"><button class="ui-btn" type="button" data-mission="plaza">Play the About Me mission</button></div></section>`;
}
function experienceHTML() {
  return EXPERIENCE_IDS.map((id) => {
    const p = PROJECTS.find((x) => x.id === id);
    return `<section class="page exp"><div class="case-head">${icon(p.icon, 48)}<div><h3>${esc(p.title)}</h3><p class="kicker">${esc(p.kind)}</p><p class="muted">${esc(p.dates)}</p></div></div>
      <ul class="bullets">${p.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul></section>`;
  }).join("") + `<section class="page">${factBox("union")}<div class="btn-row"><button class="ui-btn" type="button" data-open="resume">Open resume</button><button class="ui-btn" type="button" data-mission="union">Play this mission</button></div></section>`;
}
function resumeHTML() {
  return `<div class="resume">
    <div class="btn-row"><a class="ui-btn primary" href="${esc(PROFILE.resumePdf)}" download="Resume_Isaac_Moreno.pdf">Download PDF</a>
    <a class="ui-btn" href="${esc(PROFILE.resumePdf)}" target="_blank" rel="noopener">Open in new tab</a>
    <a class="ui-btn" href="recruiter.html">Plain web version</a></div>
    <div class="pdf-frame"><iframe src="${esc(PROFILE.resumePdf)}#view=FitH" title="Isaac Moreno resume PDF" loading="lazy"></iframe></div>
    ${factBox("library")}</div>`;
}
function skillsHTML() {
  return `<p class="lede">Hover or tap a slot to read it. Everything here is on my resume.</p>
  ${SKILLS.map((g) => `<section class="inv"><h3>${esc(g.label)}</h3><ul class="skill-grid">${g.items.map((s) => `<li class="skill-slot" tabindex="0" data-tip="${esc(`<span class='tt-title'>${esc(s)}</span><span class='tt-blue'>${esc(g.label)}</span>`)}"><span>${esc(s)}</span></li>`).join("")}</ul></section>`).join("")}
  ${factBox("haskins")}`;
}
function contactHTML() {
  return `<div class="contact">
    <p class="lede">I'm looking for new-grad software engineering roles. The fastest way to reach me is email.</p>
    <dl>
      <dt>Email</dt><dd><a href="mailto:${esc(PROFILE.email)}">${esc(PROFILE.email)}</a> <button class="ui-btn small" type="button" data-copy="${esc(PROFILE.email)}">Copy</button></dd>
      <dt>LinkedIn</dt><dd><a href="${esc(PROFILE.linkedin)}" target="_blank" rel="noopener">${esc(PROFILE.linkedin.replace("https://", ""))}</a></dd>
      ${PROFILE.github ? `<dt>GitHub</dt><dd><a href="${esc(PROFILE.github)}" target="_blank" rel="noopener">${esc(PROFILE.github.replace("https://", ""))}</a></dd>` : ""}
      <dt>Location</dt><dd>${esc(PROFILE.location)}</dd>
    </dl>${linkRow()}${factBox("pick")}</div>`;
}
function lhakhangHTML() {
  return `<section class="page">${factBox("lhakhang")}
  <h3>About this site</h3>
  <p>A small playable portfolio. You start at a camp in Centennial Plaza, pick a UTEP landmark from the mission map, and walk a short dungeon to a chest that holds part of my story. Plain HTML, CSS, and JavaScript with a 3D voxel world rendered by Three.js (MIT license). Every block texture, character, and icon is original art generated in code.</p>
  <p>Prefer a normal page? <a href="recruiter.html">Open the plain recruiter view</a>.</p></section>
  <section class="page"><h3>Campus facts</h3><ul class="bullets">${CAMPUS_FACTS.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
  <p class="muted small">Fan-inspired, not affiliated with Mojang or Microsoft, and not endorsed by UTEP. Font: Monocraft by Idrees Hassan (SIL Open Font License 1.1). Landmark facts link to their sources.</p></section>`;
}
function helpHTML() {
  const rows = [
    ["W A S D / Arrows", "Walk"],
    ["Space", "Roll / dodge (short cooldown)"],
    ["F or left click", "Attack"],
    ["E / Enter", "Interact (map, NPCs, chests, doors)"],
    ["Q", "Drink a healing tonic"],
    ["1 2 3", "Use equipped artifacts"],
    ["I", "Gear and inventory"],
    ["M", "Mission select map (camp) or local objective"],
    ["H or ?", "This screen"],
    ["Mouse wheel", "Zoom the camera"],
    ["Esc or P", "Pause, or close a panel"],
  ];
  return `<div class="btn-row" style="margin-top:0"><button class="ui-btn primary big" type="button" data-act="resume" style="width:100%;min-width:0">Resume</button></div>
  <div class="options" role="group" aria-label="Options">
    <button id="t-quality" class="ui-btn" style="width:100%;margin:4px 0" type="button" data-act="quality"></button>
    <button id="t-time" class="ui-btn" style="width:100%;margin:4px 0" type="button" data-act="time"></button>
    <button id="t-sound" class="ui-btn" style="width:100%;margin:4px 0" type="button" data-act="sound" aria-pressed="false"></button>
    <button id="t-motion" class="ui-btn" style="width:100%;margin:4px 0" type="button" data-act="motion" aria-pressed="false"></button>
  </div>
  <table class="keys"><tbody>${rows.map(([k, v]) => `<tr><th scope="row"><kbd>${esc(k)}</kbd></th><td>${esc(v)}</td></tr>`).join("")}</tbody></table>
  <p>On a phone, drag the left stick to walk. <strong>A</strong> interacts, <strong>B</strong> rolls, the sword swings, and the bottle drinks a tonic.</p>
  <div class="btn-row"><a class="ui-btn" href="recruiter.html">Skip game (recruiter view)</a></div>`;
}
function syncOptionButtons() {
  const s = handlers.getState?.(); if (!s) return;
  const set = (id, txt, pressed) => { const b = document.getElementById(id); if (!b) return; b.textContent = txt; if (pressed != null) b.setAttribute("aria-pressed", pressed); };
  const cap = (x) => x[0].toUpperCase() + x.slice(1);
  set("t-time", `Time of day: ${cap(s.time)}`); set("t-quality", `Graphics: ${s.qualityName || "High"}`); set("t-sound", `Sound: ${s.sound ? "ON" : "OFF"}`, s.sound); set("t-motion", `Motion: ${s.reduced ? "Reduced" : "Full"}`, s.reduced);
}

// ---------------- inventory
export function openInventory() {
  if (wraps.inv.hidden) lastFocus = document.activeElement;
  hideAllOverlays();
  wraps.inv.hidden = false;
  sfx.open();
  if (!handlers.getLoadout?.()?.selected) {
    const first = handlers.getLoadout?.()?.items?.[0];
    if (first) handlers.selectItem?.(first.id);
  }
  renderInventory();
  setTimeout(() => $("#inv-close").focus({ preventScroll: true }), 0);
}
function rarityClass(r) { return r === "Legendary" ? "tt-leg" : r === "Unique" ? "tt-uni" : r === "Rare" ? "tt-rare" : ""; }
function renderInventory() {
  const st = handlers.getLoadout?.(); if (!st) return;
  const slots = [
    ["helm", "Helm"], ["chest", "Chest"], ["melee", "Melee"], ["ranged", "Ranged"],
    ["legs", "Legs"], ["boots", "Boots"],
  ];
  const eq = (slot, label) => {
    const it = st.equipped[slot];
    if (!it) return `<button class="eq-slot empty" type="button" data-slot="${slot}" aria-label="${label}, empty">${esc(label)}</button>`;
    return `<button class="eq-slot" type="button" data-slot="${slot}" data-item="${it.id}" data-tip="${esc(itemTip(it))}" aria-label="${label}: ${it.name}"><img src="${iconURL(it.icon)}" alt="" width="40" height="40"></button>`;
  };
  const arts = [0, 1, 2].map((i) => {
    const it = st.equipped.artifacts[i];
    if (!it) return `<button class="eq-slot empty" type="button" data-artslot="${i}" aria-label="Artifact ${i + 1}, empty">Art ${i + 1}</button>`;
    return `<button class="eq-slot" type="button" data-artslot="${i}" data-item="${it.id}" data-tip="${esc(itemTip(it))}" aria-label="Artifact ${i + 1}: ${it.name}"><img src="${iconURL(it.icon)}" alt=""></button>`;
  }).join("");
  const tals = [0, 1].map((i) => {
    const it = st.equipped.talismans[i];
    if (!it) return `<button class="eq-slot empty" type="button" data-talslot="${i}" aria-label="Talisman ${i + 1}, empty">Tal ${i + 1}</button>`;
    return `<button class="eq-slot" type="button" data-talslot="${i}" data-item="${it.id}" data-tip="${esc(itemTip(it))}" aria-label="Talisman ${i + 1}: ${it.name}"><img src="${iconURL(it.icon)}" alt=""></button>`;
  }).join("");
  const sel = st.selected;
  const list = st.items.map((it) => `<button class="item-btn ${sel && sel.id === it.id ? "on" : ""}" type="button" data-pick="${it.id}">
    <img src="${iconURL(it.icon)}" width="32" height="32" alt="">
    <span><span class="${rarityClass(it.rarity)}">${esc(it.name)}</span><br><span class="muted small">${esc(it.rarity)} · ${esc(it.slot)} · Power ${it.power}</span></span>
  </button>`).join("");
  const detail = sel ? `<h3 class="${rarityClass(sel.rarity)}">${esc(sel.name)}</h3>
    <p class="muted">${esc(sel.rarity)} ${esc(sel.slot)} · Power ${sel.power}</p>
    <p>${esc(sel.desc)}</p>
    <div class="btn-row"><button class="ui-btn primary" type="button" data-equip="${sel.id}">Equip</button></div>` : `<p class="muted">Select an item to inspect it.</p>`;
  const heroSrc = handlers.getHeroPortrait?.();
  $("#inv-body").innerHTML = `
    <div class="inv-grid-wrap"><h3>Inventory</h3><div class="item-list">${list || `<p class="muted">No items yet.</p>`}</div></div>
    <div class="equip">
      <div class="equip-row">${eq("helm", "Helm")}${eq("chest", "Chest")}</div>
      <div class="equip-hero">${heroSrc ? `<img src="${heroSrc}" width="128" height="192" alt="Your hero: Isaac the Miner in orange and blue armor">` : ""}</div>
      <div class="equip-row">${eq("melee", "Melee")}${eq("ranged", "Ranged")}</div>
      <div class="equip-row">${eq("legs", "Legs")}${eq("boots", "Boots")}</div>
      <div class="equip-row">${arts}</div>
      <div class="equip-row">${tals}</div>
      <p class="power-line">Power ${st.power} · Paydirt ${st.paydirt}</p>
    </div>
    <div class="inv-detail">${detail}</div>`;
  $("#inv-body").querySelectorAll("[data-pick]").forEach((b) => b.addEventListener("click", () => { handlers.selectItem?.(b.dataset.pick); renderInventory(); }));
  $("#inv-body").querySelectorAll("[data-equip]").forEach((b) => b.addEventListener("click", () => { handlers.equipItem?.(b.dataset.equip); renderInventory(); }));
}
function itemTip(it) {
  const cls = rarityClass(it.rarity);
  return `<span class="tt-title ${cls}">${esc(it.name)}</span><span class="tt-line">${esc(it.rarity)} · ${esc(it.slot)}</span><span class="tt-sub">Power ${it.power}</span>`;
}

// ---------------- mission map (3D diorama is drawn by the game; this file owns the briefing and labels)
let mapSelected = null;
export function openMissionMap(selectId) {
  if (wraps.map.hidden) lastFocus = document.activeElement;
  hideAllOverlays();
  wraps.map.hidden = false;
  sfx.open();
  mapSelected = selectId || mapSelected;
  handlers.onMapOpen?.(mapSelected);
  renderMissionList();
  renderBriefing();
  setTimeout(() => $("#map-close").focus({ preventScroll: true }), 0);
}
export function mapSelect(id) {
  mapSelected = id;
  handlers.onMapSelect?.(id);
  renderMissionList();
  renderBriefing();
}
export function bindMissionMapClick() {}
function renderMissionList() {
  const el = $("#mission-list"); if (!el) return;
  const st = handlers.getState?.() || { visited: new Set() };
  el.innerHTML = MISSIONS.map((m) => `<li><button type="button" class="ml-btn ${m.id === mapSelected ? "on" : ""} ${st.visited?.has?.(m.id) ? "done" : ""}" data-pickmission="${m.id}" aria-pressed="${m.id === mapSelected}"><img src="${iconURL(m.loot.icon)}" width="20" height="20" alt="">${esc(m.name)}</button></li>`).join("");
  el.querySelectorAll("[data-pickmission]").forEach((b) => {
    b.addEventListener("click", () => { sfx.click(); mapSelect(b.dataset.pickmission); });
    b.addEventListener("pointerenter", () => setMapHover(b.dataset.pickmission));
    b.addEventListener("pointerleave", () => setMapHover(null));
  });
}
const labelEls = new Map();
const SHORT = { plaza: "Centennial Plaza", union: "Union", library: "Library", ccsb: "CCSB", engineering: "Engineering", sunbowl: "Sun Bowl", museum: "Museum", haskins: "Haskins Center", pick: "Mining Minds", lhakhang: "Lhakhang" };
let mapHover = null;
export function setMapHover(id) { mapHover = id || null; }
// only the selected and hovered beacons get a name tag, lifted above the map on a
// leader line and kept inside the gap between the mission list and the briefing panel
export function renderMapLabels(project, nodes) {
  const host = $("#map-labels"); if (!host) return;
  const st = handlers.getState?.() || { visited: new Set() };
  const lr = $("#mission-list")?.getBoundingClientRect(), br = $("#briefing")?.getBoundingClientRect();
  const narrow = innerWidth < 760;
  const minX = narrow || !lr ? 8 : lr.right + 10, maxX = narrow || !br ? innerWidth - 8 : br.left - 10;
  const shown = [mapSelected, mapHover].filter((v, i, a) => v && a.indexOf(v) === i);
  let slot = 0;
  for (const n of nodes) {
    let el = labelEls.get(n.id);
    if (!el) {
      el = document.createElement("div"); el.className = "map-tag";
      el.innerHTML = `<span class="mt-line"></span><button type="button" class="map-label" tabindex="-1"><span class="ml-name">${esc(SHORT[n.id] || MISSION_BY_ID[n.id].name)}</span><span class="ml-sub">${esc(MISSION_BY_ID[n.id].subtitle)}</span></button>`;
      el.querySelector("button").addEventListener("click", () => { sfx.click(); mapSelect(n.id); });
      host.appendChild(el); labelEls.set(n.id, el);
    }
    const p = project(n);
    const on = shown.includes(n.id);
    el.hidden = !p.vis || !on;
    if (el.hidden) continue;
    const btn = el.querySelector("button"), line = el.querySelector(".mt-line");
    const w = btn.offsetWidth || 120, h = btn.offsetHeight || 34;
    const lift = 54 + (slot++) * 0; // one tag per beacon, never stacked on another
    let lx = Math.min(maxX - w / 2, Math.max(minX + w / 2, p.x));
    let ly = Math.max(70 + h, p.y - lift);
    btn.style.transform = `translate(${lx - w / 2}px, ${ly - h}px)`;
    const dx = p.x - lx, dy = p.y - ly, len = Math.hypot(dx, dy);
    line.style.width = `${len}px`;
    line.style.transform = `translate(${lx}px, ${ly}px) rotate(${Math.atan2(dy, dx)}rad)`;
    btn.classList.toggle("on", n.id === mapSelected);
    btn.classList.toggle("done", !!st.visited?.has?.(n.id));
  }
}
function renderBriefing() {
  const el = $("#briefing");
  const m = MISSION_BY_ID[mapSelected];
  if (!m) { el.innerHTML = `<p class="kicker">Mission select</p><h3>Choose a landmark</h3><p class="empty">Click a glowing beacon on the map, or pick one from the list. Each mission opens a piece of Isaac's story.</p>`; return; }
  const st = handlers.getState?.() || { visited: new Set(), power: 0 };
  const done = st.visited?.has?.(m.id);
  el.innerHTML = `
    <p class="kicker">${done ? "Completed" : "Mission"}</p>
    <h3>${esc(m.name)}</h3>
    <p class="muted">${esc(m.subtitle)}</p>
    <p>${esc(m.blurb)}</p>
    <div class="brief-stats"><span>Power ${m.recommended}</span><span>Yours ${st.power || 0}</span></div>
    <p class="loot-line">${icon(m.loot.icon, 28)}<span>Reward: <strong class="${rarityClass(m.loot.rarity)}">${esc(m.loot.name)}</strong><br><span class="muted small">${esc(m.loot.rarity)}</span></span></p>
    ${m.fact ? `<p class="small muted">${esc(m.fact)} <a href="${esc(m.source)}" target="_blank" rel="noopener">Source</a></p>` : ""}
    <div class="btn-row">
      <button class="ui-btn primary big" type="button" id="brief-start" style="min-width:0;width:100%">Start mission</button>
      <button class="ui-btn" type="button" id="brief-read" style="width:100%">Read the story</button>
    </div>`;
  $("#brief-start").addEventListener("click", () => { closeAll(); handlers.onStartMission?.(m.id); });
  $("#brief-read").addEventListener("click", () => { closeAll(); openPanel(m.panel.type, m.panel.id); });
}

// ---------------- loot + complete
export function showLoot(item) {
  if (wraps.loot.hidden) lastFocus = document.activeElement;
  hideAllOverlays();
  wraps.loot.hidden = false;
  sfx.chest();
  $("#loot-kicker").textContent = "Loot found";
  $("#loot-name").textContent = item.name;
  $("#loot-name").style.color = RARITY[item.rarity]?.color || "#fff";
  $("#loot-rarity").textContent = `${item.rarity}  ·  ${item.slot}  ·  Power ${item.power}`;
  $("#loot-desc").textContent = item.desc;
  const art = $("#loot-art");
  const ctx = art.getContext("2d");
  ctx.clearRect(0, 0, art.width, art.height);
  const glow = ctx.createRadialGradient(100, 100, 10, 100, 100, 95);
  glow.addColorStop(0, "rgba(255,200,80,0.85)");
  glow.addColorStop(0.45, "rgba(255,140,40,0.35)");
  glow.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = glow; ctx.fillRect(0, 0, 200, 200);
  const ic = iconCanvas(item.icon, 12);
  ctx.imageSmoothingEnabled = false;
  const s = 128;
  ctx.drawImage(ic, (200 - s) / 2, (200 - s) / 2, s, s);
  setTimeout(() => $("#loot-take").focus({ preventScroll: true }), 0);
}
export function showComplete(mission, stats) {
  if (wraps.complete.hidden) lastFocus = document.activeElement;
  hideAllOverlays();
  wraps.complete.hidden = false;
  sfx.complete();
  $("#complete-title").textContent = mission.name;
  $("#complete-read").dataset.mission = mission.id;
  $("#complete-body").innerHTML = `
    <p>${esc(mission.subtitle)}</p>
    <div class="reward">${icon(mission.loot.icon, 40)}<div><strong class="${rarityClass(mission.loot.rarity)}">${esc(mission.loot.name)}</strong><div class="muted">${esc(mission.loot.rarity)} · Power ${mission.loot.power}</div></div></div>
    <div class="reward"><div>Paydirt +${stats.paydirt}<br>Experience +${stats.xp}<br>Enemies defeated: ${stats.kills}</div></div>`;
  setTimeout(() => $("#complete-continue").focus({ preventScroll: true }), 0);
}

// ---------------- HUD
export function setHUD(p) {
  if ("hp" in p) {
    const frac = clamp(p.hp / (p.maxHp || 100), 0, 1);
    const c = $("#heart-canvas");
    if (c) {
      const img = heartCanvas(frac, 88);
      const ctx = c.getContext("2d");
      ctx.clearRect(0, 0, 88, 88);
      ctx.drawImage(img, 0, 0);
    }
    const num = $("#heart-num"); if (num) num.textContent = Math.round(p.hp);
    $("#heart-wrap")?.setAttribute("aria-label", `Health ${Math.round(p.hp)} of ${p.maxHp || 100}`);
  }
  if ("xp" in p) {
    $("#xp-fill").style.width = (p.xp / p.xpNext) * 100 + "%";
    $("#xp-level").textContent = p.level;
    $("#xp").setAttribute("aria-valuenow", p.level);
    $("#xp").setAttribute("aria-label", `Level ${p.level}, ${p.xp} of ${p.xpNext} experience`);
  }
  if ("paydirt" in p) $("#paydirt").textContent = p.paydirt;
  if ("arrows" in p) $("#arrows-num").textContent = p.arrows;
  if ("souls" in p) {
    $("#souls-fill").style.width = clamp(p.souls, 0, 100) + "%";
    $("#souls").setAttribute("aria-valuenow", Math.round(p.souls));
  }
  if ("potionCd" in p) {
    const el = $("#potion-cd");
    if (p.potionCd > 0) { el.hidden = false; el.style.setProperty("--p", (p.potionCd * 100) + "%"); }
    else el.hidden = true;
  }
  if ("rollCd" in p) {
    const el = $("#roll-cd");
    if (p.rollCd > 0) { el.hidden = false; el.style.setProperty("--p", (p.rollCd * 100) + "%"); }
    else el.hidden = true;
  }
  if ("artifacts" in p) {
    document.querySelectorAll("[data-art]").forEach((b) => {
      const it = p.artifacts[+b.dataset.art];
      const img = b.querySelector("img");
      if (it) { img.src = iconURL(it.icon); img.style.opacity = "1"; b.dataset.tip = itemTip(it); }
      else { img.removeAttribute("src"); img.style.opacity = "0.25"; delete b.dataset.tip; }
    });
  }
  if ("objective" in p) {
    const o = $("#objective"), t = $("#objective-text");
    if (!p.objective) o.hidden = true;
    else { o.hidden = false; t.textContent = p.objective; }
  }
  if ("hud" in p) $("#hud").hidden = !p.hud;
  syncOptionButtons();
}

export function toast(title, sub, iconName = "star", challenge = false) {
  const t = document.createElement("div");
  t.className = "toast" + (challenge ? " challenge" : "");
  t.setAttribute("role", "status");
  t.innerHTML = `<span class="toast-icon">${icon(iconName, 32)}</span><span><strong>${esc(title)}</strong><small>${esc(sub)}</small></span>`;
  $("#toasts").appendChild(t);
  setTimeout(() => t.classList.add("out"), 4200);
  setTimeout(() => t.remove(), 4800);
}
let promptKey = null;
export function setPrompt(html, key) {
  const el = $("#prompt");
  if (!html) { if (promptKey !== null) { el.hidden = true; promptKey = null; } return; }
  if (key === promptKey && !el.hidden) return;
  promptKey = key; el.hidden = false; el.innerHTML = html;
}
export function chat(name, text, kind = "npc", more = false) {
  const log = $("#chat"); if (!log) return;
  const p = document.createElement("p");
  p.className = "line " + kind;
  const hint = more ? ` <span class="more">(${window.matchMedia?.("(pointer: coarse)").matches ? "tap A" : "press E"} for more)</span>` : "";
  p.innerHTML = name ? `&lt;${esc(name)}&gt; ${esc(text)}${hint}` : esc(text);
  log.appendChild(p);
  while (log.children.length > 6) log.firstChild.remove();
  setTimeout(() => p.classList.add("fade"), 11000);
}

export function drawTitle() {
  const c = $("#title-logo"); if (!c) return;
  const text = "ISAAC MORENO";
  const W = 900, H = 180;
  c.width = W; c.height = H;
  const ctx = c.getContext("2d");
  ctx.imageSmoothingEnabled = false;
  ctx.font = "bold 92px Monocraft, monospace";
  ctx.textAlign = "center"; ctx.textBaseline = "middle";
  ctx.lineJoin = "round";
  ctx.strokeStyle = "#3a1c00"; ctx.lineWidth = 14; ctx.strokeText(text, W / 2, H / 2 + 4);
  ctx.strokeStyle = "#8a4a10"; ctx.lineWidth = 8; ctx.strokeText(text, W / 2, H / 2);
  const g = ctx.createLinearGradient(0, 40, 0, 140);
  g.addColorStop(0, "#fff3c0"); g.addColorStop(0.45, "#ffcc55"); g.addColorStop(1, "#c45a10");
  ctx.fillStyle = g; ctx.fillText(text, W / 2, H / 2);
  // subtitle lives in the HTML edition line so the splash can sit beside the logo
}

const SPLASH = ["Hire this miner!", "Also try the recruiter view!", "Paydirt incoming!", "Dec 2026 grad!", "Press Play!", "A campus of stories!"];
export function setSplash() {
  const el = $("#splash"); if (el) el.textContent = SPLASH[Math.floor(Math.random() * SPLASH.length)];
}
