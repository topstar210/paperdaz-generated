(window.webpackJsonp=window.webpackJsonp||[]).push([[162,17],{1252:function(t,e,o){"use strict";o(877)},1253:function(t,e,o){var n=o(17)((function(i){return i[1]}));n.push([t.i,"*[data-v-571594bb] .el-dialog{width:416px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-571594bb] .el-dialog__header{padding-bottom:20px}*[data-v-571594bb] .el-dialog__footer,*[data-v-571594bb] .el-dialog__header{text-align:left!important}*[data-v-571594bb] .el-dialog__body{background:#fcfcfd}*[data-v-571594bb] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),n.locals={},t.exports=n},580:function(t,e,o){"use strict";o.r(e);var n=o(0).default.extend({name:"CheckFillIcon",props:["width","height"]}),l=o(1),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.width,height:"104",viewBox:"0 0 107 104",fill:"none"}},[e("path",{attrs:{d:"M53.5 0C23.9989 0 0 23.326 0 52C0 80.674 23.9989 104 53.5 104C83.0011 104 107 80.674 107 52C107 23.326 83.0011 0 53.5 0Z",fill:"#77C360"}}),t._v(" "),e("path",{attrs:{d:"M78.6775 41.1786L49.3593 68.8395C48.4797 69.6693 47.3251 70.087 46.1705 70.087C45.0159 70.087 43.8614 69.6693 42.9818 68.8395L28.3231 55.009C26.559 53.3454 26.559 50.6555 28.3231 48.9918C30.0863 47.3274 32.9365 47.3274 34.7006 48.9918L46.1705 59.8137L72.3 35.1614C74.0633 33.497 76.9134 33.497 78.6775 35.1614C80.4408 36.825 80.4408 39.5141 78.6775 41.1786Z",fill:"#FAFAFA"}})])}),[],!1,null,null,null);e.default=component.exports},877:function(t,e,o){var content=o(1253);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("5b0bf51c",content,!0,{sourceMap:!1})},965:function(t,e,o){"use strict";o.r(e);var n=o(0),l=o(75),r=o(580),d=n.default.extend({name:"pdfNotLoggedIn",components:{SpinnerDottedIcon:l.default,CheckedFillIcon:r.default},model:{prop:"visible",event:"updateVisibility"},props:{visible:{type:Boolean,default:!1},tools:{type:Array}},data:function(){return{showModal:!1,errorMessage:"",loading:!1,newSaveData:{},sendAction:null}},watch:{visible:function(t){this.showModal=t,console.log(this.tools)},showModal:function(t){this.$emit("updateVisibility",t)}},mounted:function(){this.showModal=this.visible},methods:{closeModal:function(){this.$emit("updateVisibility",!1),this.$emit("confirmExistFileManager",!1)}}}),c=(o(1252),o(1)),component=Object(c.a)(d,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:t.showModal,"append-to-body":!0,"show-close":!1,center:""},on:{"update:visible":function(e){t.showModal=e}},scopedSlots:t._u([{key:"title",fn:function(){return[e("h1",{staticClass:"text-center font-semibold text-xl"},[t._v("Not logged-in")])]},proxy:!0}])},[e("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}},[e("span",{staticClass:"circle circle-12 bg-white cursor-pointer text-red-600",on:{click:function(e){return t.closeModal()}}},[e("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 3.19188L7.02451 0.167368C7.24767 -0.0557892 7.60948 -0.0557892 7.83263 0.167368C8.05579 0.390524 8.05579 0.752333 7.83263 0.975489L4.80812 4L7.83263 7.02451C8.05579 7.24767 8.05579 7.60948 7.83263 7.83263C7.60948 8.05579 7.24767 8.05579 7.02451 7.83263L4 4.80812L0.975489 7.83263C0.752333 8.05579 0.390524 8.05579 0.167368 7.83263C-0.0557892 7.60948 -0.0557892 7.24767 0.167368 7.02451L3.19188 4L0.167368 0.975489C-0.0557892 0.752333 -0.0557892 0.390524 0.167368 0.167368C0.390524 -0.0557892 0.752333 -0.0557892 0.975489 0.167368L4 3.19188Z",fill:"#414042"}})])])]),t._v(" "),t._v(" "),e("p",{staticClass:"w-[90%] ml-[5%] text-center pb-8 break-normal"},[t._v("Do you want to access paperdaz annotations? Kindly login or register ")]),t._v(" "),e("div",{staticClass:"flex justify-around"},[e("button",{staticClass:"disabled:bg-opacity-50 disabled:cursor-not-allowed h-10 text-xs w-[150px] max-w-[50%] text-paperdazgreen-500 border border-paperdazgreen-500 rounded-lg shadow bg-white",attrs:{type:"button"},on:{click:function(e){return t.$nuxt.$router.push("/login")}}},[t._v("\n      Login\n    ")]),t._v(" "),e("button",{staticClass:"disabled:bg-opacity-50 disabled:cursor-progress h-10 text-xs w-[150px] max-w-[50%] text-paperdazgreen-500 border border-paperdazgreen-500 rounded-lg shadow bg-white",attrs:{disabled:t.loading},on:{click:function(e){return t.$nuxt.$router.push("/register")}}},[t._v("\n        register\n    ")])])])}),[],!1,null,"571594bb",null);e.default=component.exports}}]);