(function(e){function n(n){for(var r,a,u=n[0],i=n[1],s=n[2],l=0,f=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(n);while(f.length)f.shift()();return c.push.apply(c,s||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,a=1;a<t.length;a++){var u=t[a];0!==o[u]&&(r=!1)}r&&(c.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={index:0},o={index:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-16227b11":"fb2e74cd","chunk-1635091e":"ee184f10","chunk-28beade1":"6529ba9b","chunk-76a294f8":"1087edaf","chunk-ac24f9f0":"b422f1f4","chunk-f4dffb26":"1406199e"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-16227b11":1,"chunk-1635091e":1,"chunk-76a294f8":1,"chunk-ac24f9f0":1,"chunk-f4dffb26":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-16227b11":"28681f55","chunk-1635091e":"55adbe08","chunk-28beade1":"31d6cfe0","chunk-76a294f8":"6517e5f0","chunk-ac24f9f0":"e40ac87f","chunk-f4dffb26":"dc7e328b"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return n()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===o)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var r=n&&n.target&&n.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],d.parentNode.removeChild(d),t(c)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var f=new Error;s=function(n){l.onerror=l.onload=null,clearTimeout(d);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,t[1](f)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var f=0;f<s.length;f++)n(s[f]);var d=l;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";t("85ec")},"2ec5":function(e,n,t){"use strict";t("3577")},3577:function(e,n,t){},"40cd":function(e,n,t){"use strict";t.r(n),t.d(n,"formatVideoDuration",(function(){return r}));t("99af");var r=function(e){var n=!1,t="";e<0&&(e=Math.abs(e),n=!0);var r=e/60;return r<1?(t+="".concat(n?"-":"").concat(e,"″"),t):(t+="".concat(n?"-":"").concat(Math.floor(r)%60,"′").concat(e%60,"″"),t)}},4674:function(e,n,t){var r={"./number.js":"cd36","./other.js":"fb04"};function a(e){var n=o(e);return t(n)}function o(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="4674"},"56d7":function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"HOST_URL",(function(){return Je})),t.d(r,"ROUTER_CONFIG",(function(){return We}));var a={};t.r(a),t.d(a,"CARD_BACKGROUND_COLORS",(function(){return _e}));t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("e3d9");var o=t("2b0e"),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},u=[],i={name:"App",components:{}},s=i,l=(t("034f"),t("2877")),f=Object(l["a"])(s,c,u,!1,null,null,null),d=f.exports,p=t("8c4f"),h=(t("d3b7"),t("3ca3"),t("ddb0"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"wrapper"},[t("sideBar"),t("div",{attrs:{id:"content"}},[t("router-view")],1)],1)}),m=[],b=(t("cb29"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("el-card",{staticClass:"nav-side-bar"},[t("a",{staticClass:"logo",on:{click:e.toHome}},[t("img",{attrs:{src:e.logo,alt:"logo"}}),e._v(" web实验室")]),t("ul",{ref:"menus",staticClass:"side-menu"},e._l(e.navMenus,(function(n,r){return t("item",{key:r,class:{active:e.curIndex===r},attrs:{item:n,"is-fold":e.isFold,"is-current":e.curIndex===r,"router-names":e.routerNames},on:{"on-select":function(n){return e.handleSelect(r)}}})})),1)])}),v=[],g=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("li",{class:{isOpen:e.isOpen}},[t("div",{staticClass:"side-bar-div",on:{click:function(n){return e.handleMenuClick(e.item)}}},[t("icon",{staticClass:"m-icon",attrs:{type:e.item.icon}}),e.item.path||e.item.children.length?t("span",{staticClass:"menu-title"},[e._v(e._s(e.item.text))]):t("el-tooltip",{attrs:{content:"即将推出,敬请期待!",placement:"right"}},[t("span",{staticClass:"menu-title"},[e._v(e._s(e.item.text))])]),e.item.children.length?t("icon",{staticClass:"m-icon right",attrs:{type:"down"}}):e._e()],1),t("el-collapse-transition",[t("ul",{directives:[{name:"show",rawName:"v-show",value:e.isCurrent&&e.isOpen,expression:"isCurrent && isOpen"}],ref:"subMenu",staticClass:"subMenu"},e._l(e.item.children,(function(n,r){return t("li",{key:r,class:{active:n.name===e.routerNames.join("-")},on:{click:function(t){return e.subMenuClick(n)}}},[n.path?[e._v(e._s(n.text))]:t("el-tooltip",{attrs:{content:"即将推出,敬请期待!",placement:"right"}},[t("el-button",{attrs:{type:"text"}},[e._v(e._s(n.text))])],1)],2)})),0)])],1)},A=[],k={name:"layout.sideBar.item",components:{},props:{item:{type:Object,required:!0},isFold:{type:Boolean,required:!0},isCurrent:{type:Boolean},routerNames:{type:Array,default:function(){return[]}}},data:function(){return{isOpen:!1,subMenuHeight:48}},computed:{},watch:{isCurrent:function(e,n){this.isOpen=!(!e||e===n)}},created:function(){this.isOpen=this.isCurrent},methods:{subMenuClick:function(e){e.path?(this.$emit("on-select"),e.path&&this.$router.push(e.path)):this.$message.success("即将推出，敬请期待")},handleMenuClick:function(e){e.path||e.children.length?(this.$emit("on-select"),this.isOpen=!this.isOpen,e.path&&this.$router.push(e.path)):this.$message.success("即将推出，敬请期待")}}},O=k,C=(t("7dad"),Object(l["a"])(O,g,A,!1,null,"45b01842",null)),y=C.exports,x=[{icon:"group",text:"查询文档",path:"/document",name:"document",children:[]}],j=t("cf05"),E=t.n(j),w={name:"layout.sideBar",components:{item:y},props:{isFold:{type:Boolean,default:!1}},data:function(){return{navMenus:x,curIndex:0,routerNames:[],logo:E.a}},created:function(){},methods:{handleSelect:function(e){this.curIndex=e},toHome:function(){this.$router.push("/")}}},P=w,B=(t("a181"),Object(l["a"])(P,b,v,!1,null,null,null)),D=B.exports,M={components:{sideBar:D},data:function(){var e={date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"};return{tableData:Array(20).fill(e)}}},R=M,S=(t("2ec5"),Object(l["a"])(R,h,m,!1,null,"0b006d00",null)),N=S.exports;o["default"].use(p["a"]);var U=new p["a"]({mode:"hash",base:"/",routes:[{path:"/",name:"index",component:function(){return t.e("chunk-f4dffb26").then(t.bind(null,"1e4b"))}},{path:"/document",redirect:"/document/menu",name:"document",component:N,children:[{path:"menu",name:"document-menu",meta:{title:"文档菜单",navName:"document-menu"},component:function(){return t.e("chunk-1635091e").then(t.bind(null,"c667"))}},{path:"read",name:"document-read",meta:{title:"文档阅览",navName:"document-read"},component:function(){return t.e("chunk-76a294f8").then(t.bind(null,"db6b"))}}]},{path:"/sleep",name:"sleep",component:function(){return t.e("chunk-ac24f9f0").then(t.bind(null,"98b0"))}},{path:"/snake",name:"snake",component:function(){return t.e("chunk-16227b11").then(t.bind(null,"99ce"))}},{path:"/goddess",name:"goddess",component:function(){return t.e("chunk-28beade1").then(t.bind(null,"fe5e"))}}]}),q=U,L=t("896a"),T=t.n(L),I=t("9883"),Z=t.n(I),F=(t("159b"),t("b64b"),t("ad41")),H=t.n(F),Q=t("845f"),G=t.n(Q),z=t("ecdf"),K=t.n(z),X=t("101e"),J=t.n(X),W=t("eedf"),_=t.n(W),V=t("e772"),Y=t.n(V),$=t("4e4b"),ee=t.n($),ne=t("72aa"),te=t.n(ne),re=t("dd87"),ae=t.n(re),oe=t("f3ad"),ce=t.n(oe),ue=t("6ac9"),ie=t.n(ue),se=t("0f6c"),le=t.n(se),fe=t("a4c4"),de=t.n(fe),pe=t("c2cc"),he=t.n(pe),me=t("df33"),be=t.n(me),ve=t("299c"),ge=t.n(ve),Ae=t("b35b"),ke=t.n(Ae),Oe=t("4105"),Ce=t.n(Oe),ye=t("3787"),xe=t.n(ye),je=t("946e"),Ee=t.n(je),we=t("c263"),Pe=t.n(we),Be=t("7bc3"),De=t.n(Be),Me=t("e450"),Re=t.n(Me),Se=t("8bbc"),Ne=t.n(Se),Ue=t("e04d"),qe=t.n(Ue),Le=t("c284"),Te=t.n(Le),Ie=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("i",{class:e.iconClassName})},Ze=[],Fe={props:{type:String},computed:{iconClassName:function(){return"iconfont icon-".concat(this.type)}}},He=Fe,Qe=(t("7364"),Object(l["a"])(He,Ie,Ze,!1,null,null,null)),Ge=Qe.exports,ze={elTable:H.a,elTooltip:ge.a,elTableColumn:K.a,elPagination:J.a,elButton:_.a,elButtonGroup:G.a,elOption:Y.a,elSelect:ee.a,elTabs:te.a,elTabPane:ae.a,elInput:ce.a,elPopover:ie.a,elRow:le.a,elCol:he.a,elCard:de.a,elDialog:be.a,elSwitch:ke.a,elForm:Ce.a,elFormItem:xe.a,elTimePicker:Ee.a,elDatePicker:Pe.a,elAlert:qe.a,elTag:Ne.a,elDivider:De.a,elInputNumber:Re.a,elProgress:Te.a,icon:Ge};function Ke(e){Object.keys(ze).forEach((function(n){e.component(n,ze[n])}))}var Xe=t("5530"),Je=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_ORIGIN_API,We={index:"/document/menu",types:{register:"100",1:1,2:2,3:3}},_e=["#fba510","#f9bd55","#fbd89b","#825855","#45545f","#cec6b6","#223c5f","#a61840","#e3927f","#417ca9","#7379b0","#cfd468","#995d7f","#814662","#9c8d9b","#509296","#6ca8af","#576470","#c35c6a","#cc73a0","#e67762","#d24735","#99806c","#6f94cd"],Ve=Object(Xe["a"])(Object(Xe["a"])({},r),a);function Ye(e){e.use(T.a),e.use(Z.a),e.use(Ke),e.prototype.$bus=new e,e.prototype.$C=Ve}t("4de4");var $e={},en=t("c087");en.keys().forEach((function(e){var n=en(e).default||en(e);Object.keys(n).forEach((function(e){$e[e]=n[e]}))}));var nn=function(e){Object.keys($e).forEach((function(n){e.filter(n,$e[n])}))},tn={install:function(e){Ye(e),nn(e)}},rn=t("5c96"),an=t.n(rn),on=(t("0fae"),t("2f2f"),t("a0d5"));o["default"].use(tn),o["default"].use(an.a),o["default"].use(p["a"]),o["default"].config.productionTip=!1,o["default"].prototype.$bus=new o["default"],o["default"].prototype.$help=on["a"],new o["default"]({router:q,render:function(e){return e(d)}}).$mount("#app")},"600e":function(e,n,t){},7364:function(e,n,t){"use strict";t("8b93")},"7dad":function(e,n,t){"use strict";t("600e")},"85ec":function(e,n,t){},"8b93":function(e,n,t){},a0d5:function(e,n,t){"use strict";var r=t("5530"),a=(t("159b"),t("d3b7"),t("ddb0"),{}),o=t("4674");o.keys().forEach((function(e){var n=o(e).default||o(e);Object.assign(a,n)})),n["a"]=Object(r["a"])({},a)},a181:function(e,n,t){"use strict";t("c204")},c087:function(e,n,t){var r={"./time.js":"40cd"};function a(e){var n=o(e);return t(n)}function o(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="c087"},c204:function(e,n,t){},cd36:function(e,n,t){"use strict";t.r(n),t.d(n,"getRandomInt",(function(){return r}));var r=function(e,n){return Math.floor(Math.random()*(n-e))+e}},cf05:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAACNlJREFUaEPtmXtQVNcdx7/n7i4P6wNQefkgROtjEHH3LmiQBHQcB2MqShzrqDW+oo2Z1qlOG03V2ohttG1ik/qOUaPGDolofBCNlpciLty7CwHjC5GIIqCoPJQF7u7pnAvLCOwbZjrpeP7Znb17fuf3Ob/zO7/vOZfgJ97IT9x/vAD4X0fwRQT+ryKgVqu1hJA3/P39xqmUioja2vr+AMjAoL4ICvSjgf36PB0bOaoi5rWoMyDmY8RbndHVCejyEuJ5fjKl9JeEkEkABg8eFPAsPGxIj5DBQQgZHAhibkLZjeu4U/ojyqqeQn/jIXx7e2F85AhMmPTa3diYiC2kx5hP3QVxG2DMmDE/5zhuFSFkmbe3V0ZiQqzHzOkTogcNDLDqC60th7ksD9U1RmQVVCCr4D4uFVUicUoUEhKnnAwbGbKCeEfcdhXELQCe51cCWA3ghiZiWMru7WsW0cprYea7IkxXvgGtugZFWAKU8Rtlf6Qza2G6cgKk/zCQn/UHCY4A6R2E88I9JKeX4MeqZ5j95sSHSxbNSCA91JdcgXAZgOf5swAmE0LW5mUfOEbL809IWVuH0Md3oVAvQ41XCJTfLoSnElDN2iv70py8uJNPxC8U3NAJYJ/7Uq9j5zdXERkR2rxj+/rpxGt0qrMQLgHwPE9bDc8VhD3npBMf/GAqPN5P+fouKNRL5UfP7uRBcTBK/q545R1wg7RWASwOci9FgxsxBWdz72L9XkH+Wbi4L5Z4j85yBsJpAJ7nUwDMEEVR7iPpP0yVUldPYd/r5hWhl7EEXP4umItPt43rDIAMGrVIjgRrY5cdR2R4SPXO/Sn9ug2A5/m/sjVvNpujDQZDDjUWLKeV17c1HZxldwynAdRzQAJGyrYKSx5hyeYsxEWG5vxj59fRjiAcRkCj0bxBCDlJCFkpCMLHz3YMH+8Z/6evuMBRQZbktDWIMwBkgBqK8ETQ2vuA1Aji9xKOnC/G1q+KEDE8cMnnX55uSSQbzSGAVqs9QSn1E0UxxrgJW0GxQg47Pw/KuD+07TDW7DsCYEnMDZ0I8z0DzIVshQLcADW48ESs/FcOqutMpYePnm1ZW+4AWGafFarsGfoqQpD+vB3LVmkrEvYAFGHToJz4PpoztrQ5b7HNcqLoSR8s+/sFDB86cOHBL4/vdwuA5/kDhBB/QRCmGDciAwSxHQ3Zg7AFIDsfnyTXDOnMuk6+sYRmEHtOXcPFwqrCw0fPjXYX4B6AT3MSxTNmCoPNtd5atDpGwhqAI+fbohC9HIYKFd79OJtKkinAYDA8sDa+zRzQarXjKaUXzWZzWM5Mw1LL2ncFoiOAs87LuRDyCriRr2Pa6rNS5eOGFaIobncJQKPRbCCEzBRFcZQxCaUAQhxtaR2XkyphK+DZSy5krjjPxiHevlDErsTfjhTgeFZpti5PiHEJgOf5Q5RSs16vn29MgqUCO2KAQjMXygnvycKNGxQp/9/y3daat2WUaakj529h98mrJReydUNcBbjM9n9BEDbZSmBbA3v8KhnEf0S7x0zgOSp8z3dg9UARtRjfXi7DliMFTy5k63xdBagmhCwVBOEo3QAfaVT8r+Ebyiqy3Ub6BMtK1FqTlWpNeftH1Az68Ea730ivoBZpofKSJffvt+skXW6eylWAR5TSJXq9Xq4wUsq0t0n49N0OATx6dpp9Sx8WBdpU396ESYL5jq6TWRYB1nKKKrFqu645NzfPw1UAgRCSLAjCFmMSjgOwPq1WrDIZbVn/bc7XlqNpT7wj/rbnTBsp1HNwRleGvxwqeHQpR9fXVYBkADWiKL7tUhK3Fik01sk7EGvsNEZ6B9uVHdacY0mcnFaCT45euXlZlzvMVYAPmboVRXGC89to+wrLtlHmOEteZ7RTOweVXlBO+iP2nCpu+uxkUa4oiq+6BKDVauMopUz7BGcniu85LmSd5UHnQtZyzHSkYpmjFpU6a0N6fWn5k3V6vX6rSwDszzzPVxFC1l1IEK53FHLPG7NVpKxLCecg2Pq/0RSM+UnpkCRpYEFBAZM1nZPdXlbxPL8PgL8oilNtiznbwsy2mGuBaE5ZDvPti51d8PaBMnYVPjtdjNS8+5knTn0XZ8tPu+cBnuenAzhGKf1F9gx9fWc5bV9V2pPT3PDJ4EJfhakwBfRee53IZv+WNACLN2eZjI0SkzNsF7TaHB5oeJ5PJ4TUCYIwrTEJ+ynwFrPkjLZxeKBpPbw8D2GpwB8cKIDu2sMrZ89ljLK3ShwCaDSaBYSQfUzYsarcsAkLVJPWL1OMnjnOkbZxBMAcs6hO+ug2aMMT+USWpi/Hml25oJQu1Ov1Ng8zcrI7U1k0Gk0qISTGZDLx+fn5N6kxf5j5/g+ZzYfnBNrr7wyAHM3o5fJFF2t3qurx1qZMeHh6XvpPWuZ4R/45BdC6I90EoBJFUa7xzenvbjRlb1vbHQDsDMxmnrWE98+hQSLVaWmZ3XetYnGy9WIr18PDIy4nJ6ehcdvg2/TxnRbRYqU5EwF5zavnopGq8M5Hl3DldjUsd0+OZt/pJfS8odYLrihK6Xy9Xp8mZfz2iOn7r2czudCxqd7cAVpXAem7P3f2xdtHvpFgMy9ce4ANB/LRP6D/rYOHjg51xnHLf5xeQh0g5Isudl6mlH4iXtg3z1R8fhUtyexpKk4DGutBfEOgjFoMSghM2dtkECi95Asszn+k/Mmu25PTb8l6JzZmzMWP/rnXqlzo0i5kq7NGo5lFCFkFYGgvlbRn6rjgit8tmTqWUGk2ZULOTvv+1iPkXq1CcnopfHx6PQ4K9N+8bdcXm12Z+S5FwNI5Li5O2dxQs6bZRBaYKHnZQ0ErRgRw18Nf7tt7UHDf4IAAvwAW4pqnTah92oyaZ01IM1Si5O5j+Pr0fBIU2O/fZfeqf5ORkSG547xbOWBrIJ7nx7K3NJRS9qamL0fQjwJ+HCGcp6fK6OmhemoGHlBKM+rqGlIEQejy66VuBXB3Brvaz60k7uqg3dn/BUB3zqY7tl5EwJ1Z684+/wX+SAxtJ2hkgQAAAABJRU5ErkJggg=="},e3d9:function(e,n,t){},fb04:function(e,n,t){"use strict";t.r(n),t.d(n,"getQueryObject",(function(){return r})),t.d(n,"isMobile",(function(){return a}));t("ac1f"),t("5319");var r=function(e){e=null==e?window.location.href:e;var n=e.substring(e.lastIndexOf("?")+1),t={},r=/([^?&=]+)=([^?&=]*)/g;return n.replace(r,(function(e,n,r){var a=decodeURIComponent(n),o=decodeURIComponent(r);return o=String(o),t[a]=o,e})),t},a=function(){return!!/Mobi|Android|iPhone/i.test(navigator.userAgent)}}});