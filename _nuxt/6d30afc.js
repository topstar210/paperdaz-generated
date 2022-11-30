(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{1077:function(t,e,n){"use strict";n(858)},1078:function(t,e,n){var o=n(17)((function(i){return i[1]}));o.push([t.i,"*[data-v-36ab793c] .el-dialog{width:600px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-36ab793c] .el-dialog__header{padding-bottom:20px}*[data-v-36ab793c] .el-dialog__footer,*[data-v-36ab793c] .el-dialog__header{text-align:left!important}*[data-v-36ab793c] .el-dialog__body{background:#fcfcfd}*[data-v-36ab793c] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),o.locals={},t.exports=o},1372:function(t,e,n){"use strict";n.r(e);var o=n(13),r=n(3),l=(n(21),n(8),n(36),n(35),n(42),n(55),n(27),n(56),n(0)),c=n(75);n(258);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=l.default.extend({name:"AdditionalFeatureModal",components:{SpinnerDottedIcon:c.default},model:{prop:"visible",event:"updateVisibility"},props:{visible:{type:Boolean,default:!1},isSubscribeActive:{type:Boolean}},data:function(){return{showModal:!1,isLoading:!1,updatePackage:{upgrade:!0,additional_paperlink:1,additional_teamMembers:1,additional_cc:1,action:"upgrade"}}},computed:{cc_calculate:function(){return this.updatePackage.additional_cc},team_calculate:function(){return this.updatePackage.additional_teamMembers},paperlink_calculate:function(){return this.updatePackage.additional_paperlink}},watch:{visible:function(t){this.showModal=t},showModal:function(t){this.$emit("updateVisibility",t)}},mounted:function(){this.showModal=this.visible},methods:{closeModal:function(){this.$emit("updateVisibility",!1)},updateData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isSubscribeActive){e.next=3;break}return t.$notify.info({title:"Billing",message:"Your auto-subscription is not active"}),e.abrupt("return");case 3:t.isLoading=!0,t.$axios.$patch("/subscriptions/".concat(t.$auth.user.subscriptionId),f({},t.updatePackage)).then((function(e){t.$notify.success({title:"Package",message:"Package updated successfully"}),t.$emit("updateVisibility",!1),t.$nuxt.refresh()})).catch((function(e){t.$notify.error({title:"Package",message:"Unable to update package"})})).finally((function(){t.isLoading=!1}));case 5:case"end":return e.stop()}}),e)})))()}}}),m=(n(1077),n(1)),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:t.showModal,"append-to-body":!0,"show-close":!1,center:""},on:{"update:visible":function(e){t.showModal=e}},scopedSlots:t._u([{key:"title",fn:function(){return[e("h4",{staticClass:"text-center font-semibold text-xl text-paperdazgreen-400 border-b border-paperdazgreen-400 pb-2"},[t._v("\n      Additional Features\n    ")])]},proxy:!0}])},[e("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}},[e("span",{staticClass:"circle circle-12 bg-white cursor-pointer text-red-600",on:{click:function(e){return t.closeModal()}}},[e("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 3.19188L7.02451 0.167368C7.24767 -0.0557892 7.60948 -0.0557892 7.83263 0.167368C8.05579 0.390524 8.05579 0.752333 7.83263 0.975489L4.80812 4L7.83263 7.02451C8.05579 7.24767 8.05579 7.60948 7.83263 7.83263C7.60948 8.05579 7.24767 8.05579 7.02451 7.83263L4 4.80812L0.975489 7.83263C0.752333 8.05579 0.390524 8.05579 0.167368 7.83263C-0.0557892 7.60948 -0.0557892 7.24767 0.167368 7.02451L3.19188 4L0.167368 0.975489C-0.0557892 0.752333 -0.0557892 0.390524 0.167368 0.167368C0.390524 -0.0557892 0.752333 -0.0557892 0.975489 0.167368L4 3.19188Z",fill:"#414042"}})])])]),t._v(" "),t._v(" "),e("div",{staticClass:"w-full overflow-x-auto custom-scrollbar"},[e("table",{staticClass:"custom-table w-full"},[e("tbody",[e("tr",[e("td",[t._v("Paperlink")]),t._v(" "),e("td",{},[t._v("$"+t._s(t.paperlink_calculate)+".00")]),t._v(" "),e("td",{staticClass:"w-[150px]"},[e("el-input-number",{attrs:{size:"small",min:0},model:{value:t.updatePackage.additional_paperlink,callback:function(e){t.$set(t.updatePackage,"additional_paperlink",t._n(e))},expression:"updatePackage.additional_paperlink"}})],1)]),t._v(" "),e("tr",[e("td",[t._v("Team Member")]),t._v(" "),e("td",{},[t._v("$"+t._s(t.team_calculate)+".00")]),t._v(" "),e("td",{staticClass:"w-[150px]"},[e("el-input-number",{attrs:{size:"small",min:0},model:{value:t.updatePackage.additional_teamMembers,callback:function(e){t.$set(t.updatePackage,"additional_teamMembers",t._n(e))},expression:"updatePackage.additional_teamMembers"}})],1)]),t._v(" "),e("tr",[e("td",[t._v("CC Flow")]),t._v(" "),e("td",{},[t._v("$"+t._s(t.cc_calculate)+".00")]),t._v(" "),e("td",{staticClass:"w-[150px]"},[e("el-input-number",{attrs:{size:"small",min:0},model:{value:t.updatePackage.additional_cc,callback:function(e){t.$set(t.updatePackage,"additional_cc",t._n(e))},expression:"updatePackage.additional_cc"}})],1)])])])]),t._v(" "),e("div",{staticClass:"grid place-items-center mt-10"},[e("button",{staticClass:"text-white bg-paperdazgreen-400 px-5 h-10 text-lg rounded shadow w-[120px] flex justify-center items-center",class:[1==t.isLoading?"opacity-50":"opacity-100"],attrs:{disabled:1==t.isLoading},on:{click:function(e){return e.preventDefault(),t.updateData.apply(null,arguments)}}},[t._v("\n        Save\n        "),e("spinner-dotted-icon",{directives:[{name:"show",rawName:"v-show",value:1==t.isLoading,expression:"isLoading == true"}],staticClass:"animate-spin ml-2",attrs:{height:"25",width:"25"}})],1)])])}),[],!1,null,"36ab793c",null);e.default=component.exports},858:function(t,e,n){var content=n(1078);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("f0913024",content,!0,{sourceMap:!1})}}]);