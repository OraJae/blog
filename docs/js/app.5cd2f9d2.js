(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],l=0,f=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==c[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},c={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-02269b1c":"dd7fd0bc","chunk-031feaf2":"57872cc1","chunk-2efec8c0":"64430ebd","chunk-ab1eba6c":"10e85281","chunk-ac24f9f0":"c9bf269e"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-02269b1c":1,"chunk-031feaf2":1,"chunk-2efec8c0":1,"chunk-ab1eba6c":1,"chunk-ac24f9f0":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-02269b1c":"d25c39aa","chunk-031feaf2":"8a34ad57","chunk-2efec8c0":"f2855ed6","chunk-ab1eba6c":"6226be5b","chunk-ac24f9f0":"0479cddd"}[e]+".css",c=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===c))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],d.parentNode.removeChild(d),n(o)},d.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}c[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"40cd":function(e,t,n){"use strict";n.r(t),n.d(t,"formatVideoDuration",(function(){return r}));n("99af");var r=function(e){var t=!1,n="";e<0&&(e=Math.abs(e),t=!0);var r=e/60;return r<1?(n+="".concat(t?"-":"").concat(e,"″"),n):(n+="".concat(t?"-":"").concat(Math.floor(r)%60,"′").concat(e%60,"″"),n)}},"56d7":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"HOST_URL",(function(){return m})),n.d(r,"ROUTER_CONFIG",(function(){return b}));var a={};n.r(a),n.d(a,"CARD_BACKGROUND_COLORS",(function(){return v}));n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("e3d9");var c=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},u=[],i={name:"App",components:{}},s=i,l=(n("034f"),n("2877")),f=Object(l["a"])(s,o,u,!1,null,null,null),d=f.exports,p=n("8c4f"),h=(n("159b"),n("d3b7"),n("ddb0"),n("99af"),n("3ca3"),n("5530")),m=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_ORIGIN_API,b={index:"/document/menu",types:{register:"100",1:1,2:2,3:3}},v=["#fba510","#f9bd55","#fbd89b","#825855","#45545f","#cec6b6","#223c5f","#a61840","#e3927f","#417ca9","#7379b0","#cfd468","#995d7f","#814662","#9c8d9b","#509296","#6ca8af","#576470","#c35c6a","#cc73a0","#e67762","#d24735","#99806c","#6f94cd"],A=Object(h["a"])(Object(h["a"])({},r),a),g=[],k=n("f7e9");k.keys().forEach((function(e){var t=k(e).default||k(e);g.push(t)})),c["default"].use(p["a"]);var O=new p["a"]({mode:"hash",base:"/",routes:[{path:"/",name:"index",component:function(){return n.e("chunk-031feaf2").then(n.bind(null,"1e4b"))}},{path:"/sleep",name:"sleep",component:function(){return n.e("chunk-ac24f9f0").then(n.bind(null,"98b0"))}}].concat(g)}),C=O,y=n("896a"),x=n.n(y),E=n("9883"),j=n.n(E),w=(n("b64b"),n("ad41")),P=n.n(w),B=n("845f"),D=n.n(B),S=n("ecdf"),R=n.n(S),M=n("101e"),N=n.n(M),U=n("eedf"),q=n.n(U),L=n("e772"),T=n.n(L),Z=n("4e4b"),F=n.n(Z),H=n("72aa"),Q=n.n(H),I=n("dd87"),G=n.n(I),z=n("f3ad"),K=n.n(z),X=n("6ac9"),J=n.n(X),W=n("0f6c"),_=n.n(W),V=n("a4c4"),Y=n.n(V),$=n("c2cc"),ee=n.n($),te=n("df33"),ne=n.n(te),re=n("299c"),ae=n.n(re),ce=n("b35b"),oe=n.n(ce),ue=n("4105"),ie=n.n(ue),se=n("3787"),le=n.n(se),fe=n("946e"),de=n.n(fe),pe=n("c263"),he=n.n(pe),me=n("7bc3"),be=n.n(me),ve=n("e450"),Ae=n.n(ve),ge=n("8bbc"),ke=n.n(ge),Oe=n("e04d"),Ce=n.n(Oe),ye=n("c284"),xe=n.n(ye),Ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i",{class:e.iconClassName})},je=[],we={props:{type:String},computed:{iconClassName:function(){return"iconfont icon-".concat(this.type)}}},Pe=we,Be=(n("7364"),Object(l["a"])(Pe,Ee,je,!1,null,null,null)),De=Be.exports,Se={elTable:P.a,elTooltip:ae.a,elTableColumn:R.a,elPagination:N.a,elButton:q.a,elButtonGroup:D.a,elOption:T.a,elSelect:F.a,elTabs:Q.a,elTabPane:G.a,elInput:K.a,elPopover:J.a,elRow:_.a,elCol:ee.a,elCard:Y.a,elDialog:ne.a,elSwitch:oe.a,elForm:ie.a,elFormItem:le.a,elTimePicker:de.a,elDatePicker:he.a,elAlert:Ce.a,elTag:ke.a,elDivider:be.a,elInputNumber:Ae.a,elProgress:xe.a,icon:De};function Re(e){Object.keys(Se).forEach((function(t){e.component(t,Se[t])}))}function Me(e){e.use(x.a),e.use(j.a),e.use(Re),e.prototype.$bus=new e,e.prototype.$C=A}n("4de4");var Ne={},Ue=n("c087");Ue.keys().forEach((function(e){var t=Ue(e).default||Ue(e);Object.keys(t).forEach((function(e){Ne[e]=t[e]}))}));var qe=function(e){Object.keys(Ne).forEach((function(t){e.filter(t,Ne[t])}))},Le={install:function(e){Me(e),qe(e)}},Te=n("5c96"),Ze=n.n(Te);n("0fae"),n("2f2f");c["default"].use(Le),c["default"].use(Ze.a),c["default"].use(p["a"]),c["default"].config.productionTip=!1,c["default"].prototype.$bus=new c["default"],new c["default"]({router:C,render:function(e){return e(d)}}).$mount("#app")},"600e":function(e,t,n){},"63fa":function(e,t,n){"use strict";n("a570")},6700:function(e,t,n){"use strict";n.r(t);n("d3b7"),n("3ca3"),n("ddb0");var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("sideBar"),n("div",{staticClass:"content",attrs:{id:"content"}},[n("div",{staticClass:"continer"},[n("router-view")],1)])],1)},a=[],c=(n("cb29"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav-side-bar"},[n("a",{staticClass:"logo",on:{click:e.toHome}},[n("img",{attrs:{src:e.logo,alt:"logo"}}),e._v(" web实验室")]),n("ul",{ref:"menus",staticClass:"side-menu"},e._l(e.navMenus,(function(t,r){return n("item",{key:r,class:{active:e.curIndex===r},attrs:{item:t,"is-fold":e.isFold,"is-current":e.curIndex===r,"router-names":e.routerNames},on:{"on-select":function(t){return e.handleSelect(r)}}})})),1)])}),o=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{class:{isOpen:e.isOpen}},[n("div",{staticClass:"side-bar-div",on:{click:function(t){return e.handleMenuClick(e.item)}}},[n("icon",{staticClass:"m-icon",attrs:{type:e.item.icon}}),e.item.path||e.item.children.length?n("span",{staticClass:"menu-title"},[e._v(e._s(e.item.text))]):n("el-tooltip",{attrs:{content:"即将推出,敬请期待!",placement:"right"}},[n("span",{staticClass:"menu-title"},[e._v(e._s(e.item.text))])]),e.item.children.length?n("icon",{staticClass:"m-icon right",attrs:{type:"down"}}):e._e()],1),n("el-collapse-transition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:e.isCurrent&&e.isOpen,expression:"isCurrent && isOpen"}],ref:"subMenu",staticClass:"subMenu"},e._l(e.item.children,(function(t,r){return n("li",{key:r,class:{active:t.name===e.routerNames.join("-")},on:{click:function(n){return e.subMenuClick(t)}}},[t.path?[e._v(e._s(t.text))]:n("el-tooltip",{attrs:{content:"即将推出,敬请期待!",placement:"right"}},[n("el-button",{attrs:{type:"text"}},[e._v(e._s(t.text))])],1)],2)})),0)])],1)},i=[],s={name:"layout.sideBar.item",components:{},props:{item:{type:Object,required:!0},isFold:{type:Boolean,required:!0},isCurrent:{type:Boolean},routerNames:{type:Array,default:function(){return[]}}},data:function(){return{isOpen:!1,subMenuHeight:48}},computed:{},watch:{isCurrent:function(e,t){this.isOpen=!(!e||e===t)}},created:function(){this.isOpen=this.isCurrent},methods:{subMenuClick:function(e){e.path?(this.$emit("on-select"),e.path&&this.$router.push(e.path)):this.$message.success("即将推出，敬请期待")},handleMenuClick:function(e){e.path||e.children.length?(this.$emit("on-select"),this.isOpen=!this.isOpen,e.path&&this.$router.push(e.path)):this.$message.success("即将推出，敬请期待")}}},l=s,f=(n("7dad"),n("2877")),d=Object(f["a"])(l,u,i,!1,null,"45b01842",null),p=d.exports,h=[{icon:"group",text:"查询文档",path:"/document",name:"document",children:[]}],m=n("cf05"),b=n.n(m),v={name:"layout.sideBar",components:{item:p},props:{isFold:{type:Boolean,default:!1}},data:function(){return{navMenus:h,curIndex:0,routerNames:[],logo:b.a}},created:function(){},methods:{handleSelect:function(e){this.curIndex=e},toHome:function(){this.$router.push("/")}}},A=v,g=(n("a181"),Object(f["a"])(A,c,o,!1,null,null,null)),k=g.exports,O={components:{sideBar:k},data:function(){var e={date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"};return{tableData:Array(20).fill(e)}}},C=O,y=(n("63fa"),Object(f["a"])(C,r,a,!1,null,"06a2b300",null)),x=y.exports;t["default"]={path:"/document",redirect:"/document/menu",name:"document",component:x,children:[{path:"menu",name:"document-menu",meta:{title:"文档菜单",navName:"document-menu"},component:function(){return n.e("chunk-02269b1c").then(n.bind(null,"c667"))}},{path:"read",name:"document-read",meta:{title:"文档阅览",navName:"document-read"},component:function(){return n.e("chunk-2efec8c0").then(n.bind(null,"db6b"))}}]}},7364:function(e,t,n){"use strict";n("8b93")},"7dad":function(e,t,n){"use strict";n("600e")},"85ec":function(e,t,n){},"8b93":function(e,t,n){},a181:function(e,t,n){"use strict";n("c204")},a570:function(e,t,n){},c087:function(e,t,n){var r={"./time.js":"40cd"};function a(e){var t=c(e);return n(t)}function c(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=c,e.exports=a,a.id="c087"},c204:function(e,t,n){},c373:function(e,t,n){"use strict";n.r(t);n("d3b7"),n("3ca3"),n("ddb0");t["default"]={path:"/snake",name:"snake",component:function(){return n.e("chunk-ab1eba6c").then(n.bind(null,"99ce"))}}},cf05:function(e,t){e.exports="data:image/png;base64,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"},e3d9:function(e,t,n){},f7e9:function(e,t,n){var r={"./document.js":"6700","./snack.js":"c373"};function a(e){var t=c(e);return n(t)}function c(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=c,e.exports=a,a.id="f7e9"}});