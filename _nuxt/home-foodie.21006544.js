import{_ as u,d as a,c as f,e as l,f as c,b as s,w as v,a as g,h as b,o as h,g as k}from"./entry.e4c421d5.js";import O from"./HeaderForOffCanvas.b4c03e50.js";import x from"./OffcanvasMenu.ab48e39d.js";import{_ as T}from"./OffCanvasMobileMenu.0c9baa2b.js";import"./brook-white.f1be39a5.js";const w=""+globalThis.__publicAssetsURL("img/others/foodie_text.png"),E={components:{HeaderForOffCanvas:()=>a(()=>import("./HeaderForOffCanvas.b4c03e50.js"),["./HeaderForOffCanvas.b4c03e50.js","./entry.e4c421d5.js","./entry.82049f6f.css","./OffCanvasMobileMenu.0c9baa2b.js","./OffCanvasMobileMenu.6d8c64f5.css","./brook-white.f1be39a5.js","./HeaderForOffCanvas.2c5e4d53.css"],import.meta.url),OffcanvasMenu:()=>a(()=>import("./OffcanvasMenu.ab48e39d.js"),["./OffcanvasMenu.ab48e39d.js","./entry.e4c421d5.js","./entry.82049f6f.css","./OffCanvasMobileMenu.0c9baa2b.js","./OffCanvasMobileMenu.6d8c64f5.css","./OffcanvasMenu.afe48f24.css"],import.meta.url),OffCanvasMobileMenu:()=>a(()=>import("./OffCanvasMobileMenu.0c9baa2b.js").then(t=>t.O),["./OffCanvasMobileMenu.0c9baa2b.js","./entry.e4c421d5.js","./entry.82049f6f.css","./OffCanvasMobileMenu.6d8c64f5.css"],import.meta.url)},data(){return{navOpen:!1,fullpageOpen:!1}},mounted(){const t=document.querySelector(".background-marque");function e(){var n=0,r=1;setInterval(function(){n+=r,t.style.backgroundPositionX=-n+"px"},10)}e()},head(){return{title:"Home Foodie"}}},M={class:"main-container"},y={class:"brood-slider-area foodie-slider"},V={class:"foodie-slider-inner background-marque"},F={class:"content text-center"},C={class:"inner"},L=s("img",{src:w,alt:"Multipurpose"},null,-1),R={class:"slider-btn mt--40"},q=g('<footer id="bk-footer-area" class="page-footer pt--75 pb--40 pl--85 pr--85 pl_sm--30 pr_sm--30 pl_md--30 pr_md--30 bg_color--1"><div class="copyright_style--2"><div class="row align-items-center"><div class="col-xl-4 col-lg-6 col-sm-12 col-12"><div class="copyright-left text-center text-lg-start"><p class="bk_pra font-16 line-height-1-88 color-dark">Brook Vue Template <br> © Designed in 2023 by <strong>HasThemes</strong></p></div></div><div class="col-xl-4 col-lg-6 col-sm-12 col-12 mt_md--40 mt_sm--40"><div class="bk-copyright-center"><div class="footer-widget news-bulletin"><div class="inner text-center"><div class="link bk-hover mb--15"><h4 class="heading heading-h4"><a class="color-dark" href="mailto:brookstudio@example.com">brookstudio@example.com</a></h4></div><h6 class="heading heading-h6 letter-spacing-3 color-dark">I WOULD LOVE TO HEAR FROM YOU</h6></div></div></div></div><div class="col-xl-4 col-lg-6 col-sm-12 col-12 mt_lg--40 mt_md--40 mt_sm--40"><div class="bk-copyright-right text-center text-lg-end"><p class="bk_pra font-16 color-dark">Follow us on</p><div class="bkseparator--25"></div><ul class="social-icon icon-border-rounded style-solid-thin-rounded-icon icon-size-medium text-center text-lg-end"><li class="facebook"><a href="#" class="link"><i class="fab fa-facebook"></i></a></li><li class="twitter"><a href="#" class="link"><i class="fab fa-twitter"></i></a></li><li class="instagram"><a href="#" class="link"><i class="fab fa-instagram"></i></a></li><li class="dribbble"><a href="#" class="link"><i class="fab fa-dribbble"></i></a></li><li class="pinterest"><a href="#" class="link"><i class="fab fa-pinterest"></i></a></li></ul></div></div></div></div></footer>',1);function A(t,e,n,r,o,B){const d=O,p=x,_=T,m=b;return h(),f("div",M,[l(d,{onToggleFullpageMenu:e[0]||(e[0]=i=>o.fullpageOpen=!o.fullpageOpen),onTogglenav:e[1]||(e[1]=i=>o.navOpen=!o.navOpen)}),l(p,{class:c({"is-visiable":o.fullpageOpen}),onToggleFullpageMenu:e[2]||(e[2]=i=>o.fullpageOpen=!o.fullpageOpen)},null,8,["class"]),l(_,{class:c({"show-mobile-menu":o.navOpen}),onTogglenav:e[3]||(e[3]=i=>o.navOpen=!o.navOpen)},null,8,["class"]),s("div",y,[s("div",V,[s("div",F,[s("div",C,[L,s("div",R,[l(m,{to:"/about-us-01",class:"brook-btn bk-btn-dark btn-sd-size btn-rounded space-between"},{default:v(()=>[k("Explore Now")]),_:1})])])])])]),q])}const z=u(E,[["render",A]]);export{z as default};