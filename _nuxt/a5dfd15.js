(window.webpackJsonp=window.webpackJsonp||[]).push([[111,38,73,99,100],{1067:function(e,t,r){var content=r(1518);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("6b445f88",content,!0,{sourceMap:!1})},1517:function(e,t,r){"use strict";r(1067)},1518:function(e,t,r){var o=r(17)((function(i){return i[1]}));o.push([e.i,".file-ledger-table[data-v-715c8687]{--background:#fff;width:100%;white-space:nowrap;font-size:0.875rem;line-height:1.25rem;border-collapse:separate;border-spacing:0;}.file-ledger-table tr[data-v-715c8687]{border-bottom-width:1px;--tw-border-opacity:1;border-color:rgb(243 244 246 / var(--tw-border-opacity));transition:all .2s ease-in-out;}.file-ledger-table tr.highlight[data-v-715c8687]{--background:rgba(233,254,219,0.46)}.file-ledger-table th[data-v-715c8687]{padding-top:2rem;padding-bottom:0.75rem;background:var(--background);}.file-ledger-table td[data-v-715c8687]{padding-top:0.75rem;padding-bottom:0.75rem;}.file-ledger-table td[data-v-715c8687],.file-ledger-table th[data-v-715c8687]{border-bottom-width:1px;--tw-border-opacity:1;border-color:rgb(243 244 246 / var(--tw-border-opacity));padding-left:0.5rem;padding-right:0.5rem;transition:all .2s ease-in-out;background:var(--background);}.file-ledger-table td[data-v-715c8687]:first-child,.file-ledger-table th[data-v-715c8687]:first-child{padding-left:1.25rem;}.file-ledger-table td[data-v-715c8687]:last-child,.file-ledger-table th[data-v-715c8687]:last-child{padding-right:1.25rem;}.file-ledger-table td.fixed-col[data-v-715c8687],.file-ledger-table th.fixed-col[data-v-715c8687]{position:sticky;background:#fff;background:var(--background);}.file-ledger-table td.fixed-col.left[data-v-715c8687],.file-ledger-table th.fixed-col.left[data-v-715c8687]{left:-.1px;}.file-ledger-table td.fixed-col.left.scrolled[data-v-715c8687],.file-ledger-table th.fixed-col.left.scrolled[data-v-715c8687]{box-shadow:3px 0 8px rgba(0,0,0,.14)}.file-ledger-table td.fixed-col.right[data-v-715c8687],.file-ledger-table th.fixed-col.right[data-v-715c8687]{right:-.1px;}.file-ledger-table td.fixed-col.right.scrolled[data-v-715c8687],.file-ledger-table th.fixed-col.right.scrolled[data-v-715c8687]{box-shadow:0 3px 8px rgba(0,0,0,.14)}",""]),o.locals={},e.exports=o},1625:function(e,t,r){"use strict";r.r(t);var o=r(13),n=r(3),l=(r(41),r(8),r(76),r(123),r(23),r(52),r(27),r(43),r(34),r(42),r(55),r(56),r(21),r(0)),c=r(124),d=r(636),f=r(36),h=r(612),m=r(877),v=r(194),x=r(75),w=r(59),C=r(85),_=r(731),y=r(699),F=r(730),k=r(4),P=r(621),$=r(611),O=(r(263),r(936)),M=r(839),S=r(937),U=r(870);function j(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function D(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var I=l.default.extend({components:{TreeIcon:h.default,FolderPlusIcon:P.default,PlusIcon:$.default,ScribbleIcon:d.default,SearchIcon:f.default,ShareIcon:v.default,SpinnerDottedIcon:x.default,HeartOutlineIcon:w.default,ShareOutlineIcon:C.default,ShareFilesModal:_.default,QrcodeShare:y.default,FilePagination:F.default,UploadDocumentModal:M.default,CreateCompanyFolder:O.default,CreateTeam:S.default,EmptyFileLedger:U.default},props:["searchContect"],fetch:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},data:function(){return{searchParam:"",totalFile:null,returnedDataPage:0,spinner:!0,show:!1,showQrcodeFiles:!1,showShareCompanyFiles:!1,userFile:{},userId:this.$auth.user.id,filterTitle:"",searchValue:"",showScribble:!1,files:[],fileProps:{},copyFiles:[],refresh:!1,highlightedFileId:void 0,scrollObserver:void 0,showUploadDocumentModal:!1,showCreateCompanyFolder:!1,showCreateTeam:!1}},mounted:function(){this.handleFileHighlight(),this.handleShowingLedger(),this.tableScrollObserver(),this.fetchFiles(this.returnedDataPage,this.searchValue)},methods:{showCreateCompanyFolderFunc:function(){this.showCreateCompanyFolder=!0},showUploadModalFunction:function(){this.showUploadDocumentModal=!0},setRefresh:function(){this.refresh=!this.refresh},resetUserFolder:function(){this.fileProps={}},resetUserFile:function(){this.userFile={}},showCreateTeamFunc:function(){this.showCreateTeam=!0},searchFiles:function(e){this.searchValue=e.target.value},ledgerFiles:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function o(){var n;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return n=r.$auth.user.role!=k.a.PAID?"/ledger?userId=".concat(r.$auth.user.id,"&$sort[updatedAt]=-1&fileName[$like]=").concat(t,"%&$skip=").concat(e):"/ledger?fileOwnerId=".concat(r.$auth.user.id,"&$sort[updatedAt]=-1&fileName[$like]=").concat(t,"%&$skip=").concat(e),o.next=3,r.$axios.get(n).then((function(e){var t=[];e.data.data.map((function(e){e.file&&(e.favourites=[],e.shared=null,e.fileAction=e.action,e.paperLink=(e.file||{}).paperLink,e.userName=e.fileOwner.firstName+" "+e.fileOwner.lastName,t.push(e))})),r.files=t.length>0?t:[],r.$store.commit("ADD_USER",t),r.totalFile=e.data.total})).finally((function(){r.spinner=!1}));case 3:case"end":return o.stop()}}),o)})))()},fetchUserFiles:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function o(){var n,l,c;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return c=(null===(n=r.$auth.user)||void 0===n?void 0:n.role)==k.a.TEAM?r.$auth.user.teamId:null===(l=r.$auth.user)||void 0===l?void 0:l.id,o.next=3,r.$axios.$get("/files?userId=".concat(c,"&fileName[$like]=").concat(t,"%&$skip=").concat(e,"&$sort[updatedAt]=-1"),{params:{isEditing:0}}).then((function(e){r.$emit("setUploadpaperlink",e.total);var t=e.data.map((function(e){return e}));r.files=t,r.$store.commit("ADD_USER",t),r.totalFile=e.total})).finally((function(){r.spinner=!1}));case 3:case"end":return o.stop()}}),o)})))()},setPage:function(e){this.returnedDataPage=e},showShareCompanyFilesFunc:function(data){this.userFile=data,this.showShareCompanyFiles=!0},showQrcodeFileFunc:function(){this.showQrcodeFiles=!0},fetchFiles:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:r.isPaidUser,r.ledgerFiles(e,t);case 1:case"end":return o.stop()}}),o)})))()},handleFileHighlight:function(){var e=this;this.highlightedFileId=this.$nuxt.$route.query.highlight_file,setTimeout((function(){e.highlightedFileId=void 0}),2e4)},shareFile:function(e){var t=location.origin.replace(/\/+$/,"")+"/pdf/".concat(e.id);navigator.share({url:t,title:e.file_name})},tableScrollObserver:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$nextTick();case 2:if(e.scrollObserver)try{e.scrollObserver.disconnect(),e.scrollObserver=void 0}catch(e){}r={root:e.$refs.ledgerContainer,rootMargin:"0px",threshold:1},o=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting?e.target.classList.remove("scrolled"):e.target.classList.add("scrolled")}))}),r),document.querySelectorAll(".fixed-col").forEach((function(e){o.observe(e)})),e.scrollObserver=o;case 9:case"end":return t.stop()}}),t)})))()},formatDateTime:function(e){return"".concat(m.a.getDateString(e),"  ").concat(m.a.getFormattedTime(e))},handleShowingLedger:function(){var e=this,t=this.$refs.ledgerContainer;if(t){new IntersectionObserver((function(r,o){r.forEach((function(r){r.target===t&&(r.isIntersecting?e.showScribble=!0:e.showScribble=!1)}))}),{root:null,threshold:.75,rootMargin:"0px"}).observe(t)}}},updated:function(){this.tableScrollObserver()},computed:D(D({},Object(c.e)(["filterUser","pdfUser"])),{},{userType:function(){return k.a},isPaidUser:function(){var e,t;switch(null===(e=this.$auth)||void 0===e||null===(t=e.user)||void 0===t?void 0:t.role){case k.a.PAID:case k.a.TEAM:return!0;case k.a.FREE:return!1}},mainUserLink:function(){var e,t;switch(null===(e=this.$auth)||void 0===e||null===(t=e.user)||void 0===t?void 0:t.role){case k.a.PAID:return(this.$auth.user||{}).id;case k.a.TEAM:return(this.$auth.user||{}).mainAccountId}(this.$auth.user||{}).id}}),watch:{"$auth.user":function(){this.fetchFiles(this.returnedDataPage,this.searchParam)},returnedDataPage:function(){this.spinner=!0,this.fetchFiles(this.returnedDataPage,this.searchParam)},searchParam:function(){this.spinner=!0,this.fetchFiles(this.returnedDataPage,this.searchParam)},pdfUser:function(){console.log("pdfuser>>",this.pdfUser)},refresh:function(){this.$nuxt.refresh(),this.fetchFiles(this.returnedDataPage,this.folderSearch),this.fetchFolder(this.returnedFolderPage,this.folderSearch)}}}),L=(r(1517),r(1)),component=Object(L.a)(I,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"flex flex-col"},[t("h3",{staticClass:"text-paperdazgray-700 font-semibold text-xl flex flex-col gap-3 xs:flex-row xs:items-center justify-between whitespace-nowrap",class:e.isPaidUser?"":"mb-4 mt-4"},[t("h5",{staticClass:"text-lg font-semibold text-[#272727] inline-flex items-center gap-2"},[e._v("\n      "+e._s(e.isPaidUser?"File Ledger":"Ledger")+" "),t("a",{attrs:{href:"/public/profile/".concat(e.mainUserLink),target:"_blanck"}},[e.isPaidUser?t("img",{attrs:{src:r(943)}}):e._e()]),e._v(" "),e.isPaidUser?t("img",{staticClass:"-ml-8 cursor-pointer",attrs:{src:r(944)},on:{click:e.showCreateTeamFunc}}):e._e()]),e._v(" "),t("div",{staticClass:"w-full xs:max-w-[350px] text-xs font-medium flex items-center relative justify-end"},[t("span",{staticClass:"el-dropdown-link left-roll mr-4"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchParam,expression:"searchParam"}],staticClass:"search-input h-10 transition pl-4 mr-2 bg-transparent flex-1 border-[1px] border-paperdazgreen-400 rounded-tl-lg rounded-bl-lg focus:border-paperdazgreen-700 outline-none",attrs:{type:"text",placeholder:"Search Files"},domProps:{value:e.searchParam},on:{input:function(t){t.target.composing||(e.searchParam=t.target.value)}}})]),e._v(" "),t("button",{staticClass:"circle circle-18 bg-paperdazgreen-400 text-white mr-2 hover:bg-paperdazgreen-70 transition duration-0 hover:duration-150 transition duration-0 hover:duration-150"},[t("search-icon",{attrs:{width:"16",height:"16",currentcolor:"white"}})],1),e._v(" "),e.isPaidUser?t("div",{staticClass:"flex"},[t("button",{staticClass:"circle circle-18 bg-paperdazgreen-400 text-xl text-white hover:bg-paperdazgreen-70 transition duration-0 hover:duration-150 transition duration-0 hover:duration-150",on:{click:e.showCreateCompanyFolderFunc}},[t("folder-plus-icon")],1),e._v(" "),t("button",{staticClass:"circle circle-18 p-2 ml-2 bg-paperdazgreen-400 text-white text-xl hover:bg-paperdazgreen-70 transition duration-0 hover:duration-150 transition duration-0 hover:duration-150",on:{click:e.showUploadModalFunction}},[t("plus-icon")],1)]):e._e()])]),e._v(" "),t("div",{ref:"ledgerContainer",staticClass:"bg-white rounded-2xl flex-1 min-h-[50vh] lg:min-h-[40vh] position-relative",class:[(e.files||[]).length<=0||e.$fetchState.pending?"p-5 flex items-center justify-center":"pb-4 overflow-x-auto custom-scrollbar"]},[(e.pdfUser||[]).length<=0&&!e.spinner?t("img",{staticClass:"position-absolute mt-24 left-[30%]",attrs:{src:r(786)}}):e._e(),e._v(" "),e.spinner?t("div",{key:"1",staticClass:"p-6 flex justify-center items-center"},[t("spinner-dotted-icon",{staticClass:"text-paperdazgreen-400 animate-spin"})],1):t("table",{key:"3",ref:"fileLedgerTable",staticClass:"file-ledger-table"},[t("thead",[t("tr",{staticClass:"text-left"},[t("th",{staticClass:"text-left fixed-col left"},[e._v("No")]),e._v(" "),t("th",{staticClass:"text-center"},[e._v("File Name")]),e._v(" "),t("th",{staticClass:"text-center"},[e._v(e._s(e.isPaidUser?"Action":"Actions"))]),e._v(" "),e.isPaidUser?t("th",{staticClass:"text-center"},[e._v("Action By")]):e._e(),e._v(" "),t("th",{staticClass:"text-center"},[e._v("Date & time")]),e._v(" "),t("th",{staticClass:"fixed-col right text-right"})])]),e._v(" "),e.pdfUser.length>0?t("tbody",e._l(e.pdfUser,(function(r,i){return t("tr",{key:r.id,class:{highlight:r.id==e.highlightedFileId}},[t("td",{staticClass:"text-left fixed-col left"},[e._v(e._s(i+1+e.returnedDataPage))]),e._v(" "),t("td",{staticClass:"text-center"},[t("div",{staticClass:"flex items-center gap-1.5"},[t("div",{staticClass:"border border-paperdazgreen-300 p-0.5",class:[r.role==e.userType.PAID?"rounded-md w-9 h-9":"circle circle-17"]},[t("img",{class:[r.role==e.userType.PAID?"w-full h-full rounded-md":"w-full h-full rounded-full"],attrs:{src:(r.fileOwner||{}).profile_picture||"/img/placeholder_picture.png",alt:""}})]),e._v(" "),t("div",[t("p",{staticClass:"text-sm font-medium"},[t("nuxt-link",{attrs:{to:"/pdf/".concat(r.paperLink)}},[e._v("\n                    "+e._s(r.fileName)+"\n                  ")])],1),e._v(" "),t("p",{staticClass:"text-xs"},[e._v("\n                  "+e._s((r||{}).userName)+"\n                ")])])])]),e._v(" "),t("td",{staticClass:"text-center"},[e._v("\n            "+e._s(r.fileAction||"-")+"\n          ")]),e._v(" "),e.isPaidUser?t("td",{staticClass:"text-center"},[e._v("\n            "+e._s(r.user.firstName+" "+r.user.lastName)+"\n          ")]):e._e(),e._v(" "),t("td",{staticClass:"text-center"},[e._v("\n            "+e._s(e.formatDateTime(r.updatedAt))+"\n          ")]),e._v(" "),t("td",{staticClass:"fixed-col right"},[t("button",{staticClass:"cursor-pointer",on:{click:function(t){return e.showShareCompanyFilesFunc(r)}}},[t("share-outline-icon",{staticClass:"w-4 h-4"})],1)])])})),0):t("tbody",e._l(10,(function(i){return t("tr",{key:i},[t("td",{staticClass:"text-left fixed-col left"},[e._v(e._s(i))]),e._v(" "),t("td",{staticClass:"text-center"}),e._v(" "),t("td",{staticClass:"text-center"}),e._v(" "),t("td",{staticClass:"text-center"}),e._v(" "),t("td",{staticClass:"text-center"}),e._v(" "),t("td",{staticClass:"fixed-col right"})])})),0)])]),e._v(" "),e.pdfUser.length>10?t("FilePagination",{attrs:{totalFile:e.totalFile},on:{setPage:e.setPage}}):e._e(),e._v(" "),t("ShareFilesModal",{attrs:{userFile:e.userFile},on:{qrLoad:e.showQrcodeFileFunc},model:{value:e.showShareCompanyFiles,callback:function(t){e.showShareCompanyFiles=t},expression:"showShareCompanyFiles"}}),e._v(" "),t("CreateCompanyFolder",{attrs:{userFile:e.userFile},on:{refresh:e.setRefresh,resetUserFile:e.resetUserFile},model:{value:e.showCreateCompanyFolder,callback:function(t){e.showCreateCompanyFolder=t},expression:"showCreateCompanyFolder"}}),e._v(" "),t("upload-document-modal",{attrs:{folder:e.fileProps},on:{resetUserFolder:e.resetUserFolder},model:{value:e.showUploadDocumentModal,callback:function(t){e.showUploadDocumentModal=t},expression:"showUploadDocumentModal"}}),e._v(" "),t("QrcodeShare",{attrs:{userFile:e.userFile},model:{value:e.showQrcodeFiles,callback:function(t){e.showQrcodeFiles=t},expression:"showQrcodeFiles"}}),e._v(" "),t("CreateTeam",{on:{refresh:e.setRefresh},model:{value:e.showCreateTeam,callback:function(t){e.showCreateTeam=t},expression:"showCreateTeam"}})],1)}),[],!1,null,"715c8687",null);t.default=component.exports},621:function(e,t,r){"use strict";r.r(t);var o=r(22),n=r(264),l=Object(o.a)(n.a).extend({name:"CompanyIcon",data:function(){return{hwRatio:1}}}),c=r(1),component=Object(c.a)(l,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("svg",{staticClass:"stroke-current",attrs:{height:e.fontSize*e.hwRatio,width:e.fontSize/e.hwRatio,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),e._v(" "),t("path",{attrs:{d:"M12 11V17","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),e._v(" "),t("path",{attrs:{d:"M9 14H15","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])}),[],!1,null,null,null);t.default=component.exports},636:function(e,t,r){"use strict";r.r(t);var o={},n=r(1),component=Object(n.a)(o,(function(){var e=this._self._c;return e("svg",{staticClass:"fill-current",attrs:{width:"281",height:"214",viewBox:"0 0 281 214",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{"clip-path":"url(#clip0_2677:1355)"}},[e("path",{attrs:{d:"M240.28 173.309C198.871 205.688 123.773 191.009 109.658 145.481C109.44 144.888 109.258 144.272 109.103 143.646C108.407 140.842 110.632 138.196 113.503 137.87C152.846 133.398 190.924 115.461 196.223 90.9289C201.059 67.8088 168.979 58.3267 146.373 69.7781C121.103 82.6785 102.009 102.58 97.0286 125.188C96.5003 127.586 94.4657 129.428 92.0102 129.397C67.2831 129.09 44.0978 121.721 32.1821 103.079C11.0463 69.8534 45.9709 29.9914 89.0968 20.8773C93.6991 20.1354 92.0907 14.8696 87.4884 15.6115C28.3314 23.1066 -6.39897 79.8723 30.5114 118.002C44.1416 131.835 66.824 138.266 91.3102 138.865C93.9603 138.93 96.132 140.987 96.6037 143.595C100.779 166.689 124.615 186.419 153.685 195.916C189.637 207.536 224.259 197.391 247.465 178.276C251.235 175.266 244.02 170.664 240.28 173.309ZM133.621 90.8112C142.278 83.4101 153.53 75.1103 167.337 72.8846C180.641 70.6196 184.132 84.1099 184.177 89.9878C184.109 97.3256 176.57 103.345 169.646 107.945C156.585 117.224 136.219 124.73 115.103 127.982C111.79 128.492 109.069 125.532 110.2 122.377C114.372 110.736 123.52 99.9502 133.621 90.8112Z"}}),this._v(" "),e("path",{attrs:{d:"M264.012 159.559C249.959 158.461 235.348 158.054 221.598 159.55C215.993 160.213 218.074 165.883 223.652 165.585C234.807 164.988 246.322 166.254 257.334 167.482C256.462 172.186 255.561 177.256 254.186 181.921C252.898 185.492 248.957 190.692 251.683 194.576C253.046 196.519 255.555 196.715 258.122 196.181C264.287 194.827 264.885 187.163 266.203 183.227C268.221 176.776 269.207 170.612 269.72 164.042C269.891 161.854 267.023 159.794 264.012 159.559Z"}})])])}),[],!1,null,null,null);t.default=component.exports},767:function(e,t,r){var content=r(850);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("b3b4bf28",content,!0,{sourceMap:!1})},768:function(e,t,r){var content=r(852);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("2516dbcc",content,!0,{sourceMap:!1})},849:function(e,t,r){"use strict";r(767)},850:function(e,t,r){var o=r(17)((function(i){return i[1]}));o.push([e.i,"*[data-v-11a65b66] .el-dialog{width:416px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-11a65b66] .el-dialog__header{padding-bottom:20px}*[data-v-11a65b66] .el-dialog__footer,*[data-v-11a65b66] .el-dialog__header{text-align:left!important}*[data-v-11a65b66] .el-dialog__body{background:#fcfcfd}*[data-v-11a65b66] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),o.locals={},e.exports=o},851:function(e,t,r){"use strict";r(768)},852:function(e,t,r){var o=r(17)((function(i){return i[1]}));o.push([e.i,"*[data-v-44bf5bc4] .el-dialog{width:416px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-44bf5bc4] .el-dialog__header{padding-bottom:20px}*[data-v-44bf5bc4] .el-dialog__footer,*[data-v-44bf5bc4] .el-dialog__header{text-align:left!important}*[data-v-44bf5bc4] .el-dialog__body{background:#fcfcfd}*[data-v-44bf5bc4] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),o.locals={},e.exports=o},936:function(e,t,r){"use strict";r.r(t);var o=r(3),n=(r(21),r(43),r(8),r(385),r(0)),l=r(75),c=n.default.extend({name:"create-company-folder",components:{SpinnerDottedIcon:l.default},model:{prop:"visible",event:"updateVisibility"},props:{packagename:{type:String},visible:{type:Boolean,default:!1},userFile:{type:Object}},data:function(){return{showModal:!1,errorMessage:"",folderName:"",loading:!1}},watch:{visible:function(e){this.showModal=e},showModal:function(e){this.$emit("updateVisibility",e)}},mounted:function(){this.showModal=this.visible},methods:{closeModal:function(){this.$emit("updateVisibility",!1)},moveCompanyFiles:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(0!==Object.keys(t.userFile).length){r.next=2;break}return r.abrupt("return");case 2:t.$axios.$patch("/files/".concat(t.userFile.id),{folderId:e}).then((function(){t.$notify.success({title:"File",message:"Moved successfully"}),t.$emit("updateVisibility",!1),t.$emit("refresh"),t.$emit("resetUserFile")})).catch((function(e){t.$notify.error({title:"Package",message:"Unable to move file"})})).finally((function(){t.loading=!1}));case 3:case"end":return r.stop()}}),r)})))()},onSubmit:function(){var e,t=this;if(null===(e=event)||void 0===e||e.preventDefault(),!(this.folderName.trim().length<1||this.loading)){this.loading=!0,this.errorMessage="";var r={name:this.folderName};this.$axios.$post("/folders",r).then(function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$notify.success({title:"Folder",message:"Folder created successfully"}),e.next=3,t.moveCompanyFiles(r.id);case 3:t.$emit("resetUserFile"),t.$nuxt.refresh(),t.$emit("updateVisibility",!1),t.$emit("refresh"),t.folderName="";case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$notify.error({title:"Folder",message:"Unable to created Folder"})})).finally((function(){t.loading=!1}))}}}}),d=c,f=(r(849),r(1)),component=Object(f.a)(d,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:e.showModal,"append-to-body":!0,"show-close":!1,center:""},on:{"update:visible":function(t){e.showModal=t}},scopedSlots:e._u([{key:"title",fn:function(){return[t("h4",{staticClass:"text-center font-semibold text-xl"},[e._v("Create Folder")])]},proxy:!0}])},[t("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}},[t("span",{staticClass:"circle circle-12 bg-white cursor-pointer text-red-600",on:{click:function(t){return e.closeModal()}}},[t("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 3.19188L7.02451 0.167368C7.24767 -0.0557892 7.60948 -0.0557892 7.83263 0.167368C8.05579 0.390524 8.05579 0.752333 7.83263 0.975489L4.80812 4L7.83263 7.02451C8.05579 7.24767 8.05579 7.60948 7.83263 7.83263C7.60948 8.05579 7.24767 8.05579 7.02451 7.83263L4 4.80812L0.975489 7.83263C0.752333 8.05579 0.390524 8.05579 0.167368 7.83263C-0.0557892 7.60948 -0.0557892 7.24767 0.167368 7.02451L3.19188 4L0.167368 0.975489C-0.0557892 0.752333 -0.0557892 0.390524 0.167368 0.167368C0.390524 -0.0557892 0.752333 -0.0557892 0.975489 0.167368L4 3.19188Z",fill:"#414042"}})])])]),e._v(" "),e._v(" "),t("p",{staticClass:"text-center block font-medium mx-auto mb-6 whitespace-none"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.folderName,expression:"folderName"}],staticClass:"w-full py-2 px-4 border-[1px] border-paperdazgrey-200 rounded-md",attrs:{placeholder:"Enter Folder Name"},domProps:{value:e.folderName},on:{input:function(t){t.target.composing||(e.folderName=t.target.value)}}})]),e._v(" "),t("div",{staticClass:"flex justify-around"},[t("button",{staticClass:"disabled:bg-opacity-50 disabled:cursor-progress h-10 text-xs w-[90%] shadow-md text-white rounded-[1rem] shadow bg-paperdazgreen-300",attrs:{disabled:e.loading},on:{click:e.onSubmit}},[t("span",{staticClass:"inline-flex gap-1 items-center text-[16px]"},[e._v("\n       Create\n        "),t("spinner-dotted-icon",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"animate-spin",attrs:{height:"20",width:"20"}})],1)])])])}),[],!1,null,"11a65b66",null);t.default=component.exports},937:function(e,t,r){"use strict";r.r(t);var o=r(0),n=r(75),l=o.default.extend({name:"create-team",components:{SpinnerDottedIcon:n.default},model:{prop:"visible",event:"updateVisibility"},props:{visible:{type:Boolean,default:!1}},data:function(){return{showModal:!1,errorMessage:"",loading:!1}},watch:{visible:function(e){this.showModal=e},showModal:function(e){this.$emit("updateVisibility",e)}},mounted:function(){this.showModal=this.visible},methods:{closeModal:function(){this.$emit("updateVisibility",!1)}}}),c=(r(851),r(1)),component=Object(c.a)(l,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("el-dialog",{staticClass:"relative text-[#414042]",attrs:{visible:e.showModal,"append-to-body":!0,"show-close":!1,center:""},on:{"update:visible":function(t){e.showModal=t}},scopedSlots:e._u([{key:"title",fn:function(){return[t("h4",{staticClass:"text-left font-semibold text-xl"},[e._v("Create a Team")])]},proxy:!0}])},[t("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}},[t("span",{staticClass:"circle circle-12 bg-white cursor-pointer text-red-600",on:{click:function(t){return e.closeModal()}}},[t("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 3.19188L7.02451 0.167368C7.24767 -0.0557892 7.60948 -0.0557892 7.83263 0.167368C8.05579 0.390524 8.05579 0.752333 7.83263 0.975489L4.80812 4L7.83263 7.02451C8.05579 7.24767 8.05579 7.60948 7.83263 7.83263C7.60948 8.05579 7.24767 8.05579 7.02451 7.83263L4 4.80812L0.975489 7.83263C0.752333 8.05579 0.390524 8.05579 0.167368 7.83263C-0.0557892 7.60948 -0.0557892 7.24767 0.167368 7.02451L3.19188 4L0.167368 0.975489C-0.0557892 0.752333 -0.0557892 0.390524 0.167368 0.167368C0.390524 -0.0557892 0.752333 -0.0557892 0.975489 0.167368L4 3.19188Z",fill:"#414042"}})])])]),e._v(" "),e._v(" "),t("p",{staticClass:"text-center block font-medium mx-auto mb-6 whitespace-none"},[t("input",{staticClass:"search-input w-[35%] h-10 transition pl-4 border-r-0 bg-transparent flex-1 border-[1px] border-paperdazgreen-300 rounded-tl-[1rem] rounded-bl-[1rem] focus:border-r-0 outline-none",attrs:{type:"text",placeholder:"Email"}}),e._v(" "),t("select",{staticClass:"w-[35%] h-10 border-[1px] border-paperdazgreen-300 border-l-0 bg-transparent text-[#878686] text-[12px] -ml-1 mr-2 outline-none text-right"},[t("option",{staticClass:"rounded w-[50px]"},[e._v(" Manage Company Files")]),e._v(" "),t("option",{staticClass:"rounded w-[50px]"},[e._v(" Own Files")]),e._v(" "),t("option",{staticClass:"rounded w-[50px]"},[e._v(" Remove Files")])]),e._v(" "),t("button",{staticClass:"disabled:bg-opacity-50 disabled:cursor-progress h-10 text-xs w-[20%] shadow-md text-white rounded-[2rem] shadow bg-paperdazgreen-400",attrs:{disabled:e.loading}},[t("span",{staticClass:"inline-flex gap-1 items-center text-[16px]"},[e._v("\n        Invite\n        "),t("spinner-dotted-icon",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"animate-spin",attrs:{height:"20",width:"20"}})],1)])]),e._v(" "),t("p",{staticClass:"text-[18px] font-semibold mb-4"},[e._v("Copy link")]),e._v(" "),t("ul",[t("li",{staticClass:"flex mb-2"},[t("span",{staticClass:"p-0.5 border-[1px] border-paperdazgreen-400 circle circle-17"},[t("img",{staticClass:"w-full h-full rounded-full",attrs:{src:"/img/placeholder_picture.png",alt:""}})]),e._v(" "),t("div",{staticClass:"overflow-hidden"},[t("p",{staticClass:"text-base font-medium text-[#414142] truncate pt-[6px]"},[t("nuxt-link",{staticClass:"ml-2",attrs:{to:"pdf"}},[e._v("\n            Abdallah hamouda\n          ")])],1)]),e._v(" "),t("select",{staticClass:"float-right h-10 text-[#878686] text-[12px] mr-2 outline-none text-right"},[t("option",{staticClass:"rounded w-[50px]"},[e._v(" Manage Company Files")]),e._v(" "),t("option",{staticClass:"rounded w-[50px]"},[e._v(" Own Files")]),e._v(" "),t("option",{staticClass:"rounded w-[50px]"},[e._v(" Remove Files")])])]),e._v(" "),t("li",{staticClass:"flex mb-2"},[t("span",{staticClass:"p-0.5 border border-paperdazgreen-400 circle circle-17"},[t("img",{staticClass:"w-full h-full rounded-full",attrs:{src:"/img/placeholder_picture.png",alt:""}})]),e._v(" "),t("div",{staticClass:"overflow-hidden"},[t("p",{staticClass:"text-base font-medium text-[#414142] truncate pt-[6px]"},[t("nuxt-link",{staticClass:"ml-2",attrs:{to:"pdf"}},[e._v("\n            Abdallah hamouda\n          ")])],1)]),e._v(" "),t("select",{staticClass:"float-right h-10 text-[#878686] text-[12px] mr-2 outline-none text-right"},[t("option",{staticClass:"rounded w-[50px]"},[e._v(" Manage Company Files")]),e._v(" "),t("option",{staticClass:"rounded w-[50px]"},[e._v(" Own Files")]),e._v(" "),t("option",{staticClass:"rounded w-[50px]"},[e._v(" Remove Files")])])])]),e._v(" "),t("div",{staticClass:"flex justify-around"})])}),[],!1,null,"44bf5bc4",null);t.default=component.exports},943:function(e,t,r){e.exports=r.p+"img/company-icon.68a8ae8.png"},944:function(e,t,r){e.exports=r.p+"img/users-icon.2f18b2b.png"}}]);