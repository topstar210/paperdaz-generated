/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{1126:function(t,e,n){"use strict";n(904)},1127:function(t,e,n){var o=n(17)((function(i){return i[1]}));o.push([t.i,".absolute-image[data-v-79ab3f02]{transition:.25s;max-width:200px;width:70px;height:auto;position:absolute;top:0px;left:5%;opacity:1}",""]),o.locals={},t.exports=o},1408:function(t,e,n){"use strict";n.r(e);n(43),n(34),n(42),n(55),n(27),n(56);var o=n(3),r=n(13),h=(n(21),n(384),n(8),n(763)),c=n(728),l=n(22),d=n(389),m=n(124),v=n(151);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y,x=Object(l.a)(c.a).extend({props:{scale:Number,file:Object,completed:String},data:function(){return{showSignatureModal:!1,signature:null,initialimgDisplay:!1,completedImgData:null}},mounted:function(){this.changeSignToBase64(),this.completed&&this.changeSignToBase64(this.completed)},computed:w(w({},Object(m.e)(["loadedPdfFile"])),{},{uploaded:function(){var t,e;switch(this.$auth.loggedIn){case!0:return null!==(null===(t=this.$auth)||void 0===t||null===(e=t.user)||void 0===e?void 0:e.signatureURL)&&!this.isCreator;case!1:return!1}},isSign:function(){return String(this.file.fileAction).toLowerCase()===v.a.SIGNED},isAgreedSign:function(){return this.$store.state.agreeSign},isCreator:function(){var t,e,n,o,r,h;return this.file.userId==(null===(t=this.$auth)||void 0===t||null===(e=t.user)||void 0===e?void 0:e.id)||(null===(n=this.$auth)||void 0===n||null===(o=n.user)||void 0===o?void 0:o.teamAccess)==d.a.COMPANY_FILE&&(null===(r=this.$auth)||void 0===r||null===(h=r.user)||void 0===h?void 0:h.teamId)==this.file.userId},style:function(){return{width:"auto",height:"".concat(20*(this.scale||1),"px")}}}),methods:{changeSignToBase64:function(t){var e,n,o=this,r=function(t){return fetch(t).then((function(t){return t.blob()})).then((function(t){return new Promise((function(e,n){var o=new FileReader;o.onloadend=function(){return e(o.result)},o.onerror=n,o.readAsDataURL(t)}))}))};t&&r(t).then((function(t){o.completedImgData=t})),r(null===(e=this.$auth)||void 0===e||null===(n=e.user)||void 0===n?void 0:n.signatureURL).then((function(t){o.signature=t}))},imageExportedLocal:function(image,t){this.$BUS.$emit(t?"signature-update":"initials-update",image),console.log(image),this.imageExported(image,t)},popSign:function(){!this.isCreator&&(this.initialimgDisplay=!0),!this.isCreator&&this.$auth.loggedIn&&(this.uploaded||(this.showSignatureModal=!0))},setInitialImgDisplay:function(){!this.isCreator&&(this.initialimgDisplay=!0),this.$BUS.$emit("scrollToSignInitial","appendsign")}},components:{DrawOrTypeModal:h.default},watch:{"$auth.user.signatureURL":(y=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.changeSignToBase64();case 1:case"end":return t.stop()}}),t,this)}))),function(){return y.apply(this,arguments)})}}),_=x,A=(n(1126),n(1)),component=Object(A.a)(_,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[t.completed?e("img",{staticClass:"absolute-image",style:t.style,attrs:{src:t.completedImgData}}):t.initialimgDisplay?t.uploaded?e("img",{staticClass:"absolute-image",style:t.style,attrs:{src:t.signature}}):e("img",{staticClass:"absolute-image",attrs:{src:n(747)}}):e("img",{staticClass:"annot-button",class:[!t.$auth.loggedIn||t.initialimgDisplay||t.isCreator?" ":"pulse",1!==t.isAgreedSign&&t.isSign?"pointer-events-none":""],attrs:{src:n(784),attr:"sign",elemFill:t.uploaded&&t.initialimgDisplay,uploaded:t.uploaded,width:"18"},on:{click:t.setInitialImgDisplay}})])}),[],!1,null,"79ab3f02",null);e.default=component.exports},728:function(t,e,n){"use strict";var o=n(3),r=(n(21),n(8),n(813),n(814),n(815),n(816),n(817),n(818),n(819),n(820),n(821),n(822),n(823),n(824),n(825),n(826),n(827),n(828),n(829),n(830),n(831),n(832),n(833),n(834),n(835),n(836),n(837),n(44));e.a={data:function(){return{fetchDataSign:{},fetchDataInitial:{}}},mounted:function(){this.getUserSignatureToBlob()},mixins:[r.a],methods:{getUserSignatureToBlob:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(null===(o=null===(n=t.$auth)||void 0===n?void 0:n.user)||void 0===o?void 0:o.signatureURL).then((function(t){return t.blob()}));case 2:return t.fetchDataSign=e.sent,e.next=5,fetch(null===(h=null===(r=t.$auth)||void 0===r?void 0:r.user)||void 0===h?void 0:h.initialURL).then((function(t){return t.blob()}));case 5:t.fetchDataInitial=e.sent;case 6:case"end":return e.stop()}}),e)})))()},dataURIToBlob:function(t){var e=t.split(",");if(!(e.length<1)){for(var n=e[0].indexOf("base64")>=0?atob(e[1]):decodeURI(e[1]),o=e[0].split(":")[1].split(";")[0],r=new Uint8Array(n.length),i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return new Blob([r],{type:o})}},imageExported:function(image,t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var r,h,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.dataURIToBlob(image).size!=e.fetchDataSign.size){n.next=4;break}return n.abrupt("return");case 4:if(e.dataURIToBlob(image).size!=e.fetchDataInitial.size){n.next=6;break}return n.abrupt("return");case 6:(c=new FormData).append("upload",e.dataURIToBlob(image)),c.append("type",t?"signature":"initial"),c.append("userId",null===(h=null===(r=e.$auth||{})||void 0===r?void 0:r.user)||void 0===h?void 0:h.id),e.$axios.$post("/files",c).then(Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.filterUsers();case 2:e.$notify.success({title:t?"Signature":"Initials",message:"Your ".concat(t?"signature":"initials"," has been uploaded")});case 3:case"end":return n.stop()}}),n)})))).catch((function(n){e.$notify.error({title:t?"Signature":"Initials",message:n.message||"Error uploading ".concat(t?"signature":"initials")})}));case 11:case"end":return n.stop()}}),n)})))()}}}},747:function(t,e,n){t.exports=n.p+"img/sign.10a8143.png"},752:function(t,e,n){"use strict";class o{constructor(t,e,time){this.x=t,this.y=e,this.time=time||Date.now()}distanceTo(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))}equals(t){return this.x===t.x&&this.y===t.y&&this.time===t.time}velocityFrom(t){return this.time!==t.time?this.distanceTo(t)/(this.time-t.time):0}}class r{constructor(t,e,n,o,r,h){this.startPoint=t,this.control2=e,this.control1=n,this.endPoint=o,this.startWidth=r,this.endWidth=h}static fromPoints(t,e){const n=this.calculateControlPoints(t[0],t[1],t[2]).c2,o=this.calculateControlPoints(t[1],t[2],t[3]).c1;return new r(t[1],n,o,t[2],e.start,e.end)}static calculateControlPoints(t,e,n){const r=t.x-e.x,h=t.y-e.y,c=e.x-n.x,l=e.y-n.y,d=(t.x+e.x)/2,m=(t.y+e.y)/2,v=(e.x+n.x)/2,f=(e.y+n.y)/2,w=Math.sqrt(r*r+h*h),y=Math.sqrt(c*c+l*l),x=y/(w+y),_=v+(d-v)*x,A=f+(m-f)*x,D=e.x-_,S=e.y-A;return{c1:new o(d+D,m+S),c2:new o(v+D,f+S)}}length(){let t,e,n=0;for(let i=0;i<=10;i+=1){const o=i/10,r=this.point(o,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),h=this.point(o,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(i>0){const o=r-t,c=h-e;n+=Math.sqrt(o*o+c*c)}t=r,e=h}return n}point(t,e,n,o,r){return e*(1-t)*(1-t)*(1-t)+3*n*(1-t)*(1-t)*t+3*o*(1-t)*t*t+r*t*t*t}}class h{constructor(canvas,t={}){this.canvas=canvas,this.options=t,this._handleMouseDown=t=>{1===t.which&&(this._mouseButtonDown=!0,this._strokeBegin(t))},this._handleMouseMove=t=>{this._mouseButtonDown&&this._strokeMoveUpdate(t)},this._handleMouseUp=t=>{1===t.which&&this._mouseButtonDown&&(this._mouseButtonDown=!1,this._strokeEnd(t))},this._handleTouchStart=t=>{if(t.preventDefault(),1===t.targetTouches.length){const e=t.changedTouches[0];this._strokeBegin(e)}},this._handleTouchMove=t=>{t.preventDefault();const e=t.targetTouches[0];this._strokeMoveUpdate(e)},this._handleTouchEnd=t=>{if(t.target===this.canvas){t.preventDefault();const e=t.changedTouches[0];this._strokeEnd(e)}},this.velocityFilterWeight=t.velocityFilterWeight||.7,this.minWidth=t.minWidth||.5,this.maxWidth=t.maxWidth||2.5,this.throttle="throttle"in t?t.throttle:16,this.minDistance="minDistance"in t?t.minDistance:5,this.dotSize=t.dotSize||function(){return(this.minWidth+this.maxWidth)/2},this.penColor=t.penColor||"black",this.backgroundColor=t.backgroundColor||"rgba(0,0,0,0)",this.onBegin=t.onBegin,this.onEnd=t.onEnd,this._strokeMoveUpdate=this.throttle?function(t,e=250){let n,o,r,h=0,c=null;const l=()=>{h=Date.now(),c=null,n=t.apply(o,r),c||(o=null,r=[])};return function(...d){const m=Date.now(),v=e-(m-h);return o=this,r=d,v<=0||v>e?(c&&(clearTimeout(c),c=null),h=m,n=t.apply(o,r),c||(o=null,r=[])):c||(c=window.setTimeout(l,v)),n}}(h.prototype._strokeUpdate,this.throttle):h.prototype._strokeUpdate,this._ctx=canvas.getContext("2d"),this.clear(),this.on()}clear(){const{_ctx:t,canvas:canvas}=this;t.fillStyle=this.backgroundColor,t.clearRect(0,0,canvas.width,canvas.height),t.fillRect(0,0,canvas.width,canvas.height),this._data=[],this._reset(),this._isEmpty=!0}fromDataURL(t,e={},n){const image=new Image,o=e.ratio||window.devicePixelRatio||1,r=e.width||this.canvas.width/o,h=e.height||this.canvas.height/o;this._reset(),image.onload=()=>{this._ctx.drawImage(image,0,0,r,h),n&&n()},image.onerror=t=>{n&&n(t)},image.src=t,this._isEmpty=!1}toDataURL(t="image/png",e){return"image/svg+xml"===t?this._toSVG():this.canvas.toDataURL(t,e)}on(){this.canvas.style.touchAction="none",this.canvas.style.msTouchAction="none",window.PointerEvent?this._handlePointerEvents():(this._handleMouseEvents(),"ontouchstart"in window&&this._handleTouchEvents())}off(){this.canvas.style.touchAction="auto",this.canvas.style.msTouchAction="auto",this.canvas.removeEventListener("pointerdown",this._handleMouseDown),this.canvas.removeEventListener("pointermove",this._handleMouseMove),document.removeEventListener("pointerup",this._handleMouseUp),this.canvas.removeEventListener("mousedown",this._handleMouseDown),this.canvas.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("mouseup",this._handleMouseUp),this.canvas.removeEventListener("touchstart",this._handleTouchStart),this.canvas.removeEventListener("touchmove",this._handleTouchMove),this.canvas.removeEventListener("touchend",this._handleTouchEnd)}isEmpty(){return this._isEmpty}fromData(t){this.clear(),this._fromData(t,(({color:t,curve:e})=>this._drawCurve({color:t,curve:e})),(({color:t,point:e})=>this._drawDot({color:t,point:e}))),this._data=t}toData(){return this._data}_strokeBegin(t){const e={color:this.penColor,points:[]};"function"==typeof this.onBegin&&this.onBegin(t),this._data.push(e),this._reset(),this._strokeUpdate(t)}_strokeUpdate(t){if(0===this._data.length)return void this._strokeBegin(t);const e=t.clientX,n=t.clientY,o=this._createPoint(e,n),r=this._data[this._data.length-1],h=r.points,c=h.length>0&&h[h.length-1],l=!!c&&o.distanceTo(c)<=this.minDistance,d=r.color;if(!c||!c||!l){const t=this._addPoint(o);c?t&&this._drawCurve({color:d,curve:t}):this._drawDot({color:d,point:o}),h.push({time:o.time,x:o.x,y:o.y})}}_strokeEnd(t){this._strokeUpdate(t),"function"==typeof this.onEnd&&this.onEnd(t)}_handlePointerEvents(){this._mouseButtonDown=!1,this.canvas.addEventListener("pointerdown",this._handleMouseDown),this.canvas.addEventListener("pointermove",this._handleMouseMove),document.addEventListener("pointerup",this._handleMouseUp)}_handleMouseEvents(){this._mouseButtonDown=!1,this.canvas.addEventListener("mousedown",this._handleMouseDown),this.canvas.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseup",this._handleMouseUp)}_handleTouchEvents(){this.canvas.addEventListener("touchstart",this._handleTouchStart),this.canvas.addEventListener("touchmove",this._handleTouchMove),this.canvas.addEventListener("touchend",this._handleTouchEnd)}_reset(){this._lastPoints=[],this._lastVelocity=0,this._lastWidth=(this.minWidth+this.maxWidth)/2,this._ctx.fillStyle=this.penColor}_createPoint(t,e){const rect=this.canvas.getBoundingClientRect();return new o(t-rect.left,e-rect.top,(new Date).getTime())}_addPoint(t){const{_lastPoints:e}=this;if(e.push(t),e.length>2){3===e.length&&e.unshift(e[0]);const t=this._calculateCurveWidths(e[1],e[2]),n=r.fromPoints(e,t);return e.shift(),n}return null}_calculateCurveWidths(t,e){const n=this.velocityFilterWeight*e.velocityFrom(t)+(1-this.velocityFilterWeight)*this._lastVelocity,o=this._strokeWidth(n),r={end:o,start:this._lastWidth};return this._lastVelocity=n,this._lastWidth=o,r}_strokeWidth(t){return Math.max(this.maxWidth/(t+1),this.minWidth)}_drawCurveSegment(t,e,n){const o=this._ctx;o.moveTo(t,e),o.arc(t,e,n,0,2*Math.PI,!1),this._isEmpty=!1}_drawCurve({color:t,curve:e}){const n=this._ctx,o=e.endWidth-e.startWidth,r=2*Math.floor(e.length());n.beginPath(),n.fillStyle=t;for(let i=0;i<r;i+=1){const t=i/r,n=t*t,h=n*t,u=1-t,c=u*u,l=c*u;let d=l*e.startPoint.x;d+=3*c*t*e.control1.x,d+=3*u*n*e.control2.x,d+=h*e.endPoint.x;let m=l*e.startPoint.y;m+=3*c*t*e.control1.y,m+=3*u*n*e.control2.y,m+=h*e.endPoint.y;const v=Math.min(e.startWidth+h*o,this.maxWidth);this._drawCurveSegment(d,m,v)}n.closePath(),n.fill()}_drawDot({color:t,point:e}){const n=this._ctx,o="function"==typeof this.dotSize?this.dotSize():this.dotSize;n.beginPath(),this._drawCurveSegment(e.x,e.y,o),n.closePath(),n.fillStyle=t,n.fill()}_fromData(t,e,n){for(const r of t){const{color:t,points:h}=r;if(h.length>1)for(let n=0;n<h.length;n+=1){const r=h[n],c=new o(r.x,r.y,r.time);this.penColor=t,0===n&&this._reset();const l=this._addPoint(c);l&&e({color:t,curve:l})}else this._reset(),n({color:t,point:h[0]})}}_toSVG(){const t=this._data,e=Math.max(window.devicePixelRatio||1,1),n=this.canvas.width/e,o=this.canvas.height/e,svg=document.createElementNS("http://www.w3.org/2000/svg","svg");svg.setAttribute("width",this.canvas.width.toString()),svg.setAttribute("height",this.canvas.height.toString()),this._fromData(t,(({color:t,curve:e})=>{const path=document.createElement("path");if(!(isNaN(e.control1.x)||isNaN(e.control1.y)||isNaN(e.control2.x)||isNaN(e.control2.y))){const n=`M ${e.startPoint.x.toFixed(3)},${e.startPoint.y.toFixed(3)} C ${e.control1.x.toFixed(3)},${e.control1.y.toFixed(3)} ${e.control2.x.toFixed(3)},${e.control2.y.toFixed(3)} ${e.endPoint.x.toFixed(3)},${e.endPoint.y.toFixed(3)}`;path.setAttribute("d",n),path.setAttribute("stroke-width",(2.25*e.endWidth).toFixed(3)),path.setAttribute("stroke",t),path.setAttribute("fill","none"),path.setAttribute("stroke-linecap","round"),svg.appendChild(path)}}),(({color:t,point:e})=>{const circle=document.createElement("circle"),n="function"==typeof this.dotSize?this.dotSize():this.dotSize;circle.setAttribute("r",n.toString()),circle.setAttribute("cx",e.x.toString()),circle.setAttribute("cy",e.y.toString()),circle.setAttribute("fill",t),svg.appendChild(circle)}));const header=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${n} ${o}" width="${n}" height="${o}">`;let body=svg.innerHTML;if(void 0===body){const t=document.createElement("dummy"),e=svg.childNodes;t.innerHTML="";for(let i=0;i<e.length;i+=1)t.appendChild(e[i].cloneNode(!0));body=t.innerHTML}return"data:image/svg+xml;base64,"+btoa(header+body+"</svg>")}}e.a=h},784:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAA6CAYAAADLC7uHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANWSURBVHgB7ZpBSBRRHMa/0YW2DNSyRKNVDEIMwoy6qJFYnQTt0KEoWImO3Wo9pjdXDwbdimgPHYPsmoph6SGwQjCqg9mGSqC4QrYrqNP7DzydfT5xfe+N68L8YHR3ZpCP//zme7O4VsdIuM+yUIscoLsx1hRwwtq4jBwhDzmGH9hr/MBe4wf2Gj+w1/iBvcYP7DUBGKCqsBplBSdRdjiE4mAJFlPzmPsbx9eFz1hcmYdJtAIHA4dw4/Rd1BytSz9QyLZSoOXULYzOvMVg/A1Sq/9gAi0l7p3t2BpWoP7ENdypuQ9TKE/4fGkDygtCG+9nl+MY+tWPJJvkkeAxtFTddK4AQcrQNrX0DbooByZn3bycfLLh68+l747HdAU4dcfrsxuYT48j3lxzbOJPJ7o33qdWkzCBcmDxJrpS0YZBpgSH1KBJm0b5pqPKctMcakXkQi/qy68yXULwCuUJk480UZoshzqYqowghycXPmFsZsBoF2vV2hDr11c/nmMqsfVmovANrNIiF3udajOF9ko3/ueDs1FAqi5qg6qi6rRzqOJo5ctqS4iQAuOpzfDkNHU1p7miFVMT+oE9efih8KQKVRun+EAJTKA84dtsuT3jWpajHx8gsbKQdk7S0PODG+UJk5NuGoQbiy/HnNnlOEygPOGx2QEnJF/xqAnoQYgqjPaVC1085FpUdFCeMF3uZxPRtI7lTSGGpb6eW/4NE2i1BF1mCk2NQFUm3ljUz4PxfqNLtHat8UYgSIVg/kHndWotaeyh3Y2xHiYooBch3fifmr3GUcJG7pBnr6Kd/Z6GxX7u1w1IsKFedwJHm2LTwTWcY6/NNLtpbDZMlq/nUszJZ7mPRd6HH7Edndgv2OhfWUP746ZYgu+yxHMiI+E29r+7F+xlEbIIU6CzpzHWJe63ZCd3DIcrkY9hdrQSe43t+NrOFRCR1lrWvBZ8lWHt9Df2zGuJrzJ2DEx47fV2vsrIKDDhidc7+Coj46XZuNcZ+Coj4wm70fY6Q19lKAUmVL3eja8ylAMTu/JawVcZWo+XGXut6KsMrQm72dZrDV9lGAtMiF7r+irDaGDC8TqA17aNLhMKiFgPR8O1eevZfTLLlGhj7F0gfx19OfQ1MCtg2fiSS5/p/gOK+2jQz1JcsQAAAABJRU5ErkJggg=="},904:function(t,e,n){var content=n(1127);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("2611035e",content,!0,{sourceMap:!1})}}]);