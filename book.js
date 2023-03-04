"use strict";Array.from(document.querySelectorAll("code")).filter((e=>!e.parentElement.classList.contains("header"))).forEach((e=>e.classList.add("hljs"))),hljs.configure({languages:["txt"]}),hljs.highlightAll(),window.playground_copyable&&Array.from(document.querySelectorAll("pre code")).forEach((e=>{const t=e.parentNode;let o=t.querySelector(".buttons");o||(o=document.createElement("div"),o.className="buttons",t.insertBefore(o,t.firstChild));const r=document.createElement("button");r.className="fa-copy clip-button",r.title="Copy to clipboard",r.setAttribute("aria-label",r.title),r.innerHTML='<i class="tooltiptext"></i>',o.insertBefore(r,o.firstChild)})),(()=>{const e=document.getElementById("theme-list"),t=document.getElementById("theme-toggle"),o=t=>{e.querySelectorAll(".theme-selected").forEach((e=>e.classList.remove("theme-selected"))),e.querySelector("button#"+t).classList.add("theme-selected"),setTimeout((()=>{document.querySelector('meta[name="theme-color"]').content=window.getComputedStyle(document.body).backgroundColor}),1)};let r=(()=>{let e;try{e=localStorage.getItem("mdbook-theme")}catch(e){console.log("ERROR: getTheme#mdbook-theme")}if(null!=e)return e;const t=document.getElementById("book").dataset.defaulttheme;return o(t),t})();const s=()=>{e.style.display="none",t.setAttribute("aria-expanded",!1),t.focus()};t.addEventListener("click",(()=>{"block"===e.style.display?s():(e.style.display="block",t.setAttribute("aria-expanded",!0),e.querySelector("button#"+r).focus())}),{once:!1,passive:!0}),e.addEventListener("click",(e=>{"theme"===e.target.className&&(e=>{if(e==r)return;o(e);const t=document.querySelector("html");t.classList.remove(r),t.classList.add(e);try{localStorage.setItem("mdbook-theme",e)}catch(e){console.log("ERROR: setTheme#mdbook-theme")}r=e})(e.target.id)}),{once:!1,passive:!0}),e.addEventListener("focusout",(o=>{!o.relatedTarget||t.contains(o.relatedTarget)||e.contains(o.relatedTarget)||s()}),{once:!1,passive:!0}),document.addEventListener("click",(o=>{"block"!==e.style.display||t.contains(o.target)||e.contains(o.target)||s()}),{once:!1,passive:!0}),document.addEventListener("keydown",(t=>{e.contains(t.target)&&(t.preventDefault(),s())}),{once:!1,passive:!1})})(),(()=>{const e=document.querySelector("html"),t=document.getElementById("sidebar"),o=document.querySelectorAll("#sidebar a"),r=document.getElementById("sidebar-toggle");r.setAttribute("aria-expanded","visible"===t),t.setAttribute("aria-hidden","visible"!==t),o.forEach((e=>{e.setAttribute("tabIndex","visible"===t?0:-1)}));const s=e=>{e.currentTarget.parentElement.classList.toggle("expanded")};Array.from(document.querySelectorAll("#sidebar a.toggle")).forEach((e=>{e.addEventListener("click",s,{once:!1,passive:!0})}));const n=()=>{if(!e.classList.contains("sidebar-visible")){e.classList.remove("sidebar-hidden"),e.classList.add("sidebar-visible"),Array.from(o).forEach((e=>{e.setAttribute("tabIndex",0)})),r.setAttribute("aria-expanded",!0),t.setAttribute("aria-hidden",!1);try{localStorage.setItem("mdbook-sidebar","visible")}catch(e){console.log("ERROR: showSidebar")}}},a=()=>{if(!e.classList.contains("sidebar-hidden")){e.classList.remove("sidebar-visible"),e.classList.add("sidebar-hidden"),Array.from(o).forEach((e=>{e.setAttribute("tabIndex",-1)})),r.setAttribute("aria-expanded",!1),t.setAttribute("aria-hidden",!0);try{localStorage.setItem("mdbook-sidebar","hidden")}catch(e){console.log("ERROR: hideSidebar")}}};r.addEventListener("click",(()=>{e.classList.contains("sidebar-hidden")?n():a()}),{once:!1,passive:!0});let i=null;globalThis.addEventListener("resize",(()=>{clearTimeout(i),i=setTimeout((()=>{window.innerWidth>=1200&&n()}),200)}),{once:!1,passive:!0});let c=null;document.addEventListener("touchstart",(e=>{c={x:e.touches[0].clientX,time:Date.now()}}),{once:!1,passive:!0}),document.addEventListener("touchmove",(e=>{if(!c)return;if(Date.now()-c.time>250)return;const t=e.touches[0].clientX,o=t-c.x;Math.abs(o)>=150&&(o>=0?c.x<Math.min(.25*document.body.clientWidth,300)&&n():t<300&&a(),c=null)}),{once:!1,passive:!0});const l=document.getElementById("sidebar").querySelector(".active");l&&l.scrollIntoView({block:"center"}),window.innerWidth<750&&a()})(),document.addEventListener("keyup",(e=>{if(!window.search.hasFocus())if("ArrowRight"==e.key){e.preventDefault();const t=document.querySelector(".mobile-nav-chapters.next");t&&(window.location.href=t.href)}else if("ArrowLeft"==e.key){e.preventDefault();const t=document.querySelector(".mobile-nav-chapters.previous");t&&(window.location.href=t.href)}}),{once:!1,passive:!1}),(()=>{const e=e=>{e.firstChild.innerText="",e.className="fa-copy clip-button"},t=(e,t)=>{e.firstChild.innerText=t,e.className="fa-copy tooltipped"};Array.from(document.querySelectorAll(".clip-button")).forEach((t=>{t.addEventListener("mouseout",(t=>{e(t.currentTarget)}),{once:!1,passive:!0})}));const o=new ClipboardJS(".clip-button",{text:t=>(e(t),t.closest("pre").querySelector("code").innerText)});o.on("success",(e=>{e.clearSelection(),t(e.trigger,"Copied!")})),o.on("error",(e=>t(e.trigger,"Clipboard error!")))})();