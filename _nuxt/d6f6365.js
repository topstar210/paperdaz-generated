(window.webpackJsonp=window.webpackJsonp||[]).push([[160,17,110],{1343:function(e,t,n){var content=n(1584);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("bb0dba46",content,!0,{sourceMap:!1})},1583:function(e,t,n){"use strict";n(1343)},1584:function(e,t,n){var l=n(17)((function(i){return i[1]}));l.push([e.i,"*[data-v-268fb651] .el-dialog{width:416px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-268fb651] .el-dialog__header{padding-bottom:20px}*[data-v-268fb651] .el-dialog__footer,*[data-v-268fb651] .el-dialog__header{text-align:left!important}*[data-v-268fb651] .el-dialog__body{background:#fcfcfd}*[data-v-268fb651] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),l.locals={},e.exports=l},1661:function(e,t,n){"use strict";n.r(t);n(23),n(52);var l=n(0),o=n(75),r=(n(103),n(798),n(703),n(263),n(699),n(4),n(150),n(609)),d=l.default.extend({name:"SuccessFileModal",components:{SpinnerDottedIcon:o.default,CheckedFillIcon:r.default},model:{prop:"visible",event:"updateVisibility"},props:{visible:{type:Boolean,default:!1},file:{type:Object}},data:function(){return{showModal:!1,errorMessage:"",loading:!1,newSaveData:{},sendAction:null}},watch:{visible:function(e){this.showModal=e},showModal:function(e){this.$emit("updateVisibility",e)}},mounted:function(){this.showModal=this.visible},methods:{closeModal:function(){this.$emit("updateVisibility",!1)}}}),c=(n(1583),n(1)),component=Object(c.a)(d,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:e.showModal,"append-to-body":!0,"show-close":!1,center:""},on:{"update:visible":function(t){e.showModal=t}},scopedSlots:e._u([{key:"title",fn:function(){return[t("span",{staticClass:"text-center font-semibold text-xl"})]},proxy:!0}])},[e._v(" "),t("div",{staticClass:"flex justify-center pb-2"},[t("CheckedFillIcon",{attrs:{width:"70"}})],1),e._v(" "),t("span",{staticClass:"w-full text-center block py-0 px-2 pb-8 text-[16px] break-normal"},[e._v("File "+e._s("".concat((e.file.fileAction+"ed").replace("ee","e")))+", a copy sent to "),t("span",{staticClass:"text-paperdazgreen-300"},[e._v(e._s(e.file.user.firstName)+" "+e._s(e.file.user.lastName))]),e._v(" another sent to your email.")]),e._v(" "),t("div",{staticClass:"flex justify-around"},[t("button",{staticClass:"disabled:bg-opacity-50 disabled:cursor-progress h-10 text-xs w-[150px] max-w-[50%] text-white rounded-lg shadow bg-paperdazgreen-400",attrs:{disabled:e.loading},on:{click:function(t){return e.closeModal()}}},[t("span",{staticClass:"inline-flex gap-1 items-center text-[16px]"},[e._v("\n        Ok\n        "),t("spinner-dotted-icon",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"animate-spin",attrs:{height:"20",width:"20"}})],1)])])])}),[],!1,null,"268fb651",null);t.default=component.exports},609:function(e,t,n){"use strict";n.r(t);var l=n(0).default.extend({name:"CheckFillIcon",props:["width","height"]}),o=n(1),component=Object(o.a)(l,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:e.width,height:"104",viewBox:"0 0 107 104",fill:"none"}},[t("path",{attrs:{d:"M53.5 0C23.9989 0 0 23.326 0 52C0 80.674 23.9989 104 53.5 104C83.0011 104 107 80.674 107 52C107 23.326 83.0011 0 53.5 0Z",fill:"#77C360"}}),e._v(" "),t("path",{attrs:{d:"M78.6775 41.1786L49.3593 68.8395C48.4797 69.6693 47.3251 70.087 46.1705 70.087C45.0159 70.087 43.8614 69.6693 42.9818 68.8395L28.3231 55.009C26.559 53.3454 26.559 50.6555 28.3231 48.9918C30.0863 47.3274 32.9365 47.3274 34.7006 48.9918L46.1705 59.8137L72.3 35.1614C74.0633 33.497 76.9134 33.497 78.6775 35.1614C80.4408 36.825 80.4408 39.5141 78.6775 41.1786Z",fill:"#FAFAFA"}})])}),[],!1,null,null,null);t.default=component.exports},703:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));n(385),n(704),n(76),n(24),n(8),n(27),n(386),n(28);var l=n(150),o=n(734),r=n.n(o),d=function(e,t){var n=t.substring(t.indexOf(e)+e.length+1,t.indexOf("px"));return parseFloat(n.trim())},c=function(e){var t=e.parent,n=e.subParent,l=e.tools,o=e.elem,r=e.axisX,c=e.axisY,h=e.fontsize;t.data.push({page_number:n.indexOf(o),type:"DrawText",text:l,axisX:r[1]-r[0],axisY:c[1]>c[0]?c[1]-c[0]:c[0]-c[1],size:d("font-size",h)})},h=function(e){var t=e.parent,n=e.subParent,l=e.tools,option=e.option,o=e.elem,r=e.type,d=e.axisX,c=e.axisY,h=e.length,f=e.svgImagePath,x=e.svgWidth,m=e.svgHeight;t.data.push({page_number:n.indexOf(o),svgPath:l,axisX:d[1]-d[0],axisY:c[1]>c[0]?c[1]-c[0]:c[0]-c[1],type:r||"Annotation",option:option,length:h,svgImagePath:f,svgWidth:x,svgHeight:m})},f=function(e){var t=e.downloadLink,n=e.file,o=e.pdfOffset_y,d=e.pdfOffset_x,f=e.signLabel,x={pdf_url:t||"",pdfWidth:null,pdfHeight:null,data:[]},m=document.querySelectorAll(".pdf-single-page-outer"),C=document.querySelectorAll(".pdf-page"),v=Array.from(m);C.length?(x.pdfHeight="CANVAS"==C[0].children[0].tagName?C[0].children[0].getBoundingClientRect().height:C[0].children[1].getBoundingClientRect().height,x.pdfWidth="CANVAS"==C[0].children[0].tagName?C[0].children[0].getBoundingClientRect().width:C[0].children[1].getBoundingClientRect().width):(x.pdfHeight=0,x.pdfWidth=0),v.forEach((function(element){var e,t,r,m,C,option;if((n||{}).fileAction==l.a.CONFIRM&&(e={parent:x,subParent:v,signaturePath:n.signaturePath,elem:element,option:"sign"},t=e.parent,r=e.subParent,m=e.signaturePath,C=e.elem,option=e.option,e.type,t.data.push({page_number:r.indexOf(C),signaturePath:m,option:option,type:"confirm"}),function(e){var t=e.parent,n=e.subParent,text=e.text,l=e.elem,option=e.option;e.type,t.data.push({page_number:n.indexOf(l),text:text,option:option,type:"confirm"})}({parent:x,subParent:v,text:String(n.text).trim(),elem:element,option:"text"})),element.children.length>1){Array.from(element.children).forEach((function(e){e.classList.contains("tool-wrapper")&&Array.from((e.children[1]||e.children[0]).children).forEach((function(t){var n;switch(t.tagName){case"svg":h({parent:x,subParent:v,option:t.children[0].getAttribute("options"),elemScale:t.getAttribute("elemscale"),elem:element,type:t.children[0].getAttribute("type"),axisY:[element.getBoundingClientRect().top,e.getBoundingClientRect().top-o],axisX:[element.getBoundingClientRect().left,e.getBoundingClientRect().left-d],length:e.getBoundingClientRect().width,svgImagePath:t.children[0].getAttribute("svgToImage"),svgWidth:t.getBoundingClientRect().width,svgHeight:t.getBoundingClientRect().height});break;case"BUTTON":!function(e){var t=e.parent,n=e.subParent,l=e.elem,o=e.tool,r=e.axisX,d=e.axisY,c=e.axisX2,h=e.axisY2,f=e.uploaded;t.data.push({page_number:n.indexOf(l),type:"Image",uploaded:f,axisX:r[1]-r[0],axisY:d[1]>d[0]?d[1]-d[0]:d[0]-d[1],axisX2:c[1]-c[0],axisY2:h[1]-h[0],base64:o.children[0].src})}({parent:x,subParent:v,uploaded:t.getAttribute("uploaded"),elem:element,tool:t,axisY:[element.getBoundingClientRect().top,e.children[0].children[0].children[0].getBoundingClientRect().top-o],axisX:[element.getBoundingClientRect().left,e.children[0].children[0].children[0].getBoundingClientRect().left-d],axisX2:[e.children[0].children[0].children[0].getBoundingClientRect().left,e.children[0].children[0].children[0].getBoundingClientRect().right],axisY2:[e.children[0].children[0].children[0].getBoundingClientRect().top,e.children[0].children[0].children[0].getBoundingClientRect().bottom],type:t.children[0].getAttribute("type")}),c({parent:x,subParent:v,axisY:[element.getBoundingClientRect().top-t.children[0].getBoundingClientRect().height,e.children[0].children[0].children[0].getBoundingClientRect().top-o],axisX:[element.getBoundingClientRect().left,e.children[0].children[0].children[0].getBoundingClientRect().left-d],attr:e.getAttribute("style"),tools:f,elem:element,fontsize:"8"});break;case"DIV":switch(null===(n=t.children[0])||void 0===n?void 0:n.tagName){case"svg":h({parent:x,subParent:v,elem:element,axisY:[element.getBoundingClientRect().top,e.getBoundingClientRect().top-o],axisX:[element.getBoundingClientRect().left,e.getBoundingClientRect().left-d],svgWidth:t.children[0].getBoundingClientRect().width,svgHeight:t.children[0].getBoundingClientRect().height,svgImagePath:t.children[0].children[0].getAttribute("svgToImage"),type:"DrawLine"});break;case"P":c({parent:x,subParent:v,axisY:[element.getBoundingClientRect().top,e.getBoundingClientRect().top-o],axisX:[element.getBoundingClientRect().left,e.getBoundingClientRect().left-d],tools:t.children[0].textContent,elem:element,fontsize:t.children[0].getAttribute("style")});break;case"IMG":!function(e){var t=e.parent,n=e.subParent,l=e.tools,o=e.elem,r=e.axisX,d=e.axisY,c=(e.height,e.axisX2),h=e.axisY2;t.data.push({page_number:n.indexOf(o),base64:l,type:"Image",axisX:r[1]-r[0],axisX2:c[1]-c[0],axisY2:h[1]-h[0],axisY:d[1]>d[0]?d[1]-d[0]:d[0]-d[1],uploaded:"true"})}({parent:x,subParent:v,attr:e.getAttribute("style"),elemScale:t.getAttribute("elemscale"),tools:t.children[0].src,elem:element,axisY:[element.getBoundingClientRect().top,e.getBoundingClientRect().top-o],axisY2:[t.children[0].getBoundingClientRect().top,t.children[0].getBoundingClientRect().bottom],axisX:[element.getBoundingClientRect().left,e.getBoundingClientRect().left-d],axisX2:[e.children[0].children[0].children[0].getBoundingClientRect().left,e.children[0].children[0].children[0].getBoundingClientRect().right],height:t.children[0].getBoundingClientRect().height}),c({parent:x,subParent:v,axisY:[element.getBoundingClientRect().top-t.children[0].getBoundingClientRect().height,e.getBoundingClientRect().top-o],axisX:[element.getBoundingClientRect().left,e.getBoundingClientRect().left-d],tools:f,elem:element,fontsize:"8"})}break;default:console.log("it is default"+t.tagName)}}))}))}}));var y=document.querySelectorAll(".pdf-page");return Array.from(y).forEach((function(element){Array.from(element.children).forEach((function(e){if(e.classList.contains("annotationLayer")){var t=r()(".annotationLayer").find(":input");Array.from(t).forEach((function(e){switch(e.type){case"text":case"textarea":case"date":x.data.push({type:"PDFTextField",fieldName:e.name,value:e.value});break;case"checkbox":x.data.push({type:"PDFCheckBox",fieldName:e.name,isCheck:e.checked});break;case"select-one":case"select":x.data.push({type:"PDFDropdown",fieldName:e.name,value:e.value});break;case"radio":x.data.push({type:"PDFRadioGroup",fieldName:e.name,value:e.checked,checkedIndex:0})}}))}}))})),[x,[]]}},704:function(e,t,n){"use strict";var l=n(5),o=n(387);l({target:"String",proto:!0,forced:n(388)("fontsize")},{fontsize:function(e){return o(this,"font","size",e)}})},707:function(e,t){},708:function(e,t){},709:function(e,t){},710:function(e,t){},711:function(e,t){},712:function(e,t){},713:function(e,t){},714:function(e,t){},715:function(e,t){},716:function(e,t){},798:function(e,t,n){"use strict";n(384),n(385),n(76),n(24),n(8),n(27)}}]);