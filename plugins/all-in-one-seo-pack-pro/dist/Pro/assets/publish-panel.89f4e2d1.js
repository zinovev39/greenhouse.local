import{_ as u}from"./js/_plugin-vue_export-helper.58be9317.js";import{x as g,o as r,c as n,a as i,F as b,L as $,k as E,I as f,q as k,D as v,t as d,C as _,b as h,l as A,Y as I}from"./js/vue.runtime.esm-bundler.78401fbe.js";import{l as O}from"./js/index.3489981f.js";import{l as M}from"./js/index.b1bbc091.js";import{l as V}from"./js/index.0b123ab1.js";import{u as L,a as B,j as D,d as w,r as F,l as x,c as N}from"./js/links.574d4fd4.js";import{c as U,a as z}from"./js/allowed.59f3c72a.js";import{a as R}from"./js/Image.907f3979.js";import{T as K}from"./js/Tags.075f39d5.js";import{C as G}from"./js/GoogleSearchPreview.871138e6.js";import{b as Y,c as q,e as H}from"./js/Caret.89e18339.js";import{S as j}from"./js/Exclamation.20b286fc.js";import{S as W}from"./js/External.f8ff7aa4.js";import{s as J}from"./js/metabox.5b4ee3cf.js";import{l as Q}from"./js/loadTruSeo.31f3c1b1.js";import{e as X}from"./js/elemLoaded.9a6eb745.js";import{t as Z}from"./js/toString.03aff7e6.js";import{u as ee}from"./js/upperFirst.1bce92c5.js";import"./js/translations.6e7b2383.js";import"./js/default-i18n.3881921e.js";import"./js/constants.7045f08f.js";import"./js/isArrayLikeObject.59b68b05.js";import"./js/deburr.f9ffc34a.js";import"./js/postSlug.23dfcba8.js";import"./js/cleanForSlug.b8be1cc7.js";import"./js/_baseTrim.8725856f.js";import"./js/_stringToArray.4de3b1f3.js";import"./js/get.9f392d3b.js";import"./js/tags.58b8cbee.js";function te(t){return ee(Z(t).toLowerCase())}var se=U(function(t,e,o){return e=e.toLowerCase(),t+(o?te(e):e)});const y=se;const oe={setup(){return{optionsStore:L(),postEditorStore:B(),settingsStore:D(),tagsStore:w()}},mixins:[K,R],components:{CoreGoogleSearchPreview:G,SvgCircleCheck:Y,SvgCircleClose:q,SvgCircleExclamation:j,SvgExternal:W,SvgPencil:H},data(){return{allowed:z,separator:void 0,socialImage:null,socialImageKey:0,strings:{snippetPreview:this.$t.__("Snippet Preview",this.$td),canonicalUrl:this.$t.__("Canonical URL",this.$td)}}},computed:{tips(){let t=[{label:this.$t.__("Visibility",this.$td),name:"visibility",access:"aioseo_page_advanced_settings"},{label:this.$t.__("SEO Analysis",this.$td),name:"seoAnalysis",access:"aioseo_page_analysis"},{label:this.$t.__("Readability",this.$td),name:"readabilityAnalysis",access:"aioseo_page_analysis"},{label:this.$t.__("Focus Keyphrase",this.$td),name:"focusKeyphrase",access:"aioseo_page_analysis"},{label:this.$t.__("Social",this.$td),name:"social",access:"aioseo_page_social_settings"}].filter(e=>this.allowed(e.access)&&(e.access!=="aioseo_page_analysis"||this.optionsStore.options.advanced.truSeo));return!this.optionsStore.options.social.facebook.general.enable&&!this.optionsStore.options.social.twitter.general.enable&&(t=t.filter(e=>e.name!=="social")),t.forEach((e,o)=>{t[o]={...e,...this.getData(e.name)}}),t},canImprove(){return this.tips.some(t=>t.type==="error")}},methods:{getIcon(t){switch(t){case"error":return"svg-circle-close";case"warning":return"svg-circle-exclamation";case"success":default:return"svg-circle-check"}},getData(t){const e={};if(t==="visibility"&&(e.value=this.$t.__("Good!",this.$td),e.type="success",(this.postEditorStore.currentPost.default?this.optionsStore.dynamicOptions.searchAppearance.postTypes[this.postEditorStore.currentPost.postType]&&!this.optionsStore.dynamicOptions.searchAppearance.postTypes[this.postEditorStore.currentPost.postType].advanced.robotsMeta.default&&this.optionsStore.dynamicOptions.searchAppearance.postTypes[this.postEditorStore.currentPost.postType].advanced.robotsMeta.noindex:this.postEditorStore.currentPost.noindex)&&(e.value=this.$t.__("Blocked!",this.$td),e.type="error")),t==="seoAnalysis"){e.value=this.$t.__("N/A",this.$td),e.type="error";const o=this.postEditorStore.currentPost.seo_score;Number.isInteger(o)&&(e.value=o+"/100",e.type=80<o?"success":50<o?"warning":"error")}if(t==="readabilityAnalysis"){e.value=this.$t.__("Good!",this.$td),e.type="success";const o=this.postEditorStore.currentPost.page_analysis.analysis.readability.errors;o&&0<o&&(e.value=this.$t.sprintf(this.$t._n("%1$s error found!","%1$s errors found!",o,this.$td),o),e.type="error")}if(t==="focusKeyphrase"){e.value=this.$t.__("No focus keyphrase!",this.$td),e.type="error";const o=this.postEditorStore.currentPost.keyphrases.focus;o&&o.keyphrase&&(e.value=o.score+"/100",e.type=80<o.score?"success":50<o.score?"warning":"error")}if(t==="social"){e.value=this.$t.__("Good!",this.$td),e.type="success",this.socialImageKey;const o=this.parseTags(this.postEditorStore.currentPost.og_title||this.postEditorStore.currentPost.title||this.postEditorStore.currentPost.tags.title).trim(),s=this.parseTags(this.postEditorStore.currentPost.og_description||this.postEditorStore.currentPost.description||this.postEditorStore.currentPost.tags.description).trim(),a=this.socialImage;(!o||!s||!a)&&(e.value=this.$t.__("Missing social markup!",this.$td),e.type="error")}return{...e,icon:this.getIcon(e.type)}},openSidebar(t){const{closePublishSidebar:e,openGeneralSidebar:o}=window.wp.data.dispatch("core/edit-post");e(),o("aioseo-post-settings-sidebar/aioseo-post-settings-sidebar");const s={};switch(t){case"canonical":case"visibility":s.tab="advanced";break;case"seoAnalysis":s.tab="general",s.card="basicseo";break;case"readabilityAnalysis":s.tab="general",s.card="readability";break;case"focusKeyphrase":s.tab="general",s.card="focus";break;case"social":s.tab="social";break}this.settingsStore.changeTabSettings({setting:"mainSidebar",value:s})}},async mounted(){await this.setImageUrl().then(()=>{this.socialImage=this.imageUrl}),window.aioseoBus.$on("updateSocialImagePreview",t=>{this.socialImage=t.image,this.socialImageKey++}),this.$nextTick(()=>{const t=document.querySelector(".aioseo-pre-publish .editor-post-publish-panel__link");t&&(t.innerHTML=this.canImprove?this.$t.__("Your post needs improvement!",this.$td):this.$t.__("You're good to go!",this.$td))})}},ie={key:0,class:"seo-overview"},re={class:"pre-publish-checklist"},ne={class:"icon"},ae=["onClick"],ce={key:0,class:"snippet-preview"},le={class:"title"},de=["href"],pe={key:1,class:"canonical-url"},ue={class:"title"},he=["href"];function _e(t,e,o,s,a,p){const c=g("svg-pencil"),m=g("core-google-search-preview"),C=g("svg-external");return s.postEditorStore.currentPost.id?(r(),n("div",ie,[i("ul",re,[(r(!0),n(b,null,$(p.tips,(l,T)=>(r(),n("li",{key:T},[i("span",ne,[(r(),E(k(l.icon),{class:f(l.type)},null,8,["class"]))]),i("span",null,[v(d(l.label)+": ",1),i("span",{class:f(["result",l.value.endsWith("/100")?l.type:null])},d(l.value),3)]),s.optionsStore.dynamicOptions.searchAppearance.postTypes[s.postEditorStore.currentPost.postType]&&s.optionsStore.dynamicOptions.searchAppearance.postTypes[s.postEditorStore.currentPost.postType].advanced.showMetaBox?(r(),n("span",{key:0,class:"edit",onClick:Qe=>p.openSidebar(l.name)},[_(c)],8,ae)):h("",!0)]))),128))]),a.allowed("aioseo_page_analysis")?(r(),n("div",ce,[i("p",le,d(a.strings.snippetPreview)+":",1),_(m,{title:t.parseTags(s.postEditorStore.currentPost.title||s.postEditorStore.currentPost.tags.title||"#post_title #separator_sa #site_title"),separator:s.optionsStore.options.searchAppearance.global.separator,description:t.parseTags(s.postEditorStore.currentPost.description||s.postEditorStore.currentPost.tags.description||"#post_content"),class:f({ismobile:s.postEditorStore.currentPost.generalMobilePrev})},{domain:A(()=>[i("a",{href:s.tagsStore.liveTags.permalink,target:"_blank"},d(s.tagsStore.liveTags.permalink),9,de)]),_:1},8,["title","separator","description","class"])])):h("",!0),a.allowed("aioseo_page_analysis")&&s.postEditorStore.currentPost.canonicalUrl?(r(),n("div",pe,[i("p",ue,[v(d(a.strings.canonicalUrl)+": ",1),i("span",{class:"edit",onClick:e[0]||(e[0]=l=>p.openSidebar("canonical"))},[_(c)])]),i("a",{href:s.postEditorStore.currentPost.canonicalUrl,target:"_blank",rel:"noopener noreferrer"},[i("span",null,d(s.postEditorStore.currentPost.canonicalUrl),1),_(C)],8,he)])):h("",!0)])):h("",!0)}const S=u(oe,[["render",_e]]),me={},ge={width:"32",height:"32",fill:"none",class:"aioseo-facebook-rounded",xmlns:"http://www.w3.org/2000/svg"},fe=i("circle",{cx:"16",cy:"16",r:"16",fill:"currentColor"},null,-1),ve=i("path",{d:"M24 16c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 4 2.9 7.3 6.7 7.9v-5.6h-2V16h2v-1.8c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2V16h2.2l-.4 2.3h-1.9V24c4-.6 6.9-4 6.9-8z",fill:"#fff"},null,-1),ye=[fe,ve];function Se(t,e){return r(),n("svg",ge,ye)}const Pe=u(me,[["render",Se]]),be={},$e={width:"32",height:"32",fill:"none",class:"aioseo-linkedin-rounded",xmlns:"http://www.w3.org/2000/svg"},Ee=i("circle",{cx:"16",cy:"16",r:"16",fill:"currentColor"},null,-1),ke=i("path",{d:"M11.6 24H8.2V13.3h3.4V24zM9.9 11.8C8.8 11.8 8 11 8 9.9 8 8.8 8.9 8 9.9 8c1.1 0 1.9.8 1.9 1.9 0 1.1-.8 1.9-1.9 1.9zM24 24h-3.4v-5.8c0-1.7-.7-2.2-1.7-2.2s-2 .8-2 2.3V24h-3.4V13.3h3.2v1.5c.3-.7 1.5-1.8 3.2-1.8 1.9 0 3.9 1.1 3.9 4.4V24h.2z",fill:"#fff"},null,-1),we=[Ee,ke];function xe(t,e){return r(),n("svg",$e,we)}const Ce=u(be,[["render",xe]]),Te={},Ae={width:"32",height:"32",fill:"none",class:"aioseo-pinterest-rounded",xmlns:"http://www.w3.org/2000/svg"},Ie=i("circle",{cx:"16",cy:"16",r:"16",fill:"currentColor"},null,-1),Oe=i("path",{d:"M16.056 6.583c-5.312 0-9.658 4.346-9.658 9.658a9.581 9.581 0 005.795 8.813c0-.724 0-1.448.12-2.173.242-.845 1.207-5.312 1.207-5.312s-.362-.604-.362-1.57c0-1.448.846-2.535 1.811-2.535.845 0 1.328.604 1.328 1.45 0 .844-.603 2.172-.845 3.38-.241.965.483 1.81 1.57 1.81 1.81 0 3.018-2.293 3.018-5.19 0-2.174-1.449-3.743-3.984-3.743-2.898 0-4.709 2.173-4.709 4.587 0 .845.242 1.449.604 1.932.12.241.242.241.12.483 0 .12-.12.603-.24.724-.121.242-.242.362-.483.242-1.329-.604-1.932-2.053-1.932-3.743 0-2.777 2.294-6.036 6.881-6.036 3.743 0 6.157 2.656 6.157 5.553 0 3.743-2.052 6.64-5.19 6.64-1.087 0-2.053-.603-2.415-1.207 0 0-.604 2.173-.725 2.656a10.702 10.702 0 01-.966 2.052c.846.242 1.811.363 2.777.363 5.312 0 9.658-4.347 9.658-9.659.121-4.829-4.225-9.175-9.537-9.175z",fill:"#fff"},null,-1),Me=[Ie,Oe];function Ve(t,e){return r(),n("svg",Ae,Me)}const Le=u(Te,[["render",Ve]]),Be={},De={width:"32",height:"32",fill:"none",class:"aioseo-twitter-rounded",xmlns:"http://www.w3.org/2000/svg"},Fe=i("circle",{cx:"16",cy:"16",r:"16",fill:"currentColor"},null,-1),Ne=i("path",{d:"M24 11c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-2.1 0-3.7 2-3.2 4-2.7-.1-5.1-1.4-6.8-3.4-.9 1.5-.4 3.4 1 4.4-.5 0-1-.2-1.5-.4 0 1.5 1.1 2.9 2.6 3.3-.5.1-1 .2-1.5.1.4 1.3 1.6 2.3 3.1 2.3-1.2.9-3 1.4-4.7 1.2 1.5.9 3.2 1.5 5 1.5 6.1 0 9.5-5.1 9.3-9.8.7-.4 1.3-1 1.7-1.7z",fill:"#fff"},null,-1),Ue=[Fe,Ne];function ze(t,e){return r(),n("svg",De,Ue)}const Re=u(Be,[["render",ze]]);const Ke={setup(){return{tagsStore:w()}},components:{SvgFacebookRounded:Pe,SvgLinkedinRounded:Ce,SvgPinterestRounded:Le,SvgTwitterRounded:Re},data(){return{strings:{title:this.$t.__("Get out the word!",this.$td),description:this.$t.__("Share your content on your favorite social media platforms to drive engagement and increase your SEO.",this.$td)}}},computed:{socialNetworks(){return[{icon:"svg-twitter-rounded",link:"https://twitter.com/share?url="},{icon:"svg-facebook-rounded",link:"https://www.facebook.com/sharer/sharer.php?u="},{icon:"svg-pinterest-rounded",link:"https://pinterest.com/pin/create/button/?url="},{icon:"svg-linkedin-rounded",link:"https://www.linkedin.com/shareArticle?url="}].map(t=>({...t,link:t.link+this.tagsStore.liveTags.permalink}))}}},Ge={key:0,class:"aioseo-post-publish"},Ye={class:"title"},qe={class:"description"},He={class:"links"},je=["href"];function We(t,e,o,s,a,p){return s.tagsStore.liveTags.permalink?(r(),n("div",Ge,[i("h2",Ye,d(a.strings.title),1),i("p",qe,d(a.strings.description),1),i("div",He,[(r(!0),n(b,null,$(p.socialNetworks,(c,m)=>(r(),n("a",{class:"link",target:"_blank",key:m,href:c.link},[(r(),E(k(c.icon)))],8,je))),128))])])):h("",!0)}const Je=u(Ke,[["render",We]]);(function(t){if(!F()||!J()||!t.editPost.PluginDocumentSettingPanel)return;const e=t.editPost.PluginDocumentSettingPanel,o=t.editPost.PluginPrePublishPanel,s=t.editPost.PluginPostPublishPanel,a=t.plugins.registerPlugin;x();const c=N().aioseo.user;!c.capabilities.aioseo_page_analysis&&!c.capabilities.aioseo_page_general_settings&&!c.capabilities.aioseo_page_advanced_settings||a("aioseo-publish-panel",{render:()=>t.element.createElement(t.element.Fragment,{},t.element.createElement(e,{title:"AIOSEO",className:"aioseo-document-setting aioseo-seo-overview",icon:t.element.Fragment},t.element.createElement("div",{},t.element.createElement("div",{id:"aioseo-document-setting"}))),t.element.createElement(o,{title:["AIOSEO",":",t.element.createElement("span",{key:"scoreDescription",className:"editor-post-publish-panel__link"})],className:"aioseo-pre-publish aioseo-seo-overview",initialOpen:!0,icon:t.element.Fragment},t.element.createElement("div",{},t.element.createElement("div",{id:"aioseo-pre-publish"}))),t.element.createElement(s,{title:"AIOSEO",initialOpen:!0,icon:t.element.Fragment},t.element.createElement("div",{},t.element.createElement("div",{id:"aioseo-post-publish"}))))})})(window.wp);const P=t=>{let e=I({...t.component,name:"Standalone/PublishPanel"});return e=O(e),e=M(e),e=V(e),x(e),e.mount("#"+t.id),window.addEventListener("load",()=>{Q(e,!1)}),e};window.aioseo.currentPost&&window.aioseo.currentPost.context==="post"&&[{id:"aioseo-pre-publish",component:S},{id:"aioseo-document-setting",component:S},{id:"aioseo-post-publish",component:Je}].forEach(e=>{document.getElementById(e.id)?P(e):(X("#"+e.id,y(e.id)),document.addEventListener("animationstart",function(o){y(e.id)===o.animationName&&P(e)},{passive:!0}))});
