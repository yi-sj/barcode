(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{405:function(t,o,n){var content=n(462);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("6d1b090c",content,!0,{sourceMap:!1})},461:function(t,o,n){"use strict";n(405)},462:function(t,o,n){(o=n(9)(!1)).push([t.i,'#app{font-family:"Avenir",Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50;margin-top:60px}',""]),t.exports=o},474:function(t,o,n){"use strict";n.r(o);n(41);var e=n(460),c={name:"App",components:{PinchZoom:n.n(e).a},data:function(){return{text:"",id:null}},props:{msg:String},methods:{onDecode:function(a,b,t){var o=this;console.log(a,b,t),this.text=a,this.id&&clearTimeout(this.id),this.id=setTimeout((function(){o.text===a&&(o.text="")}),5e3);this.$router.push({path:"/"})},onLoaded:function(){console.log("load")}}},r=(n(461),n(69)),component=Object(r.a)(c,(function(){var t=this.$createElement,o=this._self._c||t;return o("div",{attrs:{id:"app"}},[o("h1",[this._v("pinch-zoom testing....")]),this._v(" "),o("div",{staticClass:"hello"},[o("pinch-zoom",[o("img",{attrs:{src:"https://images.unsplash.com/photo-1544606402-e522c304b027?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1564&q=80"}})])],1)])}),[],!1,null,null,null);o.default=component.exports}}]);