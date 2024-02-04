import{f as A,m as V}from"./links.574d4fd4.js";import"./default-i18n.3881921e.js";import{x as t,c as f,C as s,l as r,o as p,a as u,D as h,t as o,F as N,L as B,k as O,b as z,I as $}from"./vue.runtime.esm-bundler.78401fbe.js";import{_ as F}from"./_plugin-vue_export-helper.58be9317.js";import{u as L,W as E}from"./Wizard.60040a90.js";import{B as I}from"./Checkbox.66c1e532.js";import{C as T}from"./ProBadge.4381f91b.js";import{G as U,a as q}from"./Row.e7795c3e.js";import{W as R,a as D,b as G}from"./Header.ccf1c291.js";import{W as M}from"./CloseAndExit.54621e48.js";import{_ as j}from"./Steps.52be0f49.js";import"./isArrayLikeObject.59b68b05.js";import"./addons.f4a19c9a.js";import"./upperFirst.1bce92c5.js";import"./_stringToArray.4de3b1f3.js";import"./toString.03aff7e6.js";import"./Checkmark.68b20c77.js";import"./Logo.9906182f.js";import"./Caret.89e18339.js";import"./Index.815fe32c.js";const H={setup(){const{strings:e}=L();return{setupWizardStore:A(),composableStrings:e}},components:{BaseCheckbox:I,CoreProBadge:T,GridColumn:U,GridRow:q,WizardBody:R,WizardCloseAndExit:M,WizardContainer:D,WizardHeader:G,WizardSteps:j},mixins:[E],data(){return{loading:!1,stage:"features",strings:V(this.composableStrings,{whichFeatures:this.$t.__("Which SEO features do you want to enable?",this.$td),description:this.$t.__("We have already selected our recommended features based on your site category, but you can use the following features to fine-tune your site.",this.$td)})}},computed:{showPluginsAll(){return(this.setupWizardStore.features.includes("analytics")||this.setupWizardStore.features.includes("conversion-tools"))&&(this.setupWizardStore.features.includes("image-seo")||this.setupWizardStore.features.includes("news-sitemap")||this.setupWizardStore.features.includes("video-sitemap")||this.setupWizardStore.features.includes("local-seo")||this.setupWizardStore.features.includes("redirects")||this.setupWizardStore.features.includes("index-now")||this.setupWizardStore.features.includes("link-assistant")||this.setupWizardStore.features.includes("rest-api"))},showPluginsAddons(){return(!this.setupWizardStore.features.includes("analytics")||!this.setupWizardStore.features.includes("conversion-tools"))&&(this.setupWizardStore.features.includes("image-seo")||this.setupWizardStore.features.includes("news-sitemap")||this.setupWizardStore.features.includes("video-sitemap")||this.setupWizardStore.features.includes("local-seo")||this.setupWizardStore.features.includes("redirects")||this.setupWizardStore.features.includes("index-now")||this.setupWizardStore.features.includes("link-assistant")||this.setupWizardStore.features.includes("rest-api"))},showPluginsOnly(){return(this.setupWizardStore.features.includes("analytics")||this.setupWizardStore.features.includes("conversion-tools"))&&!this.setupWizardStore.features.includes("image-seo")&&!this.setupWizardStore.features.includes("news-sitemap")&&!this.setupWizardStore.features.includes("video-sitemap")&&!this.setupWizardStore.features.includes("local-seo")&&!this.setupWizardStore.features.includes("redirects")&&!this.setupWizardStore.features.includes("index-now")&&!this.setupWizardStore.features.includes("link-assistant")&&!this.setupWizardStore.features.includes("rest-api")},getPluginsText(){return this.showPluginsOnly?this.$t.sprintf(this.$t.__("The following plugins will be installed: %1$s",this.$td),this.getPluginNames):this.showPluginsAddons?this.$t.sprintf(this.$t.__("The following %1$s addons will be installed: %2$s",this.$td),"AIOSEO",this.getPluginNames):this.showPluginsAll?this.$t.sprintf(this.$t.__("The following plugins and %1$s addons will be installed: %2$s",this.$td),"AIOSEO",this.getPluginNames):null},getPluginNames(){const e=[];return this.setupWizardStore.features.includes("analytics")&&e.push("MonsterInsights Free"),this.setupWizardStore.features.includes("conversion-tools")&&e.push("OptinMonster"),this.setupWizardStore.features.includes("image-seo")&&e.push("Image SEO"),this.setupWizardStore.features.includes("local-seo")&&e.push("Local Business SEO"),this.setupWizardStore.features.includes("video-sitemap")&&e.push("Video Sitemap"),this.setupWizardStore.features.includes("news-sitemap")&&e.push("News Sitemap"),this.setupWizardStore.features.includes("redirects")&&e.push("Redirects"),this.setupWizardStore.features.includes("index-now")&&e.push("Index Now"),this.setupWizardStore.features.includes("link-assistant")&&e.push("Link Assistant"),this.setupWizardStore.features.includes("rest-api")&&e.push("REST API"),e.join(", ")},getFeatures(){return this.features.filter(e=>e.value!=="breadcrumbs").map(e=>(e.selected=!1,this.setupWizardStore.features.includes(e.value)&&(e.selected=!0),e))}},methods:{preventUncheck(e,l){l.required&&(e.preventDefault(),e.stopPropagation())},getValue(e){return this.setupWizardStore.features.includes(e.value)},updateValue(e,l){const d=[...this.setupWizardStore.features];if(e){d.push(l.value),this.setupWizardStore.features=d;return}const c=d.findIndex(a=>a===l.value);c!==-1&&d.splice(c,1),this.setupWizardStore.features=d},saveAndContinue(){this.loading=!0,this.setupWizardStore.saveWizard("features").then(()=>{this.$router.push(this.setupWizardStore.getNextLink)})}}},J={class:"aioseo-wizard-features"},K={class:"header"},Q={class:"description"},X={class:"settings-name"},Y={class:"name small-margin"},Z={class:"aioseo-description-text"},ee={class:"go-back"},se=u("div",{class:"spacer"},null,-1),te={key:0,class:"plugins"};function ie(e,l,d,c,a,n){const S=t("wizard-header"),W=t("wizard-steps"),w=t("core-pro-badge"),_=t("grid-column"),v=t("base-checkbox"),y=t("grid-row"),g=t("router-link"),x=t("base-button"),k=t("wizard-body"),b=t("wizard-close-and-exit"),P=t("wizard-container");return p(),f("div",J,[s(S),s(P,null,{default:r(()=>[s(k,null,{footer:r(()=>[u("div",ee,[s(g,{to:c.setupWizardStore.getPrevLink,class:"no-underline"},{default:r(()=>[h("←")]),_:1},8,["to"]),h("   "),s(g,{to:c.setupWizardStore.getPrevLink},{default:r(()=>[h(o(a.strings.goBack),1)]),_:1},8,["to"])]),se,s(x,{type:"blue",loading:a.loading,onClick:n.saveAndContinue},{default:r(()=>[h(o(a.strings.saveAndContinue)+" →",1)]),_:1},8,["loading","onClick"])]),default:r(()=>[s(W),u("div",K,o(a.strings.whichFeatures),1),u("div",Q,o(a.strings.description),1),(p(!0),f(N,null,B(n.getFeatures,(i,C)=>(p(),f("div",{key:C,class:"feature-grid small-padding medium-margin"},[s(y,null,{default:r(()=>[s(_,{xs:"11"},{default:r(()=>[u("div",X,[u("div",Y,[h(o(i.name)+" ",1),e.needsUpsell(i)?(p(),O(w,{key:0})):z("",!0)]),u("div",Z,o(i.description),1)])]),_:2},1024),s(_,{xs:"1"},{default:r(()=>[s(v,{round:"",class:$({"no-clicks":i.required}),type:i.required?"green":"blue",modelValue:i.required?!0:n.getValue(i),"onUpdate:modelValue":m=>n.updateValue(m,i),onClick:m=>n.preventUncheck(m,i)},null,8,["class","type","modelValue","onUpdate:modelValue","onClick"])]),_:2},1024)]),_:2},1024)]))),128))]),_:1}),n.getPluginsText?(p(),f("div",te,o(n.getPluginsText),1)):z("",!0),s(b)]),_:1})])}const xe=F(H,[["render",ie]]);export{xe as default};
