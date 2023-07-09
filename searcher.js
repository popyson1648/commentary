"use strict";const main=()=>{const e="search",t="highlight",s=document.getElementById("searchbar"),n=document.getElementById("search-wrapper"),r=document.getElementById("searchresults"),o=document.getElementById("search-toggle");let a=[],c={teaser_word_count:30,limit_results:30},l={bool:"AND",expand:!0,fields:{title:{boost:1},body:{boost:1},breadcrumbs:{boost:0}}};const d=(e,s,n)=>{const r=a[s.ref].split("#");1==r.length&&r.push("");const o=e+1;return'<a href="'+document.getElementById("searcher").dataset.pathtoroot+r[0]+"?"+t+"="+encodeURIComponent(n.join(" ")).replace(/\'/g,"%27")+"#"+r[1]+'" aria-details="teaser_'+o+'">'+s.doc.breadcrumbs+'</a><span class="teaser" id="teaser_'+o+'" aria-label="Search Result Teaser">'+((e,t)=>{const s=[];let n=0,r=0,o=!1;if(e.toLowerCase().split(". ").map((e=>{const a=e.split(" ");n=8,a.map((e=>{e.length>0&&(t.map((e=>elasticlunr.stemmer(e.toLowerCase()))).map((t=>{elasticlunr.stemmer(e).startsWith(t)&&(n=40,o=!0)})),s.push([e,n,r]),n=2),r+=e.length,r+=1})),r+=1})),0==s.length)return e;const a=Math.min(s.length,c.teaser_word_count),l=(()=>{const e=[];let t=0;for(let e=0;e<a;e++)t+=s[e][1];e.push(t);for(let n=0;n<s.length-a;n++)t-=s[n][1],t+=s[n+a][1],e.push(t);return e})(),d=(()=>{if(!o)return 0;let e=0,t=0;for(let s=l.length-1;s>=0;s--)l[s]>e&&(e=l[s],t=s);return t})(),i=[];let u=s[d][2];const m=t=>{u=t[2]+t[0].length,i.push(e.substring(t[2],u))};for(let t=d;t<d+a;t++){const n=s[t];u<n[2]&&(i.push(e.substring(u,n[2])),u=n[2]),40==n[1]?(i.push("<em>"),m(n),i.push("</em>")):m(n)}return i.join("")})(s.doc.body,n)+"</span>"},i=()=>{n.classList.remove("hidden"),o.setAttribute("aria-expanded","true")},u=()=>{n.classList.add("hidden"),o.setAttribute("aria-expanded","false"),null!=r.length&&r.children.map((e=>e.classList.remove("focus")))},m=m=>{const h=new Mark(document.querySelector("main")),p=[];c=m.results_options,l=m.search_options,a=m.doc_urls,o.addEventListener("click",(()=>{n.classList.contains("hidden")?(i(),window.scrollTo(0,0),s.select()):u()}),{once:!1,passive:!0});const f=e=>{const t=document.createElement("a");return t.href=e,{source:e,protocol:t.protocol.replace(":",""),host:t.hostname,port:t.port,params:(()=>{const e={};return t.search.replace(/^\?/,"").split("&").filter((t=>{const s=t.split("=");e[s[0]]=s[1]})),e})(),file:(t.pathname.match(/\/([^/?#]+)$/i)||[,""])[1],hash:t.hash.replace("#",""),path:t.pathname.replace(/^([^/])/,"/$1")}},w=()=>{const n=e=>{for(;e.firstChild;)e.removeChild(e.firstChild)},o=s.value.trim();""!=o?(s.classList.add("active"),(e=>{n(r);const t=elasticlunr.Index.load(m.index).search(e,l),s=Math.min(t.length,c.limit_results);document.getElementById("searchresults-header").innerText=(t.length>s?"Over ":"")+s+" search results for: "+e;const o=e.split(" ");for(let e=0;e<s;e++){const s=document.createElement("li");s.innerHTML=d(e,t[e],o),r.appendChild(s)}document.getElementById("searchresults-outer").classList.remove("hidden")})(o)):(s.classList.remove("active"),document.getElementById("searchresults-outer").classList.add("hidden"),n(r)),h.unmark();const a=f(window.location.href);delete a.params[t],""!=o?(a.params[e]=o,a.hash=""):delete a.params[e]};document.addEventListener("keyup",(e=>{if("Escape"!=e.key)return void w();u();const t=document.createElement("input");t.setAttribute("style","position: absolute; opacity: 0;"),o.appendChild(t),t.focus(),t.remove()}),{once:!1,passive:!0});const g=()=>{const n=f(window.location.href);n.params.hasOwnProperty.call(e)&&""!=n.params[e]?(i(),s.value=decodeURIComponent((n.params[e]+"").replace(/\+/g,"%20")),w()):u(),n.params.hasOwnProperty(t)&&(h.mark(decodeURIComponent(n.params[t]).split(" "),{exclude:p}),document.querySelectorAll("mark").forEach((e=>{e.addEventListener("click",h.unmark,{once:!0,passive:!0})})))};window.onpopstate=()=>g(),document.addEventListener("submit",(e=>{e.preventDefault()}),{once:!1,passive:!1}),g()},h=document.getElementById("searcher").dataset.pathtoroot+"searchindex";fetch(h+".json").then((e=>e.json())).then((e=>m(e))).catch((()=>{console.log("Try to load searchindex.js if fetch failed");const e=document.createElement("script");e.src=h+".js",e.onload=()=>m(search),document.head.appendChild(e)})),search.hasFocus=()=>s===document.activeElement},fzfInit=()=>{window.elasticlunr.Index.load=e=>{const t=window.fzf.Fzf,s=e.documentStore.docs,n=new t(Object.keys(s),{selector:e=>{const t=s[e];return t.text=`${t.title}${t.breadcrumbs}${t.body}`,t.text}});return{search:e=>n.find(e).map((e=>{const{item:t,score:n}=e;return{doc:s[t],ref:t,score:n}}))}}};Mark&&elasticlunr&&(window.search=window.search||{},document.addEventListener("DOMContentLoaded",(()=>{window.elasticlunr.Index.load=e=>{const t=window.fzf.Fzf,s=e.documentStore.docs,n=new t(Object.keys(s),{selector:e=>{const t=s[e];return t.text=`${t.title}${t.breadcrumbs}${t.body}`,t.text}});return{search:e=>n.find(e).map((e=>{const{item:t,score:n}=e;return{doc:s[t],ref:t,score:n}}))}},main()}),{once:!0,passive:!0}));