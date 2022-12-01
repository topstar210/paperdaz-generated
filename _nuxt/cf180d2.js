(window.webpackJsonp=window.webpackJsonp||[]).push([[210,65,204,205],{1372:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(591),l=r(684),c=r(4),d=r(964),f=r(965),m=r(81),h=n.default.extend({name:"ProfileInfo",components:{PenIcon:o.default,InputField:l.default,TimesIcon:m.default},data:function(){return{editingDetails:!1}},computed:{userType:function(){return this.$store.getters.userType},headerText:function(){switch(this.userType){case c.a.FREE:return"Personal Profile";case c.a.PAID:return"Company Profile";case c.a.TEAM:return"Team Profile";default:return""}},formComponent:function(){switch(this.userType){case c.a.FREE:return d.default;case c.a.PAID:case c.a.TEAM:return f.default;default:return{render:function(t){return t("h1","Loading....")}}}}}}),v=r(1),component=Object(v.a)(h,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"bg-white p-6 rounded-2xl border border-paperdazgreen-400"},[e("h3",{staticClass:"flex justify-center text-paperdazgreen-300 border-b-2 border-paperdazgreen-300 font-semibold text-2xl gap-2 pb-1 relative mb-7"},[e("span",[t._v(t._s(t.headerText)+" ")]),t._v(" "),e("button",{staticClass:"absolute right-0 top-1/2 transform -translate-y-1/2 px-2 py-1",attrs:{type:"button"},on:{click:function(e){t.editingDetails=!t.editingDetails}}},[e("pen-icon",{directives:[{name:"show",rawName:"v-show",value:!t.editingDetails,expression:"!editingDetails"}]}),t._v(" "),e("times-icon",{directives:[{name:"show",rawName:"v-show",value:t.editingDetails,expression:"editingDetails"}],attrs:{width:"16",height:"16"}})],1)]),t._v(" "),e(t.formComponent,{tag:"component",staticClass:"mt-4",attrs:{editingDetails:t.editingDetails},on:{"stop-editing":function(e){t.editingDetails=!1}}})],1)}),[],!1,null,null,null);e.default=component.exports},591:function(t,e,r){"use strict";r.r(e);var n=r(0).default.extend({name:"PenIcon"}),o=r(1),component=Object(o.a)(n,(function(){var t=this._self._c;this._self._setupProxy;return t("svg",{attrs:{width:"22",height:"21",viewBox:"0 0 22 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M18.9115 4.7064C19.2385 5.0325 19.2385 5.56081 18.9115 5.88697L6.53124 17.2117L4.79584 18.7991L2.35704 16.364L3.94702 14.6314L14.0038 3.67283L13.6286 3.29784L8.88162 8.03745C8.71847 8.20033 8.45353 8.20033 8.29038 8.03745L8.22549 7.97267C8.06234 7.80978 8.06234 7.54527 8.22549 7.38238L14.7752 0.843927C14.9387 0.68104 15.2033 0.68104 15.3668 0.843927L15.4317 0.908378C15.5949 1.07127 15.5949 1.33578 15.4317 1.49866L14.5159 2.41297L14.8521 2.74903L15.2905 2.27169C15.6168 1.94559 16.146 1.94559 16.473 2.27169L18.9115 4.7064ZM0.769531 19.9744L1.18093 20.3859L4.50958 18.9627L2.19428 16.6512L0.769531 19.9744ZM18.5079 0.0351562L19.8829 1.40798L18.9051 0.431762L17.0658 2.26779L19.0303 4.22914L20.8697 2.39278L21.2456 2.7681C21.2456 2.76843 21.3711 0.306439 18.5079 0.0351562Z",fill:"currentColor"}})])}),[],!1,null,null,null);e.default=component.exports},738:function(t,e,r){var n=r(124).match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},739:function(t,e,r){var n=r(124);t.exports=/MSIE|Trident/.test(n)},740:function(t,e,r){var n=r(124).match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},774:function(t,e,r){var content=r(945);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("3ab85ee9",content,!0,{sourceMap:!1})},775:function(t,e,r){var content=r(947);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("3efa34ea",content,!0,{sourceMap:!1})},944:function(t,e,r){"use strict";r(774)},945:function(t,e,r){var n=r(17)((function(i){return i[1]}));n.push([t.i,".profile-info-form label[data-v-1f19a2c9]{margin-bottom:0.125rem;display:block;font-weight:500;color:#282533}.dropdown[data-v-1f19a2c9]{position:absolute;top:100%;left:0px;width:100%;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:0.5rem;max-height:150px;overflow-y:scroll;margin-top:5px;border-radius:5px;box-shadow:1px 3px 5px rgba(203,206,206,.692)}.dropdown[data-v-1f19a2c9]::-webkit-scrollbar{width:5px;height:3px;cursor:pointer}.dropdown[data-v-1f19a2c9]::-webkit-scrollbar-thumb{--tw-bg-opacity:1;background-color:rgb(119 181 80 / var(--tw-bg-opacity));width:5px;border-radius:50px;cursor:pointer}.dropdown[data-v-1f19a2c9]::-webkit-scrollbar-track{cursor:pointer;border-width:1px;border-color:transparent}.dropdown>div>li[data-v-1f19a2c9]{list-style-type:none;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:0.25rem;padding-right:0.25rem;transition:.2s}.dd-image[data-v-1f19a2c9]{transition:.2s}.dropdown>div:hover .dd-image[data-v-1f19a2c9]{width:20px;height:20px;border-radius:50px}.dropdown>div>li[data-v-1f19a2c9]:hover{padding-left:10px}.custom-input[data-v-1f19a2c9]{margin-right:0.5rem;width:3rem;border-radius:0.5rem;border-width:1px;--tw-border-opacity:1;border-color:rgb(226 228 232 / var(--tw-border-opacity));text-align:center;outline:2px solid transparent;outline-offset:2px}.width-full[data-v-1f19a2c9]{width:100%;text-align:left}",""]),n.locals={},t.exports=n},946:function(t,e,r){"use strict";r(775)},947:function(t,e,r){var n=r(17)((function(i){return i[1]}));n.push([t.i,".profile-info-form label[data-v-b909c828]{margin-bottom:0.125rem;display:block;font-weight:500;color:#282533}.dropdown[data-v-b909c828]{position:absolute;top:100%;left:0px;width:100%;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:0.5rem;max-height:150px;overflow-y:scroll;margin-top:5px;border-radius:5px;box-shadow:1px 3px 5px rgba(203,206,206,.692)}.dropdown[data-v-b909c828]::-webkit-scrollbar{width:5px;height:3px;cursor:pointer}.dropdown[data-v-b909c828]::-webkit-scrollbar-thumb{--tw-bg-opacity:1;background-color:rgb(119 181 80 / var(--tw-bg-opacity));width:5px;border-radius:50px;cursor:pointer}.dropdown[data-v-b909c828]::-webkit-scrollbar-track{cursor:pointer;border-width:1px;border-color:transparent}.dropdown>div>li[data-v-b909c828]{list-style-type:none;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:0.25rem;padding-right:0.25rem;transition:.2s}.dd-image[data-v-b909c828]{transition:.2s}.dropdown>div:hover .dd-image[data-v-b909c828]{width:20px;height:20px;border-radius:50px}.dropdown>div>li[data-v-b909c828]:hover{padding-left:10px}.custom-input[data-v-b909c828]{margin-right:0.5rem;width:3rem;border-radius:0.5rem;border-width:1px;--tw-border-opacity:1;border-color:rgb(226 228 232 / var(--tw-border-opacity));text-align:center;outline:2px solid transparent;outline-offset:2px}.width-full[data-v-b909c828]{width:100%;text-align:left}",""]),n.locals={},t.exports=n},964:function(t,e,r){"use strict";r.r(e);r(836),r(28),r(35),r(55),r(27),r(56);var n=r(3),o=r(13),l=(r(36),r(24),r(376),r(42),r(8),r(260),r(713),r(77),r(21),r(684)),c=(r(258),r(837)),d=r(667),f=r(75),m=r(123),h=r(43),v=(r(838),r(839)),w=r(665),y=r(22);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function D(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _=Object(y.a)(h.a).extend({name:"UserForm",components:{InputField:l.default,MessageAlertWidget:d.default,SpinnerDottedIcon:f.default},data:function(){return{dropDownContent:[],setDropDown:!1,formData:{firstName:"",lastName:"",email:"",phone:"",timezone:"",country:"",state:""},country:"",state:"",states:[],timezones:c.a,loading:!1,errorMessage:""}},computed:D({},Object(m.e)(["initialUser"])),props:{editingDetails:{type:Boolean,default:!1}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchCountries();case 2:return e.next=4,t.fetchStates();case 4:t.formData.state=t.$auth.user?t.$auth.user.state:"";case 5:case"end":return e.stop()}}),e)})))()},mounted:function(){for(var t=0,e=Object.keys(this.formData);t<e.length;t++){var r=e[t];this.formData[r]=this.$auth.user?this.$auth.user[r]:""}this.country=this.$auth.user.country,this.state=this.$auth.user.state},methods:{inputValid:function(t,title){var e=!0;return/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~0-9]/.test(t)&&(this.errorMessage="".concat(title," format not correct"),e=!1),e},inputPhone:function(t,title){var e=!0;return/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~a-zA-Z]/.test(t)&&(this.errorMessage="".concat(title," format not correct"),e=!1),e},cancleOut:function(t){"LI"!=t.target.tagname&&(this.setDropDown=!1)},setCountryInfo:function(t){var e=this;this.country=t.target.textContent.trim().toLowerCase(),this.setDropDown=!1;try{var r=v.a.filter((function(t){return t.name.common.toLowerCase().startsWith(e.country)}))[0];this.formData.timezone=r.timezones[0],this.state=r.capital[0]}catch(t){this.state=""}},displayCountry:function(){var t=this;""!=this.country.trim()?(this.setDropDown=!0,this.dropDownContent=v.a.map((function(t){return t})).filter((function(e){return e.name.common.toLowerCase().startsWith(t.country)})).sort()):this.setDropDown=!1},fetchCountries:function(){},fetchStates:function(){},onSubmit:function(){var t,e,r=this;if(null===(t=event)||void 0===t||t.preventDefault(),this.inputValid(this.formData.firstName,"first name")&&this.inputValid(this.formData.lastName,"last name")&&this.inputValid(this.formData.briefIntro,"Brief introduction")&&this.inputValid(this.country,"country")&&this.inputValid(this.state,"state")&&this.inputPhone(this.formData.phone,"Phone")){if(!this.loading){this.loading=!0,this.errorMessage="";var o=null===(e=this.$auth.user)||void 0===e?void 0:e.id;this.formData=D(D({},this.formData),{},{country:this.country,state:this.state}),this.$axios.$patch("/users/".concat(o),this.formData).then(Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.filterUsers(),r.$notify.success({title:"Data write",message:"Data updated successfully!"}),r.loading=!1,t.next=5,r.$nextTick();case 5:r.$emit("stop-editing");case 6:case"end":return t.stop()}}),t)})))).catch((function(t){var e=t.response;console.log(e);var n=Object(w.a)(e);r.errorMessage=n})).finally((function(){r.loading=!1}))}}else this.$refs.form.scrollIntoView()}},watch:{"formData.country":function(){this.formData.state="",this.fetchStates()},"$auth.user.country":function(){for(var t=0,e=Object.keys(this.formData);t<e.length;t++){var r=e[t];this.formData[r]=this.$auth.user?this.$auth.user[r]:""}this.country=this.$auth.user.country,this.state=this.$auth.user.state}}}),C=(r(944),r(1)),component=Object(C.a)(_,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("form",{ref:"form",staticClass:"profile-info-form grid grid-cols-1 gap-5",attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[e("message-alert-widget",{directives:[{name:"show",rawName:"v-show",value:t.errorMessage,expression:"errorMessage"}],staticClass:"mb-8",attrs:{message:t.errorMessage,type:"error"}}),t._v(" "),e("div",{staticClass:"grid gap-5",staticStyle:{"grid-template-columns":"repeat(auto-fit, minmax(300px, 1fr))"}},[e("div",[e("label",{attrs:{for:""}},[t._v("First Name")]),t._v(" "),e("el-input",{attrs:{placeholder:"Enter first name...",disabled:!t.editingDetails},model:{value:t.formData.firstName,callback:function(e){t.$set(t.formData,"firstName",e)},expression:"formData.firstName"}})],1),t._v(" "),e("div",[e("label",{attrs:{for:""}},[t._v("Last Name")]),t._v(" "),e("el-input",{attrs:{placeholder:"Enter last name...",disabled:!t.editingDetails},model:{value:t.formData.lastName,callback:function(e){t.$set(t.formData,"lastName",e)},expression:"formData.lastName"}})],1)]),t._v(" "),e("div",{staticClass:"grid gap-5",staticStyle:{"grid-template-columns":"repeat(auto-fit, minmax(300px, 1fr))"}},[e("div",[e("label",{attrs:{for:""}},[t._v("Email")]),t._v(" "),e("el-input",{attrs:{placeholder:"Enter email...",required:"",type:"email",disabled:!t.editingDetails},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}})],1),t._v(" "),e("div",[e("label",{attrs:{for:""}},[t._v("Phone Number")]),t._v(" "),e("el-input",{attrs:{placeholder:"Enter phone number...",disabled:!t.editingDetails},model:{value:t.formData.phone,callback:function(e){t.$set(t.formData,"phone",e)},expression:"formData.phone"}})],1)]),t._v(" "),e("div",{staticClass:"grid gap-5",staticStyle:{"grid-template-columns":"repeat(auto-fit, minmax(300px, 1fr))"}},[e("div",{staticClass:"relative"},[e("label",{staticClass:"mb block",attrs:{for:""}},[t._v("Country")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.country,expression:"country"}],ref:"countryInitial",staticClass:"custom-input py-2 px-2 text-[14px] width-full pl-4 text-paperdazgray-300",class:[1==t.editingDetails?"text-black":"text-paperdazgray-300"],attrs:{disabled:!t.editingDetails,type:"text",placeholder:"country"},domProps:{value:t.country},on:{input:[function(e){e.target.composing||(t.country=e.target.value)},t.displayCountry]}}),t._v(" "),t.setDropDown?e("div",{staticClass:"dropdown cursor-pointer z-10"},t._l(t.dropDownContent,(function(r,i){return e("div",{staticClass:"flex items-center my-2 px-1"},[e("img",{staticClass:"w-8 h-6 rounded-md mr-2 dd-image",attrs:{src:r.flags.png}}),t._v(" "),e("li",{attrs:{id:r.dial_code},on:{click:t.setCountryInfo}},[t._v("\n            "+t._s(r.name.common)+"\n          ")])])})),0):t._e()]),t._v(" "),e("div",[e("label",{attrs:{for:""}},[t._v("State")]),t._v(" "),e("el-input",{staticClass:"w-full",attrs:{placeholder:"State",filterable:"",disabled:!t.editingDetails||!t.country},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}})],1)]),t._v(" "),e("div",{staticClass:"grid gap-5",staticStyle:{"grid-template-columns":"repeat(auto-fit, minmax(300px, 1fr))"}},[e("div",[e("label",{attrs:{for:""}},[t._v("Timezone")]),t._v(" "),e("el-select",{staticClass:"w-full",attrs:{placeholder:"Timezone",filterable:"",disabled:!t.editingDetails},model:{value:t.formData.timezone,callback:function(e){t.$set(t.formData,"timezone",e)},expression:"formData.timezone"}},t._l(t.timezones,(function(t,i){return e("el-option",{key:i,attrs:{value:t,label:t}})})),1)],1),t._v(" "),e("div")]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.editingDetails,expression:"editingDetails"}],staticClass:"flex items-center justify-center mt-2"},[e("button",{staticClass:"shadow h-10 px-5 text-white rounded-md bg-paperdazgreen-300 disabled:opacity-50",attrs:{disabled:!t.editingDetails||t.loading}},[e("span",{staticClass:"inline-flex items-center gap-3"},[e("span",[t._v("Update")]),t._v(" "),e("transition",{attrs:{name:"fade",duration:100}},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"animate-spin"},[e("spinner-dotted-icon",{attrs:{height:"22",width:"22"}})],1)])],1)])])])],1)}),[],!1,null,"1f19a2c9",null);e.default=component.exports},965:function(t,e,r){"use strict";r.r(e);r(28),r(836);var n=r(3),o=r(13),l=(r(36),r(24),r(376),r(42),r(8),r(260),r(713),r(77),r(35),r(55),r(27),r(56),r(21),r(22)),c=r(684),d=(r(258),r(837)),f=r(75),m=r(43),h=(r(838),r(839)),v=r(667),w=r(665);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var D=Object(l.a)(m.a).extend({name:"CompanyForm",components:{InputField:c.default,SpinnerDottedIcon:f.default,MessageAlertWidget:v.default},data:function(){return Object(o.a)({dropDownContent:[],setDropDown:!1,country:"",state:"",errorMessage:"",formData:{name:this.$auth.user.companyName,state:"",country:"",slogan:"",briefIntro:"",phone:"",timezone:""},countries:[],states:[],timezones:d.a,loading:!1},"errorMessage","")},props:{editingDetails:{type:Boolean,default:!1}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchCountries();case 2:return e.next=4,t.fetchStates();case 4:t.formData.state=t.$auth.user?t.$auth.user.state:"";case 5:case"end":return e.stop()}}),e)})))()},mounted:function(){console.log(h.a)},beforeMount:function(){for(var t=0,e=Object.keys(this.formData);t<e.length;t++){var r,n=e[t];(null===(r=this.$auth)||void 0===r?void 0:r.user)[n]&&(this.formData[n]=this.$auth.user[n])}this.country=this.$auth.user.country,this.state=this.$auth.user.state},methods:{inputValid:function(t,title){var e=!0;return/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~0-9]/.test(t)&&(this.errorMessage="".concat(title," format not correct"),e=!1),e},inputPhone:function(t,title){var e=!0;return/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~a-zA-Z]/.test(t)&&(this.errorMessage="".concat(title," format not correct"),e=!1),e},cancleOut:function(t){"LI"!=t.target.tagname&&(this.setDropDown=!1)},setCountryInfo:function(t){var e=this;this.country=t.target.textContent.trim().toLowerCase(),this.setDropDown=!1;try{var r=h.a.filter((function(t){return t.name.common.toLowerCase().startsWith(e.country)}))[0];this.formData.timezone=r.timezones[0],this.state=r.capital[0]}catch(t){this.state=""}},displayCountry:function(){var t=this;""!=this.country.trim()?(this.setDropDown=!0,this.dropDownContent=h.a.map((function(t){return t})).filter((function(e){return e.name.common.toLowerCase().startsWith(t.country)})).sort((function(a,b){return a.name.common.localeCompare(b.name.common)}))):this.setDropDown=!1},fetchCountries:function(){},fetchStates:function(){},onSubmit:function(){var t,e,r=this;if(null===(t=event)||void 0===t||t.preventDefault(),this.inputValid(this.formData.name,"Company name")&&this.inputValid(this.formData.slogan,"Slogan")&&this.inputValid(this.formData.briefIntro,"Brief introduction")&&this.inputValid(this.country,"Country")&&this.inputValid(this.state,"State")&&this.inputPhone(this.formData.phone,"Phone")){var o=x(x({},this.formData),{},{companyName:this.formData.name,country:this.country,state:this.state});if(console.log(o),!this.loading){var l=null===(e=this.$auth.user)||void 0===e?void 0:e.id;this.loading=!0,this.errorMessage="",this.$axios.$patch("/users/".concat(l),o).then(Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.filterUsers(),r.$notify.success({title:"Data write",message:"Data updated successfully!"}),r.loading=!1,t.next=5,r.$nextTick();case 5:r.$emit("stop-editing");case 6:case"end":return t.stop()}}),t)})))).catch((function(t){var e=t.response,n=Object(w.a)(e);r.errorMessage=n})).finally((function(){r.loading=!1}))}}else this.$refs.form.scrollIntoView()}},watch:{"$auth.user":function(){for(var t=0,e=Object.keys(this.formData);t<e.length;t++){var r=e[t];this.formData[r]=this.$auth.user?this.$auth.user[r]:""}this.formData.name=this.$auth.user.companyName}}}),_=(r(946),r(1)),component=Object(_.a)(D,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("form",{ref:"form",staticClass:"profile-info-form grid grid-cols-1 gap-5",on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[e("message-alert-widget",{directives:[{name:"show",rawName:"v-show",value:t.errorMessage,expression:"errorMessage"}],staticClass:"my-2 w-[100%] ml-[0%]",attrs:{message:t.errorMessage,type:"error"}}),t._v(" "),e("div",[e("label",{attrs:{for:""}},[t._v("Business / Username")]),t._v(" "),e("el-input",{attrs:{placeholder:"business / username",type:"text",disabled:!t.editingDetails},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),t._v(" "),e("div",{staticClass:"grid gap-5",staticStyle:{"grid-template-columns":"repeat(auto-fit, minmax(300px, 1fr))"}},[e("div",[e("label",{attrs:{for:""}},[t._v("Slogan")]),t._v(" "),e("el-input",{attrs:{placeholder:"Enter slogan...",disabled:!t.editingDetails},model:{value:t.formData.slogan,callback:function(e){t.$set(t.formData,"slogan",e)},expression:"formData.slogan"}})],1),t._v(" "),e("div",[e("label",{attrs:{for:""}},[t._v("Brief Introduction")]),t._v(" "),e("el-input",{attrs:{placeholder:"Enter brief introduction...",disabled:!t.editingDetails},model:{value:t.formData.briefIntro,callback:function(e){t.$set(t.formData,"briefIntro",e)},expression:"formData.briefIntro"}})],1),t._v(" "),e("div",[e("label",{attrs:{for:""}},[t._v("Phone Number")]),t._v(" "),e("el-input",{attrs:{placeholder:"Enter phone number...",disabled:!t.editingDetails,type:"phone"},model:{value:t.formData.phone,callback:function(e){t.$set(t.formData,"phone",e)},expression:"formData.phone"}})],1)]),t._v(" "),e("div",{staticClass:"relative"},[e("label",{staticClass:"mb block",attrs:{for:""}},[t._v("Country")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.country,expression:"country"}],ref:"countryInitial",staticClass:"custom-input py-2 px-2 text-[14px] width-full pl-4 text-paperdazgray-300",class:[0==t.editingDetails?"text-black":"text-paperdazgray-300"],attrs:{disabled:!t.editingDetails,type:"text",placeholder:"country"},domProps:{value:t.country},on:{input:[function(e){e.target.composing||(t.country=e.target.value)},t.displayCountry]}}),t._v(" "),t.setDropDown?e("div",{staticClass:"dropdown cursor-pointer z-10"},t._l(t.dropDownContent,(function(r,i){return e("div",{staticClass:"flex items-center my-2 px-1"},[e("img",{staticClass:"w-8 h-6 rounded-md mr-2 dd-image",attrs:{src:r.flags.png}}),t._v(" "),e("li",{attrs:{id:r.dial_code},on:{click:t.setCountryInfo}},[t._v("\n          "+t._s(r.name.common)+"\n        ")])])})),0):t._e()]),t._v(" "),e("div",[e("div",[e("label",{attrs:{for:""}},[t._v("State")]),t._v(" "),e("el-input",{staticClass:"w-full",attrs:{placeholder:"State",filterable:"",disabled:!t.editingDetails},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}})],1)]),t._v(" "),e("div",{staticClass:"grid gap-5",staticStyle:{"grid-template-columns":"repeat(auto-fit, minmax(300px, 1fr))"}},[e("div",[e("label",{attrs:{for:""}},[t._v("Timezone")]),t._v(" "),e("el-select",{staticClass:"w-full",attrs:{placeholder:"Timezone",filterable:"",disabled:!t.editingDetails},model:{value:t.formData.timezone,callback:function(e){t.$set(t.formData,"timezone",e)},expression:"formData.timezone"}},t._l(t.timezones,(function(t,i){return e("el-option",{key:i,attrs:{value:t,label:t}})})),1)],1),t._v(" "),e("div")]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.editingDetails,expression:"editingDetails"}],staticClass:"flex items-center justify-center mt-2"},[e("button",{staticClass:"shadow h-10 px-5 text-white rounded-md bg-paperdazgreen-300 disabled:opacity-50",attrs:{disabled:!t.editingDetails||t.loading}},[e("span",{staticClass:"inline-flex items-center gap-3"},[e("span",[t._v("Update")]),t._v(" "),e("transition",{attrs:{name:"fade",duration:100}},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"animate-spin"},[e("spinner-dotted-icon",{attrs:{height:"22",width:"22"}})],1)])],1)])])])],1)}),[],!1,null,"b909c828",null);e.default=component.exports}}]);