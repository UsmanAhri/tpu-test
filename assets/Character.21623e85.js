import{i as y,A as S,B as k,q as I,s as v,p as h,x as b,u as t,o,c as r,t as c,e as l,m as w,F as f,n as B}from "./vendor.c13ca459.js";import{u as d}from "./useGetCharacterID.258f6075.js";import{_ as F}from "./index.356a1c8f.js";const L=["textContent"],N={key:1,class:"box"},j={class:"button-wrap"},A=["textContent"],D={class:"character-data"},G=["textContent"],J=["textContent"],O=y({setup(R){const{params:{id:C}}=S(),m=k(),u=I(),_=v(()=>u.state.characters),x=v(()=>u.state.isLoading);let e=h(null);const i=h(new Set(JSON.parse(localStorage.getItem("favorites"))||[]));b(async()=>{_.value||await u.dispatch("getAllCharacters");const a=_.value.find(n=>d(n.url)===+C);a?e.value=a:await m.push({name:"404"})});const g=a=>{i.value.add(a),localStorage.setItem("favorites",JSON.stringify([...i.value]))};return(a,n)=>t(x)?(o(),r("div",{key:0,textContent:c("Loading...")},null,8,L)):(o(),r("div",N,[l("div",j,[t(e)&&!i.value.has(t(d)(t(e).url))?(o(),r("button",{key:0,class:"button",textContent:c("Add favorite"),onClick:n[0]||(n[0]=p=>{var s;return g(t(d)(((s=t(e))==null?void 0:s.url)||""))})},null,8,A)):w("",!0)]),l("div",D,[(o(!0),r(f,null,B(t(e),(p,s)=>(o(),r(f,{key:s},[l("p",{class:"character-data__title",textContent:c(s.replace("_"," "))},null,8,G),l("p",{class:"character-data__value",textContent:c(p)},null,8,J)],64))),128))])]))}});var M=F(O,[["__scopeId","data-v-6a266fd1"]]);export{M as default};
