(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{404:function(t,e,o){var content=o(457);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(10).default)("6b61c7da",content,!0,{sourceMap:!1})},456:function(t,e,o){"use strict";o(404)},457:function(t,e,o){(e=o(9)(!1)).push([t.i,'#app{font-family:"Avenir",Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50;margin-top:60px}',""]),t.exports=e},473:function(t,e,o){"use strict";o.r(e);o(41);var n={name:"App",components:{StreamBarcodeReader:o(409).a},data:function(){return{text:"",id:null}},props:{msg:String},methods:{onDecode:function(a,b,t){var e=this;console.log(a,b,t),this.text=a,this.id&&clearTimeout(this.id),this.id=setTimeout((function(){e.text===a&&(e.text="")}),5e3);this.$router.push({path:"/"})},onLoaded:function(){console.log("load")}}},r=(o(456),o(69)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("h1",[t._v("바코드 테스트 중....")]),t._v(" "),o("div",{staticClass:"hello"},[o("StreamBarcodeReader",{on:{decode:function(a,b,e){return t.onDecode(a,b,e)},loaded:function(){return t.onLoaded()}}}),t._v("\n  Input Value: "+t._s(t.text||"Nothing")+"\n")],1)])}),[],!1,null,null,null);e.default=component.exports}}]);