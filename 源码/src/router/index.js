import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import home from './home.js'
import shop from './shop.js'
import usercenter from './usercenter.js'
import goodsdetail from './goodsdetail.js'
import goodscategoryman from './goodscategoryman.js'
import cart from './cart.js'
import publics from './public.js'
import pay from './pay.js'
import order from './order.js'

const routes = [
  {
    path: '/',
    redirect: '/advertpage' //默认跳转到引导页
  },
  ...home, //首页
  shop, //商城
  ...usercenter, //用户中心
  ...goodsdetail, //详情页
  goodscategoryman, //列表页
  cart, //购物车
  ...publics, //公共路由
  pay, //提交订单
  order //我的订单
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
