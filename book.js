"use strict";const attributeExternalLinks=()=>{document.querySelectorAll('.content main a[href^="http"]').forEach((e=>{e.setAttribute("target","_blank"),e.setAttribute("rel","noopener")}))},initSideBar=()=>{const e=document.getElementById("page"),t=document.getElementById("sidebar"),o=document.getElementById("sidebar-toggle"),n=document.getElementById("side-scroll"),r=t.querySelector(".active"),a=e=>{e.currentTarget.parentElement.classList.toggle("expanded")};Array.from(t.querySelectorAll("a.toggle")).forEach((e=>{e.addEventListener("click",a,{once:!1,passive:!0})}));const c=()=>{e.style.display="grid",t.style.display="block",t.setAttribute("aria-hidden",!1),o.setAttribute("aria-expanded",!0),n.style.display="block",r&&r.scrollIntoView({block:"center"});try{localStorage.setItem("mdbook-sidebar","visible")}catch(e){console.log("ERROR: showSidebar")}},l=()=>{n.style.display="none",e.style.display="block",t.style.display="none",t.setAttribute("aria-hidden",!0),o.setAttribute("aria-expanded",!1);try{localStorage.setItem("mdbook-sidebar","hidden")}catch(e){console.log("ERROR: hideSidebar")}};o.addEventListener("click",(()=>{"true"==o.getAttribute("aria-expanded")?l():c()}),{once:!1,passive:!0}),window.matchMedia("(min-width: 1200px)").addEventListener("change",(e=>{e.matches&&c()})),window.innerWidth<750?l():"visible"==localStorage.getItem("mdbook-sidebar")?c():l()},initCodeBlock=()=>{const e=document.querySelector(".content main");if(Array.from(e.querySelectorAll("code")).filter((e=>!e.parentElement.classList.contains("header"))).forEach((e=>e.classList.add("hljs"))),hljs.configure({languages:["txt"]}),hljs.highlightAll(),!window.playground_copyable)return;Array.from(e.querySelectorAll("pre code")).forEach((e=>{const t=e.parentNode;let o=t.querySelector(".buttons");o||(o=document.createElement("div"),o.className="buttons",t.insertBefore(o,t.firstChild));const n=document.createElement("button");n.className="fa-copy clip-button",n.title="Copy to clipboard",n.setAttribute("aria-label",n.title),n.innerHTML='<i class="tooltiptext"></i>',o.insertBefore(n,o.firstChild)}));const t=e=>{e.firstChild.innerText="",e.className="fa-copy clip-button"},o=(e,t)=>{e.firstChild.innerText=t,e.className="fa-copy tooltipped"};Array.from(e.querySelectorAll("pre .clip-button")).forEach((e=>{e.addEventListener("mouseout",(e=>{t(e.currentTarget)}),{once:!1,passive:!0})}));const n=new ClipboardJS(".clip-button",{text:e=>(t(e),e.closest("pre").querySelector("code").innerText)});n.on("success",(e=>{e.clearSelection(),o(e.trigger,"Copied!")})),n.on("error",(e=>o(e.trigger,"Clipboard error!")))},createTableOfContents=()=>{const e=new Map;let t=null;const o=new IntersectionObserver((o=>{o.forEach((o=>{var n;o.isIntersecting?(n=o,t&&(t.classList.remove("active"),t=null),e.get(n.target).classList.add("active")):(o=>{let n=0,r=null;e.forEach((e=>{e.classList.contains("active")&&(n++,r=e)})),n<=1?t=r:e.get(o.target).classList.remove("active")})(o)}))}),{root:document.querySelector("content")});document.querySelectorAll(".content a.header").forEach((t=>{o.observe(t);const n=document.createElement("a");n.appendChild(document.createTextNode(t.text)),n.href=t.href,n.classList.add(t.parentElement.tagName),document.getElementsByClassName("pagetoc")[0].appendChild(n),e.set(t,n)}))},initThemeSelector=()=>{const e=document.getElementById("theme-list"),t=document.getElementById("theme-toggle"),o=t=>{e.querySelectorAll(".theme-selected").forEach((e=>e.classList.remove("theme-selected"))),e.querySelector("button#"+t).classList.add("theme-selected"),setTimeout((()=>{document.querySelector('meta[name="theme-color"]').content=window.getComputedStyle(document.body).backgroundColor}),1)};let n=(()=>{let e;try{e=localStorage.getItem("mdbook-theme")}catch(e){console.log("ERROR: getTheme#mdbook-theme")}if(null!=e)return e;const t=document.getElementById("book").dataset.defaulttheme;return o(t),t})();const r=()=>{e.style.display="none",t.setAttribute("aria-expanded",!1),t.focus()};t.addEventListener("click",(()=>{"block"===e.style.display?r():(e.style.display="block",t.setAttribute("aria-expanded",!0),e.querySelector("button#"+n).focus())}),{once:!1,passive:!0}),e.addEventListener("click",(e=>{"theme"===e.target.className&&(e=>{if(e==n)return;o(e);const t=document.querySelector("html");t.classList.remove(n),t.classList.add(e);try{localStorage.setItem("mdbook-theme",e)}catch(e){console.log("ERROR: setTheme#mdbook-theme")}n=e})(e.target.id)}),{once:!1,passive:!0}),e.addEventListener("focusout",(o=>{!o.relatedTarget||t.contains(o.relatedTarget)||e.contains(o.relatedTarget)||r()}),{once:!1,passive:!0}),document.addEventListener("click",(o=>{"block"!==e.style.display||t.contains(o.target)||e.contains(o.target)||r()}),{once:!1,passive:!0})},touchControl=()=>{let e=null;document.addEventListener("touchstart",(t=>{e={x:t.touches[0].clientX,time:Date.now()}}),{once:!1,passive:!0}),document.addEventListener("touchmove",(t=>{if(!e)return;if(Date.now()-e.time>250)return;const o=t.touches[0].clientX,n=o-e.x;Math.abs(n)>=150&&(n>=0?e.x<Math.min(.25*document.body.clientWidth,300)&&showSidebar():o<300&&hideSidebar(),e=null)}),{once:!1,passive:!0})};document.addEventListener("keyup",(e=>{if(!window.search.hasFocus())if("ArrowRight"==e.key){e.preventDefault();const t=document.querySelector(".content main .nav-chapters.next");t&&(window.location.href=t.href)}else if("ArrowLeft"==e.key){e.preventDefault();const t=document.querySelector(".content main .nav-chapters.previous");t&&(window.location.href=t.href)}}),{once:!1,passive:!0}),document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll('.content main a[href^="http"]').forEach((e=>{e.setAttribute("target","_blank"),e.setAttribute("rel","noopener")})),initSideBar(),initCodeBlock(),createTableOfContents(),initThemeSelector(),touchControl()}),{once:!0,passive:!0});