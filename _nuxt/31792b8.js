(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1e3:function(t,e,n){const r=n(852);function o(t,e){const n=t.a/255,r=e+'="'+t.hex+'"';return n<1?r+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function c(t,e,n){let r=t+e;return void 0!==n&&(r+=" "+n),r}e.render=function(t,e,n){const l=r.getOptions(e),f=t.modules.size,data=t.modules.data,h=f+2*l.margin,d=l.color.light.a?"<path "+o(l.color.light,"fill")+' d="M0 0h'+h+"v"+h+'H0z"/>':"",path="<path "+o(l.color.dark,"stroke")+' d="'+function(data,t,e){let path="",n=0,r=!1,o=0;for(let i=0;i<data.length;i++){const col=Math.floor(i%t),l=Math.floor(i/t);col||r||(r=!0),data[i]?(o++,i>0&&col>0&&data[i-1]||(path+=r?c("M",col+e,.5+l+e):c("m",n,0),n=0,r=!1),col+1<t&&data[i+1]||(path+=c("h",o),o=0)):n++}return path}(data,f,l.margin)+'"/>',w='viewBox="0 0 '+h+" "+h+'"',m='<svg xmlns="http://www.w3.org/2000/svg" '+(l.width?'width="'+l.width+'" height="'+l.width+'" ':"")+w+' shape-rendering="crispEdges">'+d+path+"</svg>\n";return"function"==typeof n&&n(null,m),m}},698:function(t,e){let n;const r=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];e.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},e.getSymbolTotalCodewords=function(t){return r[t]},e.getBCHDigit=function(data){let t=0;for(;0!==data;)t++,data>>>=1;return t},e.setToSJISFunction=function(t){if("function"!=typeof t)throw new Error('"toSJISFunc" is not a valid function.');n=t},e.isKanjiModeEnabled=function(){return void 0!==n},e.toSJIS=function(t){return n(t)}},699:function(t,e,n){const r=n(850),o=n(851);e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(t,e){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!r.isValid(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?t.ccBits[0]:e<27?t.ccBits[1]:t.ccBits[2]},e.getBestModeForData=function(t){return o.testNumeric(t)?e.NUMERIC:o.testAlphanumeric(t)?e.ALPHANUMERIC:o.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},e.isValid=function(t){return t&&t.bit&&t.ccBits},e.from=function(t,n){if(e.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+t)}}(t)}catch(t){return n}}},714:function(t,e,n){const r=n(980),o=n(981),c=n(999),l=n(1e3);function f(t,canvas,text,e,n){const c=[].slice.call(arguments,1),l=c.length,f="function"==typeof c[l-1];if(!f&&!r())throw new Error("Callback required as last argument");if(!f){if(l<1)throw new Error("Too few arguments provided");return 1===l?(text=canvas,canvas=e=void 0):2!==l||canvas.getContext||(e=text,text=canvas,canvas=void 0),new Promise((function(n,r){try{const data=o.create(text,e);n(t(data,canvas,e))}catch(t){r(t)}}))}if(l<2)throw new Error("Too few arguments provided");2===l?(n=text,text=canvas,canvas=e=void 0):3===l&&(canvas.getContext&&void 0===n?(n=e,e=void 0):(n=e,e=text,text=canvas,canvas=void 0));try{const data=o.create(text,e);n(null,t(data,canvas,e))}catch(t){n(t)}}e.create=o.create,e.toCanvas=f.bind(null,c.render),e.toDataURL=f.bind(null,c.renderToDataURL),e.toString=f.bind(null,(function(data,t,e){return l.render(data,e)}))},757:function(t,e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2},e.isValid=function(t){return t&&void 0!==t.bit&&t.bit>=0&&t.bit<4},e.from=function(t,n){if(e.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+t)}}(t)}catch(t){return n}}},849:function(t,e,n){const r=n(757),o=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],c=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];e.getBlocksCount=function(t,e){switch(e){case r.L:return o[4*(t-1)+0];case r.M:return o[4*(t-1)+1];case r.Q:return o[4*(t-1)+2];case r.H:return o[4*(t-1)+3];default:return}},e.getTotalCodewordsCount=function(t,e){switch(e){case r.L:return c[4*(t-1)+0];case r.M:return c[4*(t-1)+1];case r.Q:return c[4*(t-1)+2];case r.H:return c[4*(t-1)+3];default:return}}},850:function(t,e){e.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}},851:function(t,e){const n="[0-9]+";let r="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";r=r.replace(/u/g,"\\u");const o="(?:(?![A-Z0-9 $%*+\\-./:]|"+r+")(?:.|[\r\n]))+";e.KANJI=new RegExp(r,"g"),e.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),e.BYTE=new RegExp(o,"g"),e.NUMERIC=new RegExp(n,"g"),e.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");const c=new RegExp("^"+r+"$"),l=new RegExp("^[0-9]+$"),f=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");e.testKanji=function(t){return c.test(t)},e.testNumeric=function(t){return l.test(t)},e.testAlphanumeric=function(t){return f.test(t)}},852:function(t,e){function n(t){if("number"==typeof t&&(t=t.toString()),"string"!=typeof t)throw new Error("Color should be defined as hex string");let e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map((function(t){return[t,t]})))),6===e.length&&e.push("F","F");const n=parseInt(e.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:255&n,hex:"#"+e.slice(0,6).join("")}}e.getOptions=function(t){t||(t={}),t.color||(t.color={});const e=void 0===t.margin||null===t.margin||t.margin<0?4:t.margin,r=t.width&&t.width>=21?t.width:void 0,o=t.scale||4;return{width:r,scale:r?4:o,margin:e,color:{dark:n(t.color.dark||"#000000ff"),light:n(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},e.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},e.getImageWidth=function(t,n){const r=e.getScale(t,n);return Math.floor((t+2*n.margin)*r)},e.qrToImageData=function(t,n,r){const o=n.modules.size,data=n.modules.data,c=e.getScale(o,r),l=Math.floor((o+2*r.margin)*c),f=r.margin*c,h=[r.color.light,r.color.dark];for(let i=0;i<l;i++)for(let e=0;e<l;e++){let n=4*(i*l+e),d=r.color.light;if(i>=f&&e>=f&&i<l-f&&e<l-f){d=h[data[Math.floor((i-f)/c)*o+Math.floor((e-f)/c)]?1:0]}t[n++]=d.r,t[n++]=d.g,t[n++]=d.b,t[n]=d.a}}},980:function(t,e){t.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},981:function(t,e,n){const r=n(698),o=n(757),c=n(982),l=n(983),f=n(984),h=n(985),d=n(986),w=n(849),m=n(987),E=n(990),y=n(991),A=n(699),C=n(992);function B(t,e,n){const r=t.size,o=y.getEncodedBits(e,n);let i,c;for(i=0;i<15;i++)c=1==(o>>i&1),i<6?t.set(i,8,c,!0):i<8?t.set(i+1,8,c,!0):t.set(r-15+i,8,c,!0),i<8?t.set(8,r-i-1,c,!0):i<9?t.set(8,15-i-1+1,c,!0):t.set(8,15-i-1,c,!0);t.set(r-8,8,1,!0)}function I(t,e,n){const o=new c;n.forEach((function(data){o.put(data.mode.bit,4),o.put(data.getLength(),A.getCharCountIndicator(data.mode,t)),data.write(o)}));const l=8*(r.getSymbolTotalCodewords(t)-w.getTotalCodewordsCount(t,e));for(o.getLengthInBits()+4<=l&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(0);const f=(l-o.getLengthInBits())/8;for(let i=0;i<f;i++)o.put(i%2?17:236,8);return function(t,e,n){const o=r.getSymbolTotalCodewords(e),c=w.getTotalCodewordsCount(e,n),l=o-c,f=w.getBlocksCount(e,n),h=f-o%f,d=Math.floor(o/f),E=Math.floor(l/f),y=E+1,A=d-E,C=new m(A);let B=0;const I=new Array(f),M=new Array(f);let v=0;const T=new Uint8Array(t.buffer);for(let b=0;b<f;b++){const t=b<h?E:y;I[b]=T.slice(B,B+t),M[b]=C.encode(I[b]),B+=t,v=Math.max(v,t)}const data=new Uint8Array(o);let i,N,P=0;for(i=0;i<v;i++)for(N=0;N<f;N++)i<I[N].length&&(data[P++]=I[N][i]);for(i=0;i<A;i++)for(N=0;N<f;N++)data[P++]=M[N][i];return data}(o,t,e)}function M(data,t,e,n){let o;if(Array.isArray(data))o=C.fromArray(data);else{if("string"!=typeof data)throw new Error("Invalid data");{let n=t;if(!n){const t=C.rawSplit(data);n=E.getBestVersionForData(t,e)}o=C.fromString(data,n||40)}}const c=E.getBestVersionForData(o,e);if(!c)throw new Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<c)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+c+".\n")}else t=c;const w=I(t,e,o),m=r.getSymbolSize(t),y=new l(m);return function(t,e){const n=t.size,r=h.getPositions(e);for(let i=0;i<r.length;i++){const e=r[i][0],col=r[i][1];for(let r=-1;r<=7;r++)if(!(e+r<=-1||n<=e+r))for(let o=-1;o<=7;o++)col+o<=-1||n<=col+o||(r>=0&&r<=6&&(0===o||6===o)||o>=0&&o<=6&&(0===r||6===r)||r>=2&&r<=4&&o>=2&&o<=4?t.set(e+r,col+o,!0,!0):t.set(e+r,col+o,!1,!0))}}(y,t),function(t){const e=t.size;for(let n=8;n<e-8;n++){const e=n%2==0;t.set(n,6,e,!0),t.set(6,n,e,!0)}}(y),function(t,e){const n=f.getPositions(e);for(let i=0;i<n.length;i++){const e=n[i][0],col=n[i][1];for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)-2===n||2===n||-2===r||2===r||0===n&&0===r?t.set(e+n,col+r,!0,!0):t.set(e+n,col+r,!1,!0)}}(y,t),B(y,e,0),t>=7&&function(t,e){const n=t.size,r=E.getEncodedBits(e);let o,col,c;for(let i=0;i<18;i++)o=Math.floor(i/3),col=i%3+n-8-3,c=1==(r>>i&1),t.set(o,col,c,!0),t.set(col,o,c,!0)}(y,t),function(t,data){const e=t.size;let n=-1,r=e-1,o=7,c=0;for(let col=e-1;col>0;col-=2)for(6===col&&col--;;){for(let e=0;e<2;e++)if(!t.isReserved(r,col-e)){let n=!1;c<data.length&&(n=1==(data[c]>>>o&1)),t.set(r,col-e,n),o--,-1===o&&(c++,o=7)}if(r+=n,r<0||e<=r){r-=n,n=-n;break}}}(y,w),isNaN(n)&&(n=d.getBestMask(y,B.bind(null,y,e))),d.applyMask(n,y),B(y,e,n),{modules:y,version:t,errorCorrectionLevel:e,maskPattern:n,segments:o}}e.create=function(data,t){if(void 0===data||""===data)throw new Error("No input text");let e,mask,n=o.M;return void 0!==t&&(n=o.from(t.errorCorrectionLevel,o.M),e=E.from(t.version),mask=d.from(t.maskPattern),t.toSJISFunc&&r.setToSJISFunction(t.toSJISFunc)),M(data,e,n,mask)}},982:function(t,e){function n(){this.buffer=[],this.length=0}n.prototype={get:function(t){const e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(let i=0;i<e;i++)this.putBit(1==(t>>>e-i-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},t.exports=n},983:function(t,e){function n(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}n.prototype.set=function(t,col,e,n){const r=t*this.size+col;this.data[r]=e,n&&(this.reservedBit[r]=!0)},n.prototype.get=function(t,col){return this.data[t*this.size+col]},n.prototype.xor=function(t,col,e){this.data[t*this.size+col]^=e},n.prototype.isReserved=function(t,col){return this.reservedBit[t*this.size+col]},t.exports=n},984:function(t,e,n){const r=n(698).getSymbolSize;e.getRowColCoords=function(t){if(1===t)return[];const e=Math.floor(t/7)+2,n=r(t),o=145===n?26:2*Math.ceil((n-13)/(2*e-2)),c=[n-7];for(let i=1;i<e-1;i++)c[i]=c[i-1]-o;return c.push(6),c.reverse()},e.getPositions=function(t){const n=[],r=e.getRowColCoords(t),o=r.length;for(let i=0;i<o;i++)for(let t=0;t<o;t++)0===i&&0===t||0===i&&t===o-1||i===o-1&&0===t||n.push([r[i],r[t]]);return n}},985:function(t,e,n){const r=n(698).getSymbolSize;e.getPositions=function(t){const e=r(t);return[[0,0],[e-7,0],[0,e-7]]}},986:function(t,e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const n=3,r=3,o=40,c=10;function l(t,i,n){switch(t){case e.Patterns.PATTERN000:return(i+n)%2==0;case e.Patterns.PATTERN001:return i%2==0;case e.Patterns.PATTERN010:return n%3==0;case e.Patterns.PATTERN011:return(i+n)%3==0;case e.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(n/3))%2==0;case e.Patterns.PATTERN101:return i*n%2+i*n%3==0;case e.Patterns.PATTERN110:return(i*n%2+i*n%3)%2==0;case e.Patterns.PATTERN111:return(i*n%3+(i+n)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}}e.isValid=function(mask){return null!=mask&&""!==mask&&!isNaN(mask)&&mask>=0&&mask<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(data){const t=data.size;let e=0,r=0,o=0,c=null,l=null;for(let f=0;f<t;f++){r=o=0,c=l=null;for(let col=0;col<t;col++){let t=data.get(f,col);t===c?r++:(r>=5&&(e+=n+(r-5)),c=t,r=1),t=data.get(col,f),t===l?o++:(o>=5&&(e+=n+(o-5)),l=t,o=1)}r>=5&&(e+=n+(r-5)),o>=5&&(e+=n+(o-5))}return e},e.getPenaltyN2=function(data){const t=data.size;let e=0;for(let n=0;n<t-1;n++)for(let col=0;col<t-1;col++){const t=data.get(n,col)+data.get(n,col+1)+data.get(n+1,col)+data.get(n+1,col+1);4!==t&&0!==t||e++}return e*r},e.getPenaltyN3=function(data){const t=data.size;let e=0,n=0,r=0;for(let o=0;o<t;o++){n=r=0;for(let col=0;col<t;col++)n=n<<1&2047|data.get(o,col),col>=10&&(1488===n||93===n)&&e++,r=r<<1&2047|data.get(col,o),col>=10&&(1488===r||93===r)&&e++}return e*o},e.getPenaltyN4=function(data){let t=0;const e=data.data.length;for(let i=0;i<e;i++)t+=data.data[i];return Math.abs(Math.ceil(100*t/e/5)-10)*c},e.applyMask=function(pattern,data){const t=data.size;for(let col=0;col<t;col++)for(let e=0;e<t;e++)data.isReserved(e,col)||data.xor(e,col,l(pattern,e,col))},e.getBestMask=function(data,t){const n=Object.keys(e.Patterns).length;let r=0,o=1/0;for(let p=0;p<n;p++){t(p),e.applyMask(p,data);const n=e.getPenaltyN1(data)+e.getPenaltyN2(data)+e.getPenaltyN3(data)+e.getPenaltyN4(data);e.applyMask(p,data),n<o&&(o=n,r=p)}return r}},987:function(t,e,n){const r=n(988);function o(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}o.prototype.initialize=function(t){this.degree=t,this.genPoly=r.generateECPolynomial(this.degree)},o.prototype.encode=function(data){if(!this.genPoly)throw new Error("Encoder not initialized");const t=new Uint8Array(data.length+this.degree);t.set(data);const e=r.mod(t,this.genPoly),n=this.degree-e.length;if(n>0){const t=new Uint8Array(this.degree);return t.set(e,n),t}return e},t.exports=o},988:function(t,e,n){const r=n(989);e.mul=function(t,e){const n=new Uint8Array(t.length+e.length-1);for(let i=0;i<t.length;i++)for(let o=0;o<e.length;o++)n[i+o]^=r.mul(t[i],e[o]);return n},e.mod=function(t,e){let n=new Uint8Array(t);for(;n.length-e.length>=0;){const t=n[0];for(let i=0;i<e.length;i++)n[i]^=r.mul(e[i],t);let o=0;for(;o<n.length&&0===n[o];)o++;n=n.slice(o)}return n},e.generateECPolynomial=function(t){let n=new Uint8Array([1]);for(let i=0;i<t;i++)n=e.mul(n,new Uint8Array([1,r.exp(i)]));return n}},989:function(t,e){const n=new Uint8Array(512),r=new Uint8Array(256);!function(){let t=1;for(let i=0;i<255;i++)n[i]=t,r[t]=i,t<<=1,256&t&&(t^=285);for(let i=255;i<512;i++)n[i]=n[i-255]}(),e.log=function(t){if(t<1)throw new Error("log("+t+")");return r[t]},e.exp=function(t){return n[t]},e.mul=function(t,e){return 0===t||0===e?0:n[r[t]+r[e]]}},990:function(t,e,n){const r=n(698),o=n(849),c=n(757),l=n(699),f=n(850),h=r.getBCHDigit(7973);function d(t,e){return l.getCharCountIndicator(t,e)+4}function w(t,e){let n=0;return t.forEach((function(data){const t=d(data.mode,e);n+=t+data.getBitsLength()})),n}e.from=function(t,e){return f.isValid(t)?parseInt(t,10):e},e.getCapacity=function(t,e,n){if(!f.isValid(t))throw new Error("Invalid QR Code version");void 0===n&&(n=l.BYTE);const c=8*(r.getSymbolTotalCodewords(t)-o.getTotalCodewordsCount(t,e));if(n===l.MIXED)return c;const h=c-d(n,t);switch(n){case l.NUMERIC:return Math.floor(h/10*3);case l.ALPHANUMERIC:return Math.floor(h/11*2);case l.KANJI:return Math.floor(h/13);case l.BYTE:default:return Math.floor(h/8)}},e.getBestVersionForData=function(data,t){let n;const r=c.from(t,c.M);if(Array.isArray(data)){if(data.length>1)return function(t,n){for(let r=1;r<=40;r++)if(w(t,r)<=e.getCapacity(r,n,l.MIXED))return r}(data,r);if(0===data.length)return 1;n=data[0]}else n=data;return function(t,n,r){for(let o=1;o<=40;o++)if(n<=e.getCapacity(o,r,t))return o}(n.mode,n.getLength(),r)},e.getEncodedBits=function(t){if(!f.isValid(t)||t<7)throw new Error("Invalid QR Code version");let e=t<<12;for(;r.getBCHDigit(e)-h>=0;)e^=7973<<r.getBCHDigit(e)-h;return t<<12|e}},991:function(t,e,n){const r=n(698),o=r.getBCHDigit(1335);e.getEncodedBits=function(t,mask){const data=t.bit<<3|mask;let e=data<<10;for(;r.getBCHDigit(e)-o>=0;)e^=1335<<r.getBCHDigit(e)-o;return 21522^(data<<10|e)}},992:function(t,e,n){const r=n(699),o=n(993),c=n(994),l=n(995),f=n(997),h=n(851),d=n(698),w=n(998);function m(t){return unescape(encodeURIComponent(t)).length}function E(t,e,n){const r=[];let o;for(;null!==(o=t.exec(n));)r.push({data:o[0],index:o.index,mode:e,length:o[0].length});return r}function y(t){const e=E(h.NUMERIC,r.NUMERIC,t),n=E(h.ALPHANUMERIC,r.ALPHANUMERIC,t);let o,c;d.isKanjiModeEnabled()?(o=E(h.BYTE,r.BYTE,t),c=E(h.KANJI,r.KANJI,t)):(o=E(h.BYTE_KANJI,r.BYTE,t),c=[]);return e.concat(n,o,c).sort((function(t,e){return t.index-e.index})).map((function(t){return{data:t.data,mode:t.mode,length:t.length}}))}function A(t,e){switch(e){case r.NUMERIC:return o.getBitsLength(t);case r.ALPHANUMERIC:return c.getBitsLength(t);case r.KANJI:return f.getBitsLength(t);case r.BYTE:return l.getBitsLength(t)}}function C(data,t){let e;const n=r.getBestModeForData(data);if(e=r.from(t,n),e!==r.BYTE&&e.bit<n.bit)throw new Error('"'+data+'" cannot be encoded with mode '+r.toString(e)+".\n Suggested mode is: "+r.toString(n));switch(e!==r.KANJI||d.isKanjiModeEnabled()||(e=r.BYTE),e){case r.NUMERIC:return new o(data);case r.ALPHANUMERIC:return new c(data);case r.KANJI:return new f(data);case r.BYTE:return new l(data)}}e.fromArray=function(t){return t.reduce((function(t,e){return"string"==typeof e?t.push(C(e,null)):e.data&&t.push(C(e.data,e.mode)),t}),[])},e.fromString=function(data,t){const n=function(t){const e=[];for(let i=0;i<t.length;i++){const n=t[i];switch(n.mode){case r.NUMERIC:e.push([n,{data:n.data,mode:r.ALPHANUMERIC,length:n.length},{data:n.data,mode:r.BYTE,length:n.length}]);break;case r.ALPHANUMERIC:e.push([n,{data:n.data,mode:r.BYTE,length:n.length}]);break;case r.KANJI:e.push([n,{data:n.data,mode:r.BYTE,length:m(n.data)}]);break;case r.BYTE:e.push([{data:n.data,mode:r.BYTE,length:m(n.data)}])}}return e}(y(data,d.isKanjiModeEnabled())),o=function(t,e){const table={},n={start:{}};let o=["start"];for(let i=0;i<t.length;i++){const c=t[i],l=[];for(let t=0;t<c.length;t++){const f=c[t],h=""+i+t;l.push(h),table[h]={node:f,lastCount:0},n[h]={};for(let t=0;t<o.length;t++){const c=o[t];table[c]&&table[c].node.mode===f.mode?(n[c][h]=A(table[c].lastCount+f.length,f.mode)-A(table[c].lastCount,f.mode),table[c].lastCount+=f.length):(table[c]&&(table[c].lastCount=f.length),n[c][h]=A(f.length,f.mode)+4+r.getCharCountIndicator(f.mode,e))}}o=l}for(let t=0;t<o.length;t++)n[o[t]].end=0;return{map:n,table:table}}(n,t),path=w.find_path(o.map,"start","end"),c=[];for(let i=1;i<path.length-1;i++)c.push(o.table[path[i]].node);return e.fromArray(function(t){return t.reduce((function(t,e){const n=t.length-1>=0?t[t.length-1]:null;return n&&n.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)}),[])}(c))},e.rawSplit=function(data){return e.fromArray(y(data,d.isKanjiModeEnabled()))}},993:function(t,e,n){const r=n(699);function o(data){this.mode=r.NUMERIC,this.data=data.toString()}o.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(t){let i,e,n;for(i=0;i+3<=this.data.length;i+=3)e=this.data.substr(i,3),n=parseInt(e,10),t.put(n,10);const r=this.data.length-i;r>0&&(e=this.data.substr(i),n=parseInt(e,10),t.put(n,3*r+1))},t.exports=o},994:function(t,e,n){const r=n(699),o=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function c(data){this.mode=r.ALPHANUMERIC,this.data=data}c.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},c.prototype.getLength=function(){return this.data.length},c.prototype.getBitsLength=function(){return c.getBitsLength(this.data.length)},c.prototype.write=function(t){let i;for(i=0;i+2<=this.data.length;i+=2){let e=45*o.indexOf(this.data[i]);e+=o.indexOf(this.data[i+1]),t.put(e,11)}this.data.length%2&&t.put(o.indexOf(this.data[i]),6)},t.exports=c},995:function(t,e,n){const r=n(996),o=n(699);function c(data){this.mode=o.BYTE,"string"==typeof data&&(data=r(data)),this.data=new Uint8Array(data)}c.getBitsLength=function(t){return 8*t},c.prototype.getLength=function(){return this.data.length},c.prototype.getBitsLength=function(){return c.getBitsLength(this.data.length)},c.prototype.write=function(t){for(let i=0,e=this.data.length;i<e;i++)t.put(this.data[i],8)},t.exports=c},996:function(t,e,n){"use strict";t.exports=function(input){for(var t=[],e=input.length,n=0;n<e;n++){var r=input.charCodeAt(n);if(r>=55296&&r<=56319&&e>n+1){var o=input.charCodeAt(n+1);o>=56320&&o<=57343&&(r=1024*(r-55296)+o-56320+65536,n+=1)}r<128?t.push(r):r<2048?(t.push(r>>6|192),t.push(63&r|128)):r<55296||r>=57344&&r<65536?(t.push(r>>12|224),t.push(r>>6&63|128),t.push(63&r|128)):r>=65536&&r<=1114111?(t.push(r>>18|240),t.push(r>>12&63|128),t.push(r>>6&63|128),t.push(63&r|128)):t.push(239,191,189)}return new Uint8Array(t).buffer}},997:function(t,e,n){const r=n(699),o=n(698);function c(data){this.mode=r.KANJI,this.data=data}c.getBitsLength=function(t){return 13*t},c.prototype.getLength=function(){return this.data.length},c.prototype.getBitsLength=function(){return c.getBitsLength(this.data.length)},c.prototype.write=function(t){let i;for(i=0;i<this.data.length;i++){let e=o.toSJIS(this.data[i]);if(e>=33088&&e<=40956)e-=33088;else{if(!(e>=57408&&e<=60351))throw new Error("Invalid SJIS character: "+this.data[i]+"\nMake sure your charset is UTF-8");e-=49472}e=192*(e>>>8&255)+(255&e),t.put(e,13)}},t.exports=c},998:function(t,e,n){"use strict";var r={single_source_shortest_paths:function(t,s,e){var n={},o={};o[s]=0;var c,u,l,f,h,d,w,m=r.PriorityQueue.make();for(m.push(s,0);!m.empty();)for(l in u=(c=m.pop()).value,f=c.cost,h=t[u]||{})h.hasOwnProperty(l)&&(d=f+h[l],w=o[l],(void 0===o[l]||w>d)&&(o[l]=d,m.push(l,d),n[l]=u));if(void 0!==e&&void 0===o[e]){var E=["Could not find a path from ",s," to ",e,"."].join("");throw new Error(E)}return n},extract_shortest_path_from_predecessor_list:function(t,e){for(var n=[],u=e;u;)n.push(u),t[u],u=t[u];return n.reverse(),n},find_path:function(t,s,e){var n=r.single_source_shortest_paths(t,s,e);return r.extract_shortest_path_from_predecessor_list(n,e)},PriorityQueue:{make:function(t){var e,n=r.PriorityQueue,o={};for(e in t=t||{},n)n.hasOwnProperty(e)&&(o[e]=n[e]);return o.queue=[],o.sorter=t.sorter||n.default_sorter,o},default_sorter:function(a,b){return a.cost-b.cost},push:function(t,e){var n={value:t,cost:e};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=r},999:function(t,e,n){const r=n(852);e.render=function(t,canvas,e){let n=e,o=canvas;void 0!==n||canvas&&canvas.getContext||(n=canvas,canvas=void 0),canvas||(o=function(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}()),n=r.getOptions(n);const c=r.getImageWidth(t.modules.size,n),l=o.getContext("2d"),image=l.createImageData(c,c);return r.qrToImageData(image.data,t,n),function(t,canvas,e){t.clearRect(0,0,canvas.width,canvas.height),canvas.style||(canvas.style={}),canvas.height=e,canvas.width=e,canvas.style.height=e+"px",canvas.style.width=e+"px"}(l,o,c),l.putImageData(image,0,0),o},e.renderToDataURL=function(t,canvas,n){let r=n;void 0!==r||canvas&&canvas.getContext||(r=canvas,canvas=void 0),r||(r={});const o=e.render(t,canvas,r),c=r.type||"image/png",l=r.rendererOpts||{};return o.toDataURL(c,l.quality)}}}]);