const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DsANMjRP.js","./C8mgRCg5.js","./entry.5THQu1TW.css","./ByS1i6_0.js","./BDkwhCVG.js","./C-v3KzvZ.js"])))=>i.map(i=>d[i]);
import{p as f,Y as p,_ as v,d as g,Z as d,D as l,m as h,P as _,G as r}from"./C8mgRCg5.js";import{u as y}from"./By6Y1emM.js";import{q as C,w as c,e as w,s as P,j as $,u as N}from"./ByS1i6_0.js";import{u as j}from"./BDkwhCVG.js";import{_ as D}from"./B9mkWsbr.js";const T=async e=>{const{content:t}=f().public;typeof(e==null?void 0:e.params)!="function"&&(e=C(e));const a=e.params(),s=t.experimental.stripQueryParameters?c(`/navigation/${`${p(a)}.${t.integrity}`}/${w(a)}.json`):c(`/navigation/${p(a)}.${t.integrity}.json`);if(P())return(await v(()=>import("./DsANMjRP.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:$(a),previewToken:j().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},E=g({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=d(e),a=l(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&h("dd-navigation").value){const{navigation:n}=N();return{navigation:n}}const{data:s}=await y(`content-navigation-${p(a.value)}`,()=>T(a.value));return{navigation:s}},render(e){const t=_(),{navigation:a}=e,s=o=>r(D,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),m=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):m(a)}}),R=E;export{R as default};
