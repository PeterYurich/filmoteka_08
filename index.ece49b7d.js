var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n),n("adAgQ");var r=n("cYe4m"),i=n("i01HW"),a=n("bZlYx");i=n("i01HW"),r=n("cYe4m"),a=n("bZlYx");const c=document.getElementById("pagination");function d(e){c.innerHTML="";const t=e.total_pages,o=e.page;if(0===t)return;if(1===o)for(let e=o;e<o+5;e++)c.insertAdjacentHTML("beforeend",`<button class="page-button">${e}</button>`);if(o===t)for(let e=o-4;e<o;e++)c.insertAdjacentHTML("beforeend",`<button class="page-button">${e}</button>`);else if(o===t-1)for(let e=o-3;e<o+1;e++)c.insertAdjacentHTML("beforeend",`<button class="page-button">${e}</button>`);else if(o===t-2)for(let e=o-2;e<o+2;e++)c.insertAdjacentHTML("beforeend",`<button class="page-button">${e}</button>`);if(o>=2&&o<=t-3)for(let e=o-1;e<o+4;e++)c.insertAdjacentHTML("beforeend",`<button class="page-button">${e}</button>`);const n=document.querySelectorAll(".page-button");for(let t=0;t<n.length;t++)n[t].textContent==e.page&&n[t].classList.add("btn-active")}async function s(e){if(e.preventDefault(),"BUTTON"!==e.target.nodeName)return;c.innerHTML="";const t=e.target.textContent,o=new(0,i.TheMovieDb)(t);try{const e=await o.fetchPopularMovies(),t=e.results.map((e=>e.id)),n=(await(0,a.getTheMoviesTargetInfo)(t)).map((e=>(0,r.oneCardMarkup)(e))).join("");document.querySelector(".film-grid").innerHTML=n,l(e)}catch(e){console.log(e)}}function l(e){d(e),c.addEventListener("click",s)}!async function(){const e=new(0,i.TheMovieDb)(1);try{const t=await e.fetchPopularMovies(),o=t.results.map((e=>e.id)),n=(await(0,a.getTheMoviesTargetInfo)(o)).map((e=>(0,r.oneCardMarkup)(e))).join("");document.querySelector(".film-grid").innerHTML=n,l(t)}catch(e){console.log(e)}}();r=n("cYe4m"),i=n("i01HW"),a=n("bZlYx");var u=n("adAgQ");r=n("cYe4m"),i=n("i01HW"),a=n("bZlYx"),u=n("adAgQ");async function f(e){if(e.preventDefault(),"BUTTON"!==e.target.nodeName)return;const t=document.querySelector(".input"),o=e.target.textContent,n=document.querySelector(".film-grid");c.innerHTML="",(0,u.showLoader)();const d=t.value,s=new(0,i.TheMovieDb)(o,d);try{const e=await s.fetchRequestedMovies(),t=e.results.map((e=>e.id)),o=(await(0,a.getTheMoviesTargetInfo)(t)).map((e=>(0,r.oneCardMarkup)(e))).join("");(0,u.hideLoader)(),n.innerHTML=o,p(e)}catch(e){console.log(e)}}function p(e){d(e),c.addEventListener("click",f)}const m=document.querySelector(".alert");new(0,i.TheMovieDb);document.querySelector(".search-form").addEventListener("submit",(async function(e){e.preventDefault();const t=document.querySelector(".film-grid");c.innerHTML="",(0,u.showLoader)();const o=document.querySelector(".input").value,n=new(0,i.TheMovieDb)(1,o);try{const e=await n.fetchRequestedMovies(),o=e.results;0===o.length&&m.classList.remove("hide-load"),0!==o.length&&m.classList.add("hide-load");const i=o.map((e=>e.id)),c=(await(0,a.getTheMoviesTargetInfo)(i)).map((e=>(0,r.oneCardMarkup)(e))).join("");(0,u.hideLoader)(),t.innerHTML=c,p(e)}catch(e){console.log(e)}})),n("esKCc"),n("8Q213"),n("14EtH");var b,v,h={};function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}b="undefined"!=typeof self?self:void 0,v=function(e){e.addBackToTop=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.backgroundColor,o=void 0===t?"#000":t,n=e.cornerOffset,r=void 0===n?20:n,i=e.diameter,a=void 0===i?56:i,c=e.ease,d=void 0===c?W:c,s=e.id,l=void 0===s?"back-to-top":s,u=e.innerHTML,f=void 0===u?'<svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></svg>':u,p=e.onClickScrollTo,m=void 0===p?0:p,b=e.scrollContainer,v=void 0===b?document.body:b,h=e.scrollDuration,g=void 0===h?100:h,y=e.showWhenScrollTopIs,T=void 0===y?1:y,M=e.size,w=void 0===M?a:M,x=e.textColor,L=void 0===x?"#fff":x,k=e.zIndex,H=void 0===k?1:k,C=v===document.body,S=C&&document.documentElement;I();var E=z(),q=!0,D=C?window:v;function j(){B()>=T?A():N()}function A(){q&&(E.className="",q=!1)}function N(){q||(E.className="hidden",q=!0)}function z(){var e=document.createElement("div");return e.id=l,e.className="hidden",e.innerHTML=f,e.addEventListener("click",(function(e){e.preventDefault(),Y()})),document.body.appendChild(e),e}function I(){var e=Math.round(.43*w),t=Math.round(.29*w),n="#"+l+"{background:"+o+";-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;bottom:"+r+"px;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);-moz-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);box-shadow:0 2px 5px 0 rgba(0,0,0,.26);color:"+L+";cursor:pointer;display:block;height:"+w+"px;opacity:1;outline:0;position:fixed;right:"+r+"px;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-transition:bottom .2s,opacity .2s;-o-transition:bottom .2s,opacity .2s;-moz-transition:bottom .2s,opacity .2s;transition:bottom .2s,opacity .2s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:"+w+"px;z-index:"+H+"}#"+l+" svg{display:block;fill:currentColor;height:"+e+"px;margin:"+t+"px auto 0;width:"+e+"px}#"+l+".hidden{bottom:-"+w+"px;opacity:0}",i=document.createElement("style");i.appendChild(document.createTextNode(n)),document.head.insertAdjacentElement("afterbegin",i)}function Y(){var e="function"==typeof m?m():m,t=window,o=t.performance,n=t.requestAnimationFrame;if(g<=0||void 0===o||void 0===n)return O(e);var r=o.now(),i=B(),a=i-e;n((function e(t){var o=Math.min((t-r)/g,1);O(i-Math.round(d(o)*a)),o<1&&n(e)}))}function B(){return v.scrollTop||S&&document.documentElement.scrollTop||0}function O(e){v.scrollTop=e,S&&(document.documentElement.scrollTop=e)}function W(e){return.5*(1-Math.cos(Math.PI*e))}D.addEventListener("scroll",j),j()}},"function"==typeof define&&define.amd?define(["exports"],v):"object"===g(h)&&"string"!=typeof h.nodeName?v(h):v(b.commonJsStrict={}),(0,h.addBackToTop)({backgroundColor:"#ff6b08",innerHTML:'<svg viewBox="0 0 24 24"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>',cornerOffset:10,textColor:"#ffffff"});
//# sourceMappingURL=index.ece49b7d.js.map
