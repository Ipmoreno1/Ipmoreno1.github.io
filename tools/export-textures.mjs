// Exports a few of the procedural block textures as small PNGs (used by CSS on both pages).
// Usage (needs a local server on :8765 and playwright-core): node tools/export-textures.mjs
import { chromium } from "playwright-core";
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const BASE = process.env.BASE || "http://127.0.0.1:8765/";
const b = await chromium.launch({ executablePath: process.env.CHROME || "/usr/bin/google-chrome", args: ["--no-sandbox"] });
const p = await b.newPage();
await p.goto(BASE + "tools/blank.html");
const out = await p.evaluate(async () => {
  const { tex } = await import("/js/textures.js"); const { isoBlock, iconURL } = await import("/js/icons.js");
  const o = {};
  for (const n of ["stone", "dirt", "cobble"]) o[n] = tex(n, "top").toDataURL();
  o.planks = tex("oak", "top").toDataURL();
  o["grass-icon"] = isoBlock("grass").toDataURL();
  const c = document.createElement("canvas"); c.width = c.height = 32; const g = c.getContext("2d"); g.imageSmoothingEnabled = false; g.drawImage(isoBlock("grass"), 0, 0); o.favicon = c.toDataURL();
  return o;
});
mkdirSync(join(root, "assets/tex"), { recursive: true });
for (const [k, v] of Object.entries(out)) writeFileSync(k === "favicon" ? join(root, "assets/favicon.png") : join(root, "assets/tex", k + ".png"), Buffer.from(v.split(",")[1], "base64"));
console.log("wrote", Object.keys(out));
await b.close();
