var Q=["/commentary/book.js","/commentary/elasticlunr.min.js","/commentary/manifest.json","/commentary/searcher.js","/commentary/searchindex.json","/commentary/css/style.css","/commentary/apple-touch-icon.png","/commentary/chrome-96x96.png","/commentary/chrome-192x192.png","/commentary/chrome-512x512.png","/commentary/favicon.ico","/commentary/favicon.png","/commentary/fonts/OpenSans-Bold.woff2","/commentary/fonts/OpenSans-BoldItalic.woff2","/commentary/fonts/OpenSans-Italic.woff2","/commentary/fonts/OpenSans-Regular.woff2","/commentary/fonts/SourceCodePro-Medium.woff2","/commentary/fonts/fonts.css","/commentary/fonts/icomoon.woff2","/commentary/fonts/SauceCodePro/SauceCodeProNerdFont-Medium.woff2"],S=["https://coralpink.github.io/","http://127.0.0.1:8080/"],V=async({request:W,preloadResponsePromise:g,fallbackUrl:j})=>{const z=await caches.match(W);if(z)return z;const J=await g,M=async(B,G)=>{await(await caches.open("v0.7.0")).put(B,G)};if(J)return M(W,J.clone()),J;try{const B=await fetch(W);return M(W,B.clone()),B}catch(B){const G=await caches.match(j);if(G)return G;return new Response("Network error happened",{status:408,headers:{"Content-Type":"text/plain"}})}},X=async(W)=>{await caches.delete(W)},Y=async()=>{const W=["v0.7.0"],j=(await caches.keys()).filter((z)=>!W.includes(z));await Promise.all(j.map(X))};self.addEventListener("activate",(W)=>{W.waitUntil(clients.claim()),W.waitUntil((async()=>{if(self.registration.navigationPreload)await self.registration.navigationPreload.enable()})()),W.waitUntil(Y())});self.addEventListener("install",(W)=>{self.skipWaiting();const g=async(j)=>{await(await caches.open("v0.7.0")).addAll(j)};W.waitUntil(g(Q))});self.addEventListener("fetch",async(W)=>{S.forEach((g)=>{if(W.request.url.startsWith(g))W.respondWith(V({request:W.request,preloadResponsePromise:W.preloadResponse,fallbackUrl:"/commentary/chrome-96x96.png"}))})});
