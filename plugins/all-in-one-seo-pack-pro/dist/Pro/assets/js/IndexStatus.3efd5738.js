import{o,c as i,a as h,f as _,F as L,L as D,t as m,k as l,q as R,I as C,u as a,b as w,l as k,C as v}from"./vue.runtime.esm-bundler.78401fbe.js";import{_ as e,s as S}from"./default-i18n.3881921e.js";import{S as g,C as T}from"./Caret.89e18339.js";import{C as A}from"./Tooltip.72f8a160.js";import{c as O,F as y}from"./links.574d4fd4.js";import{S as N}from"./Calendar.85c26920.js";import{S as B,a as U}from"./Mobile.cd72190d.js";import{S as f}from"./Checkmark.68b20c77.js";import{_ as P}from"./_plugin-vue_export-helper.58be9317.js";import{S as x}from"./Link.56f52bd8.js";import{S as F}from"./CheckSolid.799a4b9e.js";import{S as $}from"./CloseSolid.c84a342c.js";const G={},M={viewBox:"0 0 30 30",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-circle-exclamation-solid"},V=h("path",{d:"M 15.0005 2.84 C 8.1005 2.84 2.5005 8.44 2.5005 15.34 C 2.5005 22.24 8.1005 27.84 15.0005 27.84 C 21.9005 27.84 27.5005 22.24 27.5005 15.34 C 27.5005 8.44 21.9005 2.84 15.0005 2.84 Z M 16.2505 21.59 H 13.7505 V 19.09 H 16.2505 V 21.6 Z M 16.2505 16.59 H 13.7505 V 9.09 H 16.2505 V 16.59 Z"},null,-1),H=[V];function K(r,u){return o(),i("svg",M,H)}const I=P(G,[["render",K]]),t="all-in-one-seo-pack",X=()=>{const r=O();return{items:[{title:e("Index Status:",t),key:"verdict",description:e("Indicates the index status of the page in Search Statistics. This is the verdict result for the analysis.",t),getIcon:s=>{switch(s){case"PASS":return f;case"NEUTRAL":case"PARTIAL":return I;case"VERDICT_UNSPECIFIED":case"FAIL":default:return g}},getDescription:(s,{resultLink:n})=>{switch(s){case"PASS":return e("The page is indexed.",t);case"NEUTRAL":return S(e("The page has not been indexed. Please check %1$sGoogle Search Console%2$s for more details.",t),'<a href="'+n+'" target="_blank">',"</a>");case"FAIL":case"VERDICT_UNSPECIFIED":case"PARTIAL":default:return S(e("The page is invalid or has errors. Please check %1$sGoogle Search Console%2$s for more details.",t),'<a href="'+n+'" target="_blank">',"</a>")}}},{title:e("Last Crawl:",t),key:"lastCrawlTime",description:e("This shows the date and time when Google's crawler (Googlebot) last visited and crawled the page.",t),getIcon:()=>N,getDescription:s=>{if(!s)return e("Never",t);const n=new Date(s),d=y(n,r.aioseo.data.dateFormat),p=y(n,r.aioseo.data.timeFormat);return`${d}, ${p}`}},{title:e("Crawled As:",t),key:"crawledAs",description:e("Indicates whether Google crawled the page as a mobile or desktop user agent. This is important because Google uses mobile-first indexing for most websites.",t),getIcon:s=>s==="DESKTOP"?B:U,getDescription:s=>{switch(s){case"DESKTOP":return e("Desktop user agent",t);case"MOBILE":return e("Mobile user agent",t);default:return e("Unknown user agent",t)}}},{title:e("Crawl Allowed?",t),key:"robotsTxtState",description:e("This specifies whether your website's robots.txt file allows Googlebot to crawl the page.",t),getIcon:s=>s==="ALLOWED"?f:g,getDescription:s=>{switch(s){case"ALLOWED":return e("Crawl allowed by robots.txt",t);case"DISALLOWED":return e("Crawl blocked by robots.txt",t);default:return e("Unknown robots.txt state, typically because the page wasn't fetched or found, or because robots.txt itself couldn't be reached",t)}}},{title:e("Indexing Allowed?",t),key:"indexingState",description:e("This specifies whether your website's robots meta tag allows Googlebot to index the page.",t),getIcon:s=>s==="INDEXING_ALLOWED"?f:g,getDescription:s=>{switch(s){case"INDEXING_ALLOWED":return e("Indexing allowed",t);case"BLOCKED_BY_META_TAG":return e("Indexing not allowed, 'noindex' detected in 'robots' meta tag",t);case"BLOCKED_BY_HTTP_HEADER":return e("Indexing not allowed, 'noindex' detected in 'X-Robots-Tag' http header",t);case"BLOCKED_BY_ROBOTS_TXT":return e("Reserved, no longer in use",t);default:return e("Unknown indexing status",t)}}},{title:e("Page Fetch:",t),key:"pageFetchState",description:e("Indicates whether Google successfully fetched the page during its last visit.",t),getIcon:s=>s==="SUCCESSFUL"?f:g,getDescription:s=>{switch(s){case"SUCCESSFUL":return e("Successful fetch",t);case"SOFT_404":return e("Soft 404",t);case"BLOCKED_ROBOTS_TXT":return e("Blocked by robots.txt",t);case"NOT_FOUND":return e("Not found (404)",t);case"ACCESS_DENIED":return e("Blocked due to unauthorized request (401)",t);case"SERVER_ERROR":return e("Server error (5xx)",t);case"REDIRECT_ERROR":return e("Redirection error",t);case"ACCESS_FORBIDDEN":return e("Blocked due to access forbidden (403)",t);case"BLOCKED_4XX":return e("Blocked due to other 4xx issue (not 403, 404)",t);case"INTERNAL_CRAWL_ERROR":return e("Internal error",t);case"INVALID_URL":return e("Invalid URL",t);default:return e("Unknown fetch state",t)}}},{title:e("User-Declared Canonical:",t),key:"userCanonical",description:e("Shows the canonical URL specified by you (the website owner). Canonical URLs help indicate the preferred version of a page, especially for duplicate content.",t),getIcon:()=>x,getDescription:s=>s?`<a href="${s}" target="_blank">${s}</a>`:e("None",t)},{title:e("Google-Selected Canonical:",t),key:"googleCanonical",description:e("Reveals the canonical URL chosen by Googlebot. Sometimes, Googlebot may select a different canonical URL than the user-declared one.",t),getIcon:()=>x,getDescription:s=>s?`<a href="${s}" target="_blank" title=${s}>${s}</a>`:e("None",t)}]}};const W={class:"aioseo-index-status-result"},j={key:0},Y={class:"aioseo-index-status-result__row-title"},Z=["innerHTML"],q={key:1},z={__name:"IndexStatusResult",props:{result:{type:Object,default(){return{}}},resultLink:{type:String,default:""},errorMessage:{type:String,default:""}},setup(r){const u="all-in-one-seo-pack",s=r,{items:n}=X(),d=_(()=>s.errorMessage?s.errorMessage:e("Oops! It looks like something went wrong while loading the results for this page. Please try again by refreshing the page.",u));return(p,b)=>(o(),i("div",W,[r.result.verdict?(o(),i("div",j,[(o(!0),i(L,null,D(a(n),(c,E)=>(o(),i("div",{class:"aioseo-index-status-result__row",key:E},[h("div",Y,m(c.title),1),h("div",{class:C(["aioseo-index-status-result__row-description",c.key])},[(o(),l(R(c.getIcon(r.result[c.key])))),h("span",{innerHTML:c.getDescription(r.result[c.key],{resultLink:r.resultLink})},null,8,Z)],2)]))),128))])):(o(),i("div",q,m(d.value),1))]))}};const ue={__name:"IndexStatus",props:{loading:{type:Boolean,default:!1},result:{type:Object,default(){return{}}},resultLink:{type:String,default:""},tooltipOffset:{type:String,default(){return"0,0"}},viewable:{type:Boolean,default:!0}},setup(r){const u="all-in-one-seo-pack",s=r,n=_(()=>{if(!s.viewable)return"exclamation";switch(s.result.verdict){case"PASS":return"check";case"NEUTRAL":case"PARTIAL":return"exclamation";case"VERDICT_UNSPECIFIED":case"FAIL":default:return"close"}}),d=_(()=>s.viewable?"":S(e("This page is not published so its index status cannot be determined. %1$s will determine the index status as soon as the page is published.",u),"AIOSEO"));return(p,b)=>(o(),i("div",{class:C(["aioseo-index-status",[r.viewable?"aioseo-index-status--viewable":"aioseo-index-status--not-viewable"]]),key:r.resultLink},[r.loading?(o(),l(a(T),{key:0,dark:""})):w("",!0),r.loading?w("",!0):(o(),l(a(A),{key:1,flip:"",offset:r.tooltipOffset},{tooltip:k(()=>[v(a(z),{result:r.result,"result-link":r.resultLink,"error-message":d.value},null,8,["result","result-link","error-message"])]),default:k(()=>[n.value==="check"?(o(),l(a(F),{key:0})):n.value==="close"?(o(),l(a($),{key:1})):(o(),l(a(I),{key:2}))]),_:1},8,["offset"]))],2))}};export{ue as _,z as a,X as u};
