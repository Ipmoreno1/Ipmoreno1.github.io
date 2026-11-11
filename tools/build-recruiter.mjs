// Builds recruiter.html (plain, no-game view) from js/data.js.  Run: node tools/build-recruiter.mjs
import { writeFileSync } from "fs";
import { PROFILE, ABOUT, EDUCATION, PROJECTS, EXPERIENCE_IDS, SKILLS, INTERESTS, SITE } from "../js/data.js";
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const exp = EXPERIENCE_IDS.map((id) => PROJECTS.find((p) => p.id === id));
const research = PROJECTS.filter((p) => p.categories.includes("Research"));
const projects = PROJECTS.filter((p) => !EXPERIENCE_IDS.includes(p.id) && !p.categories.includes("Research"));
const entry = (p) => `<article class="entry"><div class="eh"><h3>${esc(p.title)}</h3><span class="dates">${esc(p.dates)}</span></div>
<p class="kind">${esc(p.kind)}</p>${p.fullTitle ? `<p class="full">${esc(p.fullTitle)}</p>` : ""}
<ul>${p.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
<p class="stack"><b>Tools:</b> ${p.stack.map(esc).join(", ")}${p.status ? ` · <b>Status:</b> ${esc(p.status)}` : ""}</p>
${(p.links || []).length ? `<p>${p.links.map((l) => `<a href="${esc(l.url)}">${esc(l.label)}</a>`).join(" · ")}</p>` : ""}</article>`;
const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Isaac Moreno / Resume and projects</title>
<meta name="description" content="${esc(PROFILE.headline)}. ${esc(PROFILE.tagline)}">
<link rel="icon" href="assets/favicon.png"><link rel="stylesheet" href="css/recruiter.css"></head>
<body><a class="skiplink" href="#main">Skip to content</a>
<header class="top"><div class="wrap"><h1>${esc(PROFILE.fullName)}</h1><p class="head">${esc(PROFILE.headline)}. ${esc(EDUCATION.dates)}.</p><p>${esc(PROFILE.tagline)}</p>
<p class="links"><a href="mailto:${esc(PROFILE.email)}">${esc(PROFILE.email)}</a> · <a href="${esc(PROFILE.linkedin)}">LinkedIn</a> · <a href="${esc(PROFILE.github)}">GitHub</a> · ${esc(PROFILE.location)}</p>
<p class="cta"><a class="btn" href="${esc(PROFILE.resumePdf)}">Download resume (PDF)</a> <a class="btn alt" href="index.html">Play the pixel campus</a>${SITE.dungeonsVersionUrl ? ` <a class="btn alt" href="${esc(SITE.dungeonsVersionUrl)}">3D version</a>` : ""}</p></div></header>
<nav class="toc" aria-label="Sections"><div class="wrap"><a href="#about">About</a><a href="#education">Education</a><a href="#research">Research</a><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#contact">Contact</a></div></nav>
<main id="main" class="wrap">
<section id="about"><h2>About</h2>${ABOUT.map((a) => `<p>${esc(a)}</p>`).join("")}</section>
<section id="education"><h2>Education</h2><article class="entry"><div class="eh"><h3>${esc(EDUCATION.school)}</h3><span class="dates">${esc(EDUCATION.dates)}</span></div><p>${esc(EDUCATION.degree)}, ${esc(EDUCATION.minor)}. ${esc(EDUCATION.location)}.</p></article></section>
<section id="research"><h2>Research</h2>${research.map(entry).join("")}</section>
<section id="projects"><h2>Projects</h2>${projects.map(entry).join("")}</section>
<section id="experience"><h2>Experience</h2>${exp.map(entry).join("")}</section>
<section id="skills"><h2>Skills</h2><dl class="skills">${SKILLS.map((s) => `<dt>${esc(s.label)}</dt><dd>${s.items.map(esc).join(", ")}</dd>`).join("")}<dt>Interests</dt><dd>${INTERESTS.map(esc).join(", ")}</dd></dl></section>
<section id="contact"><h2>Contact</h2><p>${esc(PROFILE.lookingFor)}. Email <a href="mailto:${esc(PROFILE.email)}">${esc(PROFILE.email)}</a> or find me on <a href="${esc(PROFILE.linkedin)}">LinkedIn</a> and <a href="${esc(PROFILE.github)}">GitHub</a>.</p></section>
</main>
<footer class="wrap foot"><p>${esc(SITE.footer)} Not an official UTEP site.</p></footer>
</body></html>
`;
if (/\u2014/.test(html)) throw new Error("em dash found");
writeFileSync(new URL("../recruiter.html", import.meta.url), html);
console.log("recruiter.html written", html.length, "bytes");
