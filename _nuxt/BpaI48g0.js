import{u as j,a as u,A as w,B as N,f as s,g as o,h as e,F as x,C as b,n as B,D as r,t as d,E as v,m as k,i as C,k as G,G as h,H as y}from"./BZDtusNn.js";import{u as $}from"./DGvtnT2O.js";import{q as S}from"./B7ATH5-d.js";import"./AXsOSe73.js";const l=t=>t&&t.replace(/(_\d\.)(\w{1,})/g,"$2");function A(){return j().$viewport}const I={class:"fixed z-50 flex w-full p-4 content-grid bg-gradient-to-b from-gray-900/80 to-transparent"},L={class:"flex items-center justify-end w-full gap-8"},V=["href"],D={key:0,class:"text-4xl font-[eternals-universe]"},q={key:1},E=u({__name:"Navigation",async setup(t){let n,a;const _=A(),{data:p}=([n,a]=w(async()=>$("sections",async()=>await S().find())),n=await n,a(),n);return N(_.breakpoint,(f,m)=>{console.log("Breakpoint updated:",m,"->",f)}),(f,m)=>(s(),o("nav",I,[e("ul",L,[(s(!0),o(x,null,b(r(p),(c,g)=>(s(),o("li",{key:c._id,class:B({"mr-auto":r(l)(c._stem)==="witamy"})},[e("a",{href:"#"+r(l)(c._stem),class:"font-bold cursor-pointer text-accent hover:text-accent-600 text-shadow-sm shadow-gray-500"},[r(l)(c._stem)==="witamy"?(s(),o("span",D,"Magiczny Moment")):(s(),o("span",q,d(c.fields.title),1))],8,V)],2))),128))])]))}}),F=""+new URL("LOGO.IeNvGaea.png",import.meta.url).href,H={class:"relative z-10 flex items-center justify-center h-full px-4 text-center text-white"},M={class:"max-w-xl mx-auto mb-8 text-lg md:text-xl"},O=["href"],R=u({__name:"witamy",props:{image:String,content:String,link:String},setup(t){return(n,a)=>(s(),o("figure",{class:"relative h-screen overflow-hidden bg-gray-800 bg-cover",style:v(`background-image: url('${t.image}');`)},[e("div",H,[e("div",null,[a[0]||(a[0]=e("img",{src:F,alt:"Logo",class:"size-[400px] mx-auto mb-4"},null,-1)),e("div",M,d(t.content),1),e("a",{href:`#${t.link}`,class:"px-6 py-3 font-semibold text-white rounded-full bg-accent hover:bg-accent-600"}," Zobacz więcej ",8,O)])])],4))}}),Z=k(R,[["__scopeId","data-v-72fcd628"]]),P={class:"flex flex-row items-center justify-center h-full px-4 text-center text-white"},T={class:""},U={class:"mb-4 text-4xl font-bold md:text-6xl"},W={class:"flex flex-col max-w-xl p-8 mx-auto mb-8 text-lg text-left md:text-xl backdrop-blur-md rounded-xl drop-shadow-md"},J={class:"flex items-center justify-end w-full mt-6"},K={class:"text-2xl"},Q=u({__name:"generyczna_sekcja",props:{image:String,title:String,content:String,price:String},setup(t){return(n,a)=>(s(),o("figure",{class:"h-screen overflow-hidden bg-gray-800 bg-cover",style:v(`background-image: url('${t.image}');`)},[e("div",P,[e("div",T,[e("h2",U,d(t.title),1),e("div",W,[C(d(t.content)+" ",1),e("div",J,[e("span",K,"Cena: "+d(t.price),1),a[0]||(a[0]=e("a",{href:"#oferta",class:"px-6 py-3 ml-4 font-semibold text-white rounded-full bg-accent hover:bg-accent-600"}," Zamów ",-1))])])])])],4))}}),X=k(Q,[["__scopeId","data-v-d0cad8a7"]]),Y={class:"content-grid"},ae=u({__name:"index",async setup(t){let n,a;const{data:_}=([n,a]=w(async()=>$("sections",async()=>await S().find())),n=await n,a(),n);return(p,f)=>{const m=E,c=Z,g=X;return s(),o("main",Y,[G(m),(s(!0),o(x,null,b(r(_),(i,z)=>(s(),o(x,{key:i._id},[i._stem==="_1.witamy"?(s(),h(c,y({key:0,class:"full-width",id:r(l)(i._stem),ref_for:!0},i.fields,{link:r(l)(r(_)[z+1]._stem)}),null,16,["id","link"])):(s(),h(g,y({key:1,class:"full-width",id:r(l)(i._stem),ref_for:!0},i.fields),null,16,["id"]))],64))),128))])}}});export{ae as default};
