(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{LetB:function(t,s,c){"use strict";var n=c("VMkR");c.n(n).a},PE4R:function(t,s,c){"use strict";c.r(s);var n={methods:{payment:function(){this.$router.push("/payment")}},data:function(){return{counter:0,product:{name:"",description:{markdown:""},images:[{url:""}]}}},created:function(){this.product=this.$page.gcms.product,console.log("Product here",this.product)}},e=(c("LetB"),c("KHd+")),o=null,a=Object(e.a)(n,(function(){var t=this,s=t.$createElement,c=t._self._c||s;return c("Layout",[this.$page.gcms.product?c("div",{staticClass:"product_layout"},[c("div",[c("g-image",{staticClass:"img",attrs:{src:t.product.images[0].url,alt:"new image"}})],1),c("div",{staticClass:"details"},[c("h1",[t._v(t._s(t.product.name))]),c("p",[t._v(t._s(t.product.description.markdown))]),c("p",[t._v("ราคา "+t._s(t.product.price)+" THB")]),c("div",{staticClass:"purschase"},[c("button",{staticClass:"fill2",on:{click:function(s){t.counter+=1}}},[t._v("Add 1")]),c("p",[t._v("คำสั่งซื้อของ "+t._s(t.product.name)+" จำนวน "+t._s(t.counter)+" คำสั่งซื้อ")]),c("p",[t._v("ราคาทั้งหมด: "+t._s(t.counter*t.product.price)+" บาท")]),c("br")])])]):t._e(),c("div",{staticClass:"button_position"},[c("g-link",{staticClass:"fill",attrs:{to:"/Payment/",type:"button"}},[t._v("Purchase")])],1)])}),[],!1,null,"3984a795",null);"function"==typeof o&&o(a);s.default=a.exports},VMkR:function(t,s,c){}}]);