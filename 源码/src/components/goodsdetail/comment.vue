<template>
  <div>
    <header class="commentHeader">
      <van-row type="flex" justify="space-between">
        <van-col @click="back" span="3">
          <van-icon name="arrow-left" />
        </van-col>
        <van-col span="12">商品评价</van-col>
        <van-col span="3"></van-col>
      </van-row>
    </header>
    <div class="commentContent">
      <div class="container">
        <ul>
          <li>
            <div class="user">
              <div class="userIcon">
                <i class="iconfont icon-yonghu1"></i>
              </div>
              <div class="others">
                <p class="userName">d**92</p>
                <div class="timeAndSize">
                  <span>1个月前</span>
                  <span></span>
                  <span>颜色：棕灰色_01480</span>
                  <span>码数：L</span>
                </div>
              </div>
            </div>
            <div class="content">
              <p>好评！码数很标准，厚实，适合秋冬季节，赞好评！码数很标准，厚实，适合秋冬季节，赞好评！码数很标准，厚实，适合秋冬季节，赞</p>
            </div>
            <div class="count">
              <p>
                浏览
                <span>14次</span>
              </p>
            </div>
          </li>
          <li>
            <div class="user">
              <div class="userIcon">
                <i class="iconfont icon-hangxing"></i>
              </div>
              <div class="others">
                <p class="userName">a**9</p>
                <div class="timeAndSize">
                  <span>2个月前</span>
                  <span></span>
                  <span>颜色：棕灰色_01480</span>
                  <span>码数：L</span>
                </div>
              </div>
            </div>
            <div class="content">
              <p>一直没空评价，衣服可以的，点赞！</p>
            </div>
            <div class="count">
              <p>
                浏览
                <span>2次</span>
              </p>
            </div>
          </li>
          <li>
            <div class="user">
              <div class="userIcon">
                <i class="iconfont icon-yuhangyuan"></i>
              </div>
              <div class="others">
                <p class="userName">d**3</p>
                <div class="timeAndSize">
                  <span>4个月前</span>
                  <span></span>
                  <span>颜色：棕灰色_01480</span>
                  <span>码数：XL</span>
                </div>
              </div>
            </div>
            <div class="content">
              <p>好评，还会回来买</p>
            </div>
            <div class="count">
              <p>
                浏览
                <span>5次</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      window.history.back();
    }
  },
  mounted() {
    this.$store.state.tabbarShow = false;
  }
};
</script>

<style lang="scss" scoped>
$containerWidth: 90%;
.bg {
  margin-bottom: 50px;
  background-color: #f2f2f2;
}
.commentHeader {
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
.commentContent {
  padding: 15px 0;
  .container {
    width: $containerWidth;
    margin: 0 auto;
    ul {
      li {
        margin: 10px 0 0px;
        background-color: #fff;
        border-bottom: 1px solid darkred;
        padding-bottom: 15px ;
        padding-top: 5px;
        &:nth-child(1) {
          i {
            color: #ff0000;
          }
        }
        &:nth-child(2){
            i{
                color: green;
            }
        }
        &:nth-child(3){
            i{
                color: grey;
            }
        }
        .user {
          &::after {
            content: "";
            display: block;
            clear: both;
          }
          .userIcon {
            float: left;
            width: 20%;
            i {
              font-size: 40px;
            }
          }
          .others {
            float: left;
            width: 80%;
            .timeAndSize {
              margin-top: 2%;
              font-size: 12px;
              color: grey;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              span {
                &:nth-child(2) {
                  display: inline-block;
                  margin-left: 8px;
                  margin-right: 8px;
                  width: 1px;
                  height: 14px;
                  background: grey;
                }
              }
            }
          }
        }
        .content {
          padding: 7px 4px;
          font-size: 14px;
          p {
            line-height: 18px;
          }
        }
        .count{
            p{
                font-size: 10px;
                color: grey;
                span{
                    font-size: 12px;
                }
            }
        }
      }
    }
  }
}
</style>