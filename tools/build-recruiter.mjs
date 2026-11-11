// Generates recruiter.html (plain, fast, accessible) from js/data.js.
// Usage: node tools/build-recruiter.mjs
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { PROFILE, ABOUT, EDUCATION, PROJECTS, SKILLS, INTERESTS, EXPERIENCE_IDS } from "../js/data.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const abs = (p) => (PROFILE.siteUrl ? PROFILE.siteUrl.replace(/\/?$/, "/") + p : p);
const projects = PROJECTS.filter((p) => !EXPERIENCE_IDS.includes(p.id));
const exps = EXPERIENCE_IDS.map((id) => PROJECTS.find((p) => p.id === id));
const desc = `${PROFILE.name}: ${PROFILE.headline}, graduating ${EDUCATION.dates.replace("Expected Graduation: ", "")}. Projects, research, experience, skills, and resume.`;

const item = (p, heading = "h3") => `
      <article class="item" id="${p.id}">
        <header>
          <${heading}>${esc(p.title)}</${heading}>
          <p class="meta"><span>${esc(p.kind)}</span><span class="date">${esc(p.dates)}</span></p>
        </header>
        ${p.fullTitle ? `<p class="full"><em>&ldquo;${esc(p.fullTitle)}&rdquo;</em></p>` : ""}
        <ul>${p.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
        <p class="stack"><span class="label">Tools:</span> ${p.stack.map(esc).join(", ")}</p>
        ${p.status && !EXPERIENCE_IDS.includes(p.id) ? `<p class="status"><span class="label">Status:</span> ${esc(p.status)}</p>` : ""}
        ${p.links.length ? `<p class="links">${p.links.map((l) => `<a href="${esc(l.url)}">${esc(l.label)}</a>`).join(" | ")}</p>` : ""}
      </article>`;

const contactLinks = [
  `<a href="mailto:${esc(PROFILE.email)}">${esc(PROFILE.email)}</a>`,
  `<a href="${esc(PROFILE.linkedin)}">${esc(PROFILE.linkedin.replace("https://", ""))}</a>`,
  PROFILE.github ? `<a href="${esc(PROFILE.github)}">${esc(PROFILE.github.replace("https://", ""))}</a>` : "",
].filter(Boolean);

const ld = {
  "@context": "https://schema.org", "@type": "Person", name: PROFILE.fullName, email: "mailto:" + PROFILE.email,
  alumniOf: { "@type": "CollegeOrUniversity", name: EDUCATION.school },
  sameAs: [PROFILE.linkedin, PROFILE.github].filter(Boolean),
  address: { "@type": "PostalAddress", addressLocality: "El Paso", addressRegion: "TX", addressCountry: "US" },
};

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(PROFILE.name)} | Software Engineer, UTEP Computer Science</title>
  <meta name="description" content="${esc(desc)}">
  <meta name="author" content="${esc(PROFILE.fullName)}">
  <meta name="theme-color" content="#1f4a8a">
  ${PROFILE.siteUrl ? `<link rel="canonical" href="${esc(abs("recruiter.html"))}">` : ""}
  <meta property="og:type" content="profile">
  <meta property="og:title" content="${esc(PROFILE.name)} | Portfolio">
  <meta property="og:description" content="${esc(desc)}">
  <meta property="og:image" content="${esc(abs("assets/og-image.png"))}">
  ${PROFILE.siteUrl ? `<meta property="og:url" content="${esc(abs("recruiter.html"))}">` : ""}
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="assets/favicon.png">
  <link rel="stylesheet" href="css/recruiter.css">
  <script type="application/ld+json">${JSON.stringify(ld)}</script>
</head>
<body>
  <a class="skip" href="#main">Skip to content</a>
  <header class="site">
    <div class="wrap">
      <h1>${esc(PROFILE.fullName)}</h1>
      <p class="headline">${esc(PROFILE.headline)}. ${esc(EDUCATION.dates)}.</p>
      <p class="tagline">${esc(PROFILE.tagline)}</p>
      <p class="contact">${contactLinks.join(' <span aria-hidden="true">|</span> ')} <span aria-hidden="true">|</span> ${esc(PROFILE.location)}</p>
      <p class="actions">
        <a class="btn primary" href="${esc(PROFILE.resumePdf)}" download="Resume_Isaac_Moreno.pdf">Download resume (PDF)</a>
        <a class="btn" href="mailto:${esc(PROFILE.email)}">Email me</a>
        <a class="btn" href="index.html">Play the campus game</a>
      </p>
      <nav aria-label="Sections"><a href="#projects">Projects</a><a href="#research">Research</a><a href="#experience">Experience</a><a href="#education">Education</a><a href="#skills">Skills</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
    </div>
  </header>
  <main id="main" class="wrap">
    <section id="projects" aria-labelledby="h-projects">
      <h2 id="h-projects">Projects</h2>${projects.filter((p) => !p.categories.includes("Research")).map((p) => item(p)).join("")}
    </section>
    <section id="research" aria-labelledby="h-research">
      <h2 id="h-research">Research</h2>${projects.filter((p) => p.categories.includes("Research")).map((p) => item(p)).join("")}
    </section>
    <section id="experience" aria-labelledby="h-exp">
      <h2 id="h-exp">Experience</h2>${exps.map((p) => item(p)).join("")}
    </section>
    <section id="education" aria-labelledby="h-edu">
      <h2 id="h-edu">Education</h2>
      <article class="item"><header><h3>${esc(EDUCATION.school)}</h3><p class="meta"><span>${esc(EDUCATION.degree)}, ${esc(EDUCATION.minor)}</span><span class="date">${esc(EDUCATION.dates)}</span></p></header><p>${esc(EDUCATION.location)}</p></article>
    </section>
    <section id="skills" aria-labelledby="h-skills">
      <h2 id="h-skills">Skills</h2>
      <dl class="skills">${SKILLS.map((g) => `<dt>${esc(g.label)}</dt><dd>${g.items.map(esc).join(", ")}</dd>`).join("")}</dl>
    </section>
    <section id="about" aria-labelledby="h-about">
      <h2 id="h-about">About</h2>
      ${ABOUT.map((p) => `<p>${esc(p)}</p>`).join("\n      ")}
      <p><span class="label">Interests:</span> ${INTERESTS.map(esc).join(", ")}</p>
    </section>
    <section id="contact" aria-labelledby="h-contact">
      <h2 id="h-contact">Contact</h2>
      <ul class="contact-list">
        <li><span class="label">Email:</span> <a href="mailto:${esc(PROFILE.email)}">${esc(PROFILE.email)}</a></li>
        <li><span class="label">LinkedIn:</span> <a href="${esc(PROFILE.linkedin)}">${esc(PROFILE.linkedin.replace("https://", ""))}</a></li>
        ${PROFILE.github ? `<li><span class="label">GitHub:</span> <a href="${esc(PROFILE.github)}">${esc(PROFILE.github.replace("https://", ""))}</a></li>` : ""}
        <li><span class="label">Resume:</span> <a href="${esc(PROFILE.resumePdf)}">Resume_Isaac_Moreno.pdf</a></li>
      </ul>
    </section>
  </main>
  <footer class="wrap foot"><p>Prefer something more fun? <a href="index.html">Play the campus adventure</a>. <span class="mc">Fan-inspired, not affiliated with Mojang or Microsoft.</span> Not an official UTEP site.</p></footer>
</body>
</html>
`;
writeFileSync(join(root, "recruiter.html"), html);
console.log("wrote recruiter.html");
