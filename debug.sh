pushd rs/wasm
wasm-pack build --target web
cp pkg/wasm_book.js ../../js
cp pkg/wasm_book_bg.wasm ../../src
pushd

pushd js
bun run build.js
cp -r dist/. ../src/
pushd

pushd scss
bun run compile style.scss ../src/css/style.css
bun run compile fonts/fonts.scss ../theme/fonts/fonts.css
bun run compile theme/chrome.scss ../theme/css/chrome.css
bun run compile theme/general.scss ../theme/css/general.css
pushd

mdbook build --dest-dir commentary

#rm commentary/ayu-highlight.css
#rm commentary/highlight.css
#rm commentary/tomorrow-night.css
#rm commentary/css/variables.css
#rm commentary/mark.min.js
#rm -rf commentary/FontAwesome

echo '\n🐥 complete!'
