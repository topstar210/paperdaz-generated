(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{1383:function(e,t,n){"use strict";n.r(t);var o=n(3),r=(n(21),n(375),{props:{scale:Number,generatePDF:Boolean},computed:{style:function(){return{width:"".concat(12*(this.scale||1),"px"),height:"".concat(12*(this.scale||1),"px")}}},watch:{generatePDF:function(){this.generatePDF&&this.svgToImage()}},data:function(){return{svgToImageData:""}},methods:{svgToImage:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.svgToImageData="",n="",t.next=4,htmlToImage.toPng(e.$refs.circlebox).then((function(e){n=e})).catch((function(e){console.error("oops, something went wrong!",e)}));case 4:e.svgToImageData=n;case 5:case"end":return t.stop()}}),t)})))()}}}),c=n(1),component=Object(c.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"tool"},[t("svg",{ref:"circlebox",style:e.style,attrs:{version:"1.1",scale:e.scale,viewBox:"0 0 20 20",fill:"black"}},[t("path",{attrs:{svgToImage:e.svgToImageData,options:"fill",d:"M10,0 C4.5,0 0,4.5 0,10 C0,15.5 4.5,20 10,20 C15.5,20 20,15.5 20,10 C20,4.5 15.5,0 10,0 L10,0 Z M10,18 C5.6,18 2,14.4 2,10 C2,5.6 5.6,2 10,2 C14.4,2 18,5.6 18,10 C18,14.4 14.4,18 10,18 L10,18 Z",id:"Shape"}})])])}),[],!1,null,"2c416a98",null);t.default=component.exports}}]);