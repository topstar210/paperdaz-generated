(window.webpackJsonp=window.webpackJsonp||[]).push([[147,16],{1333:function(t,e,o){var content=o(1569);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("cda3f348",content,!0,{sourceMap:!1})},1568:function(t,e,o){"use strict";o(1333)},1569:function(t,e,o){var n=o(17)((function(i){return i[1]}));n.push([t.i,"*[data-v-1b0f7c5c] .el-dialog{width:416px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-1b0f7c5c] .el-dialog__header{padding-bottom:20px}*[data-v-1b0f7c5c] .el-dialog__footer,*[data-v-1b0f7c5c] .el-dialog__header{text-align:left!important}*[data-v-1b0f7c5c] .el-dialog__body{background:#fcfcfd}*[data-v-1b0f7c5c] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),n.locals={},t.exports=n},1641:function(t,e,o){"use strict";o.r(e);var n=o(46),l=(o(8),o(50),o(121),o(0)),d=o(75),c=(o(262),o(580)),r=(o(674),l.default.extend({name:"blockPrivateFile",components:{SpinnerDottedIcon:d.default,CheckedFillIcon:c.default},model:{prop:"visible",event:"updateVisibility"},props:{visible:{type:Boolean,default:!1},file:{type:Object}},data:function(){return{showModal:!1,isLoading:!1,loading:!1,newSaveData:{},sendAction:null,refuse:!0}},watch:{visible:function(t){this.showModal=t,this.checkParamsPermission()},refuse:function(){(this.showModal||this.refuse)&&(this.showModal=!0)}},mounted:function(){this.showModal=this.visible},methods:{checkParamsPermission:function(){var t,e,o=this;this.isLoading=!0,this.$axios.get("/permissions/?userId=".concat(null===(t=this.$auth)||void 0===t||null===(e=t.user)||void 0===e?void 0:e.id,"&fileId=").concat(this.file.id)).then((function(t){var data=t.data;data.length<1||1==data[0].isGranted&&(o.refuse=!1,o.showModal=!1)})).catch((function(t){console.log(t)})).finally((function(){o.isLoading=!1}))},closeModal:function(){this.$emit("updateVisibility",!1)},onSubmit:function(){var t=this;this.$auth.loggedIn&&(this.loading=!0,this.$axios.post("/permissions",{action:"request_permission",fileId:this.file.id}).then((function(e){console.log(e,Object(n.a)(e.data)),t.$notify.success({title:"Permission",message:"string"==typeof e.data?e.data:"Request sent successful, you will recieve a notification if request granted"}),t.loading=!1,setTimeout((function(){}),2500)})).catch((function(e){t.$notify.error({title:"Permission",message:"Request failed"})})).finally((function(){t.loading=!1})))}}})),f=(o(1568),o(1)),component=Object(f.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:t.showModal,"append-to-body":!1,"show-close":!1,center:""},on:{"update:visible":function(e){t.showModal=e}},scopedSlots:t._u([{key:"title",fn:function(){},proxy:!0}])},[e("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}}),t._v(" "),t._v(" "),e("p",{staticClass:"w-[90%] ml-[5%] text-center pb-8 break-normal font-bold"},[t._v("File marked private. You need to send request to the owner for approval.")]),t._v(" "),t.$auth.loggedIn?t._e():e("p",{staticClass:"w-[90%] ml-[5%] text-center pb-8 break-normal font-bold"},[t._v("File marked private. You must be logged in to ask file owner to aprrove.")]),t._v(" "),e("div",{staticClass:"flex justify-around"},[e("button",{staticClass:"h-10 text-xs w-[150px] max-w-[50%] font-bold rounded-lg shadow bg-white border",attrs:{disabled:t.isLoading},on:{click:t.closeModal}},[t._v(" \n      Cancel\n    ")]),t._v(" "),e("button",{staticClass:"disabled:bg-opacity-50 disabled:cursor-progress h-10 text-xs w-[150px] max-w-[50%] text-white rounded-lg shadow bg-paperdazgreen-400",attrs:{disabled:t.isLoading},on:{click:t.onSubmit}},[e("span",{staticClass:"inline-flex gap-1 items-center"},[t._v("\n       "+t._s(t.isLoading?"checking permission....":"Ask permission")+"\n        "),e("spinner-dotted-icon",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"animate-spin",attrs:{height:"20",width:"20"}})],1)])])])}),[],!1,null,"1b0f7c5c",null);e.default=component.exports},580:function(t,e,o){"use strict";o.r(e);var n=o(0).default.extend({name:"CheckFillIcon",props:["width","height"]}),l=o(1),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.width,height:"104",viewBox:"0 0 107 104",fill:"none"}},[e("path",{attrs:{d:"M53.5 0C23.9989 0 0 23.326 0 52C0 80.674 23.9989 104 53.5 104C83.0011 104 107 80.674 107 52C107 23.326 83.0011 0 53.5 0Z",fill:"#77C360"}}),t._v(" "),e("path",{attrs:{d:"M78.6775 41.1786L49.3593 68.8395C48.4797 69.6693 47.3251 70.087 46.1705 70.087C45.0159 70.087 43.8614 69.6693 42.9818 68.8395L28.3231 55.009C26.559 53.3454 26.559 50.6555 28.3231 48.9918C30.0863 47.3274 32.9365 47.3274 34.7006 48.9918L46.1705 59.8137L72.3 35.1614C74.0633 33.497 76.9134 33.497 78.6775 35.1614C80.4408 36.825 80.4408 39.5141 78.6775 41.1786Z",fill:"#FAFAFA"}})])}),[],!1,null,null,null);e.default=component.exports},687:function(t,e){},688:function(t,e){},689:function(t,e){},690:function(t,e){},691:function(t,e){},692:function(t,e){},693:function(t,e){},694:function(t,e){},695:function(t,e){},696:function(t,e){}}]);