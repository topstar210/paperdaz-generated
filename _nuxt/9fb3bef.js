(window.webpackJsonp=window.webpackJsonp||[]).push([[117,107],{668:function(e,t,n){"use strict";n.r(t),n.d(t,"formatStyleTop",(function(){return d})),n.d(t,"appendEditText",(function(){return c})),n.d(t,"appendEditElement",(function(){return h})),n.d(t,"appendUserActionElement",(function(){return f})),n.d(t,"appendEditImage",(function(){return x})),n.d(t,"appendDefaultConfirmSign",(function(){return m})),n.d(t,"appendDefaultConfirmText",(function(){return C})),n.d(t,"ExtractFormPdf",(function(){return B}));n(376),n(672),n(76),n(23),n(8),n(27),n(377),n(28);var r=n(149),l=n(687),o=n.n(l),d=function(e,t){var n=t.substring(t.indexOf(e)+e.length+1,t.indexOf("px"));return parseFloat(n.trim())},c=function(e){var t=e.parent,n=e.subParent,r=e.tools,l=e.elem,o=e.axisX,c=e.axisY,h=e.fontsize;t.data.push({page_number:n.indexOf(l),type:"DrawText",text:r,axisX:o[1]-o[0],axisY:c[1]>c[0]?c[1]-c[0]:c[0]-c[1],size:d("font-size",h)})},h=function(e){var t=e.parent,n=e.subParent,r=e.tools,option=e.option,l=e.elem,o=e.type,d=e.axisX,c=e.axisY,h=e.length,f=e.svgImagePath,x=e.svgWidth,m=e.svgHeight;t.data.push({page_number:n.indexOf(l),svgPath:r,axisX:d[1]-d[0],axisY:c[1]>c[0]?c[1]-c[0]:c[0]-c[1],type:o||"Annotation",option:option,length:h,svgImagePath:f,svgWidth:x,svgHeight:m})},f=function(e){var t=e.parent,n=e.subParent,r=e.elem,l=e.tool,o=e.axisX,d=e.axisY,c=e.axisX2,h=e.axisY2,f=e.uploaded;t.data.push({page_number:n.indexOf(r),type:"Image",uploaded:f,axisX:o[1]-o[0],axisY:d[1]>d[0]?d[1]-d[0]:d[0]-d[1],axisX2:c[1]-c[0],axisY2:h[1]-h[0],base64:l.children[0].src})},x=function(e){var t=e.parent,n=e.subParent,r=e.tools,l=e.elem,o=e.axisX,d=e.axisY,c=(e.height,e.axisX2),h=e.axisY2;t.data.push({page_number:n.indexOf(l),base64:r,type:"Image",axisX:o[1]-o[0],axisX2:c[1]-c[0],axisY2:h[1]-h[0],axisY:d[1]>d[0]?d[1]-d[0]:d[0]-d[1],uploaded:"true"})},m=function(e){var t=e.parent,n=e.subParent,r=e.signaturePath,l=e.elem,option=e.option;e.type;t.data.push({page_number:n.indexOf(l),signaturePath:r,option:option,type:"confirm"})},C=function(e){var t=e.parent,n=e.subParent,text=e.text,r=e.elem,option=e.option;e.type;t.data.push({page_number:n.indexOf(r),text:text,option:option,type:"confirm"})},B=function(e){var t=e.downloadLink,n=e.file,l=e.pdfOffset_y,d=e.pdfOffset_x,B=e.signLabel,R={pdf_url:t||"",pdfWidth:null,pdfHeight:null,data:[]},v=document.querySelectorAll(".pdf-single-page-outer"),y=document.querySelectorAll(".pdf-page"),P=Array.from(v);y.length?(R.pdfHeight="CANVAS"==y[0].children[0].tagName?y[0].children[0].getBoundingClientRect().height:y[0].children[1].getBoundingClientRect().height,R.pdfWidth="CANVAS"==y[0].children[0].tagName?y[0].children[0].getBoundingClientRect().width:y[0].children[1].getBoundingClientRect().width):(R.pdfHeight=0,R.pdfWidth=0),P.forEach((function(element){(n||{}).fileAction==r.a.CONFIRM&&(m({parent:R,subParent:P,signaturePath:n.signaturePath,elem:element,option:"sign"}),C({parent:R,subParent:P,text:String(n.text).trim(),elem:element,option:"text"})),element.children.length>1&&Array.from(element.children).forEach((function(e){e.classList.contains("tool-wrapper")&&Array.from((e.children[1]||e.children[0]).children).forEach((function(t){var n;switch(t.tagName){case"svg":h({parent:R,subParent:P,option:t.children[0].getAttribute("options"),elemScale:t.getAttribute("elemscale"),elem:element,type:t.children[0].getAttribute("type"),axisY:[element.getBoundingClientRect().top,e.getBoundingClientRect().top-l],axisX:[element.getBoundingClientRect().left,e.getBoundingClientRect().left-d],length:e.getBoundingClientRect().width,svgImagePath:t.children[0].getAttribute("svgToImage"),svgWidth:t.getBoundingClientRect().width,svgHeight:t.getBoundingClientRect().height});break;case"BUTTON":f({parent:R,subParent:P,uploaded:t.getAttribute("uploaded"),elem:element,tool:t,axisY:[element.getBoundingClientRect().top,e.children[0].children[0].children[0].getBoundingClientRect().top-l],axisX:[element.getBoundingClientRect().left,e.children[0].children[0].children[0].getBoundingClientRect().left-d],axisX2:[e.children[0].children[0].children[0].getBoundingClientRect().left,e.children[0].children[0].children[0].getBoundingClientRect().right],axisY2:[e.children[0].children[0].children[0].getBoundingClientRect().top,e.children[0].children[0].children[0].getBoundingClientRect().bottom],type:t.children[0].getAttribute("type")}),c({parent:R,subParent:P,axisY:[element.getBoundingClientRect().top-t.children[0].getBoundingClientRect().height,e.children[0].children[0].children[0].getBoundingClientRect().top-l],axisX:[element.getBoundingClientRect().left,e.children[0].children[0].children[0].getBoundingClientRect().left-d],attr:e.getAttribute("style"),tools:B,elem:element,fontsize:"8"});break;case"DIV":switch(null===(n=t.children[0])||void 0===n?void 0:n.tagName){case"svg":h({parent:R,subParent:P,elem:element,axisY:[element.getBoundingClientRect().top,e.getBoundingClientRect().top-l],axisX:[element.getBoundingClientRect().left,e.getBoundingClientRect().left-d],svgWidth:t.children[0].getBoundingClientRect().width,svgHeight:t.children[0].getBoundingClientRect().height,svgImagePath:t.children[0].children[0].getAttribute("svgToImage"),type:"DrawLine"});break;case"P":c({parent:R,subParent:P,axisY:[element.getBoundingClientRect().top,e.getBoundingClientRect().top-l],axisX:[element.getBoundingClientRect().left,e.getBoundingClientRect().left-d],tools:t.children[0].textContent,elem:element,fontsize:t.children[0].getAttribute("style")});break;case"IMG":x({parent:R,subParent:P,attr:e.getAttribute("style"),elemScale:t.getAttribute("elemscale"),tools:t.children[0].src,elem:element,axisY:[element.getBoundingClientRect().top,e.getBoundingClientRect().top-l],axisY2:[t.children[0].getBoundingClientRect().top,t.children[0].getBoundingClientRect().bottom],axisX:[element.getBoundingClientRect().left,e.getBoundingClientRect().left-d],axisX2:[e.children[0].children[0].children[0].getBoundingClientRect().left,e.children[0].children[0].children[0].getBoundingClientRect().right],height:t.children[0].getBoundingClientRect().height}),c({parent:R,subParent:P,axisY:[element.getBoundingClientRect().top-t.children[0].getBoundingClientRect().height,e.getBoundingClientRect().top-l],axisX:[element.getBoundingClientRect().left,e.getBoundingClientRect().left-d],tools:B,elem:element,fontsize:"8"})}break;default:console.log("it is default"+t.tagName)}}))}))}));var A=document.querySelectorAll(".pdf-page");return Array.from(A).forEach((function(element){Array.from(element.children).forEach((function(e){if(e.classList.contains("annotationLayer")){var t=o()(".annotationLayer").find(":input");Array.from(t).forEach((function(e){switch(console.log(e.type),e.type){case"text":case"textarea":case"date":R.data.push({type:"PDFTextField",fieldName:e.name,value:e.value});break;case"checkbox":R.data.push({type:"PDFCheckBox",fieldName:e.name,isCheck:e.checked});break;case"select-one":case"select":R.data.push({type:"PDFDropdown",fieldName:e.name,value:e.value});break;case"radio":R.data.push({type:"PDFRadioGroup",fieldName:e.name,value:e.checked,checkedIndex:0})}}))}}))})),[R,[]]}},672:function(e,t,n){"use strict";var r=n(5),l=n(378);r({target:"String",proto:!0,forced:n(379)("fontsize")},{fontsize:function(e){return l(this,"font","size",e)}})}}]);