!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r),r("iPy5Q");var a=r("bpxeT"),i=r("2TvXO"),c=r("cGXL9"),u=r("fxdnp"),s=r("8VB7B");a=r("bpxeT"),i=r("2TvXO"),u=r("fxdnp"),c=r("cGXL9"),s=r("8VB7B");function d(e){return l.apply(this,arguments)}function l(){return(l=e(a)(e(i).mark((function t(n){var o,r,a,d,l,b,v;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),"BUTTON"===n.target.nodeName){e.next=3;break}return e.abrupt("return");case 3:return f.innerHTML="",o=n.target.textContent,r=new(0,u.TheMovieDb)(o),e.prev=6,e.next=9,r.fetchPopularMovies();case 9:return a=e.sent,d=a.results,l=d.map((function(e){return e.id})),e.next=14,(0,s.getTheMoviesTargetInfo)(l);case 14:b=e.sent,v=b.map((function(e){return(0,c.oneCardMarkup)(e)})).join(""),document.querySelector(".film-grid").innerHTML=v,p(a),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(6),console.log(e.t0);case 24:case"end":return e.stop()}}),t,null,[[6,21]])})))).apply(this,arguments)}var f=document.getElementById("pagination");function p(e){f.innerHTML="";var t=e.total_pages,n=e.page;if(1===n)for(var o=n;o<n+5;o++)f.insertAdjacentHTML("beforeend",'<button class="page-button">'.concat(o,"</button>"));if(n===t)for(var r=n-4;r<n;r++)f.insertAdjacentHTML("beforeend",'<button class="page-button">'.concat(r,"</button>"));else if(n===t-1)for(var a=n-3;a<n+1;a++)f.insertAdjacentHTML("beforeend",'<button class="page-button">'.concat(a,"</button>"));else if(n===t-2)for(var i=n-2;i<n+2;i++)f.insertAdjacentHTML("beforeend",'<button class="page-button">'.concat(i,"</button>"));if(n>=2&&n<=t-3)for(var c=n-1;c<n+4;c++)f.insertAdjacentHTML("beforeend",'<button class="page-button">'.concat(c,"</button>"));for(var u=document.querySelectorAll(".page-button"),s=0;s<u.length;s++)u[s].textContent==e.page&&u[s].classList.add("btn-active");f.addEventListener("click",d)}function b(){return(b=e(a)(e(i).mark((function t(){var n,o,r,a,d,l;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new(0,u.TheMovieDb)(1),e.prev=1,e.next=4,n.fetchPopularMovies();case 4:return o=e.sent,r=o.results,a=r.map((function(e){return e.id})),e.next=9,(0,s.getTheMoviesTargetInfo)(a);case 9:d=e.sent,l=d.map((function(e){return(0,c.oneCardMarkup)(e)})).join(""),document.querySelector(".film-grid").innerHTML=l,p(o),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),console.log(e.t0);case 19:case"end":return e.stop()}}),t,null,[[1,16]])})))).apply(this,arguments)}!function(){b.apply(this,arguments)}();a=r("bpxeT"),i=r("2TvXO"),c=r("cGXL9"),u=r("fxdnp"),s=r("8VB7B");var v=r("iPy5Q");a=r("bpxeT"),i=r("2TvXO"),c=r("cGXL9"),u=r("fxdnp"),s=r("8VB7B"),v=r("iPy5Q");function m(e){return h.apply(this,arguments)}function h(){return(h=e(a)(e(i).mark((function t(n){var o,r,a,d,l,f,p,b,m,h;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),"BUTTON"===n.target.nodeName){e.next=3;break}return e.abrupt("return");case 3:return o=document.querySelector(".input"),r=n.target.textContent,a=document.querySelector(".film-grid"),g.innerHTML="",(0,v.showLoader)(),d=o.value,l=new(0,u.TheMovieDb)(r,d),e.prev=10,e.next=13,l.fetchRequestedMovies();case 13:return f=e.sent,p=f.results,b=p.map((function(e){return e.id})),e.next=18,(0,s.getTheMoviesTargetInfo)(b);case 18:m=e.sent,h=m.map((function(e){return(0,c.oneCardMarkup)(e)})).join(""),(0,v.hideLoader)(),a.innerHTML=h,T(f),e.next=28;break;case 25:e.prev=25,e.t0=e.catch(10),console.log(e.t0);case 28:case"end":return e.stop()}}),t,null,[[10,25]])})))).apply(this,arguments)}var g=document.getElementById("pagination");function T(e){g.innerHTML="";var t=e.total_pages,n=e.page;if(0!==t){if(1===n)for(var o=n;o<n+5;o++)g.insertAdjacentHTML("beforeend",'<button class="page-button">'.concat(o,"</button>"));if(n===t)for(var r=n-4;r<n;r++)g.insertAdjacentHTML("beforeend",'<button class="page-button">'.concat(r,"</button>"));else if(n===t-1)for(var a=n-3;a<n+1;a++)g.insertAdjacentHTML("beforeend",'<button class="page-button">'.concat(a,"</button>"));else if(n===t-2)for(var i=n-2;i<n+2;i++)g.insertAdjacentHTML("beforeend",'<button class="page-button">'.concat(i,"</button>"));if(n>=2&&n<=t-3)for(var c=n-1;c<n+4;c++)g.insertAdjacentHTML("beforeend",'<button class="page-button">'.concat(c,"</button>"));if(1===t)g.innerHTML="";else if(t>=2&&t<=10){g.innerHTML="";for(var u=1;u<t;u++)g.insertAdjacentHTML("beforeend",'<button class="page-button">'.concat(u,"</button>"))}for(var s=document.querySelectorAll(".page-button"),d=0;d<s.length;d++)s[d].textContent==e.page&&s[d].classList.add("btn-active");g.addEventListener("click",m)}}var x=document.querySelector(".alert");new(0,u.TheMovieDb);function y(){return(y=e(a)(e(i).mark((function t(n){var o,r,a,d,l,f,p,b,m;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),o=document.querySelector(".film-grid"),g.innerHTML="",(0,v.showLoader)(),r=document.querySelector(".input"),a=r.value,d=new(0,u.TheMovieDb)(1,a),e.prev=7,e.next=10,d.fetchRequestedMovies();case 10:return l=e.sent,0===(f=l.results).length&&x.classList.remove("hide-load"),0!==f.length&&x.classList.add("hide-load"),p=f.map((function(e){return e.id})),e.next=17,(0,s.getTheMoviesTargetInfo)(p);case 17:b=e.sent,m=b.map((function(e){return(0,c.oneCardMarkup)(e)})).join(""),(0,v.hideLoader)(),o.innerHTML=m,T(l),e.next=27;break;case 24:e.prev=24,e.t0=e.catch(7),console.log(e.t0);case 27:case"end":return e.stop()}}),t,null,[[7,24]])})))).apply(this,arguments)}document.querySelector(".search-form").addEventListener("submit",(function(e){return y.apply(this,arguments)})),r("lQegT"),r("lBRhl"),r("ezQtG");var M,L,w={};function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}M="undefined"!=typeof self?self:void 0,L=function(e){e.addBackToTop=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.backgroundColor,n=void 0===t?"#000":t,o=e.cornerOffset,r=void 0===o?20:o,a=e.diameter,i=void 0===a?56:a,c=e.ease,u=void 0===c?P:c,s=e.id,d=void 0===s?"back-to-top":s,l=e.innerHTML,f=void 0===l?'<svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></svg>':l,p=e.onClickScrollTo,b=void 0===p?0:p,v=e.scrollContainer,m=void 0===v?document.body:v,h=e.scrollDuration,g=void 0===h?100:h,T=e.showWhenScrollTopIs,x=void 0===T?1:T,y=e.size,M=void 0===y?i:y,L=e.textColor,w=void 0===L?"#fff":L,k=e.zIndex,H=void 0===k?1:k,C=m===document.body,S=C&&document.documentElement;O();var j=N(),B=!0,q=C?window:m;function A(){I()>=x?E():D()}function E(){B&&(j.className="",B=!1)}function D(){B||(j.className="hidden",B=!0)}function N(){var e=document.createElement("div");return e.id=d,e.className="hidden",e.innerHTML=f,e.addEventListener("click",(function(e){e.preventDefault(),z()})),document.body.appendChild(e),e}function O(){var e=Math.round(.43*M),t=Math.round(.29*M),o="#"+d+"{background:"+n+";-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;bottom:"+r+"px;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);-moz-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);box-shadow:0 2px 5px 0 rgba(0,0,0,.26);color:"+w+";cursor:pointer;display:block;height:"+M+"px;opacity:1;outline:0;position:fixed;right:"+r+"px;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-transition:bottom .2s,opacity .2s;-o-transition:bottom .2s,opacity .2s;-moz-transition:bottom .2s,opacity .2s;transition:bottom .2s,opacity .2s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:"+M+"px;z-index:"+H+"}#"+d+" svg{display:block;fill:currentColor;height:"+e+"px;margin:"+t+"px auto 0;width:"+e+"px}#"+d+".hidden{bottom:-"+M+"px;opacity:0}",a=document.createElement("style");a.appendChild(document.createTextNode(o)),document.head.insertAdjacentElement("afterbegin",a)}function z(){var e="function"==typeof b?b():b,t=window,n=t.performance,o=t.requestAnimationFrame;if(g<=0||void 0===n||void 0===o)return X(e);var r=n.now(),a=I(),i=a-e;o((function e(t){var n=Math.min((t-r)/g,1);X(a-Math.round(u(n)*i)),n<1&&o(e)}))}function I(){return m.scrollTop||S&&document.documentElement.scrollTop||0}function X(e){m.scrollTop=e,S&&(document.documentElement.scrollTop=e)}function P(e){return.5*(1-Math.cos(Math.PI*e))}q.addEventListener("scroll",A),A()}},"function"==typeof define&&define.amd?define(["exports"],L):"object"===k(w)&&"string"!=typeof w.nodeName?L(w):L(M.commonJsStrict={}),(0,w.addBackToTop)({backgroundColor:"#ff6b08",innerHTML:'<svg viewBox="0 0 24 24"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>',cornerOffset:10,textColor:"#ffffff"})}();
//# sourceMappingURL=index.d4f93f93.js.map
