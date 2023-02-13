"use strict";const rootPath=document.getElementById("searcher").dataset.pathtoroot;window.search=window.search||{},(e=>{if(!Mark||!elasticlunr)return;const t=document.getElementById("search-wrapper"),s=document.getElementById("searchbar"),r=document.getElementById("searchresults"),a=document.getElementById("searchresults-outer"),n=document.getElementById("searchresults-header"),o=document.getElementById("search-toggle"),l="search",c="highlight";let i=null,h=[],d={teaser_word_count:30,limit_results:30},p={bool:"AND",expand:!0,fields:{title:{boost:1},body:{boost:1},breadcrumbs:{boost:0}}};const u=[],m=new Mark(document.getElementById("content"));let f="",g=0;const _=e=>{for(;e.firstChild;)e.removeChild(e.firstChild)},w=e=>{const t=document.createElement("a");return t.href=e,{source:e,protocol:t.protocol.replace(":",""),host:t.hostname,port:t.port,params:(()=>{const e={},s=t.search.replace(/^\?/,"").split("&");let r=0;for(;r<s.length;r++){if(!s[r])continue;const t=s[r].split("=");e[t[0]]=t[1]}return e})(),file:(t.pathname.match(/\/([^/?#]+)$/i)||[,""])[1],hash:t.hash.replace("#",""),path:t.pathname.replace(/^([^/])/,"/$1")}},y=e=>{let t=e.protocol+"://"+e.host;""!=e.port&&(t+=":"+e.port),t+=e.path;let s="?";for(const r in e.params)e.params.hasOwnProperty.call(r)&&(t+=s+r+"="+e.params[r],s="&");return""!=e.hash&&(t+="#"+e.hash),t},b=(()=>{const e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},t=t=>e[t];return e=>e.replace(/[&<>'"]/g,t)})(),E=(e,t)=>{const s=v(b(e.doc.body),t);g++;const r=h[e.ref].split("#");1==r.length&&r.push("");const a=encodeURIComponent(t.join(" ")).replace(/\'/g,"%27");return'<a href="'+rootPath+r[0]+"?"+c+"="+a+"#"+r[1]+'" aria-details="teaser_'+g+'">'+e.doc.breadcrumbs+'</a><span class="teaser" id="teaser_'+g+'" aria-label="Search Result Teaser">'+s+"</span>"},v=(e,t)=>{const s=t.map((function(e){return elasticlunr.stemmer(e.toLowerCase())})),r=[],a=e.toLowerCase().split(". ");let n=0,o=0,l=!1;for(const e in a){const t=a[e].split(" ");o=8;for(const e in t){const a=t[e];if(a.length>0){for(const e in s)elasticlunr.stemmer(a).startsWith(s[e])&&(o=40,l=!0);r.push([a,o,n]),o=2}n+=a.length,n+=1}n+=1}if(0==r.length)return e;const c=[],i=Math.min(r.length,d.teaser_word_count);let h=0;for(let e=0;e<i;e++)h+=r[e][1];c.push(h);for(let e=0;e<r.length-i;e++)h-=r[e][1],h+=r[e+i][1],c.push(h);let p=0;if(l){let e=0;for(let t=c.length-1;t>=0;t--)c[t]>e&&(e=c[t],p=t)}else p=0;const u=[];let m=r[p][2];for(let t=p;t<p+i;t++){const s=r[t];m<s[2]&&(u.push(e.substring(m,s[2])),m=s[2]),40==s[1]&&u.push("<em>"),m=s[2]+s[0].length,u.push(e.substring(s[2],m)),40==s[1]&&u.push("</em>")}return u.join("")},L=e=>{d=e.results_options,p=e.search_options,h=e.doc_urls,i=elasticlunr.Index.load(e.index),o.addEventListener("click",(()=>{x()}),!1),document.addEventListener("keyup",(e=>{if("Escape"!=e.key)return void B();C(!1);const t=document.createElement("input");t.setAttribute("style","position: absolute; opacity: 0;"),o.appendChild(t),t.focus(),t.remove()}),!1),window.onpopstate=()=>{I()},document.addEventListener("submit",(e=>{e.preventDefault()}),!1),I()},I=()=>{const e=w(window.location.href);if(e.params.hasOwnProperty.call(l)&&""!=e.params[l]?(C(!0),s.value=decodeURIComponent((e.params[l]+"").replace(/\+/g,"%20")),B()):C(!1),e.params.hasOwnProperty.call(c)){m.mark(decodeURIComponent(e.params[c]).split(" "),{exclude:u});const t=document.querySelectorAll("mark"),s=()=>{for(let e=0;e<t.length;e++)t[e].classList.add("fade-out"),globalThis.setTimeout((()=>{m.unmark()}),300)};for(let e=0;e<t.length;e++)t[e].addEventListener("click",s)}},C=e=>{if(e)t.classList.remove("hidden"),o.setAttribute("aria-expanded","true");else{t.classList.add("hidden"),o.setAttribute("aria-expanded","false");const e=r.children;for(let t=0;t<e.length;t++)e[t].classList.remove("focus")}},k=e=>{e?a.classList.remove("hidden"):a.classList.add("hidden")},x=()=>{t.classList.contains("hidden")?(C(!0),window.scrollTo(0,0),s.select()):C(!1)},B=()=>{const e=s.value.trim();""!=e?(s.classList.add("active"),T(e)):(s.classList.remove("active"),k(!1),_(r)),P(e,"push_if_new_search_else_replace"),m.unmark()},P=(e,t)=>{const s=w(window.location.href),r=!s.params.hasOwnProperty.call(l);""!=e||"push_if_new_search_else_replace"==t?(s.params[l]=e,delete s.params[c],s.hash=""):(delete s.params[c],delete s.params[l]),"push"==t||"push_if_new_search_else_replace"==t&&r?history.pushState({},document.title,y(s)):("replace"==t||"push_if_new_search_else_replace"==t&&!r)&&history.replaceState({},document.title,y(s))},T=e=>{if(f==e)return;if(f=e,!i)return;const t=i.search(e,p),s=Math.min(t.length,d.limit_results);n.innerText=((e,t)=>0==e?"No search results for '"+t+"'.":1==e?e+" search result for '"+t+"':":e+" search results for '"+t+"':")(s,e);const a=e.split(" ");_(r);for(let e=0;e<s;e++){const s=document.createElement("li");s.innerHTML=E(t[e],a),r.appendChild(s)}k(!0)};fetch(rootPath+"searchindex.json").then((e=>e.json())).then((e=>L(e))).catch((()=>{const e=document.createElement("script");e.src=rootPath+"searchindex.js",e.onload=()=>L(window.search),document.head.appendChild(e)})),e.hasFocus=()=>s===document.activeElement})(window.search);