<template>
  <div id="app">
    <router-view></router-view>
    <van-tabbar
      v-model="$store.state.active"
      v-show="$store.state.tabbarShow"
      active-color="#702220"
      inactive-color="#ccc"
    >
      <van-tabbar-item to="/home" :route="routebool" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/shop" :route="routebool" icon="shop-o">商城</van-tabbar-item>
      <van-tabbar-item @click="ifToCart" :route="routebool" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item @click="ifToUsercenter" :route="routebool" icon="contact">个人中心</van-tabbar-item>
      <!-- <van-tabbar-item to="/cart" :route="routebool" icon="shopping-cart-o">购物车</van-tabbar-item> -->
      <!-- <van-tabbar-item to="/usercenter" :route="routebool" icon="contact">个人中心</van-tabbar-item> -->
    </van-tabbar>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      routebool: true
    };
  },
  methods: {
    ifToCart() {
      if (this.$store.state.username != '') {
        this.$router.push("/cart");
      } else {
        this.$router.push("/login");
        Toast("请先进行登录");
      }
    },
    ifToUsercenter() {
      if (this.$store.state.username != '') {
        this.$router.push("/usercenter");
      } else {
        this.$router.push("/login");
        Toast("请先进行登录");
      }
    }
  }
};
</script>