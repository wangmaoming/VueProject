<template>
  <div class="bg">
    <!-- <detailheader></detailheader>
    <detailcontent></detailcontent>-->
    <header class="detailheader">
      <van-row type="flex" justify="space-between">
        <van-col @click="back" span="3">
          <van-icon name="arrow-left" />
        </van-col>
        <van-col span="12">商品详情</van-col>
        <van-col @click="toCart" span="3">
          <van-icon name="shopping-cart-o" />
        </van-col>
      </van-row>
    </header>
    <div @click="swiperImgClick" class="banner">
      <van-swipe class="my-swipe" :autoplay="5000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
        <van-swipe-item>5</van-swipe-item>
        <van-swipe-item>6</van-swipe-item>
      </van-swipe>
      <div class="goodsProfile">
        <p class="goodsReferal">{{goods.goodsName}}</p>
        <p class="goodsPrice">
          <span>￥{{goods.singlePrice}}</span>
          <del>￥398</del>
        </p>
      </div>
    </div>
    <div class="purchase">
      <div class="container">
        <div class="collect" @click="toggleCollect(goods.id)">
          <van-icon v-show="!flag" name="like" color="#7f0019" />
          <van-icon v-show="flag" name="like-o" />
          <span>收藏</span>
        </div>
        <div class="fr">
          <div class="addToCar">
            <van-button @click="getCart" color="#7f0019" round type="info">加入购物车</van-button>
          </div>
          <div class="buyNow">
            <van-button color="#7f0019" round type="info">立即购买</van-button>
          </div>
        </div>
      </div>
    </div>
    <div class="goodsNumber">
      <div class="container">
        <h4>商品编号：4550182481433</h4>
        <p>领部特采用触感亲肤细腻的面料制成，</p>
        <p>有效减轻颈部刺痛感。</p>
        <p>质地柔软穿着舒适。</p>
      </div>
    </div>
    <div class="goodsParameter" @click="showParameter">
      <div class="container">
        <ul>
          <li>
            <span>产品参数</span>
            <van-icon name="arrow" />
          </li>
        </ul>
      </div>
    </div>
    <van-popup position="bottom" class="popupshow1" v-model="show">
      <div class="container">
        <div class="header">产品参数</div>
        <div class="content">
          <ul>
            <li>
              <p class="paramName">码数</p>
              <div class="val">
                <p class="paramValue">XS&nbsp;S&nbsp;M&nbsp;L&nbsp;XL&nbsp;XXL</p>
              </div>
            </li>
            <li>
              <p class="paramName">流行元素</p>
              <div class="val">
                <p class="paramValue">休闲生活系列</p>
              </div>
            </li>
            <li>
              <p class="paramName">颜色分类</p>
              <div class="val">
                <p class="paramValue">深蓝_01265&nbsp;棕灰_01480&nbsp;浅灰色_01210&nbsp;黑色_07222</p>
              </div>
            </li>
            <li>
              <p class="paramName">适合季节</p>
              <div class="val">
                <p class="paramValue">秋冬</p>
              </div>
            </li>
            <li>
              <p class="paramName">是否瑕疵</p>
              <div class="val">
                <p class="paramValue">否</p>
              </div>
            </li>
            <li>
              <p class="paramName">性别</p>
              <div class="val">
                <p class="paramValue">男</p>
              </div>
            </li>
            <li>
              <p class="paramName">原产国</p>
              <div class="val">
                <p class="paramValue">泰国</p>
              </div>
            </li>
            <li>
              <p class="paramName">素材</p>
              <div class="val">
                <p class="paramValue">主体:羊毛100%,领子:棉50%,聚酯纤维:50%</p>
              </div>
            </li>
            <li>
              <p class="paramName">注意事项</p>
              <div class="val">
                <p
                  class="paramValue"
                >·深色产品在使用过程中由于摩擦或润湿状态下的接触，可能导致串色。洗涤时，请与其他物品分开清洗。\n·由于材质的特性，穿着或洗涤过程中会因为摩擦产生起毛、起球的现象。此时，请尽快使用毛球修剪器等进行去除。\ne由于素材的特性，穿着中绒毛会附着到其他衣物上，请用刷子或者胶带等去D入</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="btn" @click="onCancel">完成</div>
    </van-popup>
    <div class="comment">
      <div class="container">
        <div class="commentHeader">
          <p>好物评价</p>
          <p @click="toComment">
            <span>查看全部</span>
            <van-icon name="arrow" />
          </p>
        </div>
        <div class="commentContent">
          <ul>
            <li>
              <div class="user">
                <i class="iconfont icon-yonghu1"></i>
                <span>d**92</span>
              </div>
              <div class="userComment">
                <p>好评！码数很标准，厚实，适合秋冬季节，赞好评！码数很标准，厚实，适合秋冬季节，赞好评！码数很标准，厚实，适合秋冬季节，赞</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="recommend">
      <div class="container">
        <div class="recommendHeader">
          <div class="headerLeft">猜你喜欢</div>
        </div>
        <div class="recommendList">
          <ul>
            <li>
              <div class="pic">
                <img src="../../assets/index/index_recommend1.jpg" alt />
              </div>
              <p>基础润肤乳液-清爽型</p>
            </li>
            <li>
              <div class="pic">
                <img src="../../assets/index/index_recommend2.jpg" alt />
              </div>
              <p>基础润肤乳液-清爽型</p>
            </li>
            <li>
              <div class="pic">
                <img src="../../assets/index/index_recommend3.jpg" alt />
              </div>
              <p>基础润肤乳液-清爽型</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="moreDescription">
      <div class="descriptionHeader">
        <div class="container">
          <p>展示更多</p>
        </div>
      </div>
      <ul>
        <li>
          <div class="pic">
            <img src="../../assets/goodsdetail/goodsdetail_5.jpg" alt />
          </div>
          <div class="text">
            <p>模特身高：180cm&nbsp;&nbsp;体重：65kg</p>
          </div>
        </li>
        <li>
          <div class="pic">
            <img src="../../assets/goodsdetail/goodsdetail_2.jpg" alt />
          </div>
          <div class="text">
            <p>毛衣整体成色</p>
          </div>
        </li>
        <li>
          <div class="pic">
            <img src="../../assets/goodsdetail/goodsdetail_3.jpg" alt />
          </div>
          <div class="text">
            <p>毛衣背部</p>
          </div>
        </li>
        <li>
          <div class="pic">
            <img src="../../assets/goodsdetail/goodsdetail_4.jpg" alt />
          </div>
          <div class="text">
            <p>领口</p>
          </div>
        </li>
        <li>
          <div class="pic">
            <img src="../../assets/goodsdetail/goodsdetail_1.jpg" alt />
          </div>
          <div class="text">
            <p></p>
          </div>
        </li>
      </ul>
    </div>
    <div class="parameterTable">
      <div class="container">
        <div class="paramHeader">服装码数</div>
        <table>
          <thead>
            <tr>
              <th>尺寸</th>
              <th>衣长</th>
              <th>肩宽</th>
              <th>胸围</th>
              <th>腰围</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>男式_XS</td>
              <td>63.0cm</td>
              <td>38.0cm</td>
              <td>92.0cm</td>
              <td>88.0cm</td>
            </tr>
            <tr>
              <td>男式_S</td>
              <td>63.0cm</td>
              <td>38.0cm</td>
              <td>92.0cm</td>
              <td>88.0cm</td>
            </tr>
            <tr>
              <td>男式_M</td>
              <td>63.0cm</td>
              <td>38.0cm</td>
              <td>92.0cm</td>
              <td>88.0cm</td>
            </tr>
            <tr>
              <td>男式_L</td>
              <td>63.0cm</td>
              <td>38.0cm</td>
              <td>92.0cm</td>
              <td>88.0cm</td>
            </tr>
            <tr>
              <td>男式_XL</td>
              <td>63.0cm</td>
              <td>38.0cm</td>
              <td>92.0cm</td>
              <td>88.0cm</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="loadAll">—— 已加载全部 ——</div>
  </div>
</template>

<script>
import { ImagePreview } from "vant"; //vant图片预览插件
import { Toast } from "vant";
export default {
  data() {
    return {
      goods: {
        goodsName: "减轻颈部刺痛感_中针距_天竺编织高领",
        color: "黑色",
        size: "L",
        singlePrice: "278",
        totalPrice: "278",
        mount: 1,
        currentMount: 1,
        checked: true,
        id: 0,
        src:
          "http://img.muji.com.cn/img/item/4550182481433_400.jpg?1565890596#h"
      },
      swiperData: [
        require("../../assets/goodsdetail/goodsdetail_1.jpg"),
        require("../../assets/goodsdetail/goodsdetail_2.jpg"),
        require("../../assets/goodsdetail/goodsdetail_3.jpg"),
        require("../../assets/goodsdetail/goodsdetail_4.jpg"),
        require("../../assets/goodsdetail/goodsdetail_5.jpg"),
        require("../../assets/goodsdetail/goodsdetail_6.jpg")
      ],
      show: false
    };
  },

  methods: {
    back() {
      window.history.back();
    },
    //加入购物车
    getCart() {
      if (localStorage.getItem("haveLogin")) {
        Toast("成功添加到购物车");
        this.$store.commit("cart/add", this.goods);
      } else {
        Toast("请先登录");
      }
    },
    //轮播图点击图片预览
    swiperImgClick() {
      ImagePreview(this.swiperData);
    },
    toCart() {
      if (localStorage.getItem("haveLogin")) {
        this.$router.push("/cart");
      } else {
        Toast("请先登录");
      }
    },
    //放入收藏夹
    toggleCollect(id) {
      if (localStorage.getItem("haveLogin")) {
        let index = this.$store.state.collect.list.findIndex(item => {
          return item.id == id;
        });
        // console.log(this.flag);
        if (index == -1) {
          this.$store.commit("collect/add", this.goods);
        } else if (index != -1) {
          this.$store.commit("collect/cancel", index);
        }
      } else {
        Toast("请先登录");
      }
    },
    //弹出产品参数
    showParameter() {
      this.show = true;
    },
    //关闭产品参数
    onCancel() {
      this.show = false;
    },
    toComment() {
      this.$router.push("/comment");
    }
  },
  mounted() {
    this.$store.state.tabbarShow = false;
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
  computed: {
    //监测flag值，控制“收藏”图标高亮
    flag: {
      get() {
        let index = this.$store.state.collect.list.findIndex(item => {
          return item.id == this.goods.id;
        });
        return index == -1 ? true : false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$containerWidth: 90%;
.bg {
  margin-bottom: 50px;
  background-color: #f2f2f2;
}
.detailheader {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  height: 48px;
  width: 100%;
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
.banner {
  height: 370px;
  margin-top: 50px;
}
.van-swipe {
  height: 280px;
  transform: translateZ(0);
  .van-swipe-item {
    height: 280px !important;
    color: transparent;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    &:nth-child(1) {
      background-image: url("../../assets/goodsdetail/goodsdetail_1.jpg");
      background-size: cover;
    }
    &:nth-child(2) {
      background-image: url("../../assets/goodsdetail/goodsdetail_2.jpg");
      background-size: cover;
    }
    &:nth-child(3) {
      background-image: url("../../assets/goodsdetail/goodsdetail_3.jpg");
      background-size: cover;
    }
    &:nth-child(4) {
      background-image: url("../../assets/goodsdetail/goodsdetail_4.jpg");
      background-size: cover;
    }
    &:nth-child(5) {
      background-image: url("../../assets/goodsdetail/goodsdetail_5.jpg");
      background-size: cover;
    }
    &:nth-child(6) {
      background-image: url("../../assets/goodsdetail/goodsdetail_6.jpg");
      background-size: cover;
    }
  }
}
.goodsProfile {
  height: 90px;
  padding: 24px 15px 18px;
  box-sizing: border-box;
  background-color: #fff;
  .goodsReferal {
    font-size: 14px;
    text-align: center;
    margin-bottom: 10px;
  }
  .goodsPrice {
    text-align: center;
    span {
      margin-right: 8px;
      font-size: 16px;
      font-weight: bold;
      color: #7f0019;
    }
    del {
      font-size: 16px;
      font-weight: bold;
      color: darkgray;
    }
  }
}
.purchase {
  height: 60px;
  width: 100%;
  .container {
    width: $containerWidth;
    margin: 0 auto;
    .collect {
      position: relative;
      left: 5px;
      top: 5px;
      float: left;
      width: 50px;
      height: 50px;
      text-align: center;
      line-height: 40px;
      .van-icon {
        margin-top: 8px;
        font-size: 22px;
      }
      span {
        display: block;
        position: absolute;
        top: 18px;
        left: 13px;
        font-size: 12px;
      }
    }
    .fr {
      float: right;
      &::after {
        content: "";
        display: block;
        clear: both;
      }

      .addToCar {
        float: left;
        margin-top: 10px;
        // margin-left: 20%;
        .van-button {
          height: 40px;
          line-height: 30px;
        }
      }
      .buyNow {
        float: left;
        margin-top: 10px;
        margin-left: 10px;
        .van-button {
          height: 40px;
          line-height: 30px;
        }
      }
    }
  }
}
$containerWidth: 90%;
.goodsNumber {
  padding: 0 0 15px;
  background-color: #fff;
  .container {
    width: $containerWidth;
    margin: 0 auto;
    font-size: 14px;
    h4 {
      padding: 16px 0 10px;
    }
    p {
      padding: 3px 0;
    }
  }
}
.goodsParameter {
  background-color: rgba(127, 0, 25);
  color: #fff;
  .container {
    width: $containerWidth;
    margin: 0 auto;
    ul {
      li {
        width: 100%;
        height: 22px;
        padding: 10px 0;
        line-height: 22px;
        &:nth-child(2) {
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

.popupshow1 {
  height: 80%;
  .container {
    width: $containerWidth;
    margin: 0 auto 40px;
    .header {
      padding-top: 15px;
      text-align: center;
      font-size: 20px;
    }
    .content {
      margin-top: 10px;
      li {
        &::after {
          content: "";
          display: block;
          clear: both;
        }
        // height: 45px;
        line-height: 45px;
        border-bottom: 1px solid lightgrey;
        .paramName {
          float: left;
          width: 19%;
          color: #ccc;
        }
        .val {
          float: left;
          width: 73%;
          padding: 12px 0;
          margin-left: 8%;
          .paramValue {
            line-height: 20px;
          }
        }
      }
    }
  }
  .btn {
    position: fixed;
    bottom: 0;
    // margin: 10px auto 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #93263c;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
  }
}
.comment {
  margin-top: 10px;
  padding: 15px 0 15px;
  background: #fff;
  .container {
    width: $containerWidth;
    margin: 0 auto;
    .commentHeader {
      padding-bottom: 10px;
      &::after {
        content: "";
        display: block;
        clear: both;
      }
      p {
        &:nth-child(1) {
          float: left;
          font-size: 18px;
        }
        &:nth-child(2) {
          float: right;
          font-size: 14px;
          color: grey;
        }
      }
    }
    .commentContent {
      li {
        padding: 10px 0;
        border-bottom: 1px solid #ccc;
        .user {
          i {
            font-size: 26px;
            color: red;
          }
          span {
            margin-left: 10px;
          }
        }
        .userComment {
          margin-top: 5px;
          p {
            width: 100%;
            line-height: 18px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2; //行数
            -webkit-box-orient: vertical;
          }
        }
      }
    }
  }
}
.recommend {
  margin-top: 10px;
  padding: 20px 0 20px;
  background-color: #fff;
  .container {
    width: $containerWidth;
    margin: 0 auto;
    .recommendHeader {
      &::after {
        content: "";
        display: block;
        clear: both;
      }
      .headerLeft {
        float: left;
        font-weight: bold;
        font-size: 18px;
      }
      .headerRight {
        float: right;
        color: #707070;
        span {
          display: block;
          float: left;
          margin-right: 4px;
        }
        .van-icon {
          float: left;
        }
      }
    }
    .recommendList {
      &::after {
        content: "";
        display: block;
        clear: both;
      }
      ul {
        li {
          width: 33%;
          float: left;
          margin-top: 20px;
          .pic {
            width: 100%;
            height: auto;
            text-align: center;
            img {
              width: 80%;
            }
          }
          p {
            font-size: 12px;
            line-height: 18px;
          }
        }
      }
    }
  }
}
.moreDescription {
  margin-top: 10px;
  background-color: #fff;
  .descriptionHeader {
    padding: 15px 0 10px;
    .container {
      width: $containerWidth;
      margin: 0 auto;
      p {
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
  ul {
    li {
      .pic {
        width: 100%;
        img {
          width: 100%;
        }
      }
      .text {
        padding: 5px 0 10px;
        text-align: center;
      }
    }
  }
}
.parameterTable {
  margin-top: 10px;
  padding: 10px 0 15px;
  background: #fff;
  .container {
    width: $containerWidth;
    margin: 0 auto;
    .paramHeader {
      font-size: 18px;
      padding: 10px 0;
      color: darkgrey;
    }
    table {
      tr {
        th {
          width: 88px;
          height: 22px;
          line-height: 12px;
          padding: 7px 5px;
          border: 1px solid black;
          background-color: rgb(242, 242, 242);
          text-align: center;
          font-size: 14px;
          box-sizing: border-box;
        }
        td {
          width: 88px;
          height: 22px;
          line-height: 22px;
          border: 1px solid black;
          font-size: 12px;
          text-align: center;
        }
        &:nth-child(n + 1) {
          td {
            &:nth-child(n + 2) {
              background: #fff;
            }
          }
        }
      }
    }
  }
}
.loadAll {
  height: 100%;
  padding: 20px 0 20px;
  font-size: 12px;
  text-align: center;
  color: grey;
  background: #f1f1f1;
}
</style>