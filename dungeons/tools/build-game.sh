#!/bin/sh
# Rebuilds js/game.js (the committed bundle the page loads) from js/main3d.js.
# Needs Node. Three.js r187 (MIT) is bundled in; the page never loads it separately,
# so its source is not shipped with the site (only js/vendor/three/LICENSE is).
# Three.js source is looked up in $THREE_SRC, then ../three-src next to this folder,
# then fetched once from npm into ~/.cache/utep-three.
set -e
cd "$(dirname "$0")/.."
SRC="${THREE_SRC:-../three-src}"
if [ ! -f "$SRC/three.module.js" ]; then
  SRC="$HOME/.cache/utep-three"
  if [ ! -f "$SRC/three.module.js" ]; then
    mkdir -p "$SRC/tmp" && (cd "$SRC/tmp" && npm pack three@0.187.0 --silent >/dev/null && tar xzf three-0.187.0.tgz)
    P="$SRC/tmp/package"
    cp "$P/build/three.module.js" "$P/build/three.core.js" "$P/LICENSE" "$SRC/"
    mkdir -p "$SRC/addons" && cp -r "$P/examples/jsm/postprocessing" "$P/examples/jsm/shaders" "$SRC/addons/"
    rm -rf "$SRC/tmp"
  fi
fi
npx --yes esbuild@0.25 js/main3d.js --bundle --format=esm --minify --target=es2022 \
  --alias:three="$SRC/three.module.js" --alias:three-addons="$SRC/addons" \
  --legal-comments=eof --outfile=js/game.js
