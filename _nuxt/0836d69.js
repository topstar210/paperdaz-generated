(window.webpackJsonp=window.webpackJsonp||[]).push([[157,17,108,118],{1325:function(t,e,n){"use strict";n(897)},1326:function(t,e,n){var o=n(17)((function(i){return i[1]}));o.push([t.i,"*[data-v-ec9f954a] .el-dialog{width:416px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-ec9f954a] .el-dialog__header{padding-bottom:20px}*[data-v-ec9f954a] .el-dialog__footer,*[data-v-ec9f954a] .el-dialog__header{text-align:left!important}*[data-v-ec9f954a] .el-dialog__body{background:#fcfcfd}*[data-v-ec9f954a] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),o.locals={},t.exports=o},1347:function(t,e,n){"use strict";n.r(e);n(24),n(52),n(36),n(35),n(55),n(27),n(56);var o=n(13),r=n(3),l=(n(21),n(50),n(42),n(8),n(375),n(121),n(77),n(75)),c=n(713),d=n(22),f=(n(778),n(580)),h=n(149),m=n(668),v=n(380),x=n(738),w=n(755),y=(n(1324),n(835)),C=n.n(y),R=n(836),_=n.n(R);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function A(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O=Object(d.a)(c.a).extend({name:"PublishPdfModal",components:{SpinnerDottedIcon:l.default,CheckedFillIcon:f.default,DrawOrTypeModal:x.default,AddToPageDrawOrType:w.default},model:{prop:"visible",event:"updateVisibility"},props:{visible:{type:Boolean,default:!1},tools:{type:Array},file:{type:Object},startGeneratePdf:{type:Function},successFileFunction:{type:Function},trackSubmitTools:{type:Function}},computed:{signature:function(){return this.$auth.user.signatureURL||_.a},initial:function(){return this.$auth.user.initialURL||C.a},pdfOffsetY:function(){return this.$store.state.pdfOffset_y*this.$store.state.pdfScale},pdfOffsetX:function(){return this.$store.state.pdfOffset_x*this.$store.state.pdfScale},ledgerInfo:function(){var t,e;return{userId:null===(t=this.$auth)||void 0===t||null===(e=t.user)||void 0===e?void 0:e.id,fileName:this.file.fileName,action:this.file.fileAction,fileId:this.file.id}},isSign:function(){return this.file.fileAction==h.a.SIGNED},isCreator:function(){var t,e,n,o,r,l;return this.file.userId==(null===(t=this.$auth)||void 0===t||null===(e=t.user)||void 0===e?void 0:e.id)||(null===(n=this.$auth)||void 0===n||null===(o=n.user)||void 0===o?void 0:o.teamAccess)==v.a.COMPANY_FILE&&(null===(r=this.$auth)||void 0===r||null===(l=r.user)||void 0===l?void 0:l.teamId)==this.file.userId},signLabel:function(){var t=new Date;return"P".concat(t.getFullYear()).concat(this.convertToDoubleString(t.getUTCDate())).concat(this.convertToDoubleString(t.getUTCDay())).concat(this.convertToDoubleString(t.getUTCHours())).concat(this.convertToDoubleString(t.getUTCMinutes())).concat(this.$auth.user.firstName.charAt(0)).concat(this.$auth.user.lastName.charAt(0)).toUpperCase()},confirmAnnotation:function(){var t=new Date;return{signaturePath:this.base64,text:"P".concat(t.getFullYear()).concat(this.convertToDoubleString(t.getUTCDate())).concat(this.convertToDoubleString(t.getUTCDay())).concat(this.convertToDoubleString(t.getUTCHours())).concat(this.convertToDoubleString(t.getUTCMinutes())).concat(this.$auth.user.firstName.charAt(0)).concat(this.$auth.user.lastName.charAt(0)).toUpperCase(),fileAction:this.file.fileAction}}},data:function(){return{showModal:!1,isLoading:!1,base64:null,proceedToSendEmail:!1,generatedPdf:{},showInitialModal:!1}},watch:{visible:function(t){this.showModal=t},showModal:function(t){this.$emit("updateVisibility",t)},"$auth.user":function(){var t,e;this.convertImageToBase64(null===(t=this.$auth)||void 0===t||null===(e=t.user)||void 0===e?void 0:e.signatureURL)}},mounted:function(){this.showModal=this.visible},methods:{imageExportedLocal:function(image,t){this.$BUS.$emit("signature-update",image),this.imageExported(image,"signature-update")},confirmCheckedTools:function(){return this.tools.filter((function(t,e){return 0==t.isChecked})).length>0},convertToDoubleString:function(t){return Number(t)<10?"0".concat(t):t},convertImageToBase64:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var o,r,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(t);case 2:return o=n.sent,n.next=5,o.blob();case 5:r=n.sent,(l=new FileReader).readAsDataURL(r),l.onloadend=function(){var t=l.result;e.base64=t};case 9:case"end":return n.stop()}}),n)})))()},addToLedger:function(){var t,e,n=this;this.$axios.post("/ledger?userId=".concat(null===(t=this.$auth)||void 0===t||null===(e=t.user)||void 0===e?void 0:e.id),A({},this.ledgerInfo)).then((function(){n.proceedToSendEmail=!0,n.publishAsGuest()})).catch((function(){n.$notify.error({message:"Error occcured, could not send file"})}))},appendConfirmSign:function(){console.log(Object(m.ExtractFormPdf)({downloadLink:this.file.downloadLink,file:this.confirmAnnotation,pdfOffset_y:this.pdfOffsetY,pdfOffset_x:this.pdfOffsetX}))},confirmAllSignAndInitials:function(){return this.$auth.user.id==this.file.userId||Object(m.ExtractFormPdf)(this.file.downloadLink)[0].data.filter((function(t){return t.hasOwnProperty("uploaded")&&null==t.uploaded})).length<1},confirmRequest:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.post("/pdf-generator",A({},Object(m.ExtractFormPdf)({downloadLink:t.file.downloadLink,file:t.confirmAnnotation,pdfOffset_y:t.pdfOffsetY,pdfOffset_x:t.pdfOffsetX,signLabel:t.signLabel})[0])).then((function(e){t.generatedPdf=e.data,t.addToLedger()})).catch((function(){})).finally((function(){t.isLoading=!1}));case 2:case"end":return e.stop()}}),e)})))()},otherRequest:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.post("/pdf-generator",A({},Object(m.ExtractFormPdf)({downloadLink:t.file.downloadLink,pdfOffset_y:t.pdfOffsetY,pdfOffset_x:t.pdfOffsetX,signLabel:t.signLabel})[0])).then((function(e){t.addToLedger(),t.generatedPdf=e.data})).catch((function(){t.$notify.error({message:"Error occcured, could not save file"})})).finally((function(){t.isLoading=!1}));case 2:case"end":return e.stop()}}),e)})))()},sendPdfToEmail:function(){var t=this,e={action:this.file.fileAction,link:this.generatedPdf.downloadLink,fileId:this.file.id};this.$axios.$post("/request",e).then((function(e){t.successAction(),t.$nuxt.refresh(),t.$store.commit("SET_PDF_EXIT",!0)})).catch((function(e){t.$notify.error({title:"Request",message:"Request Failed"})})).finally((function(){t.closeModal(),t.isLoading=!1,t.proceedToSendEmail=!1}))},allowLoadingAllAnnotations:function(t){return new Promise((function(e){setTimeout((function(){e()}),t)}))},publishAsGuest:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.closeModal(),t.tools=t.tools.filter((function(t){return 1!=t.isDeleted})),t.tools.map((function(e,n){"star"==e.type&&(e.completed=!0),"appendSignature"==e.type&&(e.completed=t.signature),"appendInitial"==e.type&&(e.completed=t.initial)})),t.$axios.patch("/files/".concat(t.file.id),{fileAction:t.file.fileAction,annotaions:JSON.stringify(t.tools)}).then((function(){})).catch((function(){t.$notify.error({message:"Error occcured, could not save file"})})).finally((function(){})),t.proceedToSendEmail){e.next=19;break}e.t0=t.file.fileAction,e.next=e.t0===h.a.CONFIRM?8:e.t0===h.a.SIGNED?11:e.t0===h.a.COMPLETE?14:17;break;case 8:return e.next=10,t.confirmRequest();case 10:return e.abrupt("break",17);case 11:return e.next=13,t.otherRequest();case 13:return e.abrupt("break",17);case 14:return e.next=16,t.otherRequest();case 16:return e.abrupt("break",17);case 17:e.next=20;break;case 19:t.sendPdfToEmail();case 20:case"end":return e.stop()}}),e)})))()},publishAsCreator:function(){var t=this;this.tools=this.tools.filter((function(t){return 1!=t.isDeleted})),this.$axios.patch("/files/".concat(this.file.id),{fileAction:this.file.fileAction,annotaions:JSON.stringify(this.tools)}).then((function(){t.closeModal(),t.$notify.success({message:"File publish successfully"}),t.$store.commit("SET_PDF_EXIT",!0),window.location.assign("/dashboard")})).catch((function(){t.$notify.error({message:"Error occcured, could not save file"})})).finally((function(){t.closeModal(),t.isLoading=!1}))},closeModal:function(){this.$emit("updateVisibility",!1)},successAction:function(){this.$emit("successFileFunction"),this.closeModal()},onSubmit:function(){var t=this;this.confirmAllSignAndInitials()?this.isCreator||this.$auth.user.signatureURL||this.file.fileAction!=h.a.CONFIRM?(this.$emit("startGeneratePdf",!0),this.appendConfirmSign(),this.isLoading=!0,this.isCreator||this.proceedToSendEmail?this.isCreator?this.publishAsCreator():this.publishAsGuest():(this.$notify.info({message:"Pdf generating.....",duration:7e3}),this.allowLoadingAllAnnotations(6e3).then((function(){t.isCreator?t.publishAsCreator():t.publishAsGuest(),t.$emit("startGeneratePdf",!1)}))),this.$emit("trackSubmitTools",this.tools)):this.showInitialModal=!0:this.$notify.error({message:"Input all signs and initial to save"})}}}),D=(n(1325),n(1)),component=Object(D.a)(O,(function(){var t,e,n=this,o=n._self._c;n._self._setupProxy;return o("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:n.showModal,"append-to-body":!0,"show-close":!1,center:""},on:{"update:visible":function(t){n.showModal=t}},scopedSlots:n._u([{key:"title",fn:function(){return[o("span",{staticClass:"text-center font-semibold text-xl"})]},proxy:!0}])},[o("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}},[o("span",{staticClass:"circle circle-12 bg-white cursor-pointer text-red-600",on:{click:function(t){return n.closeModal()}}},[o("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 3.19188L7.02451 0.167368C7.24767 -0.0557892 7.60948 -0.0557892 7.83263 0.167368C8.05579 0.390524 8.05579 0.752333 7.83263 0.975489L4.80812 4L7.83263 7.02451C8.05579 7.24767 8.05579 7.60948 7.83263 7.83263C7.60948 8.05579 7.24767 8.05579 7.02451 7.83263L4 4.80812L0.975489 7.83263C0.752333 8.05579 0.390524 8.05579 0.167368 7.83263C-0.0557892 7.60948 -0.0557892 7.24767 0.167368 7.02451L3.19188 4L0.167368 0.975489C-0.0557892 0.752333 -0.0557892 0.390524 0.167368 0.167368C0.390524 -0.0557892 0.752333 -0.0557892 0.975489 0.167368L4 3.19188Z",fill:"#414042"}})])])]),n._v(" "),n._v(" "),n.isCreator?o("div",{staticClass:"flex justify-center pb-2"},[o("CheckedFillIcon",{attrs:{width:"90"}})],1):n._e(),n._v(" "),n.isCreator?o("span",{staticClass:"w-full text-center block py-0 px-2 pb-8 text-[16px]"},[n._v("Publish file as\n    "),o("span",{staticClass:"capitalize"},[n._v(n._s(n.isCreator?n.file.fileAction:"".concat((n.file.fileAction+"ed").replace("ee","e"))))]),n._v("?")]):o("span",[n._v("Do you want these file to be saved as\n    "+n._s("".concat((n.file.fileAction+"ed").replace("ee","e")))+"?")]),n._v(" "),o("div",{staticClass:"flex justify-around mt-6"},[o("button",{staticClass:"disabled:bg-opacity-50 disabled:cursor-not-allowed h-10 text-xs w-[150px] max-w-[50%] text-white rounded-lg shadow bg-paperdazgray-400",attrs:{type:"button",disabled:n.isLoading},on:{click:function(t){return n.closeModal()}}},[n._v("\n      Cancel\n    ")]),n._v(" "),o("button",{staticClass:"disabled:bg-opacity-50 disabled:cursor-progress h-10 text-xs w-[150px] max-w-[50%] text-white rounded-lg shadow bg-paperdazgreen-400",attrs:{disabled:n.isLoading},on:{click:n.onSubmit}},[o("span",{staticClass:"inline-flex gap-1 items-center"},[n._v("\n        Yes\n        "),o("spinner-dotted-icon",{directives:[{name:"show",rawName:"v-show",value:n.isLoading,expression:"isLoading"}],staticClass:"animate-spin",attrs:{height:"20",width:"20"}})],1)])]),n._v(" "),o("draw-or-type-modal",{attrs:{src:(null===(t=n.$auth)||void 0===t||null===(e=t.user)||void 0===e?void 0:e.signatureURL)||" ","use-default-button":""},on:{"image-exported":function(t){return n.imageExportedLocal(t,!0)}},model:{value:n.showInitialModal,callback:function(t){n.showInitialModal=t},expression:"showInitialModal"}})],1)}),[],!1,null,"ec9f954a",null);e.default=component.exports},580:function(t,e,n){"use strict";n.r(e);var o=n(0).default.extend({name:"CheckFillIcon",props:["width","height"]}),r=n(1),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.width,height:"104",viewBox:"0 0 107 104",fill:"none"}},[e("path",{attrs:{d:"M53.5 0C23.9989 0 0 23.326 0 52C0 80.674 23.9989 104 53.5 104C83.0011 104 107 80.674 107 52C107 23.326 83.0011 0 53.5 0Z",fill:"#77C360"}}),t._v(" "),e("path",{attrs:{d:"M78.6775 41.1786L49.3593 68.8395C48.4797 69.6693 47.3251 70.087 46.1705 70.087C45.0159 70.087 43.8614 69.6693 42.9818 68.8395L28.3231 55.009C26.559 53.3454 26.559 50.6555 28.3231 48.9918C30.0863 47.3274 32.9365 47.3274 34.7006 48.9918L46.1705 59.8137L72.3 35.1614C74.0633 33.497 76.9134 33.497 78.6775 35.1614C80.4408 36.825 80.4408 39.5141 78.6775 41.1786Z",fill:"#FAFAFA"}})])}),[],!1,null,null,null);e.default=component.exports},668:function(t,e,n){"use strict";n.r(e),n.d(e,"formatStyleTop",(function(){return c})),n.d(e,"appendEditText",(function(){return d})),n.d(e,"appendEditElement",(function(){return f})),n.d(e,"appendUserActionElement",(function(){return h})),n.d(e,"appendEditImage",(function(){return m})),n.d(e,"appendDefaultConfirmSign",(function(){return v})),n.d(e,"appendDefaultConfirmText",(function(){return x})),n.d(e,"ExtractFormPdf",(function(){return w}));n(376),n(672),n(76),n(23),n(8),n(27),n(377),n(28);var o=n(149),r=n(687),l=n.n(r),c=function(t,e){var n=e.substring(e.indexOf(t)+t.length+1,e.indexOf("px"));return parseFloat(n.trim())},d=function(t){var e=t.parent,n=t.subParent,o=t.tools,r=t.elem,l=t.axisX,d=t.axisY,f=t.fontsize;e.data.push({page_number:n.indexOf(r),type:"DrawText",text:o,axisX:l[1]-l[0],axisY:d[1]>d[0]?d[1]-d[0]:d[0]-d[1],size:c("font-size",f)})},f=function(t){var e=t.parent,n=t.subParent,o=t.tools,option=t.option,r=t.elem,l=t.type,c=t.axisX,d=t.axisY,f=t.length,h=t.svgImagePath,m=t.svgWidth,v=t.svgHeight;e.data.push({page_number:n.indexOf(r),svgPath:o,axisX:c[1]-c[0],axisY:d[1]>d[0]?d[1]-d[0]:d[0]-d[1],type:l||"Annotation",option:option,length:f,svgImagePath:h,svgWidth:m,svgHeight:v})},h=function(t){var e=t.parent,n=t.subParent,o=t.elem,r=t.tool,l=t.axisX,c=t.axisY,d=t.axisX2,f=t.axisY2,h=t.uploaded;e.data.push({page_number:n.indexOf(o),type:"Image",uploaded:h,axisX:l[1]-l[0],axisY:c[1]>c[0]?c[1]-c[0]:c[0]-c[1],axisX2:d[1]-d[0],axisY2:f[1]-f[0],base64:r.children[0].src})},m=function(t){var e=t.parent,n=t.subParent,o=t.tools,r=t.elem,l=t.axisX,c=t.axisY,d=t.height,f=t.axisX2,h=t.axisY2;e.data.push({page_number:n.indexOf(r),base64:o,type:"Image",axisX:l[1]-l[0],axisX2:f[1]-f[0],axisY2:h[1]-h[0],axisY:c[1]>c[0]?c[1]-c[0]:c[0]-c[1],height:.73*parseFloat(d)})},v=function(t){var e=t.parent,n=t.subParent,o=t.signaturePath,r=t.elem,option=t.option;t.type;e.data.push({page_number:n.indexOf(r),signaturePath:o,option:option,type:"confirm"})},x=function(t){var e=t.parent,n=t.subParent,text=t.text,o=t.elem,option=t.option;t.type;e.data.push({page_number:n.indexOf(o),text:text,option:option,type:"confirm"})},w=function(t){var e=t.downloadLink,n=t.file,r=t.pdfOffset_y,c=t.pdfOffset_x,w=t.signLabel,y={pdf_url:e||"",pdfWidth:null,pdfHeight:null,data:[]},C=document.querySelectorAll(".pdf-single-page-outer"),R=document.querySelectorAll(".pdf-page"),_=Array.from(C);R.length?(y.pdfHeight="CANVAS"==R[0].children[0].tagName?R[0].children[0].getBoundingClientRect().height:R[0].children[1].getBoundingClientRect().height,y.pdfWidth="CANVAS"==R[0].children[0].tagName?R[0].children[0].getBoundingClientRect().width:R[0].children[1].getBoundingClientRect().width):(y.pdfHeight=0,y.pdfWidth=0),_.forEach((function(element){(n||{}).fileAction==o.a.CONFIRM&&(v({parent:y,subParent:_,signaturePath:n.signaturePath,elem:element,option:"sign"}),x({parent:y,subParent:_,text:String(n.text).trim(),elem:element,option:"text"})),element.children.length>1&&Array.from(element.children).forEach((function(t){t.classList.contains("tool-wrapper")&&Array.from((t.children[1]||t.children[0]).children).forEach((function(e){var n;switch(e.tagName){case"svg":f({parent:y,subParent:_,option:e.children[0].getAttribute("options"),elemScale:e.getAttribute("elemscale"),elem:element,type:e.children[0].getAttribute("type"),axisY:[element.getBoundingClientRect().top,t.getBoundingClientRect().top-r],axisX:[element.getBoundingClientRect().left,t.getBoundingClientRect().left-c],length:t.getBoundingClientRect().width,svgImagePath:e.children[0].getAttribute("svgToImage"),svgWidth:e.getBoundingClientRect().width,svgHeight:e.getBoundingClientRect().height});break;case"BUTTON":h({parent:y,subParent:_,uploaded:e.getAttribute("uploaded"),elem:element,tool:e,axisY:[element.getBoundingClientRect().top,t.children[0].children[0].children[0].getBoundingClientRect().top-r],axisX:[element.getBoundingClientRect().left,t.children[0].children[0].children[0].getBoundingClientRect().left-c],axisX2:[t.children[0].children[0].children[0].getBoundingClientRect().left,t.children[0].children[0].children[0].getBoundingClientRect().right],axisY2:[t.children[0].children[0].children[0].getBoundingClientRect().top,t.children[0].children[0].children[0].getBoundingClientRect().bottom],type:e.children[0].getAttribute("type")}),d({parent:y,subParent:_,axisY:[element.getBoundingClientRect().top-e.children[0].getBoundingClientRect().height,t.children[0].children[0].children[0].getBoundingClientRect().top-r],axisX:[element.getBoundingClientRect().left,t.children[0].children[0].children[0].getBoundingClientRect().left-c],attr:t.getAttribute("style"),tools:w,elem:element,fontsize:"8"});break;case"DIV":switch(null===(n=e.children[0])||void 0===n?void 0:n.tagName){case"svg":f({parent:y,subParent:_,elem:element,axisY:[element.getBoundingClientRect().top,t.getBoundingClientRect().top-r],axisX:[element.getBoundingClientRect().left,t.getBoundingClientRect().left-c],svgWidth:e.children[0].getBoundingClientRect().width,svgHeight:e.children[0].getBoundingClientRect().height,svgImagePath:e.children[0].children[0].getAttribute("svgToImage"),type:"DrawLine"});break;case"P":d({parent:y,subParent:_,axisY:[element.getBoundingClientRect().top,t.getBoundingClientRect().top-r],axisX:[element.getBoundingClientRect().left,t.getBoundingClientRect().left-c],tools:e.children[0].textContent,elem:element,fontsize:e.children[0].getAttribute("style")});break;case"IMG":m({parent:y,subParent:_,attr:t.getAttribute("style"),elemScale:e.getAttribute("elemscale"),tools:e.children[0].src,elem:element,axisY:[element.getBoundingClientRect().top,t.getBoundingClientRect().top-r],axisY2:[e.children[0].getBoundingClientRect().top,e.children[0].getBoundingClientRect().bottom],axisX:[element.getBoundingClientRect().left,t.getBoundingClientRect().left-c],axisX2:[t.getBoundingClientRect().left,t.getBoundingClientRect().right],height:e.children[0].getBoundingClientRect().height}),d({parent:y,subParent:_,axisY:[element.getBoundingClientRect().top-e.children[0].getBoundingClientRect().height,t.getBoundingClientRect().top-r],axisX:[element.getBoundingClientRect().left,t.getBoundingClientRect().left-c],tools:w,elem:element,fontsize:"8"})}break;default:console.log("it is default"+e.tagName)}}))}))}));var k=document.querySelectorAll(".pdf-page");return Array.from(k).forEach((function(element){Array.from(element.children).forEach((function(t){if(t.classList.contains("annotationLayer")){var e=l()(".annotationLayer").find(":input");Array.from(e).forEach((function(t){switch(console.log(t.type),t.type){case"text":case"textarea":case"date":y.data.push({type:"PDFTextField",fieldName:t.name,value:t.value});break;case"checkbox":y.data.push({type:"PDFCheckBox",fieldName:t.name,isCheck:t.checked});break;case"select-one":case"select":y.data.push({type:"PDFDropdown",fieldName:t.name,value:t.value});break;case"radio":y.data.push({type:"PDFRadioGroup",fieldName:t.name,value:t.checked,checkedIndex:0})}}))}}))})),[y,[]]}},672:function(t,e,n){"use strict";var o=n(5),r=n(378);o({target:"String",proto:!0,forced:n(379)("fontsize")},{fontsize:function(t){return r(this,"font","size",t)}})},713:function(t,e,n){"use strict";var o=n(3),r=(n(21),n(8),n(810),n(811),n(812),n(813),n(814),n(815),n(816),n(817),n(818),n(819),n(820),n(821),n(822),n(823),n(824),n(825),n(826),n(827),n(828),n(829),n(830),n(831),n(832),n(833),n(834),n(43));e.a={data:function(){return{fetchDataSign:{},fetchDataInitial:{}}},mounted:function(){this.getUserSignatureToBlob()},mixins:[r.a],methods:{getUserSignatureToBlob:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(null===(o=null===(n=t.$auth)||void 0===n?void 0:n.user)||void 0===o?void 0:o.signatureURL).then((function(t){return t.blob()}));case 2:return t.fetchDataSign=e.sent,e.next=5,fetch(null===(l=null===(r=t.$auth)||void 0===r?void 0:r.user)||void 0===l?void 0:l.initialURL).then((function(t){return t.blob()}));case 5:t.fetchDataInitial=e.sent;case 6:case"end":return e.stop()}}),e)})))()},dataURIToBlob:function(t){var e=t.split(",");if(!(e.length<1)){for(var n=e[0].indexOf("base64")>=0?atob(e[1]):decodeURI(e[1]),o=e[0].split(":")[1].split(";")[0],r=new Uint8Array(n.length),i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return new Blob([r],{type:o})}},imageExported:function(image,t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var r,l,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.dataURIToBlob(image).size!=e.fetchDataSign.size){n.next=4;break}return n.abrupt("return");case 4:if(e.dataURIToBlob(image).size!=e.fetchDataInitial.size){n.next=6;break}return n.abrupt("return");case 6:(c=new FormData).append("upload",e.dataURIToBlob(image)),c.append("type",t?"signature":"initial"),c.append("userId",null===(l=null===(r=e.$auth||{})||void 0===r?void 0:r.user)||void 0===l?void 0:l.id),e.$axios.$post("/files",c).then(Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.filterUsers();case 2:e.$notify.success({title:t?"Signature":"Initials",message:"Your ".concat(t?"signature":"initials"," has been uploaded")});case 3:case"end":return n.stop()}}),n)})))).catch((function(n){e.$notify.error({title:t?"Signature":"Initials",message:n.message||"Error uploading ".concat(t?"signature":"initials")})}));case 11:case"end":return n.stop()}}),n)})))()}}}},742:function(t,e,n){var content=n(838);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("bcefba84",content,!0,{sourceMap:!1})},743:function(t,e,n){var content=n(840);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("38a03ada",content,!0,{sourceMap:!1})},755:function(t,e,n){"use strict";n.r(e);var o=n(3),r=(n(21),n(377),n(8),n(0)),l=n(747),c=n(748),d=r.default.extend({name:"DrawOrTypeModal",model:{prop:"visible",event:"updateVisibility"},props:{visible:{type:Boolean,default:!1},src:{type:String,default:"https://ichef.bbci.co.uk/news/976/cpsprodpb/B9FF/production/_117751674_satan-shoes1.jpg"},useDefaultButton:{type:Boolean,default:!1}},data:function(){return{showModal:!1,forceDisplaySrc:!0,activeTab:"draw",tabs:[{label:"Draw",value:"draw",component:l.default},{label:"Type",value:"type",component:c.default}]}},watch:{visible:function(t){this.showModal=t,this.forceDisplaySrc=!0},showModal:function(t){this.$emit("updateVisibility",t)}},mounted:function(){this.showModal=this.visible},computed:{displayDefault:function(){return this.forceDisplaySrc&&!!this.src},activeTabComponent:function(){var t=this,e=this.tabs.find((function(e){return e.value===t.activeTab}));return e&&e.component?e.component:{render:function(t){return t("h1","Not Implemented")}}}},methods:{useDefaultImage:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.displayDefault){e.next=2;break}return e.abrupt("return");case 2:console.log("using the default image"),Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.src);case 2:return n=e.sent,e.next=5,n.blob();case 5:o=e.sent,(r=new FileReader).readAsDataURL(o),r.onloadend=function(){var e=r.result;t.imageExported(e)};case 9:case"end":return e.stop()}}),e)})))();case 4:case"end":return e.stop()}}),e)})))()},closeModal:function(){this.$emit("updateVisibility",!1)},clear:function(){if(this.displayDefault)this.forceDisplaySrc=!1;else{var t=this.$refs.activeTabComponent;t&&t.clear()}},exportImage:function(){var t=this.$refs.activeTabComponent;t&&t.exportImage()},imageExported:function(image){image&&(this.$emit("image-exported",image),this.closeModal())}}}),f=(n(837),n(839),n(1)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("el-dialog",{attrs:{visible:t.showModal,appendToBody:!0,showClose:!1,center:""},on:{"update:visible":function(e){t.showModal=e}},scopedSlots:t._u([{key:"title",fn:function(){return[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.displayDefault,expression:"!displayDefault"}],staticClass:"tab-container"},t._l(t.tabs,(function(n){return e("button",{key:n.value,staticClass:"tab-button",class:{active:t.activeTab===n.value},on:{click:function(e){t.activeTab=n.value}}},[t._v("\n        "+t._s(n.label)+"\n      ")])})),0)]},proxy:!0},{key:"footer",fn:function(){return[e("div",{staticClass:"flex items-center justify-between gap-4"},[e("button",{staticClass:"h-9 rounded border border-gray-100 text-xs px-5 bg-black text-white hover:shadow",on:{click:t.clear}},[t._v("\n        "+t._s(t.displayDefault?"EDIT":"CLEAR")+"\n      ")]),t._v(" "),e("div",{staticClass:"flex items-center justify-end gap-4"},[e("button",{staticClass:"h-9 rounded border border-gray-100 text-paperdazgreen-300 text-xs px-3 bg-white hover:shadow",on:{click:t.closeModal}},[t._v("\n          CANCEL\n        ")]),t._v(" "),e("button",{directives:[{name:"show",rawName:"v-show",value:!t.displayDefault,expression:"!displayDefault"}],staticClass:"h-9 rounded border border-gray-100 bg-paperdazgreen-300 text-xs text-white px-4 hover:shadow",on:{click:t.exportImage}},[t._v("\n          SAVE\n        ")]),t._v(" "),e("button",{directives:[{name:"show",rawName:"v-show",value:t.displayDefault&&t.useDefaultButton,expression:"displayDefault && useDefaultButton"}],staticClass:"h-9 rounded border border-gray-100 bg-paperdazgreen-300 text-xs text-white px-4 hover:shadow",on:{click:t.useDefaultImage}},[t._v("\n          USE\n        ")])])])]},proxy:!0}])},[t._v(" "),e("div",{staticClass:"text-center pb-2"},[t._v("Draw your "+t._s(t.displayDefault?"Signature":"Initial"))]),t._v(" "),e("transition",{attrs:{mode:"out-in",name:"fade",duration:200}},[t.displayDefault?e("div",{key:"updating",staticClass:"w-full"},[e("transition",{attrs:{mode:"out-in",name:"fade",duration:200}},[e(t.activeTabComponent,{ref:"activeTabComponent",tag:"component",on:{"export-image":function(e){return t.imageExported(e)}}})],1)],1):e("div",{key:"default",staticClass:"border h-56 border-[#C4C4C4] rounded w-full bg-white flex justify-center items-center overflow-hidden p-4"},[e("img",{staticClass:"h-full w-full object-contain",attrs:{src:t.src}})])])],1)}),[],!1,null,"12173650",null);e.default=component.exports},835:function(t,e,n){t.exports=n.p+"img/initials.2253fb2.png"},836:function(t,e,n){t.exports=n.p+"img/sign.10a8143.png"},837:function(t,e,n){"use strict";n(742)},838:function(t,e,n){var o=n(17)((function(i){return i[1]}));o.push([t.i,"*[data-v-12173650] .el-dialog{width:500px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden;background:#f6f6f6}*[data-v-12173650] .el-dialog__header{padding:0}*[data-v-12173650] .el-dialog__footer,*[data-v-12173650] .el-dialog__header{text-align:left!important;padding-top:0}*[data-v-12173650] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),o.locals={},t.exports=o},839:function(t,e,n){"use strict";n(743)},840:function(t,e,n){var o=n(17)((function(i){return i[1]}));o.push([t.i,'.tab-container[data-v-12173650]{display:flex;width:100%;border-bottom-width:1px;border-color:rgb(119 181 80 / 0.3)}.tab-button[data-v-12173650]{position:relative;flex:1 1 0%;border-style:none;background-color:rgb(133 131 131 / 0.8);padding-left:0.5rem;padding-right:0.5rem;padding-top:0.75rem;padding-bottom:0.75rem;font-size:0.875rem;line-height:1.25rem;font-weight:500;letter-spacing:0.05em;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.tab-button[data-v-12173650]:hover{--tw-bg-opacity:1;background-color:rgb(133 131 131 / var(--tw-bg-opacity))}.tab-button[data-v-12173650]:not(:last-child):after{background-color:rgb(119 181 80 / 0.3);content:"";position:absolute;height:80%;width:1px;top:50%;right:0;transform:translate(50%,-50%)}.tab-button.active[data-v-12173650]{background-color:rgb(119 181 80 / 0.8);--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}',""]),o.locals={},t.exports=o},897:function(t,e,n){var content=n(1326);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("14125926",content,!0,{sourceMap:!1})}}]);