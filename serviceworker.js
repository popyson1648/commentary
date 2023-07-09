const CACHE_VERSION="v0.3.0",CACHE_LIST=["/commentary/book.js","/commentary/clipboard.min.js","/commentary/elasticlunr.min.js","/commentary/favicon.png","/commentary/favicon.svg","/commentary/fzf.umd.js","/commentary/highlight.min.js","/commentary/manifest.json","/commentary/mark.es6.min.js","/commentary/maskable_icon_x192.png","/commentary/maskable_icon_x512.png","/commentary/maskable_icon_x96.png","/commentary/searcher.js","/commentary/searchindex.js","/commentary/searchindex.json","/commentary/css/style.css","/commentary/fonts/OpenSans-Bold.woff2","/commentary/fonts/OpenSans-BoldItalic.woff2","/commentary/fonts/OpenSans-Italic.woff2","/commentary/fonts/OpenSans-Regular.woff2","/commentary/fonts/SourceCodePro-Medium.woff2","/commentary/fonts/fonts.css","/commentary/fonts/icomoon.woff2","/commentary/fonts/SauceCodePro/SauceCodeProNerdFont-Medium.woff2"],CACHE_USE=["https://coralpink.github.io/","http://127.0.0.1:8080/"],cacheFirst=async({request:e,preloadResponsePromise:a,fallbackUrl:t})=>{const n=await caches.match(e);if(n)return n;const s=await a,o=async(e,a)=>{const t=await caches.open("v0.3.0");await t.put(e,a)};if(s)return o(e,s.clone()),s;try{const a=await fetch(e);return o(e,a.clone()),a}catch(e){const a=await caches.match(t);return a||new Response("Network error happened",{status:408,headers:{"Content-Type":"text/plain"}})}},deleteCache=async e=>{await caches.delete(e)},deleteOldCaches=async()=>{const e=["v0.3.0"],a=(await caches.keys()).filter((a=>!e.includes(a)));await Promise.all(a.map(deleteCache))};self.addEventListener("activate",(e=>{e.waitUntil(clients.claim()),e.waitUntil((async()=>{self.registration.navigationPreload&&await self.registration.navigationPreload.enable()})()),e.waitUntil(deleteOldCaches())})),self.addEventListener("install",(e=>{self.skipWaiting();e.waitUntil((async e=>{const a=await caches.open("v0.3.0");await a.addAll(e)})(CACHE_LIST))})),self.addEventListener("fetch",(async e=>{CACHE_USE.map((a=>{e.request.url.startsWith(a)&&e.respondWith(cacheFirst({request:e.request,preloadResponsePromise:e.preloadResponse,fallbackUrl:"/commentary/maskable_icon_x96.png"}))}))}));