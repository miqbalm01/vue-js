import{_ as l,d as t,o as _,c as p,b as i,F as P,i as b,e as n,r as h,f as a}from"./entry.e4c421d5.js";import x from"./HeaderElement.d5db07f5.js";import{_ as T}from"./OffCanvasMobileMenu.0c9baa2b.js";import I from"./SearchPopup.770988b6.js";import L from"./Breadcrumb.d7ab5343.js";import{_ as V}from"./FooterTwo.fd8c850b.js";import B from"./PricingItemStyleOne.e3baf78e.js";import{d as A}from"./pricing.15b3c3f1.js";const D={components:{PricingItemStyleOne:()=>t(()=>import("./PricingItemStyleOne.e3baf78e.js"),["./PricingItemStyleOne.e3baf78e.js","./entry.e4c421d5.js","./entry.82049f6f.css"],import.meta.url)},data(){return{data:A}}},R={class:"brook-pricing-table-area ptb--150 ptb-md--80 ptb-sm--60 bg_color--5"},S={class:"container"},w={class:"row mtn--40"};function y(r,o,u,d,e,v){const m=B;return _(),p("div",R,[i("div",S,[i("div",w,[(_(!0),p(P,null,b(e.data.pricingItems,s=>(_(),p("div",{class:"col-lg-4 col-md-6 mt--40",key:s.id},[n(m,{pricing:s},null,8,["pricing"])]))),128))])])])}const F=l(D,[["render",y]]),k={components:{HeaderElement:()=>t(()=>import("./HeaderElement.d5db07f5.js"),["./HeaderElement.d5db07f5.js","./entry.e4c421d5.js","./entry.82049f6f.css","./OffCanvasMobileMenu.0c9baa2b.js","./OffCanvasMobileMenu.6d8c64f5.css","./FooterTwo.fd8c850b.js","./HeaderElement.a675b77b.css"],import.meta.url),OffCanvasMobileMenu:()=>t(()=>import("./OffCanvasMobileMenu.0c9baa2b.js").then(r=>r.O),["./OffCanvasMobileMenu.0c9baa2b.js","./entry.e4c421d5.js","./entry.82049f6f.css","./OffCanvasMobileMenu.6d8c64f5.css"],import.meta.url),SearchPopup:()=>t(()=>import("./SearchPopup.770988b6.js"),["./SearchPopup.770988b6.js","./entry.e4c421d5.js","./entry.82049f6f.css","./OffCanvasMobileMenu.0c9baa2b.js","./OffCanvasMobileMenu.6d8c64f5.css"],import.meta.url),Breadcrumb:()=>t(()=>import("./Breadcrumb.d7ab5343.js"),["./Breadcrumb.d7ab5343.js","./entry.e4c421d5.js","./entry.82049f6f.css"],import.meta.url),PricingOne:F,FooterTwo:()=>t(()=>import("./FooterTwo.fd8c850b.js").then(r=>r.F),["./FooterTwo.fd8c850b.js","./entry.e4c421d5.js","./entry.82049f6f.css"],import.meta.url)},data(){return{navOpen:!1,searchOpen:!1}},mounted(){document.body.classList.add("template-color-1","template-font-1")},unmounted(){document.body.classList.remove("template-color-1","template-font-1")}},C={class:"main-wrapper"};function M(r,o,u,d,e,v){const m=x,s=T,O=I,f=L,g=h("PricingOne"),E=V;return _(),p("div",C,[n(m,{onTogglenav:o[0]||(o[0]=c=>e.navOpen=!e.navOpen),onToggleSearch:o[1]||(o[1]=c=>e.searchOpen=!e.searchOpen)}),n(s,{class:a({"show-mobile-menu":e.navOpen}),onTogglenav:o[2]||(o[2]=c=>e.navOpen=!e.navOpen)},null,8,["class"]),n(O,{class:a({"search-popup-open":e.searchOpen}),onToggleSearch:o[3]||(o[3]=c=>e.searchOpen=!e.searchOpen)},null,8,["class"]),n(f,{title:"Pricing Boxes"}),n(g),n(E)])}const K=l(k,[["render",M]]);export{K as default};
