(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-753c40e2"],{"9dd3":function(t,e,s){"use strict";var o=s("d3c1"),n=s.n(o);n.a},d3c1:function(t,e,s){},eb55:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",t._l(t.list,(function(e,o){return s("div",{key:o},[s("van-panel",{attrs:{title:"订单："+e.orderId,status:t.typeList[e.type]}},[t._l(e.goodsList,(function(t,e){return s("div",{key:e},[s("van-card",{attrs:{num:t.mount,price:t.singlePrice,desc:"描述信息",title:t.goodsName,thumb:t.src}})],1)})),1==e.type?s("div",{staticClass:"van-panel-footer",attrs:{slot:"footer"},slot:"footer"},[s("van-button",{attrs:{size:"small",type:"danger"},on:{click:function(s){return t.deleteOrder(e.orderId)}}},[t._v("删除订单")]),s("van-button",{attrs:{size:"small",type:"primary"},on:{click:function(s){return t.onPay(e.orderId)}}},[t._v("支付订单")])],1):2==e.type?s("div",{staticClass:"van-panel-footer",attrs:{slot:"footer"},slot:"footer"},[s("van-button",{attrs:{size:"small"},on:{click:function(s){return t.onComplete(e.orderId)}}},[t._v("已收货")])],1):3==e.type?s("div",{staticClass:"van-panel-footer",attrs:{slot:"footer"},slot:"footer"},[s("van-button",{attrs:{size:"small"},on:{click:t.hadCommented}},[t._v("商品评价")])],1):4==e.type?s("div",{staticClass:"van-panel-footer",attrs:{slot:"footer"},slot:"footer"},[s("van-button",{attrs:{size:"small"}},[t._v("已评价")])],1):t._e(),s("van-action-sheet",{attrs:{title:"标题"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[s("div",{staticClass:"content"},[s("van-field",{attrs:{rows:"10",autosize:"",label:"评价",type:"textarea",maxlength:"50",placeholder:"请输入评价","show-word-limit":""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),s("div",{staticClass:"btn",on:{click:function(s){return t.upload(e.orderId)}}},[t._v("提交")])],1)])],2)],1)})),0)},n=[],i=(s("3466"),s("ea69"),s("d605")),r={data:function(){return{list:[],typeList:[],show:!1,message:""}},methods:{onPay:function(t){var e=this.list.findIndex((function(e){return e.orderId==t}));this.list[e].type=2},onComplete:function(t){var e=this.list.findIndex((function(e){return e.orderId==t}));this.list[e].type=3,Object(i["a"])("收货成功！")},deleteOrder:function(t){var e=this.list.findIndex((function(e){return e.orderId==t}));this.list.splice(e,1),this.$store.commit("order/deleteOrder",e),Object(i["a"])("成功删除订单")},hadCommented:function(){this.show=!0},upload:function(t){var e=this.list.findIndex((function(e){return e.orderId==t}));this.list[e].type=4,this.list[e].goodsComment=this.message,Object(i["a"])("成功评价！"),this.show=!1}},created:function(){this.list=this.$store.state.order.list,this.typeList=this.$store.state.order.typeList},beforeDestroy:function(){this.list.length&&this.$store.commit("order/editId",this.list)}},a=r,l=(s("9dd3"),s("e90a")),d=Object(l["a"])(a,o,n,!1,null,"377d05ea",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-753c40e2.d0bc8836.js.map