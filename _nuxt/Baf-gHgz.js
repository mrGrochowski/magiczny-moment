import{u as $,a as d,A as g,B as S,f as o,g as i,h as t,F as b,C as h,D as l,t as c,m as y,k as j,E as f}from"./CQGtZtwy.js";import{u as w}from"./Jzz4uMuD.js";import{q as v}from"./DjnN21ZU.js";import"./D94jUYiY.js";const p=s=>s&&s.replace(/(_\d\.)(\w{1,})/g,"$2");function B(){return $().$viewport}const z={class:"flex w-full fixed z-50 bg-gradient-to-b from-black to-transparent p-4"},N={class:"flex space-x-4"},A=["href"],C=d({__name:"Navigation",async setup(s){let n,e;const u=B(),{data:x}=([n,e]=g(async()=>w("sections",async()=>await v().find())),n=await n,e(),n);return S(u.breakpoint,(m,_)=>{console.log("Breakpoint updated:",_,"->",m)}),(m,_)=>(o(),i("nav",z,[t("ul",N,[(o(!0),i(b,null,h(l(x),r=>(o(),i("li",{key:r._id},[t("a",{href:"#"+l(p)(r._stem),class:"cursor-pointer text-slate-200 hover:underline"},c(r.title),9,A)]))),128))])]))}}),D={class:"relative h-screen overflow-hidden bg-gray-800"},I=["src"],V={class:"relative z-10 flex items-center justify-center h-full text-center text-white px-4"},q={class:"text-8xl font-bold mb-4 font-[Satisfy]"},E={class:"text-lg md:text-xl max-w-xl mx-auto mb-8"},F=d({__name:"witamy",props:{image:String,title:String,desription:String},setup(s){return(n,e)=>(o(),i("section",D,[t("img",{src:s.image,alt:"Background",class:"absolute inset-0 w-full h-full object-cover"},null,8,I),e[1]||(e[1]=t("div",{class:"absolute inset-0 bg-black opacity-50"},null,-1)),t("div",V,[t("div",null,[t("h1",q,c(s.title),1),t("p",E,c(s.desription),1),e[0]||(e[0]=t("a",{href:"#oferta",class:"px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md"}," Zobaczw więcej ",-1))])])]))}}),G=y(F,[["__scopeId","data-v-c904148e"]]),Z={class:"relative h-screen overflow-hidden bg-gray-800"},H=["src"],L={class:"relative z-10 flex items-center justify-center h-full text-center text-white px-4"},R={class:"text-4xl md:text-6xl font-bold mb-4"},W={class:"text-lg md:text-xl max-w-xl mx-auto mb-8"},J=d({__name:"generyczna_sekcja",props:{image:String,title:String,desription:String},setup(s){return(n,e)=>(o(),i("section",Z,[t("img",{src:s.image,alt:"Background",class:"absolute inset-0 w-full h-full object-cover"},null,8,H),e[1]||(e[1]=t("div",{class:"absolute inset-0 bg-black opacity-50"},null,-1)),t("div",L,[t("div",null,[t("h2",R,c(s.title),1),t("p",W,c(s.desription),1),e[0]||(e[0]=t("a",{href:"#oferta",class:"px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md"}," Zobaczw więcej ",-1))])])]))}}),K=y(J,[["__scopeId","data-v-12f78d7b"]]),T=d({__name:"index",async setup(s){let n,e;const{data:u}=([n,e]=g(async()=>w("sections",async()=>await v().find())),n=await n,e(),n);return(x,m)=>{const _=C,r=G,k=K;return o(),i("main",null,[j(_),(o(!0),i(b,null,h(l(u),a=>(o(),i("section",{key:a._id},[a._stem==="_1.witamy"?(o(),f(r,{key:0,id:l(p)(a._stem),image:a.image,title:a.title,desription:a.content},null,8,["id","image","title","desription"])):(o(),f(k,{key:1,id:l(p)(a._stem),image:a.image,title:a.title,desription:a.content},null,8,["id","image","title","desription"]))]))),128))])}}});export{T as default};
