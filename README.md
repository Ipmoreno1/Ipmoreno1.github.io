# Isaac Moreno / UTEP pixel campus portfolio

A small top-down pixel-art campus you can walk around. Every building opens part of my portfolio: projects, research, experience, resume and contact. All art is drawn in code (js/art.js for characters, plants and props, js/buildings.js for the Bhutanese-style campus buildings, js/world.js for the ground and layout); no game assets are used. The view scales to show a whole block of campus at once; use the zoom buttons in World options to change it.

- `index.html`: the playable campus (WASD or arrows, Shift to run, E to interact, P Dig Log, M map, C contact, Esc close).
- `recruiter.html`: plain resume and projects page, no game. Rebuild it after editing `js/data.js` with `node tools/build-recruiter.mjs`.
- All content lives in `js/data.js`. Set `SITE.dungeonsVersionUrl` to link the 3D version once it is live (left empty on purpose).
- Static site, no build step. Works on GitHub Pages from the repo root.

Fonts: Press Start 2P and Space Mono, both under the SIL Open Font License (assets/fonts/OFL-LICENSE.txt).

Fan-inspired by playable portfolios, not affiliated with any game company.
