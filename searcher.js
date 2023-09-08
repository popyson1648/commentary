/*! For license information please see searcher.js.LICENSE.txt */
(()=>{var t={813:function(t){t.exports=function(){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},n=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=function(){function t(n){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5e3;e(this,t),this.ctx=n,this.iframes=r,this.exclude=o,this.iframesTimeout=s}return n(t,[{key:"getContexts",value:function(){var t=[];return(void 0!==this.ctx&&this.ctx?NodeList.prototype.isPrototypeOf(this.ctx)?Array.prototype.slice.call(this.ctx):Array.isArray(this.ctx)?this.ctx:"string"==typeof this.ctx?Array.prototype.slice.call(document.querySelectorAll(this.ctx)):[this.ctx]:[]).forEach((function(e){var n=t.filter((function(t){return t.contains(e)})).length>0;-1!==t.indexOf(e)||n||t.push(e)})),t}},{key:"getIframeContents",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=void 0;try{var o=t.contentWindow;if(r=o.document,!o||!r)throw new Error("iframe inaccessible")}catch(t){n()}r&&e(r)}},{key:"isIframeBlank",value:function(t){var e="about:blank",n=t.getAttribute("src").trim();return t.contentWindow.location.href===e&&n!==e&&n}},{key:"observeIframeLoad",value:function(t,e,n){var r=this,o=!1,s=null,i=function i(){if(!o){o=!0,clearTimeout(s);try{r.isIframeBlank(t)||(t.removeEventListener("load",i),r.getIframeContents(t,e,n))}catch(t){n()}}};t.addEventListener("load",i),s=setTimeout(i,this.iframesTimeout)}},{key:"onIframeReady",value:function(t,e,n){try{"complete"===t.contentWindow.document.readyState?this.isIframeBlank(t)?this.observeIframeLoad(t,e,n):this.getIframeContents(t,e,n):this.observeIframeLoad(t,e,n)}catch(t){n()}}},{key:"waitForIframes",value:function(t,e){var n=this,r=0;this.forEachIframe(t,(function(){return!0}),(function(t){r++,n.waitForIframes(t.querySelector("html"),(function(){--r||e()}))}),(function(t){t||e()}))}},{key:"forEachIframe",value:function(e,n,r){var o=this,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},i=e.querySelectorAll("iframe"),a=i.length,c=0;i=Array.prototype.slice.call(i);var l=function(){--a<=0&&s(c)};a||l(),i.forEach((function(e){t.matches(e,o.exclude)?l():o.onIframeReady(e,(function(t){n(e)&&(c++,r(t)),l()}),l)}))}},{key:"createIterator",value:function(t,e,n){return document.createNodeIterator(t,e,n,!1)}},{key:"createInstanceOnIframe",value:function(e){return new t(e.querySelector("html"),this.iframes)}},{key:"compareNodeIframe",value:function(t,e,n){if(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_PRECEDING){if(null===e)return!0;if(e.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_FOLLOWING)return!0}return!1}},{key:"getIteratorNode",value:function(t){var e=t.previousNode();return{prevNode:e,node:(null===e||t.nextNode())&&t.nextNode()}}},{key:"checkIframeFilter",value:function(t,e,n,r){var o=!1,s=!1;return r.forEach((function(t,e){t.val===n&&(o=e,s=t.handled)})),this.compareNodeIframe(t,e,n)?(!1!==o||s?!1===o||s||(r[o].handled=!0):r.push({val:n,handled:!0}),!0):(!1===o&&r.push({val:n,handled:!1}),!1)}},{key:"handleOpenIframes",value:function(t,e,n,r){var o=this;t.forEach((function(t){t.handled||o.getIframeContents(t.val,(function(t){o.createInstanceOnIframe(t).forEachNode(e,n,r)}))}))}},{key:"iterateThroughNodes",value:function(t,e,n,r,o){for(var s=this,i=this.createIterator(e,t,r),a=[],c=[],l=void 0,u=void 0;h=void 0,h=s.getIteratorNode(i),u=h.prevNode,l=h.node;)this.iframes&&this.forEachIframe(e,(function(t){return s.checkIframeFilter(l,u,t,a)}),(function(e){s.createInstanceOnIframe(e).forEachNode(t,(function(t){return c.push(t)}),r)})),c.push(l);var h;c.forEach((function(t){n(t)})),this.iframes&&this.handleOpenIframes(a,t,n,r),o()}},{key:"forEachNode",value:function(t,e,n){var r=this,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},s=this.getContexts(),i=s.length;i||o(),s.forEach((function(s){var a=function(){r.iterateThroughNodes(t,s,e,n,(function(){--i<=0&&o()}))};r.iframes?r.waitForIframes(s,a):a()}))}}],[{key:"matches",value:function(t,e){var n="string"==typeof e?[e]:e,r=t.matches||t.matchesSelector||t.msMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector;if(r){var o=!1;return n.every((function(e){return!r.call(t,e)||(o=!0,!1)})),o}return!1}}]),t}(),s=function(){function s(t){e(this,s),this.ctx=t,this.ie=!1;var n=window.navigator.userAgent;(n.indexOf("MSIE")>-1||n.indexOf("Trident")>-1)&&(this.ie=!0)}return n(s,[{key:"log",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"debug",r=this.opt.log;this.opt.debug&&"object"===(void 0===r?"undefined":t(r))&&"function"==typeof r[n]&&r[n]("mark.js: "+e)}},{key:"escapeStr",value:function(t){return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}},{key:"createRegExp",value:function(t){return"disabled"!==this.opt.wildcards&&(t=this.setupWildcardsRegExp(t)),t=this.escapeStr(t),Object.keys(this.opt.synonyms).length&&(t=this.createSynonymsRegExp(t)),(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(t=this.setupIgnoreJoinersRegExp(t)),this.opt.diacritics&&(t=this.createDiacriticsRegExp(t)),t=this.createMergedBlanksRegExp(t),(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(t=this.createJoinersRegExp(t)),"disabled"!==this.opt.wildcards&&(t=this.createWildcardsRegExp(t)),this.createAccuracyRegExp(t)}},{key:"createSynonymsRegExp",value:function(t){var e=this.opt.synonyms,n=this.opt.caseSensitive?"":"i",r=this.opt.ignoreJoiners||this.opt.ignorePunctuation.length?"\0":"";for(var o in e)if(e.hasOwnProperty(o)){var s=e[o],i="disabled"!==this.opt.wildcards?this.setupWildcardsRegExp(o):this.escapeStr(o),a="disabled"!==this.opt.wildcards?this.setupWildcardsRegExp(s):this.escapeStr(s);""!==i&&""!==a&&(t=t.replace(new RegExp("("+this.escapeStr(i)+"|"+this.escapeStr(a)+")","gm"+n),r+"("+this.processSynomyms(i)+"|"+this.processSynomyms(a)+")"+r))}return t}},{key:"processSynomyms",value:function(t){return(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(t=this.setupIgnoreJoinersRegExp(t)),t}},{key:"setupWildcardsRegExp",value:function(t){return(t=t.replace(/(?:\\)*\?/g,(function(t){return"\\"===t.charAt(0)?"?":""}))).replace(/(?:\\)*\*/g,(function(t){return"\\"===t.charAt(0)?"*":""}))}},{key:"createWildcardsRegExp",value:function(t){var e="withSpaces"===this.opt.wildcards;return t.replace(/\u0001/g,e?"[\\S\\s]?":"\\S?").replace(/\u0002/g,e?"[\\S\\s]*?":"\\S*")}},{key:"setupIgnoreJoinersRegExp",value:function(t){return t.replace(/[^(|)\\]/g,(function(t,e,n){var r=n.charAt(e+1);return/[(|)\\]/.test(r)||""===r?t:t+"\0"}))}},{key:"createJoinersRegExp",value:function(t){var e=[],n=this.opt.ignorePunctuation;return Array.isArray(n)&&n.length&&e.push(this.escapeStr(n.join(""))),this.opt.ignoreJoiners&&e.push("\\u00ad\\u200b\\u200c\\u200d"),e.length?t.split(/\u0000+/).join("["+e.join("")+"]*"):t}},{key:"createDiacriticsRegExp",value:function(t){var e=this.opt.caseSensitive?"":"i",n=this.opt.caseSensitive?["aàáảãạăằắẳẵặâầấẩẫậäåāą","AÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ","cçćč","CÇĆČ","dđď","DĐĎ","eèéẻẽẹêềếểễệëěēę","EÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ","iìíỉĩịîïī","IÌÍỈĨỊÎÏĪ","lł","LŁ","nñňń","NÑŇŃ","oòóỏõọôồốổỗộơởỡớờợöøō","OÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ","rř","RŘ","sšśșş","SŠŚȘŞ","tťțţ","TŤȚŢ","uùúủũụưừứửữựûüůū","UÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ","yýỳỷỹỵÿ","YÝỲỶỸỴŸ","zžżź","ZŽŻŹ"]:["aàáảãạăằắẳẵặâầấẩẫậäåāąAÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ","cçćčCÇĆČ","dđďDĐĎ","eèéẻẽẹêềếểễệëěēęEÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ","iìíỉĩịîïīIÌÍỈĨỊÎÏĪ","lłLŁ","nñňńNÑŇŃ","oòóỏõọôồốổỗộơởỡớờợöøōOÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ","rřRŘ","sšśșşSŠŚȘŞ","tťțţTŤȚŢ","uùúủũụưừứửữựûüůūUÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ","yýỳỷỹỵÿYÝỲỶỸỴŸ","zžżźZŽŻŹ"],r=[];return t.split("").forEach((function(o){n.every((function(n){if(-1!==n.indexOf(o)){if(r.indexOf(n)>-1)return!1;t=t.replace(new RegExp("["+n+"]","gm"+e),"["+n+"]"),r.push(n)}return!0}))})),t}},{key:"createMergedBlanksRegExp",value:function(t){return t.replace(/[\s]+/gim,"[\\s]+")}},{key:"createAccuracyRegExp",value:function(t){var e=this,n=this.opt.accuracy,r="string"==typeof n?n:n.value,o="string"==typeof n?[]:n.limiters,s="";switch(o.forEach((function(t){s+="|"+e.escapeStr(t)})),r){case"partially":default:return"()("+t+")";case"complementary":return"()([^"+(s="\\s"+(s||this.escapeStr("!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~¡¿")))+"]*"+t+"[^"+s+"]*)";case"exactly":return"(^|\\s"+s+")("+t+")(?=$|\\s"+s+")"}}},{key:"getSeparatedKeywords",value:function(t){var e=this,n=[];return t.forEach((function(t){e.opt.separateWordSearch?t.split(" ").forEach((function(t){t.trim()&&-1===n.indexOf(t)&&n.push(t)})):t.trim()&&-1===n.indexOf(t)&&n.push(t)})),{keywords:n.sort((function(t,e){return e.length-t.length})),length:n.length}}},{key:"isNumeric",value:function(t){return Number(parseFloat(t))==t}},{key:"checkRanges",value:function(t){var e=this;if(!Array.isArray(t)||"[object Object]"!==Object.prototype.toString.call(t[0]))return this.log("markRanges() will only accept an array of objects"),this.opt.noMatch(t),[];var n=[],r=0;return t.sort((function(t,e){return t.start-e.start})).forEach((function(t){var o=e.callNoMatchOnInvalidRanges(t,r),s=o.start,i=o.end;o.valid&&(t.start=s,t.length=i-s,n.push(t),r=i)})),n}},{key:"callNoMatchOnInvalidRanges",value:function(t,e){var n=void 0,r=void 0,o=!1;return t&&void 0!==t.start?(r=(n=parseInt(t.start,10))+parseInt(t.length,10),this.isNumeric(t.start)&&this.isNumeric(t.length)&&r-e>0&&r-n>0?o=!0:(this.log("Ignoring invalid or overlapping range: "+JSON.stringify(t)),this.opt.noMatch(t))):(this.log("Ignoring invalid range: "+JSON.stringify(t)),this.opt.noMatch(t)),{start:n,end:r,valid:o}}},{key:"checkWhitespaceRanges",value:function(t,e,n){var r=void 0,o=!0,s=n.length,i=e-s,a=parseInt(t.start,10)-i;return(r=(a=a>s?s:a)+parseInt(t.length,10))>s&&(r=s,this.log("End range automatically set to the max value of "+s)),a<0||r-a<0||a>s||r>s?(o=!1,this.log("Invalid range: "+JSON.stringify(t)),this.opt.noMatch(t)):""===n.substring(a,r).replace(/\s+/g,"")&&(o=!1,this.log("Skipping whitespace only range: "+JSON.stringify(t)),this.opt.noMatch(t)),{start:a,end:r,valid:o}}},{key:"getTextNodes",value:function(t){var e=this,n="",r=[];this.iterator.forEachNode(NodeFilter.SHOW_TEXT,(function(t){r.push({start:n.length,end:(n+=t.textContent).length,node:t})}),(function(t){return e.matchesExclude(t.parentNode)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}),(function(){t({value:n,nodes:r})}))}},{key:"matchesExclude",value:function(t){return o.matches(t,this.opt.exclude.concat(["script","style","title","head","html"]))}},{key:"wrapRangeInTextNode",value:function(t,e,n){var r=this.opt.element?this.opt.element:"mark",o=t.splitText(e),s=o.splitText(n-e),i=document.createElement(r);return i.setAttribute("data-markjs","true"),this.opt.className&&i.setAttribute("class",this.opt.className),i.textContent=o.textContent,o.parentNode.replaceChild(i,o),s}},{key:"wrapRangeInMappedTextNode",value:function(t,e,n,r,o){var s=this;t.nodes.every((function(i,a){var c=t.nodes[a+1];if(void 0===c||c.start>e){if(!r(i.node))return!1;var l=e-i.start,u=(n>i.end?i.end:n)-i.start,h=t.value.substr(0,i.start),f=t.value.substr(u+i.start);if(i.node=s.wrapRangeInTextNode(i.node,l,u),t.value=h+f,t.nodes.forEach((function(e,n){n>=a&&(t.nodes[n].start>0&&n!==a&&(t.nodes[n].start-=u),t.nodes[n].end-=u)})),n-=u,o(i.node.previousSibling,i.start),!(n>i.end))return!1;e=i.end}return!0}))}},{key:"wrapMatches",value:function(t,e,n,r,o){var s=this,i=0===e?0:e+1;this.getTextNodes((function(e){e.nodes.forEach((function(e){e=e.node;for(var o=void 0;null!==(o=t.exec(e.textContent))&&""!==o[i];)if(n(o[i],e)){var a=o.index;if(0!==i)for(var c=1;c<i;c++)a+=o[c].length;e=s.wrapRangeInTextNode(e,a,a+o[i].length),r(e.previousSibling),t.lastIndex=0}})),o()}))}},{key:"wrapMatchesAcrossElements",value:function(t,e,n,r,o){var s=this,i=0===e?0:e+1;this.getTextNodes((function(e){for(var a=void 0;null!==(a=t.exec(e.value))&&""!==a[i];){var c=a.index;if(0!==i)for(var l=1;l<i;l++)c+=a[l].length;var u=c+a[i].length;s.wrapRangeInMappedTextNode(e,c,u,(function(t){return n(a[i],t)}),(function(e,n){t.lastIndex=n,r(e)}))}o()}))}},{key:"wrapRangeFromIndex",value:function(t,e,n,r){var o=this;this.getTextNodes((function(s){var i=s.value.length;t.forEach((function(t,r){var a=o.checkWhitespaceRanges(t,i,s.value),c=a.start,l=a.end;a.valid&&o.wrapRangeInMappedTextNode(s,c,l,(function(n){return e(n,t,s.value.substring(c,l),r)}),(function(e){n(e,t)}))})),r()}))}},{key:"unwrapMatches",value:function(t){for(var e=t.parentNode,n=document.createDocumentFragment();t.firstChild;)n.appendChild(t.removeChild(t.firstChild));e.replaceChild(n,t),this.ie?this.normalizeTextNode(e):e.normalize()}},{key:"normalizeTextNode",value:function(t){if(t){if(3===t.nodeType)for(;t.nextSibling&&3===t.nextSibling.nodeType;)t.nodeValue+=t.nextSibling.nodeValue,t.parentNode.removeChild(t.nextSibling);else this.normalizeTextNode(t.firstChild);this.normalizeTextNode(t.nextSibling)}}},{key:"markRegExp",value:function(t,e){var n=this;this.opt=e,this.log('Searching with expression "'+t+'"');var r=0,o="wrapMatches";this.opt.acrossElements&&(o="wrapMatchesAcrossElements"),this[o](t,this.opt.ignoreGroups,(function(t,e){return n.opt.filter(e,t,r)}),(function(t){r++,n.opt.each(t)}),(function(){0===r&&n.opt.noMatch(t),n.opt.done(r)}))}},{key:"mark",value:function(t,e){var n=this;this.opt=e;var r=0,o="wrapMatches",s=this.getSeparatedKeywords("string"==typeof t?[t]:t),i=s.keywords,a=s.length,c=this.opt.caseSensitive?"":"i";this.opt.acrossElements&&(o="wrapMatchesAcrossElements"),0===a?this.opt.done(r):function t(e){var s=new RegExp(n.createRegExp(e),"gm"+c),l=0;n.log('Searching with expression "'+s+'"'),n[o](s,1,(function(t,o){return n.opt.filter(o,e,r,l)}),(function(t){l++,r++,n.opt.each(t)}),(function(){0===l&&n.opt.noMatch(e),i[a-1]===e?n.opt.done(r):t(i[i.indexOf(e)+1])}))}(i[0])}},{key:"markRanges",value:function(t,e){var n=this;this.opt=e;var r=0,o=this.checkRanges(t);o&&o.length?(this.log("Starting to mark with the following ranges: "+JSON.stringify(o)),this.wrapRangeFromIndex(o,(function(t,e,r,o){return n.opt.filter(t,e,r,o)}),(function(t,e){r++,n.opt.each(t,e)}),(function(){n.opt.done(r)}))):this.opt.done(r)}},{key:"unmark",value:function(t){var e=this;this.opt=t;var n=this.opt.element?this.opt.element:"*";n+="[data-markjs]",this.opt.className&&(n+="."+this.opt.className),this.log('Removal selector "'+n+'"'),this.iterator.forEachNode(NodeFilter.SHOW_ELEMENT,(function(t){e.unwrapMatches(t)}),(function(t){var r=o.matches(t,n),s=e.matchesExclude(t);return!r||s?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}),this.opt.done)}},{key:"opt",set:function(t){this._opt=r({},{element:"",className:"",exclude:[],iframes:!1,iframesTimeout:5e3,separateWordSearch:!0,diacritics:!0,synonyms:{},accuracy:"partially",acrossElements:!1,caseSensitive:!1,ignoreJoiners:!1,ignoreGroups:0,ignorePunctuation:[],wildcards:"disabled",each:function(){},noMatch:function(){},filter:function(){return!0},done:function(){},debug:!1,log:window.console},t)},get:function(){return this._opt}},{key:"iterator",get:function(){return new o(this.ctx,this.opt.iframes,this.opt.exclude,this.opt.iframesTimeout)}}]),s}();return function(t){var e=this,n=new s(t);return this.mark=function(t,r){return n.mark(t,r),e},this.markRegExp=function(t,r){return n.markRegExp(t,r),e},this.markRanges=function(t,r){return n.markRanges(t,r),e},this.unmark=function(t){return n.unmark(t),e},this}}()}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var s=e[r]={exports:{}};return t[r].call(s.exports,s,s.exports,n),s.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=n(813),e=n.n(t);const r={216:"O",223:"s",248:"o",273:"d",295:"h",305:"i",320:"l",322:"l",359:"t",383:"s",384:"b",385:"B",387:"b",390:"O",392:"c",393:"D",394:"D",396:"d",398:"E",400:"E",402:"f",403:"G",407:"I",409:"k",410:"l",412:"M",413:"N",414:"n",415:"O",421:"p",427:"t",429:"t",430:"T",434:"V",436:"y",438:"z",477:"e",485:"g",544:"N",545:"d",549:"z",564:"l",565:"n",566:"t",567:"j",570:"A",571:"C",572:"c",573:"L",574:"T",575:"s",576:"z",579:"B",580:"U",581:"V",582:"E",583:"e",584:"J",585:"j",586:"Q",587:"q",588:"R",589:"r",590:"Y",591:"y",592:"a",593:"a",595:"b",596:"o",597:"c",598:"d",599:"d",600:"e",603:"e",604:"e",605:"e",606:"e",607:"j",608:"g",609:"g",610:"G",613:"h",614:"h",616:"i",618:"I",619:"l",620:"l",621:"l",623:"m",624:"m",625:"m",626:"n",627:"n",628:"N",629:"o",633:"r",634:"r",635:"r",636:"r",637:"r",638:"r",639:"r",640:"R",641:"R",642:"s",647:"t",648:"t",649:"u",651:"v",652:"v",653:"w",654:"y",655:"Y",656:"z",657:"z",663:"c",665:"B",666:"e",667:"G",668:"H",669:"j",670:"k",671:"L",672:"q",686:"h",867:"a",868:"e",869:"i",870:"o",871:"u",872:"c",873:"d",874:"h",875:"m",876:"r",877:"t",878:"v",879:"x",7424:"A",7427:"B",7428:"C",7429:"D",7431:"E",7432:"e",7433:"i",7434:"J",7435:"K",7436:"L",7437:"M",7438:"N",7439:"O",7440:"O",7441:"o",7442:"o",7443:"o",7446:"o",7447:"o",7448:"P",7449:"R",7450:"R",7451:"T",7452:"U",7453:"u",7454:"u",7455:"m",7456:"V",7457:"W",7458:"Z",7522:"i",7523:"r",7524:"u",7525:"v",7834:"a",7835:"s",8305:"i",8341:"h",8342:"k",8343:"l",8344:"m",8345:"n",8346:"p",8347:"s",8348:"t",8580:"c"};for(let t="̀".codePointAt(0);t<="ͯ".codePointAt(0);++t){const e=String.fromCodePoint(t);for(const t of"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"){const n=(t+e).normalize().codePointAt(0);n>126&&(r[n]=t)}}const o={a:[7844,7863],e:[7870,7879],o:[7888,7907],u:[7912,7921]};for(const t of Object.keys(o)){const e=t.toUpperCase();for(let n=o[t][0];n<=o[t][1];++n)r[n]=n%2==0?e:t}function s(t){if(t<192||t>8580)return t;const e=r[t];return void 0!==e?e.codePointAt(0):t}function i(t,e){return t>e?t:e}const a=t=>t.split("").map((t=>t.codePointAt(0))),c=t=>t.map((t=>String.fromCodePoint(t))).join(""),l=new Set(" \f\n\r\t\v  \u2028\u2029  　\ufeff".split("").map((t=>t.codePointAt(0))));for(let t=" ".codePointAt(0);t<=" ".codePointAt(0);t++)l.add(t);const u=t=>l.has(t),h=t=>{let e=0;for(const n of t){if(!u(n))break;e++}return e},f=t=>{let e=0;for(let n=t.length-1;n>=0&&u(t[n]);n--)e++;return e},d="".codePointAt(0),p="A".codePointAt(0),m="Z".codePointAt(0),g="a".codePointAt(0),v="z".codePointAt(0),y="0".codePointAt(0),b="9".codePointAt(0);function x(t,e,n){return n?t:e-t-1}const E=8,k=8,w=E+-1;function S(t){return t?new Set:null}function I(t,e,n){return null!==e&&e.i16.length>t+n?[t+n,e.i16.subarray(t,t+n)]:[t,new Int16Array(n)]}function N(t,e,n){return null!==e&&e.i32.length>t+n?[t+n,e.i32.subarray(t,t+n)]:[t,new Int32Array(n)]}function C(t){return t>=g&&t<=v?1:t>=p&&t<=m?2:t>=y&&t<=b?4:0}function R(t){const e=String.fromCodePoint(t);return e!==e.toUpperCase()?1:e!==e.toLowerCase()?2:null!==e.match(/\p{Number}/gu)?4:null!==e.match(/\p{Letter}/gu)?3:0}function P(t){return t<=d?C(t):R(t)}function A(t,e){return 0===t&&0!==e?E:1===t&&2===e||4!==t&&4===e?w:0===e?k:0}function L(t,e,n,r){let o=t.slice(r),s=o.indexOf(n);if(0===s)return r;if(!e&&n>=g&&n<=v){s>0&&(o=o.slice(0,s));const t=o.indexOf(n-32);t>=0&&(s=t)}return s<0?-1:r+s}function O(t){for(const e of t)if(e>=128)return!1;return!0}function T(t,e,n){if(!O(t))return 0;if(!O(e))return-1;let r=0,o=0;for(let s=0;s<e.length;s++){if(o=L(t,n,e[s],o),o<0)return-1;0===s&&o>0&&(r=o-1),o++}return r}const M=(t,e,n,r,o,a,c)=>{const l=o.length;if(0===l)return[{start:0,end:0,score:0},S(a)];const u=r.length;if(null!==c&&u*l>c.i16.length)return j(t,e,n,r,o,a);const h=T(r,o,t);if(h<0)return[{start:-1,end:-1,score:0},null];let f=0,p=0,m=null,g=null,v=null,y=null;[f,m]=I(f,c,u),[f,g]=I(f,c,u),[f,v]=I(f,c,u),[p,y]=N(p,c,l);const[,b]=N(p,c,u);for(let t=0;t<b.length;t++)b[t]=r[t];let x=0,k=0,w=0,P=0;const L=o[0];let O=o[0],M=0,z=0,F=!1,_=b.subarray(h),W=m.subarray(h).subarray(0,_.length),J=g.subarray(h).subarray(0,_.length),B=v.subarray(h).subarray(0,_.length);for(let[r,a]of _.entries()){let c=null;a<=d?(c=C(a),t||2!==c||(a+=32)):(c=R(a),t||2!==c||(a=String.fromCodePoint(a).toLowerCase().codePointAt(0)),e&&(a=s(a))),_[r]=a;const u=A(z,c);if(B[r]=u,z=c,a===O&&(w<l&&(y[w]=h+r,w++,O=o[Math.min(w,l-1)]),P=h+r),a===L){const t=16+2*u;if(W[r]=t,J[r]=1,1===l&&(n&&t>x||!n&&t>=x)&&(x=t,k=h+r,n&&u===E))break;F=!1}else W[r]=i(F?M+-1:M+-3,0),J[r]=0,F=!0;M=W[r]}if(w!==l)return[{start:-1,end:-1,score:0},null];if(1===l){const t={start:k,end:k+1,score:x};if(!a)return[t,null];const e=new Set;return e.add(k),[t,e]}const D=y[0],q=P-D+1;let U=null;[f,U]=I(f,c,q*l);{const t=m.subarray(D,P+1);for(const[e,n]of t.entries())U[e]=n}let[,$]=I(f,c,q*l);{const t=g.subarray(D,P+1);for(const[e,n]of t.entries())$[e]=n}const G=y.subarray(1),V=o.slice(1).slice(0,G.length);for(const[t,e]of G.entries()){let r=!1;const o=V[t],s=t+1,a=s*q,c=b.subarray(e,P+1),u=v.subarray(e).subarray(0,c.length),h=$.subarray(a+e-D).subarray(0,c.length),f=$.subarray(a+e-D-1-q).subarray(0,c.length),d=U.subarray(a+e-D).subarray(0,c.length),p=U.subarray(a+e-D-1-q).subarray(0,c.length),m=U.subarray(a+e-D-1).subarray(0,c.length);m[0]=0;for(const[t,a]of c.entries()){const c=t+e;let g=0,y=0,b=0;if(y=r?m[t]+-1:m[t]+-3,o===a){g=p[t]+16;let e=u[t];b=f[t]+1,e===E?b=1:b>1&&(e=i(e,i(4,v[c-b+1]))),g+e<y?(g+=u[t],b=0):g+=e}h[t]=b,r=g<y;const w=i(i(g,y),0);s===l-1&&(n&&w>x||!n&&w>=x)&&(x=w,k=c),d[t]=w}}const H=S(a);let Y=D;if(a&&null!==H){let t=l-1;Y=k;let e=!0;for(;;){const n=t*q,r=Y-D,o=U[n+r];let s=0,i=0;if(t>0&&Y>=y[t]&&(s=U[n-q+r-1]),Y>y[t]&&(i=U[n+r-1]),o>s&&(o>i||o===i&&e)){if(H.add(Y),0===t)break;t--}e=$[n+r]>1||n+q+r+1<$.length&&$[n+q+r+1]>0,Y--}}return[{start:Y,end:k+1,score:x},H]};function z(t,e,n,r,o,a,c){let l=0,u=0,h=!1,f=0,g=0;const v=S(c);let y=0;o>0&&(y=P(n[o-1]));for(let b=o;b<a;b++){let o=n[b];const a=P(o);if(t||(o>=p&&o<=m?o+=32:o>d&&(o=String.fromCodePoint(o).toLowerCase().codePointAt(0))),e&&(o=s(o)),o===r[l]){c&&null!==v&&v.add(b),u+=16;let t=A(y,a);0===f?g=t:(t===E&&(g=t),t=i(i(t,g),4)),u+=0===l?2*t:t,h=!1,f++,l++}else u+=h?-1:-3,h=!0,f=0,g=0;y=a}return[u,v]}const j=(t,e,n,r,o,i,a)=>{if(0===o.length)return[{start:0,end:0,score:0},null];if(T(r,o,t)<0)return[{start:-1,end:-1,score:0},null];let c=0,l=-1,u=-1;const h=r.length,f=o.length;for(let i=0;i<h;i++){let a=r[x(i,h,n)];if(t||(a>=p&&a<=m?a+=32:a>d&&(a=String.fromCodePoint(a).toLowerCase().codePointAt(0))),e&&(a=s(a)),a===o[x(c,f,n)]&&(l<0&&(l=i),c++,c===f)){u=i+1;break}}if(l>=0&&u>=0){c--;for(let e=u-1;e>=l;e--){let s=r[x(e,h,n)];if(t||(s>=p&&s<=m?s+=32:s>d&&(s=String.fromCodePoint(s).toLowerCase().codePointAt(0))),s===o[x(c,f,n)]&&(c--,c<0)){l=e;break}}if(!n){const t=l;l=h-u,u=h-t}const[s,a]=z(t,e,r,o,l,u,i);return[{start:l,end:u,score:s},a]}return[{start:-1,end:-1,score:0},null]},F=(t,e,n,r,o,i,a)=>{if(0===o.length)return[{start:0,end:0,score:0},null];const c=r.length,l=o.length;if(c<l)return[{start:-1,end:-1,score:0},null];if(T(r,o,t)<0)return[{start:-1,end:-1,score:0},null];let u=0,h=-1,f=0,g=-1;for(let i=0;i<c;i++){const a=x(i,c,n);let b=r[a];t||(b>=p&&b<=m?b+=32:b>d&&(b=String.fromCodePoint(b).toLowerCase().codePointAt(0))),e&&(b=s(b));const k=x(u,l,n);if(o[k]===b){if(0===k&&(v=r,f=0===(y=a)?E:A(P(v[y-1]),P(v[y]))),u++,u===l){if(f>g&&(h=i,g=f),f===E)break;i-=u-1,u=0,f=0}}else i-=u,u=0,f=0}var v,y;if(h>=0){let s=0,i=0;n?(s=h-l+1,i=h+1):(s=c-(h+1),i=c-(h-l+1));const[a]=z(t,e,r,o,s,i,!1);return[{start:s,end:i,score:a},null]}return[{start:-1,end:-1,score:0},null]},_=(2048,{i16:new Int16Array(102400),i32:new Int32Array(2048)});var W=(t=>(t[t.Fuzzy=0]="Fuzzy",t[t.Exact=1]="Exact",t[t.Prefix=2]="Prefix",t[t.Suffix=3]="Suffix",t[t.Equal=4]="Equal",t))(W||{});const J={0:M,1:F,2:(t,e,n,r,o,i,a)=>{if(0===o.length)return[{start:0,end:0,score:0},null];let c=0;if(u(o[0])||(c=h(r)),r.length-c<o.length)return[{start:-1,end:-1,score:0},null];for(const[n,i]of o.entries()){let o=r[c+n];if(t||(o=String.fromCodePoint(o).toLowerCase().codePointAt(0)),e&&(o=s(o)),o!==i)return[{start:-1,end:-1,score:0},null]}const l=o.length,[f]=z(t,e,r,o,c,c+l,!1);return[{start:c,end:c+l,score:f},null]},3:(t,e,n,r,o,i,a)=>{let c=r.length;if(0!==o.length&&u(o[o.length-1])||(c-=f(r)),0===o.length)return[{start:c,end:c,score:0},null];const l=c-o.length;if(l<0)return[{start:-1,end:-1,score:0},null];for(const[n,i]of o.entries()){let o=r[n+l];if(t||(o=String.fromCodePoint(o).toLowerCase().codePointAt(0)),e&&(o=s(o)),o!==i)return[{start:-1,end:-1,score:0},null]}const h=c-o.length,d=c,[p]=z(t,e,r,o,h,d,!1);return[{start:h,end:d,score:p},null]},4:(t,e,n,r,o,i,a)=>{const l=o.length;if(0===l)return[{start:-1,end:-1,score:0},null];let d=0;u(o[0])||(d=h(r));let p=0;if(u(o[l-1])||(p=f(r)),r.length-d-p!=l)return[{start:-1,end:-1,score:0},null];let m=!0;if(e){const e=r;for(const[n,r]of o.entries()){let o=e[d+n];if(t||(o=String.fromCodePoint(o).toLowerCase().codePointAt(0)),s(r)!==s(o)){m=!1;break}}}else{let e=c(r).substring(d,r.length-p);t||(e=e.toLowerCase()),m=e===c(o)}return m?[{start:d,end:d+l,score:(16+E)*l+1*E},null]:[{start:-1,end:-1,score:0},null]}};function B(t,e,n,r,o,s,i){for(const a of e){const[e,c]=t(n,r,o,a.text,s,!0,i);if(e.start>=0){const t=e.start+a.prefixLength,n=e.end+a.prefixLength;if(null!==c){const r=new Set;return c.forEach((t=>r.add(a.prefixLength+t))),[[t,n],e.score,r]}return[[t,n],e.score,c]}}return[[-1,-1],0,null]}function D(t,e){const n=Object.keys(t).map((t=>parseInt(t,10))).sort(((t,e)=>e-t));let r=[];for(const o of n)if(r=r.concat(t[o]),r.length>=e)break;return r}function q(t,e,n){return r=>{const o=this.runesList[r];if(e.length>o.length)return;let[s,i]=this.algoFn(n,this.opts.normalize,this.opts.forward,o,e,!0,_);if(-1===s.start)return;if(!1===this.opts.fuzzy){i=new Set;for(let t=s.start;t<s.end;++t)i.add(t)}const a=this.opts.sort?s.score:0;void 0===t[a]&&(t[a]=[]),t[a].push({item:this.items[r],...s,positions:null!=i?i:new Set})}}function U(t,e){return n=>{const r=function(t,e,n,r){const o=[{text:t,prefixLength:0}],s=[];let i=0;const a=new Set;for(const t of e.termSets){let e=[0,0],c=0,l=!1;for(const s of t){let t=J[s.typ];s.typ===W.Fuzzy&&(t=n);const[i,u,h]=B(t,o,s.caseSensitive,s.normalize,r,s.text,_);if(i[0]>=0){if(s.inv)continue;if(e=i,c=u,l=!0,null!==h)h.forEach((t=>a.add(t)));else for(let t=i[0];t<i[1];++t)a.add(t);break}s.inv&&(e=[0,0],c=0,l=!0)}l&&(s.push(e),i+=c)}return{offsets:s,totalScore:i,allPos:a}}(this.runesList[n],e,this.algoFn,this.opts.forward);if(r.offsets.length!==e.termSets.length)return;let o=-1,s=-1;r.allPos.size>0&&(o=Math.min(...r.allPos),s=Math.max(...r.allPos)+1);const i=this.opts.sort?r.totalScore:0;void 0===t[i]&&(t[i]=[]),t[i].push({score:r.totalScore,item:this.items[n],positions:r.allPos,start:o,end:s})}}function $(t){const e=function(t,e,n,r){let o=!0;{const t=(r=r.trimLeft()).trimRight();r=t.endsWith("\\")&&" "===r[t.length]?t+" ":t}let i=!1,l=[];l=function(t,e,n,r){const o=(r=r.replace(/\\ /g,"\t")).split(/ +/),i=[];let l=[],u=!1,h=!1;for(const r of o){let o=0,f=!1,d=r.replace(/\t/g," ");const p=d.toLowerCase(),m="case-sensitive"===e||"smart-case"===e&&d!==p,g=n&&p===c(a(p).map(s));if(m||(d=p),t||(o=1),l.length>0&&!h&&"|"===d)u=!1,h=!0;else if(h=!1,d.startsWith("!")&&(f=!0,o=1,d=d.substring(1)),"$"!==d&&d.endsWith("$")&&(o=3,d=d.substring(0,d.length-1)),d.startsWith("'")?(o=t&&!f?1:0,d=d.substring(1)):d.startsWith("^")&&(o=3===o?4:2,d=d.substring(1)),d.length>0){u&&(i.push(l),l=[]);let t=a(d);g&&(t=t.map(s)),l.push({typ:o,inv:f,text:t,caseSensitive:m,normalize:g}),u=!0}}return l.length>0&&i.push(l),i}(t,e,n,r);t:for(const e of l)for(const[n,r]of e.entries())if(r.inv||(i=!0),(!o||n>0||r.inv||t&&0!==r.typ||!t&&1!==r.typ)&&(o=!1,i))break t;return{str:r,termSets:l,sortable:i,cacheable:o,fuzzy:t}}(Boolean(this.opts.fuzzy),this.opts.casing,this.opts.normalize,t),n={},r=U.bind(this)(n,e);for(let t=0,e=this.runesList.length;t<e;++t)r(t);return D(n,this.opts.limit)}const G={limit:1/0,selector:t=>t,casing:"smart-case",normalize:!0,fuzzy:"v2",tiebreakers:[],sort:!0,forward:!0};class V{constructor(t,...e){switch(this.opts={...G,...e[0]},this.items=t,this.runesList=t.map((t=>a(this.opts.selector(t).normalize()))),this.algoFn=F,this.opts.fuzzy){case"v2":this.algoFn=M;break;case"v1":this.algoFn=j}}}const H={...G,match:function(t){const{queryRunes:e,caseSensitive:n}=((t,e,n)=>{let r=!1;switch(e){case"smart-case":t.toLowerCase()!==t&&(r=!0);break;case"case-sensitive":r=!0;break;case"case-insensitive":t=t.toLowerCase(),r=!1}let o=a(t);return n&&(o=o.map(s)),{queryRunes:o,caseSensitive:r}})(t,this.opts.casing,this.opts.normalize),r={},o=q.bind(this)(r,e,n);for(let t=0,e=this.runesList.length;t<e;++t)o(t);return D(r,this.opts.limit)}};class Y extends V{constructor(t,...e){super(t,...e),this.opts={...H,...e[0]}}find(t){return 0===t.length||0===this.items.length?this.items.slice(0,this.opts.limit).map(Z):(t=t.normalize(),function(t,e){if(e.sort){const{selector:n}=e;t.sort(((t,r)=>{if(t.score===r.score)for(const o of e.tiebreakers){const e=o(t,r,n);if(0!==e)return e}return 0}))}return Number.isFinite(e.limit)&&t.splice(e.limit),t}(this.opts.match.bind(this)(t),this.opts))}}const Z=t=>({item:t,start:-1,end:-1,score:0,positions:new Set});class K{constructor(t,...e){this.finder=new Y(t,...e),this.find=this.finder.find.bind(this.finder)}}elasticlunr&&(window.search=window.search||{},document.addEventListener("DOMContentLoaded",(()=>{(()=>{const t=(t,e,n)=>n(t.item).trim().length-n(e.item).trim().length;window.elasticlunr.Index.load=e=>{const n=e.documentStore.docs,r=new K(Object.keys(n),{match:$,selector:t=>{const e=n[t];return e.text=`${e.title}${e.breadcrumbs}${e.body}`,e.text},tiebreakers:[t]});return{search:t=>r.find(t).map((t=>{const{item:e,score:r}=t;return{doc:n[e],ref:e,score:r}}))}}})(),(()=>{const t="search",n="highlight",r=document.getElementById("searchbar"),o=document.getElementById("search-wrapper"),s=document.getElementById("searchresults"),i=document.getElementById("search-toggle");let a=[],c={teaser_word_count:30,limit_results:30},l={bool:"AND",expand:!0,fields:{title:{boost:1},body:{boost:1},breadcrumbs:{boost:0}}};const u=(t,e,r)=>{const o=a[e.ref].split("#");1==o.length&&o.push("");const s=t+1;return'<a href="'+document.getElementById("searcher").dataset.pathtoroot+o[0]+"?"+n+"="+encodeURIComponent(r.join(" ")).replace(/\'/g,"%27")+"#"+o[1]+'" aria-details="teaser_'+s+'">'+e.doc.breadcrumbs+'</a><span class="teaser" id="teaser_'+s+'" aria-label="Search Result Teaser">'+((t,e)=>{const n=[];let r=0,o=0,s=!1;if(t.toLowerCase().split(". ").forEach((t=>{const i=t.split(" ");r=8,i.forEach((t=>{t.length>0&&(e.map((t=>elasticlunr.stemmer(t.toLowerCase()))).forEach((e=>{elasticlunr.stemmer(t).startsWith(e)&&(r=40,s=!0)})),n.push([t,r,o]),r=2),o+=t.length,o+=1})),o+=1})),0==n.length)return t;const i=Math.min(n.length,c.teaser_word_count),a=(()=>{const t=[];let e=0;for(let t=0;t<i;t++)e+=n[t][1];t.push(e);for(let r=0;r<n.length-i;r++)e-=n[r][1],e+=n[r+i][1],t.push(e);return t})(),l=(()=>{if(!s)return 0;let t=0,e=0;for(let n=a.length-1;n>=0;n--)a[n]>t&&(t=a[n],e=n);return e})(),u=[];let h=n[l][2];const f=e=>{h=e[2]+e[0].length,u.push(t.substring(e[2],h))};for(let e=l;e<l+i;e++){const r=n[e];h<r[2]&&(u.push(t.substring(h,r[2])),h=r[2]),40==r[1]?(u.push("<em>"),f(r),u.push("</em>")):f(r)}return u.join("")})(e.doc.body,r)+"</span>"},h=()=>{o.classList.remove("hidden"),i.setAttribute("aria-expanded","true")},f=()=>{o.classList.add("hidden"),i.setAttribute("aria-expanded","false"),null!=s.length&&s.children.forEach((t=>t.classList.remove("focus")))},d=d=>{const p=new(e())(document.querySelector("main")),m=[];c=d.results_options,l=d.search_options,a=d.doc_urls,i.addEventListener("click",(()=>{o.classList.contains("hidden")?(h(),window.scrollTo(0,0),r.select()):f()}),{once:!1,passive:!0});const g=t=>{const e=document.createElement("a");return e.href=t,{source:t,protocol:e.protocol.replace(":",""),host:e.hostname,port:e.port,params:(()=>{const t={};return e.search.replace(/^\?/,"").split("&").filter((e=>{const n=e.split("=");t[n[0]]=n[1]})),t})(),file:(e.pathname.match(/\/([^/?#]+)$/i)||[,""])[1],hash:e.hash.replace("#",""),path:e.pathname.replace(/^([^/])/,"/$1")}},v=()=>{const e=t=>{for(;t.firstChild;)t.removeChild(t.firstChild)},o=r.value.trim();""!=o?(r.classList.add("active"),(t=>{e(s);const n=elasticlunr.Index.load(d.index).search(t,l),r=Math.min(n.length,c.limit_results);document.getElementById("searchresults-header").innerText=(n.length>r?"Over ":"")+r+" search results for: "+t;const o=t.split(" ");for(let t=0;t<r;t++){const e=document.createElement("li");e.innerHTML=u(t,n[t],o),s.appendChild(e)}document.getElementById("searchresults-outer").classList.remove("hidden")})(o)):(r.classList.remove("active"),document.getElementById("searchresults-outer").classList.add("hidden"),e(s)),p.unmark();const i=g(window.location.href);delete i.params[n],""!=o?(i.params[t]=o,i.hash=""):delete i.params[t]};document.addEventListener("keyup",(t=>{if("Escape"!=t.key)return void v();f();const e=document.createElement("input");e.setAttribute("style","position: absolute; opacity: 0;"),i.appendChild(e),e.focus(),e.remove()}),{once:!1,passive:!0});const y=()=>{const e=g(window.location.href);e.params.hasOwnProperty.call(t)&&""!=e.params[t]?(h(),r.value=decodeURIComponent((e.params[t]+"").replace(/\+/g,"%20")),v()):f(),e.params.hasOwnProperty(n)&&(p.mark(decodeURIComponent(e.params[n]).split(" "),{exclude:m}),document.querySelectorAll("mark").forEach((t=>{t.addEventListener("click",p.unmark,{once:!0,passive:!0})})))};window.onpopstate=()=>y(),document.addEventListener("submit",(t=>{t.preventDefault()}),{once:!1,passive:!1}),y()},p=document.getElementById("searcher").dataset.pathtoroot+"searchindex";fetch(p+".json").then((t=>t.json())).then((t=>d(t))).catch((()=>{console.log("Try to load searchindex.js if fetch failed");const t=document.createElement("script");t.src=p+".js",t.onload=()=>d(search),document.head.appendChild(t)})),search.hasFocus=()=>r===document.activeElement})()}),{once:!0,passive:!0}))})()})();