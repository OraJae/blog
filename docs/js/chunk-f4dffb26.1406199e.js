(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f4dffb26"],{"188a":function(t,e,s){"use strict";s("adb5")},"1e4b":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"i-container"},t._l(t.config,(function(e,o){return s("section",{key:o},[s("div",{staticClass:"subtitle"},[s("span",[t._v(t._s(e.subtitleA)+"  / ")]),t._v(" "+t._s(e.subtitleB)+" ")]),s("div",{staticClass:"describe"},[t._v(t._s(e.describe))]),s("div",{staticClass:"content-box"},t._l(e.list,(function(e,o){return s("div",{key:o,staticClass:"content-item",style:"backgroundColor:"+t.getColor(),on:{click:function(s){return t.routerTo(e.path)}}},[s("svg",{attrs:{width:"60",height:"60",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("g",{attrs:{"clip-path":"url(#icon-6c981cdb176e012c)"}},[s("path",{attrs:{d:"M35.7853 39.0837L38.6137 36.2553C40.9569 33.9121 40.9569 30.1131 38.6137 27.77V27.77C36.2706 25.4268 32.4716 25.4268 30.1285 27.77L27.667 30.2314",stroke:"#fff","stroke-width":"4","stroke-linecap":"round"}}),s("path",{attrs:{d:"M17.4008 23.5265L24.4719 16.4555C26.815 14.1123 26.815 10.3133 24.4719 7.97018V7.97018C22.1287 5.62703 18.3298 5.62703 15.9866 7.97018L8.91554 15.0412",stroke:"#fff","stroke-width":"4","stroke-linecap":"round"}}),s("path",{attrs:{d:"M18.2825 22.6461L9.62235 31.3063C7.2792 33.6494 7.2792 37.4484 9.62235 39.7915V39.7915C11.9655 42.1347 15.7645 42.1347 18.1076 39.7915L28.0071 29.892",stroke:"#fff","stroke-width":"4","stroke-linecap":"round"}}),s("path",{attrs:{d:"M14.9998 9H6.99976",stroke:"#fff","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}})]),s("defs",[s("clipPath",{attrs:{id:"icon-6c981cdb176e012c"}},[s("rect",{attrs:{width:"48",height:"48",fill:"#fff"}})])])]),s("h3",[t._v(t._s(e.letter))]),s("p",[t._v(t._s(e.text))])])})),0)])})),0)},i=[],n={name:"",mixins:[],components:{},data:function(){return{colors:this.$C.CARD_BACKGROUND_COLORS,config:[{subtitleA:"Study",subtitleB:"学习",describe:"快来充会儿电吧",list:[{icon:"el-icon-attract",letter:"Note",text:"笔记",path:"/document"}]},{subtitleA:"Relax",subtitleB:"休息",describe:"劳逸结合，放松一下",list:[{icon:"el-icon-attract",letter:"Snack",text:"贪吃蛇",path:"/snake"},{icon:"el-icon-attract",letter:"Sleep Music",text:"催眠曲",path:"/sleep"},{icon:"el-icon-attract",letter:"Goddess or Tomboy",text:"女神 || 女汉子",path:"/goddess"}]}]}},props:{},computed:{},watch:{},created:function(){console.log(this.$help.isMobile())},methods:{getColor:function(){return this.colors[this.$help.getRandomInt(0,this.colors.length)]},routerTo:function(t){this.$router.push(t)}}},r=n,c=(s("188a"),s("2877")),a=Object(c["a"])(r,o,i,!1,null,"679c1024",null);e["default"]=a.exports},adb5:function(t,e,s){}}]);