(window.webpackJsonp=window.webpackJsonp||[]).push([[212,79],{584:function(t,e,n){"use strict";n.r(e);var r=n(0).default.extend({name:"TickIcon"}),o=n(1),component=Object(o.a)(r,(function(){var t=this._self._c;this._self._setupProxy;return t("svg",{staticClass:"stroke-current",attrs:{width:"43",height:"26",viewBox:"0 0 43 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M1.37402 15.5652L12.2321 23.7977L42.3007 1","stroke-width":"2"}})])}),[],!1,null,null,null);e.default=component.exports},682:function(t,e,n){var content=n(725);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("a0b2ce80",content,!0,{sourceMap:!1})},711:function(t,e,n){"use strict";n.r(e);n(28),n(50),n(35),n(78),n(36),n(42),n(8),n(55),n(27),n(56);var r,o=n(13),c=(n(376),n(0)),l=n(584);!function(t){t.YEARLY="yearly",t.MONTHLY="monthly"}(r||(r={}));function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=c.default.extend({name:"PackageCard",components:{TickIcon:l.default},props:{showBottomButton:{type:Boolean,default:!1},edited:{type:Boolean},create:{type:Boolean},stagingPackage:{type:Object,required:!0},lockPrice:{type:String,default:""},disableStart:{type:Boolean,default:!1}},methods:{setPackageData:function(){var t,e=this.$refs.packagename.textContent.trim(),n=this.isMonthly;""!=e&&(t=h(h({},this.stagingPackage),{},{name:e,isMonthly:this.isMonthly}),this.$store.commit("PACKAGE_INFO",t),this.$store.commit("PACKAGE_CREATE",this.create)),console.log(t),this.$emit("bottom-button-clicked",{stagingPackageNew:t,isMonthly:n})}},data:function(){return{isMonthly:!0,promoted:void 0}},computed:{tags:function(){var t;return this.promoted=null===(t=this.stagingPackage)||void 0===t?void 0:t.tag,!(""==this.promoted||!this.promoted)}},beforeMount:function(){console.log("edited",this.edited),this.lockPrice&&(this.isMonthly="monthly"==String(this.lockPrice).toLowerCase())},mounted:function(){this.create&&this.$refs.packagename.focus()}}),f=(n(724),n(1)),component=Object(f.a)(m,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"border-2 border-paperdazgreen-400 w-full rounded-2xl overflow-hidden relative pb-5 h-[100%]"},[e("div",{staticClass:"promoted-banner"},[t._v("Popular")]),t._v(" "),e("h4",{ref:"packagename",staticClass:"text-lg px-5 py-4 text-center uppercase font-semibold no-outline truncate",attrs:{contenteditable:t.edited}},[t._v("\n    "+t._s((t.stagingPackage||{}).name)+"\n  ")]),t._v(" "),e("div",{staticClass:"flex items-center justify-center text-white px-5 py-4",class:[t.promoted?"bg-[#FEBA0A]":"bg-paperdazgreen-400"]},[e("span",[t._v("$\n      "),e("span",{staticClass:"text-5xl font-medium"},[t._v(t._s(t.isMonthly?(t.stagingPackage||{}).monthlyPrice:(t.stagingPackage||{}).yearlyPrice))]),t._v("\n      /"+t._s(t.isMonthly?"mo":"yr"))])]),t._v(" "),e("div",{staticClass:"px-5 py-4"},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.lockPrice,expression:"!lockPrice"}],staticClass:"flex justify-center mb-10"},[e("span",{staticClass:"mr-2"},[t._v("Monthly")]),t._v(" "),e("span",{staticClass:"inline-flex bg-opacity-30 w-12 rounded-full mr-2 cursor-pointer transition ease-in-out duration-200",class:[t.isMonthly?"bg-paperdazgray-500":"justify-end bg-paperdazgreen-300"],on:{click:function(e){t.isMonthly=!t.isMonthly}}},[e("span",{staticClass:"circle circle-12",class:[t.isMonthly?"bg-paperdazgreen-300":"bg-paperdazgray-500"]})]),t._v(" "),e("span",{staticClass:"text-paperdazgray-300"},[t._v("Yearly")])]),t._v(" "),e("ul",{staticClass:"package-list"},[e("li",{},[e("span",[e("tick-icon",{attrs:{width:"20",height:"20"}})],1),t._v(" "),e("span",[t._v(t._s((t.stagingPackage||{}).paperlink)+" Paperdaz files")])]),t._v(" "),e("li",[e("span",[e("tick-icon",{attrs:{width:"20",height:"20"}})],1),t._v(" "),e("span",[t._v(t._s((t.stagingPackage||{}).teamMembers)+" Team members ")])]),t._v(" "),e("li",[e("span",[e("tick-icon",{attrs:{width:"20",height:"20"}})],1),t._v(" "),e("span",[t._v(t._s((t.stagingPackage||{}).cc)+" CC Flow ")])]),t._v(" "),t._l(t.stagingPackage.features,(function(n){return e("li",[e("span",[e("tick-icon",{attrs:{width:"20",height:"20"}})],1),t._v(" "),e("span",{staticClass:"truncate",attrs:{title:"".concat(n.title,"\n ").concat(n.description)}},[t._v("\n           "+t._s(n.title)+" ")])])}))],2)]),t._v(" "),t.showBottomButton?e("div",{staticClass:"grid place-items-center"},[e("button",{staticClass:"text-sm text-white bg-paperdazgreen-400 hover:bg-paperdazgreen-70 transition duration-0 hover:duration-150 transition duration-0 hover:duration-150 rounded-lg shadow h-9 px-5",attrs:{disabled:t.disableStart},on:{click:t.setPackageData}},[t._v("\n      Start Now\n    ")])]):t._e()])}),[],!1,null,"2852e81e",null);e.default=component.exports},724:function(t,e,n){"use strict";n(682)},725:function(t,e,n){var r=n(17)((function(i){return i[1]}));r.push([t.i,".no-outline[data-v-2852e81e]{outline:none!important}.package-list[data-v-2852e81e]{width:100%;margin-left:1rem;margin-right:1rem;}.package-list li[data-v-2852e81e]{margin-bottom:0.75rem;display:flex;width:100%;align-items:center;justify-content:center;font-size:0.875rem;line-height:1.25rem;grid-template-columns:min-content 1fr}.package-list li[data-v-2852e81e]>:first-child{width:40px}.package-list li[data-v-2852e81e]>:nth-child(2){color:#606060;display:flex;flex:1 1 100%}.package-list li[data-v-2852e81e]:last-child{margin-bottom:0px}.promoted-banner[data-v-2852e81e]{position:absolute;right:0px;display:inline-block;--tw-bg-opacity:1;background-color:rgb(119 181 80 / var(--tw-bg-opacity));padding-left:8rem;padding-right:8rem;padding-top:1.5rem;padding-bottom:0.25rem;font-size:.625rem;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));transform:translateX(50%) rotate(45deg);transform-origin:50% 0}",""]),r.locals={},t.exports=r}}]);