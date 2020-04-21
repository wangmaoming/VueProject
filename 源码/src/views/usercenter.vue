<template>
  <div class="bg">
    <!-- 头部栏 -->
    <header class="centerHeader">
      <van-row type="flex" justify="space-between">
        <van-col span="3"></van-col>
        <van-col span="12">个人中心</van-col>
        <van-col span="3" @click="toCart"></van-col>
      </van-row>
    </header>
    <!-- 个人信息 -->
    <div class="msg">
      <div class="container">
        <div class="icon">
          <img src="../assets/usercenter/icon1.jpg" alt />
        </div>
        <div class="phoneNumber" @click="toSettings">
          <!-- <span>{{$store.state.username}}</span> -->
          <span>{{username}}</span>
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
    <!-- 我的订单 -->
    <div class="container">
      <header>
        <div class="headerLeft">我的订单</div>
        <div class="headerRight">
          <router-link tag="a" to="/myOrder">查看全部</router-link>
        </div>
      </header>
    </div>
    <div class="goodsSituation">
      <ul>
        <li @click="toOrderAll(0)">
          <div class="pic">
            <van-icon name="orders-o" />
          </div>
          <div class="text">全部</div>
        </li>
        <li @click="toOrderPay(1)">
          <div class="pic">
            <van-icon name="pending-payment" />
          </div>
          <div class="text">待付款</div>
        </li>
        <li @click="toOrderGoods(2)">
          <div class="pic">
            <van-icon name="send-gift-o" />
          </div>
          <div class="text">待收货</div>
        </li>
        <li @click="toOrderComplete(3)">
          <div class="pic">
            <van-icon name="passed" />
          </div>
          <div class="text">已完成</div>
        </li>
      </ul>
    </div>
    <div class="others">
      <div class="container">
        <ul>
          <li @click="toAdress">
            <span>我的收货地址</span>
            <van-icon name="arrow" />
          </li>
          <li @click="toComment">
            <span>我的评价</span>
            <van-icon name="arrow" />
          </li>
          <li @click="toCollect">
            <span>收藏夹</span>
            <van-icon name="arrow" />
          </li>
          <li @click="toDiscount">
            <span>优惠券</span>
            <van-icon name="arrow" />
          </li>
        </ul>
      </div>
    </div>
    <!-- 退出按钮 -->
    <div class="quit" @click="logout">
      <van-button color="#7f0019" round type="info">退出</van-button>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      show: false,
      actions: [1, 2],
      username: '',
    };
  },
  methods: {
    toCart() {
      this.$router.push("/cart");
    },
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
      Toast(item.name);
    },
    //跳到设置页面
    toSettings() {
      this.$router.push("/settings");
    },
    //跳到我的地址
    toAdress() {
      this.$router.push("/address");
    },
    //跳到收藏夹
    toCollect() {
      this.$router.push("/collect");
    },
    //我的订单 全部订单
    toOrderAll(index) {
      this.$router.push("/myOrder/orderAll");
      this.$store.commit("order/change", index);
    },
    //我的订单 待付款
    toOrderPay(index) {
      this.$router.push("/myOrder/orderPay");
      this.$store.commit("order/change", index);
    },
    //我的订单 待收货
    toOrderGoods(index) {
      this.$router.push("/myOrder/orderGoods");
      this.$store.commit("order/change", index);
    },
    toOrderComplete(index) {
      this.$router.push("/myOrder/orderComplete");
      this.$store.commit("order/change", index);
    },
    //优惠券
    toDiscount() {
      this.$router.push("/discount");
    },
    //我的评价
    toComment(){
      this.$router.push("/myComment");
    },
    // 退出登录
    logout() {
      // this.$store.state.username = '';
      // this.$sotre.commit('logout');
      localStorage.removeItem("haveLogin");
      this.$router.push("/home");
      Toast("你已退出登录！")
    }
  },
  created() {
    this.$store.state.active = 3;
    this.username = this.$store.state.username;
  },
  mounted() {
    this.$store.state.tabbarShow = true;
  }
  // beforeRouteLeave (to, from, next) {
  //   if(to.path == '/address'){
  //     this.$store.state.address.fromWhere = '/usercenter';
  //     next();
  //   }else{
  //     next();
  //   }
  // }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.bg {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  margin-bottom: 50px;
  background-color: #f1f1f1;
}
.centerHeader {
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
.quit {
  .van-button {
    // position: absolute;
    display: block;
    margin: 15px auto 15px;
    width: 90%;
    // bottom: 60px;
    // margin: 0 auto;
  }
}
$containerWidth: 90%;
.container {
  width: $containerWidth;
  margin: 0 auto;
  header {
    margin: 15px 0 0;
    padding: 10px 0 15px;
    &::after {
      content: "";
      display: block;
      clear: both;
    }

    .headerLeft {
      float: left;
      font-weight: bold;
      font-size: 20px;
    }
    .headerRight {
      float: right;
      a {
        font-size: 14px;
        color: rgba(96, 179, 250);
      }
    }
  }
}
.goodsSituation {
  height: 80px;
  width: 100%;
  padding: 10px 0;
  background-color: #fff;
  ul {
    li {
      float: left;
      width: 25%;
      text-align: center;
      .pic {
        height: 50px;
        line-height: 50px;
        .van-icon {
          font-size: 24px;
        }
      }
      .text {
        font-size: 14px;
      }
    }
  }
}
.others {
  margin-top: 10px;
  background-color: #fff;
  .container {
    width: $containerWidth;
    margin: 0 auto;
    ul {
      li {
        width: 100%;
        height: 20px;
        padding: 10px 0;
        line-height: 22px;
        border-bottom: 1px solid #eeeef0;
        &:nth-last-child(1) {
          border: none;
        }
        span {
        }
        .van-icon {
          float: right;
          margin-right: 10px;
          margin-top: 2px;
        }
      }
    }
  }
}
.msg {
  position: relative;
  width: 100%;
  height: 99px;
  padding: 11px 0 10px;
  margin-top: 3px;
  background-color: #fff;
  .container {
    width: $containerWidth;
    margin: 0 auto;
    .icon {
      overflow: hidden;
      position: absolute;
      top: 50%;
      margin-top: -38px;
      width: 77px;
      height: 77px;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .phoneNumber {
      position: absolute;
      left: 120px;
      top: 50%;
      height: 30px;
      width: 63%;
      margin-top: -15px;
      line-height: 30px;
      span {
        display: block;
        float: left;
      }
      .van-icon {
        display: block;
        margin-top: 5px;
        // margin-left: 20px;
        font-size: 20px;
        color: darkgray;
        float: right;
      }
    }
  }
}
</style>