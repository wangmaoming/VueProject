<template>
  <div class="bg">
    <div class="swiper-container free-carousel">
      <div class="swiper-wrapper">
        <div class="swiper-slide eachItem" v-for="(item,index) in message" :key="index" @click="toGoodsDetail">
          <div class="pic">
            <img :src="item.img" alt />
          </div>
          <p class="goodsName">{{item.name}}</p>
          <p class="currentPrice">￥{{item.price}}</p>
          <p class="previousPrice">
            <del>￥{{item.oldPrice}}</del>
          </p>
        </div>
        <!-- <div class="swiper-slide eachItem">
          <div class="pic">
            <img src="https://img.muji.com.cn/img/item/4550002228125_400.jpg" alt />
          </div>
          <p class="goodsName">棉莫代尔宽版毛衣</p>
          <p class="currentPrice">￥239</p>
          <p class="previousPrice">
            <del>￥299</del>
          </p>
        </div>
        <div class="swiper-slide eachItem">
          <div class="pic">
            <img src="https://img.muji.com.cn/img/item/4550002228125_400.jpg" alt />
          </div>
          <p class="goodsName">棉莫代尔宽版毛衣</p>
          <p class="currentPrice">￥239</p>
          <p class="previousPrice">
            <del>￥299</del>
          </p>
        </div>
        <div class="swiper-slide eachItem">
          <div class="pic">
            <img src="https://img.muji.com.cn/img/item/4550002228125_400.jpg" alt />
          </div>
          <p class="goodsName">棉莫代尔宽版毛衣</p>
          <p class="currentPrice">￥239</p>
          <p class="previousPrice">
            <del>￥299</del>
          </p>
        </div>
        <div class="swiper-slide eachItem">
          <div class="pic">
            <img src="https://img.muji.com.cn/img/item/4550002228125_400.jpg" alt />
          </div>
          <p class="goodsName">棉莫代尔宽版毛衣</p>
          <p class="currentPrice">￥239</p>
          <p class="previousPrice">
            <del>￥299</del>
          </p>
        </div>
        <div class="swiper-slide eachItem">
          <div class="pic">
            <img src="https://img.muji.com.cn/img/item/4550002228125_400.jpg" alt />
          </div>
          <p class="goodsName">棉莫代尔宽版毛衣</p>
          <p class="currentPrice">￥239</p>
          <p class="previousPrice">
            <del>￥299</del>
          </p>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  data() {
    return {};
  },
  methods:{
      toGoodsDetail(){
          this.$router.push("/goodsdetail");
      }
  },
  mounted() {
    new Swiper(".free-carousel", {
      slidesPerView: 3,
      spaceBetween: 5,
      freeMode: true
    });
  },
  props: ["message"]
};
</script>

<style lang="scss" scoped>
.bg {
  &::after {
    content: "";
    display: block;
    clear: both;
  }
}
.eachItem {
  box-sizing: border-box;
  width: 31%;
  margin-right: 2%;
  margin-top: 10px;
  padding: 8px 2.5% 10px 2.5%;
  float: left;
//   border: 1px solid #ccc;
  border-radius: 4px;
//   box-shadow: 1px 1px 6px #ccc;
  background-color: rgba(127, 1, 25,.5);
// background: #fff;
  color: #fff;
  &:nth-last-child(1) {
    margin-right: 0;
  }
  .pic {
    width: 100%;
    height: 100px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .goodsName {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    margin-top: 4px;
  }
  .currentPrice {
    text-align: center;
    margin: 8px 0 2px;
    font-size: 16px;
  }
  .previousPrice {
      margin-top: 4px;
    text-align: center;
    // color: grey;
    font-size: 14px;
  }
}
</style>