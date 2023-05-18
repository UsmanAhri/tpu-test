import{o as p,c as f,a as L,b as E,d as k,r as d,e as m,f as c,w as l,F as A,g as _,h as P}from"./vendor.c13ca459.js";const w=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}};w();const O="modulepreload",h={},C="/",i=function(o,r){return!r||r.length===0?o():Promise.all(r.map(t=>{if(t=`${C}${t}`,t in h)return;h[t]=!0;const e=t.endsWith(".css"),s=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${s}`))return;const n=document.createElement("link");if(n.rel=e?"stylesheet":O,e||(n.as="script",n.crossOrigin=""),n.href=t,document.head.appendChild(n),e)return new Promise((y,g)=>{n.addEventListener("load",y),n.addEventListener("error",g)})})).then(()=>o())};var v=(a,o)=>{for(const[r,t]of o)a[r]=t;return a};const b={};function x(a,o){return p(),f("h2",null,"Home")}var V=v(b,[["render",x]]),j=L({history:E(),routes:[{path:"/",component:V},{path:"/404",name:"404",component:()=>i(()=>import("./404.ebf7f6ff.js"),["assets/404.ebf7f6ff.js","assets/vendor.c13ca459.js"])},{path:"/peoples",name:"peoples",component:()=>i(()=>import("./Peoples.0e08f7c3.js"),["assets/Peoples.0e08f7c3.js","assets/Peoples.1f3572a4.css","assets/CharactersList.248bd235.js","assets/CharactersList.85205eac.css","assets/vendor.c13ca459.js","assets/useGetCharacterID.258f6075.js"])},{path:"/peoples/:id",name:"peoples.show",component:()=>i(()=>import("./Character.21623e85.js"),["assets/Character.21623e85.js","assets/Character.c5334034.css","assets/vendor.c13ca459.js","assets/useGetCharacterID.258f6075.js"])},{path:"/favorites",name:"favorites",component:()=>i(()=>import("./Favorites.a17d3e1b.js"),["assets/Favorites.a17d3e1b.js","assets/Favorites.9b2a5789.css","assets/CharactersList.248bd235.js","assets/CharactersList.85205eac.css","assets/vendor.c13ca459.js","assets/useGetCharacterID.258f6075.js"])}]});const N=k({state:{characters:null,isLoading:!1},actions:{async getAllCharacters({commit:a,state:o}){try{o.isLoading=!0;const r=await fetch("https://swapi.dev/api/people"),{results:t}=await r.json();a("setAllCharacters",t)}catch(r){console.error(r)}finally{o.isLoading=!1}}},mutations:{setAllCharacters(a,o){a.characters=o}}});const R={},$={class:"nav"},F=_("Home"),I=_("Peoples"),T=_("Favorites"),D={class:"main-content"};function H(a,o){const r=d("router-link"),t=d("router-view");return p(),f(A,null,[m("nav",$,[c(r,{to:"/",class:"nav__link"},{default:l(()=>[F]),_:1}),c(r,{to:"/peoples",class:"nav__link"},{default:l(()=>[I]),_:1}),c(r,{to:"/favorites",class:"nav__link"},{default:l(()=>[T]),_:1})]),m("main",D,[c(t)])],64)}var S=v(R,[["render",H]]);const u=P(S);u.use(j);u.use(N);u.mount("#app");export{v as _};
