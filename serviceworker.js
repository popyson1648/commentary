var O=["/commentary/book.js","/commentary/elasticlunr.min.js","/commentary/manifest.json","/commentary/searcher.js","/commentary/searchindex.json","/commentary/wasm_book_bg.wasm","/commentary/css/style.css","/commentary/apple-touch-icon.png","/commentary/chrome-96x96.png","/commentary/chrome-192x192.png","/commentary/chrome-512x512.png","/commentary/favicon.ico","/commentary/favicon.png","/commentary/fonts/OpenSans-Bold.woff2","/commentary/fonts/OpenSans-BoldItalic.woff2","/commentary/fonts/OpenSans-Italic.woff2","/commentary/fonts/OpenSans-Regular.woff2","/commentary/fonts/SourceCodePro-Medium.woff2","/commentary/fonts/fonts.css","/commentary/fonts/icomoon.woff2","/commentary/fonts/SauceCodePro/SauceCodeProNerdFont-Medium.woff2"],Q=["https://coralpink.github.io/","http://127.0.0.1:8080/"],V=async({request:g,preloadResponsePromise:i,fallbackUrl:j})=>{const z=await caches.match(g);if(z)return z;const J=await i,M=async(B,G)=>{await(await caches.open("v0.8.4")).put(B,G)};if(J)return M(g,J.clone()),J;try{const B=await fetch(g);return M(g,B.clone()),B}catch(B){const G=await caches.match(j);if(G)return G;return new Response("Network error happened",{status:408,headers:{"Content-Type":"text/plain"}})}},W=async(g)=>{await caches.delete(g)},X=async()=>{const g=["v0.8.4"],j=(await caches.keys()).filter((z)=>!g.includes(z));await Promise.all(j.map(W))};self.addEventListener("activate",(g)=>{g.waitUntil(clients.claim()),g.waitUntil((async()=>{if(self.registration.navigationPreload)await self.registration.navigationPreload.enable()})()),g.waitUntil(X())});self.addEventListener("install",(g)=>{self.skipWaiting();const i=async(j)=>{await(await caches.open("v0.8.4")).addAll(j)};g.waitUntil(i(O))});self.addEventListener("fetch",async(g)=>{Q.forEach((i)=>{if(g.request.url.startsWith(i))g.respondWith(V({request:g.request,preloadResponsePromise:g.preloadResponse,fallbackUrl:"/commentary/chrome-96x96.png"}))})});
