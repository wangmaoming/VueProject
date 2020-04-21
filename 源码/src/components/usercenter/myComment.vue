<template>
  <div class="bg">
    <header class="commentHeader">
      <van-row type="flex" justify="space-between">
        <van-col span="3">
          <van-icon name="arrow-left" @click="back" />
        </van-col>
        <van-col span="12">我的评价</van-col>
        <van-col span="3"></van-col>
      </van-row>
    </header>
    <div class="emptyArea" v-if="showEmpty">
      <p>—— 暂无收藏，快去逛逛吧！^_^ ——</p>
    </div>
    <div class="mycomment" v-if="!showEmpty">
      <div class="container">
        <ul>
          <li v-for="(item,index) in list" :key="index">
            <div class="goodsmsg" @click="toGoodsDetail(item.orderId)">
              <div class="pic">
                <img :src="item.goodsList[0].src" alt />
              </div>
              <div class="goodsProfile">
                <div class="orderNumber">订单：{{item.orderId}}</div>
                <div class="name">{{item.goodsList[0].goodsName}}</div>
              </div>
            </div>
            <div class="commentContent">
              <p class="contentHeader">我的评价</p>
              <p class="commentArea">{{item.goodsComment}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="recommendMore">
      <div class="header">
        <p>更多热卖款式</p>
      </div>
      <section class="goodlist1">
        <div class="container">
          <ul>
            <router-link to="/goodscategoryman" tag="li">
              <div class="pic">
                <img src="https://img.muji.com.cn/img/item/4550002228125_400.jpg" alt />
              </div>
              <div class="text">
                <p>简约春季女士悠闲半袖T恤</p>
                <p>￥129</p>
              </div>
            </router-link>
            <router-link to="/goodscategoryman" tag="li">
              <div class="pic">
                <img src="https://img.muji.com.cn/img/item/4550002255114_400.jpg" alt />
              </div>
              <div class="text">
                <p>女士打底背心</p>
                <p>￥79</p>
              </div>
            </router-link>
            <router-link to="/goodscategoryman" tag="li">
              <div class="pic">
                <img src="https://img.muji.com.cn/img/item/4550182298994_400.jpg" alt />
              </div>
              <div class="text">
                <p>小童运动长裤</p>
                <p>￥109</p>
              </div>
            </router-link>
            <router-link to="/goodscategoryman" tag="li">
              <div class="pic">
                <img src="https://img.muji.com.cn/img/item/4550002627874_400.jpg" alt />
              </div>
              <div class="text">
                <p>小童休闲棉质帽衫</p>
                <p>￥139</p>
              </div>
            </router-link>
            <router-link to="/goodscategoryman" tag="li">
              <div class="pic">
                <img src="https://img.muji.com.cn/img/item/4550002575038_400.jpg" alt />
              </div>
              <div class="text">
                <p>女士百搭休闲鞋</p>
                <p>￥149</p>
              </div>
            </router-link>
            <router-link to="/goodscategoryman" tag="li">
              <div class="pic">
                <img src="http://img.muji.com.cn/img/item/4550182568189_400.jpg" alt />
              </div>
              <div class="text">
                <p>北欧客厅沙发</p>
                <p>￥8999</p>
              </div>
            </router-link>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    back() {
      window.history.back();
    },
    toGoodsDetail(){
      // console.log(orderId);
      this.$router.push('/goodsdetail');
    }
  },
  created() {
    this.list = this.$store.state.order.list.filter(
      item => item.goodsComment != ""
    );
    // console.log(this.list);
    this.$store.state.tabbarShow = false;
  },
  computed: {
    showEmpty: {
      get() {
        return this.list != "" ? false : true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.bg {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #f1f1f1;
}
.commentHeader {
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
.emptyArea {
  height: 100px;
  width: 100%;
  background-color: #f1f1f1;
  line-height: 100px;
  text-align: center;
}
.mycomment {
  background-color: #fff;
  .container {
    width: 90%;
    margin: 0 auto;
    li {
      margin: 20px auto 5px;
      padding: 20px 0 20px;
      .goodsmsg {
        &::after {
          content: "";
          display: block;
          clear: both;
        }
        .pic {
          float: left;
          width: 33%;
          img {
            width: 100%;
          }
        }
        .goodsProfile {
          float: left;
          width: 59%;
          margin-left: 6%;
          .orderNumber {
            color: darkgrey;
            margin-bottom: 6px;
          }
        }
      }
      .commentContent {
        margin-top: 10px;
        .contentHeader {
          color: #7f0019;
          font-size: 18px;
          font-weight: bold;
        }
        .commentArea {
          margin-top: 5px;
          width: 100%;
          padding: 5px 0;
          min-height: 50px;
          border: 1px solid #7f0019;
          text-indent: 1em;
        }
      }
    }
  }
}
.recommendMore {
  margin-top: 10px;
  background-color: #fff;
  .header {
    padding: 20px 0 10px;
    font-size: 18px;
    color: #9b374b;
    text-align: center;
    font-weight: bold;
  }
  .goodlist1 {
    .container {
      width: 90%;
      margin: 0 auto;
      &::after {
        content: "";
        display: block;
        clear: both;
      }
      ul {
        li {
          float: left;
          width: 47%;
          height: 240px;
          margin-right: 6%;
          // margin-left: 2.5%;
          &:nth-child(2n) {
            margin-right: 0;
          }
          .pic {
            img {
              width: 100%;
            }
          }
          .text {
            p {
              text-align: center;
              &:nth-child(1) {
              }
              &:nth-child(2) {
                margin-top: 10px;
              }
            }
          }
        }
      }
    }
  }
}
</style>