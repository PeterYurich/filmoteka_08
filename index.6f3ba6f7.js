var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},a=e.parcelRequired7c6;function o(e){return`\n    <div class="photo-card" ">\n    <a class="photo-card__link">\n        <img class="photo-card-img" data-id="${e.id}" src="https://image.tmdb.org/t/p/w500${e.posterPath}"\n        alt="https://image.tmdb.org/t/p/w500${e.posterPath}" />\n    </a>\n    <div class="card-info">\n        <h3 class="card-info__title">${e.title}</h3>\n        <p>\n        <span class="card-info__genre">\n            ${e.genres}\n        </span>\n        <span class="release-date">\n            ${Number.parseInt(e.releaseYear)}\n        </span>\n        <span class="film-rating">\n            ${e.rating}\n        </span>\n        </p>\n    </div>\n    </div>\n`}null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in t){var a=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,a.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=a),a("gjiCh");var i=a("cyIMT"),r=a("anYXw");const s=new(0,i.TheMovieDb);!async function(e,n){try{const t=await s.fetchPopularMovies(e,n),a=t.results.map((e=>e.id)),i=await(0,r.getTheMoviesTargetInfo)(a),c=await i.map((e=>o(e))).join("");document.querySelector(".film-grid").innerHTML=c}catch(e){console.log(e)}}("movie","day");i=a("cyIMT"),r=a("anYXw");var c=a("gjiCh");const l=new(0,i.TheMovieDb);document.querySelector(".search-form").addEventListener("submit",(async function(e){e.preventDefault();const n=document.querySelector(".film-grid");n.innerHTML="",(0,c.showLoader)(),inputEl=document.querySelector(".input");const t=inputEl.value;try{const e=await l.fetchRequestedMovies(t,"movie"),a=e.results.map((e=>e.id)),i=await(0,r.getTheMoviesTargetInfo)(a),s=await i.map((e=>o(e))).join("");(0,c.hideLoader)(),n.innerHTML=s}catch(e){console.log(e)}})),a("b608j"),a("qu6Z1"),a("bFnvP");
//# sourceMappingURL=index.6f3ba6f7.js.map
