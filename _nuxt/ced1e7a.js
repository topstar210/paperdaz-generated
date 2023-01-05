(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{766:function(t,e,o){var content=o(851);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("2516dbcc",content,!0,{sourceMap:!1})},850:function(t,e,o){"use strict";o(766)},851:function(t,e,o){var l=o(17)((function(i){return i[1]}));l.push([t.i,"*[data-v-44bf5bc4] .el-dialog{width:416px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-44bf5bc4] .el-dialog__header{padding-bottom:20px}*[data-v-44bf5bc4] .el-dialog__footer,*[data-v-44bf5bc4] .el-dialog__header{text-align:left!important}*[data-v-44bf5bc4] .el-dialog__body{background:#fcfcfd}*[data-v-44bf5bc4] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),l.locals={},t.exports=l},939:function(t,e,o){"use strict";o.r(e);var l=o(0),n=o(75),r=l.default.extend({name:"create-team",components:{SpinnerDottedIcon:n.default},model:{prop:"visible",event:"updateVisibility"},props:{visible:{type:Boolean,default:!1}},data:function(){return{showModal:!1,errorMessage:"",loading:!1}},watch:{visible:function(t){this.showModal=t},showModal:function(t){this.$emit("updateVisibility",t)}},mounted:function(){this.showModal=this.visible},methods:{closeModal:function(){this.$emit("updateVisibility",!1)}}}),d=(o(850),o(1)),component=Object(d.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:t.showModal,"append-to-body":!0,"show-close":!1,center:""},on:{"update:visible":function(e){t.showModal=e}},scopedSlots:t._u([{key:"title",fn:function(){return[e("h4",{staticClass:"text-left font-semibold text-xl"},[t._v("Create a Team")])]},proxy:!0}])},[e("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}},[e("span",{staticClass:"circle circle-12 bg-white cursor-pointer text-red-600",on:{click:function(e){return t.closeModal()}}},[e("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 3.19188L7.02451 0.167368C7.24767 -0.0557892 7.60948 -0.0557892 7.83263 0.167368C8.05579 0.390524 8.05579 0.752333 7.83263 0.975489L4.80812 4L7.83263 7.02451C8.05579 7.24767 8.05579 7.60948 7.83263 7.83263C7.60948 8.05579 7.24767 8.05579 7.02451 7.83263L4 4.80812L0.975489 7.83263C0.752333 8.05579 0.390524 8.05579 0.167368 7.83263C-0.0557892 7.60948 -0.0557892 7.24767 0.167368 7.02451L3.19188 4L0.167368 0.975489C-0.0557892 0.752333 -0.0557892 0.390524 0.167368 0.167368C0.390524 -0.0557892 0.752333 -0.0557892 0.975489 0.167368L4 3.19188Z",fill:"#414042"}})])])]),t._v(" "),t._v(" "),e("p",{staticClass:"text-center block font-medium mx-auto mb-6 whitespace-none"},[e("input",{staticClass:"search-input w-[35%] h-10 transition pl-4 border-r-0 bg-transparent flex-1 border-[1px] border-paperdazgreen-300 rounded-tl-[1rem] rounded-bl-[1rem] focus:border-r-0 outline-none",attrs:{type:"text",placeholder:"Email"}}),t._v(" "),e("select",{staticClass:"w-[35%] h-10 border-[1px] border-paperdazgreen-300 border-l-0 bg-transparent text-[#878686] text-[12px] -ml-1 mr-2 outline-none text-right"},[e("option",{staticClass:"rounded w-[50px]"},[t._v(" Manage Company Files")]),t._v(" "),e("option",{staticClass:"rounded w-[50px]"},[t._v(" Own Files")]),t._v(" "),e("option",{staticClass:"rounded w-[50px]"},[t._v(" Remove Files")])]),t._v(" "),e("button",{staticClass:"disabled:bg-opacity-50 disabled:cursor-progress h-10 text-xs w-[20%] shadow-md text-white rounded-[2rem] shadow bg-paperdazgreen-400",attrs:{disabled:t.loading}},[e("span",{staticClass:"inline-flex gap-1 items-center text-[16px]"},[t._v("\n        Invite\n        "),e("spinner-dotted-icon",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"animate-spin",attrs:{height:"20",width:"20"}})],1)])]),t._v(" "),e("p",{staticClass:"text-[18px] font-semibold mb-4"},[t._v("Copy link")]),t._v(" "),e("ul",[e("li",{staticClass:"flex mb-2"},[e("span",{staticClass:"p-0.5 border-[1px] border-paperdazgreen-400 circle circle-17"},[e("img",{staticClass:"w-full h-full rounded-full",attrs:{src:"/img/placeholder_picture.png",alt:""}})]),t._v(" "),e("div",{staticClass:"overflow-hidden"},[e("p",{staticClass:"text-base font-medium text-[#414142] truncate pt-[6px]"},[e("nuxt-link",{staticClass:"ml-2",attrs:{to:"pdf"}},[t._v("\n            Abdallah hamouda\n          ")])],1)]),t._v(" "),e("select",{staticClass:"float-right h-10 text-[#878686] text-[12px] mr-2 outline-none text-right"},[e("option",{staticClass:"rounded w-[50px]"},[t._v(" Manage Company Files")]),t._v(" "),e("option",{staticClass:"rounded w-[50px]"},[t._v(" Own Files")]),t._v(" "),e("option",{staticClass:"rounded w-[50px]"},[t._v(" Remove Files")])])]),t._v(" "),e("li",{staticClass:"flex mb-2"},[e("span",{staticClass:"p-0.5 border border-paperdazgreen-400 circle circle-17"},[e("img",{staticClass:"w-full h-full rounded-full",attrs:{src:"/img/placeholder_picture.png",alt:""}})]),t._v(" "),e("div",{staticClass:"overflow-hidden"},[e("p",{staticClass:"text-base font-medium text-[#414142] truncate pt-[6px]"},[e("nuxt-link",{staticClass:"ml-2",attrs:{to:"pdf"}},[t._v("\n            Abdallah hamouda\n          ")])],1)]),t._v(" "),e("select",{staticClass:"float-right h-10 text-[#878686] text-[12px] mr-2 outline-none text-right"},[e("option",{staticClass:"rounded w-[50px]"},[t._v(" Manage Company Files")]),t._v(" "),e("option",{staticClass:"rounded w-[50px]"},[t._v(" Own Files")]),t._v(" "),e("option",{staticClass:"rounded w-[50px]"},[t._v(" Remove Files")])])])]),t._v(" "),e("div",{staticClass:"flex justify-around"})])}),[],!1,null,"44bf5bc4",null);e.default=component.exports}}]);