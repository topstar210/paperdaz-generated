(window.webpackJsonp=window.webpackJsonp||[]).push([[140,16,33,117,230],{1088:function(t,e,r){"use strict";r(864)},1089:function(t,e,r){var n=r(17)((function(i){return i[1]}));n.push([t.i,"*[data-v-58316d01] .el-dialog{width:500px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-58316d01] .el-dialog__header{padding-bottom:20px}*[data-v-58316d01] .el-dialog__footer,*[data-v-58316d01] .el-dialog__header{text-align:left!important;height:0;max-height:0;overflow:hidden;padding:0}*[data-v-58316d01] .el-dialog__body{background:#fcfcfd}*[data-v-58316d01] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),n.locals={},t.exports=n},1090:function(t,e,r){"use strict";r(865)},1091:function(t,e,r){var n=r(17)((function(i){return i[1]}));n.push([t.i,"form[data-v-58316d01]{width:100%;margin:0 auto}.input-label[data-v-58316d01]{display:block;font-size:0.875rem;line-height:1.25rem;font-weight:500}.input-label+*[data-v-58316d01]{margin-top:0.25rem}.form-group[data-v-58316d01]:not(:last-child){margin-bottom:1.25rem}",""]),n.locals={},t.exports=n},1377:function(t,e,r){"use strict";r.r(e);r(28);var n=r(26),o=r(3),l=(r(36),r(8),r(100),r(50),r(24),r(52),r(194),r(195),r(382),r(375),r(376),r(21),r(0)),d=r(75),c=r(667),h=(r(258),r(665)),v=l.default.extend({name:"UpdateBillingInformationModal",components:{SpinnerDottedIcon:d.default,MessageAlertWidget:c.default},model:{prop:"visible",event:"updateVisibility"},fetch:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},props:{visible:{type:Boolean,default:!1}},data:function(){return{showModal:!1,errorMessage:"",userId:"",loading:!1,cardNumberWithDashes:"",name:"",cvv:"",packageId:void 0,expirationDateWithSlashes:"",card:{}}},watch:{visible:function(t){this.fetchCard(),this.showModal=t},showModal:function(t){this.$emit("updateVisibility",t),!t||this.card&&0!=Object.keys(this.card).length||this.$fetch()},card:{immediate:!0,handler:function(t){var e;t&&(this.inputCardNumber((null===(e=t.card_number)||void 0===e?void 0:e.toString())||""),this.name=t.card_holder_name||"",this.inputExpirationDate("".concat(t.exp_month,"/").concat(t.exp_year)),this.cvv=t.cvv)}},"$auth.user":function(){var t;this.userId=(null===(t=this.$auth)||void 0===t?void 0:t.user).id}},mounted:function(){this.showModal=this.visible,this.fetchCard()},computed:{cardNumber:function(){return this.cardNumberWithDashes.replace(/-+/g,"")},expirationDateString:function(){return this.expirationDateWithSlashes.split("/").join("")||""},expYear:function(){return this.expirationDateString.split("").splice(2,4).join("")},expMonth:function(){return this.expirationDateString.split("").splice(0,2).join("")}},methods:{fetchCard:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.card={},t.packageId=void 0,e.next=4,t.$axios.$get("/cards/?userid=".concat(t.$auth.user.id)).then((function(e){var r=Object(n.a)(e.data,1)[0];t.card=r,t.packageId=r.id,console.log("pop-card",r.card_number.toString())})).catch((function(){}));case 4:case"end":return e.stop()}}),e)})))()},closeModal:function(){this.$emit("updateVisibility",!1)},inputCardNumber:function(t){var e=t.replace(/(-+)|([^0-9]+)/g,"");this.cardNumberWithDashes=(e.match(/.{1,4}/g)||[]).join("-")},inputExpirationDate:function(t){var e=t.replace(/\/+|[^0-9]+/g,"");if(!(e.length>4)){2===e.length&&(Number(e)>12&&(e="0"+e),0==Number(e)&&(e="01")),4==e.length&&0==Number(e.substring(2,4))&&(e=e.substring(0,2)+"01");var r=(e.match(/.{1,2}/g)||[]).join("/");this.expirationDateWithSlashes=r}},submit:function(){var t,e=this;if(null===(t=event)||void 0===t||t.preventDefault(),!this.loading){var r=(this.$auth.user||{id:""}).id;if(this.errorMessage="Name not correct",!/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~0-9]/.test(this.name.trim())){var data={user_id:r,card_holder_name:this.name,card_number:this.cardNumber,exp_year:this.expYear,exp_month:this.expMonth,cvv:this.cvv};this.loading=!0,this.errorMessage="",null!=this.packageId?this.$axios.$patch("/cards/".concat(this.packageId),data).then((function(){e.$emit("success"),Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$notify.info({title:"Billing Information",message:"Billing information updated"});case 2:case"end":return t.stop()}}),t)})))(),e.closeModal(),e.$nuxt.refresh()})).catch((function(t){var r=t.response;e.errorMessage=Object(h.ErrorHandler)(r)})).finally((function(){e.loading=!1})):this.$axios.$post("/cards",data).then((function(){e.$emit("success"),Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$notify.info({title:"Billing Information",message:"Billing information updated"});case 2:case"end":return t.stop()}}),t)})))(),e.closeModal(),e.$nuxt.refresh()})).catch((function(t){var r=t.response;e.errorMessage=Object(h.ErrorHandler)(r)})).finally((function(){e.loading=!1}))}}}},beforeMount:function(){var t;this.userId=(null===(t=this.$auth)||void 0===t?void 0:t.user).id}}),f=(r(1088),r(1090),r(1)),component=Object(f.a)(v,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:t.showModal,"append-to-body":!0,"show-close":!1,center:""},on:{"update:visible":function(e){t.showModal=e}},scopedSlots:t._u([{key:"title",fn:function(){},proxy:!0}])},[e("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}},[e("span",{staticClass:"circle circle-12 bg-white cursor-pointer text-red-600",on:{click:function(e){return t.closeModal()}}},[e("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 3.19188L7.02451 0.167368C7.24767 -0.0557892 7.60948 -0.0557892 7.83263 0.167368C8.05579 0.390524 8.05579 0.752333 7.83263 0.975489L4.80812 4L7.83263 7.02451C8.05579 7.24767 8.05579 7.60948 7.83263 7.83263C7.60948 8.05579 7.24767 8.05579 7.02451 7.83263L4 4.80812L0.975489 7.83263C0.752333 8.05579 0.390524 8.05579 0.167368 7.83263C-0.0557892 7.60948 -0.0557892 7.24767 0.167368 7.02451L3.19188 4L0.167368 0.975489C-0.0557892 0.752333 -0.0557892 0.390524 0.167368 0.167368C0.390524 -0.0557892 0.752333 -0.0557892 0.975489 0.167368L4 3.19188Z",fill:"#414042"}})])])]),t._v(" "),t._v(" "),e("div",{staticClass:"pt-4"},[e("h3",{staticClass:"text-black text-3xl font-medium text-center"},[t._v("\n      Billing information\n    ")]),t._v(" "),e("p",{staticClass:"text-center text-xs text-[#4B4A4A] mb-3"},[t._v("\n      All payments are handled by Stripe\n    ")]),t._v(" "),e("h5",{staticClass:"text-[#282533] font-medium text-center text-lg mb-2"},[t._v("\n      Payment Type\n    ")]),t._v(" "),e("div",{staticClass:"grid place-items-center mb-10"},[e("img",{staticClass:"max-w-full max-h-[50px] object-contain",attrs:{src:"/img/payment-types.png",alt:"Payment types",width:"400"}})]),t._v(" "),e("form",{on:{submit:t.submit}},[t.errorMessage?e("message-alert-widget",{staticClass:"mb-7",attrs:{message:t.errorMessage,type:"error"}}):t._e(),t._v(" "),t.$fetchState.pending?e("message-alert-widget",{staticClass:"mb-7",attrs:{message:"Fetching card details",type:"info",isLoading:""}}):t._e(),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label",attrs:{for:""}},[t._v("Name of card holder")]),t._v(" "),e("el-input",{attrs:{disabled:t.loading||t.$fetchState.pending,placeholder:"Name Surname",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label",attrs:{for:""}},[t._v("Card Number")]),t._v(" "),e("el-input",{attrs:{disabled:t.loading||t.$fetchState.pending,placeholder:"0000-0000-0000-0000",value:t.cardNumberWithDashes,required:""},on:{input:t.inputCardNumber}})],1),t._v(" "),e("div",{staticClass:"grid gap-5 grid-cols-2"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label",attrs:{for:""}},[t._v("Expiration Date")]),t._v(" "),e("el-input",{attrs:{disabled:t.loading||t.$fetchState.pending,placeholder:"MM/YY",required:"",value:t.expirationDateWithSlashes},on:{input:t.inputExpirationDate}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"input-label",attrs:{for:""}},[t._v("CVV")]),t._v(" "),e("el-input",{attrs:{disabled:t.loading||t.$fetchState.pending,placeholder:"000",required:"",type:"password",maxlength:"3"},model:{value:t.cvv,callback:function(e){t.cvv=e},expression:"cvv"}})],1)]),t._v(" "),e("div",{staticClass:"grid place-items-center mt-6"},[e("button",{staticClass:"rounded-lg bg-paperdazgreen-400 text-white shadow text-sm h-10 px-6 disabled:bg-opacity-50",attrs:{disabled:t.loading}},[e("span",{staticClass:"inline-flex items-center gap-3"},[e("span",[t._v("Update")]),t._v(" "),e("transition",{attrs:{name:"fade",duration:100}},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"animate-spin"},[e("spinner-dotted-icon",{attrs:{height:"22",width:"22"}})],1)])],1)])])],1)])])}),[],!1,null,"58316d01",null);e.default=component.exports},577:function(t,e,r){"use strict";r.r(e);var n=r(0).default.extend({name:"CheckIcon"}),o=r(1),component=Object(o.a)(n,(function(){var t=this._self._c;this._self._setupProxy;return t("svg",{staticClass:"svg-inline--fa fa-check fa-w-16",attrs:{height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check",role:"img",viewBox:"0 0 512 512"}},[t("path",{attrs:{fill:"currentColor",d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}})])}),[],!1,null,null,null);e.default=component.exports},578:function(t,e,r){"use strict";r.r(e);var n=r(0).default.extend({name:"ExclamationIcon"}),o=r(1),component=Object(o.a)(n,(function(){var t=this._self._c;this._self._setupProxy;return t("svg",{staticClass:"fill-current",attrs:{width:"21",height:"21",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M20.8184 10.4055C20.8184 4.65876 16.158 6.06279e-05 10.4091 6.01255e-05C4.66026 5.96231e-05 -0.000116843 4.65875 -0.000117346 10.4055C-0.000117848 16.1523 4.66026 20.811 10.4091 20.811C16.158 20.811 20.8184 16.1523 20.8184 10.4055ZM1.89226 10.4055C1.89226 5.70359 5.70529 1.89194 10.4089 1.89194C15.1125 1.89194 18.9256 5.70359 18.9256 10.4055C18.9256 15.1074 15.1125 18.9191 10.4089 18.9191C5.70529 18.9191 1.89226 15.1074 1.89226 10.4055ZM10.4089 4.73131C9.88611 4.73131 9.4623 5.15484 9.4623 5.6773C9.4623 6.19975 9.88611 6.62328 10.4089 6.62328C10.9317 6.62328 11.3555 6.19975 11.3555 5.6773C11.3555 5.15484 10.9317 4.73131 10.4089 4.73131ZM9.45956 16.0828L11.3528 16.0828L11.3528 8.51508L9.45956 8.51508L9.45956 16.0828Z"}})])}),[],!1,null,null,null);e.default=component.exports},663:function(t,e,r){var content=r(676);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("07fbc454",content,!0,{sourceMap:!1})},665:function(t,e,r){"use strict";r.r(e),r.d(e,"ErrorHandler",(function(){return n}));r(79),r(80);function n(t){var e,r,n,o,l,d,c,h,v,f;console.log("error-handler",t);var m=(null===(r=null===(e=t)||void 0===e?void 0:e.data)||void 0===r?void 0:r.errors[0])||(null===(o=null===(n=t)||void 0===n?void 0:n.data)||void 0===o?void 0:o.message);return console.log("error-handler",m),(null===(l=(null==m?void 0:m.message)||m)||void 0===l?void 0:l.includes("email"))?"Email already exists":(null===(d=(null==m?void 0:m.message)||m)||void 0===d?void 0:d.includes("phone"))?"Phone number already exists":(null===(c=(null==m?void 0:m.message)||m)||void 0===c?void 0:c.includes("Invalid login"))?"Email or password is Incorrect":null==m?"Network error":(null===(h=(null==m?void 0:m.message)||m)||void 0===h?void 0:h.includes("subscriptions.userId"))?"You are already a subscribe user":(null===(v=(null==m?void 0:m.message)||m)||void 0===v?void 0:v.includes("Cannot read properties of undefined (reading 'teamMembers')"))?"Team trying to join does not exist":(null===(f=(null==m?void 0:m.message)||m)||void 0===f?void 0:f.includes("Stripe"))?"Error occured, Trying to send card info":void 0}},667:function(t,e,r){"use strict";r.r(e);var n=r(13),o=r(0),l=r(577),d=r(578),c=r(75),h=r(81),v=o.default.extend({components:{ExclamationIcon:d.default,CheckIcon:l.default,TimesIcon:h.default,SpinnerDottedIcon:c.default},name:"MessageAlertWidget",props:{type:{type:String,default:"info"},message:{type:String,default:""},isLoading:{type:Boolean,default:!1}}}),f=(r(675),r(1)),component=Object(f.a)(v,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"message-alert-widget text-white border px-4 py-3 rounded-lg text-xs flex items-center gap-2 font-medium",class:Object(n.a)({},t.type,!0)},[e("div",{staticClass:"icon-container p-1.5 bg-gray-100 bg-opacity-90 rounded-md"},["info"===t.type||"error"===t.type?e("exclamation-icon",{attrs:{width:"12",height:"12"}}):e("check-icon",{attrs:{width:"10",height:"10"}})],1),t._v(" "),e("div",{staticClass:"flex-1"},[t._t("default",(function(){return[e("div",{staticClass:"w-full flex justify-between gap-3 items-center"},[e("p",{staticClass:"flex-1"},[t._v(t._s(t.message))]),t._v(" "),e("div",[e("span",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"animate-spin inline-block"},[e("spinner-dotted-icon",{attrs:{height:"22",width:"22"}})],1)])])]}),{message:t.message})],2)])}),[],!1,null,"ab037030",null);e.default=component.exports},675:function(t,e,r){"use strict";r(663)},676:function(t,e,r){var n=r(17)((function(i){return i[1]}));n.push([t.i,".message-alert-widget.info[data-v-ab037030]{--tw-border-opacity:1;border-color:rgb(202 138 4 / var(--tw-border-opacity));background-color:rgb(202 138 4 / var(--tw-bg-opacity));--tw-bg-opacity:0.8}.message-alert-widget.info .icon-container[data-v-ab037030]{color:rgb(202 138 4 / var(--tw-text-opacity));--tw-text-opacity:0.8}.message-alert-widget.error[data-v-ab037030]{--tw-border-opacity:1;border-color:rgb(220 38 38 / var(--tw-border-opacity));background-color:rgb(220 38 38 / var(--tw-bg-opacity));--tw-bg-opacity:0.8}.message-alert-widget.error .icon-container[data-v-ab037030]{color:rgb(220 38 38 / var(--tw-text-opacity));--tw-text-opacity:0.8}.message-alert-widget.success[data-v-ab037030]{--tw-border-opacity:1;border-color:rgb(22 163 74 / var(--tw-border-opacity));background-color:rgb(22 163 74 / var(--tw-bg-opacity));--tw-bg-opacity:0.8}.message-alert-widget.success .icon-container[data-v-ab037030]{color:rgb(22 163 74 / var(--tw-text-opacity));--tw-text-opacity:0.8}",""]),n.locals={},t.exports=n},864:function(t,e,r){var content=r(1089);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("0cd89660",content,!0,{sourceMap:!1})},865:function(t,e,r){var content=r(1091);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("6041007e",content,!0,{sourceMap:!1})}}]);