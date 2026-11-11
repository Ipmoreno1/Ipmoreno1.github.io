# Isaac Moreno: Playable Portfolio (blocky UTEP campus)

A static, no-build, no-framework portfolio. Walk a Minecraft-inspired, top-down, stylized (not to scale)
UTEP campus. Each real landmark opens part of Isaac's story. A plain recruiter page (`recruiter.html`)
has the same content without the game.

## Run locally
```bash
cd utep-minecraft
python3 -m http.server 8765
# open http://localhost:8765/
```
ES modules need a web server; opening `index.html` straight from disk will not work.

## Controls
WASD / arrows walk, Shift runs, E or Enter interacts, Space swings the pickaxe at ore boulders,
P opens the Projectdex, M opens the map (teleport list), H opens help, Esc closes panels, - and = zoom.
On phones: on-screen pad, A interacts, B swings.

## Edit content
All text lives in **`js/data.js`** (profile, about, education, projects/experience, skills, landmarks, Pete's lines).
After editing, regenerate the plain recruiter page:
```bash
node tools/build-recruiter.mjs
```
- Add a real project link: put `{ label: "Live site", url: "https://..." }` in that project's `links` array.
- GitHub: set `PROFILE.github` (it is empty because github.com/IAmMoreno was not publicly reachable on Nov 10, 2026).
- Resume: replace `assets/Resume_Isaac_Moreno.pdf` (current file has no phone number, no address, no GPA).
- After deploying, set `PROFILE.siteUrl` and rebuild so OpenGraph image/URL tags become absolute.

## Files
```
index.html            game shell (nav, HUD, panels, intro)
recruiter.html        GENERATED plain view (do not hand-edit; edit data.js instead)
css/style.css         game UI (blocky GUI panels, HUD, mobile pad)
css/recruiter.css     plain view styles (+ print styles)
js/data.js            ALL content
js/main.js            loop, input, camera, entities, particles, lighting, minimap
js/world.js           campus layout + procedural painting of buildings/terrain
js/textures.js        procedural 16x16 block textures (per season)
js/sprites.js         player, wolf, Pete, ore sprites (pixel rows)
js/ui.js              panels, Projectdex, map, toasts, prompt, dialog
js/audio.js           WebAudio blips (off by default)
js/util.js            helpers
assets/               resume PDF, favicon, og-image
tools/build-recruiter.mjs
```

## Deploy to GitHub Pages
1. Create a repo (e.g. `utep-minecraft`) and push the contents of this folder to `main`.
2. Repo Settings > Pages > Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
3. Site appears at `https://<username>.github.io/utep-minecraft/`. Set `PROFILE.siteUrl` to that, run the build script, push again.
For a user site (`<username>.github.io`), name the repo `<username>.github.io` instead.

## Credits / notes
All art is original and drawn in code at runtime. Minecraft-inspired fan art style; not affiliated with
or endorsed by Mojang, Microsoft, or UTEP. Landmark facts link to official UTEP sources in `data.js`.
