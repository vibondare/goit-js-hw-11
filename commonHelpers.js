import{s as g,i as y}from"./assets/vendor-9dcf81ef.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function b(o){const s=o.hits;new g(".gallery a",{captionsData:"alt"}).refresh();function i(){c.style.display="block"}function e(){c.style.display="none"}i();const r=s.map(({webformatURL:a,largeImageURL:p,tags:u,likes:m,views:h,comments:d,downloads:f})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${p}">
            <img src="${a}" alt="${u}" class="image" width="358px" />
        </a>
        <ul class="image-properties-list">
            <li class="image-properties-list-item">
                <h2 class="property-name">Likes</h2>
                <p class="property-value">${m}</p>
            </li>
            <li class="image-properties-list-item">
                <h2 class="property-name">Views</h2>
                <p class="property-value">${h}</p>
            </li>
            <li class="image-properties-list-item">
                <h2 class="property-name">Comments</h2>
                <p class="property-value">${d}</p>
            </li>
            <li class="image-properties-list-item">
                <h2 class="property-name">Downloads</h2>
                <p class="property-value">${f}</p>
            </li>
        </ul>
    </li>
`).join("");$.innerHTML=r,e()}const L="/goit-js-hw-11/assets/error-icon-5bc7b79a.svg";let n="";function v(o){function s(){return fetch(o).then(t=>{if(!t.ok)throw new Error("Image error!");return t.json()}).catch(t=>{alert("Error while fetching images from pixabay!")})}s().then(t=>{if(n=t,n.hits.length===0){y.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#B51B1B",messageColor:"#FFFFFF",position:"topRight",theme:"dark",iconUrl:L});return}b(n)})}const w=document.querySelector(".search-form"),l=document.querySelector("#search-input"),$=document.querySelector(".gallery"),c=document.querySelector(".loading-message-container");w.addEventListener("submit",q);function q(o){if(o.preventDefault(),!l.value)return;const s="42569288-7bb99e6b1dd10eb6153443a4f",t="https://pixabay.com/api/",i=l.value,e=`${t}?key=${s}&q=${i}&image_type='photo'&orientation='horizontal'&safesearch=true`;v(e)}
//# sourceMappingURL=commonHelpers.js.map
