const initializeToc=()=>{const e=new Map;let t=null;const a=new IntersectionObserver((a=>{a.forEach((a=>{var c;a.isIntersecting?(c=a,t&&(t.classList.remove("active"),t=null),e.get(c.target).classList.add("active")):(a=>{let c=0,n=null;e.forEach((e=>{e.classList.contains("active")&&(c++,n=e)})),c<=1?t=n:e.get(a.target).classList.remove("active")})(a)}))}),{root:document.querySelector("content")});document.querySelectorAll("a.header").forEach((t=>{a.observe(t);const c=document.createElement("a");c.appendChild(document.createTextNode(t.text)),c.href=t.href,c.classList.add(t.parentElement.tagName),document.getElementsByClassName("pagetoc")[0].appendChild(c),e.set(t,c)}))};globalThis.addEventListener("load",initializeToc,{once:!0,passive:!0});