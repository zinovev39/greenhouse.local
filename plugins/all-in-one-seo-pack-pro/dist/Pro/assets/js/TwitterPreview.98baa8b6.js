import{u as h,c as v,t as S}from"./links.574d4fd4.js";import{B as f}from"./Img.051a5b14.js";import{C as w}from"./Caret.89e18339.js";import{S as y}from"./Book.96b556ac.js";import{S as C}from"./Profile.a2723162.js";import{x as a,o as i,c as b,a as e,C as c,t as r,I,j as k,k as l,b as d,O as x,P as B,m as N,D as P,M as A,N as D}from"./vue.runtime.esm-bundler.78401fbe.js";import{_ as O}from"./_plugin-vue_export-helper.58be9317.js";const T={setup(){return{optionsStore:h(),rootStore:v()}},components:{BaseImg:f,CoreLoader:w,SvgBook:y,SvgDannieProfile:C},props:{card:String,description:{type:String,required:!0},image:String,loading:{type:Boolean,default:!1},title:{type:String,required:!0}},data(){return{canShowImage:!1}},computed:{appName(){return"All in One SEO"},getCard(){return this.card==="default"?this.optionsStore.options.social.twitter.general.defaultCardType:this.card}},methods:{maybeCanShow(o){this.canShowImage=o},truncate:S}},V=o=>(A("data-v-4b78a9ed"),o=o(),D(),o),L={class:"aioseo-twitter-preview"},q={class:"twitter-post"},z={class:"twitter-header"},E={class:"profile-photo"},R={class:"poster"},j={class:"poster-name"},M=V(()=>e("div",{class:"poster-username"}," @aioseopack ",-1)),U={class:"twitter-content"},F={class:"twitter-site-description"},G={class:"site-domain"},H={class:"site-title"},J={class:"site-description"};function K(o,Q,t,_,n,s){const m=a("svg-dannie-profile"),u=a("svg-book"),p=a("core-loader"),g=a("base-img");return i(),b("div",L,[e("div",q,[e("div",z,[e("div",E,[c(m)]),e("div",R,[e("div",j,r(s.appName),1),M])]),e("div",{class:I(["twitter-container",t.image?s.getCard:"summary"])},[e("div",U,[e("div",{class:"twitter-image-preview",style:k({backgroundImage:s.getCard==="summary"&&n.canShowImage?`url('${t.image}')`:""})},[!t.loading&&(!t.image||!n.canShowImage)?(i(),l(u,{key:0})):d("",!0),t.loading?(i(),l(p,{key:1})):d("",!0),x(c(g,{src:t.image,debounce:!1,onCanShow:s.maybeCanShow},null,8,["src","onCanShow"]),[[B,s.getCard==="summary_large_image"&&n.canShowImage]])],4),e("div",F,[e("div",G,[N(o.$slots,"site-url",{},()=>[P(r(_.rootStore.aioseo.urls.domain),1)],!0)]),e("div",H,r(s.truncate(t.title,70)),1),e("div",J,r(s.truncate(t.description,105)),1)])])],2)])])}const oe=O(T,[["render",K],["__scopeId","data-v-4b78a9ed"]]);export{oe as C};