(function(e){function t(t){for(var o,r,s=t[0],i=t[1],u=t[2],c=0,d=[];c<s.length;c++)r=s[c],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&d.push(l[r][0]),l[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var s=n[r];0!==l[s]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},l={app:0},a=[];function s(e){return i.p+"js/"+({layout:"layout"}[e]||e)+"."+{layout:"970ec273"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={layout:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({layout:"layout"}[e]||e)+"."+{layout:"de76774f"}[e]+".css",l=i.p+o,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var u=a[s],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===o||c===l))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],c=u.getAttribute("data-href");if(c===o||c===l)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||l,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[e],f.parentNode.removeChild(f),n(a)},f.href=l;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var o=l[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,n){o=l[e]=[t,n]}));t.push(o[2]=a);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(e);var d=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(f);var n=l[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}l[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},l=[],a=n("2877"),s={},i=Object(a["a"])(s,r,l,!1,null,null,null),u=i.exports,c=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"list_mode"},[n("div",{staticClass:"input_area"},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{xs:4,md:5}},[!e.jobname&&e.unfilledName?n("error",[e._v("名稱不能空白")]):n("p")],1),n("el-col",{attrs:{xs:20,md:10}},[!e.choosetimerange[0]&&e.unfilledDate?n("error",[e._v("日期不能為空白")]):n("p")],1)],1),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{xs:4,md:5}},[n("el-input",{staticStyle:{width:"280px"},attrs:{size:"large",placeholder:"請輸入任務名稱","suffix-icon":"el-icon-s-order"},model:{value:e.jobname,callback:function(t){e.jobname=t},expression:"jobname"}})],1),n("el-col",{attrs:{xs:20,md:10}},[n("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"daterange","start-placeholder":"選擇開始日期","end-placeholder":"選擇結束日期"},model:{value:e.choosetimerange,callback:function(t){e.choosetimerange=t},expression:"choosetimerange"}}),n("el-button",{staticStyle:{"margin-left":"20px"},attrs:{icon:"el-icon-plus"},on:{click:e.newJob}})],1)],1)],1),n("div",{staticClass:"display_jobs_area"},[e._m(0),n("el-table",{attrs:{data:e.todoJobs,"empty-text":"還沒有任何代辦任務喔～"}},[n("el-table-column",{attrs:{prop:"title",label:"任務項目",width:"180"}}),n("el-table-column",{attrs:{prop:"start",label:"開始日期",width:"180"}}),n("el-table-column",{attrs:{prop:"end",label:"結束日期"}}),n("el-table-column",{scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{icon:"el-icon-finished"},on:{click:function(n){return e.finishJob(t.$index)}}})]}}])})],1)],1),n("div",{staticClass:"display_done_area"},[e._m(1),n("el-table",{attrs:{data:e.doneJobs,"empty-text":" ","cell-style":{"font-style":"oblique"}}},[n("el-table-column",{attrs:{prop:"title",label:"任務項目",width:"180"}}),n("el-table-column",{attrs:{prop:"start",label:"開始日期",width:"180"}}),n("el-table-column",{attrs:{prop:"end",label:"結束日期"}}),n("el-table-column",{scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:function(n){return e.recoverJob(t.$index)}}}),n("el-button",{attrs:{icon:"el-icon-delete"},on:{click:function(n){return e.deleteJob(t.$index)}}})]}}])})],1)],1)])},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{width:"180px"}},[n("h2",[e._v("任務列表")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{width:"180px"}},[n("h2",[e._v("完成事項")])])}],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"err-text"},[e._t("default")],2)},m=[],h={},b=h,v=(n("6e21"),Object(a["a"])(b,p,m,!1,null,null,null)),y=v.exports,g={data:function(){return{jobname:"",choosetimerange:[],todoJobs:this.$store.state.todoJobs,doneJobs:this.$store.state.doneJobs,unfilledName:!1,unfilledDate:!1}},methods:{newJob:function(){var e=this;if(this.jobname||this.choosetimerange[0])if(this.choosetimerange[0])if(this.jobname){var t={title:this.jobname,start:this.choosetimerange[0],end:this.choosetimerange[1],cssClass:"family",YOUR_DATA:{}};console.log(t.start),this.$store.commit("pushTodoJobs",t),setTimeout((function(){e.jobname="",e.choosetimerange=[],e.unfilledName=!1,e.unfilledDate=!1}),0)}else this.unfilledDate=!1,this.unfilledName=!0;else this.unfilledDate=!0,this.unfilledName=!1;else this.unfilledName=!0,this.unfilledDate=!0},finishJob:function(e){this.$store.commit("finishJob",e)},recoverJob:function(e){this.$store.commit("recoverJob",e)},deleteJob:function(e){this.$store.commit("deleteJob",e)},cellStyle:function(){return"font-style:oblique"}},computed:{getTableData:function(){return this.$store.state.todoJobs,this.$store.state.doneJobs}},components:{error:y}},_=g,J=(n("f9b8"),Object(a["a"])(_,d,f,!1,null,null,null)),w=J.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("full-calendar",{attrs:{events:e.Events,locale:"en"}})},j=[],$={data:function(){return{Events:this.$store.state.todoJobs}},components:{"full-calendar":n("f993")},computed:{getTableData:function(){return this.$store.state.todoJobs}}},k=$,E=Object(a["a"])(k,x,j,!1,null,null,null),O=E.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-calendar",{model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},T=[],C={data:function(){return{value:new Date}}},D=C,N=Object(a["a"])(D,S,T,!1,null,null,null),P=N.exports;o["default"].use(c["a"]);var A=[{path:"/",component:function(){return n.e("layout").then(n.bind(null,"b5f3"))},children:[{path:"/",redirect:"/todolist-item"},{path:"/todolist-item",component:w},{path:"/todolist-calendar",component:O},{path:"/testing-calendar",component:P}]}],M=new c["a"]({base:"",routes:A}),L=M,q=(n("a434"),n("2f62"));o["default"].use(q["a"]);var B=new q["a"].Store({state:{todoJobs:[],doneJobs:[]},mutations:{pushTodoJobs:function(e,t){e.todoJobs.push(t)},finishJob:function(e,t){var n=e.todoJobs[t];e.doneJobs.push(n),setTimeout((function(){e.todoJobs.splice(t,1)}),0)},recoverJob:function(e,t){var n=e.doneJobs[t];e.todoJobs.push(n),setTimeout((function(){e.doneJobs.splice(t,1)}))},deleteJob:function(e,t){e.doneJobs.splice(t,1)}},actions:{},modules:{}}),U=n("f993"),z=n.n(U),F=n("5c96"),H=n.n(F);n("0fae");o["default"].component("full-calendar",z.a),o["default"].use(H.a),new o["default"]({el:"#app",router:L,store:B,render:function(e){return e(u)}}).$mount("#app")},"6e21":function(e,t,n){"use strict";n("ba4c")},8320:function(e,t,n){},ba4c:function(e,t,n){},f9b8:function(e,t,n){"use strict";n("8320")}});
//# sourceMappingURL=app.ec444872.js.map