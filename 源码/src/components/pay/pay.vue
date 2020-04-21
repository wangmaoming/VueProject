<template>
  <div class="bg">
    <header class="payHeader">
      <van-row type="flex" justify="space-between">
        <van-col span="3" @click="back">
          <van-icon name="arrow-left" />
        </van-col>
        <van-col span="12">提交订单</van-col>
        <van-col span="3"></van-col>
      </van-row>
    </header>
    <section @click="toAddress" class="deliveryAddress">
      <div class="container">
        <van-row gutter="10">
          <van-col span="7">收货地址</van-col>
          <van-col span="14">
            <p class="buyermsg">
              <span class="name">{{list.name}}</span>
              <span class="phoneNumber">{{list.tel}}</span>
            </p>
            <p
              class="address"
            >{{list.province}}&nbsp;{{list.city}}&nbsp;{{list.county}}&nbsp;{{list.addressDetail}}</p>
          </van-col>
          <van-col span="3">
            <van-icon name="arrow" />
          </van-col>
        </van-row>
      </div>
    </section>
    <section class="goodsdisplay">
      <div class="container">
        <div class="goodsmsg">
          <ol>
            <li class="list" v-for="(item,index) in goodsList" :key="index">
              <ul>
                <li class="pic">
                  <img :src="item.src" alt />
                </li>
                <li class="goodsProfile">
                  <p class="goodsName">{{item.goodsName}}</p>
                  <div class="goodsColorAndSize">颜色：{{item.color}}、&nbsp;尺码：{{item.size}}</div>
                  <div class="goodsPriceAndMount">
                    <span class="goodsPrice">￥{{item.singlePrice}}</span>
                  </div>
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </section>
    <section class="myDiscount">
      <div class="container">
        <van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList = true" />
        <!-- 优惠券列表 -->
        <van-popup
          v-model="showList"
          round
          position="bottom"
          style="height: 90%; padding-top: 4px;"
        >
          <van-coupon-list
            :coupons="coupons"
            :chosen-coupon="chosenCoupon"
            :show-close-button="false"
            @change="onChange"
            :show-exchange-bar="false"
          />
        </van-popup>
      </div>
    </section>
    <section class="deliveryWay">
      <div class="container">
        <van-row gutter="10">
          <van-col span="7">配送方式</van-col>
          <van-col span="4">
            <p>快递</p>
            <p>运费</p>
          </van-col>
          <van-col span="11">
            <p>根据收货地区自动分配</p>
            <p>￥0</p>
          </van-col>
        </van-row>
      </div>
    </section>
    <section class="payWay" v-show="howPay" @click="showSelect">
      <div class="container">
        <van-row gutter="10">
          <van-col span="7">支付方式</van-col>
          <van-col span="8"></van-col>
          <van-col span="8">
            <p>
              <i class="iconfont icon-zhifubao"></i>
              <span>支付宝</span>
              <van-icon name="arrow" />
            </p>
          </van-col>
        </van-row>
      </div>
    </section>
    <section class="payWay2" v-show="!howPay" @click="showSelect">
      <div class="container">
        <van-row gutter="10">
          <van-col span="7">支付方式</van-col>
          <van-col span="8"></van-col>
          <van-col span="8">
            <p>
              <i class="iconfont icon-weixin"></i>
              <span>微信</span>
              <van-icon name="arrow" />
            </p>
          </van-col>
        </van-row>
      </div>
    </section>
    <van-popup class="selectPayWay" position="bottom" v-model="show">
      <h1>选择支付方式</h1>
      <div class="method" @click="chooseAliPay">
        <p>
          <i class="iconfont icon-zhifubao"></i>
          <span>支付宝</span>
          <van-checkbox v-model="selectAli"></van-checkbox>
        </p>
      </div>
      <div class="method" @click="chooseWechatPay">
        <p>
          <i class="iconfont icon-weixin"></i>
          <span>微信</span>
          <van-checkbox v-model="selectWechat" checked-color="#00c800"></van-checkbox>
        </p>
      </div>
    </van-popup>
    <section class="toPay">
      <div class="container">
        <div class="numAndPrice">
          <p class="num">1件商品</p>
          <p class="price">
            合计：
            <!-- <span>￥{{totalPrice}}</span> -->
            <span>￥{{totalPriceWithCoupon}}</span>
          </p>
        </div>
        <div class="pay">
          <van-button @click="addGoods" round type="info">去结账</van-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: {}, //收货地址数据双向绑定
      index: null,
      goodsList: [], //数据双向绑定
      chosenCoupon: -1,
      coupons: this.$store.state.discount.coupon,
      // disabledCoupons: [coupon],
      showList: false,
      totalPriceWithCoupon: 0, //用了优惠券之后的总价
      howPay: true,
      show: false,
      selectAli: true,
      selectWechat: false
    };
  },
  methods: {
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
      this.totalPriceWithCoupon =
        this.$store.getters["cart/totalPrice"] -
        this.$store.state.discount.coupon[this.chosenCoupon].value / 100;
    },
    chooseAliPay() {
      this.selectAli = true;
      this.selectWechat = false;
      this.howPay = true;
      this.show = false;
    },
    chooseWechatPay() {
      this.selectAli = false;
      this.selectWechat = true;
      this.howPay = false;
      this.show = false;
    },
    showSelect() {
      this.show = true;
    },
    back() {
      window.history.back();
      // this.$router.push('/cart');
      //未支付处理
      let order = {
        orderId: new Date().getTime(),
        address: this.list,
        goodsList: this.goodsList,
        type: 1 //未支付
      };
      this.$store.commit("order/add", order);
    },
    //跳到我的地址
    toAddress() {
      this.$router.push("/address");
    },
    //把客户购买的商品的信息数据发送到order.js中
    //客户完成支付的处理
    addGoods() {
      let order = {
        orderId: new Date().getTime(),
        address: this.list,
        goodsList: this.goodsList,
        type: 2, //已支付
        goodsComment: ""
      };
      this.$store.commit("order/add", order);
      //清空购物车
      this.$store.state.cart.list = [];
      //用户点击“去结账之后”（完成购买），跳转到我的订单页面
      this.$router.push("/myOrder/orderAll");
      this.$store.commit("discount/deleteCoupon", this.chosenCoupon);
    }
  },
  created() {
    this.$store.state.tabbarShow = false;
    this.index = this.$store.state.address.defaultId;
    //获取购物车数据
    this.goodsList = this.$store.state.cart.list;
    let a = this.goodsList.filter(item => {
      return item.checked;
    });
    this.goodsList = a;
    //如果没有用优惠券，计算总价
    if (this.chosenCoupon < 0) {
      this.totalPriceWithCoupon = this.$store.getters["cart/totalPrice"];
    }
  },
  mounted() {
    //获取地址栏数据
    //判断：如果$route.query.index有数据，就代表修改收货地址之后跳回提交订单页面，如果$route.query.index没有数据，就使用默认的地址
    // this.list = this.$store.state.address.addressList;
    // console.log(this.list);
    // if(this.list.isDefault){
    // }
    if (this.$route.query.index >= 0) {
      // console.log(this.$route.query.index);
      this.index = this.$route.query.index;
      this.list = this.$store.state.address.addressList[this.index];
      console.log(this.list);
    } else {
      this.list = this.$store.state.address.addressList.filter(
        item => item.isDefault == true
      )[0];
    }
  }
  // beforeRouteLeave(to, from, next) {
  //   if (to.path == "/address") {
  //     this.$store.state.address.fromWhere = "/pay";
  //     console.log(to.path)
  //     next();
  //   }else{
  //     next();
  //   }
  // }
};
</script>

<style lang="scss" scoped>
$containerWidth: 90%;
.bg {
  position: absolute;
  top: 0;
  left: 0;
  // height: 100%;
  width: 100%;
  margin-bottom: 40%;
  background-color: #f1f1f1;
}
.payHeader {
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
      margin-right: 10px;
      font-size: 16px;
      color: #7f0019;
    }
  }
}
.deliveryAddress {
  margin-top: 3px;
  background: #fff;
  .container {
    width: $containerWidth;
    margin: 0 auto;
    .van-col {
      box-sizing: border-box;
      height: 95px;
      padding: 10px 10px;
      //   background-color: #ccc;
      &:nth-child(1) {
        font-size: 18px;
        line-height: 75px;
      }
      &:nth-child(2) {
        padding: 15px 0;
        letter-spacing: 1px;
        .phoneNumber {
          margin-left: 15px;
        }
        .address {
          margin-top: 14px;
          line-height: 18px;
        }
      }
      &:nth-child(3) {
        position: relative;
        .van-icon {
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          margin-top: -8px;
          font-size: 22px;
          color: darkgrey;
        }
      }
    }
  }
}
.goodsdisplay {
  margin-top: 20px;
  padding: 10px 0 0px;
  background: #fff;
  .container {
    width: $containerWidth;
    margin: 0 auto;
    .goodsmsg {
      padding: 20px 0;
      &::after {
        content: "";
        display: block;
        clear: both;
      }
      .list {
        &::after {
          content: "";
          display: block;
          clear: both;
        }
        border-bottom: 1px solid #ccc;
        padding-bottom: 10px;
        margin-bottom: 20px;
        ul {
          .pic {
            float: left;
            width: 32%;
            height: 120px;
            img {
              width: 100%;
            }
          }
          .goodsProfile {
            box-sizing: border-box;
            position: relative;
            float: left;
            width: 68%;
            height: 125px;
            padding-left: 7%;
            .goodsName {
              position: absolute;
              top: 0;
              line-height: 20px;
              letter-spacing: 1px;
              font-size: 14px;
            }
            .goodsColorAndSize {
              position: absolute;
              top: 45%;
              width: 90%;
              height: 34px;
              line-height: 34px;
              text-align: center;
              border-radius: 20px;
              color: darkgrey;
              background-color: #f2f2f2;
              font-size: 14px;
            }
            .goodsPriceAndMount {
              position: absolute;
              bottom: 0;
              width: 88%;
              &::after {
                content: "";
                display: block;
                clear: both;
              }
              .goodsPrice {
                display: block;
                float: left;
                font-size: 16px;
                font-weight: bold;
              }
              .goodsMount {
                display: block;
                float: right;
                font-size: 14px;
                color: darkgrey;
              }
            }
          }
        }
      }
    }
    .sellingActivity {
      margin-top: 10px;
    }
  }
}
.myDiscount {
  margin-top: 10px;
  background: #fff;
  height: 43px;
  .container {
    width: $containerWidth;
    margin: 0 auto;
  }
}
.deliveryWay {
  margin-top: 10px;
  background: #fff;
  .container {
    width: $containerWidth;
    margin: 0 auto;
    .van-col {
      box-sizing: border-box;
      height: 95px;
      padding: 10px 10px;
      // background-color: #ccc;
      &:nth-child(1) {
        font-size: 18px;
        line-height: 75px;
      }
      &:nth-child(2) {
        p {
          &:nth-child(1) {
            padding: 10px 0 5px;
          }
          &:nth-child(2) {
            padding: 10px 0 5px;
          }
        }
      }
      &:nth-child(3) {
        // margin-left: 8%;
        p {
          &:nth-child(1) {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            padding: 10px 0 5px;
          }
          &:nth-child(2) {
            padding: 10px 0 5px;
          }
        }
      }
    }
  }
}
.payWay {
  margin-top: 10px;
  // margin-bottom: 20%;
  background: #fff;
  height: 53px;
  .container {
    width: $containerWidth;
    margin: 0 auto;
    .van-col {
      box-sizing: border-box;
      height: 53px;
      line-height: 35px;
      padding: 10px 10px;
      font-size: 18px;
      &:nth-child(3) {
        position: relative;
        width: 37%;
        p {
          position: relative;
          margin-left: 12px;
          line-height: 35px;
          overflow: hidden;
          i {
            position: absolute;
            font-size: 26px;
            color: #02a9f1;
          }
          span {
            font-size: 16px;
            margin-left: 24%;
          }
          .van-icon {
            // margin-top: 8px;
            // display: block;
            position: absolute;
            top: 52%;
            right: 4%;
            margin-top: -9px;
            font-size: 20px;
            color: darkgrey;
          }
        }
      }
    }
  }
}
.payWay2 {
  margin-top: 10px;
  // margin-bottom: 20%;
  background: #fff;
  height: 53px;
  .container {
    width: $containerWidth;
    margin: 0 auto;
    .van-col {
      box-sizing: border-box;
      height: 53px;
      line-height: 35px;
      padding: 10px 10px;
      font-size: 18px;
      &:nth-child(3) {
        position: relative;
        width: 37%;
        p {
          position: relative;
          margin-left: 12px;
          line-height: 35px;
          overflow: hidden;
          i {
            position: absolute;
            font-size: 26px;
            color: #00c800;
          }
          span {
            font-size: 16px;
            margin-left: 28%;
          }
          .van-icon {
            // margin-top: 8px;
            // display: block;
            position: absolute;
            top: 52%;
            right: 4%;
            margin-top: -9px;
            font-size: 20px;
            color: darkgrey;
          }
        }
      }
    }
  }
}
.selectPayWay {
  height: 30%;
  h1 {
    font-size: 20px;
    text-align: center;
    padding: 10px 0 10px;
    color: #fff;
    background-color: #952c41;
  }
  .method {
    &:nth-child(2) {
      i {
        color: #02a9f1;
      }
    }
    &:nth-child(3) {
      i {
        color: #00c800;
      }
      span {
        margin-left: 1.5%;
      }
    }
    p {
      height: 50px;
      width: 100%;
      line-height: 50px;
      border-bottom: 1px solid #ccc;
      &::after {
        content: "";
        display: block;
        clear: both;
      }
      i {
        float: left;
        margin-left: 5%;
        font-size: 24px;
      }
      span {
        float: left;
        margin-left: 1%;
        font-size: 18px;
      }
      .van-checkbox {
        float: right;
        margin-top: 3.5%;
        margin-right: 5%;
      }
    }
  }
}
.toPay {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 70px;
  width: 100%;
  padding: 15px 0;
  //   padding: 10px 15px;
  border-top: 1px solid #ccc;
  background-color: #fff;
  .container {
    width: $containerWidth;
    margin: 0 auto;
    .numAndPrice {
      &::after {
        content: "";
        display: block;
        clear: both;
      }
      .chooseAll {
        float: left;
      }
      .chooseAllText {
        float: left;
        margin-right: 25px;
      }
      .num {
        float: left;
        letter-spacing: 3px;
      }
      .price {
        float: right;
        span {
          color: red;
        }
      }
    }
    .pay {
      margin-top: 10px;
      .van-button {
        border: 0;
        background-color: #7f0019;
        width: 100%;
        font-weight: bold;
        font-size: 16px;
        letter-spacing: 4px;
      }
    }
  }
}
</style>