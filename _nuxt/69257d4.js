(window.webpackJsonp=window.webpackJsonp||[]).push([[84,28,39,42,44,48,52,61,63,67,69],{321:function(t,e,r){},322:function(t,e,r){"use strict";r.r(e);var l={},o=r(12),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"footer-area bg-gray pt-100 pb-70"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-2 col-sm-4"},[r("div",{staticClass:"copyright mb-30"},[r("div",{staticClass:"footer-logo"},[r("n-link",{attrs:{to:"/"}},[r("img",{attrs:{src:"/img/logo/logo.png",alt:"logo"}})])],1),t._v(" "),t._m(0)])]),t._v(" "),r("div",{staticClass:"col-lg-2 col-sm-4"},[r("div",{staticClass:"footer-widget mb-30 ml-30"},[t._m(1),t._v(" "),r("div",{staticClass:"footer-list"},[r("ul",[r("li",[r("n-link",{attrs:{to:"/about"}},[t._v("About us")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/shop"}},[t._v("Store location")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/contact"}},[t._v("Orders tracking")])],1)])])])]),t._v(" "),r("div",{staticClass:"col-lg-2 col-sm-4"},[r("div",{staticClass:"footer-widget mb-30 ml-50"},[t._m(2),t._v(" "),r("div",{staticClass:"footer-list"},[r("ul",[r("li",[r("n-link",{attrs:{to:"/about"}},[t._v("Returns")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/about"}},[t._v("Support Policy")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/about"}},[t._v("Size guide")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/about"}},[t._v("FAQs")])],1)])])])]),t._v(" "),t._m(3),t._v(" "),t._m(4)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("© 2023 "),r("a",{attrs:{href:"#",target:"_blank"}},[t._v("Flone")]),t._v("."),r("br"),t._v(" All Rights Reserved")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer-title"},[r("h3",[t._v("ABOUT US")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer-title"},[r("h3",[t._v("USEFUL LINKS")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-lg-2 col-sm-6"},[r("div",{staticClass:"footer-widget mb-30 ml-75"},[r("div",{staticClass:"footer-title"},[r("h3",[t._v("FOLLOW US")])]),t._v(" "),r("div",{staticClass:"footer-list"},[r("ul",[r("li",[r("a",{attrs:{href:"https://www.facebook.com/",target:"_blank"}},[t._v("Facebook")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.instagram.com/",target:"_blank"}},[t._v("Instagram")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.youtube.com/",target:"_blank"}},[t._v("Youtube")])])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-lg-4 col-sm-6"},[r("div",{staticClass:"footer-widget mb-30 ml-70"},[r("div",{staticClass:"footer-title"},[r("h3",[t._v("SUBSCRIBE")])]),t._v(" "),r("div",{staticClass:"subscribe-style"},[r("p",[t._v("Get E-mail updates about our latest shop and special offers.")]),t._v(" "),r("div",{staticClass:"subscribe-form"},[r("form",{staticClass:"mc-form"},[r("input",{staticClass:"email",attrs:{type:"email",required:"",placeholder:"Enter your email here..",name:"email"}}),t._v(" "),r("button",{staticClass:"button",attrs:{name:"subscribe"}},[t._v("Subscribe")])])])])])])}],!1,null,null,null);e.default=component.exports},323:function(t,e,r){"use strict";r.r(e);r(44),r(37),r(43),r(56),r(32),r(57);var l=r(25);r(208),r(10);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function n(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c={data:function(){return{item:"",singleQuantity:1,swiperOptionTop:{loop:!0,slidesPerView:1,spaceBetween:10,effect:"fade",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},computed:{product:function(){return this.item}},methods:{beforeOpen:function(t){var e=t.params;this.item=e},addToCart:function(t){var e=n(n({},t),{},{cartQuantity:this.singleQuantity});this.$store.state.cart.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to cart update with one"}):this.$notify({title:"Add to cart successfully!"}),this.$store.dispatch("addToCartItem",e)},discountedPrice:function(t){return t.price-t.price*t.discount/100},increaseQuantity:function(){this.product.quantity>this.singleQuantity&&this.singleQuantity++},decreaseQuantity:function(){this.singleQuantity>1&&this.singleQuantity--},addToWishlist:function(t){this.$store.state.wishlist.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to wishlist!"}):this.$notify({title:"Add to wishlist successfully!"}),this.$store.dispatch("addToWishlist",t)},addToCompare:function(t){this.$store.state.compare.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to compare!"}):this.$notify({title:"Add to compare successfully!"}),this.$store.dispatch("addToCompare",t)}}},d=(r(325),r(12)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("client-only",[r("modal",{attrs:{name:"quickview",width:"50%",scrollable:!0,height:"auto"},on:{"before-open":t.beforeOpen}},[r("div",{staticClass:"quickview-wrapper row"},[r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"product-details-slider"},[r("div",{staticClass:"product-details-img"},[r("div",{staticClass:"product-badges"},[t.product.new?r("span",{staticClass:"product-label pink"},[t._v("New")]):t._e(),t._v(" "),t.product.discount?r("span",{staticClass:"product-label purple"},[t._v("-"+t._s(t.product.discount)+"%")]):t._e()]),t._v(" "),r("swiper",{attrs:{options:t.swiperOptionTop}},[t._l(t.product.images,(function(image,e){return r("div",{key:e,staticClass:"large-img swiper-slide"},[r("img",{staticClass:"img-fluid",attrs:{src:image,alt:t.product.title}})])})),t._v(" "),r("div",{staticClass:"quickview-nav swiper-button-prev"},[r("i",{staticClass:"pe-7s-angle-left"})]),t._v(" "),r("div",{staticClass:"quickview-nav swiper-button-next"},[r("i",{staticClass:"pe-7s-angle-right"})])],2)],1)])]),t._v(" "),r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"product-details-content"},[r("div",{attrs:{slot:"top-right"},slot:"top-right"},[r("button",{staticClass:"modal-close",on:{click:function(e){return t.$modal.hide("quickview")}}},[r("i",{staticClass:"fa fa-times"})])]),t._v(" "),r("h2",[t._v(t._s(t.product.title))]),t._v(" "),r("div",{staticClass:"product-details-price"},[r("span",[t._v("$"+t._s(t.discountedPrice(t.product).toFixed(2)))]),t._v(" "),t.product.discount>0?r("span",{staticClass:"old"},[t._v("$"+t._s(t.product.price.toFixed(2)))]):t._e()]),t._v(" "),r("div",{staticClass:"pro-details-rating-wrap"},[5==t.product.rating?r("div",{staticClass:"pro-details-rating"},[r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"})]):t._e(),t._v(" "),4==t.product.rating?r("div",{staticClass:"pro-details-rating"},[r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"})]):t._e(),t._v(" "),3==t.product.rating?r("div",{staticClass:"pro-details-rating"},[r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"})]):t._e(),t._v(" "),2==t.product.rating?r("div",{staticClass:"pro-details-rating"},[r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"})]):t._e(),t._v(" "),1==t.product.rating?r("div",{staticClass:"pro-details-rating"},[r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"})]):t._e(),t._v(" "),r("span",[r("a",{attrs:{href:"#"}},[t._v(t._s(t.product.rating)+" Reviews")])])]),t._v(" "),r("p",[t._v(t._s(t.product.description))]),t._v(" "),t.product.variation?r("div",{staticClass:"pro-details-size-color"},[r("div",{staticClass:"pro-details-color-wrap"},[r("h6",{staticClass:"label"},[t._v("Color")]),t._v(" "),r("div",{staticClass:"pro-details-color-content"},t._l(t.product.variation.color,(function(e,l){return r("label",{key:l,staticClass:"radio",class:e},[r("input",{attrs:{type:"radio",name:"colorGroup"}}),t._v(" "),r("span",{staticClass:"check-mark"})])})),0)]),t._v(" "),r("div",{staticClass:"pro-details-size-wrap"},[r("h6",{staticClass:"label"},[t._v("Size")]),t._v(" "),r("div",{staticClass:"pro-details-size-content"},t._l(t.product.variation.sizes,(function(e,l){return r("label",{key:l,staticClass:"radio"},[r("input",{attrs:{type:"radio",name:"sizeGroup"}}),t._v(" "),r("span",{staticClass:"check-mark"},[t._v(t._s(e))])])})),0)])]):t._e(),t._v(" "),r("div",{staticClass:"pro-details-quality"},[r("div",{staticClass:"cart-plus-minus"},[r("button",{staticClass:"dec qtybutton",on:{click:function(e){return t.decreaseQuantity()}}},[t._v("-")]),t._v(" "),r("input",{staticClass:"cart-plus-minus-box",attrs:{type:"text",readonly:""},domProps:{value:t.singleQuantity}}),t._v(" "),r("button",{staticClass:"inc qtybutton",on:{click:function(e){return t.increaseQuantity()}}},[t._v("+")])]),t._v(" "),r("div",{staticClass:"pro-details-cart btn-hover"},[r("button",{on:{click:function(e){return t.addToCart(t.product)}}},[t._v("Add To Cart")])]),t._v(" "),r("div",{staticClass:"pro-details-wishlist"},[r("button",{on:{click:function(e){return t.addToWishlist(t.product)}}},[r("i",{staticClass:"fa fa-heart-o"})])]),t._v(" "),r("div",{staticClass:"pro-details-compare"},[r("button",{on:{click:function(e){return t.addToCompare(t.product)}}},[r("i",{staticClass:"pe-7s-shuffle"})])])]),t._v(" "),r("div",{staticClass:"pro-details-meta"},[r("span",{staticClass:"label"},[t._v("Categories:")]),t._v(" "),r("ul",t._l(t.product.category,(function(e,l){return r("li",{key:l},[r("n-link",{attrs:{to:"/shop?category="+e}},[t._v(t._s(e)+",")])],1)})),0)]),t._v(" "),r("div",{staticClass:"pro-details-meta"},[r("span",{staticClass:"label"},[t._v("Tag:")]),t._v(" "),r("ul",t._l(t.product.tag,(function(e,l){return r("li",{key:l},[r("n-link",{attrs:{to:"/shop?tag="+e}},[t._v(t._s(e)+",")])],1)})),0)]),t._v(" "),r("div",{staticClass:"pro-details-social"},[r("ul",[r("li",[r("a",{attrs:{href:"https://www.facebook.com/",target:"_blank"}},[r("i",{staticClass:"fa fa-facebook"})])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://dribbble.com/",target:"_blank"}},[r("i",{staticClass:"fa fa-dribbble"})])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.pinterest.com/",target:"_blank"}},[r("i",{staticClass:"fa fa-pinterest-p"})])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/",target:"_blank"}},[r("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.linkedin.com/",target:"_blank"}},[r("i",{staticClass:"fa fa-linkedin"})])])])])])])])])],1)}),[],!1,null,null,null);e.default=component.exports},325:function(t,e,r){"use strict";r(321)},328:function(t,e,r){"use strict";r.r(e);var l={props:["title","subTitle","classes"]},o=r(12),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center",class:t.classes},[r("h2",[t._v(t._s(t.title))]),t._v(" "),r("p",[t._v(t._s(t.subTitle))])])}),[],!1,null,null,null);e.default=component.exports},330:function(t,e,r){"use strict";r.r(e);r(44),r(37),r(43),r(56),r(32),r(57);var l=r(25);r(208),r(10),r(33),r(68),r(69);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function n(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c={props:["product","layout"],methods:{addToCart:function(t){var e=n(n({},t),{},{cartQuantity:1});this.$store.state.cart.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to cart update with one"}):this.$notify({title:"Add to cart successfully!"}),this.$store.dispatch("addToCartItem",e)},discountedPrice:function(t){return t.price-t.price*t.discount/100},addToWishlist:function(t){this.$store.state.wishlist.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to wishlist!"}):this.$notify({title:"Add to wishlist successfully!"}),this.$store.dispatch("addToWishlist",t)},addToCompare:function(t){this.$store.state.compare.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to compare!"}):this.$notify({title:"Add to compare successfully!"}),this.$store.dispatch("addToCompare",t)},onClick:function(t){this.$modal.show("quickview",t)},slugify:function(text){return text.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}},d=r(12),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-wrap mb-30"},[r("div",{staticClass:"product-img"},[r("n-link",{attrs:{to:"/product/"+t.slugify(t.product.title)}},[r("img",{staticClass:"default-img",attrs:{src:t.product.images[0],alt:t.product.title}}),t._v(" "),r("img",{staticClass:"hover-img",attrs:{src:t.product.images[1],alt:t.product.title}})]),t._v(" "),r("div",{staticClass:"product-badges"},[t.product.new?r("span",{staticClass:"product-label pink"},[t._v("New")]):t._e(),t._v(" "),t.product.discount?r("span",{staticClass:"product-label purple"},[t._v("-"+t._s(t.product.discount)+"%")]):t._e()]),t._v(" "),"twoColumn"===t.layout||"threeColumn"===t.layout?r("div",{staticClass:"product-action"},[r("div",{staticClass:"pro-same-action pro-wishlist"},[r("button",{staticClass:"btn",attrs:{title:"Wishlist"},on:{click:function(e){return t.addToWishlist(t.product)}}},[r("i",{staticClass:"pe-7s-like"})])]),t._v(" "),r("div",{staticClass:"pro-same-action pro-cart"},[t.product.variation?r("n-link",{staticClass:"btn",attrs:{to:"/product/"+t.slugify(t.product.title)}},[t._v("\n                    select option\n                ")]):r("button",{staticClass:"btn",attrs:{title:"Add To Cart"},on:{click:function(e){return t.addToCart(t.product)}}},[r("i",{staticClass:"pe-7s-cart"}),t._v(" \n                    Add to cart\n                ")])],1),t._v(" "),r("div",{staticClass:"pro-same-action pro-quickview"},[r("button",{staticClass:"btn",attrs:{title:"Quick View"},on:{click:function(e){return t.onClick(t.product)}}},[r("i",{staticClass:"pe-7s-look"})])])]):t._e()],1),t._v(" "),r("div",{staticClass:"product-content text-center"},[r("h3",[r("n-link",{attrs:{to:"/product/"+t.slugify(t.product.title)}},[t._v(t._s(t.product.title))])],1),t._v(" "),5==t.product.rating?r("div",{staticClass:"product-rating"},[r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"})]):t._e(),t._v(" "),4==t.product.rating?r("div",{staticClass:"product-rating"},[r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"})]):t._e(),t._v(" "),3==t.product.rating?r("div",{staticClass:"product-rating"},[r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"})]):t._e(),t._v(" "),2==t.product.rating?r("div",{staticClass:"product-rating"},[r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"})]):t._e(),t._v(" "),1==t.product.rating?r("div",{staticClass:"product-rating"},[r("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"}),t._v(" "),r("i",{staticClass:"fa fa-star-o"})]):t._e(),t._v(" "),r("div",{staticClass:"product-price"},[r("span",[t._v("$"+t._s(t.discountedPrice(t.product).toFixed(2)))]),t._v(" "),t.product.discount>0?r("span",{staticClass:"old"},[t._v("$"+t._s(t.product.price.toFixed(2)))]):t._e()]),t._v(" "),"list"===t.layout?r("div",{staticClass:"product-content__list-view"},[r("p",[t._v(t._s(t.product.description))]),t._v(" "),r("div",{staticClass:"pro-action d-flex align-items-center"},[r("div",{staticClass:"pro-cart btn-hover"},[t.product.variation?r("n-link",{staticClass:"btn",attrs:{to:"/product/"+t.slugify(t.product.title)}},[t._v("\n                        select option\n                    ")]):r("button",{staticClass:"btn",attrs:{title:"Add To Cart"},on:{click:function(e){return t.addToCart(t.product)}}},[r("i",{staticClass:"pe-7s-cart"}),t._v(" \n                        Add to cart\n                    ")])],1),t._v(" "),r("div",{staticClass:"pro-wishlist"},[r("button",{on:{click:function(e){return t.addToWishlist(t.product)}}},[r("i",{staticClass:"fa fa-heart-o"})])]),t._v(" "),r("div",{staticClass:"pro-compare"},[r("button",{on:{click:function(e){return t.addToCompare(t.product)}}},[r("i",{staticClass:"pe-7s-shuffle"})])])])]):t._e()])])}),[],!1,null,null,null);e.default=component.exports},344:function(t,e,r){"use strict";r.r(e);var l={},o=r(12),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"subscribe-area-3 pb-100"},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xl-5 col-lg-7 ms-auto me-auto"},[r("div",{staticClass:"subscribe-style-3 text-center"},[r("h2",[t._v("Subscribe ")]),t._v(" "),r("p",[t._v("Subscribe to our newsletter to receive news on update")]),t._v(" "),r("div",{staticClass:"subscribe-form-3 mt-35"},[r("form",{staticClass:"mc-form"},[r("input",{staticClass:"email",attrs:{type:"email",required:"",placeholder:"Your Email Address",name:"email"}}),t._v(" "),r("div",{staticClass:"clear-3"},[r("button",{staticClass:"button"},[t._v("Subscribe")])])])])])])])])])}],!1,null,null,null);e.default=component.exports},345:function(t,e,r){"use strict";r.r(e);var l={data:function(){return{title:"Welcome To Flone",subTitle:"Who Are We",desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat irure"}}},o=r(12),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"welcome-area"},[r("div",{staticClass:"container"},[r("div",{staticClass:"welcome-content text-center"},[r("h5",[t._v(t._s(t.subTitle))]),t._v(" "),r("h1",[t._v(t._s(t.title))]),t._v(" "),r("p",[t._v(t._s(t.desc))])])])])}),[],!1,null,null,null);e.default=component.exports},349:function(t,e,r){"use strict";r.r(e);r(10),r(28),r(29);var l={props:["isSectionTitle"],components:{ProductGridItem:function(){return Promise.resolve().then(r.bind(null,330))},QuickView:function(){return Promise.resolve().then(r.bind(null,323))}},computed:{newProducts:function(){return this.$store.getters.getNewProducts},bestProducts:function(){return this.$store.getters.getBestProducts},saleProducts:function(){return this.$store.getters.getSaleProducts}},data:function(){return{layout:"twoColumn"}}},o=r(12),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-area pb-90"},[r("div",{staticClass:"container"},[!t.isSectionTitle?t._e():r("SectionTitleWithSubTitle",{attrs:{title:"DAILY DEALS!",classes:"section-title"}}),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"tab-content"},[r("div",{staticClass:"tab-pane fade",attrs:{id:"new-product",role:"tabpanel"}},[r("div",{staticClass:"row"},t._l(t.newProducts.slice(0,8),(function(e,l){return r("div",{key:l,staticClass:"col-xl-3 col-lg-4 col-sm-6"},[r("ProductGridItem",{attrs:{product:e,layout:t.layout}})],1)})),0)]),t._v(" "),r("div",{staticClass:"tab-pane fade show active",attrs:{id:"best-product",role:"tabpanel"}},[r("div",{staticClass:"row"},t._l(t.bestProducts.slice(0,8),(function(e,l){return r("div",{key:l,staticClass:"col-xl-3 col-lg-4 col-sm-6"},[r("ProductGridItem",{attrs:{product:e,layout:t.layout}})],1)})),0)]),t._v(" "),r("div",{staticClass:"tab-pane fade",attrs:{id:"sale-product",role:"tabpanel"}},[r("div",{staticClass:"row"},t._l(t.saleProducts.slice(0,8),(function(e,l){return r("div",{key:l,staticClass:"col-xl-3 col-lg-4 col-sm-6"},[r("ProductGridItem",{attrs:{product:e,layout:t.layout}})],1)})),0)]),t._v(" "),r("div",{staticClass:"view-more text-center mt-20 toggle-btn2"},[r("n-link",{staticClass:"loadMore2",attrs:{to:"/shop"}},[t._v("VIEW MORE PRODUCTS")])],1)])],1),t._v(" "),r("QuickView")],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"nav product-tab-list pt-30 pb-55 justify-content-center"},[r("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[r("button",{staticClass:"nav-link",attrs:{"data-bs-toggle":"pill","data-bs-target":"#new-product",role:"tab"}},[t._v("New Arrivals")])]),t._v(" "),r("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[r("button",{staticClass:"nav-link active",attrs:{"data-bs-toggle":"pill","data-bs-target":"#best-product",role:"tab"}},[t._v("Best Sellers")])]),t._v(" "),r("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[r("button",{staticClass:"nav-link",attrs:{"data-bs-toggle":"pill","data-bs-target":"#sale-product",role:"tab"}},[t._v("Sale Items")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionTitleWithSubTitle:r(328).default,ProductGridItem:r(330).default,QuickView:r(323).default})},376:function(t,e,r){"use strict";r.r(e);r(10),r(28),r(29);var l={components:{Navigation:function(){return Promise.resolve().then(r.bind(null,211))},MiniCart:function(){return Promise.resolve().then(r.bind(null,209))}},computed:{cartItemCount:function(){return this.$store.getters.cartItemCount},wishlistItemCount:function(){return this.$store.getters.wishlistItemCount},compareItemCount:function(){return this.$store.getters.compareItemCount}},data:function(){return{isSticky:!1,isOpenSearch:!1,isOpenAccountSettings:!1,openCart:!1,navOpen:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))}},o=r(12),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("header",{staticClass:"header-area sticky-bar header-padding-3 header-res-padding header-ptb-hm5 transparent-bar header-hm-6",class:{"is-sticky":t.isSticky}},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-4 col-3"},[r("div",{staticClass:"clickable-menu"},[r("button",{on:{click:function(e){t.navOpen=!t.navOpen}}},[r("i",{staticClass:"pe-7s-menu"})])])]),t._v(" "),r("div",{staticClass:"col-md-4 d-none d-md-block"},[r("div",{staticClass:"logo text-center logo-hm5"},[r("n-link",{staticClass:"sticky-none",attrs:{to:"/"}},[r("img",{attrs:{src:"/img/logo/logo-2.png",alt:"brand logo"}})]),t._v(" "),r("n-link",{staticClass:"sticky-block",attrs:{to:"/"}},[r("img",{attrs:{src:"/img/logo/logo.png",alt:"brand logo"}})])],1)]),t._v(" "),r("div",{staticClass:"col-md-4 col-9"},[r("div",{staticClass:"header-right-wrap header-right-wrap-white"},[r("div",{staticClass:"same-style header-search d-none d-lg-block"},[r("button",{staticClass:"search-active",on:{click:function(e){t.isOpenSearch=!t.isOpenSearch}}},[r("i",{staticClass:"pe-7s-search"})]),t._v(" "),r("div",{staticClass:"search-content",class:{active:t.isOpenSearch}},[t._m(0)])]),t._v(" "),r("div",{staticClass:"same-style account-setting d-none d-lg-block"},[r("button",{staticClass:"account-setting-active",on:{click:function(e){t.isOpenAccountSettings=!t.isOpenAccountSettings}}},[r("i",{staticClass:"pe-7s-user-female"})]),t._v(" "),r("div",{staticClass:"account-dropdown",class:{active:t.isOpenAccountSettings}},[r("ul",[r("li",[r("n-link",{attrs:{to:"/login-register"}},[t._v("Login")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/login-register"}},[t._v("Register")])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/my-account"}},[t._v("my account")])],1)])])]),t._v(" "),r("div",{staticClass:"same-style header-compare"},[r("n-link",{attrs:{to:"/compare"}},[r("i",{staticClass:"pe-7s-shuffle"})]),t._v(" "),r("span",{staticClass:"count-style"},[t._v(t._s(t.compareItemCount))])],1),t._v(" "),r("div",{staticClass:"same-style header-wishlist"},[r("n-link",{attrs:{to:"/wishlist"}},[r("i",{staticClass:"pe-7s-like"})]),t._v(" "),r("span",{staticClass:"count-style"},[t._v(t._s(t.wishlistItemCount))])],1),t._v(" "),r("div",{staticClass:"same-style cart-wrap"},[r("button",{staticClass:"icon-cart",on:{click:function(e){t.openCart=!t.openCart}}},[r("i",{staticClass:"pe-7s-shopbag"}),t._v(" "),r("span",{staticClass:"count-style"},[t._v(t._s(t.cartItemCount))])]),t._v(" "),r("MiniCart",{attrs:{miniCart:{visible:t.openCart}},on:{minicartClose:function(e){t.openCart=!t.openCart}}})],1)])])])])]),t._v(" "),r("OffCanvasMobileMenu",{class:{"show-mobile-menu":t.navOpen},on:{toggleAsideMenu:function(e){t.navOpen=!t.navOpen}}})],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",[r("input",{attrs:{type:"text",placeholder:"Search"}}),t._v(" "),r("button",{staticClass:"button-search"},[r("i",{staticClass:"pe-7s-search"})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{MiniCart:r(209).default,OffCanvasMobileMenu:r(210).default})},377:function(t,e,r){"use strict";r.r(e);var l={data:function(){return{swiperOption:{loop:!0,speed:750,autoplay:{delay:6e3},effect:"fade",fadeEffect:{crossFade:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},sliderData:[{title:"Welcome to Flone",desc:"30% off Winter Vacation",backgroundImage:"/img/slider/slider-6-1.jpg"},{title:"Welcome to Flone",desc:"40% off Winter Vacation",backgroundImage:"/img/slider/slider-6-2.jpg"}]}}},o=r(12),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"slider-area nav-style-1 nav-style-3"},[r("swiper",{attrs:{options:t.swiperOption}},[t._l(t.sliderData,(function(e,l){return r("swiper-slide",{key:l,staticClass:"slider-height-5 d-flex align-items-center bg-img",style:{backgroundImage:"url("+e.backgroundImage+")"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"slider-content-4 slider-content-6 slider-animation-1 text-center"},[r("h1",[t._v(t._s(e.title))]),t._v(" "),r("p",[t._v(t._s(e.desc))]),t._v(" "),r("div",{staticClass:"slider-btn btn-hover"},[r("n-link",{attrs:{to:"/shop"}},[t._v("SHOP NOW")])],1)])])])])])})),t._v(" "),r("div",{staticClass:"hero-slider-nav swiper-button-prev"},[r("i",{staticClass:"pe-7s-angle-left"})]),t._v(" "),r("div",{staticClass:"hero-slider-nav swiper-button-next"},[r("i",{staticClass:"pe-7s-angle-right"})])],2)],1)}),[],!1,null,null,null);e.default=component.exports},378:function(t,e,r){"use strict";r.r(e);var l={data:function(){return{instagramOptions:{loop:!0,speed:1e3,breakpoints:{360:{slidesPerView:3},768:{slidesPerView:4},992:{slidesPerView:5}}},instagramData:[{id:1,imgSrc:"/img/instagram/instagram-1.jpg"},{id:2,imgSrc:"/img/instagram/instagram-2.jpg"},{id:3,imgSrc:"/img/instagram/instagram-3.jpg"},{id:4,imgSrc:"/img/instagram/instagram-4.jpg"},{id:5,imgSrc:"/img/instagram/instagram-5.jpg"}]}}},o=r(12),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"instagram-area"},[r("swiper",{attrs:{options:t.instagramOptions}},t._l(t.instagramData,(function(t,e){return r("div",{key:e,staticClass:"swiper-slide single-instagram"},[r("n-link",{attrs:{to:"/shop"}},[r("img",{attrs:{src:t.imgSrc,alt:"instagram image"}})])],1)})),0)],1)}),[],!1,null,null,null);e.default=component.exports},412:function(t,e,r){"use strict";r.r(e);r(10),r(28),r(29);var l={components:{HeaderOffcanvasMenuWithTransparent:function(){return Promise.resolve().then(r.bind(null,376))},HeroSliderSix:function(){return Promise.resolve().then(r.bind(null,377))},WelcomeMessage:function(){return Promise.resolve().then(r.bind(null,345))},ProductWrapper:function(){return Promise.resolve().then(r.bind(null,349))},NewsletterStyleOne:function(){return Promise.resolve().then(r.bind(null,344))},InstagramPostWrapper:function(){return Promise.resolve().then(r.bind(null,378))},TheFooter:function(){return Promise.resolve().then(r.bind(null,322))}},head:function(){return{title:"Home Fashion Six"}}},o=r(12),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"fashion-six-wrapper"},[r("HeaderOffcanvasMenuWithTransparent"),t._v(" "),r("HeroSliderSix"),t._v(" "),r("WelcomeMessage",{staticClass:"pt-95 pb-60"}),t._v(" "),r("ProductWrapper"),t._v(" "),r("NewsletterStyleOne"),t._v(" "),r("InstagramPostWrapper"),t._v(" "),r("TheFooter")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderOffcanvasMenuWithTransparent:r(376).default,HeroSliderSix:r(377).default,WelcomeMessage:r(345).default,ProductWrapper:r(349).default,NewsletterStyleOne:r(344).default,InstagramPostWrapper:r(378).default,TheFooter:r(322).default})}}]);