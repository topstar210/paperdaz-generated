/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[222,32],{1614:function(t,e,n){"use strict";n.r(e);var o=n(578),r=n(736),h=n(22),c=n(710),l=(n(193),n(840)),d=n.n(l),v=n(841),m=n.n(v),f=Object(h.a)(c.a).extend({name:"SignatureInitialsTab",components:{ExclamationIcon:o.default,DrawOrTypeModal:r.default},data:function(){return{showSignatureModal:!1,usingSignature:!0}},computed:{signature:function(){return this.$auth.user.signatureURL||m.a},initial:function(){return this.$auth.user.initialURL||d.a}},methods:{showSignature:function(){this.usingSignature=!0,this.showSignatureModal=!0},showInitial:function(){this.usingSignature=!1,this.showSignatureModal=!0},imageExportedLocal:function(image){this.imageExported(image,this.usingSignature)}}}),_=n(1),component=Object(_.a)(f,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"flex-1 rounded-3xl bg-white py-6 px-8"},[e("section",{staticClass:"mb-16"},[e("h3",{staticClass:"flex justify-center text-paperdazgreen-300 border-b-2 border-paperdazgreen-300 font-semibold text-2xl gap-2 pb-2 relative mb-7"},[e("span",{staticClass:"flex items-center gap-3"},[t._v("Signature "),e("exclamation-icon",{staticClass:"text-paperdazgreen-300 w-4 h-4"})],1)]),t._v(" "),e("div",{staticClass:"border h-56 border-[#C4C4C4] rounded w-full bg-white flex flex-col justify-center items-center overflow-hidden p-4"},[e("div",{staticClass:"mb-4 text-gray-600 cursor-not-allowed"},[e("img",{attrs:{src:t.signature,width:"72",height:"72"}})]),t._v(" "),e("button",{staticClass:"text-white rounded shadow bg-paperdazgreen-400 px-5 h-10 text-sm",on:{click:t.showSignature}},[t._v("\n        "+t._s(t.$auth.user.signature?"View / Update":"Create")+"\n      ")])])]),t._v(" "),e("section",[e("h3",{staticClass:"flex justify-center text-paperdazgreen-300 border-b-2 border-paperdazgreen-300 font-semibold text-2xl gap-2 pb-2 relative mb-7"},[e("span",{staticClass:"flex items-center gap-3"},[t._v("Initials "),e("exclamation-icon",{staticClass:"text-paperdazgreen-300 w-4 h-4"})],1)]),t._v(" "),e("div",{staticClass:"border h-56 border-[#C4C4C4] rounded w-full bg-white flex flex-col justify-center items-center overflow-hidden p-4"},[e("div",{staticClass:"mb-4 text-gray-600 cursor-not-allowed"},[e("img",{attrs:{src:t.initial,width:"72",height:"72"}})]),t._v(" "),e("button",{staticClass:"text-white rounded shadow bg-paperdazgreen-400 px-5 h-10 text-sm",on:{click:t.showInitial}},[t._v("\n        "+t._s(t.$auth.user.initials?"View / Update":"Create")+"\n      ")])])]),t._v(" "),e("draw-or-type-modal",{attrs:{src:t.usingSignature?t.$auth.user.signatureURL:t.$auth.user.initialURL},on:{"image-exported":function(e){return t.imageExportedLocal(e)}},model:{value:t.showSignatureModal,callback:function(e){t.showSignatureModal=e},expression:"showSignatureModal"}})],1)}),[],!1,null,null,null);e.default=component.exports},578:function(t,e,n){"use strict";n.r(e);var o=n(0).default.extend({name:"ExclamationIcon"}),r=n(1),component=Object(r.a)(o,(function(){var t=this._self._c;this._self._setupProxy;return t("svg",{staticClass:"fill-current",attrs:{width:"21",height:"21",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M20.8184 10.4055C20.8184 4.65876 16.158 6.06279e-05 10.4091 6.01255e-05C4.66026 5.96231e-05 -0.000116843 4.65875 -0.000117346 10.4055C-0.000117848 16.1523 4.66026 20.811 10.4091 20.811C16.158 20.811 20.8184 16.1523 20.8184 10.4055ZM1.89226 10.4055C1.89226 5.70359 5.70529 1.89194 10.4089 1.89194C15.1125 1.89194 18.9256 5.70359 18.9256 10.4055C18.9256 15.1074 15.1125 18.9191 10.4089 18.9191C5.70529 18.9191 1.89226 15.1074 1.89226 10.4055ZM10.4089 4.73131C9.88611 4.73131 9.4623 5.15484 9.4623 5.6773C9.4623 6.19975 9.88611 6.62328 10.4089 6.62328C10.9317 6.62328 11.3555 6.19975 11.3555 5.6773C11.3555 5.15484 10.9317 4.73131 10.4089 4.73131ZM9.45956 16.0828L11.3528 16.0828L11.3528 8.51508L9.45956 8.51508L9.45956 16.0828Z"}})])}),[],!1,null,null,null);e.default=component.exports},710:function(t,e,n){"use strict";var o=n(3),r=(n(21),n(8),n(788),n(789),n(790),n(791),n(792),n(793),n(794),n(795),n(796),n(797),n(798),n(799),n(800),n(801),n(802),n(803),n(804),n(805),n(806),n(807),n(808),n(809),n(810),n(811),n(812),n(43));e.a={data:function(){return{fetchDataSign:{},fetchDataInitial:{}}},mounted:function(){this.getUserSignatureToBlob()},mixins:[r.a],methods:{getUserSignatureToBlob:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(null===(o=null===(n=t.$auth)||void 0===n?void 0:n.user)||void 0===o?void 0:o.signatureURL).then((function(t){return t.blob()}));case 2:return t.fetchDataSign=e.sent,e.next=5,fetch(null===(h=null===(r=t.$auth)||void 0===r?void 0:r.user)||void 0===h?void 0:h.initialURL).then((function(t){return t.blob()}));case 5:t.fetchDataInitial=e.sent;case 6:case"end":return e.stop()}}),e)})))()},dataURIToBlob:function(t){var e=t.split(",");if(!(e.length<1)){for(var n=e[0].indexOf("base64")>=0?atob(e[1]):decodeURI(e[1]),o=e[0].split(":")[1].split(";")[0],r=new Uint8Array(n.length),i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return new Blob([r],{type:o})}},imageExported:function(image,t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var r,h,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.dataURIToBlob(image).size!=e.fetchDataSign.size){n.next=4;break}return n.abrupt("return");case 4:if(e.dataURIToBlob(image).size!=e.fetchDataInitial.size){n.next=6;break}return n.abrupt("return");case 6:(c=new FormData).append("upload",e.dataURIToBlob(image)),c.append("type",t?"signature":"initial"),c.append("userId",null===(h=null===(r=e.$auth||{})||void 0===r?void 0:r.user)||void 0===h?void 0:h.id),e.$axios.$post("/files",c).then(Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.filterUsers();case 2:e.$notify.success({title:t?"Signature":"Initials",message:"Your ".concat(t?"signature":"initials"," has been uploaded")});case 3:case"end":return n.stop()}}),n)})))).catch((function(n){e.$notify.error({title:t?"Signature":"Initials",message:n.message||"Error uploading ".concat(t?"signature":"initials")})}));case 11:case"end":return n.stop()}}),n)})))()}}}},729:function(t,e,n){"use strict";class o{constructor(t,e,time){this.x=t,this.y=e,this.time=time||Date.now()}distanceTo(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))}equals(t){return this.x===t.x&&this.y===t.y&&this.time===t.time}velocityFrom(t){return this.time!==t.time?this.distanceTo(t)/(this.time-t.time):0}}class r{constructor(t,e,n,o,r,h){this.startPoint=t,this.control2=e,this.control1=n,this.endPoint=o,this.startWidth=r,this.endWidth=h}static fromPoints(t,e){const n=this.calculateControlPoints(t[0],t[1],t[2]).c2,o=this.calculateControlPoints(t[1],t[2],t[3]).c1;return new r(t[1],n,o,t[2],e.start,e.end)}static calculateControlPoints(t,e,n){const r=t.x-e.x,h=t.y-e.y,c=e.x-n.x,l=e.y-n.y,d=(t.x+e.x)/2,v=(t.y+e.y)/2,m=(e.x+n.x)/2,f=(e.y+n.y)/2,_=Math.sqrt(r*r+h*h),x=Math.sqrt(c*c+l*l),w=x/(_+x),y=m+(d-m)*w,C=f+(v-f)*w,M=e.x-y,E=e.y-C;return{c1:new o(d+M,v+E),c2:new o(m+M,f+E)}}length(){let t,e,n=0;for(let i=0;i<=10;i+=1){const o=i/10,r=this.point(o,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),h=this.point(o,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(i>0){const o=r-t,c=h-e;n+=Math.sqrt(o*o+c*c)}t=r,e=h}return n}point(t,e,n,o,r){return e*(1-t)*(1-t)*(1-t)+3*n*(1-t)*(1-t)*t+3*o*(1-t)*t*t+r*t*t*t}}class h{constructor(canvas,t={}){this.canvas=canvas,this.options=t,this._handleMouseDown=t=>{1===t.which&&(this._mouseButtonDown=!0,this._strokeBegin(t))},this._handleMouseMove=t=>{this._mouseButtonDown&&this._strokeMoveUpdate(t)},this._handleMouseUp=t=>{1===t.which&&this._mouseButtonDown&&(this._mouseButtonDown=!1,this._strokeEnd(t))},this._handleTouchStart=t=>{if(t.preventDefault(),1===t.targetTouches.length){const e=t.changedTouches[0];this._strokeBegin(e)}},this._handleTouchMove=t=>{t.preventDefault();const e=t.targetTouches[0];this._strokeMoveUpdate(e)},this._handleTouchEnd=t=>{if(t.target===this.canvas){t.preventDefault();const e=t.changedTouches[0];this._strokeEnd(e)}},this.velocityFilterWeight=t.velocityFilterWeight||.7,this.minWidth=t.minWidth||.5,this.maxWidth=t.maxWidth||2.5,this.throttle="throttle"in t?t.throttle:16,this.minDistance="minDistance"in t?t.minDistance:5,this.dotSize=t.dotSize||function(){return(this.minWidth+this.maxWidth)/2},this.penColor=t.penColor||"black",this.backgroundColor=t.backgroundColor||"rgba(0,0,0,0)",this.onBegin=t.onBegin,this.onEnd=t.onEnd,this._strokeMoveUpdate=this.throttle?function(t,e=250){let n,o,r,h=0,c=null;const l=()=>{h=Date.now(),c=null,n=t.apply(o,r),c||(o=null,r=[])};return function(...d){const v=Date.now(),m=e-(v-h);return o=this,r=d,m<=0||m>e?(c&&(clearTimeout(c),c=null),h=v,n=t.apply(o,r),c||(o=null,r=[])):c||(c=window.setTimeout(l,m)),n}}(h.prototype._strokeUpdate,this.throttle):h.prototype._strokeUpdate,this._ctx=canvas.getContext("2d"),this.clear(),this.on()}clear(){const{_ctx:t,canvas:canvas}=this;t.fillStyle=this.backgroundColor,t.clearRect(0,0,canvas.width,canvas.height),t.fillRect(0,0,canvas.width,canvas.height),this._data=[],this._reset(),this._isEmpty=!0}fromDataURL(t,e={},n){const image=new Image,o=e.ratio||window.devicePixelRatio||1,r=e.width||this.canvas.width/o,h=e.height||this.canvas.height/o;this._reset(),image.onload=()=>{this._ctx.drawImage(image,0,0,r,h),n&&n()},image.onerror=t=>{n&&n(t)},image.src=t,this._isEmpty=!1}toDataURL(t="image/png",e){return"image/svg+xml"===t?this._toSVG():this.canvas.toDataURL(t,e)}on(){this.canvas.style.touchAction="none",this.canvas.style.msTouchAction="none",window.PointerEvent?this._handlePointerEvents():(this._handleMouseEvents(),"ontouchstart"in window&&this._handleTouchEvents())}off(){this.canvas.style.touchAction="auto",this.canvas.style.msTouchAction="auto",this.canvas.removeEventListener("pointerdown",this._handleMouseDown),this.canvas.removeEventListener("pointermove",this._handleMouseMove),document.removeEventListener("pointerup",this._handleMouseUp),this.canvas.removeEventListener("mousedown",this._handleMouseDown),this.canvas.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("mouseup",this._handleMouseUp),this.canvas.removeEventListener("touchstart",this._handleTouchStart),this.canvas.removeEventListener("touchmove",this._handleTouchMove),this.canvas.removeEventListener("touchend",this._handleTouchEnd)}isEmpty(){return this._isEmpty}fromData(t){this.clear(),this._fromData(t,(({color:t,curve:e})=>this._drawCurve({color:t,curve:e})),(({color:t,point:e})=>this._drawDot({color:t,point:e}))),this._data=t}toData(){return this._data}_strokeBegin(t){const e={color:this.penColor,points:[]};"function"==typeof this.onBegin&&this.onBegin(t),this._data.push(e),this._reset(),this._strokeUpdate(t)}_strokeUpdate(t){if(0===this._data.length)return void this._strokeBegin(t);const e=t.clientX,n=t.clientY,o=this._createPoint(e,n),r=this._data[this._data.length-1],h=r.points,c=h.length>0&&h[h.length-1],l=!!c&&o.distanceTo(c)<=this.minDistance,d=r.color;if(!c||!c||!l){const t=this._addPoint(o);c?t&&this._drawCurve({color:d,curve:t}):this._drawDot({color:d,point:o}),h.push({time:o.time,x:o.x,y:o.y})}}_strokeEnd(t){this._strokeUpdate(t),"function"==typeof this.onEnd&&this.onEnd(t)}_handlePointerEvents(){this._mouseButtonDown=!1,this.canvas.addEventListener("pointerdown",this._handleMouseDown),this.canvas.addEventListener("pointermove",this._handleMouseMove),document.addEventListener("pointerup",this._handleMouseUp)}_handleMouseEvents(){this._mouseButtonDown=!1,this.canvas.addEventListener("mousedown",this._handleMouseDown),this.canvas.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseup",this._handleMouseUp)}_handleTouchEvents(){this.canvas.addEventListener("touchstart",this._handleTouchStart),this.canvas.addEventListener("touchmove",this._handleTouchMove),this.canvas.addEventListener("touchend",this._handleTouchEnd)}_reset(){this._lastPoints=[],this._lastVelocity=0,this._lastWidth=(this.minWidth+this.maxWidth)/2,this._ctx.fillStyle=this.penColor}_createPoint(t,e){const rect=this.canvas.getBoundingClientRect();return new o(t-rect.left,e-rect.top,(new Date).getTime())}_addPoint(t){const{_lastPoints:e}=this;if(e.push(t),e.length>2){3===e.length&&e.unshift(e[0]);const t=this._calculateCurveWidths(e[1],e[2]),n=r.fromPoints(e,t);return e.shift(),n}return null}_calculateCurveWidths(t,e){const n=this.velocityFilterWeight*e.velocityFrom(t)+(1-this.velocityFilterWeight)*this._lastVelocity,o=this._strokeWidth(n),r={end:o,start:this._lastWidth};return this._lastVelocity=n,this._lastWidth=o,r}_strokeWidth(t){return Math.max(this.maxWidth/(t+1),this.minWidth)}_drawCurveSegment(t,e,n){const o=this._ctx;o.moveTo(t,e),o.arc(t,e,n,0,2*Math.PI,!1),this._isEmpty=!1}_drawCurve({color:t,curve:e}){const n=this._ctx,o=e.endWidth-e.startWidth,r=2*Math.floor(e.length());n.beginPath(),n.fillStyle=t;for(let i=0;i<r;i+=1){const t=i/r,n=t*t,h=n*t,u=1-t,c=u*u,l=c*u;let d=l*e.startPoint.x;d+=3*c*t*e.control1.x,d+=3*u*n*e.control2.x,d+=h*e.endPoint.x;let v=l*e.startPoint.y;v+=3*c*t*e.control1.y,v+=3*u*n*e.control2.y,v+=h*e.endPoint.y;const m=Math.min(e.startWidth+h*o,this.maxWidth);this._drawCurveSegment(d,v,m)}n.closePath(),n.fill()}_drawDot({color:t,point:e}){const n=this._ctx,o="function"==typeof this.dotSize?this.dotSize():this.dotSize;n.beginPath(),this._drawCurveSegment(e.x,e.y,o),n.closePath(),n.fillStyle=t,n.fill()}_fromData(t,e,n){for(const r of t){const{color:t,points:h}=r;if(h.length>1)for(let n=0;n<h.length;n+=1){const r=h[n],c=new o(r.x,r.y,r.time);this.penColor=t,0===n&&this._reset();const l=this._addPoint(c);l&&e({color:t,curve:l})}else this._reset(),n({color:t,point:h[0]})}}_toSVG(){const t=this._data,e=Math.max(window.devicePixelRatio||1,1),n=this.canvas.width/e,o=this.canvas.height/e,svg=document.createElementNS("http://www.w3.org/2000/svg","svg");svg.setAttribute("width",this.canvas.width.toString()),svg.setAttribute("height",this.canvas.height.toString()),this._fromData(t,(({color:t,curve:e})=>{const path=document.createElement("path");if(!(isNaN(e.control1.x)||isNaN(e.control1.y)||isNaN(e.control2.x)||isNaN(e.control2.y))){const n=`M ${e.startPoint.x.toFixed(3)},${e.startPoint.y.toFixed(3)} C ${e.control1.x.toFixed(3)},${e.control1.y.toFixed(3)} ${e.control2.x.toFixed(3)},${e.control2.y.toFixed(3)} ${e.endPoint.x.toFixed(3)},${e.endPoint.y.toFixed(3)}`;path.setAttribute("d",n),path.setAttribute("stroke-width",(2.25*e.endWidth).toFixed(3)),path.setAttribute("stroke",t),path.setAttribute("fill","none"),path.setAttribute("stroke-linecap","round"),svg.appendChild(path)}}),(({color:t,point:e})=>{const circle=document.createElement("circle"),n="function"==typeof this.dotSize?this.dotSize():this.dotSize;circle.setAttribute("r",n.toString()),circle.setAttribute("cx",e.x.toString()),circle.setAttribute("cy",e.y.toString()),circle.setAttribute("fill",t),svg.appendChild(circle)}));const header=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${n} ${o}" width="${n}" height="${o}">`;let body=svg.innerHTML;if(void 0===body){const t=document.createElement("dummy"),e=svg.childNodes;t.innerHTML="";for(let i=0;i<e.length;i+=1)t.appendChild(e[i].cloneNode(!0));body=t.innerHTML}return"data:image/svg+xml;base64,"+btoa(header+body+"</svg>")}}e.a=h},840:function(t,e,n){t.exports=n.p+"img/initials.2253fb2.png"},841:function(t,e,n){t.exports=n.p+"img/sign.10a8143.png"}}]);