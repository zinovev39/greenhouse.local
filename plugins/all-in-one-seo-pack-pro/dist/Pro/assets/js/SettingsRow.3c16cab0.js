import{G as _,a as g}from"./Row.e7795c3e.js";import{x as l,o as t,k as f,l as a,m as o,C as c,a as s,I as r,D as p,t as y,c as u,b as d}from"./vue.runtime.esm-bundler.78401fbe.js";import{_ as S}from"./_plugin-vue_export-helper.58be9317.js";const B={components:{GridColumn:_,GridRow:g},props:{align:Boolean,alignSmall:Boolean,name:String,required:Boolean,noHorizontalMargin:{type:Boolean,default:!1},noVerticalMargin:{type:Boolean,default:!1},noBorder:{type:Boolean,default:!1},leftSize:{type:String,default(){return"3"}},rightSize:{type:String,default(){return"9"}}}},h={key:0,class:"required-field"},v={key:0,class:"aioseo-description"},z={class:"settings-content"};function C(n,w,e,k,V,x){const i=l("grid-column"),m=l("grid-row");return t(),f(m,{class:r(["aioseo-settings-row",{"no-horizontal-margin":e.noHorizontalMargin,"no-vertical-margin":e.noVerticalMargin,"no-border":e.noBorder}])},{default:a(()=>[o(n.$slots,"header"),c(i,{md:e.leftSize},{default:a(()=>[s("div",{class:r(["settings-name",{"no-name":!e.name}])},[s("div",{class:r(["name",[{align:e.align},{"align-small":e.alignSmall}]])},[o(n.$slots,"name",{},()=>[p(y(e.name)+" ",1),e.required?(t(),u("span",h," * ")):d("",!0)])],2),n.$slots.description?(t(),u("div",v,[o(n.$slots,"description")])):d("",!0)],2)]),_:3},8,["md"]),c(i,{md:e.rightSize},{default:a(()=>[s("div",z,[o(n.$slots,"content")])]),_:3},8,["md"])]),_:3},8,["class"])}const q=S(B,[["render",C]]);export{q as C};
