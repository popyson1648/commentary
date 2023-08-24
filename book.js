"use strict";const initSideBar=()=>{const e=document.getElementById("page"),t=document.getElementById("sidebar"),o=document.getElementById("sidebar-toggle"),a=t.querySelector(".active"),n=e=>{e.currentTarget.parentElement.classList.toggle("expanded")};Array.from(t.querySelectorAll("a.toggle")).forEach((e=>{e.addEventListener("click",n,{once:!1,passive:!0})}));const r=()=>{e.style.display="grid",t.style.display="block",t.style.visibility="visible",t.setAttribute("aria-hidden",!1),o.setAttribute("aria-expanded",!0),a&&a.scrollIntoView({block:"center"});try{localStorage.setItem("mdbook-sidebar","visible")}catch(e){console.log("ERROR: showSidebar")}},s=()=>{e.style.display="block",t.style.display="none",t.style.visibility="hidden",t.setAttribute("aria-hidden",!0),o.setAttribute("aria-expanded",!1);try{localStorage.setItem("mdbook-sidebar","hidden")}catch(e){console.log("ERROR: hideSidebar")}};if(o.addEventListener("click",(()=>{"true"==o.getAttribute("aria-expanded")?s():r()}),{once:!1,passive:!0}),matchMedia("(min-width: 1200px)").addEventListener("change",(e=>{e.matches&&r()})),window.innerWidth<750)s();else switch(localStorage.getItem("mdbook-sidebar")){case"visible":default:r();break;case"hidden":s()}},initCodeBlock=()=>{const e=document.querySelector(".content main");Array.from(e.querySelectorAll("code")).filter((e=>!e.parentElement.classList.contains("header"))).forEach((e=>e.classList.add("hljs"))),hljs.configure({languages:["txt"]}),hljs.highlightAll(),Array.from(e.querySelectorAll("pre code")).forEach((e=>{const t=e.parentNode;let o=t.querySelector(".buttons");o||(o=document.createElement("div"),o.className="buttons",t.insertBefore(o,t.firstChild));const a=document.createElement("button");a.className="fa-copy clip-button",a.title="Copy to clipboard",a.setAttribute("aria-label",a.title),a.innerHTML='<i class="tooltiptext"></i>',o.insertBefore(a,o.firstChild)}));const t=e=>{e.firstChild.innerText="",e.className="fa-copy clip-button"},o=(e,t)=>{e.firstChild.innerText=t,e.className="fa-copy tooltipped"};Array.from(e.querySelectorAll("pre .clip-button")).forEach((e=>{e.addEventListener("mouseout",(e=>{t(e.currentTarget)}),{once:!1,passive:!0})}));const a=new ClipboardJS(".clip-button",{text:e=>(t(e),e.closest("pre").querySelector("code").innerText)});a.on("success",(e=>{e.clearSelection(),o(e.trigger,"Copied!")})),a.on("error",(e=>o(e.trigger,"Clipboard error!")))},createTableOfContents=()=>{const e=new Map;let t=null;const o=new IntersectionObserver((o=>{o.forEach((o=>{var a;o.isIntersecting?(a=o,t&&(t.classList.remove("active"),t=null),e.get(a.target).classList.add("active")):(o=>{let a=0,n=null;e.forEach((e=>{e.classList.contains("active")&&(a++,n=e)})),a<=1?t=n:e.get(o.target).classList.remove("active")})(o)}))}),{root:document.querySelector("content")});document.querySelectorAll(".content a.header").forEach((t=>{o.observe(t);const a=document.createElement("a");a.appendChild(document.createTextNode(t.text)),a.href=t.href,a.classList.add(t.parentElement.tagName),document.getElementsByClassName("pagetoc")[0].appendChild(a),e.set(t,a)}))},initThemeSelector=()=>{const e=document.getElementById("theme-list"),t=document.getElementById("theme-toggle"),o=()=>{e.style.display="none",t.setAttribute("aria-expanded",!1)};t.addEventListener("click",(()=>{"block"===e.style.display?o():(e.style.display="block",t.setAttribute("aria-expanded",!0))}),{once:!1,passive:!0});e.addEventListener("click",(t=>{"theme"===t.target.className&&(t=>{const o=document.querySelector("html").classList;if(t!=o.value){e.querySelectorAll(".theme-selected").forEach((e=>e.classList.remove("theme-selected"))),e.querySelector("button#"+t).classList.add("theme-selected"),o.replace(o.value,t);try{localStorage.setItem("mdbook-theme",t)}catch(e){console.log("ERROR: setTheme#mdbook-theme")}setTimeout((()=>{document.querySelector('meta[name="theme-color"]').content=window.getComputedStyle(document.body).backgroundColor}),1)}})(t.target.id)}),{once:!1,passive:!0}),e.addEventListener("focusout",(a=>{!a.relatedTarget||t.contains(a.relatedTarget)||e.contains(a.relatedTarget)||o()}),{once:!1,passive:!0}),document.addEventListener("click",(a=>{"block"!==e.style.display||t.contains(a.target)||e.contains(a.target)||o()}),{once:!1,passive:!0})};document.addEventListener("keyup",(e=>{if(!window.search.hasFocus())if("ArrowRight"==e.key){e.preventDefault();const t=document.querySelector(".content main .nav-chapters.next");t&&(window.location.href=t.href)}else if("ArrowLeft"==e.key){e.preventDefault();const t=document.querySelector(".content main .nav-chapters.previous");t&&(window.location.href=t.href)}}),{once:!1,passive:!0}),document.addEventListener("DOMContentLoaded",(()=>{initCodeBlock(),createTableOfContents(),initThemeSelector()}),{once:!0,passive:!0}),initSideBar();