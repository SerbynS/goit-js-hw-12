import{a as f,S as p,i as h}from"./assets/vendor-D-1act8A.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();function m(t){const s=`https://pixabay.com/api/?key=22291580-fa60bbd7949edc60de7cbcd1e&q=${t}&image_type=photo&per_page=9&orientation=horizontal&safesearch=true`;return f.get(s).then(a=>a.data.hits).catch(a=>{throw new Error(a)})}function g(t){return t.map(({webformatURL:s,largeImageURL:a,tags:e,likes:o,views:i,comments:u,downloads:d})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${a}">
          <img class="gallery-image" src="${s}" alt="${e}" />
        </a>
        <ul class="info-cards">
          <li class="info-card"><h3>Likes</h3><p>${o}</p></li>
          <li class="info-card"><h3>Views</h3><p>${i}</p></li>
          <li class="info-card"><h3>Comments</h3><p>${u}</p></li>
          <li class="info-card"><h3>Downloads</h3><p>${d}</p></li>
        </ul>
      </li>
    `).join("")}function y(t,r){t.insertAdjacentHTML("beforeend",r)}function L(t){t.innerHTML=""}function b(t){let r=new p("a");r.on("show.simplelightbox"),r.refresh()}function S(){h.error({backgroundColor:"#EF4040",messageColor:"#FAFAFB",theme:"dark",progressBarColor:"#B51B1B",maxWidth:"432",messageSize:"16",position:"topRight",message:"Sorry, there are no images matching your search query. Please, try again!"})}function l(t){const r=document.querySelector(".loader");t?r.classList.remove("hidden"):r.classList.add("hidden")}const n=document.querySelector(".form"),c=document.querySelector(".gallery");n.addEventListener("submit",t=>{t.preventDefault();const r=t.target["search-text"].value;L(c),l(!0),m(r).then(s=>{if(s.length!=0){const a=g(s);y(c,a),b()}else S()}).catch(s=>{console.log(s)}).finally(()=>{l(!1),n.reset()})});
//# sourceMappingURL=index.js.map
