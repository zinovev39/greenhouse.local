import"./js/_plugin-vue_export-helper.58be9317.js";import{Y as v,h as k}from"./js/vue.runtime.esm-bundler.78401fbe.js";import{c as E,b as S}from"./js/vue-router.8133fdad.js";import{e as _,l as I}from"./js/index.3489981f.js";import{l as C}from"./js/index.b1bbc091.js";import{l as A}from"./js/index.0b123ab1.js";import{a as D,e as P,v as x,l as L}from"./js/links.574d4fd4.js";import{g as O,m as h,T as B}from"./js/postSlug.23dfcba8.js";import{i as U}from"./js/isEqual.ab50a84d.js";import{i as $}from"./js/isEmpty.f0fa7612.js";import{s as m,_ as s}from"./js/default-i18n.3881921e.js";import{A as p}from"./js/App.474ab62f.js";import"./js/translations.6e7b2383.js";import"./js/constants.7045f08f.js";import"./js/Caret.89e18339.js";import"./js/isArrayLikeObject.59b68b05.js";import"./js/metabox.5b4ee3cf.js";import"./js/cleanForSlug.b8be1cc7.js";import"./js/toString.03aff7e6.js";import"./js/_baseTrim.8725856f.js";import"./js/_stringToArray.4de3b1f3.js";import"./js/deburr.f9ffc34a.js";import"./js/get.9f392d3b.js";import"./js/_baseIsEqual.a64bf9de.js";import"./js/_getAllKeys.9f275d98.js";import"./js/_getTag.2eb83be0.js";/* empty css                */import"./js/allowed.59f3c72a.js";import"./js/license.3fbd013a.js";import"./js/upperFirst.1bce92c5.js";import"./js/params.f0608262.js";import"./js/UserAvatar.a8194469.js";import"./js/Profile.a2723162.js";import"./js/JsonValues.870a4901.js";import"./js/SettingsRow.3c16cab0.js";import"./js/Row.e7795c3e.js";import"./js/Checkbox.66c1e532.js";import"./js/Checkmark.68b20c77.js";import"./js/LicenseKeyBar.35d676b3.js";import"./js/LogoGear.d631c62c.js";import"./js/Tabs.d491c719.js";import"./js/TruSeoScore.b474bf15.js";import"./js/Ellipse.c78f1911.js";import"./js/Information.8541dc5f.js";import"./js/Slide.6b2090d0.js";import"./js/Index.815fe32c.js";import"./js/Mobile.cd72190d.js";import"./js/MaxCounts.12b45bab.js";import"./js/Tags.075f39d5.js";import"./js/tags.58b8cbee.js";import"./js/regex.ebd490ab.js";import"./js/debounce.f0d346b0.js";import"./js/toNumber.3cdd130f.js";import"./js/stripHTMLTags.13e8d86d.js";import"./js/_arrayEach.56a9f647.js";import"./js/Tooltip.72f8a160.js";import"./js/Plus.cdfc8876.js";import"./js/Eye.f71295b3.js";import"./js/Editor.df2359d9.js";import"./js/RadioToggle.1b934958.js";import"./js/GoogleSearchPreview.871138e6.js";import"./js/HtmlTagsEditor.884e425c.js";import"./js/UnfilteredHtml.6760ba7c.js";import"./js/ProBadge.4381f91b.js";import"./js/popup.6fe74774.js";import"./js/addons.f4a19c9a.js";import"./js/Index.1914312f.js";import"./js/Table.62305440.js";import"./js/numbers.c7cb4085.js";import"./js/Affiliate.fdeb2d7c.js";import"./js/PostTypes.797a4244.js";import"./js/Suggestion.db3b227b.js";import"./js/Blur.7f36813b.js";import"./js/Index.b732d651.js";import"./js/RequiredPlans.6ee9b196.js";import"./js/Image.907f3979.js";import"./js/Upsell.186b534b.js";import"./js/FacebookPreview.63089f6d.js";import"./js/Img.051a5b14.js";import"./js/ImageUploader.16584fb7.js";import"./js/TwitterPreview.98baa8b6.js";import"./js/Book.96b556ac.js";import"./js/Settings.67de7ef8.js";import"./js/Build.9abf58d0.js";import"./js/Index.4f7b4214.js";import"./js/strings.81a9a134.js";import"./js/isString.6cb7c99b.js";import"./js/External.f8ff7aa4.js";import"./js/Exclamation.20b286fc.js";import"./js/Gear.da11b8f1.js";import"./js/Redirects.9c10b8fd.js";import"./js/AddonConditions.9aacd850.js";import"./js/Card.e9a25031.js";import"./js/Date.873f9fff.js";import"./js/DatePicker.d9da9ef4.js";import"./js/Calendar.85c26920.js";import"./js/isUndefined.fd23f7c2.js";import"./js/Radio.76a0cae5.js";import"./js/Textarea.bb6037a0.js";import"./js/DeleteWarning.c35a7701.js";import"./js/ScrollAndHighlight.8f79e59a.js";class T extends window.$e.modules.hookUI.Base{constructor(t,i,o){super(),this.hook=t,this.id=i,this.callback=o}getCommand(){return this.hook}getId(){return this.id}apply(){return this.callback()}}class H extends window.$e.modules.hookData.Base{constructor(t,i,o){super(),this.hook=t,this.id=i,this.callback=o}getCommand(){return this.hook}getId(){return this.id}apply(){return this.callback()}}function c(e,t,i){window.$e.hooks.registerUIAfter(new T(e,t,i))}function M(e,t,i){window.$e.hooks.registerDataAfter(new H(e,t,i))}let l={},d=!1;const u=()=>{const e=window.elementor.documents.getCurrent();if(!["wp-post","wp-page"].includes(e.config.type))return;const t={...l},i=O();U(t,i)||(l=i,h())},R=()=>{const e=D();$(e.currentPost)||window.elementor.config.document.id===window.elementor.config.document.revisions.current_id&&e.saveCurrentPost(e.currentPost).then(()=>{const t=P(),i=x();t.isUnlicensed||i.fetch()})},q=()=>{window.$e.internal("document/save/set-is-modified",{status:!0})},V=()=>{d||(d=!0,c("editor/documents/attach-preview","aioseo-content-scraper-attach-preview",u),c("document/save/set-is-modified","aioseo-content-scraper-on-modified",u),M("document/save/save","aioseo-save",R),_.on("postSettingsUpdated",q))},j=({elementor:e,elementorModules:t})=>{if(e.config.user.introduction["aioseo-introduction"]===!0)return;const i=new t.editor.utils.Introduction({introductionKey:"aioseo-introduction",dialogType:"alert",dialogOptions:{id:"aioseo-introduction",headerMessage:m(s("New: %1$s %2$s integration","all-in-one-seo-pack"),"AIOSEO","Elementor"),message:m(s("You can now manage your SEO settings inside of %1$s via %2$s before you publish your post!","all-in-one-seo-pack"),"Elementor","All in One SEO"),position:{my:"center center",at:"center center"},strings:{confirm:s("Got It!","all-in-one-seo-pack")},hide:{onButtonClick:!1},onConfirm:()=>{i.setViewed(),i.getDialog().hide()}}});i.show()},r={icon:"eicon-calendar",name:"aioseo-limit-modified-date",param:"aioseo_limit_modified_date",title:s("Save (Don't Modify Date)","all-in-one-seo-pack")},f=e=>{const t=document.getElementById(`elementor-panel-footer-sub-menu-item-${r.name}`);t&&(t.classList.remove("elementor-disabled"),e||t.classList.add("elementor-disabled"))},W=({elementor:e,elementorCommon:t,$e:i})=>{e.once("preview:loaded",function(){e.getRegion("panel").currentView.footer.currentView.addSubMenuItem("saver-options",{icon:r.icon,name:r.name,title:r.title,callback:o=>{o.currentTarget.classList.contains("elementor-disabled")||(t.ajax.requestConstants[r.param]=!0,i.run("document/save/default"))}})}),e.on("document:loaded",o=>{f(o.container.settings.get("post_status")==="draft")}),i.commandsInternal.on("run:after",(o,a,b)=>{switch(a){case"document/save/set-is-modified":f(b.status);break;case"document/save/save":case"document/save/default":delete t.ajax.requestConstants[r.param];break}})};let n=null,w=!1;const Y=()=>{let e=window.elementor.getPreferences("ui_theme")||"auto";e==="auto"&&(e=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),document.body.classList.forEach(t=>{t.startsWith("aioseo-elementor-")&&document.body.classList.remove(t)}),document.body.classList.add("aioseo-elementor-"+e)},z=({elementor:e,$e:t,Marionette:i})=>{t.routes.on("run:after",function(o,a){Y(),a==="panel/page-settings/aioseo"&&(n==null||n.unmount(),n=g("#elementor-panel-page-settings-controls"))}),e.modules.layouts.panel.pages.menu.Menu.addItem({name:"aioseo",icon:"aioseo aioseo-element-menu-icon aioseo-element-menu-icon-"+e.getPreferences("ui_theme"),title:"All in One SEO",type:"page",callback:()=>{try{t.routes.run("panel/page-settings/aioseo")}catch{t.routes.run("panel/page-settings/settings"),t.routes.run("panel/page-settings/aioseo")}}},"more"),e.once("preview:loaded",function(){t.components.get("panel/elements").addTab("aioseo",{title:"AIOSEO"})}),e.hooks.addFilter("panel/elements/regionViews",o=>(o.aioseo={region:o.global.region,view:i.ItemView.extend({template:!1,id:"elementor-panel-aioseo",className:"aioseo-elementor aioseo-sidebar-panel",initialize(){document.getElementById("elementor-panel-elements-search-area").hidden=!0},onShow(){n==null||n.unmount(),n=g("#elementor-panel-aioseo")},onDestroy(){document.getElementById("elementor-panel-elements-search-area").hidden=!1}}),options:{}},o))},g=e=>{const t=document.querySelector(e);t.classList.add("edit-post-sidebar","aioseo-elementor-panel"),t.appendChild(document.createElement("div"));const i=E({history:S(),routes:[{path:"/",component:p}]});let o=v({name:"Standalone/Elementor",data(){return{tableContext:window.aioseo.currentPost.context,screenContext:"sidebar"}},render:()=>k(p)});return o=I(o),o=C(o),o=A(o),o.use(i),i.app=o,L(o,i),V(),o.config.globalProperties.$truSeo=new B,o.mount(`${e} > div`),h(),o},y=()=>{z(window),j(window),W(window)};window.elementor&&(setTimeout(y),w=!0);(function(e){w||e(window).on("elementor:init",()=>{window.elementor.on("panel:init",()=>{setTimeout(y)})})})(window.jQuery);