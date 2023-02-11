"use strict";const playground_text=(e,t=!0)=>t?e.querySelector("code").textContent:e.querySelector("code").innerText;hljs.configure({languages:["txt"]}),hljs.highlightAll(),Array.from(document.querySelectorAll("code")).filter((e=>!e.parentElement.classList.contains("header"))).forEach((e=>{e.classList.add("hljs")})),window.playground_copyable&&Array.from(document.querySelectorAll("pre code")).forEach((e=>{const t=e.parentNode;let o=t.querySelector(".buttons");o||(o=document.createElement("div"),o.className="buttons",t.insertBefore(o,t.firstChild));const r=document.createElement("button");r.className="fa-copy clip-button",r.title="Copy to clipboard",r.setAttribute("aria-label",r.title),r.innerHTML='<i class="tooltiptext"></i>',o.insertBefore(r,o.firstChild)})),(()=>{const e=document.querySelector("html"),t=document.getElementById("book").dataset.defaulttheme,o=document.getElementById("theme-toggle"),r=document.getElementById("theme-list"),n=document.querySelector('meta[name="theme-color"]'),a=()=>{let e;try{e=localStorage.getItem("mdbook-theme")}catch(e){console.log("ERROR: get_theme#mdbook-theme")}return null!=e?e:t},s=(t,o=!0)=>{setTimeout((()=>{n.content=window.getComputedStyle(document.body).backgroundColor}),1);const s=a();if(o)try{localStorage.setItem("mdbook-theme",t)}catch(e){console.log("ERROR: set_theme#mdbook-theme")}e.classList.remove(s),e.classList.add(t),r.querySelectorAll(".theme-selected").forEach((e=>{e.classList.remove("theme-selected")})),r.querySelector("button#"+a()).classList.add("theme-selected")},i=()=>{r.style.display="none",o.setAttribute("aria-expanded",!1),o.focus()};s(a(),!1),o.addEventListener("click",(()=>{"block"===r.style.display?i():(r.style.display="block",o.setAttribute("aria-expanded",!0),r.querySelector("button#"+a()).focus())})),r.addEventListener("click",(e=>{let t;if("theme"===e.target.className)t=e.target.id;else{if("theme"!==e.target.parentElement.className)return;t=e.target.parentElement.id}s(t)})),r.addEventListener("focusout",(e=>{!e.relatedTarget||o.contains(e.relatedTarget)||r.contains(e.relatedTarget)||i()})),document.addEventListener("click",(e=>{"block"!==r.style.display||o.contains(e.target)||r.contains(e.target)||i()})),document.addEventListener("keydown",(e=>{r.contains(e.target)&&(e.preventDefault(),i())}))})(),(()=>{const e=document.querySelector("html"),t=document.getElementById("sidebar"),o=document.querySelectorAll("#sidebar a"),r=document.getElementById("sidebar-toggle");r.setAttribute("aria-expanded","visible"===t),t.setAttribute("aria-hidden","visible"!==t),o.forEach((e=>{e.setAttribute("tabIndex","visible"===t?0:-1)}));let n=null;const a=e=>{e.currentTarget.parentElement.classList.toggle("expanded")};Array.from(document.querySelectorAll("#sidebar a.toggle")).forEach((e=>{e.addEventListener("click",a)}));const s=()=>{if(!e.classList.contains("sidebar-visible")){e.classList.remove("sidebar-hidden"),e.classList.add("sidebar-visible"),Array.from(o).forEach((e=>{e.setAttribute("tabIndex",0)})),r.setAttribute("aria-expanded",!0),t.setAttribute("aria-hidden",!1);try{localStorage.setItem("mdbook-sidebar","visible")}catch(e){console.log("ERROR: showSidebar")}}},i=()=>{if(!e.classList.contains("sidebar-hidden")){e.classList.remove("sidebar-visible"),e.classList.add("sidebar-hidden"),Array.from(o).forEach((e=>{e.setAttribute("tabIndex",-1)})),r.setAttribute("aria-expanded",!1),t.setAttribute("aria-hidden",!0);try{localStorage.setItem("mdbook-sidebar","hidden")}catch(e){console.log("ERROR: hideSidebar")}}};let l;r.addEventListener("click",(()=>{e.classList.contains("sidebar-hidden")?s():i()})),globalThis.addEventListener("resize",(()=>{clearTimeout(l),l=setTimeout((()=>{window.innerWidth>=1200&&s()}),200)})),document.addEventListener("touchstart",(e=>{n={x:e.touches[0].clientX,time:Date.now()}}),{passive:!0}),document.addEventListener("touchmove",(e=>{if(!n)return;if(Date.now()-n.time>250)return;const t=e.touches[0].clientX,o=t-n.x;Math.abs(o)>=150&&(o>=0?n.x<Math.min(.25*document.body.clientWidth,300)&&s():t<300&&i(),n=null)}),{passive:!0});const c=document.getElementById("sidebar").querySelector(".active");c&&c.scrollIntoView({block:"center"}),window.innerWidth<750&&i()})(),document.addEventListener("keyup",(e=>{if(!window.search.hasFocus())if("ArrowRight"==e.key){e.preventDefault();const t=document.querySelector(".mobile-nav-chapters.next");t&&(window.location.href=t.href)}else if("ArrowLeft"==e.key){e.preventDefault();const t=document.querySelector(".mobile-nav-chapters.previous");t&&(window.location.href=t.href)}})),(()=>{const e=e=>{e.firstChild.innerText="",e.className="fa-copy clip-button"},t=(e,t)=>{e.firstChild.innerText=t,e.className="fa-copy tooltipped"},o=new ClipboardJS(".clip-button",{text:t=>(e(t),playground_text(t.closest("pre"),!1))});Array.from(document.querySelectorAll(".clip-button")).forEach((t=>{t.addEventListener("mouseout",(t=>{e(t.currentTarget)}))})),o.on("success",(e=>{e.clearSelection(),t(e.trigger,"Copied!")})),o.on("error",(e=>{t(e.trigger,"Clipboard error!")}))})(),document.querySelector(".menu-title").addEventListener("click",(()=>{document.scrollingElement.scrollTo({top:0,behavior:"smooth"})}));