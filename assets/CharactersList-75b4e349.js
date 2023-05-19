import{d as x,n as b,l as S,m as _,p as I,a as N,o as e,c as o,t as r,F as h,e as t,g as F,h as L,i as w,u as c,q as O,s as B,x as A,_ as J}from"./index-6b041e3d.js";import{u as i}from"./useGetCharacterID-44841d6e.js";const V=l=>(B("data-v-f153d301"),l=l(),A(),l),D={class:"table-box"},H=["textContent"],M={key:0,class:"table"},T=V(()=>t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Height"),t("th",null,"Mass"),t("th",null,"Hair color"),t("th",null,"Actions")])],-1)),$={class:"table__character-name"},q=["onClick"],E=["onClick"],G={key:1,class:"info-text",textContent:"You don't have any character in favorites!"},R={key:2,class:"info-text",textContent:"Nothing found!"},Y=x({__name:"CharactersList",props:{displayOnlyFavorites:{type:Boolean,default:!1}},setup(l){const f=l,a=b(new Set(JSON.parse(localStorage.getItem("favorites"))||[])),d=S(),m=_(()=>d.state.isLoading),u=_(()=>d.state.characters);I(()=>{u.value||d.dispatch("getAllCharacters")});const y=n=>{a.value.add(n),localStorage.setItem("favorites",JSON.stringify([...a.value]))},C=n=>{a.value.delete(n),localStorage.setItem("favorites",JSON.stringify([...a.value]))},v=_(()=>f.displayOnlyFavorites?u.value.filter(n=>a.value.has(i(n.url))):u.value);return(n,j)=>{var p;const g=N("router-link");return e(),o("div",D,[m.value?(e(),o("div",{key:0,textContent:r("Loading...")},null,8,H)):(p=u.value)!=null&&p.length?(e(),o(h,{key:1},[v.value.length?(e(),o("table",M,[T,t("tbody",null,[(e(!0),o(h,null,F(v.value,s=>(e(),o("tr",{key:s.url},[t("td",$,[L(g,{to:{name:"peoples.show",params:{id:c(i)(s.url)}}},{default:w(()=>[O(r(s.name),1)]),_:2},1032,["to"])]),t("td",null,r(s.height),1),t("td",null,r(s.mass),1),t("td",null,r(s.hair_color),1),t("td",null,[a.value.has(c(i)(s.url))?(e(),o("button",{key:0,textContent:"Remove favorite",class:"button button_w-100 button_red",onClick:k=>C(c(i)(s.url))},null,8,q)):(e(),o("button",{key:1,textContent:"Add favorite",class:"button button_w-100",onClick:k=>y(c(i)(s.url))},null,8,E))])]))),128))])])):(e(),o("p",G))],64)):(e(),o("p",R))])}}});const P=J(Y,[["__scopeId","data-v-f153d301"]]);export{P as C};