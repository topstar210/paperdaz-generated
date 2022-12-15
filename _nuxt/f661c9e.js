(window.webpackJsonp=window.webpackJsonp||[]).push([[218,16,33,35,66,226,227,228],{1632:function(e,t,r){"use strict";r.r(t);var o=r(3),l=r(13),n=(r(21),r(8),r(623)),d=r(75),c=r(81),f=r(725),x=r(696),w=r(781),v=r(22),m=r(44),h=Object(v.a)(m.a).extend({name:"ChangePasswordTab",components:Object(l.a)({InputField:f.default,PasswordField:w.default,PenIcon:n.default,TimesIcon:c.default,SpinnerDottedIcon:d.default,MessageAlertWidget:x.default},"MessageAlertWidget",x.default),data:function(){return{editingDetails:!1,loading:!1,formData:{oldPassword:"",password:"",confirmPassword:"",isUpdatePassword:!0,test:"$2a$10$q2uLuYadYf5mars2wxBmruvdXPxDXXIoBvVffb39FQEeWVaI0Iurm"},alertMessage:{isSuccess:!1,message:""}}},methods:{submit:function(e){var t=this;if(e.preventDefault(),!this.loading&&this.formData.oldPassword&&this.formData.password&&this.formData.confirmPassword&&this.formData.confirmPassword===this.formData.password){this.loading=!0,this.alertMessage.message="";var r=this.formData;delete r.confirmPassword,this.$axios.$patch("/users/".concat(this.$auth.user.id),r).then(function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$notify.success({message:"Password updated successfully",title:"Password Update"});case 2:t.editingDetails=!1;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log("erroe",e),t.alertMessage.isSuccess=!1,t.alertMessage.message=e.response.data.message||e.message||"Unable to update password",t.editingDetails=!0})).finally((function(){t.loading=!1}))}}}}),y=h,_=r(1),component=Object(_.a)(y,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("section",{staticClass:"bg-white rounded-2xl px-10 py-11 flex-1 flex items-center justify-center"},[t("form",{staticClass:"w-full max-w-2xl mx-auto",on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t("h3",{staticClass:"flex justify-center text-paperdazgreen-300 border-b-2 border-paperdazgreen-300 font-semibold text-2xl gap-2 pb-1 relative mb-12"},[t("span",[e._v("Change Your Password")]),e._v(" "),t("button",{staticClass:"absolute right-0 top-1/2 transform -translate-y-1/2 px-2 py-1",attrs:{type:"button"},on:{click:function(t){e.editingDetails=!e.editingDetails}}},[t("pen-icon",{directives:[{name:"show",rawName:"v-show",value:!e.editingDetails,expression:"!editingDetails"}]}),e._v(" "),t("times-icon",{directives:[{name:"show",rawName:"v-show",value:e.editingDetails,expression:"editingDetails"}],attrs:{width:"16",height:"16"}})],1)]),e._v(" "),t("div",{staticClass:"mb-7"},[t("label",{staticClass:"block text-[#282533] font-medium text-lg mb-2",attrs:{for:""}},[e._v("Current Password")]),e._v(" "),t("el-input",{attrs:{placeholder:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx","show-password":"",required:"",disabled:!e.editingDetails||e.loading},model:{value:e.formData.oldPassword,callback:function(t){e.$set(e.formData,"oldPassword",t)},expression:"formData.oldPassword"}})],1),e._v(" "),t("div",{staticClass:"mb-7"},[t("label",{staticClass:"block text-[#282533] font-medium text-lg mb-2",attrs:{for:""}},[e._v("New Password")]),e._v(" "),t("el-input",{attrs:{placeholder:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx","show-password":"",required:"",disabled:!e.editingDetails||e.loading},model:{value:e.formData.password,callback:function(t){e.$set(e.formData,"password",t)},expression:"formData.password"}})],1),e._v(" "),t("div",{staticClass:"mb-10"},[t("label",{staticClass:"block text-[#282533] font-medium text-lg mb-2",attrs:{for:""}},[e._v("Confirm New Password")]),e._v(" "),t("el-input",{attrs:{placeholder:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx","show-password":"",required:"",disabled:!e.editingDetails||e.loading},model:{value:e.formData.confirmPassword,callback:function(t){e.$set(e.formData,"confirmPassword",t)},expression:"formData.confirmPassword"}}),e._v(" "),t("small",{directives:[{name:"show",rawName:"v-show",value:e.editingDetails&&e.formData.password&&e.formData.confirmPassword&&e.formData.password!==e.formData.confirmPassword,expression:"\n          editingDetails &&\n          formData.password &&\n          formData.confirmPassword &&\n          formData.password !== formData.confirmPassword\n        "}],staticClass:"text-red-600 text-xs"},[e._v("Password fields don't match\n      ")])],1),e._v(" "),t("message-alert-widget",{directives:[{name:"show",rawName:"v-show",value:e.alertMessage.message&&e.editingDetails,expression:"alertMessage.message && editingDetails"}],staticClass:"mb-8",attrs:{message:e.alertMessage.message,type:e.alertMessage.isSuccess?"success":"error"}}),e._v(" "),t("div",{staticClass:"flex justify-center"},[t("button",{directives:[{name:"show",rawName:"v-show",value:e.editingDetails,expression:"editingDetails"}],staticClass:"disabled:opacity-50 disabled:cursor-not-allowed bg-paperdazgreen-300 text-white rounded-xl h-12 px-5 font-medium text-lg",attrs:{disabled:e.loading}},[t("span",{staticClass:"inline-flex gap-2 items-center"},[e._v("\n          Update Password\n          "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.loading&&e.editingDetails,expression:"loading && editingDetails"}],staticClass:"inline-block"},[t("spinner-dotted-icon",{staticClass:"animate-spin",attrs:{height:"18",width:"18"}})],1)])])])],1)])}),[],!1,null,null,null);t.default=component.exports},607:function(e,t,r){"use strict";r.r(t);var o=r(0).default.extend({name:"CheckIcon"}),l=r(1),component=Object(l.a)(o,(function(){var e=this._self._c;this._self._setupProxy;return e("svg",{staticClass:"svg-inline--fa fa-check fa-w-16",attrs:{height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check",role:"img",viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}})])}),[],!1,null,null,null);t.default=component.exports},608:function(e,t,r){"use strict";r.r(t);var o=r(0).default.extend({name:"ExclamationIcon"}),l=r(1),component=Object(l.a)(o,(function(){var e=this._self._c;this._self._setupProxy;return e("svg",{staticClass:"fill-current",attrs:{width:"21",height:"21",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M20.8184 10.4055C20.8184 4.65876 16.158 6.06279e-05 10.4091 6.01255e-05C4.66026 5.96231e-05 -0.000116843 4.65875 -0.000117346 10.4055C-0.000117848 16.1523 4.66026 20.811 10.4091 20.811C16.158 20.811 20.8184 16.1523 20.8184 10.4055ZM1.89226 10.4055C1.89226 5.70359 5.70529 1.89194 10.4089 1.89194C15.1125 1.89194 18.9256 5.70359 18.9256 10.4055C18.9256 15.1074 15.1125 18.9191 10.4089 18.9191C5.70529 18.9191 1.89226 15.1074 1.89226 10.4055ZM10.4089 4.73131C9.88611 4.73131 9.4623 5.15484 9.4623 5.6773C9.4623 6.19975 9.88611 6.62328 10.4089 6.62328C10.9317 6.62328 11.3555 6.19975 11.3555 5.6773C11.3555 5.15484 10.9317 4.73131 10.4089 4.73131ZM9.45956 16.0828L11.3528 16.0828L11.3528 8.51508L9.45956 8.51508L9.45956 16.0828Z"}})])}),[],!1,null,null,null);t.default=component.exports},618:function(e,t,r){"use strict";r.r(t);var o=r(0).default.extend({name:"EyeIcon"}),l=r(1),component=Object(l.a)(o,(function(){var e=this._self._c;this._self._setupProxy;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"16",width:"16",viewBox:"0 0 576 512"}},[e("path",{attrs:{fill:"currentColor",d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"}})])}),[],!1,null,null,null);t.default=component.exports},623:function(e,t,r){"use strict";r.r(t);var o=r(0).default.extend({name:"PenIcon"}),l=r(1),component=Object(l.a)(o,(function(){var e=this._self._c;this._self._setupProxy;return e("svg",{attrs:{width:"22",height:"21",viewBox:"0 0 22 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M18.9115 4.7064C19.2385 5.0325 19.2385 5.56081 18.9115 5.88697L6.53124 17.2117L4.79584 18.7991L2.35704 16.364L3.94702 14.6314L14.0038 3.67283L13.6286 3.29784L8.88162 8.03745C8.71847 8.20033 8.45353 8.20033 8.29038 8.03745L8.22549 7.97267C8.06234 7.80978 8.06234 7.54527 8.22549 7.38238L14.7752 0.843927C14.9387 0.68104 15.2033 0.68104 15.3668 0.843927L15.4317 0.908378C15.5949 1.07127 15.5949 1.33578 15.4317 1.49866L14.5159 2.41297L14.8521 2.74903L15.2905 2.27169C15.6168 1.94559 16.146 1.94559 16.473 2.27169L18.9115 4.7064ZM0.769531 19.9744L1.18093 20.3859L4.50958 18.9627L2.19428 16.6512L0.769531 19.9744ZM18.5079 0.0351562L19.8829 1.40798L18.9051 0.431762L17.0658 2.26779L19.0303 4.22914L20.8697 2.39278L21.2456 2.7681C21.2456 2.76843 21.3711 0.306439 18.5079 0.0351562Z",fill:"currentColor"}})])}),[],!1,null,null,null);t.default=component.exports},692:function(e,t,r){var content=r(702);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("07fbc454",content,!0,{sourceMap:!1})},696:function(e,t,r){"use strict";r.r(t);var o=r(13),l=r(0),n=r(607),d=r(608),c=r(75),f=r(81),x=l.default.extend({components:{ExclamationIcon:d.default,CheckIcon:n.default,TimesIcon:f.default,SpinnerDottedIcon:c.default},name:"MessageAlertWidget",props:{type:{type:String,default:"info"},message:{type:String,default:""},isLoading:{type:Boolean,default:!1}}}),w=(r(701),r(1)),component=Object(w.a)(x,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"message-alert-widget text-white border px-4 py-3 rounded-lg text-xs flex items-center gap-2 font-medium",class:Object(o.a)({},e.type,!0)},[t("div",{staticClass:"icon-container p-1.5 bg-gray-100 bg-opacity-90 rounded-md"},["info"===e.type||"error"===e.type?t("exclamation-icon",{attrs:{width:"12",height:"12"}}):t("check-icon",{attrs:{width:"10",height:"10"}})],1),e._v(" "),t("div",{staticClass:"flex-1"},[e._t("default",(function(){return[t("div",{staticClass:"w-full flex justify-between gap-3 items-center"},[t("p",{staticClass:"flex-1"},[e._v(e._s(e.message))]),e._v(" "),t("div",[t("span",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}],staticClass:"animate-spin inline-block"},[t("spinner-dotted-icon",{attrs:{height:"22",width:"22"}})],1)])])]}),{message:e.message})],2)])}),[],!1,null,"ab037030",null);t.default=component.exports},701:function(e,t,r){"use strict";r(692)},702:function(e,t,r){var o=r(17)((function(i){return i[1]}));o.push([e.i,".message-alert-widget.info[data-v-ab037030]{--tw-border-opacity:1;border-color:rgb(202 138 4 / var(--tw-border-opacity));background-color:rgb(202 138 4 / var(--tw-bg-opacity));--tw-bg-opacity:0.8}.message-alert-widget.info .icon-container[data-v-ab037030]{color:rgb(202 138 4 / var(--tw-text-opacity));--tw-text-opacity:0.8}.message-alert-widget.error[data-v-ab037030]{--tw-border-opacity:1;border-color:rgb(220 38 38 / var(--tw-border-opacity));background-color:rgb(220 38 38 / var(--tw-bg-opacity));--tw-bg-opacity:0.8}.message-alert-widget.error .icon-container[data-v-ab037030]{color:rgb(220 38 38 / var(--tw-text-opacity));--tw-text-opacity:0.8}.message-alert-widget.success[data-v-ab037030]{--tw-border-opacity:1;border-color:rgb(22 163 74 / var(--tw-border-opacity));background-color:rgb(22 163 74 / var(--tw-bg-opacity));--tw-bg-opacity:0.8}.message-alert-widget.success .icon-container[data-v-ab037030]{color:rgb(22 163 74 / var(--tw-text-opacity));--tw-text-opacity:0.8}",""]),o.locals={},e.exports=o},722:function(e,t,r){var content=r(755);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("5d8b2903",content,!0,{sourceMap:!1})},725:function(e,t,r){"use strict";r.r(t);var o=r(0).default.extend({name:"InputField",props:{showAsError:{type:Boolean,default:!1}}}),l=(r(754),r(1)),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("input",{staticClass:"input-field",class:{error:e.showAsError},attrs:{type:"text",placeholder:""},on:{input:function(t){return e.$emit("input",t.currentTarget.value)}}})}),[],!1,null,"4c045957",null);t.default=component.exports},730:function(e,t,r){var content=r(780);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("6b9503c8",content,!0,{sourceMap:!1})},754:function(e,t,r){"use strict";r(722)},755:function(e,t,r){var o=r(17)((function(i){return i[1]}));o.push([e.i,".input-field[data-v-4c045957]{height:2.5rem;width:100%;border-radius:0.75rem;border-width:1px;--tw-border-opacity:1;border-color:rgb(226 228 232 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-left:0.5rem;padding-right:0.5rem}.input-field[data-v-4c045957]:focus{--tw-border-opacity:1;border-color:rgb(65 65 66 / var(--tw-border-opacity));outline:2px solid transparent;outline-offset:2px}.input-field[data-v-4c045957]:disabled{cursor:not-allowed}.input-field.error[data-v-4c045957]{--tw-border-opacity:1;border-color:rgb(252 165 165 / var(--tw-border-opacity));--tw-text-opacity:1;color:rgb(220 38 38 / var(--tw-text-opacity))}.input-field.error[data-v-4c045957]::-moz-placeholder{--tw-placeholder-opacity:1;color:rgb(252 165 165 / var(--tw-placeholder-opacity))}.input-field.error[data-v-4c045957]::placeholder{--tw-placeholder-opacity:1;color:rgb(252 165 165 / var(--tw-placeholder-opacity))}.input-field.error[data-v-4c045957]:focus{border-color:rgb(220 38 38 / var(--tw-border-opacity));--tw-border-opacity:0.7}",""]),o.locals={},e.exports=o},779:function(e,t,r){"use strict";r(730)},780:function(e,t,r){var o=r(17)((function(i){return i[1]}));o.push([e.i,".input-field[data-v-347ad17a]{height:2.5rem;width:100%;border-radius:0.75rem;border-width:1px;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-left:0.5rem;padding-right:0.5rem}.input-field[data-v-347ad17a]:focus{outline:2px solid transparent;outline-offset:2px}.input-field.error[data-v-347ad17a]{--tw-border-opacity:1;border-color:rgb(252 165 165 / var(--tw-border-opacity));--tw-text-opacity:1;color:rgb(220 38 38 / var(--tw-text-opacity))}.input-field.error[data-v-347ad17a]::-moz-placeholder{--tw-placeholder-opacity:1;color:rgb(252 165 165 / var(--tw-placeholder-opacity))}.input-field.error[data-v-347ad17a]::placeholder{--tw-placeholder-opacity:1;color:rgb(252 165 165 / var(--tw-placeholder-opacity))}.input-field.error[data-v-347ad17a]:focus{border-color:rgb(220 38 38 / var(--tw-border-opacity));--tw-border-opacity:0.7}.input-field.error>input[data-v-347ad17a]::-moz-placeholder{--tw-placeholder-opacity:1;color:rgb(252 165 165 / var(--tw-placeholder-opacity))}.input-field.error>input[data-v-347ad17a]::placeholder{--tw-placeholder-opacity:1;color:rgb(252 165 165 / var(--tw-placeholder-opacity))}",""]),o.locals={},e.exports=o},781:function(e,t,r){"use strict";r.r(t);r(41),r(67);var o=r(0),l=r(618),n=r(199),d=o.default.extend({name:"PasswordField",components:{EyeIcon:l.default,EyeSlashedIcon:n.default},props:{placeholder:{type:String,default:""},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},showAsError:{type:Boolean,default:!1}},data:function(){return{showPassword:!1,value:void 0,focus:!1}},watch:{value:function(e){this.$emit("input",e)}},mounted:function(){}}),c=(r(779),r(1)),component=Object(c.a)(d,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"input-field flex items-center",class:[e.focus?"border-paperdazgray-500":"border-paperdazgray-200",e.showAsError?"error":""]},["checkbox"==(e.showPassword?"text":"password")?t("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],ref:"inputField",staticClass:"outline-none focus:outline-none border-none flex-1 h-full disabled:cursor-not-allowed",attrs:{placeholder:e.placeholder,required:e.required,disabled:e.disabled,type:"checkbox"},domProps:{checked:Array.isArray(e.value)?e._i(e.value,null)>-1:e.value},on:{focus:function(t){e.focus=!0},focusout:function(t){e.focus=!1},change:function(t){var r=e.value,o=t.target,l=!!o.checked;if(Array.isArray(r)){var n=e._i(r,null);o.checked?n<0&&(e.value=r.concat([null])):n>-1&&(e.value=r.slice(0,n).concat(r.slice(n+1)))}else e.value=l}}}):"radio"==(e.showPassword?"text":"password")?t("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],ref:"inputField",staticClass:"outline-none focus:outline-none border-none flex-1 h-full disabled:cursor-not-allowed",attrs:{placeholder:e.placeholder,required:e.required,disabled:e.disabled,type:"radio"},domProps:{checked:e._q(e.value,null)},on:{focus:function(t){e.focus=!0},focusout:function(t){e.focus=!1},change:function(t){e.value=null}}}):t("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],ref:"inputField",staticClass:"outline-none focus:outline-none border-none flex-1 h-full disabled:cursor-not-allowed",attrs:{placeholder:e.placeholder,required:e.required,disabled:e.disabled,type:e.showPassword?"text":"password"},domProps:{value:e.value},on:{focus:function(t){e.focus=!0},focusout:function(t){e.focus=!1},input:function(t){t.target.composing||(e.value=t.target.value)}}}),e._v(" "),t("span",{staticClass:"cursor-pointer",class:{"text-paperdazgray-300":!e.showPassword},on:{click:function(t){e.showPassword=!e.showPassword}}},[e.showPassword?t("eye-icon"):t("eye-slashed-icon")],1)])}),[],!1,null,"347ad17a",null);t.default=component.exports}}]);