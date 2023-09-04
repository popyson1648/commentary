/*! For license information please see searcher.js.LICENSE.txt */
(()=>{var e={813:function(e){e.exports=function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(n){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5e3;t(this,e),this.ctx=n,this.iframes=r,this.exclude=o,this.iframesTimeout=s}return n(e,[{key:"getContexts",value:function(){var e=[];return(void 0!==this.ctx&&this.ctx?NodeList.prototype.isPrototypeOf(this.ctx)?Array.prototype.slice.call(this.ctx):Array.isArray(this.ctx)?this.ctx:"string"==typeof this.ctx?Array.prototype.slice.call(document.querySelectorAll(this.ctx)):[this.ctx]:[]).forEach((function(t){var n=e.filter((function(e){return e.contains(t)})).length>0;-1!==e.indexOf(t)||n||e.push(t)})),e}},{key:"getIframeContents",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=void 0;try{var o=e.contentWindow;if(r=o.document,!o||!r)throw new Error("iframe inaccessible")}catch(e){n()}r&&t(r)}},{key:"isIframeBlank",value:function(e){var t="about:blank",n=e.getAttribute("src").trim();return e.contentWindow.location.href===t&&n!==t&&n}},{key:"observeIframeLoad",value:function(e,t,n){var r=this,o=!1,s=null,i=function i(){if(!o){o=!0,clearTimeout(s);try{r.isIframeBlank(e)||(e.removeEventListener("load",i),r.getIframeContents(e,t,n))}catch(e){n()}}};e.addEventListener("load",i),s=setTimeout(i,this.iframesTimeout)}},{key:"onIframeReady",value:function(e,t,n){try{"complete"===e.contentWindow.document.readyState?this.isIframeBlank(e)?this.observeIframeLoad(e,t,n):this.getIframeContents(e,t,n):this.observeIframeLoad(e,t,n)}catch(e){n()}}},{key:"waitForIframes",value:function(e,t){var n=this,r=0;this.forEachIframe(e,(function(){return!0}),(function(e){r++,n.waitForIframes(e.querySelector("html"),(function(){--r||t()}))}),(function(e){e||t()}))}},{key:"forEachIframe",value:function(t,n,r){var o=this,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},i=t.querySelectorAll("iframe"),a=i.length,c=0;i=Array.prototype.slice.call(i);var l=function(){--a<=0&&s(c)};a||l(),i.forEach((function(t){e.matches(t,o.exclude)?l():o.onIframeReady(t,(function(e){n(t)&&(c++,r(e)),l()}),l)}))}},{key:"createIterator",value:function(e,t,n){return document.createNodeIterator(e,t,n,!1)}},{key:"createInstanceOnIframe",value:function(t){return new e(t.querySelector("html"),this.iframes)}},{key:"compareNodeIframe",value:function(e,t,n){if(e.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_PRECEDING){if(null===t)return!0;if(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_FOLLOWING)return!0}return!1}},{key:"getIteratorNode",value:function(e){var t=e.previousNode();return{prevNode:t,node:(null===t||e.nextNode())&&e.nextNode()}}},{key:"checkIframeFilter",value:function(e,t,n,r){var o=!1,s=!1;return r.forEach((function(e,t){e.val===n&&(o=t,s=e.handled)})),this.compareNodeIframe(e,t,n)?(!1!==o||s?!1===o||s||(r[o].handled=!0):r.push({val:n,handled:!0}),!0):(!1===o&&r.push({val:n,handled:!1}),!1)}},{key:"handleOpenIframes",value:function(e,t,n,r){var o=this;e.forEach((function(e){e.handled||o.getIframeContents(e.val,(function(e){o.createInstanceOnIframe(e).forEachNode(t,n,r)}))}))}},{key:"iterateThroughNodes",value:function(e,t,n,r,o){for(var s=this,i=this.createIterator(t,e,r),a=[],c=[],l=void 0,u=void 0;h=void 0,h=s.getIteratorNode(i),u=h.prevNode,l=h.node;)this.iframes&&this.forEachIframe(t,(function(e){return s.checkIframeFilter(l,u,e,a)}),(function(t){s.createInstanceOnIframe(t).forEachNode(e,(function(e){return c.push(e)}),r)})),c.push(l);var h;c.forEach((function(e){n(e)})),this.iframes&&this.handleOpenIframes(a,e,n,r),o()}},{key:"forEachNode",value:function(e,t,n){var r=this,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},s=this.getContexts(),i=s.length;i||o(),s.forEach((function(s){var a=function(){r.iterateThroughNodes(e,s,t,n,(function(){--i<=0&&o()}))};r.iframes?r.waitForIframes(s,a):a()}))}}],[{key:"matches",value:function(e,t){var n="string"==typeof t?[t]:t,r=e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector;if(r){var o=!1;return n.every((function(t){return!r.call(e,t)||(o=!0,!1)})),o}return!1}}]),e}(),s=function(){function s(e){t(this,s),this.ctx=e,this.ie=!1;var n=window.navigator.userAgent;(n.indexOf("MSIE")>-1||n.indexOf("Trident")>-1)&&(this.ie=!0)}return n(s,[{key:"log",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"debug",r=this.opt.log;this.opt.debug&&"object"===(void 0===r?"undefined":e(r))&&"function"==typeof r[n]&&r[n]("mark.js: "+t)}},{key:"escapeStr",value:function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}},{key:"createRegExp",value:function(e){return"disabled"!==this.opt.wildcards&&(e=this.setupWildcardsRegExp(e)),e=this.escapeStr(e),Object.keys(this.opt.synonyms).length&&(e=this.createSynonymsRegExp(e)),(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(e=this.setupIgnoreJoinersRegExp(e)),this.opt.diacritics&&(e=this.createDiacriticsRegExp(e)),e=this.createMergedBlanksRegExp(e),(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(e=this.createJoinersRegExp(e)),"disabled"!==this.opt.wildcards&&(e=this.createWildcardsRegExp(e)),this.createAccuracyRegExp(e)}},{key:"createSynonymsRegExp",value:function(e){var t=this.opt.synonyms,n=this.opt.caseSensitive?"":"i",r=this.opt.ignoreJoiners||this.opt.ignorePunctuation.length?"\0":"";for(var o in t)if(t.hasOwnProperty(o)){var s=t[o],i="disabled"!==this.opt.wildcards?this.setupWildcardsRegExp(o):this.escapeStr(o),a="disabled"!==this.opt.wildcards?this.setupWildcardsRegExp(s):this.escapeStr(s);""!==i&&""!==a&&(e=e.replace(new RegExp("("+this.escapeStr(i)+"|"+this.escapeStr(a)+")","gm"+n),r+"("+this.processSynomyms(i)+"|"+this.processSynomyms(a)+")"+r))}return e}},{key:"processSynomyms",value:function(e){return(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(e=this.setupIgnoreJoinersRegExp(e)),e}},{key:"setupWildcardsRegExp",value:function(e){return(e=e.replace(/(?:\\)*\?/g,(function(e){return"\\"===e.charAt(0)?"?":""}))).replace(/(?:\\)*\*/g,(function(e){return"\\"===e.charAt(0)?"*":""}))}},{key:"createWildcardsRegExp",value:function(e){var t="withSpaces"===this.opt.wildcards;return e.replace(/\u0001/g,t?"[\\S\\s]?":"\\S?").replace(/\u0002/g,t?"[\\S\\s]*?":"\\S*")}},{key:"setupIgnoreJoinersRegExp",value:function(e){return e.replace(/[^(|)\\]/g,(function(e,t,n){var r=n.charAt(t+1);return/[(|)\\]/.test(r)||""===r?e:e+"\0"}))}},{key:"createJoinersRegExp",value:function(e){var t=[],n=this.opt.ignorePunctuation;return Array.isArray(n)&&n.length&&t.push(this.escapeStr(n.join(""))),this.opt.ignoreJoiners&&t.push("\\u00ad\\u200b\\u200c\\u200d"),t.length?e.split(/\u0000+/).join("["+t.join("")+"]*"):e}},{key:"createDiacriticsRegExp",value:function(e){var t=this.opt.caseSensitive?"":"i",n=this.opt.caseSensitive?["aàáảãạăằắẳẵặâầấẩẫậäåāą","AÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ","cçćč","CÇĆČ","dđď","DĐĎ","eèéẻẽẹêềếểễệëěēę","EÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ","iìíỉĩịîïī","IÌÍỈĨỊÎÏĪ","lł","LŁ","nñňń","NÑŇŃ","oòóỏõọôồốổỗộơởỡớờợöøō","OÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ","rř","RŘ","sšśșş","SŠŚȘŞ","tťțţ","TŤȚŢ","uùúủũụưừứửữựûüůū","UÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ","yýỳỷỹỵÿ","YÝỲỶỸỴŸ","zžżź","ZŽŻŹ"]:["aàáảãạăằắẳẵặâầấẩẫậäåāąAÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ","cçćčCÇĆČ","dđďDĐĎ","eèéẻẽẹêềếểễệëěēęEÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ","iìíỉĩịîïīIÌÍỈĨỊÎÏĪ","lłLŁ","nñňńNÑŇŃ","oòóỏõọôồốổỗộơởỡớờợöøōOÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ","rřRŘ","sšśșşSŠŚȘŞ","tťțţTŤȚŢ","uùúủũụưừứửữựûüůūUÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ","yýỳỷỹỵÿYÝỲỶỸỴŸ","zžżźZŽŻŹ"],r=[];return e.split("").forEach((function(o){n.every((function(n){if(-1!==n.indexOf(o)){if(r.indexOf(n)>-1)return!1;e=e.replace(new RegExp("["+n+"]","gm"+t),"["+n+"]"),r.push(n)}return!0}))})),e}},{key:"createMergedBlanksRegExp",value:function(e){return e.replace(/[\s]+/gim,"[\\s]+")}},{key:"createAccuracyRegExp",value:function(e){var t=this,n=this.opt.accuracy,r="string"==typeof n?n:n.value,o="string"==typeof n?[]:n.limiters,s="";switch(o.forEach((function(e){s+="|"+t.escapeStr(e)})),r){case"partially":default:return"()("+e+")";case"complementary":return"()([^"+(s="\\s"+(s||this.escapeStr("!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~¡¿")))+"]*"+e+"[^"+s+"]*)";case"exactly":return"(^|\\s"+s+")("+e+")(?=$|\\s"+s+")"}}},{key:"getSeparatedKeywords",value:function(e){var t=this,n=[];return e.forEach((function(e){t.opt.separateWordSearch?e.split(" ").forEach((function(e){e.trim()&&-1===n.indexOf(e)&&n.push(e)})):e.trim()&&-1===n.indexOf(e)&&n.push(e)})),{keywords:n.sort((function(e,t){return t.length-e.length})),length:n.length}}},{key:"isNumeric",value:function(e){return Number(parseFloat(e))==e}},{key:"checkRanges",value:function(e){var t=this;if(!Array.isArray(e)||"[object Object]"!==Object.prototype.toString.call(e[0]))return this.log("markRanges() will only accept an array of objects"),this.opt.noMatch(e),[];var n=[],r=0;return e.sort((function(e,t){return e.start-t.start})).forEach((function(e){var o=t.callNoMatchOnInvalidRanges(e,r),s=o.start,i=o.end;o.valid&&(e.start=s,e.length=i-s,n.push(e),r=i)})),n}},{key:"callNoMatchOnInvalidRanges",value:function(e,t){var n=void 0,r=void 0,o=!1;return e&&void 0!==e.start?(r=(n=parseInt(e.start,10))+parseInt(e.length,10),this.isNumeric(e.start)&&this.isNumeric(e.length)&&r-t>0&&r-n>0?o=!0:(this.log("Ignoring invalid or overlapping range: "+JSON.stringify(e)),this.opt.noMatch(e))):(this.log("Ignoring invalid range: "+JSON.stringify(e)),this.opt.noMatch(e)),{start:n,end:r,valid:o}}},{key:"checkWhitespaceRanges",value:function(e,t,n){var r=void 0,o=!0,s=n.length,i=t-s,a=parseInt(e.start,10)-i;return(r=(a=a>s?s:a)+parseInt(e.length,10))>s&&(r=s,this.log("End range automatically set to the max value of "+s)),a<0||r-a<0||a>s||r>s?(o=!1,this.log("Invalid range: "+JSON.stringify(e)),this.opt.noMatch(e)):""===n.substring(a,r).replace(/\s+/g,"")&&(o=!1,this.log("Skipping whitespace only range: "+JSON.stringify(e)),this.opt.noMatch(e)),{start:a,end:r,valid:o}}},{key:"getTextNodes",value:function(e){var t=this,n="",r=[];this.iterator.forEachNode(NodeFilter.SHOW_TEXT,(function(e){r.push({start:n.length,end:(n+=e.textContent).length,node:e})}),(function(e){return t.matchesExclude(e.parentNode)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}),(function(){e({value:n,nodes:r})}))}},{key:"matchesExclude",value:function(e){return o.matches(e,this.opt.exclude.concat(["script","style","title","head","html"]))}},{key:"wrapRangeInTextNode",value:function(e,t,n){var r=this.opt.element?this.opt.element:"mark",o=e.splitText(t),s=o.splitText(n-t),i=document.createElement(r);return i.setAttribute("data-markjs","true"),this.opt.className&&i.setAttribute("class",this.opt.className),i.textContent=o.textContent,o.parentNode.replaceChild(i,o),s}},{key:"wrapRangeInMappedTextNode",value:function(e,t,n,r,o){var s=this;e.nodes.every((function(i,a){var c=e.nodes[a+1];if(void 0===c||c.start>t){if(!r(i.node))return!1;var l=t-i.start,u=(n>i.end?i.end:n)-i.start,h=e.value.substr(0,i.start),d=e.value.substr(u+i.start);if(i.node=s.wrapRangeInTextNode(i.node,l,u),e.value=h+d,e.nodes.forEach((function(t,n){n>=a&&(e.nodes[n].start>0&&n!==a&&(e.nodes[n].start-=u),e.nodes[n].end-=u)})),n-=u,o(i.node.previousSibling,i.start),!(n>i.end))return!1;t=i.end}return!0}))}},{key:"wrapMatches",value:function(e,t,n,r,o){var s=this,i=0===t?0:t+1;this.getTextNodes((function(t){t.nodes.forEach((function(t){t=t.node;for(var o=void 0;null!==(o=e.exec(t.textContent))&&""!==o[i];)if(n(o[i],t)){var a=o.index;if(0!==i)for(var c=1;c<i;c++)a+=o[c].length;t=s.wrapRangeInTextNode(t,a,a+o[i].length),r(t.previousSibling),e.lastIndex=0}})),o()}))}},{key:"wrapMatchesAcrossElements",value:function(e,t,n,r,o){var s=this,i=0===t?0:t+1;this.getTextNodes((function(t){for(var a=void 0;null!==(a=e.exec(t.value))&&""!==a[i];){var c=a.index;if(0!==i)for(var l=1;l<i;l++)c+=a[l].length;var u=c+a[i].length;s.wrapRangeInMappedTextNode(t,c,u,(function(e){return n(a[i],e)}),(function(t,n){e.lastIndex=n,r(t)}))}o()}))}},{key:"wrapRangeFromIndex",value:function(e,t,n,r){var o=this;this.getTextNodes((function(s){var i=s.value.length;e.forEach((function(e,r){var a=o.checkWhitespaceRanges(e,i,s.value),c=a.start,l=a.end;a.valid&&o.wrapRangeInMappedTextNode(s,c,l,(function(n){return t(n,e,s.value.substring(c,l),r)}),(function(t){n(t,e)}))})),r()}))}},{key:"unwrapMatches",value:function(e){for(var t=e.parentNode,n=document.createDocumentFragment();e.firstChild;)n.appendChild(e.removeChild(e.firstChild));t.replaceChild(n,e),this.ie?this.normalizeTextNode(t):t.normalize()}},{key:"normalizeTextNode",value:function(e){if(e){if(3===e.nodeType)for(;e.nextSibling&&3===e.nextSibling.nodeType;)e.nodeValue+=e.nextSibling.nodeValue,e.parentNode.removeChild(e.nextSibling);else this.normalizeTextNode(e.firstChild);this.normalizeTextNode(e.nextSibling)}}},{key:"markRegExp",value:function(e,t){var n=this;this.opt=t,this.log('Searching with expression "'+e+'"');var r=0,o="wrapMatches";this.opt.acrossElements&&(o="wrapMatchesAcrossElements"),this[o](e,this.opt.ignoreGroups,(function(e,t){return n.opt.filter(t,e,r)}),(function(e){r++,n.opt.each(e)}),(function(){0===r&&n.opt.noMatch(e),n.opt.done(r)}))}},{key:"mark",value:function(e,t){var n=this;this.opt=t;var r=0,o="wrapMatches",s=this.getSeparatedKeywords("string"==typeof e?[e]:e),i=s.keywords,a=s.length,c=this.opt.caseSensitive?"":"i";this.opt.acrossElements&&(o="wrapMatchesAcrossElements"),0===a?this.opt.done(r):function e(t){var s=new RegExp(n.createRegExp(t),"gm"+c),l=0;n.log('Searching with expression "'+s+'"'),n[o](s,1,(function(e,o){return n.opt.filter(o,t,r,l)}),(function(e){l++,r++,n.opt.each(e)}),(function(){0===l&&n.opt.noMatch(t),i[a-1]===t?n.opt.done(r):e(i[i.indexOf(t)+1])}))}(i[0])}},{key:"markRanges",value:function(e,t){var n=this;this.opt=t;var r=0,o=this.checkRanges(e);o&&o.length?(this.log("Starting to mark with the following ranges: "+JSON.stringify(o)),this.wrapRangeFromIndex(o,(function(e,t,r,o){return n.opt.filter(e,t,r,o)}),(function(e,t){r++,n.opt.each(e,t)}),(function(){n.opt.done(r)}))):this.opt.done(r)}},{key:"unmark",value:function(e){var t=this;this.opt=e;var n=this.opt.element?this.opt.element:"*";n+="[data-markjs]",this.opt.className&&(n+="."+this.opt.className),this.log('Removal selector "'+n+'"'),this.iterator.forEachNode(NodeFilter.SHOW_ELEMENT,(function(e){t.unwrapMatches(e)}),(function(e){var r=o.matches(e,n),s=t.matchesExclude(e);return!r||s?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}),this.opt.done)}},{key:"opt",set:function(e){this._opt=r({},{element:"",className:"",exclude:[],iframes:!1,iframesTimeout:5e3,separateWordSearch:!0,diacritics:!0,synonyms:{},accuracy:"partially",acrossElements:!1,caseSensitive:!1,ignoreJoiners:!1,ignoreGroups:0,ignorePunctuation:[],wildcards:"disabled",each:function(){},noMatch:function(){},filter:function(){return!0},done:function(){},debug:!1,log:window.console},e)},get:function(){return this._opt}},{key:"iterator",get:function(){return new o(this.ctx,this.opt.iframes,this.opt.exclude,this.opt.iframesTimeout)}}]),s}();return function(e){var t=this,n=new s(e);return this.mark=function(e,r){return n.mark(e,r),t},this.markRegExp=function(e,r){return n.markRegExp(e,r),t},this.markRanges=function(e,r){return n.markRanges(e,r),t},this.unmark=function(e){return n.unmark(e),t},this}}()}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r].call(s.exports,s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(813),t=n.n(e);const r={216:"O",223:"s",248:"o",273:"d",295:"h",305:"i",320:"l",322:"l",359:"t",383:"s",384:"b",385:"B",387:"b",390:"O",392:"c",393:"D",394:"D",396:"d",398:"E",400:"E",402:"f",403:"G",407:"I",409:"k",410:"l",412:"M",413:"N",414:"n",415:"O",421:"p",427:"t",429:"t",430:"T",434:"V",436:"y",438:"z",477:"e",485:"g",544:"N",545:"d",549:"z",564:"l",565:"n",566:"t",567:"j",570:"A",571:"C",572:"c",573:"L",574:"T",575:"s",576:"z",579:"B",580:"U",581:"V",582:"E",583:"e",584:"J",585:"j",586:"Q",587:"q",588:"R",589:"r",590:"Y",591:"y",592:"a",593:"a",595:"b",596:"o",597:"c",598:"d",599:"d",600:"e",603:"e",604:"e",605:"e",606:"e",607:"j",608:"g",609:"g",610:"G",613:"h",614:"h",616:"i",618:"I",619:"l",620:"l",621:"l",623:"m",624:"m",625:"m",626:"n",627:"n",628:"N",629:"o",633:"r",634:"r",635:"r",636:"r",637:"r",638:"r",639:"r",640:"R",641:"R",642:"s",647:"t",648:"t",649:"u",651:"v",652:"v",653:"w",654:"y",655:"Y",656:"z",657:"z",663:"c",665:"B",666:"e",667:"G",668:"H",669:"j",670:"k",671:"L",672:"q",686:"h",867:"a",868:"e",869:"i",870:"o",871:"u",872:"c",873:"d",874:"h",875:"m",876:"r",877:"t",878:"v",879:"x",7424:"A",7427:"B",7428:"C",7429:"D",7431:"E",7432:"e",7433:"i",7434:"J",7435:"K",7436:"L",7437:"M",7438:"N",7439:"O",7440:"O",7441:"o",7442:"o",7443:"o",7446:"o",7447:"o",7448:"P",7449:"R",7450:"R",7451:"T",7452:"U",7453:"u",7454:"u",7455:"m",7456:"V",7457:"W",7458:"Z",7522:"i",7523:"r",7524:"u",7525:"v",7834:"a",7835:"s",8305:"i",8341:"h",8342:"k",8343:"l",8344:"m",8345:"n",8346:"p",8347:"s",8348:"t",8580:"c"};for(let e="̀".codePointAt(0);e<="ͯ".codePointAt(0);++e){const t=String.fromCodePoint(e);for(const e of"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"){const n=(e+t).normalize().codePointAt(0);n>126&&(r[n]=e)}}const o={a:[7844,7863],e:[7870,7879],o:[7888,7907],u:[7912,7921]};for(const e of Object.keys(o)){const t=e.toUpperCase();for(let n=o[e][0];n<=o[e][1];++n)r[n]=n%2==0?t:e}function s(e){if(e<192||e>8580)return e;const t=r[e];return void 0!==t?t.codePointAt(0):e}function i(e,t){return e>t?e:t}const a=e=>e.split("").map((e=>e.codePointAt(0))),c=new Set(" \f\n\r\t\v  \u2028\u2029  　\ufeff".split("").map((e=>e.codePointAt(0))));for(let e=" ".codePointAt(0);e<=" ".codePointAt(0);e++)c.add(e);const l="".codePointAt(0),u="A".codePointAt(0),h="Z".codePointAt(0),d="a".codePointAt(0),f="z".codePointAt(0),p="0".codePointAt(0),m="9".codePointAt(0);function g(e,t,n){return n?e:t-e-1}const v=8,y=8,b=v+-1;function x(e){return e?new Set:null}function E(e,t,n){return null!==t&&t.i16.length>e+n?[e+n,t.i16.subarray(e,e+n)]:[e,new Int16Array(n)]}function k(e,t,n){return null!==t&&t.i32.length>e+n?[e+n,t.i32.subarray(e,e+n)]:[e,new Int32Array(n)]}function w(e){return e>=d&&e<=f?1:e>=u&&e<=h?2:e>=p&&e<=m?4:0}function I(e){const t=String.fromCodePoint(e);return t!==t.toUpperCase()?1:t!==t.toLowerCase()?2:null!==t.match(/\p{Number}/gu)?4:null!==t.match(/\p{Letter}/gu)?3:0}function S(e){return e<=l?w(e):I(e)}function N(e,t){return 0===e&&0!==t?v:1===e&&2===t||4!==e&&4===t?b:0===t?y:0}function R(e,t,n,r){let o=e.slice(r),s=o.indexOf(n);if(0===s)return r;if(!t&&n>=d&&n<=f){s>0&&(o=o.slice(0,s));const e=o.indexOf(n-32);e>=0&&(s=e)}return s<0?-1:r+s}function C(e){for(const t of e)if(t>=128)return!1;return!0}function A(e,t,n){if(!C(e))return 0;if(!C(t))return-1;let r=0,o=0;for(let s=0;s<t.length;s++){if(o=R(e,n,t[s],o),o<0)return-1;0===s&&o>0&&(r=o-1),o++}return r}const O=(e,t,n,r,o,a,c)=>{const u=o.length;if(0===u)return[{start:0,end:0,score:0},x(a)];const h=r.length;if(null!==c&&h*u>c.i16.length)return P(e,t,n,r,o,a);const d=A(r,o,e);if(d<0)return[{start:-1,end:-1,score:0},null];let f=0,p=0,m=null,g=null,y=null,b=null;[f,m]=E(f,c,h),[f,g]=E(f,c,h),[f,y]=E(f,c,h),[p,b]=k(p,c,u);const[,S]=k(p,c,h);for(let e=0;e<S.length;e++)S[e]=r[e];let R=0,C=0,O=0,T=0;const L=o[0];let M=o[0],j=0,z=0,F=!1,_=S.subarray(d),J=m.subarray(d).subarray(0,_.length),B=g.subarray(d).subarray(0,_.length),W=y.subarray(d).subarray(0,_.length);for(let[r,a]of _.entries()){let c=null;a<=l?(c=w(a),e||2!==c||(a+=32)):(c=I(a),e||2!==c||(a=String.fromCodePoint(a).toLowerCase().codePointAt(0)),t&&(a=s(a))),_[r]=a;const h=N(z,c);if(W[r]=h,z=c,a===M&&(O<u&&(b[O]=d+r,O++,M=o[Math.min(O,u-1)]),T=d+r),a===L){const e=16+2*h;if(J[r]=e,B[r]=1,1===u&&(n&&e>R||!n&&e>=R)&&(R=e,C=d+r,n&&h===v))break;F=!1}else J[r]=i(F?j+-1:j+-3,0),B[r]=0,F=!0;j=J[r]}if(O!==u)return[{start:-1,end:-1,score:0},null];if(1===u){const e={start:C,end:C+1,score:R};if(!a)return[e,null];const t=new Set;return t.add(C),[e,t]}const D=b[0],U=T-D+1;let q=null;[f,q]=E(f,c,U*u);{const e=m.subarray(D,T+1);for(const[t,n]of e.entries())q[t]=n}let[,$]=E(f,c,U*u);{const e=g.subarray(D,T+1);for(const[t,n]of e.entries())$[t]=n}const G=b.subarray(1),V=o.slice(1).slice(0,G.length);for(const[e,t]of G.entries()){let r=!1;const o=V[e],s=e+1,a=s*U,c=S.subarray(t,T+1),l=y.subarray(t).subarray(0,c.length),h=$.subarray(a+t-D).subarray(0,c.length),d=$.subarray(a+t-D-1-U).subarray(0,c.length),f=q.subarray(a+t-D).subarray(0,c.length),p=q.subarray(a+t-D-1-U).subarray(0,c.length),m=q.subarray(a+t-D-1).subarray(0,c.length);m[0]=0;for(const[e,a]of c.entries()){const c=e+t;let g=0,b=0,x=0;if(b=r?m[e]+-1:m[e]+-3,o===a){g=p[e]+16;let t=l[e];x=d[e]+1,t===v?x=1:x>1&&(t=i(t,i(4,y[c-x+1]))),g+t<b?(g+=l[e],x=0):g+=t}h[e]=x,r=g<b;const E=i(i(g,b),0);s===u-1&&(n&&E>R||!n&&E>=R)&&(R=E,C=c),f[e]=E}}const H=x(a);let Y=D;if(a&&null!==H){let e=u-1;Y=C;let t=!0;for(;;){const n=e*U,r=Y-D,o=q[n+r];let s=0,i=0;if(e>0&&Y>=b[e]&&(s=q[n-U+r-1]),Y>b[e]&&(i=q[n+r-1]),o>s&&(o>i||o===i&&t)){if(H.add(Y),0===e)break;e--}t=$[n+r]>1||n+U+r+1<$.length&&$[n+U+r+1]>0,Y--}}return[{start:Y,end:C+1,score:R},H]};function T(e,t,n,r,o,a,c){let d=0,f=0,p=!1,m=0,g=0;const y=x(c);let b=0;o>0&&(b=S(n[o-1]));for(let x=o;x<a;x++){let o=n[x];const a=S(o);if(e||(o>=u&&o<=h?o+=32:o>l&&(o=String.fromCodePoint(o).toLowerCase().codePointAt(0))),t&&(o=s(o)),o===r[d]){c&&null!==y&&y.add(x),f+=16;let e=N(b,a);0===m?g=e:(e===v&&(g=e),e=i(i(e,g),4)),f+=0===d?2*e:e,p=!1,m++,d++}else f+=p?-1:-3,p=!0,m=0,g=0;b=a}return[f,y]}const P=(e,t,n,r,o,i,a)=>{if(0===o.length)return[{start:0,end:0,score:0},null];if(A(r,o,e)<0)return[{start:-1,end:-1,score:0},null];let c=0,d=-1,f=-1;const p=r.length,m=o.length;for(let i=0;i<p;i++){let a=r[g(i,p,n)];if(e||(a>=u&&a<=h?a+=32:a>l&&(a=String.fromCodePoint(a).toLowerCase().codePointAt(0))),t&&(a=s(a)),a===o[g(c,m,n)]&&(d<0&&(d=i),c++,c===m)){f=i+1;break}}if(d>=0&&f>=0){c--;for(let t=f-1;t>=d;t--){let s=r[g(t,p,n)];if(e||(s>=u&&s<=h?s+=32:s>l&&(s=String.fromCodePoint(s).toLowerCase().codePointAt(0))),s===o[g(c,m,n)]&&(c--,c<0)){d=t;break}}if(!n){const e=d;d=p-f,f=p-e}const[s,a]=T(e,t,r,o,d,f,i);return[{start:d,end:f,score:s},a]}return[{start:-1,end:-1,score:0},null]},L=(e,t,n,r,o,i,a)=>{if(0===o.length)return[{start:0,end:0,score:0},null];const c=r.length,d=o.length;if(c<d)return[{start:-1,end:-1,score:0},null];if(A(r,o,e)<0)return[{start:-1,end:-1,score:0},null];let f=0,p=-1,m=0,y=-1;for(let i=0;i<c;i++){const a=g(i,c,n);let E=r[a];e||(E>=u&&E<=h?E+=32:E>l&&(E=String.fromCodePoint(E).toLowerCase().codePointAt(0))),t&&(E=s(E));const k=g(f,d,n);if(o[k]===E){if(0===k&&(b=r,m=0===(x=a)?v:N(S(b[x-1]),S(b[x]))),f++,f===d){if(m>y&&(p=i,y=m),m===v)break;i-=f-1,f=0,m=0}}else i-=f,f=0,m=0}var b,x;if(p>=0){let s=0,i=0;n?(s=p-d+1,i=p+1):(s=c-(p+1),i=c-(p-d+1));const[a]=T(e,t,r,o,s,i,!1);return[{start:s,end:i,score:a},null]}return[{start:-1,end:-1,score:0},null]},M=(2048,{i16:new Int16Array(102400),i32:new Int32Array(2048)});function j(e,t,n){return r=>{const o=this.runesList[r];if(t.length>o.length)return;let[s,i]=this.algoFn(n,this.opts.normalize,this.opts.forward,o,t,!0,M);if(-1===s.start)return;if(!1===this.opts.fuzzy){i=new Set;for(let e=s.start;e<s.end;++e)i.add(e)}const a=this.opts.sort?s.score:0;void 0===e[a]&&(e[a]=[]),e[a].push({item:this.items[r],...s,positions:null!=i?i:new Set})}}const z={limit:1/0,selector:e=>e,casing:"smart-case",normalize:!0,fuzzy:"v2",tiebreakers:[],sort:!0,forward:!0};class F{constructor(e,...t){switch(this.opts={...z,...t[0]},this.items=e,this.runesList=e.map((e=>a(this.opts.selector(e).normalize()))),this.algoFn=L,this.opts.fuzzy){case"v2":this.algoFn=O;break;case"v1":this.algoFn=P}}}const _={...z,match:function(e){const{queryRunes:t,caseSensitive:n}=((e,t,n)=>{let r=!1;switch(t){case"smart-case":e.toLowerCase()!==e&&(r=!0);break;case"case-sensitive":r=!0;break;case"case-insensitive":e=e.toLowerCase(),r=!1}let o=a(e);return n&&(o=o.map(s)),{queryRunes:o,caseSensitive:r}})(e,this.opts.casing,this.opts.normalize),r={},o=j.bind(this)(r,t,n);for(let e=0,t=this.runesList.length;e<t;++e)o(e);return function(e,t){const n=Object.keys(e).map((e=>parseInt(e,10))).sort(((e,t)=>t-e));let r=[];for(const o of n)if(r=r.concat(e[o]),r.length>=t)break;return r}(r,this.opts.limit)}};class J extends F{constructor(e,...t){super(e,...t),this.opts={..._,...t[0]}}find(e){return 0===e.length||0===this.items.length?this.items.slice(0,this.opts.limit).map(B):(e=e.normalize(),function(e,t){if(t.sort){const{selector:n}=t;e.sort(((e,r)=>{if(e.score===r.score)for(const o of t.tiebreakers){const t=o(e,r,n);if(0!==t)return t}return 0}))}return Number.isFinite(t.limit)&&e.splice(t.limit),e}(this.opts.match.bind(this)(e),this.opts))}}const B=e=>({item:e,start:-1,end:-1,score:0,positions:new Set});class W{constructor(e,...t){this.finder=new J(e,...t),this.find=this.finder.find.bind(this.finder)}}elasticlunr&&(window.search=window.search||{},document.addEventListener("DOMContentLoaded",(()=>{window.elasticlunr.Index.load=e=>{const t=e.documentStore.docs,n=Object.keys(t),r=new W(n,{selector:e=>{const n=t[e];return n.text=`${n.title}${n.breadcrumbs}${n.body}`,n.text}});return{search:e=>r.find(e).map((e=>{const{item:n,score:r}=e;return{doc:t[n],ref:n,score:r}}))}},(()=>{const e="search",n="highlight",r=document.getElementById("searchbar"),o=document.getElementById("search-wrapper"),s=document.getElementById("searchresults"),i=document.getElementById("search-toggle");let a=[],c={teaser_word_count:30,limit_results:30},l={bool:"AND",expand:!0,fields:{title:{boost:1},body:{boost:1},breadcrumbs:{boost:0}}};const u=(e,t,r)=>{const o=a[t.ref].split("#");1==o.length&&o.push("");const s=e+1;return'<a href="'+document.getElementById("searcher").dataset.pathtoroot+o[0]+"?"+n+"="+encodeURIComponent(r.join(" ")).replace(/\'/g,"%27")+"#"+o[1]+'" aria-details="teaser_'+s+'">'+t.doc.breadcrumbs+'</a><span class="teaser" id="teaser_'+s+'" aria-label="Search Result Teaser">'+((e,t)=>{const n=[];let r=0,o=0,s=!1;if(e.toLowerCase().split(". ").forEach((e=>{const i=e.split(" ");r=8,i.forEach((e=>{e.length>0&&(t.map((e=>elasticlunr.stemmer(e.toLowerCase()))).forEach((t=>{elasticlunr.stemmer(e).startsWith(t)&&(r=40,s=!0)})),n.push([e,r,o]),r=2),o+=e.length,o+=1})),o+=1})),0==n.length)return e;const i=Math.min(n.length,c.teaser_word_count),a=(()=>{const e=[];let t=0;for(let e=0;e<i;e++)t+=n[e][1];e.push(t);for(let r=0;r<n.length-i;r++)t-=n[r][1],t+=n[r+i][1],e.push(t);return e})(),l=(()=>{if(!s)return 0;let e=0,t=0;for(let n=a.length-1;n>=0;n--)a[n]>e&&(e=a[n],t=n);return t})(),u=[];let h=n[l][2];const d=t=>{h=t[2]+t[0].length,u.push(e.substring(t[2],h))};for(let t=l;t<l+i;t++){const r=n[t];h<r[2]&&(u.push(e.substring(h,r[2])),h=r[2]),40==r[1]?(u.push("<em>"),d(r),u.push("</em>")):d(r)}return u.join("")})(t.doc.body,r)+"</span>"},h=()=>{o.classList.remove("hidden"),i.setAttribute("aria-expanded","true")},d=()=>{o.classList.add("hidden"),i.setAttribute("aria-expanded","false"),null!=s.length&&s.children.forEach((e=>e.classList.remove("focus")))},f=f=>{const p=new(t())(document.querySelector("main")),m=[];c=f.results_options,l=f.search_options,a=f.doc_urls,i.addEventListener("click",(()=>{o.classList.contains("hidden")?(h(),window.scrollTo(0,0),r.select()):d()}),{once:!1,passive:!0});const g=e=>{const t=document.createElement("a");return t.href=e,{source:e,protocol:t.protocol.replace(":",""),host:t.hostname,port:t.port,params:(()=>{const e={};return t.search.replace(/^\?/,"").split("&").filter((t=>{const n=t.split("=");e[n[0]]=n[1]})),e})(),file:(t.pathname.match(/\/([^/?#]+)$/i)||[,""])[1],hash:t.hash.replace("#",""),path:t.pathname.replace(/^([^/])/,"/$1")}},v=()=>{const t=e=>{for(;e.firstChild;)e.removeChild(e.firstChild)},o=r.value.trim();""!=o?(r.classList.add("active"),(e=>{t(s);const n=elasticlunr.Index.load(f.index).search(e,l),r=Math.min(n.length,c.limit_results);document.getElementById("searchresults-header").innerText=(n.length>r?"Over ":"")+r+" search results for: "+e;const o=e.split(" ");for(let e=0;e<r;e++){const t=document.createElement("li");t.innerHTML=u(e,n[e],o),s.appendChild(t)}document.getElementById("searchresults-outer").classList.remove("hidden")})(o)):(r.classList.remove("active"),document.getElementById("searchresults-outer").classList.add("hidden"),t(s)),p.unmark();const i=g(window.location.href);delete i.params[n],""!=o?(i.params[e]=o,i.hash=""):delete i.params[e]};document.addEventListener("keyup",(e=>{if("Escape"!=e.key)return void v();d();const t=document.createElement("input");t.setAttribute("style","position: absolute; opacity: 0;"),i.appendChild(t),t.focus(),t.remove()}),{once:!1,passive:!0});const y=()=>{const t=g(window.location.href);t.params.hasOwnProperty.call(e)&&""!=t.params[e]?(h(),r.value=decodeURIComponent((t.params[e]+"").replace(/\+/g,"%20")),v()):d(),t.params.hasOwnProperty(n)&&(p.mark(decodeURIComponent(t.params[n]).split(" "),{exclude:m}),document.querySelectorAll("mark").forEach((e=>{e.addEventListener("click",p.unmark,{once:!0,passive:!0})})))};window.onpopstate=()=>y(),document.addEventListener("submit",(e=>{e.preventDefault()}),{once:!1,passive:!1}),y()},p=document.getElementById("searcher").dataset.pathtoroot+"searchindex";fetch(p+".json").then((e=>e.json())).then((e=>f(e))).catch((()=>{console.log("Try to load searchindex.js if fetch failed");const e=document.createElement("script");e.src=p+".js",e.onload=()=>f(search),document.head.appendChild(e)})),search.hasFocus=()=>r===document.activeElement})()}),{once:!0,passive:!0}))})()})();