<template>
  <div class="bg">
    <header class="orderHeader">
      <van-row type="flex" justify="space-between">
        <van-col span="3">
          <van-icon name="arrow-left" @click="back" />
        </van-col>
        <van-col span="12">我的订单</van-col>
        <van-col span="3"></van-col>
      </van-row>
    </header>
    <div class="orderTypeList">
      <van-tabs color="#7f0019" v-model="$store.state.order.active" @change="onadd">
        <van-tab title="全部"></van-tab>
        <van-tab title="待付款"></van-tab>
        <van-tab title="待收货"></van-tab>
        <van-tab title="已完成"></van-tab>
        <van-tab title="已评价"></van-tab>
      </van-tabs>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import orderall from "../components/order/orderAll.vue"
// import orderpay from "../components/order/orderPay.vue"
// import ordergoods from "../components/order/orderGoods.vue"
// import ordercomplete from "../components/order/orderComplete.vue"
export default {
  // components:{
  //   orderall,
  //   orderpay,
  //   ordergoods,
  //   ordercomplete
  // },
  methods: {
    back() {
      this.$router.push("/usercenter");
    },
    onadd(index) {
      if (index == 0) {
        this.$router.push("/myOrder/orderAll");
      } else if (index == 1) {
        this.$router.push("/myOrder/orderPay");
      } else if (index == 2) {
        this.$router.push("/myOrder/orderGoods");
      }else if(index == 3){
        this.$router.push("/myOrder/orderComplete");  
      }else if(index ==4){
        this.$router.push("/myOrder/orderComment");
      }
    }
  },
  mounted() {
    this.$store.state.tabbarShow = false;
  },
  beforeRouteLeave(to, from, next) {
    if (to.path == "/home") {
      this.$store.state.active = 0;
    }
    switch (to.path) {
      case "/home":
        this.$store.state.active = 0;
        break;
      case "/shop":
        this.$store.state.active = 1;
        break;
      case "/usercenter":
        this.$store.state.active = 3;
        break;
    }
    next();
  }
};
</script>

<style lang="scss" scoped>
$containerWidth: 90%;
.bg {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #f1f1f1;
}
.orderHeader {
  height: 48px;
  background-color: #fff;
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