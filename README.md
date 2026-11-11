# Isaac Moreno / UTEP pixel campus portfolio

A small top-down pixel-art campus you can walk around. Every building opens part of my portfolio: projects, research, experience, resume and contact. All art is drawn in code (js/art.js for characters, plants and props, js/buildings.js for the Bhutanese-style campus buildings, js/world.js for the ground and layout); no game assets are used. The view scales to show a whole block of campus at once; use the zoom buttons in World options to change it.

- `index.html`: the playable campus (WASD or arrows, Shift to run, E to interact, P Dig Log, M map, C contact, Esc close).
- `recruiter.html`: plain resume and projects page, no game. Rebuild it after editing `js/data.js` with `node tools/build-recruiter.mjs`.
- All content lives in `js/data.js`. Set `SITE.dungeonsVersionUrl` to link the 3D version once it is live (left empty on purpose).
- Static site, no build step. Works on GitHub Pages from the repo root.

Fonts: Press Start 2P and Space Mono, both under the SIL Open Font License (assets/fonts/OFL-LICENSE.txt).

Fan-inspired by playable portfolios, not affiliated with any game company.

## v10 crisp UI notes
- The canvas always draws at a whole number of device pixels per art pixel (2 CSS px on desktop, about 1.5 on phones, times devicePixelRatio, rounded). The canvas backing size is its CSS size times devicePixelRatio, smoothing is off, and the camera snaps to whole device pixels.
- Press Start 2P is only used at 8, 16 or 24 px for titles and labels. Body, card, panel, tab, button and HUD text use VT323 (SIL OFL, assets/fonts/VT323-OFL.txt) at whole pixel sizes, with Space Mono as the fallback.
- The About me panel is the MinerDex (js/ui.js, `about`), filled from `PROFILE` and `DEX` in js/data.js.
- screens-v10/ and screens-v11/ hold review screenshots and are not part of the site zip.
