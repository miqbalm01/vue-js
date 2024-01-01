import{_ as R,d as M,r as V,c as z,e as m,f as H,b as e,w as T,o as j,g as E}from"./entry.e4c421d5.js";import q from"./HeaderForOffCanvasBlack.f0e7b071.js";import K from"./OffcanvasMenu.ab48e39d.js";import{_ as Z}from"./OffCanvasMobileMenu.0c9baa2b.js";import J from"./SearchPopup.770988b6.js";import{c as Q,$ as W,n as G,d as O,S as $,a as ee,b as se}from"./swiper-slide.3b11f568.js";import{P as te}from"./pagination.137a0410.js";import"./create-element-if-not-defined.c0fdc557.js";function ae({swiper:s,extendParams:c,on:y,emit:w}){const r=Q();c({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null}}),s.mousewheel={enabled:!1};let _,k=O(),u;const i=[];function I(t){let h=0,a=0,d=0,l=0;return"detail"in t&&(a=t.detail),"wheelDelta"in t&&(a=-t.wheelDelta/120),"wheelDeltaY"in t&&(a=-t.wheelDeltaY/120),"wheelDeltaX"in t&&(h=-t.wheelDeltaX/120),"axis"in t&&t.axis===t.HORIZONTAL_AXIS&&(h=a,a=0),d=h*10,l=a*10,"deltaY"in t&&(l=t.deltaY),"deltaX"in t&&(d=t.deltaX),t.shiftKey&&!d&&(d=l,l=0),(d||l)&&t.deltaMode&&(t.deltaMode===1?(d*=40,l*=40):(d*=800,l*=800)),d&&!h&&(h=d<1?-1:1),l&&!a&&(a=l<1?-1:1),{spinX:h,spinY:a,pixelX:d,pixelY:l}}function f(){s.enabled&&(s.mouseEntered=!0)}function P(){s.enabled&&(s.mouseEntered=!1)}function p(t){return s.params.mousewheel.thresholdDelta&&t.delta<s.params.mousewheel.thresholdDelta||s.params.mousewheel.thresholdTime&&O()-k<s.params.mousewheel.thresholdTime?!1:t.delta>=6&&O()-k<60?!0:(t.direction<0?(!s.isEnd||s.params.loop)&&!s.animating&&(s.slideNext(),w("scroll",t.raw)):(!s.isBeginning||s.params.loop)&&!s.animating&&(s.slidePrev(),w("scroll",t.raw)),k=new r.Date().getTime(),!1)}function N(t){const n=s.params.mousewheel;if(t.direction<0){if(s.isEnd&&!s.params.loop&&n.releaseOnEdges)return!0}else if(s.isBeginning&&!s.params.loop&&n.releaseOnEdges)return!0;return!1}function S(t){let n=t,A=!0;if(!s.enabled)return;const b=s.params.mousewheel;s.params.cssMode&&n.preventDefault();let h=s.$el;if(s.params.mousewheel.eventsTarget!=="container"&&(h=W(s.params.mousewheel.eventsTarget)),!s.mouseEntered&&!h[0].contains(n.target)&&!b.releaseOnEdges)return!0;n.originalEvent&&(n=n.originalEvent);let a=0;const d=s.rtlTranslate?-1:1,l=I(n);if(b.forceToAxis)if(s.isHorizontal())if(Math.abs(l.pixelX)>Math.abs(l.pixelY))a=-l.pixelX*d;else return!0;else if(Math.abs(l.pixelY)>Math.abs(l.pixelX))a=-l.pixelY;else return!0;else a=Math.abs(l.pixelX)>Math.abs(l.pixelY)?-l.pixelX*d:-l.pixelY;if(a===0)return!0;b.invert&&(a=-a);let x=s.getTranslate()+a*b.sensitivity;if(x>=s.minTranslate()&&(x=s.minTranslate()),x<=s.maxTranslate()&&(x=s.maxTranslate()),A=s.params.loop?!0:!(x===s.minTranslate()||x===s.maxTranslate()),A&&s.params.nested&&n.stopPropagation(),!s.params.freeMode||!s.params.freeMode.enabled){const o={time:O(),delta:Math.abs(a),direction:Math.sign(a),raw:t};i.length>=2&&i.shift();const g=i.length?i[i.length-1]:void 0;if(i.push(o),g?(o.direction!==g.direction||o.delta>g.delta||o.time>g.time+150)&&p(o):p(o),N(o))return!0}else{const o={time:O(),delta:Math.abs(a),direction:Math.sign(a)},g=u&&o.time<u.time+500&&o.delta<=u.delta&&o.direction===u.direction;if(!g){u=void 0,s.params.loop&&s.loopFix();let v=s.getTranslate()+a*b.sensitivity;const U=s.isBeginning,F=s.isEnd;if(v>=s.minTranslate()&&(v=s.minTranslate()),v<=s.maxTranslate()&&(v=s.maxTranslate()),s.setTransition(0),s.setTranslate(v),s.updateProgress(),s.updateActiveIndex(),s.updateSlidesClasses(),(!U&&s.isBeginning||!F&&s.isEnd)&&s.updateSlidesClasses(),s.params.freeMode.sticky){clearTimeout(_),_=void 0,i.length>=15&&i.shift();const X=i.length?i[i.length-1]:void 0,B=i[0];if(i.push(o),X&&(o.delta>X.delta||o.direction!==X.direction))i.splice(0);else if(i.length>=15&&o.time-B.time<500&&B.delta-o.delta>=1&&o.delta<=6){const C=a>0?.8:.2;u=o,i.splice(0),_=G(()=>{s.slideToClosest(s.params.speed,!0,void 0,C)},0)}_||(_=G(()=>{u=o,i.splice(0),s.slideToClosest(s.params.speed,!0,void 0,.5)},500))}if(g||w("scroll",n),s.params.autoplay&&s.params.autoplayDisableOnInteraction&&s.autoplay.stop(),v===s.minTranslate()||v===s.maxTranslate())return!0}}return n.preventDefault?n.preventDefault():n.returnValue=!1,!1}function Y(t){let n=s.$el;s.params.mousewheel.eventsTarget!=="container"&&(n=W(s.params.mousewheel.eventsTarget)),n[t]("mouseenter",f),n[t]("mouseleave",P),n[t]("wheel",S)}function L(){return s.params.cssMode?(s.wrapperEl.removeEventListener("wheel",S),!0):s.mousewheel.enabled?!1:(Y("on"),s.mousewheel.enabled=!0,!0)}function D(){return s.params.cssMode?(s.wrapperEl.addEventListener(event,S),!0):s.mousewheel.enabled?(Y("off"),s.mousewheel.enabled=!1,!0):!1}y("init",()=>{!s.params.mousewheel.enabled&&s.params.cssMode&&D(),s.params.mousewheel.enabled&&L()}),y("destroy",()=>{s.params.cssMode&&L(),s.mousewheel.enabled&&D()}),Object.assign(s.mousewheel,{enable:L,disable:D})}const le=""+globalThis.__publicAssetsURL("img/slider/presentation/home-presentation-image-03.png"),ne=""+globalThis.__publicAssetsURL("img/slider/presentation/iphone-02.png");$.use([te,ae]);const ie={components:{Swiper:ee,SwiperSlide:se,HeaderForOffCanvasBlack:()=>M(()=>import("./HeaderForOffCanvasBlack.f0e7b071.js"),["./HeaderForOffCanvasBlack.f0e7b071.js","./entry.e4c421d5.js","./entry.82049f6f.css","./OffCanvasMobileMenu.0c9baa2b.js","./OffCanvasMobileMenu.6d8c64f5.css","./HeaderForOffCanvasBlack.4ab7985e.css"],import.meta.url),OffcanvasMenu:()=>M(()=>import("./OffcanvasMenu.ab48e39d.js"),["./OffcanvasMenu.ab48e39d.js","./entry.e4c421d5.js","./entry.82049f6f.css","./OffCanvasMobileMenu.0c9baa2b.js","./OffCanvasMobileMenu.6d8c64f5.css","./OffcanvasMenu.afe48f24.css"],import.meta.url),OffCanvasMobileMenu:()=>M(()=>import("./OffCanvasMobileMenu.0c9baa2b.js").then(s=>s.O),["./OffCanvasMobileMenu.0c9baa2b.js","./entry.e4c421d5.js","./entry.82049f6f.css","./OffCanvasMobileMenu.6d8c64f5.css"],import.meta.url),SearchPopup:()=>M(()=>import("./SearchPopup.770988b6.js"),["./SearchPopup.770988b6.js","./entry.e4c421d5.js","./entry.82049f6f.css","./OffCanvasMobileMenu.0c9baa2b.js","./OffCanvasMobileMenu.6d8c64f5.css"],import.meta.url)},data(){return{navOpen:!1,searchOpen:!1,fullpageOpen:!1,swiperOptions:{pagination:{el:".swiper-pagination",clickable:!0}}}}},oe={class:"main-container"},re={class:"presentation-home"},ce=e("div",{class:"presentation-slider-wrapper"},[e("div",{class:"presentation-inner"},[e("div",{class:"inner slider"},[e("h2",{class:"heading text-white"},[E("the innovative "),e("br"),E(" technology")])])])],-1),de=e("div",{class:"presentation-slider-wrapper"},[e("div",{class:"presentation-inner"},[e("div",{class:"inner about-inner"},[e("div",{class:"row"},[e("div",{class:"col-md-6"},[e("div",{class:"content"},[e("h6",{class:"heading heading-h6 theme-color"},"PHILOSOPHY"),e("div",{class:"title mt--40 mb--50"},[e("h2",{class:"heading heading-h2"},"We design & build brands, campaigns for businesses.")]),e("p",{class:"bk_pra"},"Brook is a multi-purpose WordPress theme for big and small-sized features & responsive layouts. Since its establishment in 2000, Brook Creative has been focusing on project management & implementation through cooperation.")])]),e("div",{class:"col-md-6 d-none d-md-block"},[e("div",{class:"thumbnail video-with-thumb"},[e("img",{src:le,alt:"multi-purpose"}),e("div",{class:"video-btn position--center"},[e("a",{class:"play__btn",href:"https://www.youtube.com/watch?v=9No-FiEInLA",target:"_blank"},[e("div",{class:"video-icon third-icon"})])])])])])])])],-1),me=e("div",{class:"presentation-slider-wrapper"},[e("div",{class:"presentation-inner"},[e("div",{class:"inner about-service"},[e("div",{class:"container"},[e("div",{class:"row"},[e("div",{class:"col-lg-4 col-md-4 d-none d-md-block"},[e("div",{class:"thumb"},[e("img",{src:ne,alt:"Multipurpose"})])]),e("div",{class:"col-lg-8 col-md-8"},[e("div",{class:"row"},[e("div",{class:"col-lg-12"},[e("div",{class:"brook-section-title text-start"},[e("h2",{class:"heading heading-h2 second-font text-white"},"List of features")])]),e("div",{class:"col-lg-6 d-none d-md-block mt--50"},[e("div",{class:"single-motive-speach"},[e("div",{class:"icon"},[e("i",{class:"ion-ios-infinite theme-color"})]),e("div",{class:"content text-start"},[e("h4",{class:"text-white"},"Digital marketing"),e("p",{class:"bk_pra heading-font text-white"},"We conduct the marketing of products & services using the market's latest digital technologies.")])])]),e("div",{class:"col-lg-6 d-none d-md-block mt--50"},[e("div",{class:"single-motive-speach"},[e("div",{class:"icon"},[e("i",{class:"ion-ios-baseball-outline theme-color"})]),e("div",{class:"content text-start"},[e("h4",{class:"text-white"},"SEO marketing"),e("p",{class:"bk_pra heading-font text-white"},"Our SEO approach is to focus on growing brand visibility in organic search engine results.")])])]),e("div",{class:"col-lg-6 mt--50"},[e("div",{class:"single-motive-speach"},[e("div",{class:"icon"},[e("i",{class:"ion-pinpoint theme-color"})]),e("div",{class:"content text-start"},[e("h4",{class:"text-white"},"Resource use"),e("p",{class:"bk_pra heading-font text-white"},"We conduct the marketing of products & services using latest digital technologies.")])])]),e("div",{class:"col-lg-6 mt--50"},[e("div",{class:"single-motive-speach"},[e("div",{class:"icon"},[e("i",{class:"ion-ios-infinite theme-color"})]),e("div",{class:"content text-start"},[e("h4",{class:"text-white"},"Digital marketing"),e("p",{class:"bk_pra heading-font text-white"},"We successfully implemented numerous UI/UX projects for both global & local clients.")])])])])])])])])])],-1),ue=e("div",{class:"presentation-slider-wrapper"},[e("div",{class:"presentation-inner"},[e("div",{class:"inner skill-area"},[e("div",{class:"container"},[e("div",{class:"row"},[e("div",{class:"col-lg-9 col-md-12"},[e("div",{class:"row"},[e("div",{class:"col-lg-12"},[e("div",{class:"skill-content"},[e("h2",{class:"heading heading-h2 theme-color"},"We're always ready for challenges.")])]),e("div",{class:"col-xl-2 d-none d-xl-block"},[e("div",{class:"what-do mt--70 mt_lg--30 mt_md--30 mt_sm--20"},[e("div",{class:"basic-separator line-3"})])]),e("div",{class:"col-xl-4 col-lg-6 col-md-6 col-sm-12 d-none d-md-block"},[e("div",{class:"what-do mt--70 mt_lg--30 mt_md--30 mt_sm--20"},[e("div",{class:"content"},[e("h5",{class:"heading heading-h5"},"Fresh ideas"),e("div",{class:"bkseparator--20"}),e("p",{class:"bk_pra"},"Brook presents your services with flexible, convenient and multipurpose layouts. You can select your favorite layouts & elements for particular projects with unlimited customization possibilities.")])])]),e("div",{class:"col-xl-4 col-lg-6 col-md-6 col-sm-12 offset-xl-1"},[e("div",{class:"what-do mt--70 mt_lg--30 mt_md--30 mt_sm--20"},[e("div",{class:"content"},[e("h5",{class:"heading heading-h5"},"Unique designs"),e("div",{class:"bkseparator--20"}),e("p",{class:"bk_pra"},"Pixel-perfect replication of the designers is intended for both front-end & back-end developers to build their pages with greater comfort thanks to the higher customizability as well as flexibility.")])])]),e("div",{class:"col-lg-10 col-xl-10 offset-xl-2 mt--80 mt_md--30 mt_sm--20"},[e("div",{class:"brook-skill"},[e("div",{class:"progress-charts"},[e("h6",{class:"heading heading-h6"},"UI/UX"),e("div",{class:"progress"},[e("div",{class:"progress-bar fadeInLeft custom-color--2","data-wow-duration":"0.5s","data-wow-delay":".3s",role:"progressbar",style:{width:"85%"},"aria-valuenow":"85","aria-valuemin":"0","aria-valuemax":"100"},[e("span",{class:"percent-label"},"85%")])])]),e("div",{class:"progress-charts mt--45"},[e("h6",{class:"heading heading-h6"},"Ideas"),e("div",{class:"progress"},[e("div",{class:"progress-bar fadeInLeft custom-color--3","data-wow-duration":"0.7s","data-wow-delay":".5s",role:"progressbar",style:{width:"85%"},"aria-valuenow":"85","aria-valuemin":"0","aria-valuemax":"100"},[e("span",{class:"percent-label"},"85%")])])]),e("div",{class:"progress-charts mt--45"},[e("h6",{class:"heading heading-h6"},"Marketing"),e("div",{class:"progress"},[e("div",{class:"progress-bar fadeInLeft custom-color--4","data-wow-duration":"0.8s","data-wow-delay":".8s",role:"progressbar",style:{width:"90%"},"aria-valuenow":"90","aria-valuemin":"0","aria-valuemax":"100"},[e("span",{class:"percent-label"},"90%")])])])])])])])])])])])],-1),he=e("div",{class:"presentation-slider-wrapper"},[e("div",{class:"presentation-inner contact-address-wrapper"},[e("div",{class:"inner"},[e("div",{class:"container"},[e("div",{class:"row"},[e("div",{class:"col-lg-7 col-md-12 col-12"},[e("div",{class:"row"},[e("div",{class:"col-lg-12"},[e("div",{class:"brook-section-title mb--55 mb_sm--30 mb_md--30"},[e("h3",{class:"heading heading-h3 text-white"},"We collaborate with ambitious something great together.")])]),e("div",{class:"col-lg-6 col-md-6 col-12"},[e("div",{class:"classic-address text-start"},[e("h4",{class:"heading heading-h4 text-white"},"Visit our studio at"),e("div",{class:"desc mt--15"},[e("p",{class:"bk_pra line-height-2-22 text-white"},[E("Your address goes here "),e("br"),E(" Venaville 10010, USA")])])]),e("div",{class:"classic-address text-start mt--60 mt_sm--30 mt_md--30"},[e("h4",{class:"heading heading-h4 text-white text-white"},"Message us"),e("div",{class:"desc mt--15"},[e("p",{class:"bk_pra line-height-2-22 text-white"},[E("info@example.com "),e("br"),E("0123456789")])])])]),e("div",{class:"col-lg-6 col-md-6 col-12 mt_sm--30 d-none d-md-block"},[e("div",{class:"footer-widget text-var--2 menu--about"},[e("h2",{class:"widgettitle text-white"},"About us"),e("div",{class:"footer-menu"},[e("ul",{class:"ft-menu-list bk-hover"},[e("li",null,[e("a",{href:"#"},"About Us")]),e("li",null,[e("a",{href:"#"},"Team")]),e("li",null,[e("a",{href:"#"},"Career")]),e("li",null,[e("a",{href:"#"},"Services")]),e("li",null,[e("a",{href:"#"},"Contact")])])])])])])]),e("div",{class:"col-lg-5 col-md-6 d-none d-lg-block"},[e("div",{class:"google-map-area bg_color--1 text-center"},[e("div",{class:"brook-section-title"},[e("h3",{class:"heading heading-h3"},"Default Style")]),e("iframe",{class:"contact-map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2136.986005919501!2d-73.9685579655238!3d40.75862446708152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258e4a1c884e5%3A0x24fe1071086b36d5!2sThe%20Atrium!5e0!3m2!1sen!2sbd!4v1585132512970!5m2!1sen!2sbd",allowfullscreen:"","aria-hidden":"false",tabindex:"0"})])])])])])])],-1),pe=e("div",{class:"swiper-pagination"},null,-1);function fe(s,c,y,w,r,_){const k=q,u=K,i=Z,I=J,f=V("swiper-slide"),P=V("swiper");return j(),z("div",oe,[m(k,{onToggleFullpageMenu:c[0]||(c[0]=p=>r.fullpageOpen=!r.fullpageOpen),onTogglenav:c[1]||(c[1]=p=>r.navOpen=!r.navOpen),onToggleSearch:c[2]||(c[2]=p=>r.searchOpen=!r.searchOpen)}),m(u,{class:H({"is-visiable":r.fullpageOpen}),onToggleFullpageMenu:c[3]||(c[3]=p=>r.fullpageOpen=!r.fullpageOpen)},null,8,["class"]),m(i,{class:H({"show-mobile-menu":r.navOpen}),onTogglenav:c[4]||(c[4]=p=>r.navOpen=!r.navOpen)},null,8,["class"]),m(I,{class:H({"search-popup-open":r.searchOpen}),onToggleSearch:c[5]||(c[5]=p=>r.searchOpen=!r.searchOpen)},null,8,["class"]),e("div",re,[m(P,{speed:1e3,loop:!1,mousewheel:!0,direction:"vertical",pagination:r.swiperOptions.pagination},{default:T(()=>[m(f,{class:"bg-image-1 bg-cover"},{default:T(()=>[ce]),_:1}),m(f,null,{default:T(()=>[de]),_:1}),m(f,{class:"bg-image-2 bg-cover"},{default:T(()=>[me]),_:1}),m(f,null,{default:T(()=>[ue]),_:1}),m(f,{class:"bg-image-3 bg-cover"},{default:T(()=>[he]),_:1})]),_:1},8,["pagination"]),pe])])}const Oe=R(ie,[["render",fe]]);export{Oe as default};
