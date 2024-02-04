import{_ as b}from"./ScoreButton.73d3e72f.js";import{A as D}from"./App.474ab62f.js";import{S as $}from"./Caret.89e18339.js";import{o as n,c as r,m as p,b as c,x as i,k as _,l as w,a as s,I as M,H as S,t as x,C as m}from"./vue.runtime.esm-bundler.78401fbe.js";import{_ as g}from"./_plugin-vue_export-helper.58be9317.js";const k={props:{completelyDraggable:{type:Boolean,default(){return!0}}},data(){return{position1:0,position2:0,position3:0,position4:0}},methods:{dragMouseDown(e){e=e||window.event,e.preventDefault(),this.position3=e.clientX,this.position4=e.clientY,document.onmousemove=this.elementDrag,document.onmouseup=this.closeDragElement},elementDrag(e){e=e||window.event,e.preventDefault(),this.position1=this.position3-e.clientX,this.position2=this.position4-e.clientY,this.position3=e.clientX,this.position4=e.clientY,this.$el.style.top=this.$el.offsetTop-this.position2+"px",this.$el.style.left=this.$el.offsetLeft-this.position1+"px"},closeDragElement(){document.onmouseup=null,document.onmousemove=null}}},C={class:"aioseo-draggable"},B={key:1};function A(e,o,t,f,d,a){return n(),r("div",C,[t.completelyDraggable?(n(),r("div",{key:0,"on:dragMouseDown":o[0]||(o[0]=(...l)=>a.dragMouseDown&&a.dragMouseDown(...l))},[p(e.$slots,"default")],32)):c("",!0),t.completelyDraggable?c("",!0):(n(),r("div",B,[p(e.$slots,"default")]))])}const O=g(k,[["render",A]]);const E={emits:["update:is-open"],components:{CoreScoreButton:b,PostSettings:D,SvgClose:$,UtilDraggable:O},props:{isOpen:{type:Boolean,default:!1},score:{type:Number,default:0}},data(){return{strings:{header:this.$t.sprintf(this.$t.__("%1$s Settings",this.$td),"AIOSEO")}}},methods:{toggleModal(){this.isOpen=!this.isOpen}}},N={class:"aioseo-pagebuilder-modal-header-title"},P={class:"aioseo-pagebuilder-modal-body edit-post-sidebar"};function I(e,o,t,f,d,a){const l=i("core-score-button"),h=i("svg-close"),v=i("PostSettings"),y=i("util-draggable");return n(),_(y,{ref:"modal-container",completelyDraggable:!1},{default:w(()=>[s("div",{class:M(["aioseo-pagebuilder-modal",{"aioseo-pagebuilder-modal-is-closed":!t.isOpen}])},[s("div",{class:"aioseo-pagebuilder-modal-header",onMousedown:o[1]||(o[1]=S(u=>e.$refs["modal-container"].dragMouseDown(u),["prevent"]))},[s("div",N,x(d.strings.header),1),t.score?(n(),_(l,{key:0,score:t.score,class:"aioseo-score-button--active"},null,8,["score"])):c("",!0),s("div",{class:"aioseo-pagebuilder-modal-header-close",onClick:o[0]||(o[0]=u=>e.$emit("update:is-open",!1))},[m(h)])],32),s("div",P,[m(v)])],2)]),_:1},512)}const z=g(E,[["render",I],["__scopeId","data-v-47eed933"]]);export{z as M};
