(window.webpackJsonp=window.webpackJsonp||[]).push([[142,16,80,138,139,210,213],{1078:function(t,e,r){"use strict";r(882)},1079:function(t,e,r){var n=r(17)((function(i){return i[1]}));n.push([t.i,".scroll-container[data-v-6724ed60]{display:block;width:100%;overflow-y:hidden;overflow-x:scroll;white-space:nowrap;padding-top:1.5rem;padding-bottom:1.5rem}.scroll-container div[data-v-6724ed60]{margin-left:0.75rem;margin-right:0.75rem;display:inline-block;white-space:normal}@media (min-width: 425px){.scroll-container div[data-v-6724ed60]{width:300px}}.packages-container[data-v-6724ed60]{margin-bottom:3rem;display:flex;flex-direction:column;gap:3rem;padding-top:3rem;padding-bottom:3rem}@media (min-width: 640px){.packages-container[data-v-6724ed60]{flex-direction:row;gap:2rem}}@media (min-width: 768px){.packages-container[data-v-6724ed60]{gap:3rem}}.packages-container[data-v-6724ed60]{padding-left:0.75rem;padding-right:0.75rem}@media only screen and (min-width:640px){.packages-container .package-card-check-width[data-v-6724ed60]{min-width:calc(50% - 16px);scroll-snap-align:start}}@media only screen and (min-width:768px){.packages-container .package-card-check-width[data-v-6724ed60]{min-width:calc(50% - 24px);scroll-snap-align:start}}@media only screen and (min-width:1024px){.packages-container .package-card-check-width[data-v-6724ed60]{min-width:calc(33.33333% - 32px)}}[data-v-6724ed60]::-webkit-scrollbar{width:5px;height:3px;cursor:pointer}[data-v-6724ed60]::-webkit-scrollbar-thumb{background-color:transparent;width:5px;border-radius:50px;cursor:pointer}.mySwiper[data-v-6724ed60]{overflow-x:hidden;white-space:nowrap}.swiper-slide[data-v-6724ed60]{display:inline-block;margin-left:1rem;margin-right:1rem;white-space:normal}.swiper-button-prev[data-v-6724ed60]{position:absolute;top:calc(50% - 20px);left:5px}.swiper-button-next[data-v-6724ed60]{position:absolute;top:calc(50% - 20px);right:40px}",""]),n.locals={},t.exports=n},1375:function(t,e,r){"use strict";r.r(e);r(42),r(8),r(745),r(27),r(123),r(28);var n=r(0),c=r(729),o=(r(197),r(57)),l=r(607),d=r(984),m=r(987),f={package:[{price:15,type:"Strarter",monthly:!0,yearly:!1,paperlinkfiles:1,teammembers:1,ccflow:1,publicprofile:2,pdfcopy:2,promoted:!1},{price:20,type:"Promoted",monthly:!0,yearly:!1,paperlinkfiles:1,teammembers:1,ccflow:1,publicprofile:2,pdfcopy:2,promoted:!0},{price:13,type:"Standard",monthly:!0,yearly:!1,paperlinkfiles:1,teammembers:1,ccflow:2,publicprofile:3,pdfcopy:3,promoted:!1},{price:20,type:"Promoted",monthly:!0,yearly:!1,paperlinkfiles:1,teammembers:1,ccflow:1,publicprofile:2,pdfcopy:2,promoted:!0},{price:20,type:"Promoted",monthly:!0,yearly:!1,paperlinkfiles:1,teammembers:1,ccflow:1,publicprofile:2,pdfcopy:2,promoted:!0}]},h=r(734),v=r.n(h),k=n.default.extend({components:{PackageCard:c.default,ArrowDownIcon:o.default,CheckIcon:l.default,SelectCustomPackage:d.default,SelectMainPackage:m.default},name:"SelectPackageTab",data:function(){return{creatingCustomPackage:!1,promotionCode:void 0,pages:this.packages,packagecontent:f.package,overflow:void 0,initialWidth:0,showNav:!1,showNext:!0,showPrev:!1}},computed:{showPagination:function(){return this.orderedPackages.length>1},orderedPackages:function(){var t=(this.packages||[]).filter((function(t){return!t.visibility}));return t.sort((function(a,b){return a.monthly_price-b.monthly_price})),this.pagesDefault?t:this.pagesCustom?t.filter((function(t){return"default"!==t.type})):void 0}},props:{packages:{type:Array,default:function(){return[]}},pagesDefault:{type:String,default:""},pagesCustom:{type:String,default:""}},methods:{nextPackage:function(){var t=document.querySelectorAll(".swiper-slide");this.$refs.swiper.scrollWidth-this.$refs.swiper.scrollLeft!=this.$refs.swiper.clientWidth?(this.initialWidth=this.initialWidth+t[0].clientWidth+32,v()(".mySwiper").animate({scrollLeft:this.initialWidth},500),this.scaleCenterPackage(".swiper-slide",".swiper"),this.showPrev=!0):this.showNext=!1},prevPackage:function(){this.initialWidth=this.initialWidth-document.querySelectorAll(".swiper-slide")[0].clientWidth-32,this.initialWidth<0&&(this.initialWidth=0,this.showPrev=!1),this.$refs.wrapper.style.cssText="transition:0.3s;",v()(".mySwiper").animate({scrollLeft:this.initialWidth},500),this.showNext=!0},scaleCenterPackage:function(t,e){var r=document.querySelectorAll(t);document.querySelector(e);r.forEach((function(element){console.log(element.getBoundingClientRect().right)}))},syncAllElemHeight:function(t,e){setTimeout((function(){var r=document.querySelectorAll(t),n=document.querySelector(e).clientHeight;r.forEach((function(element){element.style.height=n-48+"px"}))}),20)},sendPackageCode:function(t){var e=this.$refs.packagecode.value;this.$emit("setparams",e)}},mounted:function(){var t=this.$route.query.name;this.creatingCustomPackage=!("default-package"==t),window.onresize=function(){v()(".mySwiper")&&(this.initialWidth=0),v()(".mySwiper").animate({scrollLeft:this.initialWidth},500)}},watch:{orderedPackages:function(){var t=this;setTimeout((function(){t.$refs.swiper.scrollWidth>Math.round(t.$refs.wrapper.clientWidth)?t.showNav=!0:t.showNav=!1}),500),this.syncAllElemHeight(".swiper-slide",".mySwiper")}}}),_=(r(1078),r(1)),component=Object(_.a)(k,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[t.pagesDefault?e("form",{staticClass:"flex items-center gap-2 w-full max-w-[500px] mx-auto mb-12",on:{submit:function(e){return e.preventDefault(),t.sendPackageCode.apply(null,arguments)}}},[e("el-input",{ref:"packagecode",attrs:{placeholder:"Enter promotional codes"},model:{value:t.promotionCode,callback:function(e){t.promotionCode=e},expression:"promotionCode"}}),t._v(" "),e("button",{staticClass:"text-sm h-6 sm:h-10 bg-paperdazgreen-400 text-white rounded-lg px-5 hover:bg-paperdazgreen-70 transition duration-0 hover:duration-150 transition duration-0 hover:duration-150 shadow px-3"},[t._v("\n      Update\n    ")])],1):t._e(),t._v(" "),e("transition",{attrs:{name:"fade",mode:"out-in",duration:200}},[t.pagesDefault?e("div",{key:"selecting"},[e("div",{staticClass:"relative py-4"},[e("div",{ref:"swiper",staticClass:"swiper mySwiper overflow-hidden"},[e("div",{ref:"wrapper",staticClass:"swiper-wrapper py-8",class:[t.orderedPackages.length<2?"flex justify-center":"item-center"]},t._l(t.orderedPackages,(function(p,i){return e("div",{key:i,ref:"slide-".concat(i),refInFor:!0,staticClass:"swiper-slide lg:w-[calc(33.33333333%-2rem)] md:w-[calc(50%-2em)] w-[calc(100%-2em)]"},[e("package-card",{staticClass:"package-card-check-width",style:{"--count":t.orderedPackages.length},attrs:{edited:!1,create:!1,promoted:1==i,"show-bottom-button":"",stagingPackage:p},on:{"bottom-button-clicked":function(e){return t.$emit("next-tab",e)}}})],1)})),0),t._v(" "),t.showNav&&t.showNext?e("div",{staticClass:"swiper-button-next z-20",on:{click:t.nextPackage}},[e("button",{staticClass:"bg-white/30 backdrop-blur-sm shadow -rotate-90 transform absolute -translate-y-1/2 z-10 -translate-x-5 w-[40px] h-[40px] grid place-content-center rounded-full"},[e("arrow-down-icon")],1)]):t._e(),t._v(" "),t.showNav&&t.showPrev?e("div",{staticClass:"swiper-button-prev z-20"},[e("button",{staticClass:"bg-white/30 backdrop-blur-sm shadow rotate-90 transform absolute -translate-y-1/2 z-10 translate-x-4 w-[40px] h-[40px] grid place-content-center rounded-full",on:{click:t.prevPackage}},[e("arrow-down-icon")],1)]):t._e()])]),t._v(" "),e("p",{staticClass:"font-medium text-lg text-center"},[t._v("\n        Need a custom package for your business?\n        "),e("nuxt-link",{attrs:{to:"".concat(t.$auth.loggedIn?"../package?tablevel=1":"/register")}},[e("button",{staticClass:"text-paperdazgreen-400 cursor-pointer"},[t._v("\n            Create one\n          ")])])],1)]):e("div",{key:"creating"},[e("select-custom-package",{on:{"next-tab":function(e){return t.$emit("next-tab",e)}}}),t._v(" "),e("p",{staticClass:"font-medium text-lg text-center"},[t._v("\n        Want to select pre-created packaged?\n        "),e("Nuxt-link",{attrs:{to:"/packages/?type=default"}},[e("button",{staticClass:"text-paperdazgreen-400 cursor-pointer"},[t._v("\n          Select Package\n        ")])])],1)],1)])],1)}),[],!1,null,"6724ed60",null);e.default=component.exports},607:function(t,e,r){"use strict";r.r(e);var n=r(0).default.extend({name:"CheckIcon"}),c=r(1),component=Object(c.a)(n,(function(){var t=this._self._c;this._self._setupProxy;return t("svg",{staticClass:"svg-inline--fa fa-check fa-w-16",attrs:{height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check",role:"img",viewBox:"0 0 512 512"}},[t("path",{attrs:{fill:"currentColor",d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}})])}),[],!1,null,null,null);e.default=component.exports},610:function(t,e,r){"use strict";r.r(e);var n=r(0).default.extend({name:"TickIcon"}),c=r(1),component=Object(c.a)(n,(function(){var t=this._self._c;this._self._setupProxy;return t("svg",{staticClass:"stroke-current",attrs:{width:"43",height:"26",viewBox:"0 0 43 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M1.37402 15.5652L12.2321 23.7977L42.3007 1","stroke-width":"2"}})])}),[],!1,null,null,null);e.default=component.exports},719:function(t,e,r){var content=r(744);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("732262c2",content,!0,{sourceMap:!1})},729:function(t,e,r){"use strict";r.r(e);r(28),r(41),r(34),r(78),r(43),r(42),r(8),r(55),r(27),r(56);var n,c=r(13),o=(r(385),r(0)),l=r(610);!function(t){t.YEARLY="yearly",t.MONTHLY="monthly"}(n||(n={}));function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=o.default.extend({name:"PackageCard",components:{TickIcon:l.default},props:{edited:{type:Boolean},create:{type:Boolean},stagingPackage:{type:Object,required:!0},lockPrice:{type:String,default:""},disableStart:{type:Boolean,default:!1}},methods:{setPackageData:function(){var t,e=this.$refs.packagename.textContent.trim(),r=this.isMonthly;""!=e&&(t=m(m({},this.stagingPackage),{},{name:e,isMonthly:this.isMonthly}),this.$store.commit("PACKAGE_INFO",t),this.$store.commit("PACKAGE_CREATE",this.create)),console.log(t),this.$emit("bottom-button-clicked",{stagingPackageNew:t,isMonthly:r})}},data:function(){return{isMonthly:!0,promoted:void 0}},computed:{tags:function(){var t;return this.promoted=null===(t=this.stagingPackage)||void 0===t?void 0:t.tag,!(""==this.promoted||!this.promoted)}},beforeMount:function(){console.log("edited",this.edited),this.lockPrice&&(this.isMonthly="monthly"==String(this.lockPrice).toLowerCase())},mounted:function(){this.create&&this.$refs.packagename.focus()}}),h=(r(743),r(1)),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"border-2 border-paperdazgreen-400 w-full rounded-2xl overflow-hidden relative pb-5 h-[100%]"},[e("div",{staticClass:"promoted-banner"},[t._v("Popular")]),t._v(" "),e("h4",{ref:"packagename",staticClass:"text-lg px-5 py-4 text-center uppercase font-semibold no-outline truncate",attrs:{contenteditable:t.edited}},[t._v("\n    "+t._s((t.stagingPackage||{}).name)+"\n  ")]),t._v(" "),e("div",{staticClass:"flex items-center justify-center text-white px-5 py-4",class:[t.promoted?"bg-[#FEBA0A]":"bg-paperdazgreen-400"]},[e("span",[t._v("$\n      "),e("span",{staticClass:"text-5xl font-medium"},[t._v(t._s(t.isMonthly?(t.stagingPackage||{}).monthlyPrice:(t.stagingPackage||{}).yearlyPrice))]),t._v("\n      /"+t._s(t.isMonthly?"mo":"yr"))])]),t._v(" "),e("div",{staticClass:"px-5 py-4"},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.lockPrice,expression:"!lockPrice"}],staticClass:"flex justify-center mb-10"},[e("span",{staticClass:"mr-2"},[t._v("Monthly")]),t._v(" "),e("span",{staticClass:"inline-flex bg-opacity-30 w-12 rounded-full mr-2 cursor-pointer transition ease-in-out duration-200",class:[t.isMonthly?"bg-paperdazgray-500":"justify-end bg-paperdazgreen-300"],on:{click:function(e){t.isMonthly=!t.isMonthly}}},[e("span",{staticClass:"circle circle-12",class:[t.isMonthly?"bg-paperdazgreen-300":"bg-paperdazgray-500"]})]),t._v(" "),e("span",{staticClass:"text-paperdazgray-300"},[t._v("Yearly")])]),t._v(" "),e("ul",{staticClass:"package-list"},[e("li",{},[e("span",[e("tick-icon",{attrs:{width:"20",height:"20"}})],1),t._v(" "),e("span",[t._v(t._s((t.stagingPackage||{}).paperlink)+" Paperdaz files")])]),t._v(" "),e("li",[e("span",[e("tick-icon",{attrs:{width:"20",height:"20"}})],1),t._v(" "),e("span",[t._v(t._s((t.stagingPackage||{}).teamMembers)+" Team members ")])]),t._v(" "),e("li",[e("span",[e("tick-icon",{attrs:{width:"20",height:"20"}})],1),t._v(" "),e("span",[t._v(t._s((t.stagingPackage||{}).cc)+" CC Flow ")])]),t._v(" "),t._l(t.stagingPackage.features,(function(r){return e("li",[e("span",[e("tick-icon",{attrs:{width:"20",height:"20"}})],1),t._v(" "),e("span",{staticClass:"truncate",attrs:{title:"".concat(r.title,"\n ").concat(r.description)}},[t._v("\n           "+t._s(r.title)+" ")])])}))],2)]),t._v(" "),t.disableStart?t._e():e("div",{staticClass:"grid place-items-center"},[e("button",{staticClass:"text-sm text-white bg-paperdazgreen-400 hover:bg-paperdazgreen-70 transition duration-0 hover:duration-150 transition duration-0 hover:duration-150 rounded-lg shadow h-9 px-5",attrs:{disabled:t.disableStart},on:{click:t.setPackageData}},[t._v("\n      Start Now\n    ")])])])}),[],!1,null,"78326a00",null);e.default=component.exports},743:function(t,e,r){"use strict";r(719)},744:function(t,e,r){var n=r(17)((function(i){return i[1]}));n.push([t.i,".no-outline[data-v-78326a00]{outline:none!important}.package-list[data-v-78326a00]{width:100%;margin-left:1rem;margin-right:1rem;}.package-list li[data-v-78326a00]{margin-bottom:0.75rem;display:flex;width:100%;align-items:center;justify-content:center;font-size:0.875rem;line-height:1.25rem;grid-template-columns:min-content 1fr}.package-list li[data-v-78326a00]>:first-child{width:40px}.package-list li[data-v-78326a00]>:nth-child(2){color:#606060;display:flex;flex:1 1 100%}.package-list li[data-v-78326a00]:last-child{margin-bottom:0px}.promoted-banner[data-v-78326a00]{position:absolute;right:0px;display:inline-block;--tw-bg-opacity:1;background-color:rgb(119 181 80 / var(--tw-bg-opacity));padding-left:8rem;padding-right:8rem;padding-top:1.5rem;padding-bottom:0.25rem;font-size:.625rem;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));transform:translateX(50%) rotate(45deg);transform-origin:50% 0}",""]),n.locals={},t.exports=n},745:function(t,e,r){"use strict";var n=r(5),c=r(7),o=r(82),l=r(51),d=r(58),m=r(393),f=r(19),h=r(6),v=r(392),k=r(267),_=r(759),y=r(760),w=r(152),x=r(761),P=[],C=c(P.sort),O=c(P.push),j=h((function(){P.sort(void 0)})),M=h((function(){P.sort(null)})),z=k("sort"),N=!h((function(){if(w)return w<70;if(!(_&&_>3)){if(y)return!0;if(x)return x<603;var code,t,e,r,n="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(r=0;r<47;r++)P.push({k:t+r,v:e})}for(P.sort((function(a,b){return b.v-a.v})),r=0;r<P.length;r++)t=P[r].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}}));n({target:"Array",proto:!0,forced:j||!M||!z||!N},{sort:function(t){void 0!==t&&o(t);var e=l(this);if(N)return void 0===t?C(e):C(e,t);var r,n,c=[],h=d(e);for(n=0;n<h;n++)n in e&&O(c,e[n]);for(v(c,function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:f(e)>f(r)?1:-1}}(t)),r=d(c),n=0;n<r;)e[n]=c[n++];for(;n<h;)m(e,n++);return e}})},759:function(t,e,r){var n=r(125).match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},760:function(t,e,r){var n=r(125);t.exports=/MSIE|Trident/.test(n)},761:function(t,e,r){var n=r(125).match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},800:function(t,e,r){var content=r(973);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("5769df59",content,!0,{sourceMap:!1})},882:function(t,e,r){var content=r(1079);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("ec4b2cae",content,!0,{sourceMap:!1})},972:function(t,e,r){"use strict";r(800)},973:function(t,e,r){var n=r(17)((function(i){return i[1]}));n.push([t.i,".package-list[data-v-1231982d]{width:-moz-min-content;width:min-content;margin-left:auto;margin-right:auto;}.package-list li[data-v-1231982d]{margin-bottom:0.75rem;display:inline-grid;gap:0.75rem;white-space:nowrap;font-size:0.875rem;line-height:1.25rem;grid-template-columns:min-content 1fr;}.package-list li[data-v-1231982d]>:nth-child(2){color:#606060}.package-list li[data-v-1231982d]:last-child{margin-bottom:0px;}.promoted-banner[data-v-1231982d]{position:absolute;right:0px;display:inline-block;--tw-bg-opacity:1;background-color:rgb(119 181 80 / var(--tw-bg-opacity));padding-left:8rem;padding-right:8rem;padding-top:1.5rem;padding-bottom:0.25rem;font-size:.625rem;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));transform:translateX(50%) rotate(45deg);transform-origin:50% 0;}",""]),n.locals={},t.exports=n},984:function(t,e,r){"use strict";r.r(e);r(384),r(41),r(67);var n=r(13),c=r(3),o=(r(43),r(34),r(42),r(8),r(55),r(27),r(56),r(21),r(729)),l=r(607),d=r(0),m=r(153),f=r(154),h=(r(385),r(23),r(52),new(function(){function t(){Object(m.a)(this,t)}return Object(f.a)(t,[{key:"getNameInitials",value:function(t){var e=(t=t.trim()||"").charAt(0),r=t.replace(/\s+/g," ").split(" ")||[];return r.length>1&&(e+=r[1].charAt(0)),e.toUpperCase()}},{key:"formatPrice",value:function(t,e){var r={style:"currency",currency:"USD",minimumFractionDigits:2};return e&&(Object.keys(e)||[]).length>0&&Object.assign(r,e),new Intl.NumberFormat("en-US",r).format(Number(t))}}]),t}()));function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _=d.default.extend({name:"SelectCustomPackage",components:{PackageCard:o.default,CheckIcon:l.default},data:function(){return{settings:{custom_paperlink_price:1,custom_team_members_price:1,custom_cc_price:1,custom_public_profile_price:1,custom_company_ledger_price:1},customPackage:{name:"Custom",description:"Custom package",paperlink:1,teamMembers:1,cc:1,publicProfile:!0,companyLedger:!0}}},fetch:function(){return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},computed:{totalCost:function(){return Number(this.settings.custom_paperlink_price)*Number(this.customPackage.paperlink)+Number(this.settings.custom_team_members_price)*Number(this.customPackage.teamMembers)+Number(this.settings.custom_cc_price)*Number(this.customPackage.cc)+(this.customPackage.publicProfile?Number(this.settings.custom_public_profile_price):0)+(this.customPackage.companyLedger?Number(this.settings.custom_company_ledger_price):0)},stagingPackage:function(){var t=k({},this.customPackage);return Object.assign(t,{monthlyPrice:this.totalCost,yearlyPrice:10*this.totalCost}),console.log("create-package",t),t}},methods:{formatPrice:function(t){return h.formatPrice(Number(t))},createAndProceed:function(t){t.stagingPackage;var e=t.isMonthly,data=k({},this.customPackage);data.plan=e?"monthly":"yearly"}}}),y=r(1),component=Object(y.a)(_,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"grid md:grid-cols-[max-content,1fr] mb-12 gap-5"},[e("package-card",{staticClass:"md:min-w-[300px] lg:min-w-[320px]",attrs:{"show-bottom-button":"","staging-package":t.stagingPackage,edited:!0,create:!0},on:{setName:t.setname,"bottom-button-clicked":function(e){return t.$emit("next-tab",e)}}}),t._v(" "),e("div",{staticClass:"border-2 border-paperdazgreen-400 w-full rounded-2xl overflow-hidden relative bg-white text-[#505050]"},[e("div",{staticClass:"p-5 overflow-x-auto custom-scrollbar"},[e("table",{staticClass:"custom-table"},[t._m(0),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Paperlink")]),t._v(" "),e("td",{staticClass:"text-center"},[t._v("\n              "+t._s(t.formatPrice(t.settings.custom_paperlink_price))+"\n            ")]),t._v(" "),e("td",[e("div",{staticClass:"grid place-items-center"},[e("el-input-number",{attrs:{size:"small",min:1,max:20},model:{value:t.customPackage.paperlink,callback:function(e){t.$set(t.customPackage,"paperlink",t._n(e))},expression:"customPackage.paperlink"}})],1)]),t._v(" "),e("td",{staticClass:"text-center"},[t._v("\n              "+t._s(t.formatPrice(Number(t.settings.custom_paperlink_price)*Number(t.customPackage.paperlink)))+"\n            ")])]),t._v(" "),e("tr",[e("td",[t._v("Team Member")]),t._v(" "),e("td",{staticClass:"text-center"},[t._v("\n              "+t._s(t.formatPrice(t.settings.custom_team_members_price))+"\n            ")]),t._v(" "),e("td",[e("div",{staticClass:"grid place-items-center"},[e("el-input-number",{attrs:{size:"small",min:1,max:20},model:{value:t.customPackage.teamMembers,callback:function(e){t.$set(t.customPackage,"teamMembers",t._n(e))},expression:"customPackage.teamMembers"}})],1)]),t._v(" "),e("td",{staticClass:"text-center"},[t._v("\n              "+t._s(t.formatPrice(Number(t.settings.custom_team_members_price)*Number(t.customPackage.teamMembers)))+"\n            ")])]),t._v(" "),e("tr",[e("td",[t._v("CC Flow")]),t._v(" "),e("td",{staticClass:"text-center"},[t._v("\n              "+t._s(t.formatPrice(t.settings.custom_cc_price))+"\n            ")]),t._v(" "),e("td",[e("div",{staticClass:"grid place-items-center"},[e("el-input-number",{attrs:{size:"small",min:1,max:20},model:{value:t.customPackage.cc,callback:function(e){t.$set(t.customPackage,"cc",e)},expression:"customPackage.cc"}})],1)]),t._v(" "),e("td",{staticClass:"text-center"},[t._v("\n              "+t._s(t.formatPrice(Number(t.settings.custom_cc_price)*Number(t.customPackage.cc)))+"\n            ")])]),t._v(" "),e("tr",[e("td",[t._v("Public Profile")]),t._v(" "),e("td",{staticClass:"text-center"},[t._v("Included")]),t._v(" "),e("td",[e("div",{staticClass:"grid place-items-center"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.customPackage.publicProfile,expression:"customPackage.publicProfile"}],attrs:{type:"checkbox",hidden:"",id:"public-profile-checkbox",disabled:!0},domProps:{checked:Array.isArray(t.customPackage.publicProfile)?t._i(t.customPackage.publicProfile,null)>-1:t.customPackage.publicProfile},on:{change:function(e){var r=t.customPackage.publicProfile,n=e.target,c=!!n.checked;if(Array.isArray(r)){var o=t._i(r,null);n.checked?o<0&&t.$set(t.customPackage,"publicProfile",r.concat([null])):o>-1&&t.$set(t.customPackage,"publicProfile",r.slice(0,o).concat(r.slice(o+1)))}else t.$set(t.customPackage,"publicProfile",c)}}}),t._v(" "),e("label",{staticClass:"inline-grid place-items-center h-7 w-7 rounded border border-gray-300 p-1 cursor-pointer",attrs:{for:"public-profile-checkbox"}},[e("transition",{attrs:{name:"fade",duration:100}},[e("check-icon",{directives:[{name:"show",rawName:"v-show",value:t.customPackage.publicProfile,expression:"customPackage.publicProfile"}],attrs:{height:"12",width:"16"}})],1)],1)])]),t._v(" "),e("td",{staticClass:"text-center"},[t._v("\n              "+t._s(t.formatPrice(t.customPackage.publicProfile?Number(t.settings.custom_public_profile_price):0))+"  \n            ")])]),t._v(" "),e("tr",[e("td",[t._v("Company Ledger")]),t._v(" "),e("td",{staticClass:"text-center"},[t._v("Included")]),t._v(" "),e("td",[e("div",{staticClass:"grid place-items-center"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.customPackage.companyLedger,expression:"customPackage.companyLedger"}],attrs:{type:"checkbox",hidden:"",id:"company-ledger-checkbox",disabled:!0},domProps:{checked:Array.isArray(t.customPackage.companyLedger)?t._i(t.customPackage.companyLedger,null)>-1:t.customPackage.companyLedger},on:{change:function(e){var r=t.customPackage.companyLedger,n=e.target,c=!!n.checked;if(Array.isArray(r)){var o=t._i(r,null);n.checked?o<0&&t.$set(t.customPackage,"companyLedger",r.concat([null])):o>-1&&t.$set(t.customPackage,"companyLedger",r.slice(0,o).concat(r.slice(o+1)))}else t.$set(t.customPackage,"companyLedger",c)}}}),t._v(" "),e("label",{staticClass:"inline-grid place-items-center h-7 w-7 rounded border border-gray-300 p-1 cursor-pointer",attrs:{for:"company-ledger-checkbox"}},[e("transition",{attrs:{name:"fade",duration:100}},[e("check-icon",{directives:[{name:"show",rawName:"v-show",value:t.customPackage.companyLedger,expression:"customPackage.companyLedger"}],attrs:{height:"12",width:"16"}})],1)],1)])]),t._v(" "),e("td",{staticClass:"text-center"},[t._v("\n              "+t._s(t.formatPrice(t.customPackage.companyLedger?Number(t.settings.custom_company_ledger_price):0))+"\n            ")])])])])]),t._v(" "),e("div",{staticClass:"border-t-2 border-paperdazgreen-400 py-4 px-10 text-lg font-bold flex justify-between"},[e("span",[t._v("Total Amount")]),t._v(" "),e("span",{staticClass:"text-[#606060]"},[t._v(t._s(t.formatPrice(t.totalCost)))])])])],1)}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("thead",[e("tr",{staticClass:"text-lg"},[e("th",{staticClass:"text-left"},[e("span",{staticClass:"inline-block border-b-2 border-paperdazgreen-400"},[t._v("Feature")])]),t._v(" "),e("th",[e("span",{staticClass:"inline-block border-b-2 border-paperdazgreen-400"},[t._v("Price "),e("span",{staticClass:"text-xxs font-normal"},[t._v("/unit")])])]),t._v(" "),e("th",[e("span",{staticClass:"inline-block border-b-2 border-paperdazgreen-400"},[t._v("Quantity")])]),t._v(" "),e("th",[e("span",{staticClass:"inline-block border-b-2 border-paperdazgreen-400"},[t._v("Amount")])])])])}],!1,null,null,null);e.default=component.exports},987:function(t,e,r){"use strict";r.r(e);var n=r(0),c=r(610),o=n.default.extend({name:"SelectMainsPackage",components:{TickIcon:c.default},props:["packagecontent","keyId","link"],data:function(){return{pagecontent:[],popactive:!0,indexPop:!0,standardTag:!1,isMonthly:!0,showBottomButton:!0}},methods:{show:function(){}},beforeMount:function(){this.pagecontent=this.packagecontent,this.standardTag=this.pagecontent.promoted},mounted:function(){}}),l=(r(972),r(1)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"single-package-special relative border-2 bg-white border-paperdazgreen-400 w-full mx-3 my-2 shadow-md rounded-2xl overflow-hidden shadow-paperdazgray-300 pb-5"},[e("h4",{staticClass:"text-lg px-5 py-4 text-center uppercase font-semibold mt-8"},[t._v("\n      "+t._s(t.pagecontent.type)+" Promoted\n  ")]),t._v(" "),t.standardTag?e("div",{staticClass:"custom-card-tag bg-paperdazgreen-400 text-white"},[t._v("Popular")]):t._e(),t._v(" "),e("div",{staticClass:"flex items-center justify-center text-white px-5 py-4",class:[t.pagecontent.promoted?"bg-[#FEBA0A]":"bg-paperdazgreen-400"]},[e("span",[t._v("\n        $\n      "),e("span",{staticClass:"text-5xl font-medium"},[t._v("\n              "+t._s(t.pagecontent.price)+" \n      ")]),t._v("\n      /mon\n      ")])]),t._v(" "),e("div",{staticClass:"px-5 py-4"},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.lockPrice,expression:"!lockPrice"}],staticClass:"flex justify-center mb-10"},[e("span",{staticClass:"mr-2"},[t._v("Yeary")]),t._v(" "),e("span",{staticClass:"inline-flex bg-opacity-30 w-12 rounded-full mr-2 cursor-pointer transition ease-in-out duration-200",class:[t.isMonthly?"justify-end bg-paperdazgreen-300":"bg-paperdazgray-500"],on:{click:function(e){t.isMonthly=!t.isMonthly}}},[e("span",{staticClass:"circle circle-12",class:[t.isMonthly?"bg-paperdazgreen-300":"bg-paperdazgray-500"]})]),t._v(" "),e("span",{staticClass:"text-paperdazgray-300"},[t._v("Monthly")])]),t._v(" "),e("ul",{staticClass:"package-list"},[e("li",{},[e("span",[e("tick-icon",{attrs:{width:"20",height:"20"}})],1),t._v(" "),e("span",[t._v("\n        "+t._s(t.pagecontent.paperlinkfiles)+"\n         Paperlink files")])]),t._v(" "),e("li",[e("span",[e("tick-icon",{attrs:{width:"20",height:"20"}})],1),t._v(" "),e("span",[t._v("\n        "+t._s(t.pagecontent.teammembers)+" \n        Team members ")])]),t._v(" "),e("li",[e("span",[e("tick-icon",{attrs:{width:"20",height:"20"}})],1),t._v(" "),e("span",[t._v("\n        "+t._s(t.pagecontent.ccflow)+"\n         CC Flow ")])]),t._v(" "),e("li",[e("span",[e("tick-icon",{attrs:{width:"20",height:"20"}})],1),t._v(" "),e("span",[t._v(" "+t._s(t.pagecontent.publicprofile)+"\n            Public Profile ")])]),t._v(" "),e("li",[e("span",[e("tick-icon",{attrs:{width:"20",height:"20"}})],1),t._v(" "),e("span",[t._v("\n         "+t._s(t.pagecontent.pdfcopy)+"\n        PDF copy of all files ")])])])]),t._v(" "),t.showBottomButton?e("div",{staticClass:"grid place-items-center"},[e("button",{staticClass:"text-sm text-white bg-paperdazgreen-400 rounded-lg shadow h-9 px-5",on:{click:function(e){return t.$emit("bottom-button-clicked",{stagingPackage:t.stagingPackage,isMonthly:t.isMonthly})}}},[t._v("\n      Start Now\n    ")])]):t._e()])}),[],!1,null,"1231982d",null);e.default=component.exports}}]);