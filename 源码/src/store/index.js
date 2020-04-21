import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 引入购物车vuex
import cart from "./modules/cart.js"
import address from "./modules/address.js"
import collect from "./modules/collect.js"
import order from "./modules/order.js"
import discount from "./modules/discount.js"
export default new Vuex.Store({
  state: {
    tabbarShow: true,//tabbar的显示与隐藏
    active: 0,//tabbar图标高亮
    username: '',//用户信息
  },
  mutations: {
    setUsername(state,msg){
        state.username = msg;
    },
    logout(state){
      state.username = '';
    }
  },
  actions: {
  },
  modules: {
    cart, //购物车 商品详情与购物车之间的状态管理
    address, //用户收货地址数据
    collect, //收藏夹的数据
    order, //我的订单数据
    discount, //优惠券数据
  }
})
