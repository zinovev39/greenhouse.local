import{A as H}from"./AddonConditions.9aacd850.js";import{m as J,J as F,e as Q}from"./links.574d4fd4.js";import{C as W}from"./Blur.7f36813b.js";import{G as D,a as R}from"./Row.e7795c3e.js";import{C as O}from"./Card.e9a25031.js";import{C as I}from"./Tooltip.72f8a160.js";import{a as Y,e as K,C as X}from"./index.b1bbc091.js";import{S as tt,a as nt,b as M,c as st}from"./Affiliate.fdeb2d7c.js";import{o as r,c as f,a as m,x as o,k as p,q as B,C as e,t as h,l as s,b as k,F as A,L as T,I as P,D as y}from"./vue.runtime.esm-bundler.78401fbe.js";import{_ as L}from"./_plugin-vue_export-helper.58be9317.js";import{U as et}from"./AnimatedNumber.7d89d6e0.js";import{C as q}from"./DonutChartWithLegend.c89e3c1b.js";import"./default-i18n.3881921e.js";import{u as ot,S as it}from"./SeoSiteScore.f2154b15.js";import{C as rt}from"./Tabs.d491c719.js";import{T as U,a as N}from"./Row.4e745639.js";import{n as at}from"./numbers.c7cb4085.js";import{R as lt}from"./RequiredPlans.6ee9b196.js";import{C as V}from"./Index.b732d651.js";import"./addons.f4a19c9a.js";import"./upperFirst.1bce92c5.js";import"./_stringToArray.4de3b1f3.js";import"./toString.03aff7e6.js";import"./isArrayLikeObject.59b68b05.js";import"./Caret.89e18339.js";import"./Slide.6b2090d0.js";import"./TruSeoScore.b474bf15.js";import"./Ellipse.c78f1911.js";import"./Information.8541dc5f.js";import"./license.3fbd013a.js";import"./constants.7045f08f.js";const ct={},ut={viewBox:"0 0 19 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-link-orphaned"},_t=m("path",{d:"M13.875 3.87495H10.375V5.53745H13.875C15.3713 5.53745 16.5875 6.7537 16.5875 8.24995C16.5875 9.5012 15.73 10.5512 14.5663 10.8575L15.8438 12.135C17.27 11.4087 18.25 9.9562 18.25 8.24995C18.25 5.83495 16.29 3.87495 13.875 3.87495ZM13 7.37495H11.0838L12.8338 9.12495H13V7.37495ZM0.75 1.4862L3.47125 4.20745C2.66729 4.53457 1.97904 5.09383 1.49435 5.81385C1.00966 6.53387 0.750518 7.38199 0.75 8.24995C0.75 10.665 2.71 12.625 5.125 12.625H8.625V10.9625H5.125C3.62875 10.9625 2.4125 9.7462 2.4125 8.24995C2.4125 6.8587 3.47125 5.71245 4.8275 5.5637L6.63875 7.37495H6V9.12495H8.38875L10.375 11.1112V12.625H11.8888L15.3975 16.125L16.5 15.0225L1.86125 0.374954L0.75 1.4862Z",fill:"currentColor"},null,-1),dt=[_t];function pt(t,a){return r(),f("svg",ut,dt)}const mt=L(ct,[["render",pt]]);const ht={components:{CoreTooltip:I,SvgCircleQuestionMark:Y,SvgLinkAffiliate:tt,SvgLinkExternal:nt,SvgLinkInternalInbound:M,SvgLinkOrphaned:mt,SvgSearch:K,UtilAnimatedNumber:et},props:{type:{type:String,required:!0},count:{type:Number,required:!0}},data(){return{strings:{orphanedPostsDescription:this.$t.__("Orphaned posts are posts that have no inbound internal links yet and may be more difficult to find by search engines.",this.$td)},icons:[{type:"posts",name:this.$t.__("Posts Crawled",this.$td),icon:"svg-search"},{type:"external",name:this.$t.__("External Links",this.$td),icon:"svg-link-external"},{type:"internal",name:this.$t.__("Internal Links",this.$td),icon:"svg-link-internal-inbound"},{type:"affiliate",name:this.$t.__("Affiliate Links",this.$td),icon:"svg-link-affiliate"},{type:"orphaned",name:this.$t.__("Orphaned Posts",this.$td),icon:"svg-link-orphaned"}]}},computed:{getType(){return this.icons.find(t=>t.type===this.type)},getLink(){switch(this.type){case"posts":case"affiliate":case"internal":return"#/links-report?fullReport=1";case"external":return"#/domains-report";case"orphaned":return"#/links-report?orphaned-posts=1";default:return""}}}},kt=["href"],gt={class:"aioseo-link-count-top"},ft={class:"aioseo-link-count-bottom"},vt={class:"disabled-button gray"};function bt(t,a,i,u,n,l){const _=o("util-animated-number"),c=o("svg-circle-question-mark"),d=o("core-tooltip");return r(),f("a",{class:"aioseo-link-count",href:l.getLink},[m("div",gt,[(r(),p(B(l.getType.icon))),e(_,{number:parseInt(i.count)},null,8,["number"])]),m("div",ft,[m("span",null,h(l.getType.name),1),i.type==="orphaned"?(r(),p(d,{key:0},{tooltip:s(()=>[m("span",null,h(n.strings.orphanedPostsDescription),1)]),default:s(()=>[m("div",vt,[e(c)])]),_:1})):k("",!0)])],8,kt)}const $t=L(ht,[["render",bt]]);const Lt={components:{CoreCard:O,GridColumn:D,GridRow:R,LinkCount:$t},props:{totals:{type:Object,required:!0}}};function yt(t,a,i,u,n,l){const _=o("LinkCount"),c=o("grid-column"),d=o("grid-row"),$=o("core-card");return r(),p($,{class:"aioseo-link-assistant-statistics",slug:"internalLinksOverviewCounter",toggles:!1,"no-slide":"","hide-header":""},{default:s(()=>[e(d,null,{default:s(()=>[e(c,{class:"counter divider-right",oneFifth:""},{default:s(()=>[e(_,{type:"posts",count:i.totals.crawledPosts},null,8,["count"])]),_:1}),e(c,{class:"counter divider-right",oneFifth:""},{default:s(()=>[e(_,{type:"orphaned",count:i.totals.orphanedPosts},null,8,["count"])]),_:1}),e(c,{class:"counter divider-right",oneFifth:""},{default:s(()=>[e(_,{type:"external",count:i.totals.externalLinks},null,8,["count"])]),_:1}),e(c,{class:"counter divider-right",oneFifth:""},{default:s(()=>[e(_,{type:"internal",count:i.totals.internalLinks},null,8,["count"])]),_:1}),e(c,{class:"counter",oneFifth:""},{default:s(()=>[e(_,{type:"affiliate",count:i.totals.affiliateLinks},null,8,["count"])]),_:1})]),_:1})]),_:1})}const G=L(Lt,[["render",yt]]),wt={setup(){const{strings:t}=ot();return{composableStrings:t}},components:{CoreCard:O,CoreDonutChartWithLegend:q},mixins:[it],props:{totals:{type:Object,required:!0}},data(){return{score:0,strings:J(this.composableStrings,{header:this.$t.__("Internal vs External vs Affiliate Links",this.$td),totalLinks:this.$t.__("Total Links",this.$td),linksReportLink:this.$t.sprintf('<a href="%1$s">%2$s</a><a href="%1$s"> <span>&rarr;</span></a>',"#/links-report?fullReport=1",this.$t.__("See a Full Links Report",this.$td))})}},computed:{parts(){return[{slug:"external",name:this.$t.__("External Links",this.$td),count:this.totals.externalLinks},{slug:"affiliate",name:this.$t.__("Affiliate Links",this.$td),count:this.totals.affiliateLinks},{slug:"internal",name:this.$t.__("Internal Links",this.$td),count:this.totals.internalLinks}]},sortedParts(){const t=this.parts;return t.sort(function(a,i){return i.count>a.count?1:-1}),t[0].ratio=100,t[1].ratio=t[1].count/this.totals.totalLinks*100,t[2].ratio=t[2].count/this.totals.totalLinks*100,t.forEach(a=>{switch(a.slug){case"external":{a.color="#005AE0";break}case"internal":{a.color="#00AA63";break}case"affiliate":{a.color="#F18200";break}}}),t.filter(function(a){return a.count!==0}),t.forEach((a,i)=>(i===0||t.forEach((u,n)=>(i<n&&(a.ratio=a.ratio+u.ratio),a)),a)),t}}};function St(t,a,i,u,n,l){const _=o("core-donut-chart-with-legend"),c=o("core-card");return r(),p(c,{class:"aioseo-link-assistant-link-ratio",slug:"linkAssistantLinkRatio","no-slide":"","header-text":n.strings.header},{default:s(()=>[e(_,{parts:l.sortedParts,total:i.totals.totalLinks,label:n.strings.totalLinks,link:n.strings.linksReportLink},null,8,["parts","total","label","link"])]),_:1},8,["header-text"])}const j=L(wt,[["render",St]]);const xt={components:{CoreCard:O,CoreMainTabs:rt,CoreTooltip:I,SvgLinkInternalInbound:M,SvgLinkInternalOutbound:st,TableColumn:U,TableRow:N},props:{linkingOpportunities:{type:Array,required:!0}},data(){return{activeTab:"inbound",strings:{linkingOpportunities:this.$t.__("Linking Opportunities",this.$td),noResults:this.$t.__("No items found.",this.$td)},link:this.$t.sprintf('<a class="links-report-link" href="%1$s">%2$s</a><a href="%1$s"> <span>&rarr;</span></a>',"#/links-report?linkingOpportunities=1",this.$t.__("See All Linking Opportunities",this.$td)),tabs:[{slug:"inbound",name:this.$t.__("Inbound Suggestions",this.$td)},{slug:"outbound",name:this.$t.__("Outbound Suggestions",this.$td)}],columns:[{slug:"post-title",label:this.$t.__("Post Title",this.$td)},{slug:"suggestions-count",label:this.$t.__("Count",this.$td)}]}},computed:{opportunities(){return this.linkingOpportunities[this.activeTab]}}},Ct={class:"linking-opportunities-table"},At={class:"row"},Tt={key:0},Pt={key:1,class:"aioseo-tooltip-wrapper"},Ot=["innerHTML"],Dt={class:"row"},Rt=["href"],It={class:"count"},Bt={class:"count"},Et={key:0,class:"links-report-link"},Ht=["innerHTML"];function Ft(t,a,i,u,n,l){const _=o("core-main-tabs"),c=o("core-tooltip"),d=o("table-column"),$=o("table-row"),w=o("router-link"),g=o("core-card");return r(),p(g,{class:"aioseo-link-assistant-linking-opportunities",slug:"linkAssistantLinkOpportunities","no-slide":"","header-text":n.strings.linkingOpportunities},{tabs:s(()=>[e(_,{tabs:n.tabs,showSaveButton:!1,active:n.activeTab,onChanged:a[0]||(a[0]=v=>n.activeTab=v),internal:""},null,8,["tabs","active"])]),default:s(()=>{var v,S,x;return[m("div",null,[m("div",Ct,[(v=l.opportunities)!=null&&v.length?(r(),p($,{key:0,class:"header-row"},{default:s(()=>[(r(!0),f(A,null,T(n.columns,(b,C)=>(r(),p(d,{key:C,class:P(b.slug)},{default:s(()=>[m("div",At,[b.tooltipIcon?k("",!0):(r(),f("div",Tt,h(b.label),1)),b.tooltipIcon?(r(),f("div",Pt,[e(c,{class:"action"},{tooltip:s(()=>[m("span",{innerHTML:b.label},null,8,Ot)]),default:s(()=>[(r(),p(B(b.tooltipIcon)))]),_:2},1024)])):k("",!0)])]),_:2},1032,["class"]))),128))]),_:1})):k("",!0),(r(!0),f(A,null,T(l.opportunities,(b,C)=>(r(),p($,{key:C,class:P(["row",{even:C%2===0}])},{default:s(()=>[e(d,{class:"post-title"},{default:s(()=>[m("div",Dt,[e(c,{type:"action"},{tooltip:s(()=>[m("a",{class:"tooltip-url",href:b.permalink,target:"_blank"},h(b.postTitle),9,Rt)]),default:s(()=>[e(w,{to:{name:"links-report",query:{postTitle:b.postTitle}}},{default:s(()=>[y(h(b.postTitle),1)]),_:2},1032,["to"])]),_:2},1024)])]),_:2},1024),n.activeTab==="inbound"?(r(),p(d,{key:0,class:"internal-inbound"},{default:s(()=>[m("span",It,h(b.inboundSuggestions),1)]),_:2},1024)):k("",!0),n.activeTab==="outbound"?(r(),p(d,{key:1,class:"internal-outbound"},{default:s(()=>[m("span",Bt,h(b.outboundSuggestions),1)]),_:2},1024)):k("",!0)]),_:2},1032,["class"]))),128)),(S=l.opportunities)!=null&&S.length?k("",!0):(r(),p($,{key:1,class:"row even"},{default:s(()=>[e(d,{class:"post-title"},{default:s(()=>[y(h(n.strings.noResults),1)]),_:1})]),_:1}))]),(x=l.opportunities)!=null&&x.length?(r(),f("div",Et,[m("span",{innerHTML:n.link},null,8,Ht)])):k("",!0)])]}),_:1},8,["header-text"])}const Z=L(xt,[["render",Ft]]);const Mt={components:{CoreCard:O,CoreTooltip:I,CoreDonutChartWithLegend:q,TableColumn:U,TableRow:N},props:{totals:{type:Object,required:!0},mostLinkedDomains:{type:Array,required:!0}},data(){return{numbers:at,strings:{mostLinkedDomains:this.$t.__("Most Linked to Domains",this.$td),totalExternalLinks:this.$t.__("Total External Links",this.$td),noResults:this.$t.__("No items found.",this.$td),link:this.$t.sprintf('<a href="%1$s">%2$s</a><a href="%1$s"> <span>&rarr;</span></a>',"#/domains-report?fullReport=1",this.$t.__("See a Full Domains Report",this.$td))}}},computed:{sortedParts(){const t=this.mostLinkedDomains.map(i=>i).splice(0,3);let a=this.totals.externalLinks;return t[0]&&(t[0].color="#005AE0",t[0].ratio=100,a=a-t[0].count),t[1]&&(t[1].color="#80ACF0",t[1].ratio=t[1].count/this.totals.externalLinks*100,a=a-t[1].count),t[2]&&(t[2].color="#BFD6F7",t[2].ratio=t[2].count/this.totals.externalLinks*100,a=a-t[2].count),a&&t.push({name:this.$t.__("other domains",this.$td),color:"#E8E8EB",count:a,ratio:a/this.totals.externalLinks*100,last:!0}),t.filter(function(i){return i.count!==0}).sort(function(i,u){return parseInt(u.count)>parseInt(i.count)?1:-1}),t.forEach((i,u)=>(u===0||t.forEach((n,l)=>(u<l&&(i.ratio=i.ratio+n.ratio),i)),i)),t},columns(){return[{slug:"name",label:this.$t.__("Domain",this.$td)},{slug:"count",label:this.$t.__("# of Links",this.$td)}]}}},qt={class:"domains-table"},Ut={class:"row"},Nt=["src"],Vt=["href"],Gt=["href"];function jt(t,a,i,u,n,l){const _=o("core-donut-chart-with-legend"),c=o("table-column"),d=o("table-row"),$=o("core-tooltip"),w=o("core-card");return r(),p(w,{class:"aioseo-link-assistant-linked-domains",slug:"linkAssistantLinkedDomains","no-slide":"","header-text":n.strings.mostLinkedDomains},{default:s(()=>[e(_,{parts:l.sortedParts,total:i.totals.externalLinks,label:n.strings.totalExternalLinks,link:n.strings.link},null,8,["parts","total","label","link"]),m("div",qt,[e(d,{class:"header-row"},{default:s(()=>[(r(!0),f(A,null,T(l.columns,(g,v)=>(r(),p(c,{key:v,class:P(g.slug)},{default:s(()=>[y(h(g.label),1)]),_:2},1032,["class"]))),128))]),_:1}),(r(!0),f(A,null,T(i.mostLinkedDomains,(g,v)=>(r(),p(d,{key:v,class:P(["row",{even:v%2===0}])},{default:s(()=>[e(c,{class:"domain"},{default:s(()=>[m("div",Ut,[m("img",{alt:"Domain Favicon",class:"favicon",src:`https://www.google.com/s2/favicons?sz=32&domain=${g.name}`},null,8,Nt),e($,{type:"action"},{tooltip:s(()=>[m("a",{class:"tooltip-url",href:`https://${g.name}`,target:"_blank"},h(g.name),9,Gt)]),default:s(()=>[m("a",{class:"domain-name",href:`#/domains-report?hostname=${g.name}`},h(g.name),9,Vt)]),_:2},1024)])]),_:2},1024),e(c,{class:"count"},{default:s(()=>[m("span",null,h(n.numbers.numberFormat(g.count)),1)]),_:2},1024)]),_:2},1032,["class"]))),128)),i.mostLinkedDomains.length?k("",!0):(r(),p(d,{key:0,class:"row even"},{default:s(()=>[e(c,{class:"domain"},{default:s(()=>[y(h(n.strings.noResults),1)]),_:1})]),_:1}))])]),_:1},8,["header-text"])}const z=L(Mt,[["render",jt]]),Zt={components:{CoreBlur:W,GridColumn:D,GridRow:R,LinkCounts:G,LinkRatio:j,LinkingOpportunities:Z,MostLinkedDomains:z},props:{showTotals:{type:Boolean,default(){return!0}}},computed:{totals(){return{crawledPosts:102,externalLinks:753,internalLinks:56,affiliateLinks:175,orphanedPosts:78,totalLinks:753+56+175}},linkingOpportunities(){return[{postTitle:"Test Post Title 1",postId:"123",suggestionsInbound:"2",suggestionsOutbound:"13"},{postTitle:"Test Post Title 2",postId:"124",suggestionsInbound:"2",suggestionsOutbound:"13"},{postTitle:"Test Post Title 3",postId:"125",suggestionsInbound:"2",suggestionsOutbound:"13"},{postTitle:"Test Post Title 4",postId:"126",suggestionsInbound:"2",suggestionsOutbound:"13"},{postTitle:"Test Post Title 5",postId:"127",suggestionsInbound:"2",suggestionsOutbound:"13"}]},mostLinkedDomains(){return[{name:"aioseo.com",count:100},{name:"wpbeginner.com",count:99},{name:"wpforms.com",count:50},{name:"optinmonster.com",count:40},{name:"monsterinsights.com",count:30},{name:"smashballoon.com",count:20},{name:"exactmetrics.com",count:10},{name:"seedprod.com",count:5},{name:"awesomemotive.com",count:4},{name:"easydigitaldownloads.com",count:3}]}}};function zt(t,a,i,u,n,l){const _=o("link-counts"),c=o("grid-column"),d=o("grid-row"),$=o("link-ratio"),w=o("linking-opportunities"),g=o("most-linked-domains"),v=o("core-blur");return r(),p(v,null,{default:s(()=>[i.showTotals?(r(),p(d,{key:0,class:"overview-link-count"},{default:s(()=>[e(c,null,{default:s(()=>[e(_,{totals:l.totals},null,8,["totals"])]),_:1})]),_:1})):k("",!0),e(d,null,{default:s(()=>[e(c,{md:"6"},{default:s(()=>[e($,{totals:l.totals},null,8,["totals"]),e(w,{"linking-opportunities":l.linkingOpportunities},null,8,["linking-opportunities"])]),_:1}),e(c,{md:"6"},{default:s(()=>[e(g,{totals:l.totals,"most-linked-domains":l.mostLinkedDomains},null,8,["totals","most-linked-domains"])]),_:1})]),_:1})]),_:1})}const E=L(Zt,[["render",zt]]),Jt={setup(){return{linkAssistantStore:F()}},mixins:[H],components:{Blur:E},data(){return{addonSlug:"aioseo-link-assistant",strings:{ctaHeader:this.$t.__("Enable Link Assistant on Your Site",this.$tdPro),ctaDescription:this.$t.__("Get relevant suggestions for adding internal links to all your content as well as finding any orphaned posts that have no internal links.",this.$tdPro),linkOpportunities:this.$t.__("Actionable Link Suggestions",this.$tdPro),orphanedPosts:this.$t.__("See Orphaned Posts",this.$tdPro),affiliateLinks:this.$t.__("See Affiliate Links",this.$tdPro),domainReports:this.$t.__("Top Domain Reports",this.$tdPro)}}},computed:{ctaButtonText(){return this.shouldShowUpdate?this.$t.__("Update Link Assistant",this.$tdPro):this.$t.__("Activate Link Assistant",this.$tdPro)}},methods:{addonActivated(){this.$isPro&&this.linkAssistantStore.suggestionsScan.percent!==100&&this.linkAssistantStore.pollSuggestionsScan()}}},Qt={class:"aioseo-link-assistant-overview"};function Wt(t,a,i,u,n,l){const _=o("blur");return r(),f("div",Qt,[e(_),(r(),p(B(t.ctaComponent),{"addon-slug":n.addonSlug,"cta-header":n.strings.ctaHeader,"cta-description":n.strings.ctaDescription,"cta-button-text":l.ctaButtonText,"learn-more-text":n.strings.learnMoreText,"learn-more-link":t.$links.getDocUrl("link-assistant"),"feature-list":[n.strings.linkOpportunities,n.strings.domainReports,n.strings.orphanedPosts,n.strings.affiliateLinks],"post-activation-promises":[u.linkAssistantStore.getMenuData],onAddonActivated:l.addonActivated,"align-top":t.alignTop},null,40,["addon-slug","cta-header","cta-description","cta-button-text","learn-more-text","learn-more-link","feature-list","post-activation-promises","onAddonActivated","align-top"]))])}const Yt=L(Jt,[["render",Wt]]),Kt={setup(){return{licenseStore:Q()}},components:{Blur:E,RequiredPlans:lt,Cta:V},data(){return{strings:{ctaButtonText:this.$t.__("Unlock Link Assistant",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Link Assistant is a %1$s Feature",this.$td),"PRO"),linkAssistantDescription:this.$t.__("Get relevant suggestions for adding internal links to all your content as well as finding any orphaned posts that have no internal links.",this.$td),linkOpportunities:this.$t.__("Actionable Link Suggestions",this.$td),orphanedPosts:this.$t.__("See Orphaned Posts",this.$td),affiliateLinks:this.$t.__("See Affiliate Links",this.$td),domainReports:this.$t.__("Top Domain Reports",this.$td)}}}},Xt={class:"aioseo-link-assistant-overview"};function tn(t,a,i,u,n,l){const _=o("blur"),c=o("required-plans"),d=o("cta");return r(),f("div",Xt,[e(_),e(d,{class:"aioseo-link-assistant-cta","cta-link":t.$links.getPricingUrl("link-assistant","link-assistant-upsell","overview"),"button-text":n.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("link-assistant","overview",t.$isPro?"pricing":"liteUpgrade"),"feature-list":[n.strings.linkOpportunities,n.strings.domainReports,n.strings.orphanedPosts,n.strings.affiliateLinks],"align-top":"","hide-bonus":!u.licenseStore.isUnlicensed},{"header-text":s(()=>[y(h(n.strings.ctaHeader),1)]),description:s(()=>[e(c,{addon:"aioseo-link-assistant"}),y(" "+h(n.strings.linkAssistantDescription),1)]),_:1},8,["cta-link","button-text","learn-more-link","feature-list","hide-bonus"])])}const nn=L(Kt,[["render",tn]]);const sn={setup(){return{linkAssistantStore:F()}},components:{Blur:E,CoreAlert:X,Cta:V,GridColumn:D,GridRow:R,LinkCounts:G,LinkRatio:j,LinkingOpportunities:Z,MostLinkedDomains:z},data(){return{strings:{ctaHeader:this.$t.__("No posts have been crawled yet",this.$tdPro),ctaButtonText:this.$t.__("Scan Now",this.$tdPro),ctaDescription:this.$t.__("Link Assistant scans your website for links and suggestions in the background. Click the button below to start a scan and pull in your first results.",this.$tdPro)},failed:!1,scanRunning:!1}},methods:{doTriggerScan(){this.failed=!1,this.scanRunning=!0,this.linkAssistantStore.triggerScan().finally(()=>{this.scanRunning=!1})}}},en={key:0},on={key:1};function rn(t,a,i,u,n,l){const _=o("link-counts"),c=o("grid-column"),d=o("grid-row"),$=o("link-ratio"),w=o("linking-opportunities"),g=o("most-linked-domains"),v=o("blur"),S=o("core-alert"),x=o("cta");return r(),f("div",null,[e(d,{class:"overview-link-count"},{default:s(()=>[e(c,null,{default:s(()=>[e(_,{totals:u.linkAssistantStore.overview.totals},null,8,["totals"])]),_:1})]),_:1}),u.linkAssistantStore.overview.totals.crawledPosts?(r(),f("div",en,[e(d,null,{default:s(()=>[e(c,{md:"6"},{default:s(()=>[e($,{totals:u.linkAssistantStore.overview.totals},null,8,["totals"]),e(w,{"linking-opportunities":u.linkAssistantStore.overview.linkingOpportunities},null,8,["linking-opportunities"])]),_:1}),e(c,{md:"6"},{default:s(()=>[e(g,{totals:u.linkAssistantStore.overview.totals,"most-linked-domains":u.linkAssistantStore.overview.mostLinkedDomains},null,8,["totals","most-linked-domains"])]),_:1})]),_:1})])):k("",!0),u.linkAssistantStore.overview.totals.crawledPosts?k("",!0):(r(),f("div",on,[e(v,{"show-totals":!1}),e(x,{class:"cta-first-scan","cta-button-action":"","same-tab":"",hideBonus:!0,"button-text":n.strings.ctaButtonText,"cta-button-loading":n.scanRunning,onCtaButtonClick:l.doTriggerScan},{"header-text":s(()=>[y(h(n.strings.ctaHeader),1)]),description:s(()=>[n.failed?(r(),p(S,{key:0,type:"red"},{default:s(()=>[y(h(n.strings.activateError),1)]),_:1})):k("",!0),y(" "+h(n.strings.ctaDescription),1)]),"learn-more-text":s(()=>[y(h(n.strings.learnMoreText),1)]),_:1},8,["button-text","cta-button-loading","onCtaButtonClick"])]))])}const an=L(sn,[["render",rn]]),ln={mixins:[H],components:{Cta:Yt,Lite:nn,Overview:an},data(){return{addonSlug:"aioseo-link-assistant"}}},cn={class:"aioseo-link-assistant-overview"};function un(t,a,i,u,n,l){const _=o("overview",!0),c=o("cta"),d=o("lite");return r(),f("div",cn,[t.shouldShowMain?(r(),p(_,{key:0})):k("",!0),t.shouldShowUpdate||t.shouldShowActivate?(r(),p(c,{key:1})):k("",!0),t.shouldShowLite?(r(),p(d,{key:2})):k("",!0)])}const Nn=L(ln,[["render",un]]);export{Nn as default};
