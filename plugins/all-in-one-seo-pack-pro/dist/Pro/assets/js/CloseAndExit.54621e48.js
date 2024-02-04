import{u as S,c as k,f as v}from"./links.574d4fd4.js";import"./default-i18n.3881921e.js";import{x as l,o as d,c,m as y,t,H as u,C as n,l as r,D as p,a}from"./vue.runtime.esm-bundler.78401fbe.js";import{_ as z}from"./_plugin-vue_export-helper.58be9317.js";import{S as C}from"./Caret.89e18339.js";import{u as x}from"./Wizard.60040a90.js";import{C as W}from"./Index.815fe32c.js";const b={setup(){const{strings:e}=x();return{optionsStore:S(),rootStore:k(),setupWizardStore:v(),strings:e}},components:{CoreModal:W,SvgClose:C},data(){return{loading:!1}},methods:{processOptIn(){this.setupWizardStore.smartRecommendations.usageTracking=!0,this.loading=!0,this.setupWizardStore.saveWizard("smartRecommendations").then(()=>{window.location.href=this.rootStore.aioseo.urls.aio.dashboard})}}},w={class:"aioseo-wizard-close-and-exit"},T=["href"],M={class:"aioseo-modal-body"},A=["innerHTML"],U={class:"actions"};function E(e,s,B,o,_,g){const f=l("svg-close"),m=l("base-button"),h=l("core-modal");return d(),c("div",w,[y(e.$slots,"links",{},()=>[e.$isPro||o.optionsStore.options.advanced.usageTracking?(d(),c("a",{key:0,href:o.rootStore.aioseo.urls.aio.dashboard},t(o.strings.closeAndExit),9,T)):(d(),c("a",{key:1,href:"#",onClick:s[0]||(s[0]=u(i=>o.setupWizardStore.showUsageTrackingModal=!0,["prevent"]))},t(o.strings.closeAndExit),1))]),n(h,{show:o.setupWizardStore.showUsageTrackingModal&&!e.$isPro,onClose:s[3]||(s[3]=i=>o.setupWizardStore.showUsageTrackingModal=!1),classes:["aioseo-close-and-exit-modal"]},{header:r(()=>[p(t(o.strings.buildABetterAioseo)+" ",1),a("button",{class:"close",onClick:s[2]||(s[2]=u(i=>o.setupWizardStore.showUsageTrackingModal=!1,["stop"]))},[n(f,{onClick:s[1]||(s[1]=i=>o.setupWizardStore.showUsageTrackingModal=!1)})])]),body:r(()=>[a("div",M,[a("div",{class:"reset-description",innerHTML:o.strings.getImprovedFeatures},null,8,A),a("div",U,[n(m,{tag:"a",href:o.rootStore.aioseo.urls.aio.dashboard,type:"gray",size:"medium"},{default:r(()=>[p(t(o.strings.noThanks),1)]),_:1},8,["href"]),n(m,{type:"blue",size:"medium",loading:_.loading,onClick:u(g.processOptIn,["stop"])},{default:r(()=>[p(t(o.strings.yesCountMeIn),1)]),_:1},8,["loading","onClick"])])])]),_:1},8,["show"])])}const V=z(b,[["render",E]]);export{V as W};
