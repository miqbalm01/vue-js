import{_ as l,o as r,c,b as e,e as _,w as h,f as p,h as f,p as m,k as u}from"./entry.e4c421d5.js";import{a as v}from"./OffCanvasMobileMenu.0c9baa2b.js";import{_ as g}from"./brook-white.f1be39a5.js";const k={components:{Navigation:v},props:["addClass"],data(){return{isSticky:!1}},mounted(){window.addEventListener("scroll",()=>{window.scrollY>=200?this.isSticky=!0:this.isSticky=!1})}},t=o=>(m("data-v-6f7bfaec"),o=o(),u(),o),x={class:"container-fluid"},b={class:"row"},w={class:"col-12"},C={class:"header__wrapper"},y={class:"header-left"},S={class:"logo"},$=t(()=>e("img",{src:g,alt:"Brook Logo"},null,-1)),B={class:"header-right"},I=t(()=>e("div",null,[e("i")],-1)),F=[I],N=t(()=>e("div",null,[e("i")],-1)),E=[N];function L(o,s,a,P,i,V){const d=f;return r(),c("header",{class:p(["br_header header-default header-transparent header-bar position-from--top light-logo--version haeder-fixed-width haeder-fixed-150 headroom--sticky header-mega-menu clearfix",{"vue-fixed-header--isFixed":i.isSticky,addClass:a.addClass}])},[e("div",x,[e("div",b,[e("div",w,[e("div",C,[e("div",y,[e("div",S,[_(d,{to:"/"},{default:h(()=>[$]),_:1})])]),e("div",B,[e("div",{class:"manu-hamber hamberger-trigger light-version d-none d-xl-block",onClick:s[0]||(s[0]=n=>o.$emit("toggleFullpageMenu"))},F),e("div",{class:"manu-hamber popup-mobile-click d-block light-version d-block d-xl-none",onClick:s[1]||(s[1]=n=>o.$emit("togglenav"))},E)])])])])])],2)}const O=l(k,[["render",L],["__scopeId","data-v-6f7bfaec"]]);export{O as default};