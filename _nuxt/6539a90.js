(window.webpackJsonp=window.webpackJsonp||[]).push([[206,41,110,202,205],{1361:function(t,e,n){t.exports=n.p+"img/PAPERDAZ-pro.b295f91.svg"},1362:function(t,e,n){var content=n(1595);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("4e8c90f5",content,!0,{sourceMap:!1})},1594:function(t,e,n){"use strict";n(1362)},1595:function(t,e,n){var r=n(17)((function(i){return i[1]}));r.push([t.i,".font-family[data-v-7534e21e]{font-family:inherit}.search-container[data-v-7534e21e]{display:flex;width:66.666667%;align-items:center;justify-content:flex-end;padding-right:0.75rem}.name-container[data-v-7534e21e]{display:flex;width:33.333333%;justify-content:flex-start;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-left:1rem;font-size:1.1rem;font-weight:700;--tw-text-opacity:1;color:rgb(98 164 78 / var(--tw-text-opacity))}.search-icon[data-v-7534e21e]{margin-left:0.5rem;margin-right:0.5rem;display:flex;height:28px;width:28px;align-items:center;justify-content:center;border-radius:9999px;border-style:none;--tw-bg-opacity:1;background-color:rgb(119 181 80 / var(--tw-bg-opacity));outline:2px solid transparent;outline-offset:2px}[data-v-7534e21e]::-webkit-scrollbar{width:5px;height:3px;cursor:pointer}[data-v-7534e21e]::-webkit-scrollbar-thumb{background-color:#77c360;width:5px;border-radius:50px;cursor:pointer}[data-v-7534e21e]::-webkit-scrollbar-track{cursor:pointer;border-width:1px;--tw-border-opacity:1;border-color:rgb(119 181 80 / var(--tw-border-opacity))}.folder-box-container[data-v-7534e21e]{display:flex;width:100%;align-items:center;border-bottom-width:1.5px;--tw-border-opacity:1;border-color:rgb(226 228 232 / var(--tw-border-opacity));padding-top:0.75rem;padding-bottom:0.75rem}.folder-box-container label[data-v-7534e21e]{width:calc(100% - 106px)}.input-search[data-v-7534e21e]:focus{border:none}",""]),r.locals={},t.exports=r},1668:function(t,e,n){"use strict";n.r(e);var r=n(53),o=n(24),l=(n(43),n(8),n(269),n(59)),c=n(36),d=n(85),f=n(873),h=n(57),m=n(990),v=(n(198),n(22)),w=n(45),x=Object(v.a)(w.a).extend({name:"profile-folder",props:["header","folderContent"],components:{SearchIcon:c.default,HeartOutlineIcon:l.default,ShareOutlineIcon:d.default,EmptyFileFolder:f.default,ArrowDownIcon:h.default,ShareFileOptions:m.default},data:function(){return{header:this.header,flipContainer:!0,fileSearch:"",showSearch:!1,contentDisplay:[],contentEmptyDisplay:void 0}},computed:{isEmpty:function(){return this.contentDisplay.length<1}},mounted:function(){},methods:{filterList:function(){var t=this.folderContent,e=this.fileSearch.toLowerCase();"object"==Object(o.a)(t)&&t.length>0&&(this.contentDisplay=t.filter((function(t){return t.fileName.toLowerCase().startsWith(e)})))}},watch:{folderContent:function(){console.log("subber-files",this.folderContent),null!=this.folderContent&&(this.contentDisplay=Object(r.a)(this.folderContent))},fileSearch:function(){this.filterList()}}}),y=(n(1594),n(1)),component=Object(y.a)(x,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("section",[e("div",{staticClass:"bg-white mt-4 rounded-xl font-family"},[e("h3",{staticClass:"flex flex-wrap w-full items-center border-b-[1.5px] border-paperdazgray-200 py-2"},[e("div",{staticClass:"name-container"},[e("button",{staticClass:"mr-2"},[e("abbr",{on:{click:function(e){return t.$router.back()}}},[e("ArrowDownIcon",{staticClass:"rotate-90",attrs:{width:"16",height:"16"}})],1)]),t._v("\n        "+t._s(t.header)+"\n      ")]),t._v(" "),e("div",{staticClass:"search-container"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.fileSearch,expression:"fileSearch"}],staticClass:"folder-search input-search",class:[t.showSearch?"inline-block":"hidden"],attrs:{type:"text",placeholder:"search files..."},domProps:{value:t.fileSearch},on:{input:function(e){e.target.composing||(t.fileSearch=e.target.value)}}}),t._v(" "),e("button",{staticClass:"search-icon",on:{click:function(e){t.showSearch=!t.showSearch}}},[e("search-icon",{attrs:{currentcolor:"white",width:"16",height:"16"}})],1)])]),t._v(" "),t.isEmpty?e("div",{staticClass:"flex justify-center items-center h-[240px]"},[e("span",{staticClass:"text-[17px] text-paperdazgrey-300 font-semibold"},[t._v("No company`s files")])]):t._e(),t._v(" "),t._l(t.contentDisplay,(function(r,o){return e("div",{key:r,staticClass:"folder-box-container justify-between"},[e("div",{staticClass:"flex items-center w-[100%] truncate"},[e("img",{staticClass:"w-5 ml-3",attrs:{src:n(1361)}}),t._v(" "),e("label",{staticClass:"text-[0.90rem] font-[400] pl-2 w-full white-space"},[e("nuxt-link",{attrs:{to:"/pdf/".concat(r.paperLink)}},[t._v("\n          "+t._s(r.fileName)+"\n          ")])],1)]),t._v(" "),e("div",{staticClass:"w-[60px] justify-end flex sm:mr-6"},[e("ShareFileOptions",{attrs:{file:r}})],1)])}))],2)])}),[],!1,null,"7534e21e",null);e.default=component.exports},633:function(t,e,n){"use strict";n.r(e);var r=n(0).default.extend({name:"ForwardOutlineIcon"}),o=n(1),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("svg",{staticClass:"fill-current",attrs:{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{"clip-path":"url(#clip0_3848_18912)"}},[e("path",{attrs:{d:"M15.9373 18H2.06239C0.924629 18 0 17.0752 0 15.9376V5.06263C0 3.92487 0.924629 3.00024 2.06239 3.00024H4.68741C4.99791 3.00024 5.24991 3.25224 5.24991 3.56274C5.24991 3.87324 4.99791 4.12523 4.68741 4.12523H2.06239C1.54563 4.12523 1.12499 4.54587 1.12499 5.06263V15.9376C1.12499 16.4542 1.54563 16.875 2.06239 16.875H15.9373C16.4541 16.875 16.8748 16.4542 16.8748 15.9376V9.56259C16.8748 9.25209 17.1268 9.00009 17.4373 9.00009C17.7478 9.00009 17.9998 9.25209 17.9998 9.56259V15.9376C17.9998 17.0752 17.0751 18 15.9373 18Z"}}),t._v(" "),e("path",{attrs:{d:"M5.06167 11.9904C5.02047 11.9904 4.97914 11.9858 4.93794 11.9753C4.68374 11.9161 4.5 11.6985 4.5 11.4376V10.3126C4.5 6.28068 7.78049 3.0002 11.8124 3.0002H11.9999V0.562633C11.9999 0.333158 12.1394 0.126892 12.3524 0.04065C12.5646 -0.0447679 12.8083 0.00686729 12.9674 0.172622L17.8424 5.23507C18.0523 5.4526 18.0523 5.79757 17.8424 6.01509L12.9674 11.0775C12.8083 11.2433 12.5631 11.2944 12.3524 11.2095C12.1394 11.1233 11.9999 10.917 11.9999 10.6875V8.2501H11.1089C8.74947 8.2501 6.62913 9.56103 5.57473 11.6708C5.47791 11.8658 5.27467 11.9904 5.06167 11.9904ZM11.8124 4.12519C8.6624 4.12519 6.054 6.49135 5.67223 9.54002C7.03562 8.01912 8.99089 7.12511 11.1089 7.12511H12.5624C12.8729 7.12511 13.1249 7.37711 13.1249 7.68761V9.29256L16.6565 5.62508L13.1249 1.95761V3.56269C13.1249 3.87319 12.8729 4.12519 12.5624 4.12519H11.8124Z"}})]),t._v(" "),e("defs",[e("clipPath",{attrs:{id:"clip0_3848_18912"}},[e("rect",{attrs:{width:"18",height:"18",fill:"white"}})])])])}),[],!1,null,null,null);e.default=component.exports},705:function(t,e,n){"use strict";var r=n(5),o=n(388);r({target:"String",proto:!0,forced:n(389)("fontsize")},{fontsize:function(t){return o(this,"font","size",t)}})},708:function(t,e){},709:function(t,e){},710:function(t,e){},711:function(t,e){},712:function(t,e){},713:function(t,e){},714:function(t,e){},715:function(t,e){},716:function(t,e){},717:function(t,e){},718:function(t,e,n){var content=n(738);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("e97e6fb2",content,!0,{sourceMap:!1})},737:function(t,e,n){"use strict";n(718)},738:function(t,e,n){var r=n(17)((function(i){return i[1]}));r.push([t.i,".color-white[data-v-5f398dd0]{fill:#fff!important}*[data-v-5f398dd0] .el-dialog{width:416px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-5f398dd0] .el-dialog__header{padding-bottom:20px}*[data-v-5f398dd0] .el-dialog__footer,*[data-v-5f398dd0] .el-dialog__header{text-align:left!important}*[data-v-5f398dd0] .el-dialog__body{background:#fcfcfd}*[data-v-5f398dd0] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}.icons-container button[data-v-5f398dd0]{display:inline-flex;height:40px;width:40px;align-items:center;justify-content:center;border-radius:9999px;background-color:rgb(119 195 96 / 0.2)}",""]),r.locals={},t.exports=r},752:function(t,e,n){"use strict";n.r(e);n(34),n(43),n(55),n(56);var r=n(13),o=n(3),l=(n(21),n(8),n(28),n(76),n(25),n(386),n(44),n(42),n(0)),c=n(75),d=n(83),f=n(84),h=n(86),m=n(612),v=n(614),w=n(615),x=n(616),y=n(701);n(700),n(704);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var F=l.default.extend({name:"request-modal",components:{SpinnerDottedIcon:c.default,FacebookIcon:d.default,TwitterIcon:f.default,EnvelopeIcon:h.default,PlusIcon:m.default,LinkIcon:v.default,EnvelopeIconShare:w.default,QrcodeIcon:x.default,QrcodeShare:y.default},model:{prop:"visible",event:"updateVisibility"},props:{packagename:{type:String},userFile:{type:Object},visible:{type:Boolean,default:!1}},data:function(){return{showQrcodeFiles:!1,folderTextareaData:"",showModal:!1,loading:!1,twiterLink:"",inputs:[0],generateFileProperty:{},proceedToRequest:!0,generatedFile:{}}},watch:{visible:function(t){this.showModal=t},showModal:function(t){this.$emit("updateVisibility",t)}},mounted:function(){this.showModal=this.visible},methods:{generateAndUploadPdf:function(){},addEmailinputs:function(){var t=!0;Array.from(this.$refs.form.elements).forEach((function(element){"email"!=element.type||element.value.trim()||(t=!1)})),t&&this.inputs.push(this.inputs.length)},showQrcodeFileFuncEmit:function(){this.$emit("qrLoad"),this.$emit("updateVisibility",!1)},closeModal:function(){this.$emit("updateVisibility",!1)},_generatePdf:function(t){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},uploadGeneratedFile:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(Object.keys(e.generateFileProperty).length<1)){n.next=2;break}return n.abrupt("return");case 2:return r={isEditing:!0,downloadLink:t.downloadLink,key:t.key,originalFileId:e.userFile.id,userId:e.$auth.user.id,fileAction:e.userFile.fileAction},n.next=5,e.$axios.$post("/files",_({},r)).then((function(t){e.generatedFile=t})).catch((function(t){e.proceedToRequest=!1}));case 5:case"end":return n.stop()}}),n)})))()},onSubmit:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:null==t||t.preventDefault(),e.loading=!0,r={},o=[],Array.from(t.target.elements).forEach((function(element){"email"==element.type&&o.push(element.value)})),r=_(_({action:"referral_link"},r),{},{link:"".concat(window.location.origin,"/pdf/").concat(e.userFile.paperLink),fileId:e.userFile.id,emails:o,note:e.folderTextareaData}),e.$axios.$post("/request",r).then((function(t){e.$notify.success({title:"Request",message:"Request sent Successfully"}),e.$emit("updateVisibility",!1),e.$emit("refresh"),e.$nuxt.refresh()})).catch((function(t){e.$notify.error({title:"Request",message:"Request Failed"})})).finally((function(){e.loading=!1}));case 7:case"end":return n.stop()}}),n)})))()}}}),k=(n(737),n(1)),component=Object(k.a)(F,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:t.showModal,"append-to-body":!0,"show-close":!1,center:""},on:{"update:visible":function(e){t.showModal=e}},scopedSlots:t._u([{key:"title",fn:function(){return[e("h4",{staticClass:"text-center font-semibold text-xl"},[t._v("Request")])]},proxy:!0}])},[e("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}},[e("span",{staticClass:"circle circle-12 bg-white cursor-pointer text-red-600",on:{click:function(e){return t.closeModal()}}},[e("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 3.19188L7.02451 0.167368C7.24767 -0.0557892 7.60948 -0.0557892 7.83263 0.167368C8.05579 0.390524 8.05579 0.752333 7.83263 0.975489L4.80812 4L7.83263 7.02451C8.05579 7.24767 8.05579 7.60948 7.83263 7.83263C7.60948 8.05579 7.24767 8.05579 7.02451 7.83263L4 4.80812L0.975489 7.83263C0.752333 8.05579 0.390524 8.05579 0.167368 7.83263C-0.0557892 7.60948 -0.0557892 7.24767 0.167368 7.02451L3.19188 4L0.167368 0.975489C-0.0557892 0.752333 -0.0557892 0.390524 0.167368 0.167368C0.390524 -0.0557892 0.752333 -0.0557892 0.975489 0.167368L4 3.19188Z",fill:"#414042"}})])])]),t._v(" "),t._v(" "),e("form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[e("div",{staticClass:"text-centerfont-medium flex justify-between item mx-auto mb-4 whitespace-none"},[e("p",{staticClass:"w-[87%]"},t._l(t.inputs,(function(input){return e("input",{key:input,staticClass:"py-2 focus:border-paperdazgray-500 px-4 w-full mb-2 rounded-md border-[1px] border-paperdazgray-500",attrs:{required:"",type:"email",placeholder:"E-mail"}})})),0),t._v(" "),e("button",{staticClass:"w-[35px] h-[35px] rounded-full bg-paperdazgray-500 grid place-content-center",on:{click:function(e){return e.preventDefault(),t.addEmailinputs.apply(null,arguments)}}},[e("span",{staticClass:"text-white text-[30px]"},[t._v("+")])])]),t._v(" "),e("p",{staticClass:"text-center block font-medium mx-auto mb-4 whitespace-none"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.folderTextareaData,expression:"folderTextareaData"}],staticClass:"w-full py-2 px-4 focus:border-paperdazgray-500 outline-none rounded-md h-28 resize-none border-[1px] border-paperdazgray-500",attrs:{required:"",placeholder:"Note..."},domProps:{value:t.folderTextareaData},on:{input:function(e){e.target.composing||(t.folderTextareaData=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"flex justify-around"},[e("button",{staticClass:"disabled:bg-opacity-50 disabled:cursor-progress h-10 text-xs w-[900%] text-white rounded-xl shadow bg-paperdazgreen-400",attrs:{disabled:t.loading}},[e("span",{staticClass:"inline-flex gap-1 items-center text-[16px]"},[t._v("\n         Send\n          "),e("spinner-dotted-icon",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"animate-spin",attrs:{height:"20",width:"20"}})],1)])])])])}),[],!1,null,"5f398dd0",null);e.default=component.exports},772:function(t,e,n){var content=n(870);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("6277c4a4",content,!0,{sourceMap:!1})},801:function(t,e,n){var content=n(981);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("93e4db64",content,!0,{sourceMap:!1})},869:function(t,e,n){"use strict";n(772)},870:function(t,e,n){var r=n(17)((function(i){return i[1]}));r.push([t.i,".name-container[data-v-75858566]{display:flex;width:33.333333%;justify-content:flex-start;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-left:1rem;font-size:17px;font-weight:700;--tw-text-opacity:1;color:rgb(98 164 78 / var(--tw-text-opacity))}.empty-content[data-v-75858566]{display:inline-block;text-align:center}.empty-content b[data-v-75858566]{margin-bottom:0.5rem;display:block;width:100%;text-align:center;font-size:17px}.empty-content button[data-v-75858566]{border-radius:0.375rem;--tw-bg-opacity:1;background-color:rgb(119 181 80 / var(--tw-bg-opacity));padding-top:0.5rem;padding-bottom:0.5rem;padding-left:2rem;padding-right:2rem;font-size:15px;font-weight:500;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.empty-container[data-v-75858566]{display:flex;height:300px;width:100%;align-items:center;justify-content:center}.font-family[data-v-75858566]{font-family:inherit!important}",""]),r.locals={},t.exports=r},873:function(t,e,n){"use strict";n.r(e);var r={},o=(n(869),n(1)),component=Object(o.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-white mt-5 rounded-lg overflow-hidden font-family"},[e("h3",{staticClass:"flex flex-wrap w-full items-center border-b-[1.5px] border-paperdazgray-200 py-2"},[e("div",{staticClass:"name-container"},[t._v("Folders / file")])]),t._v(" "),e("div",{staticClass:"empty-container"},[e("div",{staticClass:"empty-content"},[e("b",[t._v("Your public profile is empty")]),t._v(" "),e("button",[t._v("Turn files to paperlink")])])])])}],!1,null,"75858566",null);e.default=component.exports},980:function(t,e,n){"use strict";n(801)},981:function(t,e,n){var r=n(17)((function(i){return i[1]}));r.push([t.i,".icon-container[data-v-53c1e01a]{display:flex}.icon-container button[data-v-53c1e01a]{margin-right:0em;display:flex;width:2rem;justify-content:center;font-size:20px}.arrow-icon[data-v-53c1e01a]{--tw-rotate:180deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.search-container[data-v-53c1e01a]{display:flex;width:66.666667%;align-items:center;justify-content:flex-end;padding-right:0.75rem}.folder-search[data-v-53c1e01a]{width:160px;border-radius:0.375rem;border-width:1.3px;--tw-border-opacity:1;border-color:rgb(226 228 232 / var(--tw-border-opacity));padding-top:6px;padding-bottom:6px;padding-left:0.5rem;padding-right:0.5rem;font-size:0.8rem}.heartTopIcon[data-v-53c1e01a]{position:absolute;left:7px;top:-0.25rem;display:grid;width:23px;place-items:center;border-radius:20px;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-left:3px;padding-right:3px;padding-top:1.5px;padding-bottom:1.5px;padding-bottom:0;font-size:9px;font-weight:700;line-height:10px}.heart-icon[data-v-53c1e01a]{transition:.3s}.scale-out[data-v-53c1e01a]{transform:scale(1.4)}",""]),r.locals={},t.exports=r},990:function(t,e,n){"use strict";n.r(e);n(42),n(385),n(123);var r=n(59),o=n(85),l=n(633),c=n(732),d=n(701),f=n(752),h={name:"sharefileoptions",components:{HeartOutlineIcon:r.default,ShareOutlineIcon:o.default,ForwardOutlineIcon:l.default,ShareFilesModal:c.default,QrcodeShare:d.default,RequestModal:f.default},data:function(){return{isHeart:!1,fillHeartColor:"none",showShareCompanyFiles:!1,showQrcodeFiles:!1,favouriteFileId:null,totalShared:null,showRequestModal:!1}},props:{file:{}},computed:{isLoggedIn:function(){var t;return null===(t=this.$auth)||void 0===t?void 0:t.loggedIn},user:function(){var t;return(null===(t=this.$auth)||void 0===t?void 0:t.user)||{}}},methods:{shareInDevice:function(){navigator.share&&navigator.share({title:"Paperdaz",url:"".concat(window.location.origin,"/pdf/").concat(this.file.paperLink)}).then((function(){})).catch((function(t){}))},showRequestModalFunc:function(){this.showRequestModal=!0},getFavouriteFile:function(){var t=this;this.$axios.$get("/favourites/?fileId=".concat(this.file.id,"&userId=").concat(this.user.id)).then((function(e){e.data.length>0&&(t.fillHeartColor="#77C360"),t.favouriteFileId=e.data[0].id})),this.$axios.$get("/favourites/?fileId=".concat(this.file.id)).then((function(e){t.totalShared=Number(e.total)}))},showQrcodeFileFunc:function(){this.showQrcodeFiles=!0,this.showShareCompanyFiles=!1},showShareCompanyFilesFunc:function(){this.$auth.loggedIn?this.showShareCompanyFiles=!0:this.shareInDevice()},animateElement:function(t){t.classList.add("scale-out"),setTimeout((function(){t.classList.remove("scale-out")}),300)},setFileFavourite:function(){var t=this;this.animateElement(this.$refs.heart),"none"==this.fillHeartColor?this.$axios.$post("/favourites",{fileId:this.file.id}).then((function(e){t.fillHeartColor="#77C360",t.favouriteFileId=e.id,t.getFavouriteFile()})):this.$axios.$delete("/favourites/".concat(this.favouriteFileId)).then((function(){t.fillHeartColor="none",t.getFavouriteFile()}))}},mounted:function(){this.getFavouriteFile()}},m=(n(980),n(1)),component=Object(m.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-[#9D9D9D] flex items-right justify-end gap-2"},[e("button",{on:{click:t.showShareCompanyFilesFunc}},[e("share-outline-icon",{attrs:{width:"20",height:"20"}})],1),t._v(" "),e("ShareFilesModal",{attrs:{userFile:t.file},on:{qrLoad:t.showQrcodeFileFunc},model:{value:t.showShareCompanyFiles,callback:function(e){t.showShareCompanyFiles=e},expression:"showShareCompanyFiles"}}),t._v(" "),e("RequestModal",{attrs:{userFile:t.userFile},on:{refresh:t.setRefresh,qrLoad:t.showQrcodeFileFunc},model:{value:t.showRequestModal,callback:function(e){t.showRequestModal=e},expression:"showRequestModal"}}),t._v(" "),e("QrcodeShare",{attrs:{userFile:t.file},model:{value:t.showQrcodeFiles,callback:function(e){t.showQrcodeFiles=e},expression:"showQrcodeFiles"}})],1)}),[],!1,null,"53c1e01a",null);e.default=component.exports}}]);