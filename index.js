import{S as u,A as f,O as d,$ as l}from"./assets/vendor-7TefUeD3.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const c=document.querySelector(".left"),a=document.querySelector(".right");document.addEventListener("DOMContentLoaded",function(){let e=new u(".splide",{type:"loop",arrows:!1,perMove:1,autoplay:!0,start:0,pagination:!1,trimSpace:!1,updateOnMove:!0,snap:!0,rewind:!1,mediaQuery:"min",speed:400,gap:"20px",breakpoints:{1440:{perPage:2,fixedWidth:"575px",autoWidth:!0,focus:"right"},768:{perPage:2,fixedWidth:"354px",autoWidth:!0,focus:"right"},375:{perPage:3,fixedWidth:"280px",focus:"center"},0:{perPage:3,fixedWidth:"90%",focus:"center"}}}).mount();a&&c&&(a.addEventListener("click",r=>{e.go("+1")}),c.addEventListener("click",r=>{e.go("-1")}))});const p={offset:120,easing:"cubic-bezier(0.4, 0, 0.2, 1)",anchorPlacement:"top-bottom"};f.init({...p});const m=document.querySelectorAll('a[href*="#"]');for(let e of m)e.addEventListener("click",function(r){r.preventDefault();const o=e.getAttribute("href").substring(1),i=document.getElementById(o);i?i.scrollIntoView({behavior:"smooth",block:"start"}):console.warn(`Елемент з ID "${o}" не знайдено.`)});document.addEventListener("DOMContentLoaded",()=>{d.bind("[data-fancybox]",{type:"inline",fullScreen:{requestOnStart:!0},Carousel:{Navigation:!1,closeButton:!0,infinite:!1},on:{reveal:e=>{e.container.outerText.includes("Book a tour")||(document.body.classList.add("body-overflow"),l(".modal-slider").not(".slick-clone").slick({slidesToShow:1,slidesToScroll:1,initialSlide:0,arrows:!1,dots:!0,infinite:!0,customPaging:function(r,o){return"<span class='dot'></span>"}}))},close:e=>{document.body.classList.remove("body-overflow"),e.container.outerText.includes("Book a tour")||(document.querySelectorAll(".slick-initialized").forEach(o=>{l(o).slick("unslick")}),l(".upcoming-card-list").slick({arrows:!0,dots:!1,infinite:!1,appendArrows:".slider-arrows-tourcards",prevArrow:".prev",nextArrow:".next",mobileFirst:!0,responsive:[{breakpoint:1440,settings:{slidesToShow:3,slidesToScroll:1,initialSlide:1}},{breakpoint:745,settings:{centerPadding:"20px",slidesToShow:2,slidesToScroll:1}},{breakpoint:375,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:0,settings:{slidesToShow:1,slidesToScroll:1}}]}))}}})});d.bind("[data-fancybox = gallery]",{Images:{content:(e,r)=>{let o="<picture>";const i=r.media.split(";");return r.sources.split(";").map((t,s)=>{o+=`<source
          media="${i[s]||""}"
          srcset="${t}"
        />`}),o+=`<img src="${r.src}" alt="mauntains view"/>`,o+="</picture>",o}},fullScreen:{requestOnStart:!0},hideScrollbar:!0,Thumbs:{showOnStart:!1},dragToClose:!1,Toolbar:{display:{left:[],middle:[],right:["slideshow","close"]}}});$(".upcoming-card-list").slick({arrows:!0,dots:!1,infinite:!1,appendArrows:".slider-arrows-tourcards",prevArrow:".prev",nextArrow:".next",mobileFirst:!0,responsive:[{breakpoint:1440,settings:{slidesToShow:3,slidesToScroll:1,initialSlide:1}},{breakpoint:745,settings:{centerPadding:"20px",slidesToShow:2,slidesToScroll:1}},{breakpoint:375,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:0,settings:{slidesToShow:1,slidesToScroll:1}}]});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("[data-scroll-to-top]");if(e){let o=function(){window.scrollTo({top:0,behavior:"smooth"})},i=function(t){this.scrollY>200?(e.classList.add("visible"),e.addEventListener("click",o)):(e.classList.remove("visible"),e.removeEventListener("click",o))};window.addEventListener("scroll",i),e.addEventListener("click",o)}});
//# sourceMappingURL=index.js.map