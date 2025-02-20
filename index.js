import{a as d,i as a,S as m}from"./assets/vendor-YT4DRQk6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();const p="41070058-40428010ccfde7f145f4a0888",y="https://pixabay.com/api/";async function g(s){try{return(await d.get(y,{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){return console.error("Error fetching images:",t),[]}}const l=document.querySelector(".gallery");function h(s){if(l.innerHTML="",s.length===0)return;const t=s.map(e=>`
    <a href="${e.largeImageURL}" class="gallery-item">
      <img src="${e.webformatURL}" alt="${e.tags}" />
      <div class="info">
        <p> ${e.likes}</p>
        <p> ${e.views}</p>
        <p> ${e.comments}</p>
        <p> ${e.downloads}</p>
      </div>
    </a>
  `).join("");l.innerHTML=t}const u=document.getElementById("search-form"),f=document.querySelector(".gallery"),i=document.querySelector(".loader");(!u||!f||!i)&&console.error("not found");u.addEventListener("submit",async s=>{s.preventDefault();const t=s.target.elements["search-input"].value.trim();if(!t){a.error({message:"Введіть запит!"});return}f.innerHTML="",i.classList.remove("hidden");try{const e=await g(t);console.log("Fetched images:",e),e.length===0?a.error({message:"Sorry, there are no images matching your search query. Please try again!"}):(h(e),new m("#gallery a"))}catch(e){console.error("Error during fetching:",e),a.error({message:"Sorry, there was an error fetching images. Please try again!"})}finally{i.classList.add("hidden")}});
//# sourceMappingURL=index.js.map
