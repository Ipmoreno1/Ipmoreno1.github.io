// DOM panels styled like a blocky game GUI. Content comes from data.js.
import { PROFILE, ABOUT, EDUCATION, PROJECTS, CATEGORIES, SKILLS, INTERESTS, LANDMARKS, CAMPUS_FACTS, EXPERIENCE_IDS } from "./data.js";
import { makeCanvas } from "./util.js";
import { sfx } from "./audio.js";

const $ = (s, el = document) => el.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const LM = Object.fromEntries(LANDMARKS.map((l) => [l.id, l]));

// ---------------------------------------------------------- pixel icons
const ICONS = {
  camera: ["................","................","....kkkk........",".kkkkkkkkkkkkkk.",".kddddddddddddk.",".kdwddkkkkddddk.",".kddddkbbkddddk.",".kdddkbccbkdddk.",".kdddkbccbkdddk.",".kddddkbbkddddk.",".kdddddkkdddddk.",".kddddddddddddk.",".kkkkkkkkkkkkkk.","................","................","................"],
  chart: ["................",".k..............",".k...........oo.",".k...........oo.",".k.......bb..oo.",".k.......bb..oo.",".k...oo..bb..oo.",".k...oo..bb..oo.",".k...oo..bb..oo.",".k.bbo..bb..oo..".replace(/\./g,"."),".k.bboo..bb..oo.",".k.bboo..bb..oo.",".kkkkkkkkkkkkkkk","................","................","................"],
  shield: ["................","..kkkkkkkkkkkk..","..kbbbbbbbbbbk..","..kbbbbwwbbbbk..","..kbbbwwwwbbbk..","..kbbbbwwbbbbk..","..kooooooooook..","..kooooooooook..","...kbbbbbbbbk...","...kbbbbbbbbk...","....kbbbbbbk....",".....kbbbbk.....","......kbbk......",".......kk.......","................","................"],
  book: ["................","..kkkkkkkkkkk...","..krrrrrrrrrkk..","..krwwwwwwwrkwk.","..krrrrrrrrrkwk.","..krwwwwwrrrkwk.","..krrrrrrrrrkwk.","..krrryyrrrrkwk.","..krryyyyrrrkwk.","..krrryyrrrrkwk.","..krrrrrrrrrkwk.","..krrrrrrrrrkwk.","..kkkkkkkkkkkwk.","...kwwwwwwwwwwk.","....kkkkkkkkkk..","................"],
  castle: [".......y........","......kyk.......",".k.k..kbk..k.k..",".kbk.kbbbk.kbk..",".kbk.kbbbk.kbk..",".kbkkkbbbkkkbk..",".kbbbbbbbbbbbk..",".kbbwbbbbbwbbk..",".kbbbbkkkbbbbk..",".kbbbbkdkbbbbk..",".kbbbbkdkbbbbk..",".kkkkkkkkkkkkk..","................","................","................","................"],
  house: ["................",".......kk.......","......krrk......",".....krrrrk.....","....krrrrrrk....","...krrrrrrrrk...","..kkkkkkkkkkkk..","...kwwwwwwwwk...","...kwbbwwbbwk...","...kwbbwwbbwk...","...kwwwddwwwk...","...kwwwddwwwk...","...kkkkkkkkkk...","................","................","................"],
};
const ICON_PAL = { k: "#1d1d1d", d: "#4a4f57", w: "#f2f2f2", b: "#3a7bd5", c: "#9fd3ff", o: "#ff8200", r: "#b8401f", y: "#f2cf3a" };
const iconCache = {};
function iconURL(name) {
  if (iconCache[name]) return iconCache[name];
  const [c, ctx] = makeCanvas(16, 16);
  ICONS[name].forEach((row, y) => [...row].forEach((ch, x) => { if (ICON_PAL[ch]) { ctx.fillStyle = ICON_PAL[ch]; ctx.fillRect(x, y, 1, 1); } }));
  return (iconCache[name] = c.toDataURL());
}
const icon = (name, size = 48, alt = "") => `<img class="px-icon" src="${iconURL(name)}" width="${size}" height="${size}" alt="${esc(alt)}">`;

// ---------------------------------------------------------- panel shell
let wrap, panel, body, titleEl, lastFocus = null, handlers = {};
let current = null;

export function initUI(h) {
  handlers = h;
  wrap = $("#panel-wrap"); panel = $("#panel"); body = $("#panel-body"); titleEl = $("#panel-title");
  $("#panel-close").addEventListener("click", closePanel);
  wrap.addEventListener("mousedown", (e) => { if (e.target === wrap) closePanel(); });
  document.addEventListener("keydown", (e) => {
    if (!isOpen()) return;
    if (e.key === "Escape") { e.preventDefault(); closePanel(); }
    if (e.key === "Tab") trapFocus(e);
  });
  document.querySelectorAll("[data-open]").forEach((b) => b.addEventListener("click", () => openPanel(b.dataset.open)));
}
function trapFocus(e) {
  const f = [...panel.querySelectorAll("a[href],button,input,iframe,[tabindex]")].filter((x) => !x.disabled && x.offsetParent !== null);
  if (!f.length) return;
  const first = f[0], last = f[f.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}
export const isOpen = () => !wrap.hidden;
export function closePanel() {
  if (wrap.hidden) return;
  wrap.hidden = true; current = null; sfx.close();
  handlers.onClose?.();
  if (lastFocus && document.body.contains(lastFocus)) lastFocus.focus(); else $("#game").focus();
}
function show(title, html, style = "gui", key = title) {
  if (wrap.hidden) lastFocus = document.activeElement;
  titleEl.textContent = title;
  panel.className = "panel " + style;
  body.innerHTML = html;
  body.scrollTop = 0;
  wrap.hidden = false;
  current = key;
  sfx.open();
  handlers.onOpen?.(key);
  setTimeout(() => $("#panel-close").focus({ preventScroll: true }), 0);
  body.querySelectorAll("[data-travel]").forEach((b) => b.addEventListener("click", () => { closePanel(); handlers.onTravel(b.dataset.travel); }));
  body.querySelectorAll("[data-project]").forEach((b) => b.addEventListener("click", () => openPanel("project", b.dataset.project)));
  body.querySelectorAll("[data-open]").forEach((b) => b.addEventListener("click", () => openPanel(b.dataset.open)));
  body.querySelectorAll("[data-copy]").forEach((b) => b.addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(b.dataset.copy); b.textContent = "Copied!"; } catch { b.textContent = "Copy failed"; }
    setTimeout(() => (b.textContent = "Copy"), 1500);
  }));
}

function factBox(id) {
  const l = LM[id]; if (!l) return "";
  return `<aside class="factbox"><strong>${esc(l.name)}</strong><p>${esc(l.fact)} <a href="${esc(l.source)}" target="_blank" rel="noopener">Source</a></p></aside>`;
}
const chips = (arr) => `<ul class="chips">${arr.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>`;
function linkRow() {
  const parts = [
    `<a class="mc-btn" href="mailto:${esc(PROFILE.email)}">Email</a>`,
    `<a class="mc-btn" href="${esc(PROFILE.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>`,
  ];
  if (PROFILE.github) parts.push(`<a class="mc-btn" href="${esc(PROFILE.github)}" target="_blank" rel="noopener">GitHub</a>`);
  parts.push(`<a class="mc-btn" href="${esc(PROFILE.resumePdf)}" target="_blank" rel="noopener">Resume (PDF)</a>`);
  return `<div class="btn-row">${parts.join("")}</div>`;
}

// ---------------------------------------------------------- views
let dexQuery = "", dexCat = "All";
export function openPanel(type, arg) {
  const fromLandmark = handlers.landmarkFor?.(type, arg);
  switch (type) {
    case "projects": return show("Projectdex", projectsHTML(), "gui", "projects"), bindDex();
    case "project": return show(PROJECTS.find((p) => p.id === arg)?.title || "Project", projectHTML(arg), "book", "project:" + arg);
    case "about": return show("About Me", aboutHTML(), "book", "about");
    case "experience": return show("Experience", experienceHTML(), "book", "experience");
    case "resume": return show("Resume", resumeHTML(), "gui", "resume");
    case "skills": return show("Skills Inventory", skillsHTML(), "gui", "skills");
    case "contact": return show("Contact", contactHTML(), "sign", "contact");
    case "map": return show("Campus Map", mapHTML(), "gui", "map"), handlers.drawMap?.($("#bigmap"));
    case "lhakhang": return show("The Lhakhang", lhakhangHTML(), "book", "lhakhang");
    case "help": return show("Controls", helpHTML(), "gui", "help");
  }
}

function projectsHTML() {
  return `<p class="lede">Every project and job, like a crafting book. Search, filter, then open one for the full story.</p>
  <div class="dex-tools">
    <label class="sr-only" for="dex-search">Search projects</label>
    <input id="dex-search" class="mc-input" type="search" placeholder="Search: React, testing, Disney..." value="${esc(dexQuery)}" autocomplete="off">
    <div class="filters" role="group" aria-label="Filter by category">${CATEGORIES.map((c) => `<button class="mc-btn small ${c === dexCat ? "on" : ""}" aria-pressed="${c === dexCat}" data-cat="${esc(c)}">${esc(c)}</button>`).join("")}</div>
  </div>
  <div id="dex-grid" class="dex-grid"></div>`;
}
function bindDex() {
  const input = $("#dex-search"), grid = $("#dex-grid");
  const render = () => {
    const q = dexQuery.trim().toLowerCase();
    const list = PROJECTS.filter((p) => (dexCat === "All" || p.categories.includes(dexCat)) &&
      (!q || [p.title, p.kind, p.summary, ...p.stack, ...p.categories, ...p.bullets].join(" ").toLowerCase().includes(q)));
    grid.innerHTML = list.length ? list.map((p) => `
      <button class="slot-card" data-project="${p.id}">
        <span class="slot">${icon(p.icon, 48)}</span>
        <span class="slot-text"><strong>${esc(p.title)}</strong><small>${esc(p.kind)}</small><small class="muted">${esc(p.dates)}</small></span>
      </button>`).join("") : `<p class="empty">No matches. Try another word or pick "All".</p>`;
    grid.querySelectorAll("[data-project]").forEach((b) => b.addEventListener("click", () => openPanel("project", b.dataset.project)));
  };
  input.addEventListener("input", () => { dexQuery = input.value; render(); });
  input.addEventListener("keydown", (e) => { if (e.key !== "Escape" && e.key !== "Tab") e.stopPropagation(); });
  body.querySelectorAll("[data-cat]").forEach((b) => b.addEventListener("click", () => {
    dexCat = b.dataset.cat;
    body.querySelectorAll("[data-cat]").forEach((x) => { x.classList.toggle("on", x.dataset.cat === dexCat); x.setAttribute("aria-pressed", x.dataset.cat === dexCat); });
    render();
  }));
  render();
}
function projectHTML(id) {
  const p = PROJECTS.find((x) => x.id === id);
  if (!p) return "<p>Not found.</p>";
  const l = LM[p.landmark];
  return `<div class="case">
    <div class="case-head">${icon(p.icon, 64, "")}<div><p class="kicker">${esc(p.kind)}</p><p class="muted">${esc(p.dates)}</p></div></div>
    ${p.fullTitle ? `<p class="fulltitle">"${esc(p.fullTitle)}"</p>` : ""}
    <p class="lede">${esc(p.summary)}</p>
    <h3>What I did</h3>
    <ul class="bullets">${p.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
    <h3>Tools</h3>${chips(p.stack)}
    <h3>Status</h3><p>${esc(p.status)}</p>
    ${p.links.length ? `<h3>Links</h3><div class="btn-row">${p.links.map((k) => `<a class="mc-btn" href="${esc(k.url)}" target="_blank" rel="noopener">${esc(k.label)}</a>`).join("")}</div>` : ""}
    ${factBox(p.landmark)}
    <div class="btn-row">
      <button class="mc-btn" data-open="projects">All projects</button>
      ${l ? `<button class="mc-btn" data-travel="${l.id}">Teleport to ${esc(l.name)}</button>` : ""}
    </div></div>`;
}
function aboutHTML() {
  return `<div class="about">${ABOUT.map((p) => `<p>${esc(p)}</p>`).join("")}
    <h3>Education</h3>
    <p><strong>${esc(EDUCATION.school)}</strong><br>${esc(EDUCATION.degree)}, ${esc(EDUCATION.minor)}<br>${esc(EDUCATION.dates)}, ${esc(EDUCATION.location)}</p>
    <h3>Interests</h3>${chips(INTERESTS)}
    ${factBox("plaza")}${linkRow()}</div>`;
}
function experienceHTML() {
  return EXPERIENCE_IDS.map((id) => {
    const p = PROJECTS.find((x) => x.id === id);
    return `<section class="exp">${icon(p.icon, 40)}<div><h3>${esc(p.title)}</h3><p class="kicker">${esc(p.kind)}</p><p class="muted">${esc(p.dates)}</p>
      <ul class="bullets">${p.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul></div></section>`;
  }).join("") + factBox("union");
}
function resumeHTML() {
  return `<div class="resume">
    <div class="btn-row"><a class="mc-btn primary" href="${esc(PROFILE.resumePdf)}" download="Resume_Isaac_Moreno.pdf">Download PDF</a>
    <a class="mc-btn" href="${esc(PROFILE.resumePdf)}" target="_blank" rel="noopener">Open in new tab</a>
    <a class="mc-btn" href="recruiter.html">Plain web version</a></div>
    <div class="pdf-frame"><iframe src="${esc(PROFILE.resumePdf)}#view=FitH" title="Isaac Moreno resume PDF" loading="lazy"></iframe></div>
    ${factBox("library")}</div>`;
}
function skillsHTML() {
  return `<p class="lede">Hover or tap a slot to read it. Everything here is on my resume.</p>
  ${SKILLS.map((g) => `<section class="inv"><h3>${esc(g.label)}</h3><ul class="inv-grid">${g.items.map((s) => `<li class="inv-slot" tabindex="0" title="${esc(s)}"><span>${esc(s)}</span></li>`).join("")}</ul></section>`).join("")}
  ${factBox("haskins")}`;
}
function contactHTML() {
  return `<div class="contact">
    <p class="lede">I'm looking for new-grad software engineering roles. The fastest way to reach me is email.</p>
    <dl>
      <dt>Email</dt><dd><a href="mailto:${esc(PROFILE.email)}">${esc(PROFILE.email)}</a> <button class="mc-btn small" data-copy="${esc(PROFILE.email)}">Copy</button></dd>
      <dt>LinkedIn</dt><dd><a href="${esc(PROFILE.linkedin)}" target="_blank" rel="noopener">${esc(PROFILE.linkedin.replace("https://", ""))}</a></dd>
      ${PROFILE.github ? `<dt>GitHub</dt><dd><a href="${esc(PROFILE.github)}" target="_blank" rel="noopener">${esc(PROFILE.github.replace("https://", ""))}</a></dd>` : ""}
      <dt>Location</dt><dd>${esc(PROFILE.location)}</dd>
    </dl>${linkRow()}${factBox("pick")}</div>`;
}
function mapHTML() {
  const visited = handlers.visited?.() || new Set();
  return `<div class="mapwrap"><canvas id="bigmap" width="400" height="288" aria-label="Map of the blocky campus"></canvas>
    <div><p class="lede">Teleport to any landmark. Stylized map, not to scale.</p>
    <ul class="travel">${LANDMARKS.map((l) => `<li><button class="mc-btn travel-btn" data-travel="${l.id}"><span class="dot ${visited.has(l.id) ? "on" : ""}" aria-hidden="true"></span>${esc(l.name)}<small>${esc(panelLabel(l))}</small>${visited.has(l.id) ? '<span class="sr-only">(visited)</span>' : ""}</button></li>`).join("")}</ul></div></div>`;
}
export function panelLabel(l) {
  const t = l.panel.type;
  if (t === "project") return PROJECTS.find((p) => p.id === l.panel.id)?.title || "";
  return { about: "About Me", experience: "Experience", resume: "Resume", skills: "Skills", contact: "Contact", lhakhang: "About this site" }[t] || "";
}
function lhakhangHTML() {
  return `${factBox("lhakhang")}
  <h3>About this site</h3>
  <p>A small playable portfolio: a blocky, stylized UTEP campus where each landmark holds part of my story. It is built with plain HTML, CSS, and JavaScript on a canvas, with every block and character drawn in code.</p>
  <p>Prefer a normal page? <a href="recruiter.html">Open the plain recruiter view</a>.</p>
  <h3>Campus facts</h3><ul class="bullets">${CAMPUS_FACTS.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
  <p class="muted small">Minecraft-inspired fan art style. Not affiliated with or endorsed by Mojang, Microsoft, or UTEP. Landmark facts link to their sources.</p>`;
}
function helpHTML() {
  const rows = [["W A S D / Arrows", "Walk"], ["Shift", "Run"], ["E / Enter", "Enter a building, talk, pet the wolf"], ["Space", "Swing pickaxe at ore boulders"],
    ["P", "Projectdex"], ["M", "Campus map + teleport"], ["H", "This help"], ["Esc", "Close a panel"]];
  return `<table class="keys"><tbody>${rows.map(([k, v]) => `<tr><th scope="row"><kbd>${esc(k)}</kbd></th><td>${esc(v)}</td></tr>`).join("")}</tbody></table>
  <p>On a phone, use the on-screen pad: <strong>A</strong> interacts and <strong>B</strong> swings.</p>
  <p>Toggles at the bottom left change the time of day, the season, sound (off by default), and motion.</p>
  <p><a class="mc-btn" href="recruiter.html">Skip the game: view projects</a></p>`;
}

// ---------------------------------------------------------- toasts, prompt, dialog
export function toast(title, sub, kind = "adv") {
  const t = document.createElement("div");
  t.className = "toast " + kind;
  t.setAttribute("role", "status");
  t.innerHTML = `<span class="toast-icon">${icon(kind === "adv" ? "book" : "chart", 28)}</span><span><strong>${esc(title)}</strong><small>${esc(sub)}</small></span>`;
  $("#toasts").appendChild(t);
  setTimeout(() => t.classList.add("out"), 3600);
  setTimeout(() => t.remove(), 4200);
}
let promptText = null;
export function setPrompt(text) {
  if (text === promptText) return;
  promptText = text;
  const el = $("#prompt");
  if (!text) { el.hidden = true; return; }
  el.hidden = false; el.innerHTML = text;
}
export function setDialog(name, text) {
  const el = $("#dialog");
  if (!text) { el.hidden = true; return; }
  el.hidden = false;
  el.innerHTML = `<strong>${esc(name)}</strong><p>${esc(text)}</p><small>${window.matchMedia?.("(pointer: coarse)").matches ? "Tap A" : "Press E"} to continue</small>`;
}
