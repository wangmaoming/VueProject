(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39ce57e2"],{"18a3":function(s,t,o){"use strict";o.r(t);var a=function(){var s=this,t=s.$createElement,o=s._self._c||t;return o("div",{staticClass:"bg"},[o("header",{staticClass:"payHeader"},[o("van-row",{attrs:{type:"flex",justify:"space-between"}},[o("van-col",{attrs:{span:"3"},on:{click:s.back}},[o("van-icon",{attrs:{name:"arrow-left"}})],1),o("van-col",{attrs:{span:"12"}},[s._v("提交订单")]),o("van-col",{attrs:{span:"3"}})],1)],1),o("section",{staticClass:"deliveryAddress",on:{click:s.toAddress}},[o("div",{staticClass:"container"},[o("van-row",{attrs:{gutter:"10"}},[o("van-col",{attrs:{span:"7"}},[s._v("收货地址")]),o("van-col",{attrs:{span:"14"}},[o("p",{staticClass:"buyermsg"},[o("span",{staticClass:"name"},[s._v(s._s(s.list.name))]),o("span",{staticClass:"phoneNumber"},[s._v(s._s(s.list.tel))])]),o("p",{staticClass:"address"},[s._v(s._s(s.list.province)+" "+s._s(s.list.city)+" "+s._s(s.list.county)+" "+s._s(s.list.addressDetail))])]),o("van-col",{attrs:{span:"3"}},[o("van-icon",{attrs:{name:"arrow"}})],1)],1)],1)]),o("section",{staticClass:"goodsdisplay"},[o("div",{staticClass:"container"},[o("div",{staticClass:"goodsmsg"},[o("ol",s._l(s.goodsList,(function(t,a){return o("li",{key:a,staticClass:"list"},[o("ul",[o("li",{staticClass:"pic"},[o("img",{attrs:{src:t.src,alt:""}})]),o("li",{staticClass:"goodsProfile"},[o("p",{staticClass:"goodsName"},[s._v(s._s(t.goodsName))]),o("div",{staticClass:"goodsColorAndSize"},[s._v("颜色："+s._s(t.color)+"、 尺码："+s._s(t.size))]),o("div",{staticClass:"goodsPriceAndMount"},[o("span",{staticClass:"goodsPrice"},[s._v("￥"+s._s(t.singlePrice))])])])])])})),0)])])]),o("section",{staticClass:"myDiscount"},[o("div",{staticClass:"container"},[o("van-coupon-cell",{attrs:{coupons:s.coupons,"chosen-coupon":s.chosenCoupon},on:{click:function(t){s.showList=!0}}}),o("van-popup",{staticStyle:{height:"90%","padding-top":"4px"},attrs:{round:"",position:"bottom"},model:{value:s.showList,callback:function(t){s.showList=t},expression:"showList"}},[o("van-coupon-list",{attrs:{coupons:s.coupons,"chosen-coupon":s.chosenCoupon,"show-close-button":!1,"show-exchange-bar":!1},on:{change:s.onChange}})],1)],1)]),o("section",{staticClass:"deliveryWay"},[o("div",{staticClass:"container"},[o("van-row",{attrs:{gutter:"10"}},[o("van-col",{attrs:{span:"7"}},[s._v("配送方式")]),o("van-col",{attrs:{span:"4"}},[o("p",[s._v("快递")]),o("p",[s._v("运费")])]),o("van-col",{attrs:{span:"11"}},[o("p",[s._v("根据收货地区自动分配")]),o("p",[s._v("￥0")])])],1)],1)]),o("section",{directives:[{name:"show",rawName:"v-show",value:s.howPay,expression:"howPay"}],staticClass:"payWay",on:{click:s.showSelect}},[o("div",{staticClass:"container"},[o("van-row",{attrs:{gutter:"10"}},[o("van-col",{attrs:{span:"7"}},[s._v("支付方式")]),o("van-col",{attrs:{span:"8"}}),o("van-col",{attrs:{span:"8"}},[o("p",[o("i",{staticClass:"iconfont icon-zhifubao"}),o("span",[s._v("支付宝")]),o("van-icon",{attrs:{name:"arrow"}})],1)])],1)],1)]),o("section",{directives:[{name:"show",rawName:"v-show",value:!s.howPay,expression:"!howPay"}],staticClass:"payWay2",on:{click:s.showSelect}},[o("div",{staticClass:"container"},[o("van-row",{attrs:{gutter:"10"}},[o("van-col",{attrs:{span:"7"}},[s._v("支付方式")]),o("van-col",{attrs:{span:"8"}}),o("van-col",{attrs:{span:"8"}},[o("p",[o("i",{staticClass:"iconfont icon-weixin"}),o("span",[s._v("微信")]),o("van-icon",{attrs:{name:"arrow"}})],1)])],1)],1)]),o("van-popup",{staticClass:"selectPayWay",attrs:{position:"bottom"},model:{value:s.show,callback:function(t){s.show=t},expression:"show"}},[o("h1",[s._v("选择支付方式")]),o("div",{staticClass:"method",on:{click:s.chooseAliPay}},[o("p",[o("i",{staticClass:"iconfont icon-zhifubao"}),o("span",[s._v("支付宝")]),o("van-checkbox",{model:{value:s.selectAli,callback:function(t){s.selectAli=t},expression:"selectAli"}})],1)]),o("div",{staticClass:"method",on:{click:s.chooseWechatPay}},[o("p",[o("i",{staticClass:"iconfont icon-weixin"}),o("span",[s._v("微信")]),o("van-checkbox",{attrs:{"checked-color":"#00c800"},model:{value:s.selectWechat,callback:function(t){s.selectWechat=t},expression:"selectWechat"}})],1)])]),o("section",{staticClass:"toPay"},[o("div",{staticClass:"container"},[o("div",{staticClass:"numAndPrice"},[o("p",{staticClass:"num"},[s._v("1件商品")]),o("p",{staticClass:"price"},[s._v(" 合计： "),o("span",[s._v("￥"+s._s(s.totalPriceWithCoupon))])])]),o("div",{staticClass:"pay"},[o("van-button",{attrs:{round:"",type:"info"},on:{click:s.addGoods}},[s._v("去结账")])],1)])])],1)},i=[],e=(o("dbb3"),{data:function(){return{list:{},index:null,goodsList:[],chosenCoupon:-1,coupons:this.$store.state.discount.coupon,showList:!1,totalPriceWithCoupon:0,howPay:!0,show:!1,selectAli:!0,selectWechat:!1}},methods:{onChange:function(s){this.showList=!1,this.chosenCoupon=s,this.totalPriceWithCoupon=this.$store.getters["cart/totalPrice"]-this.$store.state.discount.coupon[this.chosenCoupon].value/100},chooseAliPay:function(){this.selectAli=!0,this.selectWechat=!1,this.howPay=!0,this.show=!1},chooseWechatPay:function(){this.selectAli=!1,this.selectWechat=!0,this.howPay=!1,this.show=!1},showSelect:function(){this.show=!0},back:function(){window.history.back();var s={orderId:(new Date).getTime(),address:this.list,goodsList:this.goodsList,type:1};this.$store.commit("order/add",s)},toAddress:function(){this.$router.push("/address")},addGoods:function(){var s={orderId:(new Date).getTime(),address:this.list,goodsList:this.goodsList,type:2,goodsComment:""};this.$store.commit("order/add",s),this.$store.state.cart.list=[],this.$router.push("/myOrder/orderAll"),this.$store.commit("discount/deleteCoupon",this.chosenCoupon)}},created:function(){this.$store.state.tabbarShow=!1,this.index=this.$store.state.address.defaultId,this.goodsList=this.$store.state.cart.list;var s=this.goodsList.filter((function(s){return s.checked}));this.goodsList=s,this.chosenCoupon<0&&(this.totalPriceWithCoupon=this.$store.getters["cart/totalPrice"])},mounted:function(){this.$route.query.index>=0?(this.index=this.$route.query.index,this.list=this.$store.state.address.addressList[this.index],console.log(this.list)):this.list=this.$store.state.address.addressList.filter((function(s){return 1==s.isDefault}))[0]}}),n=e,c=(o("e688"),o("e90a")),r=Object(c["a"])(n,a,i,!1,null,"5d0c37ec",null);t["default"]=r.exports},"4f53":function(s,t,o){},e688:function(s,t,o){"use strict";var a=o("4f53"),i=o.n(a);i.a}}]);
//# sourceMappingURL=chunk-39ce57e2.319165a2.js.map