import{_ as b,d as n,c as _,e as r,f as p,b as a,F as g,i as f,a as O,o as l}from"./entry.e4c421d5.js";import E from"./HeaderElement.d5db07f5.js";import{_ as h}from"./OffCanvasMobileMenu.0c9baa2b.js";import T from"./SearchPopup.770988b6.js";import P from"./Breadcrumb.d7ab5343.js";import x from"./BlogPostThree.cba3c356.js";import{_ as w}from"./FooterTwo.fd8c850b.js";import{d as B}from"./blog.61a64dd9.js";import"./slugify.bd5d5ced.js";const L={components:{HeaderElement:()=>n(()=>import("./HeaderElement.d5db07f5.js"),["./HeaderElement.d5db07f5.js","./entry.e4c421d5.js","./entry.82049f6f.css","./OffCanvasMobileMenu.0c9baa2b.js","./OffCanvasMobileMenu.6d8c64f5.css","./FooterTwo.fd8c850b.js","./HeaderElement.a675b77b.css"],import.meta.url),OffCanvasMobileMenu:()=>n(()=>import("./OffCanvasMobileMenu.0c9baa2b.js").then(s=>s.O),["./OffCanvasMobileMenu.0c9baa2b.js","./entry.e4c421d5.js","./entry.82049f6f.css","./OffCanvasMobileMenu.6d8c64f5.css"],import.meta.url),SearchPopup:()=>n(()=>import("./SearchPopup.770988b6.js"),["./SearchPopup.770988b6.js","./entry.e4c421d5.js","./entry.82049f6f.css","./OffCanvasMobileMenu.0c9baa2b.js","./OffCanvasMobileMenu.6d8c64f5.css"],import.meta.url),Breadcrumb:()=>n(()=>import("./Breadcrumb.d7ab5343.js"),["./Breadcrumb.d7ab5343.js","./entry.e4c421d5.js","./entry.82049f6f.css"],import.meta.url),BlogPostThree:()=>n(()=>import("./BlogPostThree.cba3c356.js"),["./BlogPostThree.cba3c356.js","./entry.e4c421d5.js","./entry.82049f6f.css","./slugify.bd5d5ced.js"],import.meta.url),FooterTwo:()=>n(()=>import("./FooterTwo.fd8c850b.js").then(s=>s.F),["./FooterTwo.fd8c850b.js","./entry.e4c421d5.js","./entry.82049f6f.css"],import.meta.url)},data(){return{data:B,navOpen:!1,searchOpen:!1}},mounted(){document.body.classList.add("template-color-1","template-font-1")},unmounted(){document.body.classList.remove("template-color-1","template-font-1")}},V={class:"main-wrapper"},M={class:"bk-blog-grid-area pt--100 pb--100 pt_md--80 pb_md--80 pb_sm--80 pt_sm--60 bg_color--5"},k={class:"container"},A={class:"row mtn--50"},D=O('<div class="row"><div class="col-lg-12"><div class="brook-pagination-wrapper text-center pt--80 pt_sm--50"><ul class="brook-pagination"><li class="page-item"><button>Prev</button></li><li class="page-item active"><button>1</button></li><li class="page-item"><button>2</button></li><li class="page-item"><button>Next</button></li></ul></div></div></div>',1);function I(s,e,R,F,o,S){const i=E,m=h,c=T,u=P,d=x,v=w;return l(),_("div",V,[r(i,{onTogglenav:e[0]||(e[0]=t=>o.navOpen=!o.navOpen),onToggleSearch:e[1]||(e[1]=t=>o.searchOpen=!o.searchOpen)}),r(m,{class:p({"show-mobile-menu":o.navOpen}),onTogglenav:e[2]||(e[2]=t=>o.navOpen=!o.navOpen)},null,8,["class"]),r(c,{class:p({"search-popup-open":o.searchOpen}),onToggleSearch:e[3]||(e[3]=t=>o.searchOpen=!o.searchOpen)},null,8,["class"]),r(u,{title:"Blog Grid Modern"}),a("div",M,[a("div",k,[a("div",A,[(l(!0),_(g,null,f(o.data.blogs.slice(3,15),t=>(l(),_("div",{class:"col-lg-4 col-sm-6 move-up wow mt--100",key:t.id},[r(d,{blog:t,addClass:"blog-standard blog-grid--modern",readMoreButton:"true"},null,8,["blog"])]))),128))]),D])]),r(v)])}const K=b(L,[["render",I]]);export{K as default};
