var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var c={id:e,exports:{}};return t[e]=c,n.call(c.exports,c,c.exports),c.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var c=n("cYe4m"),a=n("bZlYx");const r=document.querySelector("#watched"),d=document.querySelector("#queue");async function l(){let e=localStorage.getItem("watched");e=e?JSON.parse(e):{};try{const t=(await(0,a.getTheMoviesTargetInfo)(e)).map((e=>(0,c.oneCardMarkup)(e))).join(""),o=document.querySelector(".film-grid");o.innerHTML=t;const n=document.querySelector(".message-wrapper");o.childElementCount>0&&n.classList.add("hide-load")}catch(e){console.log(e)}}async function i(){let e=localStorage.getItem("queue");e=e?JSON.parse(e):{};try{const t=(await(0,a.getTheMoviesTargetInfo)(e)).map((e=>(0,c.oneCardMarkup)(e))).join(""),o=document.querySelector(".film-grid");o.innerHTML=t;const n=document.querySelector(".message-wrapper");o.childElementCount>0&&n.classList.add("hide-load")}catch(e){console.log(e)}}function s(){r.classList.remove("active-btn"),d.classList.add("active-btn"),i()}s(),r.addEventListener("click",(function(){r.classList.add("active-btn"),d.classList.remove("active-btn"),l()})),d.addEventListener("click",s),n("adAgQ");const u={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.querySelector("body")};function m(){-1!=window.location.href.indexOf("https://peteryurich.github.io/filmoteka_08/my_library.html")&&window.location.reload(!0),u.body.classList.remove("overflow"),window.removeEventListener("keydown",f),u.modal.classList.add("is-hidden");if(!document.querySelector(".search")){const e=document.querySelector("#watched"),t=document.querySelector("#queue");e.classList.contains("active-btn")&&(console.log("watch"),l()),t.classList.contains("active-btn")&&(console.log("wueue"),i())}}function f(e){"Escape"===e.key&&m()}u.modal.addEventListener("click",(function(e){e.currentTarget===e.target&&m()})),window.addEventListener("keydown",f),n("8Q213"),n("14EtH");
//# sourceMappingURL=my_library.5618ffdc.js.map
