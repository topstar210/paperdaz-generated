(window.webpackJsonp=window.webpackJsonp||[]).push([[254,16,17,33,35,95,117,119,160,229,230,231],{1596:function(e,t,r){"use strict";r.r(t),r.d(t,"NoAuthpages",(function(){return o}));var o=/pdf/},1597:function(e,t,r){var content=r(1675);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("a5bce572",content,!0,{sourceMap:!1})},1673:function(e,t,r){e.exports=r.p+"img/card.5dfd73e.png"},1674:function(e,t,r){"use strict";r(1597)},1675:function(e,t,r){var o=r(17)((function(i){return i[1]}));o.push([e.i,".dropdown[data-v-4befefd3]{position:absolute;top:100%;left:0px;width:100%;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));max-height:150px;overflow-y:scroll;margin-top:5px;border-radius:5px;box-shadow:1px 3px 5px rgba(203,206,206,.692)}.dropdown[data-v-4befefd3]::-webkit-scrollbar{width:5px;height:3px;cursor:pointer}.dropdown[data-v-4befefd3]::-webkit-scrollbar-thumb{--tw-bg-opacity:1;background-color:rgb(119 181 80 / var(--tw-bg-opacity));width:5px;border-radius:50px;cursor:pointer}.dropdown[data-v-4befefd3]::-webkit-scrollbar-track{cursor:pointer;border-width:1px;border-color:transparent}.dropdown>li[data-v-4befefd3]{list-style-type:none;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:0.25rem;padding-right:0.25rem}.custom-input[data-v-4befefd3]{margin-right:0.5rem;width:3rem;border-radius:0.5rem;border-width:1px;--tw-border-opacity:1;border-color:rgb(226 228 232 / var(--tw-border-opacity));text-align:center;outline:2px solid transparent;outline-offset:2px}.width-full[data-v-4befefd3]{width:100%;text-align:left}",""]),o.locals={},e.exports=o},1758:function(e,t,r){"use strict";r.r(t);var o,n=[function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"or-line"},[t("div",{staticClass:"text"},[e._v("Or")]),e._v(" "),t("div",{staticClass:"line"})])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"col-lg-12"},[t("button",{staticClass:"rounded shadow px-2 next-btn bg-paperdazgreen-300 hover:bg-paperdazgreen-70 transition duration-0 hover:duration-150 text-white"},[e._v("\n                        Next >\n                      ")])])},function(){var e=this._self._c;this._self._setupProxy;return e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"right-image"},[e("img",{attrs:{src:r(1673),alt:""}})])])}],l=r(3),c=r(13),d=(r(21),r(24),r(67),r(8),r(36),r(376),r(79),r(80),r(35),r(42),r(55),r(27),r(56),r(0)),f=r(577),v=r(75),h=r(104),m=r(684),w=r(667),y=r(746),x=r(43),_=r(665),C=r(578),k=r(1596),P=r(787),O=r(788);function I(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?I(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):I(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var M=d.default.extend({name:"RegisterPage",auth:!1,mixins:[x.a],components:(o={SocialAuth:O.default,InputField:m.default,PasswordField:y.default,SvgIcon:h.default,CheckIcon:f.default,MessageAlertWidget:w.default,SpinnerDottedIcon:v.default,ExclamationIcon:C.default,SignUpEmailVerify:P.default},Object(c.a)(o,"SocialAuth",O.default),Object(c.a)(o,"MessageAlertWidget",w.default),o),layout:"landing",beforeRouteEnter:function(e,t,r){k.NoAuthpages.test(t.fullPath.slice(1))&&""!=t.fullPath.slice(1)&&localStorage.setItem("redirect_paperdaz_path",t.fullPath),r()},data:function(){return{confirmPassword:void 0,setDropDown:!1,countrycode:"",country:"",dropDownContent:[],totalCountriesArray:[],isTeamLoggin:!1,teamMemberLinkMessage:"Already have an account?",showEmailVerification:!1,ConfirmedPassword:!1,verificationInfo:{},packageparams:this.$route.query.hasPackageId,user:{firstName:void 0,lastName:void 0,email:void 0},isLoading:!1,errorMessage:"",isRedirecting:!1,acceptTermsConditions:!1}},watch:{"user.password":function(){this.checkPasswordStrength()}},beforeRouteLeave:function(e,t,r){this.$auth.logout(),r()},mounted:function(){this.setTeamIdFromQuery()},methods:{setTeamIdFromQuery:function(){Object.keys(this.$route.query).some((function(e){return"teamId"==e}))&&localStorage.setItem("team_member_object",JSON.stringify({teamId:this.$route.query.teamId,action:"join_a_team"}))},cancleOut:function(e){"LI"!=e.target.tagname&&(this.setDropDown=!1)},termsConditionClick:function(e){e.target.checked?this.acceptTermsConditions=!0:this.acceptTermsConditions=!1},Submit:function(){var e,t=this;null===(e=event)||void 0===e||e.preventDefault();var r=!1,o=/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~0-9]/;if((o.test(this.user.firstName.trim())||o.test(this.user.lastName.trim()))&&(this.errorMessage="Name format not correct",r=!0),!(this.isLoading||this.isRedirecting||r)){this.isLoading=!0,this.errorMessage="",this.isRedirecting=!1;var data={firstName:this.user.firstName,lastName:this.user.lastName,email:this.user.email,package:this.packageparams};Object.keys(this.$route.query).includes("referreeCode")&&(data=j(j({},data),this.$route.query)),this.$axios.post("/users",data).then(function(){var e=Object(l.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(r),t.showEmailVerification=!0,t.verificationInfo={email:r.data.email,package:t.packageparams};case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){var r=e.response,o=Object(_.ErrorHandler)(r);t.errorMessage=o,t.isRedirecting=!1})).finally((function(){t.isLoading=!1}))}}}}),S=M,N=(r(1674),r(1)),component=Object(N.a)(S,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("section",{staticClass:"bg-gradient-to-t from-white to-transparent"},[t("div",{staticClass:"container py-20"},[t("div",{staticClass:"signup-section"},[t("div",{staticClass:"container"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-6"},[t("div",{staticClass:"left-form"},[t("div",{staticClass:"signup-form"},[t("h1",[e._v("Create your free account")]),e._v(" "),t("div",{staticClass:"social-btns pb-3"},[t("SocialAuth")],1),e._v(" "),t("message-alert-widget",{directives:[{name:"show",rawName:"v-show",value:e.errorMessage,expression:"errorMessage"}],staticClass:"mb-8",attrs:{message:e.errorMessage,type:"error"}}),e._v(" "),e._m(0),e._v(" "),t("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.Submit.apply(null,arguments)}}},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-6"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.firstName,expression:"user.firstName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"First name",required:"",disabled:e.isLoading||e.isRedirecting},domProps:{value:e.user.firstName},on:{input:function(t){t.target.composing||e.$set(e.user,"firstName",t.target.value)}}})]),e._v(" "),t("div",{staticClass:"col-lg-6"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.lastName,expression:"user.lastName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Last name",disabled:e.isLoading||e.isRedirecting,required:""},domProps:{value:e.user.lastName},on:{input:function(t){t.target.composing||e.$set(e.user,"lastName",t.target.value)}}})]),e._v(" "),t("div",{staticClass:"col-lg-12"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Email address",disabled:e.isLoading||e.isRedirecting,required:""},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),e._v(" "),e._m(1),e._v(" "),t("div",{staticClass:"col-lg-12"},[t("p",[e._v("\n                        We’re committed to your privacy. Paperdaz uses the\n                        information you provide to us to you about our\n                        relevant content, products, and services. You may\n                        unsubcribe from these communications at any time. For\n                        more information, check out our\n                        "),t("nuxt-link",{attrs:{to:"/terms-condition"}},[e._v("\n                          Privacy Policy\n                        ")])],1)])])])],1)])]),e._v(" "),e._m(2)])])])]),e._v(" "),t("SignUpEmailVerify",{attrs:{verificationInfo:e.verificationInfo},model:{value:e.showEmailVerification,callback:function(t){e.showEmailVerification=t},expression:"showEmailVerification"}})],1)}),n,!1,null,"4befefd3",null);t.default=component.exports},577:function(e,t,r){"use strict";r.r(t);var o=r(0).default.extend({name:"CheckIcon"}),n=r(1),component=Object(n.a)(o,(function(){var e=this._self._c;this._self._setupProxy;return e("svg",{staticClass:"svg-inline--fa fa-check fa-w-16",attrs:{height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check",role:"img",viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}})])}),[],!1,null,null,null);t.default=component.exports},578:function(e,t,r){"use strict";r.r(t);var o=r(0).default.extend({name:"ExclamationIcon"}),n=r(1),component=Object(n.a)(o,(function(){var e=this._self._c;this._self._setupProxy;return e("svg",{staticClass:"fill-current",attrs:{width:"21",height:"21",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M20.8184 10.4055C20.8184 4.65876 16.158 6.06279e-05 10.4091 6.01255e-05C4.66026 5.96231e-05 -0.000116843 4.65875 -0.000117346 10.4055C-0.000117848 16.1523 4.66026 20.811 10.4091 20.811C16.158 20.811 20.8184 16.1523 20.8184 10.4055ZM1.89226 10.4055C1.89226 5.70359 5.70529 1.89194 10.4089 1.89194C15.1125 1.89194 18.9256 5.70359 18.9256 10.4055C18.9256 15.1074 15.1125 18.9191 10.4089 18.9191C5.70529 18.9191 1.89226 15.1074 1.89226 10.4055ZM10.4089 4.73131C9.88611 4.73131 9.4623 5.15484 9.4623 5.6773C9.4623 6.19975 9.88611 6.62328 10.4089 6.62328C10.9317 6.62328 11.3555 6.19975 11.3555 5.6773C11.3555 5.15484 10.9317 4.73131 10.4089 4.73131ZM9.45956 16.0828L11.3528 16.0828L11.3528 8.51508L9.45956 8.51508L9.45956 16.0828Z"}})])}),[],!1,null,null,null);t.default=component.exports},580:function(e,t,r){"use strict";r.r(t);var o=r(0).default.extend({name:"CheckFillIcon",props:["width","height"]}),n=r(1),component=Object(n.a)(o,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:e.width,height:"104",viewBox:"0 0 107 104",fill:"none"}},[t("path",{attrs:{d:"M53.5 0C23.9989 0 0 23.326 0 52C0 80.674 23.9989 104 53.5 104C83.0011 104 107 80.674 107 52C107 23.326 83.0011 0 53.5 0Z",fill:"#77C360"}}),e._v(" "),t("path",{attrs:{d:"M78.6775 41.1786L49.3593 68.8395C48.4797 69.6693 47.3251 70.087 46.1705 70.087C45.0159 70.087 43.8614 69.6693 42.9818 68.8395L28.3231 55.009C26.559 53.3454 26.559 50.6555 28.3231 48.9918C30.0863 47.3274 32.9365 47.3274 34.7006 48.9918L46.1705 59.8137L72.3 35.1614C74.0633 33.497 76.9134 33.497 78.6775 35.1614C80.4408 36.825 80.4408 39.5141 78.6775 41.1786Z",fill:"#FAFAFA"}})])}),[],!1,null,null,null);t.default=component.exports},589:function(e,t,r){"use strict";r.r(t);var o=r(0).default.extend({name:"EyeIcon"}),n=r(1),component=Object(n.a)(o,(function(){var e=this._self._c;this._self._setupProxy;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"16",width:"16",viewBox:"0 0 576 512"}},[e("path",{attrs:{fill:"currentColor",d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"}})])}),[],!1,null,null,null);t.default=component.exports},663:function(e,t,r){var content=r(676);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("07fbc454",content,!0,{sourceMap:!1})},665:function(e,t,r){"use strict";r.r(t),r.d(t,"ErrorHandler",(function(){return o}));r(79),r(80);function o(e){var t,r,o,n,l,c,d,f,v,h;console.log("error-handler",e);var m=(null===(r=null===(t=e)||void 0===t?void 0:t.data)||void 0===r?void 0:r.errors[0])||(null===(n=null===(o=e)||void 0===o?void 0:o.data)||void 0===n?void 0:n.message);return console.log("error-handler",m),(null===(l=(null==m?void 0:m.message)||m)||void 0===l?void 0:l.includes("email"))?"Email already exists":(null===(c=(null==m?void 0:m.message)||m)||void 0===c?void 0:c.includes("phone"))?"Phone number already exists":(null===(d=(null==m?void 0:m.message)||m)||void 0===d?void 0:d.includes("Invalid login"))?"Email or password is Incorrect":null==m?"Network error":(null===(f=(null==m?void 0:m.message)||m)||void 0===f?void 0:f.includes("subscriptions.userId"))?"You are already a subscribe user":(null===(v=(null==m?void 0:m.message)||m)||void 0===v?void 0:v.includes("Cannot read properties of undefined (reading 'teamMembers')"))?"Team trying to join does not exist":(null===(h=(null==m?void 0:m.message)||m)||void 0===h?void 0:h.includes("Stripe"))?"Error occured, Trying to send card info":void 0}},667:function(e,t,r){"use strict";r.r(t);var o=r(13),n=r(0),l=r(577),c=r(578),d=r(75),f=r(81),v=n.default.extend({components:{ExclamationIcon:c.default,CheckIcon:l.default,TimesIcon:f.default,SpinnerDottedIcon:d.default},name:"MessageAlertWidget",props:{type:{type:String,default:"info"},message:{type:String,default:""},isLoading:{type:Boolean,default:!1}}}),h=(r(675),r(1)),component=Object(h.a)(v,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"message-alert-widget text-white border px-4 py-3 rounded-lg text-xs flex items-center gap-2 font-medium",class:Object(o.a)({},e.type,!0)},[t("div",{staticClass:"icon-container p-1.5 bg-gray-100 bg-opacity-90 rounded-md"},["info"===e.type||"error"===e.type?t("exclamation-icon",{attrs:{width:"12",height:"12"}}):t("check-icon",{attrs:{width:"10",height:"10"}})],1),e._v(" "),t("div",{staticClass:"flex-1"},[e._t("default",(function(){return[t("div",{staticClass:"w-full flex justify-between gap-3 items-center"},[t("p",{staticClass:"flex-1"},[e._v(e._s(e.message))]),e._v(" "),t("div",[t("span",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}],staticClass:"animate-spin inline-block"},[t("spinner-dotted-icon",{attrs:{height:"22",width:"22"}})],1)])])]}),{message:e.message})],2)])}),[],!1,null,"ab037030",null);t.default=component.exports},675:function(e,t,r){"use strict";r(663)},676:function(e,t,r){var o=r(17)((function(i){return i[1]}));o.push([e.i,".message-alert-widget.info[data-v-ab037030]{--tw-border-opacity:1;border-color:rgb(202 138 4 / var(--tw-border-opacity));background-color:rgb(202 138 4 / var(--tw-bg-opacity));--tw-bg-opacity:0.8}.message-alert-widget.info .icon-container[data-v-ab037030]{color:rgb(202 138 4 / var(--tw-text-opacity));--tw-text-opacity:0.8}.message-alert-widget.error[data-v-ab037030]{--tw-border-opacity:1;border-color:rgb(220 38 38 / var(--tw-border-opacity));background-color:rgb(220 38 38 / var(--tw-bg-opacity));--tw-bg-opacity:0.8}.message-alert-widget.error .icon-container[data-v-ab037030]{color:rgb(220 38 38 / var(--tw-text-opacity));--tw-text-opacity:0.8}.message-alert-widget.success[data-v-ab037030]{--tw-border-opacity:1;border-color:rgb(22 163 74 / var(--tw-border-opacity));background-color:rgb(22 163 74 / var(--tw-bg-opacity));--tw-bg-opacity:0.8}.message-alert-widget.success .icon-container[data-v-ab037030]{color:rgb(22 163 74 / var(--tw-text-opacity));--tw-text-opacity:0.8}",""]),o.locals={},e.exports=o},681:function(e,t,r){var content=r(721);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("5d8b2903",content,!0,{sourceMap:!1})},684:function(e,t,r){"use strict";r.r(t);var o=r(0).default.extend({name:"InputField",props:{showAsError:{type:Boolean,default:!1}}}),n=(r(720),r(1)),component=Object(n.a)(o,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("input",{staticClass:"input-field",class:{error:e.showAsError},attrs:{type:"text",placeholder:""},on:{input:function(t){return e.$emit("input",t.currentTarget.value)}}})}),[],!1,null,"4c045957",null);t.default=component.exports},688:function(e,t){},689:function(e,t){},690:function(e,t){},691:function(e,t){},692:function(e,t){},693:function(e,t){},694:function(e,t){},695:function(e,t){},696:function(e,t){},697:function(e,t){},702:function(e,t,r){var content=r(737);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("6b9503c8",content,!0,{sourceMap:!1})},720:function(e,t,r){"use strict";r(681)},721:function(e,t,r){var o=r(17)((function(i){return i[1]}));o.push([e.i,".input-field[data-v-4c045957]{height:2.5rem;width:100%;border-radius:0.75rem;border-width:1px;--tw-border-opacity:1;border-color:rgb(226 228 232 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-left:0.5rem;padding-right:0.5rem}.input-field[data-v-4c045957]:focus{--tw-border-opacity:1;border-color:rgb(65 65 66 / var(--tw-border-opacity));outline:2px solid transparent;outline-offset:2px}.input-field[data-v-4c045957]:disabled{cursor:not-allowed}.input-field.error[data-v-4c045957]{--tw-border-opacity:1;border-color:rgb(252 165 165 / var(--tw-border-opacity));--tw-text-opacity:1;color:rgb(220 38 38 / var(--tw-text-opacity))}.input-field.error[data-v-4c045957]::-moz-placeholder{--tw-placeholder-opacity:1;color:rgb(252 165 165 / var(--tw-placeholder-opacity))}.input-field.error[data-v-4c045957]::placeholder{--tw-placeholder-opacity:1;color:rgb(252 165 165 / var(--tw-placeholder-opacity))}.input-field.error[data-v-4c045957]:focus{border-color:rgb(220 38 38 / var(--tw-border-opacity));--tw-border-opacity:0.7}",""]),o.locals={},e.exports=o},722:function(e,t,r){var content=r(768);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("42b244fa",content,!0,{sourceMap:!1})},723:function(e,t,r){var content=r(770);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("95ed67ce",content,!0,{sourceMap:!1})},736:function(e,t,r){"use strict";r(702)},737:function(e,t,r){var o=r(17)((function(i){return i[1]}));o.push([e.i,".input-field[data-v-347ad17a]{height:2.5rem;width:100%;border-radius:0.75rem;border-width:1px;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-left:0.5rem;padding-right:0.5rem}.input-field[data-v-347ad17a]:focus{outline:2px solid transparent;outline-offset:2px}.input-field.error[data-v-347ad17a]{--tw-border-opacity:1;border-color:rgb(252 165 165 / var(--tw-border-opacity));--tw-text-opacity:1;color:rgb(220 38 38 / var(--tw-text-opacity))}.input-field.error[data-v-347ad17a]::-moz-placeholder{--tw-placeholder-opacity:1;color:rgb(252 165 165 / var(--tw-placeholder-opacity))}.input-field.error[data-v-347ad17a]::placeholder{--tw-placeholder-opacity:1;color:rgb(252 165 165 / var(--tw-placeholder-opacity))}.input-field.error[data-v-347ad17a]:focus{border-color:rgb(220 38 38 / var(--tw-border-opacity));--tw-border-opacity:0.7}.input-field.error>input[data-v-347ad17a]::-moz-placeholder{--tw-placeholder-opacity:1;color:rgb(252 165 165 / var(--tw-placeholder-opacity))}.input-field.error>input[data-v-347ad17a]::placeholder{--tw-placeholder-opacity:1;color:rgb(252 165 165 / var(--tw-placeholder-opacity))}",""]),o.locals={},e.exports=o},746:function(e,t,r){"use strict";r.r(t);r(50),r(67);var o=r(0),n=r(589),l=r(196),c=o.default.extend({name:"PasswordField",components:{EyeIcon:n.default,EyeSlashedIcon:l.default},props:{placeholder:{type:String,default:""},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},showAsError:{type:Boolean,default:!1}},data:function(){return{showPassword:!1,value:void 0,focus:!1}},watch:{value:function(e){this.$emit("input",e)}},mounted:function(){}}),d=(r(736),r(1)),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"input-field flex items-center",class:[e.focus?"border-paperdazgray-500":"border-paperdazgray-200",e.showAsError?"error":""]},["checkbox"==(e.showPassword?"text":"password")?t("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],ref:"inputField",staticClass:"outline-none focus:outline-none border-none flex-1 h-full disabled:cursor-not-allowed",attrs:{placeholder:e.placeholder,required:e.required,disabled:e.disabled,type:"checkbox"},domProps:{checked:Array.isArray(e.value)?e._i(e.value,null)>-1:e.value},on:{focus:function(t){e.focus=!0},focusout:function(t){e.focus=!1},change:function(t){var r=e.value,o=t.target,n=!!o.checked;if(Array.isArray(r)){var l=e._i(r,null);o.checked?l<0&&(e.value=r.concat([null])):l>-1&&(e.value=r.slice(0,l).concat(r.slice(l+1)))}else e.value=n}}}):"radio"==(e.showPassword?"text":"password")?t("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],ref:"inputField",staticClass:"outline-none focus:outline-none border-none flex-1 h-full disabled:cursor-not-allowed",attrs:{placeholder:e.placeholder,required:e.required,disabled:e.disabled,type:"radio"},domProps:{checked:e._q(e.value,null)},on:{focus:function(t){e.focus=!0},focusout:function(t){e.focus=!1},change:function(t){e.value=null}}}):t("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],ref:"inputField",staticClass:"outline-none focus:outline-none border-none flex-1 h-full disabled:cursor-not-allowed",attrs:{placeholder:e.placeholder,required:e.required,disabled:e.disabled,type:e.showPassword?"text":"password"},domProps:{value:e.value},on:{focus:function(t){e.focus=!0},focusout:function(t){e.focus=!1},input:function(t){t.target.composing||(e.value=t.target.value)}}}),e._v(" "),t("span",{staticClass:"cursor-pointer",class:{"text-paperdazgray-300":!e.showPassword},on:{click:function(t){e.showPassword=!e.showPassword}}},[e.showPassword?t("eye-icon"):t("eye-slashed-icon")],1)])}),[],!1,null,"347ad17a",null);t.default=component.exports},767:function(e,t,r){"use strict";r(722)},768:function(e,t,r){var o=r(17)((function(i){return i[1]}));o.push([e.i,"*[data-v-9074dfd2] .el-dialog{width:416px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-9074dfd2] .el-dialog__header{padding-bottom:20px}*[data-v-9074dfd2] .el-dialog__footer,*[data-v-9074dfd2] .el-dialog__header{text-align:left!important}*[data-v-9074dfd2] .el-dialog__body{background:#fcfcfd}*[data-v-9074dfd2] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),o.locals={},e.exports=o},769:function(e,t,r){"use strict";r(723)},770:function(e,t,r){var o=r(17)((function(i){return i[1]}));o.push([e.i,".social-card[data-v-5bbea032]{display:flex;min-width:120px;align-items:center;justify-content:center;gap:0.5rem;border-radius:0.375rem;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-left:0.75rem;padding-right:0.75rem;padding-top:0.75rem;padding-bottom:0.75rem;--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.social-card[data-v-5bbea032]:hover{--tw-text-opacity:1;color:rgb(65 65 66 / var(--tw-text-opacity))}",""]),o.locals={},e.exports=o},787:function(e,t,r){"use strict";r.r(t);r(36),r(35),r(42),r(8),r(55),r(27),r(56);var o=r(13),n=r(0),l=r(75),c=(r(263),r(580));r(674);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var f=n.default.extend({name:"SuccessFileModal",components:{SpinnerDottedIcon:l.default,CheckedFillIcon:c.default},model:{prop:"visible",event:"updateVisibility"},props:{visible:{type:Boolean,default:!1},verificationInfo:{type:Object}},data:function(){return{showModal:!1,isLoading:!1,newSaveData:{},file:{},sendAction:null,refuse:!0}},watch:{visible:function(e){this.showModal=e}},mounted:function(){this.showModal=this.visible},methods:{closeModal:function(){this.$emit("updateVisibility",!1)},reSendVerification:function(){var e=this;this.$axios.$post("/verify",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({action:"resendToken"},verificationInfo)).then((function(t){console.log(t),e.$notify.success({message:"Message sent to email successfully"}),e.closeModal()})).catch((function(){e.$notify.error({message:"Failed to send"})}))}}}),v=f,h=(r(767),r(1)),component=Object(h.a)(v,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:e.showModal,"append-to-body":!1,"show-close":!1,center:""},on:{"update:visible":function(t){e.showModal=t}},scopedSlots:e._u([{key:"title",fn:function(){return[t("h1",{staticClass:"text-center font-semibold text-xl"},[e._v("Sign up")])]},proxy:!0}])},[t("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}}),e._v(" "),e._v(" "),t("p",{staticClass:"w-[90%] ml-[5%] text-[17px] text-center pb-8 break-normal font-semibold"},[e._v("Verify your email address")]),e._v(" "),t("p",{staticClass:"w-[90%] ml-[5%] text-center pb-8 break-normal"},[e._v("A verification email has been sent to"),t("br"),e._v(" "),t("b",{staticClass:"font-semibold text-paperdazgreen-400"},[e._v(e._s(e.verificationEmail))]),t("br"),e._v("\n    Please follow the instructions in the email to complete registration"),t("br"),e._v("\n    If you did not see the email "),t("button",{staticClass:"text-paperdazgreen-400 font-semibold",on:{click:e.reSendVerification}},[e._v(" click here ")]),e._v(" and we will resend it\n    ")])])}),[],!1,null,"9074dfd2",null);t.default=component.exports},788:function(e,t,r){"use strict";r.r(t);var o=r(3),n=(r(21),r(0)),l=r(674),c=r.n(l),d=n.default.extend({created:function(){},data:function(){return{socialState:void 0}},methods:{socialSignIn:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,n,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:r.prev=0,r.t0=e,r.next="facebook"===r.t0?4:"google"===r.t0?6:"twitter"===r.t0?8:10;break;case 4:return t.socialState=new t.$fireModule.auth.FacebookAuthProvider,r.abrupt("break",10);case 6:return t.socialState=new t.$fireModule.auth.GoogleAuthProvider,r.abrupt("break",10);case 8:return t.socialState=new t.$fireModule.auth.TwitterAuthProvider,r.abrupt("break",10);case 10:return r.next=12,t.$fire.auth.signInWithPopup(t.socialState);case 12:n=(n=r.sent).user._delegate.providerData[0],n={displayName:null===(o=n)||void 0===o?void 0:o.displayName,email:n.email,phoneNumber:n.phoneNumber,photoURL:n.photoURL,id:n.uid,provider:n.providerId.substring(0,n.providerId.indexOf("."))},l=c.a.sign(n,"eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ"),window.location.assign("/login?token=".concat(l)),r.next=22;break;case 19:r.prev=19,r.t1=r.catch(0),console.log(r.t1);case 22:case"end":return r.stop()}}),r,null,[[0,19]])})))()}}}),f=(r(769),r(1)),component=Object(f.a)(d,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[t("div",{staticClass:"flex flex-wrap gap-2 xs:gap-4 text-sm font-medium text-paperdazgray-400"},[t("div",{staticClass:"flex-1 cursor-pointer social-card",on:{click:function(t){return e.socialSignIn("facebook")}}},[t("img",{staticClass:"object-contain w-5 h-5",attrs:{src:"/icons/authIcons/facebook.png",alt:""}}),e._v(" "),t("span",[e._v("Facebook")])]),e._v(" "),t("div",{staticClass:"flex-1 social-card cursor-pointer",on:{click:function(t){return e.socialSignIn("google")}}},[t("img",{staticClass:"object-contain w-5 h-5",attrs:{src:"/icons/authIcons/google.png",alt:""}}),e._v(" "),t("span",[e._v("Google")])]),e._v(" "),t("div",{staticClass:"flex-1 cursor-pointer social-card",on:{click:function(t){return e.socialSignIn("twitter")}}},[t("img",{staticClass:"object-contain w-5 h-5",attrs:{src:"/icons/authIcons/twitter.png",alt:""}}),e._v(" "),t("span",[e._v("Twitter")])])])])}),[],!1,null,"5bbea032",null);t.default=component.exports}}]);