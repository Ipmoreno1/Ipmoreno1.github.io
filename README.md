# Isaac Moreno: Playable Portfolio (UTEP camp and missions)

A static portfolio (plain files, GitHub Pages ready) rendered in real 3D with Three.js. You start at a compact camp in
Centennial Plaza, pick a UTEP landmark from a mission-select map, and walk a
short dungeon to a chest that holds part of Isaac's story. A plain recruiter
page (`recruiter.html`) has the same content without the game.

The layout follows a camp-hub, mission-map, dungeon, loot, and gear-screen
scheme inspired by action-RPG dungeon crawlers, with original procedural
voxel art. Fan-inspired, not affiliated with Mojang or Microsoft. Not an
official UTEP site.

## Run locally
```bash
cd utep-minecraft
python3 -m http.server 8765
# open http://localhost:8765/
```
ES modules need a web server; opening `index.html` straight from disk will not work.

## Controls
WASD or arrows walk, Space rolls, F or left click attacks, E or Enter interacts,
Q drinks a tonic, 1-3 use artifacts, I opens gear, M opens the mission map,
H opens help, Esc or P pauses, mouse wheel zooms.
On phones: left thumb joystick, A interacts, B rolls, the sword button swings, the heart drinks a tonic.

## Rebuild the game bundle
The page loads `js/game.js`, a committed, minified bundle of `js/main3d.js`, `js/3d/*` and
Three.js r187 (MIT; its license is kept at `js/vendor/three/LICENSE`). The Three.js source is not
shipped since the page never loads it; the build script uses `../three-src` or fetches
three@0.187.0 from npm once. After editing any game code:
```bash
sh tools/build-game.sh
```
Graphics: Pause (Esc) has a Graphics button (Low / Medium / High). Low drops shadows, bloom and
render scale; the game also steps down by itself when the frame rate stays low. A day / night toggle
and reduce-motion sit in the same menu. Browsers without WebGL get a short notice that links to the
recruiter view.

## Edit content
All text lives in **`js/data.js`** (profile, about, education, projects/experience, skills, landmarks, Pete's lines).
After editing, regenerate the plain recruiter page:
```bash
node tools/build-recruiter.mjs
```
- Add a real project link: put `{ label: "Live site", url: "https://..." }` in that project's `links` array.
- GitHub: `PROFILE.github` is https://github.com/Ipmoreno1.
- Resume: replace `assets/Resume_Isaac_Moreno.pdf` (current file has no phone number, no address, no GPA).
- After deploying, keep `PROFILE.siteUrl` set to the live origin so OpenGraph tags stay absolute.

## Files
```
index.html               game shell (title, HUD, overlays)
recruiter.html           GENERATED plain view (do not hand-edit; edit data.js instead)
css/style.css            dark leather / gold UI, HUD, mission map, loot, mobile pad
css/recruiter.css        plain view styles
js/data.js               ALL portfolio content
js/missions.js           mission layouts, loot, dungeon maps
js/main3d.js             entry: loop, input, combat, enemy AI, camera, levels
js/3d/engine.js          renderer, post (bloom, grade), quality levels, lights, times of day
js/3d/blocks.js          procedural 16x16 block textures and the block registry
js/3d/voxel.js           voxel mesher (face culling, baked AO, block light)
js/3d/builder.js         level builder (props, torches, buildings, collision)
js/3d/camp.js            Centennial Plaza camp hub
js/3d/missions3d.js      the 10 themed mission levels
js/3d/mapscene.js        3D mission-select diorama
js/3d/models.js          voxel hero, NPCs, mobs, animals, chests and their animation
js/3d/fx.js              particles, flames, foliage, loot beam, banners
js/game.js               BUILT bundle (do not hand-edit; run tools/build-game.sh)
js/vendor/three/LICENSE  Three.js MIT license (the library itself is inside js/game.js)
js/textures.js           2D textures used by tools/export-textures.mjs
js/icons.js              HUD and item icons
js/ui.js                 panels, gear, mission map, loot, complete, HUD, title logo
js/audio.js              WebAudio blips (off by default)
js/util.js               helpers
assets/                  resume PDF, favicon, og-image
assets/fonts/            Monocraft.otf + its SIL OFL 1.1 license
tools/build-recruiter.mjs
```

## Deploy to GitHub Pages
The live user site is `https://ipmoreno1.github.io/`. Do not publish without Isaac's go-ahead.
Push the contents of this folder to the `Ipmoreno1/Ipmoreno1.github.io` repo `main` branch.

## Credits / notes
All art (textures, characters, icons, logo) is original and drawn in code; no Mojang
textures, assets, logos, or extracted game files are used. Font: [Monocraft](https://github.com/IdreesInc/Monocraft)
by Idrees Hassan, used unmodified under the SIL Open Font License 1.1
(see `assets/fonts/Monocraft-OFL-LICENSE.txt`). 3D rendering: [Three.js](https://threejs.org/) r187, MIT
(bundled into `js/game.js`; see `js/vendor/three/LICENSE`). Landmark facts link to official UTEP sources in `data.js`.
