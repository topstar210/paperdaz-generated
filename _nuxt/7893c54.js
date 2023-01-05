(window.webpackJsonp=window.webpackJsonp||[]).push([[220,32,231],{1091:function(t,e,r){var content=r(1531);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("53341ed0",content,!0,{sourceMap:!1})},1388:function(t,e,r){"use strict";r.r(e);var c=r(0).default.extend({name:"SwitchWidget",props:{active:{type:Boolean,default:!1}}}),n=r(1),component=Object(n.a)(c,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"switch-widget flex cursor-pointer w-10 rounded-full bg-[#C4C4C4]",class:[t.active?"justify-end":""]},[e("div",{staticClass:"indicator circle circle-10",class:[t.active?"bg-paperdazgreen-400":"bg-[#8C8F89]"]})])}),[],!1,null,null,null);e.default=component.exports},1530:function(t,e,r){"use strict";r(1091)},1531:function(t,e,r){var c=r(17)((function(i){return i[1]}));c.push([t.i,'.checkbox[data-v-174741cc]{-webkit-appearance:none;cursor:pointer;width:40px;border:none;height:20px;position:relative;background-color:hsla(0,0%,62%,.5);border-radius:50px}.checkbox[data-v-174741cc]:after{content:"";width:20px;height:20px;border-radius:50%;position:absolute;top:0;left:0;transition:.3s;background-color:#9e9e9e}.checkbox[data-v-174741cc]:checked:after{left:20px;background-color:#77b550}.menu-item[data-v-174741cc]{display:grid;height:4rem;width:100%;min-width:220px;max-width:100%;cursor:pointer;align-items:center;gap:0.5rem;border-radius:1rem;border-width:2px;--tw-border-opacity:1;border-color:rgb(119 181 80 / var(--tw-border-opacity));padding-left:1.25rem;padding-right:1.25rem;font-size:0.875rem;line-height:1.25rem;font-weight:700;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-duration:200ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);grid-template-columns:25px 1fr}.menu-item[data-v-174741cc]:not(:last-child){margin-bottom:1.25rem}.menu-item[data-v-174741cc]:hover{background-color:rgb(119 181 80 / var(--tw-bg-opacity));--tw-bg-opacity:0.05}.menu-item.active[data-v-174741cc]{--tw-bg-opacity:1;background-color:rgb(119 181 80 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}',""]),c.locals={},t.exports=c},1639:function(t,e,r){"use strict";r.r(e);r(34),r(43),r(8),r(55),r(28),r(56);var c=r(27),n=r(13),o=r(3),l=(r(77),r(44),r(21),r(0)),d=r(143),f=r(646),m=r(1388),h=(r(264),r(75)),v=r(4);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var C=l.default.extend({name:"NotificationsTab",components:{BellIcon:d.default,EnvelopeOutlinedIcon:f.default,SwitchWidget:m.default,SpinnerDottedIcon:h.default},data:function(){return{currentState:"app",isTeamMember:void 0,app:{},email:{},notificationSpinner:!0,patchSpinner:!1}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.queryNotificationApp();case 2:return e.next=4,t.queryNotificationEmail();case 4:t.notificationSpinner=!1;case 5:case"end":return e.stop()}}),e)})))()},methods:{getCheckValue:function(t){var e=t.target.getAttribute("data_family"),r=t.target.getAttribute("data_patch"),c=t.target.checked,n={object:this.checkInputAction(r,c),id:this.app.id},o={object:this.checkInputAction(r,c),id:this.email.id};switch(e){case"app":return void this.patchNotification(_({},n));case"email":return void this.patchNotification(_({},o))}},checkInputAction:function(t,e){switch(t){case"accessRequest":return{accessRequest:e?1:0};case"fileAction":return{fileAction:e?1:0};case"inviteRequest":return{inviteRequest:e?1:0};case"payment":return{payment:e?1:0};case"referalCredit":return{referalCredit:e?1:0}}},patchNotification:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var c,object;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c=t.id,object=t.object,e.patchSpinner=!0,r.next=4,e.$axios.$patch("/notification-settings/".concat(c),_({},object)).then((function(){e.notificationSpinner=!1,e.patchSpinner=!1})).catch((function(){e.$notify.error({title:"",message:"Could not make the change"})}));case 4:case"end":return r.stop()}}),r)})))()},queryNotificationApp:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/notification-settings/?userId=".concat(t.$auth.user.id,"&type=app")).then((function(e){var r=Object(c.a)(e,1)[0];t.app=Object.keys(r).map((function(t,e){"1"==r[t]?r[t]=!0:"0"==r[t]?r[t]=!1:r[t]})),t.app=r})).catch((function(t){}));case 2:case"end":return e.stop()}}),e)})))()},queryNotificationEmail:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/notification-settings/?userId=".concat(t.$auth.user.id,"&type=email")).then((function(e){var r=Object(c.a)(e,1)[0];t.email=Object.keys(r).map((function(t,e){"1"==r[t]?r[t]=!0:"0"==r[t]?r[t]=!1:r[t]})),t.email=r})).catch((function(t){}));case 2:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.isTeamMember=!(this.$auth.user.role==v.a.TEAM)}}),k=(r(1530),r(1)),component=Object(k.a)(C,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"flex flex-col sm:flex-row gap-5"},[e("div",{staticClass:"p-4 flex-1 sm:flex-initial rounded-2xl bg-white sm:self-start"},[e("ul",[e("li",{staticClass:"menu-item",class:{active:"app"===t.currentState},on:{click:function(e){t.currentState="app"}}},[e("bell-icon",{staticClass:"text-[#FFCF27]"}),t._v(" "),e("span",[t._v("App Notification")])],1),t._v(" "),e("li",{staticClass:"menu-item",class:{active:"email"===t.currentState},on:{click:function(e){t.currentState="email"}}},[e("envelope-outlined-icon",{staticClass:"text-[#FFCF27]"}),t._v(" "),e("span",[t._v("Email Notification")])],1)])]),t._v(" "),e("transition",{attrs:{name:"fade",mode:"out-in",duration:200}},[e("main",{staticClass:"relative w-full"},[t.notificationSpinner||t.patchSpinner?e("div",{staticClass:"absolute z-10 w-full h-full top-0 left-0 rounded-lg flex justify-center items-center",class:[t.patchSpinner?"bg-transparent":"bg-white"]},[e("spinner-dotted-icon",{staticClass:"text-paperdazgreen-400 animate-spin"})],1):t._e(),t._v(" "),"app"==t.currentState?e("section",{key:"app",staticClass:"flex-1 px-8 py-10 bg-white rounded-2xl relative"},[e("h3",{staticClass:"flex justify-center text-paperdazgreen-300 border-b-2 border-paperdazgreen-300 font-semibold text-2xl gap-2 pb-1 relative mb-7"},[e("span",[t._v("App Notifications")])]),t._v(" "),e("form",{staticClass:"w-full overflow-x-auto custom-scrollbar"},[e("table",{staticClass:"custom-table"},[e("tbody",[t.isTeamMember?e("tr",[e("td",[e("div",{staticClass:"text-sm"},[e("p",{staticClass:"mb-1 font-semibold"},[t._v("Users & Roles")]),t._v(" "),e("p",[t._v("Access requests for private files")])])]),t._v(" "),e("td",{staticClass:"w-4 fixed-col right"},[e("input",{staticClass:"checkbox",attrs:{data_patch:"accessRequest",data_family:"app",type:"checkbox"},domProps:{checked:t.app.accessRequest},on:{input:t.getCheckValue}})])]):t._e(),t._v(" "),e("tr",[e("td",[e("div",{staticClass:"text-sm"},[e("p",{staticClass:"mb-1 font-semibold"},[t._v("Collaborations")]),t._v(" "),e("p",[t._v("Invitation requests, Joining requests,")])])]),t._v(" "),e("td",{staticClass:"w-4 fixed-col right"},[e("input",{staticClass:"checkbox",attrs:{data_patch:"inviteRequest",data_family:"app",type:"checkbox"},domProps:{checked:t.app.inviteRequest},on:{input:t.getCheckValue}})])]),t._v(" "),e("tr",[e("td",[e("div",{staticClass:"text-sm"},[e("p",{staticClass:"mb-1 font-semibold"},[t._v("Actions")]),t._v(" "),e("p",[t._v("Files completed, confirmed, signed")])])]),t._v(" "),e("td",{staticClass:"w-4 fixed-col right"},[e("input",{staticClass:"checkbox",attrs:{data_patch:"fileAction",data_family:"app",type:"checkbox"},domProps:{checked:t.app.fileAction},on:{input:t.getCheckValue}})])]),t._v(" "),t.isTeamMember?e("tr",[e("td",[e("div",{staticClass:"text-sm"},[e("p",{staticClass:"mb-1 font-semibold"},[t._v("Referral Credits")]),t._v(" "),e("p",[t._v("Reference sign ups, credits earned")])])]),t._v(" "),e("td",{staticClass:"w-4 fixed-col right"},[e("input",{staticClass:"checkbox",attrs:{data_patch:"referalCredit",data_family:"app",type:"checkbox"},domProps:{checked:t.app.referalCredit},on:{input:t.getCheckValue}})])]):t._e(),t._v(" "),t.isTeamMember?e("tr",[e("td",[e("div",{staticClass:"text-sm"},[e("p",{staticClass:"mb-1 font-semibold"},[t._v("Payments")]),t._v(" "),e("p",[t._v("Billing reminders, package expiry")])])]),t._v(" "),e("td",{staticClass:"w-4 fixed-col right"},[e("input",{staticClass:"checkbox",attrs:{data_patch:"payment",data_family:"app",type:"checkbox"},domProps:{checked:t.app.payment},on:{input:t.getCheckValue}})])]):t._e()])])])]):t._e(),t._v(" "),"email"==t.currentState?e("section",{key:"email",staticClass:"flex-1 px-8 py-10 bg-white rounded-2xl"},[e("h3",{staticClass:"flex justify-center text-paperdazgreen-300 border-b-2 border-paperdazgreen-300 font-semibold text-2xl gap-2 pb-1 relative mb-7"},[e("span",[t._v("Email Notifications")])]),t._v(" "),e("div",{staticClass:"w-full overflow-x-auto custom-scrollbar"},[e("table",{staticClass:"custom-table"},[e("tbody",[t.isTeamMember?e("tr",[e("td",[e("div",{staticClass:"text-sm"},[e("p",{staticClass:"mb-1 font-semibold"},[t._v("Users & Roles")]),t._v(" "),e("p",[t._v("Access requests for private files")])])]),t._v(" "),e("td",{staticClass:"w-4 fixed-col right"},[e("input",{staticClass:"checkbox",attrs:{data_patch:"accessRequest",data_family:"email",type:"checkbox"},domProps:{checked:t.email.accessRequest},on:{input:t.getCheckValue}})])]):t._e(),t._v(" "),e("tr",[e("td",[e("div",{staticClass:"text-sm"},[e("p",{staticClass:"mb-1 font-semibold"},[t._v("Collaborations")]),t._v(" "),e("p",[t._v("Invitation requests, Joining requests,")])])]),t._v(" "),e("td",{staticClass:"w-4 fixed-col right"},[e("input",{staticClass:"checkbox",attrs:{data_patch:"inviteRequest",data_family:"email",type:"checkbox"},domProps:{checked:t.email.inviteRequest},on:{input:t.getCheckValue}})])]),t._v(" "),e("tr",[e("td",[e("div",{staticClass:"text-sm"},[e("p",{staticClass:"mb-1 font-semibold"},[t._v("Actions")]),t._v(" "),e("p",[t._v("Files completed, confirmed, signed")])])]),t._v(" "),e("td",{staticClass:"w-4 fixed-col right"},[e("input",{staticClass:"checkbox",attrs:{data_patch:"fileAction",data_family:"email",type:"checkbox"},domProps:{checked:t.email.fileAction},on:{input:t.getCheckValue}})])]),t._v(" "),t.isTeamMember?e("tr",[e("td",[e("div",{staticClass:"text-sm"},[e("p",{staticClass:"mb-1 font-semibold"},[t._v("Referral Credits")]),t._v(" "),e("p",[t._v("Reference sign ups, credits earned")])])]),t._v(" "),e("td",{staticClass:"w-4 fixed-col right"},[e("input",{staticClass:"checkbox",attrs:{data_family:"email",type:"checkbox",data_patch:"referalCredit"},domProps:{checked:t.email.referalCredit},on:{input:t.getCheckValue}})])]):t._e(),t._v(" "),t.isTeamMember?e("tr",[e("td",[e("div",{staticClass:"text-sm"},[e("p",{staticClass:"mb-1 font-semibold"},[t._v("Payments")]),t._v(" "),e("p",[t._v("Billing reminders, package expiry")])])]),t._v(" "),e("td",{staticClass:"w-4 fixed-col right"},[e("input",{staticClass:"checkbox",attrs:{data_patch:"payment",data_family:"email",type:"checkbox"},domProps:{checked:t.email.payment},on:{input:t.getCheckValue}})])]):t._e()])])])]):t._e()])])],1)}),[],!1,null,"174741cc",null);e.default=component.exports},646:function(t,e,r){"use strict";r.r(e);var c=r(0).default.extend({name:"EnvelopeOutlineIcon"}),n=r(1),component=Object(n.a)(c,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("svg",{staticClass:"stroke-current",attrs:{width:"22",height:"18",viewBox:"0 0 22 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M3 1H19C20.1 1 21 1.9 21 3V15C21 16.1 20.1 17 19 17H3C1.9 17 1 16.1 1 15V3C1 1.9 1.9 1 3 1Z","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{d:"M21 3L11 10L1 3","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])}),[],!1,null,null,null);e.default=component.exports}}]);