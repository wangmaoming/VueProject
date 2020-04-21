<template>
  <div class="bg">
    <header class="collectHeader">
      <van-row type="flex" justify="space-between">
        <van-col span="3" @click="back">
          <van-icon name="arrow-left" />
        </van-col>
        <van-col span="12">我的收藏</van-col>
        <van-col span="3" @click="toCart">
          <van-icon name="shopping-cart-o" />
        </van-col>
      </van-row>
    </header>
    <section class="goodsList">
      <div class="container">
        <div class="listHeader">全部宝贝</div>
        <div class="emptyArea" v-if="showEmpty">
          <p>—— 暂无收藏，快去逛逛吧！^_^ ——</p>
        </div>
        <div class="list" v-if="!showEmpty">
          <ul>
            <li v-for="(item,index) in $store.state.collect.list" :key="index">
              <div class="msg">
                <div class="pic" @click="toGoodsDetail">
                  <img :src="imgs[0].img" alt />
                </div>
                <div class="text">
                  <p class="goodsName">{{item.goodsName}}</p>
                  <div class="recommend">
                    <p>
                      <span>340</span>人收藏
                    </p>
                    <p>
                      <span>290</span>人推荐
                    </p>
                  </div>
                  <div class="others">
                    <p class="goodsPrice">￥{{item.singlePrice}}</p>
                    <div @click="cancel(index)" class="cancel">取消收藏</div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="recommendMore">
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
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
      imgs: [
        {
          img: require("../../assets/goodsdetail/goodsdetail_1.jpg")
        }
      ]
      // showEmpty: true
    };
  },
  methods: {
    back() {
      window.history.back();
    },
    //进入购物车
    toCart() {
      this.$router.push("/cart");
    },
    //取消收藏
    cancel(index) {
      this.$store.commit("collect/cancel", index);
    },
    //进入详情页
    toGoodsDetail() {
      this.$router.push("/goodsdetail");
    }
  },
  // created(){
  //   if(this.$store.state.collect.list != ''){
  //     this.showEmpty = false;
  //   }else{
  //     this.showEmpty = true;
  //   }
  // },
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
  },
  computed: {
    showEmpty: {
      get() {
        return this.$store.state.collect.list != "" ? false : true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$containerWidth: 90%;
.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f1f1f1;
}
.collectHeader {
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
.goodsList {
  // height: 46px;
  margin-top: 10px;
  background-color: #fff;
  // padding-bottom: 10px;
  .container {
    width: $containerWidth;
    margin: 0 auto;
    .listHeader {
      font-size: 16px;
      padding: 10px 0 10px;
      // margin-bottom: 10px;

      color: #7e0018;
    }
    .emptyArea {
      width: 100%;
      height: 100px;
      line-height: 100px;
      text-align: center;
      color: darkgrey;
    }
    .list {
      li {
        height: 140px;
        width: 100%;
        margin-bottom: 15px;
        padding-bottom: 20px;
        &::after {
          content: "";
          display: block;
          clear: both;
        }
        .msg {
          height: 140px;
          .pic {
            float: left;
            width: 40%;
            height: 140px;
            line-height: 140px;
            img {
              vertical-align: middle;
              width: 100%;
            }
          }
          .text {
            position: relative;
            height: 100%;
            width: 55%;
            margin-left: 3%;
            float: left;
            .goodsName {
              line-height: 20px;
            }
            .recommend {
              margin-top: 7px;
              &::after {
                content: "";
                display: block;
                clear: both;
              }
              p {
                &:nth-child(1) {
                  float: left;
                  padding-right: 10px;
                  span {
                    color: red;
                    font-style: italic;
                  }
                }
                &:nth-child(2) {
                  float: left;
                  span {
                    color: red;
                    font-style: italic;
                  }
                }
              }
            }
            .others {
              position: absolute;
              bottom: 0;
              width: 100%;
              &::after {
                content: "";
                display: block;
                clear: both;
              }
              .goodsPrice {
                float: left;
                margin-top: 10px;
                color: red;
                font-size: 18px;
              }
              .cancel {
                float: right;
                width: 50%;
                height: 25px;
                margin-top: 3%;
                line-height: 25px;
                text-align: center;
                border-radius: 15px;
                border: 1px solid #7f0019;
                font-size: 10px;
              }
            }
          }
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