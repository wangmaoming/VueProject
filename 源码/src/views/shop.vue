<template>
  <div class="bg">
    <header class="shopHeader">
      <van-row type="flex" justify="space-between">
        <van-col span="3">
          <!-- <van-icon name="arrow-left" /> -->
        </van-col>
        <van-col span="12">分类</van-col>
        <van-col span="3" @click="toCart">
          <van-icon name="shopping-cart-o" />
        </van-col>
      </van-row>
    </header>
    <div class="goodslist1">
      <header>
        <div class="headerLeft">衣服杂货</div>
        <div class="headerRight">
          <!-- <a href="#">查看全部</a> -->
        </div>
      </header>
      <section class="goodlist1-list1">
        <ul>
          <router-link to="/goodscategoryman" tag="li">
            <div class="pic">
              <img src="../assets/shop/index_product1.jpg" alt />
            </div>
            <div class="text">
              <span>男装</span>
            </div>
          </router-link>
          <router-link to="/goodscategoryman" tag="li">
            <div class="pic">
              <img src="../assets/shop/index_product2.jpg" alt />
            </div>
            <div class="text">
              <span>女装</span>
            </div>
          </router-link>
          <router-link to="/goodscategoryman" tag="li">
            <div class="pic">
              <img src="../assets/shop/index_product3.jpg" alt />
            </div>
            <div class="text">
              <span>童装</span>
            </div>
          </router-link>
          <router-link to="/goodscategoryman" tag="li">
            <div class="pic">
              <img src="../assets/shop/index_product4.jpg" alt />
            </div>
            <div class="text">
              <span>鞋包</span>
            </div>
          </router-link>
          <router-link to="/goodscategoryman" tag="li">
            <div class="pic">
              <img src="../assets/shop/index_product5.jpg" alt />
            </div>
            <div class="text">
              <span>服装杂货</span>
            </div>
          </router-link>
          <router-link to="/goodscategoryman" tag="li">
            <div class="pic">
              <img src="../assets/shop/index_product6.jpg" alt />
            </div>
            <div class="text">
              <span>内衣</span>
            </div>
          </router-link>
        </ul>
      </section>
    </div>
    <div class="goodslist2">
      <header>
        <div class="headerLeft">生活杂货</div>
        <div class="headerRight">
          <!-- <a href="#">查看全部</a> -->
        </div>
      </header>
      <section class="goodlist1-list1">
        <ul>
          <li>
            <div class="pic">
              <img src="../assets/shop/shop_list2_1.jpg" alt />
            </div>
            <div class="text">
              <span>织品</span>
            </div>
          </li>
          <li>
            <div class="pic">
              <img src="../assets/shop/shop_list2_2.jpg" alt />
            </div>
            <div class="text">
              <span>家居</span>
            </div>
          </li>
          <li>
            <div class="pic">
              <img src="../assets/shop/shop_list2_3.jpg" alt />
            </div>
            <div class="text">
              <span>电子产品</span>
            </div>
          </li>
          <li>
            <div class="pic">
              <img src="../assets/shop/shop_list2_4.jpg" alt />
            </div>
            <div class="text">
              <span>居家用品</span>
            </div>
          </li>
          <li>
            <div class="pic">
              <img src="../assets/shop/shop_list2_5.jpg" alt />
            </div>
            <div class="text">
              <span>文具</span>
            </div>
          </li>
          <li>
            <div class="pic">
              <img src="../assets/shop/shop_list2_6.jpg" alt />
            </div>
            <div class="text">
              <span>卫生&美容</span>
            </div>
          </li>
          <li>
            <div class="pic">
              <img src="../assets/shop/shop_list2_7.jpg" alt />
            </div>
            <div class="text">
              <span>户外用品</span>
            </div>
          </li>
          <li>
            <div class="pic">
              <img src="../assets/shop/shop_list2_8.jpg" alt />
            </div>
            <div class="text">
              <span>IDEE</span>
            </div>
          </li>
        </ul>
      </section>
    </div>
    <div class="goodslist3">
      <header>
        <div class="headerLeft">食品</div>
        <div class="headerRight">
          <!-- <a href="#">查看全部</a> -->
        </div>
      </header>
      <section class="goodlist1-list1">
        <ul>
          <li>
            <div class="pic">
              <img src="../assets/shop/shop_list3_1.jpg" alt />
            </div>
            <div class="text">
              <span>食品</span>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      active: 0 //tabbar
    };
  },
  methods: {
    toCart() {
      if (localStorage.getItem("haveLogin")) {
        this.$router.push("/cart");
      } else {
        Toast("请先登录");
      }
    }
  },
  created() {
    this.$store.state.active = 1;
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
$indexContainerWidth: 90%;
$containerWidth: 90%;
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.bg {
  margin-bottom: 50px;
  background: #f2f2f2;
}
.shopHeader {
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
.goodslist1 {
  width: $containerWidth;
  margin: 0 auto;
  header {
    margin: 10px 0 0;
    padding: 10px 0;
    &::after {
      content: "";
      display: block;
      clear: both;
    }

    .headerLeft {
      float: left;
      font-weight: bold;
    }
    .headerRight {
      float: right;
      a {
        font-size: 14px;
        color: rgba(96, 179, 250);
      }
    }
  }
  section {
    ul {
      &::after {
        content: "";
        display: block;
        clear: both;
      }
      list-style: none;
      padding: 0 0 10px 0;
      border-bottom: 1px solid #eeeeee;
      li {
        width: 48%;
        height: 70px;
        float: left;
        margin-bottom: 10px;
        background-color: #fff;
        &:nth-child(2n) {
          margin-left: 3%;
        }
        .pic {
          width: 40%;
          height: 80%;
          float: left;
          margin-top: 6px;
          img {
            width: 100%;
            height: 96%;
          }
        }
        .text {
          float: left;
          width: 55%;
          height: 70px;
          text-align: center;
          line-height: 70px;
          font-size: 16px;
        }
      }
    }
  }
}
.goodslist2 {
  width: $containerWidth;
  margin: 0 auto 0;
  header {
    margin: 10px 0 0;
    padding: 10px 0;
    &::after {
      content: "";
      display: block;
      clear: both;
    }

    .headerLeft {
      float: left;
      font-weight: bold;
    }
    .headerRight {
      float: right;
      a {
        font-size: 14px;
        color: rgba(96, 179, 250);
      }
    }
  }
  section {
    ul {
      &::after {
        content: "";
        display: block;
        clear: both;
      }
      list-style: none;
      padding: 0 0 10px 0;
      border-bottom: 1px solid #eeeeee;
      li {
        width: 48%;
        height: 70px;
        float: left;
        margin-bottom: 10px;
        background-color: #fff;
        &:nth-child(2n) {
          margin-left: 3%;
        }
        .pic {
          width: 40%;
          height: 80%;
          float: left;
          margin-top: 6px;
          text-align: center;
          img {
            width: 80%;
            height: 96%;
            margin-top: 2px;
          }
        }
        .text {
          float: left;
          width: 55%;
          height: 70px;
          text-align: center;
          line-height: 70px;
          font-size: 16px;
        }
      }
    }
  }
}
.goodslist3 {
  width: $containerWidth;
  margin: 0 auto 0;
  header {
    margin: 10px 0 0;
    padding: 10px 0;
    &::after {
      content: "";
      display: block;
      clear: both;
    }

    .headerLeft {
      float: left;
      font-weight: bold;
    }
    .headerRight {
      float: right;
      a {
        font-size: 14px;
        color: rgba(96, 179, 250);
      }
    }
  }
  section {
    ul {
      &::after {
        content: "";
        display: block;
        clear: both;
      }
      list-style: none;
      padding: 0 0 10px 0;
      border-bottom: 1px solid #eeeeee;
      li {
        width: 48%;
        height: 70px;
        float: left;
        margin-bottom: 10px;
        background-color: #fff;
        &:nth-child(2n) {
          margin-left: 3%;
        }
        .pic {
          width: 40%;
          height: 80%;
          float: left;
          margin-top: 6px;
          text-align: center;
          img {
            width: 80%;
            height: 96%;
            margin-top: 2px;
          }
        }
        .text {
          float: left;
          width: 55%;
          height: 70px;
          text-align: center;
          line-height: 70px;
          font-size: 16px;
        }
      }
    }
  }
}
</style>