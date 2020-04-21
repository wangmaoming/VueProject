<template>
  <div class="bg">
    <header class="shopHeader">
      <van-row type="flex" justify="space-between">
        <van-col span="3" @click="back">
          <van-icon name="arrow-left" />
        </van-col>
        <van-col span="12">购物车</van-col>
        <van-col span="3">
          <span v-show="edit" @click="toComplete">编辑</span>
          <span v-show="complete" @click="toEdit">完成</span>
        </van-col>
      </van-row>
    </header>
    <section class="goodsEmpty" v-show="emptyShow">
      <div>——&nbsp;购物车是空的&nbsp;——</div>
    </section>
    <section class="goodsList" v-show="listShow">
      <div class="container">
        <van-row gutter="20" v-for="(item,index) in list" :key="index">
          <van-col class="tik" span="2">
            <van-checkbox v-model="item.checked" icon-size="16px" checked-color="#7f0019"></van-checkbox>
          </van-col>
          <van-col class="goodsPic" span="10" @click="toGoodsDetail">
            <img :src="list[index].src" alt />
          </van-col>
          <van-col class="goodsmsg" span="12">
            <p class="goodsName">{{item.goodsName}}</p>
            <p class="description">颜色：{{item.color}}&nbsp;&nbsp;尺码：{{item.size}}</p>
            <div class="footer">
              <div class="singlePrice">￥{{item.singlePrice}}</div>
              <div class="chooseNum" @click="showConfirm(index)">
                <span>数量：{{item.mount}}</span>
                <van-icon name="arrow-down" />
              </div>
            </div>
          </van-col>
          <div class="delete" @click="del(index)">删除</div>
        </van-row>
      </div>
    </section>
    <section class="actionSheet" v-if="allClear">
      <van-action-sheet @click-overlay="cancelCurrentMount" v-model="show" :round="false">
        <div class="content">
          <div class="goodsmsg">
            <div class="pic">
              <img src="../assets/cart/buy1.jpg" alt />
            </div>
            <div class="text">
              <p class="name">{{list[showNumber].goodsName}}</p>
              <p class="price">￥{{list[showNumber].singlePrice}}</p>
            </div>
          </div>
          <div class="num">
            <p>数量</p>
            <div class="btn">
              <div @click="minus(showNumber)">-</div>
              <p class="yourNum">{{list[showNumber].currentMount}}</p>
              <div @click="plus(showNumber)">+</div>
            </div>
          </div>
          <div class="confirm">
            <van-button @click="yes" color="#7f0019" round type="info">确认</van-button>
          </div>
        </div>
      </van-action-sheet>
    </section>
    <section class="recommendProduct">
      <div class="container">
        <header>
          <p>推荐商品</p>
        </header>
        <div class="productList">
          <div>
            <div class="pic">
              <img src="../assets/cart/cart1.jpg" alt />
            </div>
            <p class="name">按压式圆珠笔</p>
            <p class="price">
              <strong>￥8</strong>
            </p>
          </div>
          <div>
            <div class="pic">
              <img src="../assets/cart/cart2.jpg" alt />
            </div>
            <p class="name">凝胶中性墨水笔/按压式</p>
            <p class="price">
              <strong>￥9</strong>
            </p>
          </div>
          <div>
            <div class="pic">
              <img src="../assets/cart/cart3.jpg" alt />
            </div>
            <p class="name">荧光笔</p>
            <p class="price">
              <strong>￥10</strong>
            </p>
          </div>
          <div>
            <div class="pic">
              <img src="../assets/cart/cart4.jpg" alt />
            </div>
            <p class="name">按压式荧光笔</p>
            <p class="price">
              <strong>￥13</strong>
            </p>
          </div>
          <div>
            <div class="pic">
              <img src="../assets/cart/cart5.jpg" alt />
            </div>
            <p class="name">荧光笔</p>
            <p class="price">
              <strong>￥10</strong>
            </p>
          </div>
          <div>
            <div class="pic">
              <img src="../assets/cart/cart6.jpg" alt />
            </div>
            <p class="name">荧光笔</p>
            <p class="price">
              <strong>￥10</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="remind">
      <p>已加载全部</p>
    </section>
    <section class="toPay">
      <div class="container">
        <div class="numAndPrice">
          <p class="chooseAll">
            <!-- <van-checkbox
              @click="toggleChecked"
              v-model="checkedAll"
              icon-size="16px"
              checked-color="#7f0019"
            ></van-checkbox> -->
            <input type="checkbox" @click="toggleChecked" name="" id="" v-model="checkedAll">
          </p>
          <p class="chooseAllText">全选</p>
          <p class="num">{{checkedNum}}件商品</p>
          <p class="price">
            合计：
            <!-- <span>￥{{totalPrice}}</span> -->
            <span>￥{{$store.getters['cart/totalPrice']}}</span>
          </p>
        </div>
        <div class="pay">
          <van-button @click="toPay" round type="info">去结账</van-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import $ from "jquery";
import { Toast } from "vant";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations } = createNamespacedHelpers("cart");

export default {
  data() {
    return {
      showNumber: 0,
      edit: true,
      complete: false,
      show: false,
      // disabled: true,
      checkedAll: false,
      isList: 0,
    };
  },
  methods: {
    //显示“编辑”按钮
    toEdit() {
      this.edit = true;
      this.complete = false;
      $(".goodsList .container").animate({ "margin-left": "16px" }, 200);
    },
    //显示“完成”按钮
    toComplete() {
      this.edit = false;
      this.complete = true;
      // const domWidth = document.querySelector(".delete").offsetWidth;
      // const windowWidth = window.innerWidth;
      // const moveDis = (domWidth / windowWidth) * 1000;
      $(".goodsList .container").animate({ "margin-left": -75 }, 200);
    },
    //返回上一页
    back() {
      window.history.go(-1);
      this.$store.state.tabbarShow = true;
    },
    //在选择商品数量的模态框中，如果点击灰色部分退出模态框，下次再触发模态框，商品数量变回1
    cancelCurrentMount() {
      this.list[this.showNumber].currentMount = 1;
    },
    //展示选择商品数量的模态框
    showConfirm(index) {
      this.show = true;
      this.showNumber = index;
      this.list[this.showNumber].currentMount = this.list[
        this.showNumber
      ].mount;
    },
    //模态框点击“确定”，更新商品数量
    yes() {
      this.list[this.showNumber].mount = this.list[
        this.showNumber
      ].currentMount;
      this.show = false;
      // console.log(this.list[this.showNumber].mount);
    },
    ...mapMutations({
      del: "delete", //删除商品
      plus: "plus", //增加商品数量
      minus: "minus" //减小商品数量
    }),
    //结账
    toPay() {
      let num = 0;
      this.$store.state.cart.list.forEach(item => {
        if (item.checked == true) {
          num++;
        }
      });
      if (num == 0) {
        Toast("你还没选购商品，快去逛逛吧");
      } else if (num > 0) {
        this.$router.push("/pay");
      }
    },
    //点击商品图片去到详细页
    toGoodsDetail() {
      this.$router.push("/goodsdetail");
    },
    toggleChecked() {
      this.checkedAll = !this.checkedAll;
      if (this.checkedAll) {
        this.list.forEach(item => {
          item.checked = true;
        });
      } else {
        this.list.forEach(item => {
          item.checked = false;
        });
      }
    }
  },
  beforeRouteLeave(to, from, next) {
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
  created() {
    if (this.list.length != 0) {
      this.$store.commit("cart/noClear");
      this.$store.commit("cart/hideEmpty");
      this.$store.commit("cart/showGoodsList");
    } else if (this.list.length == 0) {
      this.$store.commit("cart/clearAll");
      this.$store.commit("cart/showEmpty");
      this.$store.commit("cart/hideGoodsList");
    }
    this.edit = true;
    this.complete = false;
  },
  mounted() {
    this.$store.state.tabbarShow = false;
  },
  beforeUpdate() {
    let a = this.list.every(item => {
      return item.checked;
    });
    this.checkedAll = a;
  },
  computed: {
    //vuex的商品数据
    ...mapState({
      list: state => state.list,
      listShow: state => state.listShow,
      emptyShow: state => state.emptyShow,
      allClear: state => state.allClear
    }),
    // disabled: {
    //   get(){
    //     if(this.totalPrice!=0){
    //       return false;
    //     }else if(this.totalPrice == 0){
    //       return true;
    //     }
    //   }
    // },
    // ...mapGetters(["totalPrice"]),
    //控制全选按钮
    // checkedAll: {
    //   get() {
    //     return this.list.every(item => {
    //       console.log(item.checked)
    //       return item.checked;
    //     });
    //   },
    //   set(v) {
    //     console.log(v);
    //     if (this.$store.state.cart.list) {
    //       this.list.forEach(item => {
    //         item.checked = v;
    //       });
    //     }
    //   }
    // },
    //控制显示的几件商品
    checkedNum() {
      let num = 0;
      this.list.forEach(item => {
        if (item.checked) {
          num++;
          this.isList++;
        }
      });
      return num;
    }
  },
  watch: {
    //监听购物车的商品，如果为空，则显示“.goodsEmpty”部分结构
    list: function(nv) {
      if (nv.length == 0) {
        this.$store.commit("cart/clearAll");
        this.$store.commit("cart/showEmpty");
        this.$store.commit("cart/hideGoodsList");
      }
    },
    isList(nv){
      this.checkedAll = nv == 0?false:true;
    }
  }
};
</script>

<style lang="scss" scoped>
$containerWidth: 90%;
.bg {
  margin-bottom: 95px;
  background-color: #f2f2f2;
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
      margin-right: 10px;
      font-size: 16px;
      color: #7f0019;
    }
  }
}
.goodsEmpty {
  box-sizing: border-box;
  height: 176px;
  width: 100%;
  padding: 76px 0;
  line-height: 24px;
  text-align: center;
  color: #848484;
  font-size: 14px;
}
.goodsList {
  position: relative;
  background-color: #fff;
  border-top: 2px solid #ccc;
  border-bottom: 1px solid #ccc;
  overflow: hidden;
  &::after {
    content: "";
    display: block;
    clear: both;
  }
  .container {
    width: $containerWidth;
    margin: 0 auto;
    // margin-left: -50px;
    .van-row {
      position: relative;
      height: 130px;
      padding: 30px 0;
      .tik {
        .van-checkbox {
          position: absolute;
          top: 50%;
          margin-top: -6px;
        }
      }
      .goodsPic {
        text-align: center;
        line-height: 130px;
        img {
          vertical-align: middle;
          width: 100%;
        }
      }
      .goodsmsg {
        margin-top: 5px;
        .goodsName {
          margin-bottom: 8px;
          line-height: 18px;
          font-size: 14px;
          font-weight: bold;
        }
        .description {
          margin-bottom: 8px;
          color: darkgrey;
          font-size: 12px;
        }
      }
      .footer {
        position: relative;
        margin-top: 20px;
        &::after {
          content: "";
          display: block;
          clear: both;
        }
        .singlePrice {
          float: left;
          margin-top: 6px;
        }
        .chooseNum {
          position: relative;
          float: right;
          //   margin-right: 14px;
          width: 90px;
          height: 30px;
          line-height: 30px;
          border-radius: 20px;
          background-color: #ccc;
          font-size: 14px;
          span {
            position: absolute;
            left: 13px;
          }
          .van-icon {
            position: absolute;
            top: 6px;
            right: 10px;
            font-size: 16px;
          }
        }
      }
    }
  }
  .delete {
    //   float: left;
    position: absolute;
    top: 30px;
    right: calc(100vw - (100vw + 102px));
    width: 50px;
    height: 129px;
    line-height: 129px;
    text-align: center;
    background-color: #7f0019;
    color: #fff;
  }
}
.actionSheet {
  .content {
    padding: 20px 20px;
    .goodsmsg {
      &::after {
        content: "";
        display: block;
        clear: both;
      }
      .pic {
        float: left;
        width: 100px;
        img {
          width: 100%;
        }
      }
      .text {
        float: left;
        margin-top: 30px;
        font-size: 14px;
        .name {
          margin-bottom: 10px;
        }
      }
    }
    .num {
      padding: 20px 0;
      &::after {
        content: "";
        display: block;
        clear: both;
      }
      p {
        float: left;
        font-size: 14px;
        &:nth-child(1) {
          margin-top: 7px;
        }
      }
      .btn {
        float: left;
        margin-left: 30px;
        &::after {
          content: "";
          display: block;
          clear: both;
        }
        div {
          float: left;
          width: 24px;
          height: 24px;
          border: 1px solid black;
          background-color: lightgray;
          text-align: center;
          line-height: 24px;
          &:nth-child(1) {
            border-top-left-radius: 50%;
            border-bottom-left-radius: 50%;
          }
          &:nth-child(3) {
            border-top-right-radius: 50%;
            border-bottom-right-radius: 50%;
          }
        }
        .yourNum {
          float: left;
          width: 50px;
          height: 24px;
          line-height: 24px;
          text-align: center;
          border: 1px solid #333;
        }
      }
    }
    .confirm {
      .van-button {
        width: 100%;
      }
    }
  }
}
.recommendProduct {
  padding: 25px 0 10px;
  background-color: #fff;
  .container {
    width: $containerWidth;
    margin: 0 auto;
    header {
      p {
        font-weight: bold;
      }
    }
    .productList {
      display: flex;
      justify-content: center;
      align-content: center;
      flex-wrap: wrap;
      margin-top: 20px;
      & > div {
        flex: 1 1 auto;
        box-sizing: border-box;
        width: 143px;
        height: 190px;
        padding: 0 10px;
        margin: 10px 0 0;
        .pic {
          img {
            width: 100%;
          }
        }
        .name {
          margin-top: 8px;
          text-align: center;
          font-size: 14px;
        }
        .price {
          margin-top: 6px;
          text-align: center;
        }
      }
    }
  }
}
.remind {
  box-sizing: border-box;
  height: 40px;
  width: 100%;
  padding: 10px;
  line-height: 20px;
  text-align: center;
  font-size: 12px;
  color: #999999;
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
        margin-right: 4px;
        input{
          width: 16px;
          height: 16px;
        }
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