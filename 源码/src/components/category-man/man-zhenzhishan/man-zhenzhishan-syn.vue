<template>
  <div>
    <div class="container">
      <div class="goodsList">
        <ul>
          <router-link tag="li" to="/goodsdetail">
            <div class="pic">
              <img src="../../../assets/goodscategory-man/man-zhenzhishan/man_zhenzhishan1.jpg" alt />
            </div>
            <p class="goodsName">减轻颈部刺痛感_中针距_天竺编织高领</p>
            <p class="goodsPrice">
              <span>￥278</span>
              <del>￥398</del>
            </p>
          </router-link>
          <li>
            <div class="pic">
              <img src="../../../assets/goodscategory-man/man-zhenzhishan/man_zhenzhishan2.jpg" alt />
            </div>
            <p class="goodsName">棉品纹_格子短袖衬衫</p>
            <p class="goodsPrice">
              <span>￥98</span>
              <del>￥328</del>
            </p>
          </li>
          <li>
            <div class="pic">
              <img src="../../../assets/goodscategory-man/man-zhenzhishan/man_zhenzhishan3.jpg" alt />
            </div>
            <p class="goodsName">棉泡泡纱_纽扣领短袖衬衫</p>
            <p class="goodsPrice">
              <span>￥248</span>
              <!-- <del>￥328</del> -->
            </p>
          </li>
          <li>
            <div class="pic">
              <img src="../../../assets/goodscategory-man/man-zhenzhishan/man_zhenzhishan4.jpg" alt />
            </div>
            <p class="goodsName">法国亚麻水洗_短袖衬衫</p>
            <p class="goodsPrice">
              <span>￥74</span>
              <del>￥248</del>
            </p>
          </li>
          <li>
            <div class="pic">
              <img src="../../../assets/goodscategory-man/man-zhenzhishan/man_zhenzhishan5.jpg" alt />
            </div>
            <p class="goodsName">棉_V领长袖T恤</p>
            <p class="goodsPrice">
              <span>￥78</span>
              <!-- <del>￥328</del> -->
            </p>
          </li>
          <li>
            <div class="pic">
              <img src="../../../assets/goodscategory-man/man-zhenzhishan/man_zhenzhishan6.jpg" alt />
            </div>
            <p class="goodsName">粗棉线_口袋短袖T恤</p>
            <p class="goodsPrice">
              <span>￥108</span>
              <!-- <del>￥328</del> -->
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
$containerWidth: 90%;
.container {
  width: $containerWidth;
  margin: 5px auto;
  .goodsList {
    &::after {
      content: "";
      display: block;
      clear: both;
    }
    margin-bottom: 30px;
    ul {
      li {
        float: left;
        width: 48%;
        height: 220px;
        margin: 20px 11px 10px 0;
        &:nth-child(2n) {
          margin-right: 0;
        }
        .pic {
          width: 100%;
          img {
            width: 100%;
          }
        }
        .goodsName {
          margin-top: 5px;
          font-size: 14px;
          line-height: 20px;
        }
        .goodsPrice {
          margin-top: 10px;
          span {
            color: #8b1a27;
            font-weight: bold;
          }
          del {
            margin-left: 5px;
            color: #9a9a9a;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>