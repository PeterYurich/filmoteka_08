var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("cYe4m"),a=o("bZlYx");const c=document.querySelector("#watched"),i=document.querySelector("#queue");async function l(){let e=localStorage.getItem("queue");e=e?JSON.parse(e):{};try{const t=(await(0,a.getTheMoviesTargetInfo)(e)).map((e=>(0,r.oneCardMarkup)(e))).join("");document.querySelector(".film-grid").innerHTML=t}catch(e){console.log(e)}c.classList.remove("active-btn"),i.classList.add("active-btn")}c.addEventListener("click",(async function(){let e=localStorage.getItem("watched");e=e?JSON.parse(e):{};try{const t=(await(0,a.getTheMoviesTargetInfo)(e)).map((e=>(0,r.oneCardMarkup)(e))).join("");document.querySelector(".film-grid").innerHTML=t}catch(e){console.log(e)}c.classList.add("active-btn"),i.classList.remove("active-btn")})),i.addEventListener("click",l),l(),o("adAgQ"),o("esKCc"),o("8Q213"),o("cixlQ");
//# sourceMappingURL=my_library.dc2a5da4.js.map
