import{_ as O,d as r,r as p,c as l,e as n,f as d,b as e,w as c,a as x,h as k,o as _,F as T,i as S,j as E,g as V,p as P,k as I}from"./entry.e4c421d5.js";import A from"./HeaderAbout.65848c40.js";import{_ as C}from"./OffCanvasMobileMenu.0c9baa2b.js";import M from"./SearchPopup.770988b6.js";import L from"./TeamMemberTwo.a9780f72.js";import{_ as F}from"./FooterTwo.fd8c850b.js";import{d as N}from"./team.647b144b.js";import{S as D,a as R,b as y}from"./swiper-slide.3b11f568.js";import{N as B}from"./navigation.068c3e00.js";import"./create-element-if-not-defined.c0fdc557.js";D.use([B]);const z={components:{Swiper:R,SwiperSlide:y,HeaderAbout:()=>r(()=>import("./HeaderAbout.65848c40.js"),["./HeaderAbout.65848c40.js","./entry.e4c421d5.js","./entry.82049f6f.css","./OffCanvasMobileMenu.0c9baa2b.js","./OffCanvasMobileMenu.6d8c64f5.css","./HeaderAbout.52ea5052.css"],import.meta.url),OffCanvasMobileMenu:()=>r(()=>import("./OffCanvasMobileMenu.0c9baa2b.js").then(t=>t.O),["./OffCanvasMobileMenu.0c9baa2b.js","./entry.e4c421d5.js","./entry.82049f6f.css","./OffCanvasMobileMenu.6d8c64f5.css"],import.meta.url),SearchPopup:()=>r(()=>import("./SearchPopup.770988b6.js"),["./SearchPopup.770988b6.js","./entry.e4c421d5.js","./entry.82049f6f.css","./OffCanvasMobileMenu.0c9baa2b.js","./OffCanvasMobileMenu.6d8c64f5.css"],import.meta.url),TeamMemberTwo:()=>r(()=>import("./TeamMemberTwo.a9780f72.js"),["./TeamMemberTwo.a9780f72.js","./entry.e4c421d5.js","./entry.82049f6f.css"],import.meta.url),FooterTwo:()=>r(()=>import("./FooterTwo.fd8c850b.js").then(t=>t.F),["./FooterTwo.fd8c850b.js","./entry.e4c421d5.js","./entry.82049f6f.css"],import.meta.url)},data(){return{data:N,navOpen:!1,searchOpen:!1,swiperOptions:{navigation:{nextEl:".ht-swiper-button",prevEl:".ht-swiper-button"},breakpoints:{992:{slidesPerView:3},768:{slidesPerView:2},300:{slidesPerView:1}}}}},mounted(){document.body.classList.add("template-color-1","template-font-1")},head(){return{title:"Team Carousel 01"}}},i=t=>(P("data-v-c480c50f"),t=t(),I(),t),H={class:"main-container"},j=x('<div class="brook-breadcrumb-area pt--130 pb--145 bg_color--1 breadcrumb-title-bar" data-v-c480c50f><div class="container-fluid plr--150 plr_md--50 plr_sm--20" data-v-c480c50f><div class="row" data-v-c480c50f><div class="col-lg-12" data-v-c480c50f><div class="breadcrumb-inner text-center" data-v-c480c50f><h1 class="heading heading-h1 line-height-1-5" data-v-c480c50f>The A-team of <span class="theme-color" data-v-c480c50f>awesomeness</span><br data-v-c480c50f> &amp; creative people</h1></div></div></div></div></div>',1),q={class:"brook-team-area bg_color--1 swiper-arrow-hover"},G={class:"container"},J={class:"row"},K={class:"col-lg-12"},Q={class:"brook-element-carousel"},U=i(()=>e("div",{class:"ht-swiper-button ht-swiper-button-prev"},[e("i",{class:"ion ion-ios-arrow-back"})],-1)),W=i(()=>e("div",{class:"ht-swiper-button ht-swiper-button-next"},[e("i",{class:"ion ion-ios-arrow-forward"})],-1)),X={class:"brook-call-to-action bg_color--1 ptb--120 ptb-md--80 ptb-sm--60"},Y={class:"container"},Z={class:"row align-items-center"},$={class:"col-lg-12 col-12"},ee={class:"call-content vertical-call-toaction text-center"},oe=i(()=>e("h3",{class:"heading heading-h3"},"Start working together?",-1)),te=i(()=>e("div",{class:"spacing"},null,-1)),se={class:"call-btn text-center"};function ne(t,s,ae,re,o,ie){const m=A,v=C,u=M,h=L,b=p("swiper-slide"),f=p("swiper"),w=k,g=F;return _(),l("div",H,[n(m,{onTogglenav:s[0]||(s[0]=a=>o.navOpen=!o.navOpen),onToggleSearch:s[1]||(s[1]=a=>o.searchOpen=!o.searchOpen)}),n(v,{class:d({"show-mobile-menu":o.navOpen}),onTogglenav:s[2]||(s[2]=a=>o.navOpen=!o.navOpen)},null,8,["class"]),n(u,{class:d({"search-popup-open":o.searchOpen}),onToggleSearch:s[3]||(s[3]=a=>o.searchOpen=!o.searchOpen)},null,8,["class"]),j,e("div",q,[e("div",G,[e("div",J,[e("div",K,[e("div",Q,[n(f,{speed:1e3,"space-between":20,loop:!0,breakpoints:o.swiperOptions.breakpoints,navigation:o.swiperOptions.navigation},{default:c(()=>[(_(!0),l(T,null,S(o.data.teamMembers.slice(7,10),a=>(_(),E(b,{key:a.id},{default:c(()=>[n(h,{teamMember:a},null,8,["teamMember"])]),_:2},1024))),128)),U,W]),_:1},8,["breakpoints","navigation"])])])])])]),e("div",X,[e("div",Y,[e("div",Z,[e("div",$,[e("div",ee,[oe,te,e("div",se,[n(w,{to:"/contact-us-modern",class:"brook-btn bk-btn-theme text-theme btn-sd-size btn-rounded"},{default:c(()=>[V("Find out more")]),_:1})])])])])])]),n(g)])}const fe=O(z,[["render",ne],["__scopeId","data-v-c480c50f"]]);export{fe as default};