import{a as u,S as f,i as p}from"./assets/vendor-D-1act8A.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();function h(t){const s=`https://pixabay.com/api/?key=22291580-fa60bbd7949edc60de7cbcd1e&q=${t}&image_type=photo&per_page=9`;return u.get(s).then(l=>l.data.hits).catch(l=>{throw new Error(l)})}function g(t){return t.map(({webformatURL:s,largeImageURL:l,likes:e,views:o,comments:a,downloads:d})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${l}">
          <img class="gallery-image" src="${s}" alt="photo" />
        </a>
        <ul class="info-cards">
          <li class="info-card"><h3>Likes</h3><p>${e}</p></li>
          <li class="info-card"><h3>Views</h3><p>${o}</p></li>
          <li class="info-card"><h3>Comments</h3><p>${a}</p></li>
          <li class="info-card"><h3>Downloads</h3><p>${d}</p></li>
        </ul>
      </li>
    `).join("")}function m(t,r){t.insertAdjacentHTML("beforeend",r)}function y(t){t.innerHTML=""}function L(t){let r=new f("a");r.on("show.simplelightbox"),r.refresh()}function b(){p.error({backgroundColor:"#EF4040",messageColor:"#FAFAFB",theme:"dark",progressBarColor:"#B51B1B",maxWidth:"432",messageSize:"16",position:"topRight",message:"Sorry, there are no images matching your search query. Please, try again!"})}function i(t){const r=document.querySelector(".loader");t?(r.classList.remove("hidden"),console.log("del")):(r.classList.add("hidden"),console.log("add"))}const n=document.querySelector(".form"),c=document.querySelector(".gallery");n.addEventListener("submit",t=>{t.preventDefault();const r=t.target["search-text"].value;y(c),h(r).then(s=>{if(i(!0),s.length!=0){const l=g(s);m(c,l),L()}else b()}).catch(s=>{console.log(s)}).finally(()=>{i(!1),n.reset()})});
//# sourceMappingURL=index.js.map
