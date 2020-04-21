<template>
  <div>
    <header class="categoryHeader">
      <van-row type="flex" justify="space-between">
        <van-col @click="back" span="3">
          <van-icon name="arrow-left" />
        </van-col>
        <van-col span="12">男装</van-col>
        <van-col span="3" @click="toCart">
          <van-icon name="shopping-cart-o" />
        </van-col>
      </van-row>
    </header>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  methods: {
    back() {
      window.history.back();
    },
    toCart() {
      if (localStorage.getItem("haveLogin")) {
        this.$router.push("/cart");
      } else {
        Toast("请先登录");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.categoryHeader {
  height: 48px;
  background: #fff;
  box-shadow: 1px 0 10px #ccc;
  .van-col {
    height: 48px;
    line-height: 50px;
    text-align: center;
    &:nth-child(1) {
      font-size: 22px;
      line-height: 54px;
      font-weight: bold;
      color: rgba(127, 0, 25, 1);
    }
    &:nth-child(2) {
      font-size: 18px;
      font-weight: bolder;
    }
    &:nth-child(3) {
      line-height: 52px;
      font-size: 24px;
      text-indent: -5px;
    }
  }
}
</style>