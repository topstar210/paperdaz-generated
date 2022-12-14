(window.webpackJsonp=window.webpackJsonp||[]).push([[139,16,80,211],{607:function(e,t,r){"use strict";r.r(t);var c=r(0).default.extend({name:"CheckIcon"}),n=r(1),component=Object(n.a)(c,(function(){var e=this._self._c;this._self._setupProxy;return e("svg",{staticClass:"svg-inline--fa fa-check fa-w-16",attrs:{height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check",role:"img",viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}})])}),[],!1,null,null,null);t.default=component.exports},610:function(e,t,r){"use strict";r.r(t);var c=r(0).default.extend({name:"TickIcon"}),n=r(1),component=Object(n.a)(c,(function(){var e=this._self._c;this._self._setupProxy;return e("svg",{staticClass:"stroke-current",attrs:{width:"43",height:"26",viewBox:"0 0 43 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M1.37402 15.5652L12.2321 23.7977L42.3007 1","stroke-width":"2"}})])}),[],!1,null,null,null);t.default=component.exports},708:function(e,t,r){var content=r(741);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("0423df31",content,!0,{sourceMap:!1})},728:function(e,t,r){"use strict";r.r(t);r(28),r(41),r(34),r(78),r(43),r(42),r(8),r(55),r(27),r(56);var c,n=r(13),o=(r(385),r(0)),l=r(610);!function(e){e.YEARLY="yearly",e.MONTHLY="monthly"}(c||(c={}));function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=o.default.extend({name:"PackageCard",components:{TickIcon:l.default},props:{edited:{type:Boolean},create:{type:Boolean},stagingPackage:{type:Object,required:!0},lockPrice:{type:String,default:""},disableStart:{type:Boolean,default:!1}},methods:{setPackageData:function(){var e,t=this.$refs.packagename.textContent.trim(),r=this.isMonthly;""!=t&&(e=d(d({},this.stagingPackage),{},{name:t,isMonthly:this.isMonthly}),this.$store.commit("PACKAGE_INFO",e),this.$store.commit("PACKAGE_CREATE",this.create)),console.log(e),this.$emit("bottom-button-clicked",{stagingPackageNew:e,isMonthly:r})}},data:function(){return{isMonthly:!0,promoted:void 0}},computed:{tags:function(){var e;return this.promoted=null===(e=this.stagingPackage)||void 0===e?void 0:e.tag,!(""==this.promoted||!this.promoted)}},beforeMount:function(){console.log("edited",this.edited),this.lockPrice&&(this.isMonthly="monthly"==String(this.lockPrice).toLowerCase())},mounted:function(){this.create&&this.$refs.packagename.focus()}}),_=(r(740),r(1)),component=Object(_.a)(f,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"border-2 border-paperdazgreen-400 w-full rounded-2xl overflow-hidden relative pb-5 min-h-[547px] h-[100%]"},[t("div",{staticClass:"promoted-banner"},[e._v("Popular")]),e._v(" "),t("h4",{ref:"packagename",staticClass:"text-lg px-5 py-4 text-center uppercase font-semibold no-outline truncate",attrs:{contenteditable:e.edited}},[e._v("\n    "+e._s((e.stagingPackage||{}).name)+"\n  ")]),e._v(" "),t("div",{staticClass:"flex items-center justify-center text-white px-5 py-4",class:[e.promoted?"bg-[#FEBA0A]":"bg-paperdazgreen-400"]},[t("span",[e._v("$\n      "),t("span",{staticClass:"text-5xl font-medium"},[e._v(e._s(e.isMonthly?(e.stagingPackage||{}).monthlyPrice:(e.stagingPackage||{}).yearlyPrice))]),e._v("\n      /"+e._s(e.isMonthly?"mo":"yr"))])]),e._v(" "),t("div",{staticClass:"px-5 py-4"},[t("div",{directives:[{name:"show",rawName:"v-show",value:!e.lockPrice,expression:"!lockPrice"}],staticClass:"flex justify-center mb-10"},[t("span",{staticClass:"mr-2"},[e._v("Monthly")]),e._v(" "),t("span",{staticClass:"inline-flex bg-opacity-30 w-12 rounded-full mr-2 cursor-pointer transition ease-in-out duration-200",class:[e.isMonthly?"bg-paperdazgray-500":"justify-end bg-paperdazgreen-300"],on:{click:function(t){e.isMonthly=!e.isMonthly}}},[t("span",{staticClass:"circle circle-12",class:[e.isMonthly?"bg-paperdazgreen-300":"bg-paperdazgray-500"]})]),e._v(" "),t("span",{staticClass:"text-paperdazgray-300"},[e._v("Yearly")])]),e._v(" "),t("ul",{staticClass:"package-list"},[t("li",{},[t("span",[t("tick-icon",{attrs:{width:"20",height:"20"}})],1),e._v(" "),t("span",[e._v(e._s((e.stagingPackage||{}).paperlink)+" Paperdaz files")])]),e._v(" "),t("li",[t("span",[t("tick-icon",{attrs:{width:"20",height:"20"}})],1),e._v(" "),t("span",[e._v(e._s((e.stagingPackage||{}).teamMembers)+" Team members ")])]),e._v(" "),t("li",[t("span",[t("tick-icon",{attrs:{width:"20",height:"20"}})],1),e._v(" "),t("span",[e._v(e._s((e.stagingPackage||{}).cc)+" CC Flow ")])]),e._v(" "),e._l(e.stagingPackage.features,(function(r){return t("li",[t("span",[t("tick-icon",{attrs:{width:"20",height:"20"}})],1),e._v(" "),t("span",{staticClass:"truncate",attrs:{title:"".concat(r.title,"\n ").concat(r.description)}},[e._v("\n           "+e._s(r.title)+" ")])])}))],2)]),e._v(" "),e.disableStart?e._e():t("div",{staticClass:"grid place-items-center"},[t("button",{staticClass:"text-sm text-white bg-paperdazgreen-400 hover:bg-paperdazgreen-70 transition duration-0 hover:duration-150 transition duration-0 hover:duration-150 rounded-lg shadow h-9 px-5",attrs:{disabled:e.disableStart},on:{click:e.setPackageData}},[e._v("\n      Start Now\n    ")])])])}),[],!1,null,"e0681d70",null);t.default=component.exports},740:function(e,t,r){"use strict";r(708)},741:function(e,t,r){var c=r(17)((function(i){return i[1]}));c.push([e.i,".no-outline[data-v-e0681d70]{outline:none!important}.package-list[data-v-e0681d70]{width:100%;margin-left:1rem;margin-right:1rem;}.package-list li[data-v-e0681d70]{margin-bottom:0.75rem;display:flex;width:100%;align-items:center;justify-content:center;font-size:0.875rem;line-height:1.25rem;grid-template-columns:min-content 1fr}.package-list li[data-v-e0681d70]>:first-child{width:40px}.package-list li[data-v-e0681d70]>:nth-child(2){color:#606060;display:flex;flex:1 1 100%}.package-list li[data-v-e0681d70]:last-child{margin-bottom:0px}.promoted-banner[data-v-e0681d70]{position:absolute;right:0px;display:inline-block;--tw-bg-opacity:1;background-color:rgb(119 181 80 / var(--tw-bg-opacity));padding-left:8rem;padding-right:8rem;padding-top:1.5rem;padding-bottom:0.25rem;font-size:.625rem;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));transform:translateX(50%) rotate(45deg);transform-origin:50% 0}",""]),c.locals={},e.exports=c},984:function(e,t,r){"use strict";r.r(t);r(384),r(41),r(67);var c=r(13),n=r(3),o=(r(43),r(34),r(42),r(8),r(55),r(27),r(56),r(21),r(728)),l=r(607),m=r(0),d=r(153),f=r(154),_=(r(385),r(23),r(52),new(function(){function e(){Object(d.a)(this,e)}return Object(f.a)(e,[{key:"getNameInitials",value:function(e){var t=(e=e.trim()||"").charAt(0),r=e.replace(/\s+/g," ").split(" ")||[];return r.length>1&&(t+=r[1].charAt(0)),t.toUpperCase()}},{key:"formatPrice",value:function(e,t){var r={style:"currency",currency:"USD",minimumFractionDigits:2};return t&&(Object.keys(t)||[]).length>0&&Object.assign(r,t),new Intl.NumberFormat("en-US",r).format(Number(e))}}]),e}()));function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var k=m.default.extend({name:"SelectCustomPackage",components:{PackageCard:o.default,CheckIcon:l.default},data:function(){return{settings:{custom_paperlink_price:1,custom_team_members_price:1,custom_cc_price:1,custom_public_profile_price:1,custom_company_ledger_price:1},customPackage:{name:"Custom",description:"Custom package",paperlink:1,teamMembers:1,cc:1,publicProfile:!0,companyLedger:!0}}},fetch:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},computed:{totalCost:function(){return Number(this.settings.custom_paperlink_price)*Number(this.customPackage.paperlink)+Number(this.settings.custom_team_members_price)*Number(this.customPackage.teamMembers)+Number(this.settings.custom_cc_price)*Number(this.customPackage.cc)+(this.customPackage.publicProfile?Number(this.settings.custom_public_profile_price):0)+(this.customPackage.companyLedger?Number(this.settings.custom_company_ledger_price):0)},stagingPackage:function(){var e=h({},this.customPackage);return Object.assign(e,{monthlyPrice:this.totalCost,yearlyPrice:10*this.totalCost}),console.log("create-package",e),e}},methods:{formatPrice:function(e){return _.formatPrice(Number(e))},createAndProceed:function(e){e.stagingPackage;var t=e.isMonthly,data=h({},this.customPackage);data.plan=t?"monthly":"yearly"}}}),P=r(1),component=Object(P.a)(k,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"grid md:grid-cols-[max-content,1fr] mb-12 gap-5"},[t("package-card",{staticClass:"md:min-w-[300px] lg:min-w-[320px]",attrs:{"show-bottom-button":"","staging-package":e.stagingPackage,edited:!0,create:!0},on:{setName:e.setname,"bottom-button-clicked":function(t){return e.$emit("next-tab",t)}}}),e._v(" "),t("div",{staticClass:"border-2 border-paperdazgreen-400 w-full rounded-2xl overflow-hidden relative bg-white text-[#505050]"},[t("div",{staticClass:"p-5 overflow-x-auto custom-scrollbar"},[t("table",{staticClass:"custom-table"},[e._m(0),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("Paperlink")]),e._v(" "),t("td",{staticClass:"text-center"},[e._v("\n              "+e._s(e.formatPrice(e.settings.custom_paperlink_price))+"\n            ")]),e._v(" "),t("td",[t("div",{staticClass:"grid place-items-center"},[t("el-input-number",{attrs:{size:"small",min:1,max:20},model:{value:e.customPackage.paperlink,callback:function(t){e.$set(e.customPackage,"paperlink",e._n(t))},expression:"customPackage.paperlink"}})],1)]),e._v(" "),t("td",{staticClass:"text-center"},[e._v("\n              "+e._s(e.formatPrice(Number(e.settings.custom_paperlink_price)*Number(e.customPackage.paperlink)))+"\n            ")])]),e._v(" "),t("tr",[t("td",[e._v("Team Member")]),e._v(" "),t("td",{staticClass:"text-center"},[e._v("\n              "+e._s(e.formatPrice(e.settings.custom_team_members_price))+"\n            ")]),e._v(" "),t("td",[t("div",{staticClass:"grid place-items-center"},[t("el-input-number",{attrs:{size:"small",min:1,max:20},model:{value:e.customPackage.teamMembers,callback:function(t){e.$set(e.customPackage,"teamMembers",e._n(t))},expression:"customPackage.teamMembers"}})],1)]),e._v(" "),t("td",{staticClass:"text-center"},[e._v("\n              "+e._s(e.formatPrice(Number(e.settings.custom_team_members_price)*Number(e.customPackage.teamMembers)))+"\n            ")])]),e._v(" "),t("tr",[t("td",[e._v("CC Flow")]),e._v(" "),t("td",{staticClass:"text-center"},[e._v("\n              "+e._s(e.formatPrice(e.settings.custom_cc_price))+"\n            ")]),e._v(" "),t("td",[t("div",{staticClass:"grid place-items-center"},[t("el-input-number",{attrs:{size:"small",min:1,max:20},model:{value:e.customPackage.cc,callback:function(t){e.$set(e.customPackage,"cc",t)},expression:"customPackage.cc"}})],1)]),e._v(" "),t("td",{staticClass:"text-center"},[e._v("\n              "+e._s(e.formatPrice(Number(e.settings.custom_cc_price)*Number(e.customPackage.cc)))+"\n            ")])]),e._v(" "),t("tr",[t("td",[e._v("Public Profile")]),e._v(" "),t("td",{staticClass:"text-center"},[e._v("Included")]),e._v(" "),t("td",[t("div",{staticClass:"grid place-items-center"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.customPackage.publicProfile,expression:"customPackage.publicProfile"}],attrs:{type:"checkbox",hidden:"",id:"public-profile-checkbox",disabled:!0},domProps:{checked:Array.isArray(e.customPackage.publicProfile)?e._i(e.customPackage.publicProfile,null)>-1:e.customPackage.publicProfile},on:{change:function(t){var r=e.customPackage.publicProfile,c=t.target,n=!!c.checked;if(Array.isArray(r)){var o=e._i(r,null);c.checked?o<0&&e.$set(e.customPackage,"publicProfile",r.concat([null])):o>-1&&e.$set(e.customPackage,"publicProfile",r.slice(0,o).concat(r.slice(o+1)))}else e.$set(e.customPackage,"publicProfile",n)}}}),e._v(" "),t("label",{staticClass:"inline-grid place-items-center h-7 w-7 rounded border border-gray-300 p-1 cursor-pointer",attrs:{for:"public-profile-checkbox"}},[t("transition",{attrs:{name:"fade",duration:100}},[t("check-icon",{directives:[{name:"show",rawName:"v-show",value:e.customPackage.publicProfile,expression:"customPackage.publicProfile"}],attrs:{height:"12",width:"16"}})],1)],1)])]),e._v(" "),t("td",{staticClass:"text-center"},[e._v("\n              "+e._s(e.formatPrice(e.customPackage.publicProfile?Number(e.settings.custom_public_profile_price):0))+"  \n            ")])]),e._v(" "),t("tr",[t("td",[e._v("Company Ledger")]),e._v(" "),t("td",{staticClass:"text-center"},[e._v("Included")]),e._v(" "),t("td",[t("div",{staticClass:"grid place-items-center"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.customPackage.companyLedger,expression:"customPackage.companyLedger"}],attrs:{type:"checkbox",hidden:"",id:"company-ledger-checkbox",disabled:!0},domProps:{checked:Array.isArray(e.customPackage.companyLedger)?e._i(e.customPackage.companyLedger,null)>-1:e.customPackage.companyLedger},on:{change:function(t){var r=e.customPackage.companyLedger,c=t.target,n=!!c.checked;if(Array.isArray(r)){var o=e._i(r,null);c.checked?o<0&&e.$set(e.customPackage,"companyLedger",r.concat([null])):o>-1&&e.$set(e.customPackage,"companyLedger",r.slice(0,o).concat(r.slice(o+1)))}else e.$set(e.customPackage,"companyLedger",n)}}}),e._v(" "),t("label",{staticClass:"inline-grid place-items-center h-7 w-7 rounded border border-gray-300 p-1 cursor-pointer",attrs:{for:"company-ledger-checkbox"}},[t("transition",{attrs:{name:"fade",duration:100}},[t("check-icon",{directives:[{name:"show",rawName:"v-show",value:e.customPackage.companyLedger,expression:"customPackage.companyLedger"}],attrs:{height:"12",width:"16"}})],1)],1)])]),e._v(" "),t("td",{staticClass:"text-center"},[e._v("\n              "+e._s(e.formatPrice(e.customPackage.companyLedger?Number(e.settings.custom_company_ledger_price):0))+"\n            ")])])])])]),e._v(" "),t("div",{staticClass:"border-t-2 border-paperdazgreen-400 py-4 px-10 text-lg font-bold flex justify-between"},[t("span",[e._v("Total Amount")]),e._v(" "),t("span",{staticClass:"text-[#606060]"},[e._v(e._s(e.formatPrice(e.totalCost)))])])])],1)}),[function(){var e=this,t=e._self._c;e._self._setupProxy;return t("thead",[t("tr",{staticClass:"text-lg"},[t("th",{staticClass:"text-left"},[t("span",{staticClass:"inline-block border-b-2 border-paperdazgreen-400"},[e._v("Feature")])]),e._v(" "),t("th",[t("span",{staticClass:"inline-block border-b-2 border-paperdazgreen-400"},[e._v("Price "),t("span",{staticClass:"text-xxs font-normal"},[e._v("/unit")])])]),e._v(" "),t("th",[t("span",{staticClass:"inline-block border-b-2 border-paperdazgreen-400"},[e._v("Quantity")])]),e._v(" "),t("th",[t("span",{staticClass:"inline-block border-b-2 border-paperdazgreen-400"},[e._v("Amount")])])])])}],!1,null,null,null);t.default=component.exports}}]);