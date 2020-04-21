<template>
  <div>
    <header id="globalHeader">
      <van-row>
        <van-col class="headerLeft" span="4">
          <nav>
            <van-cell @click="showPopup">
              <van-icon name="wap-home-o" />
            </van-cell>
            <van-popup position="left" class="popupshow1" v-model="show" closeable>
              <div class="list">
                <ul>
                  <li>
                    <ol>
                      <router-link tag="li" to="/home">首页</router-link>
                      <router-link tag="li" to="/shop">商城</router-link>
                      <!-- <router-link tag="a" @click="ifToCart" to="">购物车</router-link> -->
                      <li href="#" @click="ifToCart">购物车</li>
                      <li href="#" @click="ifToUsercenter">个人中心</li>
                      <!-- <router-link tag="a" @click="ifToUsercenter" to="">个人中心</router-link> -->
                      <router-link tag="li" to="/login">登录 / 注册</router-link>
                      <router-link tag="li" to="/aboutus">关于我们</router-link>
                    </ol>
                  </li>
                </ul>
              </div>
            </van-popup>
          </nav>
        </van-col>
        <van-col class="headerMiddle" span="16">
          <div>
            <img src="../assets/index/header_logo3.jpg" alt />
          </div>
        </van-col>
        <van-col class="headerRight" span="4">
          <van-cell @click="toSearch">
            <i class="cubeic-search"></i>
          </van-cell>
          <van-popup class="popupshow2" v-model="show2">
            <van-search v-model="value" placeholder="请输入搜索关键词" />
          </van-popup>
        </van-col>
      </van-row>
    </header>
    <div class="announcement">
      <van-notice-bar
        left-icon="info-o"
        background="#fff"
        color="rgb(127, 1, 26)"
        text="3月1号——4月1号部分热门商品6折起，赶快去选购吧！"
      />
    </div>
    <div class="banner">
      <carousel :imgs="Images"></carousel>
    </div>
    <div class="audioPlay">
      <div class="content" @click="toggleMusic">
        <div class="pic">
          <img
            src="http://p1.music.126.net/rrEAJuPqwGNNxEAMgmIVLA==/2533274791173353.jpg?param=130y130"
            alt
          />
        </div>
        <div class="singer">
          <p class="songName">breakdown</p>
          <p class="singerName">Jack Johnson</p>
        </div>
        <!-- <audio -->
          <!-- src="../assets/index/Jack Johnson - Breakdown.mp3" -->
        <!-- ></audio> -->
        <div class="play" v-show="showPlay">
          <van-icon name="play-circle-o" />
        </div>
        <div class="pause" v-show="!showPlay">
          <van-icon name="pause-circle-o" />
        </div>
      </div>
    </div>
    <div class="indexActivity">
      <div class="container">
        <div class="indexActivityHeader">
          <div class="headerLeft">
            <div class="icon">
              <i class="iconfont icon-youhui-"></i>
            </div>
            <div class="text">掌上优惠：</div>
            <div class="countTime">
              <van-count-down :time="time" format="DD 天 HH 时 mm 分 ss 秒">
                <!-- <template v-slot="timeData">
                  <span class="item">{{ timeData.hours }}</span>
                  <span class="item">{{ timeData.minutes }}</span>
                  <span class="item">{{ timeData.seconds }}</span>
                </template>-->
              </van-count-down>
            </div>
          </div>
        </div>
      </div>
      <div class="indexActivityList">
        <free-carousel :message="swiperMessage"></free-carousel>
      </div>
    </div>
    <div class="newArrival">
      <div class="arrivalHeader">NEW ARRIVAL</div>
      <ul>
        <li @click="toShop">
          <p>家私</p>
          <div class="btn">
            <van-icon name="arrow" />
          </div>
        </li>
        <li @click="toShop">
          <p>鞋包</p>
          <div class="btn">
            <van-icon name="arrow" />
          </div>
        </li>
        <li @click="toShop">
          <p>美食</p>
          <div class="btn">
            <van-icon name="arrow" />
          </div>
        </li>
        <li @click="toShop">
          <p>女装</p>
          <div class="btn">
            <van-icon name="arrow" />
          </div>
        </li>
      </ul>
    </div>
    <div class="mainPanel">
      <ul>
        <li @click="toMan">
          <img src="../assets/index/index_goods1.jpg" alt />
        </li>
        <li @click="toMan">
          <img src="../assets/index/index_goods2.jpg" alt />
        </li>
        <li @click="toMan">
          <img src="../assets/index/index_goods3.jpg" alt />
        </li>
        <li @click="toMan">
          <img src="../assets/index/index_goods4.jpg" alt />
        </li>
        <li @click="toMan">
          <img src="../assets/index/index_goods5.jpg" alt />
        </li>
        <li @click="toMan">
          <img src="../assets/index/index_goods6.jpg" alt />
        </li>
      </ul>
    </div>
    <div class="indexProduct">
      <div class="container">
        <div class="indexProductHeader">
          <div class="headerLeft">产品</div>
          <div class="headerRight" @click="toShop">
            <span>网络商城</span>
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="indexProductList">
          <ul>
            <li @click="toMan">
              <div class="pic">
                <img src="../assets/index/index_product1.jpg" alt />
              </div>
              <div class="text">
                <span>男装</span>
              </div>
            </li>
            <li>
              <div class="pic">
                <img src="../assets/index/index_product2.jpg" alt />
              </div>
              <div class="text">
                <span>女装</span>
              </div>
            </li>
            <li>
              <div class="pic">
                <img src="../assets/index/index_product3.jpg" alt />
              </div>
              <div class="text">
                <span>童装</span>
              </div>
            </li>
            <li>
              <div class="pic">
                <img src="../assets/index/index_product4.jpg" alt />
              </div>
              <div class="text">
                <span>鞋包</span>
              </div>
            </li>
            <li>
              <div class="pic">
                <img src="../assets/index/index_product5.jpg" alt />
              </div>
              <div class="text">
                <span>服装杂货</span>
              </div>
            </li>
            <li>
              <div class="pic">
                <img src="../assets/index/index_product6.jpg" alt />
              </div>
              <div class="text">
                <span>内衣</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="indexRecommend">
      <div class="container">
        <div class="indexRecommendHeader">
          <div class="headerLeft">推荐商品</div>
        </div>
        <div class="indexRecommendList">
          <ul>
            <li @click="toGoodsDetail">
              <div class="pic">
                <img
                  src="https://prodoss01.blob.core.chinacloudapi.cn/yoren-muji-ec-revised-prod/4547315258536.jpg?0#h"
                  alt
                />
              </div>
              <p>基础润肤乳液-清爽型</p>
            </li>
            <li @click="toGoodsDetail">
              <div class="pic">
                <img
                  src="https://prodoss01.blob.core.chinacloudapi.cn/yoren-muji-ec-revised-prod/4548076446576.jpg?0#h"
                  alt
                />
              </div>
              <p>基础润肤乳液-清爽型</p>
            </li>
            <li @click="toGoodsDetail">
              <div class="pic">
                <img src="https://img.muji.com.cn/img/item/4547315259847_400.jpg?0#h" alt />
              </div>
              <p>基础润肤乳液-清爽型</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="indexVideo">
      <div class="container">
        <div class="indexVideoHeader">
          <div class="headerLeft">宣传视频</div>
          <div class="headerRight">
            <!-- <span>更多</span> -->
            <!-- <van-icon name="arrow" /> -->
          </div>
        </div>
      </div>
      <div class="indexVideoList" @click="showVideo">
        <img src="../assets/index/index_video1.jpg" alt />
      </div>
      <van-action-sheet @close="closeV" v-model="show3" title="宣传视频">
        <video controls autoplay src="https://ugcws.video.gtimg.com/uwMROfz2r5zEIaQXGdGnC2dfDmafRkP9ujxgqKjuATzMrE-2/d0669mtv2ih.mp4?sdtfrom=v1105&guid=3d403775b5becbcb478f481a264bd90a&vkey=042991C6B35F663BAC6CBE707301E21AA5AF99D7A86982705C775C56DB71CD134198D1FCB2BE70F2902BC9B01CEF3170B09F4719F4F6F3C1D242E88FC56028CDF952070BC4F03CEA4AF87957FBB39FC8F9BEA757FA0A61717BFCC68D0C675A0F5B75CACBB5458BCBAA9E9B3072BD971D0127D29A565F4936E80E38FA13A5AED3"></video>
      </van-action-sheet>
    </div>
    <div class="indexInstitution">
      <div class="container">
        <div class="indexInstitutionHeader">
          <div class="headerLeft">生活良品研究所</div>
          <div class="headerRight">
            <span>更多</span>
            <van-icon name="arrow" />
          </div>
        </div>
      </div>
      <div class="indexInstitutionList">
        <ul>
          <li>
            <img src="../assets/index/index_institution1.jpg" alt />
            <p>自己的尺子</p>
          </li>
          <li>
            <img src="../assets/index/index_institution2.jpg" alt />
            <p>自己的尺子</p>
          </li>
          <li>
            <img src="../assets/index/index_institution3.jpg" alt />
            <p>观天望气</p>
          </li>
        </ul>
      </div>
    </div>
    <aside>
      <div class="container">
        <div class="asideLeft">
          <ul>
            <li>
              <a href="#">
                <img src="../assets/index/index_weibo.jpg" alt />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../assets/index/index_wechat.jpg" alt />
              </a>
            </li>
          </ul>
        </div>
        <div class="asideRight">
          <img src="../assets/index/index_logo.jpg" alt />
        </div>
      </div>
    </aside>
    <footer>
      <div class="container">
        <ul>
          <li>网络商城</li>
          <li>店铺信息</li>
          <li>生活良品研究所</li>
        </ul>
        <ul>
          <li>Open MUJI</li>
          <li>ATELIER MUJI</li>
          <li>cafe&Meal MUJI</li>
          <li>MUJI BOOKS</li>
        </ul>
        <ul>
          <li>问题咨询</li>
          <li>店铺合作伙伴</li>
          <li>人才招聘</li>
          <li>MUJI message</li>
          <li>企业情报</li>
        </ul>
      </div>
    </footer>
    <div @click="toTop" class="toTop">
      <van-icon name="upgrade" />
    </div>
  </div>
</template>

<script>
import $ from "jquery"; //引入jq
import carousel from "../components/public/carousel.vue"; //引入轮播图组件
import freeCarousel from "../components/public/freecarousel.vue"; //引入第二个轮播图
import { Toast } from "vant";
export default {
  data() {
    return {
      show: false, //header
      show2: false, //header
      show3: false, //弹出视频
      value: "", //header
      active: 0, //tabbar
      showPlay: true,
      Images: [
        {
          img: require("../assets/index/index_banner1.jpg")
        },
        {
          img: require("../assets/index/index_goods6.jpg")
        }
      ],
      time: 240 * 60 * 60 * 1000, //倒计时
      swiperMessage: [
        {
          img: "https://img.muji.com.cn/img/item/4550002228125_400.jpg",
          name: "棉莫代尔宽版毛衣",
          oldPrice: "299",
          price: "239"
        },
        {
          img: "https://img.muji.com.cn/img/item/4550002273187_400.jpg",
          name: "斜纹修身裤",
          oldPrice: "259",
          price: "239"
        },
        {
          img: "https://img.muji.com.cn/img/item/4549738797975_400.jpg",
          name: "棉线长袖T恤",
          oldPrice: "169",
          price: "129"
        },
        {
          img: "https://img.muji.com.cn/img/item/4549738612162_400.jpg",
          name: "圆领长袖T恤",
          oldPrice: "169",
          price: "129"
        },
        {
          img: "http://img.muji.com.cn/img/item/4550182304985_400.jpg",
          name: "女性工装鞋",
          oldPrice: "298",
          price: "149"
        },
        {
          img: "https://img.muji.com.cn/img/item/4550002570613_400.jpg",
          name: "弹力帽子",
          oldPrice: "128",
          price: "50"
        }
      ]
    };
  },
  components: {
    carousel,
    freeCarousel
  },
  methods: {
    toTop() {
      $("html,body").animate({ scrollTop: 0 });
    },
    showPopup() {
      this.show = true; //header
    },
    toSearch() {
      this.$router.push("/search");
    },
    toMan() {
      this.$router.push("/goodscategoryman");
    },
    toGoodsDetail() {
      this.$router.push("/goodsdetail");
    },
    toShop() {
      this.$router.push("/shop");
      this.$store.state.active = 1;
    },
    //展示视频窗口
    showVideo() {
      this.show3 = true;
    },
    ifToCart() {
      if (this.$store.state.username) {
        this.$router.push("/cart");
      } else {
        this.$router.push("/login");
        Toast("请先进行登录");
      }
    },
    ifToUsercenter() {
      if (this.$store.state.username) {
        this.$router.push("/usercenter");
      } else {
        this.$router.push("/login");
        Toast("请先进行登录");
      }
    },
    //播放音乐
    toggleMusic(){
      if(this.showPlay){
        document.querySelector('audio').play();
      }else{
        document.querySelector('audio').pause();
      }
      this.showPlay = !this.showPlay;
    },
    //关闭actionsheet
    closeV(){
      document.querySelector('video').pause();
    }
  },
  created() {
    this.$store.state.active = 0;
    this.$store.state.tabbarShow = true;
    // console.log("1");
  },
  mounted() {
    $(".toTop").css({ display: "none" });
    $(window).scroll(function() {
      var scrollTop = $(window).scrollTop();
      // console.log(scrollTop);
      if (scrollTop >= 10) {
        $(".toTop")
          .stop()
          .fadeIn(300);
      }
      if (scrollTop < 9) {
        $(".toTop")
          .stop()
          .fadeOut();
      }
      if (scrollTop == 0) {
        $(".toTop")
          .stop()
          .fadeOut();
      }
    });
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
    if (to.path == "/login" && this.$store.state.username != "") {
      Toast("你已登录");
      this.show = false;
      return;
    }
    next();
  }
};
</script>


<style lang="scss" scoped>
$indexContainerWidth: 90%;
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
header {
  overflow: hidden;

  width: 100%;
  height: 65px;

  .headerLeft {
    margin-top: 20px;
    nav {
      margin-left: 20px;
      .van-cell {
        i {
          font-size: 24px;
          line-height: 26px;
        }
      }
      .popupshow1 {
        width: 50%;
        height: 100%;
        background: rgba(112, 34, 32, 0.9);
        .list {
          position: absolute;
          top: 50px;
          left: 50%;
          width: 70%;
          margin-left: -30px;
          ul {
            li {
              ol {
                li {
                  height: 30px;
                  line-height: 30px;
                  margin-bottom: 15px;
                  display: block;
                  color: #fff;
                  font-size: 18px;
                }
              }
            }
          }
        }
      }
    }
  }
  .headerMiddle {
    height: 26px;
    margin-top: 10px;
    div {
      text-align: center;
      img {
        margin-top: 4px;
        margin-left: 10px;
        width: 60%;
      }
    }
  }
  .headerRight {
    .van-cell {
      margin-top: 20px;
      margin-left: 30%;
      i {
        font-size: 22px;
        line-height: 26px;
      }
    }
    .popupshow2 {
      margin-top: -290px;
      width: 100%;
      // height: 50px;
    }
  }
}
.announcement {
  position: relative;
  height: 40px;
  padding: 0 20px;
  &::after {
    content: "";
    display: block;
    clear: both;
  }
}
.audioPlay {
  margin-top: 10px;
  .content {
    position: relative;
    width: 90%;
    margin: 0 auto;
    padding: 10px 10px;
    border: 1px solid darkgrey;
    border-radius: 10px;
    &::after {
      content: "";
      display: block;
      clear: both;
    }
    .pic {
      float: left;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .singer {
      float: left;
      margin-left: 20px;
      .songName {
        margin-top: 7px;
      }
      .singerName {
        margin-top: 4px;
      }
    }
    .play {
      position: absolute;
      top: 50%;
      right: 20px;
      width: 26px;
      height: 26px;
      z-index: 10000;
      margin-top: -13px;
      i {
        font-size: 26px;
      }
    }
    .pause {
      position: absolute;
      top: 50%;
      right: 20px;
      width: 26px;
      height: 26px;
      z-index: 10000;
      margin-top: -13px;
      i {
        font-size: 26px;
      }
    }
  }
}
.indexActivity {
  padding: 20px 0 0;
  margin-bottom: 10px;
  margin-top: 10px;
  background-color: rgba(127, 1, 25, 0.9);
  .container {
    width: $indexContainerWidth;
    margin: 0 auto;
    .indexActivityHeader {
      &::after {
        content: "";
        display: block;
        clear: both;
      }
      .headerLeft {
        float: left;
        height: 30px;
        width: 100%;
        font-weight: bold;
        font-size: 18px;
        &::after {
          content: "";
          display: block;
          clear: both;
        }
        .icon {
          float: left;
          i {
            font-size: 30px;
            color: #fff;
          }
        }
        .text {
          float: left;
          padding-left: 10px;
          line-height: 30px;
          color: #fff;
        }
        .countTime {
          float: left;
          padding-top: 5px;
          .van-count-down {
            color: #fff;
            font-weight: bold;
          }
        }
      }
    }
    .indexActivityList {
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
            text-align: center;
            font-size: 14px;
            line-height: 18px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .currentPrice {
            text-align: center;
            font-size: 16px;
          }
          .previousPrice {
            text-align: center;
            color: grey;
          }
        }
      }
    }
  }
}
.newArrival {
  &::after {
    content: "";
    display: block;
    clear: both;
  }
  margin-top: 20px;
  margin-bottom: 10px;
  .arrivalHeader {
    font-size: 18px;
    text-align: center;
    letter-spacing: 1px;
    font-family: Microsoft YaHei;
  }
  ul {
    margin-top: 10px;
    li {
      position: relative;
      float: left;
      width: 49.5%;
      height: 70px;
      margin-right: 1%;
      // background-color: #ccc;
      // border: 1px solid #ccc;
      margin-bottom: 5px;
      &:nth-child(2n) {
        margin-right: 0;
      }
      &::after {
        content: "";
        display: block;
        clear: both;
      }
      &:nth-child(1) {
        background-image: url("https://mujiwebpictures.blob.core.chinacloudapi.cn/muji-openmuji-contents/20191124sh.png");
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: 0 -30px;
      }
      &:nth-child(2) {
        background-image: url("https://www.muji.com.cn/cn/net/contents/img/openmuji/20190921sh.jpg");
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: 0 -30px;
      }
      &:nth-child(3) {
        background-image: url("https://www.muji.com.cn/cn/net/contents/img/openmuji/20190803sh.jpg");
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: 0 -30px;
      }
      &:nth-child(4) {
        background-image: url("https://mujiwebpictures.blob.core.chinacloudapi.cn/muji-openmuji-contents/20200105nj.jpg");
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: 0 -30px;
      }
      p {
        // float: left;
        position: absolute;
        top: 50%;
        left: 10%;
        margin-top: -8px;
        font-size: 16px;
        font-family: Microsoft YaHei;
        letter-spacing: 1px;
        color: #fff;
        font-weight: bold;
      }
      .btn {
        position: absolute;
        top: 50%;
        right: 10%;
        height: 16px;
        width: 16px;
        margin-top: -8px;
        margin-right: 10px;
        i {
          color: #fff;
        }
      }
    }
  }
}
.mainPanel {
  position: relative;
  ul {
    list-style: none;
    li {
      width: 100%;
      height: 10%;
      margin: 1% 0;
      &:nth-child(1) {
        // margin-top: 0;
      }

      display: block;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.indexProduct {
  width: 100%;
  background-color: #f7f7f7;
  padding: 20px 0;
  margin-top: 20px;
  .container {
    width: $indexContainerWidth;
    margin: 0 auto;
    .indexProductHeader {
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
    .indexProductList {
      width: 100%;
      margin-top: 20px;

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
}
.indexRecommend {
  padding: 20px 0 0;
  margin-bottom: 40px;
  .container {
    width: $indexContainerWidth;
    margin: 0 auto;
    .indexRecommendHeader {
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
    .indexRecommendList {
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
            font-size: 14px;
            line-height: 18px;
          }
        }
      }
    }
  }
}
.indexService {
  padding: 20px 0 0;
  margin-bottom: 40px;
  .container {
    width: $indexContainerWidth;
    margin: 0 auto;
    .indexServiceHeader {
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
    .indexServiceList {
      ul {
        li {
          width: 100%;
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
.indexVideo {
  padding: 20px 0 0;
  margin-bottom: 40px;
  .container {
    width: $indexContainerWidth;
    margin: 0 auto;
    .indexVideoHeader {
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
  }
  .indexVideoList {
    width: 100%;
    margin-top: 16px;
    .showVideo {
      width: 100%;
    }
    img {
      width: 100%;
    }
  }
  .van-action-sheet {
    height: 70%;
    background-color: transparent;
    .video-player {
    }
  }
}
.indexInstitution {
  padding: 20px 0 0;
  margin-bottom: 40px;
  .container {
    width: $indexContainerWidth;
    margin: 0 auto;
    .indexInstitutionHeader {
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
  }
  .indexInstitutionList {
    margin-top: 16px;
    ul {
      li {
        position: relative;
        width: 100%;
        img {
          width: 100%;
        }
        p {
          position: absolute;
          bottom: 18px;
          left: 10px;
          font-weight: bolder;
          color: #fff;
        }
      }
    }
  }
}
aside {
  height: 26px;
  width: 100%;
  padding: 15px 0;
  background: #ebebeb;
  &::after {
    content: "";
    display: block;
    clear: both;
  }
  .container {
    width: $indexContainerWidth;
    margin: 0 auto;
    .asideLeft {
      float: left;
      margin-top: 4px;
      &::after {
        content: "";
        display: block;
        clear: both;
      }
      ul {
        li {
          float: left;
          width: 24px;
          height: 24px;
          margin-right: 10px;
          a {
            display: block;
            img {
              width: 100%;
            }
          }
        }
      }
    }
    .asideRight {
      float: right;
      width: 40%;
      height: 20px;
      margin-top: 4px;
      img {
        // width: 100%;
        height: 20px;
      }
    }
  }
}
footer {
  color: #d6decb;
  background-color: black;
  margin-bottom: 50px;
  .container {
    width: $indexContainerWidth;
    margin: 0 auto;
    ul {
      padding: 18px 0 0;
      border-bottom: 1px solid #d6decb;
      font-size: 14px;
      &::after {
        content: "";
        display: block;
        clear: both;
      }
      &:nth-last-child(1) {
        border: 0;
      }
      li {
        float: left;
        width: 50%;
        height: 30px;
        margin-bottom: 10px;
        line-height: 30px;
      }
    }
  }
}
.toTop {
  position: fixed;
  bottom: 70px;
  right: 10px;
  width: 27px;
  height: 27px;
  background-color: #fff;
  border-radius: 50%;
  animation: changePos 1s linear infinite;
  .van-icon {
    font-size: 27px;
    text-align: center;
    line-height: 28px;
  }
}
@keyframes changePos {
  0% {
    bottom: 70px;
  }
  5% {
    bottom: 71px;
  }
  10% {
    bottom: 72px;
  }
  15% {
    bottom: 73px;
  }
  20% {
    bottom: 74px;
  }
  25% {
    bottom: 75px;
  }
  30% {
    bottom: 76px;
  }
  35% {
    bottom: 77px;
  }
  40% {
    bottom: 78px;
  }
  45% {
    bottom: 79px;
  }
  50% {
    bottom: 80px;
  }
  55% {
    bottom: 79px;
  }
  60% {
    bottom: 78px;
  }
  65% {
    bottom: 77px;
  }
  70% {
    bottom: 76px;
  }
  75% {
    bottom: 75px;
  }
  80% {
    bottom: 74px;
  }
  85% {
    bottom: 73px;
  }
  90% {
    bottom: 72px;
  }
  95% {
    bottom: 71px;
  }
  100% {
    bottom: 70px;
  }
}
</style>
