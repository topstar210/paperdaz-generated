(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{1769:function(t,e,n){"use strict";n.r(e);n(24),n(52),n(28),n(8),n(27);var l=n(22),o=n(73),r=n(48),d=n(47),c=n(57),h=n(240),f=n(63),m=n(94),w=n(29),x=n(64),v=n(60),_=Object(l.a)(o.a).extend({name:"AppBar",components:{LogoWithText:d.default,SearchIcon:w.default,HamburgerIcon:m.default,ArrowDownIcon:c.default,UserProfileSolidIcon:v.default,GearIcon:f.default,SignOutIcon:x.default,DashboardIcon:h.default,LandingPageSearchModal:r.default},data:function(){return{scrolled:!1,collapsed:!1,showLandingPageSearchModal:!1}},watch:{$route:function(t,e){t.fullPath!==e.fullPath&&(this.collapsed=!1)}},computed:{routeName:function(){return(this.$nuxt.$route.name||"").replace(/-/g," ")},user:function(){return this.$auth.user},profilePhoto:function(){return this.$store.getters.profilePhoto}},mounted:function(){var t=this;this.scrollObserver(),document.addEventListener("scroll",(function(){t.collapsed&&(t.collapsed=!1)}))},methods:{handleCommand:function(t){switch(t){case"logout":this.logout(!1);break;case"profile":this.$nuxt.$router.push("/public/profile");break;case"dashboard":this.$nuxt.$router.push("/dashboard");break;case"settings":this.$nuxt.$router.push("/settings")}},scrollObserver:function(){var t=this;new IntersectionObserver((function(e,n){e.forEach((function(e){t.scrolled=!e.isIntersecting}))}),{rootMargin:"0px",threshold:1}).observe(this.$el)}}}),C=n(1),component=Object(C.a)(_,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"sticky z-20 h-14 py-2 transition ease-in-out",class:{"shadow-md":t.scrolled,"bg-white":t.scrolled,"bg-transparent":!t.scrolled},staticStyle:{top:"-0.1px"}},[e("nav",{staticClass:"container h-full flex items-center justify-between hidden"},[e("div",{staticClass:"flex items-center gap-1"}),t._v(" "),e("div",{staticClass:"transition left-0 transform text-sm font-medium gap-4 fixed top-0 bottom-0 w-56 bg-white flex flex-col p-6 shadow-lg lg:shadow-none lg:items-center lg:gap-9 lg:p-0 lg:relative lg:bg-transparent lg:w-auto lg:flex-row lg:translate-x-0",class:[t.collapsed?"translate-x-0":"-translate-x-56"]},[t.$auth.loggedIn?t._e():e("div",{staticClass:"h-px bg-paperdazgray-300 w-full lg:hidden"}),t._v(" "),t.$auth.loggedIn?t._e():e("div",{staticClass:"flex flex-col items-center gap-4 lg:hidden"},[e("nuxt-link",{staticClass:"text-paperdazgreen-300 mt-5",attrs:{to:"/login"}},[t._v("Sign in")]),t._v(" "),e("nuxt-link",{staticClass:"bg-paperdazgreen-300 text-white h-8 rounded shadow px-3 flex items-center justify-center whitespace-nowrap",attrs:{to:"/register"}},[t._v("Get Started")])],1),t._v(" "),e("div",{staticClass:"grid w-full place-items-center lg:hidden"},[t.$auth.loggedIn?e("el-dropdown",{attrs:{trigger:"click"},on:{command:t.handleCommand}},[e("span",{staticClass:"flex items-center el-dropdown-link"},[e("span",{staticClass:"circle circle-20 border border-paperdazgreen-300 mr-2 p-0.5"},[e("img",{staticClass:"circle",attrs:{src:t.profilePhoto,alt:""}})]),t._v(" "),e("span",{staticClass:"text-gray-500"},[e("arrow-down-icon",{staticClass:"h-1 w-1.5 sm:h-2.5 sm:w-4"})],1)]),t._v(" "),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",{attrs:{command:"dashboard"}},[e("span",{staticClass:"inline-flex gap-2 items-center"},[t._v(" Dashboard")])]),t._v(" "),e("el-dropdown-item",{attrs:{command:"profile",divided:""}},[e("span",{staticClass:"inline-flex gap-2 items-center"},[e("user-profile-solid-icon",{attrs:{height:"14",width:"14"}}),t._v("\n                Profile")],1)]),t._v(" "),e("el-dropdown-item",{attrs:{command:"settings"}},[e("span",{staticClass:"inline-flex gap-2 items-center"},[e("gear-icon",{attrs:{height:"14",width:"14"}}),t._v("\n                Settings")],1)]),t._v(" "),e("el-dropdown-item",{attrs:{divided:"",command:"logout"}},[e("span",{staticClass:"text-red-600 inline-flex gap-2 items-center"},[e("sign-out-icon",{attrs:{height:"14",width:"14"}}),t._v("\n                Logout")],1)])],1)],1):t._e()],1)]),t._v(" "),e("div",{staticClass:"flex items-center gap-1.5 xs:gap-3 sm:gap-5 text-xs xs:text-sm sm:text-base md:text-ls"})]),t._v(" "),e("landing-page-search-modal",{model:{value:t.showLandingPageSearchModal,callback:function(e){t.showLandingPageSearchModal=e},expression:"showLandingPageSearchModal"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LandingPageSearchModal:n(48).default})}}]);