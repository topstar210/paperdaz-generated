(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{1382:function(t,e,n){"use strict";n.r(e);var o=n(3),r=(n(21),n(375),{props:{scale:Number,generatePDF:Boolean},computed:{style:function(){return{width:"".concat(12*(this.scale||1),"px"),height:"".concat(12*(this.scale||1),"px")}}},watch:{generatePDF:function(){this.generatePDF&&this.svgToImage()}},data:function(){return{svgToImageData:""}},methods:{svgToImage:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.svgToImageData="",n="",e.next=4,htmlToImage.toPng(t.$refs.crossbox).then((function(t){n=t})).catch((function(t){console.error("oops, something went wrong!",t)}));case 4:t.svgToImageData=n;case 5:case"end":return e.stop()}}),e)})))()}}}),c=n(1),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"tool"},[e("svg",{ref:"crossbox",style:t.style,attrs:{viewBox:"0 0 19 19",fill:"black",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{svgToImage:t.svgToImageData,options:"fill",d:"M19 17.0864L17.0864 19L9.5 11.4136L1.91357 19L0 17.0864L7.58643 9.5L0 1.91357L1.91357 0L9.5 7.58643L17.0864 0L19 1.91357L11.4136 9.5L19 17.0864Z",fill:"black"}})])])}),[],!1,null,"0595cbae",null);e.default=component.exports}}]);