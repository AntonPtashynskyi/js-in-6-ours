function e(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=t.parcelRequire599d;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},t.parcelRequire599d=i),i.register("hoxVJ",(function(t,n){e(t.exports,"fetchSearchMovies",(()=>a)),e(t.exports,"fetchPopularMovies",(()=>i)),e(t.exports,"fetchMovieById",(()=>r));async function a(e,t=1){const n=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=2a16c6401fc5b60e749d1dab2b58b588&language=en-US&query=${e}&page=${t}&include_adult=false`);return await n.json()}async function i(e=1){const t=await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=2a16c6401fc5b60e749d1dab2b58b588&page=${e}`);return await t.json()}async function r(e){await fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=2a16c6401fc5b60e749d1dab2b58b588&language=en-US`)}}));var r=i("hoxVJ");const o=document.querySelector(".search-form"),s=document.querySelector(".container-body"),c=document.querySelector(".pagination-container-button"),d=document.getElementById("fist-page-btn"),l=document.getElementById("last-page-btn");o.addEventListener("submit",(function(e){e.preventDefault(),p=e.currentTarget.elements.query.value,u=1,h(),g()})),c.addEventListener("click",(function(e){if("pagination-button"!==e.target.className)return;u=Number(e.target.textContent),g(),h()})),d.addEventListener("click",(function(){u=1,g()})),l.addEventListener("click",(function(){u=f,g()}));let u=1,f=1,p="";try{g()}catch(e){console.log(e)}async function g(){let e={};e=p?await r.fetchSearchMovies(p,u):await r.fetchPopularMovies(u),function(e){const t=e.results.map((({title:e,vote_average:t,poster_path:n,id:a})=>{const i=e.substring(0,35);return`     <div class="film-card" data-card="card">\n      \n        <a href="#" class="film-card__link">\n          <img\n            class="film-card__image"\n            src="https://image.tmdb.org/t/p/w500${n}"\n            alt="${e} "\n            id="${a}"\n          />\n           <div class="film-card__description">\n        <p class="film-card__text">${i}</p>\n        <span class="film-card__text film-rating">${t}</span>\n      </div>\n        </a>\n      \n     \n    </div>`})).join("");s.innerHTML="",s.insertAdjacentHTML("beforeend",t)}(e),u=e.page,f=e.total_pages,h()}function h(){!function(){1===u&&0===f&&(d.classList.add("hidden"),l.classList.add("hidden"),s.insertAdjacentHTML("beforeend",'<p class="bad-search-result">Sorry, we don\'t find nothing!</p>'));1===u?d.classList.add("hidden"):u&&1===f&&(d.classList.add("hidden"),l.classList.add("hidden"));u>1&&d.classList.remove("hidden");u===f&&l.classList.add("hidden");u<f&&l.classList.remove("hidden")}();const e=function(e,t){let n=[];if(1===e&&0===t)return n;if(2===e&&2===t){for(let e=1;e<=2;e+=1)n.push(e);return n}if(1===e&&1===t)return n.push(1);if(1===e&&2===t){for(let e=1;e<=2;e+=1)n.push(e);return n}if(1===e){for(let e=1;e<=3;e+=1)n.push(e);return n}if(0===t)return[];if(e===f){for(let a=e;a>t-3;a-=1)n.push(a);return n.reverse()}e>1&&n.push(e-1,e,e+1);return n}(u,f).map((e=>e===u?`<button class="pagination-button is-active" id="pagination" name="pagin" >${e}</button>`:`<button class="pagination-button" id="pagination">${e}</button>`)).join("");c.innerHTML="",c.insertAdjacentHTML("beforeend",e)}
//# sourceMappingURL=movie.082ac68a.js.map
