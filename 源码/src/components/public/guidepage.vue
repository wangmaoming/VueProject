<template>
  <div>
    <div class="swiper-container guidepageswiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../assets/guidepage/guidepage6.jpg" alt />
          <p class="animated rollIn" v-show="flag">闹市中的</p>
          <p v-show="flag">
            一点
            <span v-show="flag" class="animated fadeInUp delay-1s">简约</span>生活
          </p>
        </div>
        <div class="swiper-slide">
          <img class="secondbg" src="../../assets/guidepage/guidepage13.jpg" alt />
          <div class="list">
            <ul>
              <li>MUJI HOTEL</li>
              <li v-show="flag" class="animated flipInX">Shenzhen.China</li>
              <li v-show="flag" class="animated flipInX delay-1s">Beijing.China</li>
              <li v-show="flag" class="animated flipInX delay-2s">Ginza.Japan</li>
            </ul>
          </div>
        </div>
        <div class="swiper-slide">
          <img src="../../assets/guidepage/guidepage11.jpg" alt />
          <p @click="goHome">
            点击，体验
            <span>无印式</span>生活
          </p>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination guidepagepagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      timer: null,
      flag: true
    };
  },
  methods: {
    goHome() {
      this.$router.push("/home");
    }
  },
  mounted() {
    let _this = this;
    new Swiper(".guidepageswiper", {
      pagination: {
        el: ".guidepagepagination"
      },
      on: {
        slideChangeTransitionStart: function() {
          _this.flag = false;
        },
        slideChangeTransitionEnd: function() {
          _this.flag = true;
        }
      }
    });
  },
  created() {
    this.$store.state.tabbarShow = false;
  },
  destroyed() {
    // 当组件被销毁时候，修改导航数据
    this.$store.state.tabbarShow = true;
  }
};
</script>

<style lang="scss" scoped>
.swiper-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .swiper-pagination-bullet-active {
    background-color: red !important;
  }
  .swiper-slide {
    text-align: center;
    // background-color: #ccc;
    &:nth-child(1) {
      p {
        position: absolute;

        margin-left: -100px;
        // margin-top: -8px;
        font-size: 30px;
        font-weight: bold;
        color: white;
        letter-spacing: 4px;
        &:nth-child(2) {
          top: 20%;
          left: 50%;
        }
        &:nth-child(3) {
          top: 26%;
          left: 50%;
          span {
            color: brown;
            font-weight: bold;
          }
        }
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    &:nth-child(2) {
      .list {
        position: absolute;
        top: 10%;
        left: 50%;
        margin-left: -137px;
        z-index: 1000;
        ul {
          // position: relative;
          li {
            &:nth-child(1) {
              font-size: 40px;
              font-weight: bolder;
              color: #fff;
              font-family: "Verdana";
            }
            &:nth-child(n + 2) {
              width: 160px;
              height: 50px;
              margin-top: 15px;
              margin-left: 60px;
              line-height: 50px;
              background-color: rgba(70, 47, 41, 0.6);
              border: 1px solid #fff;
              text-align: center;
              color: #fff;
              letter-spacing: 2px;
              // font-weight: bolder;
            }
          }
        }
      }
      img {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
      }
    }
    &:nth-child(3) {
      img {
        width: 100%;
        height: 100%;
      }
      p {
        position: absolute;
        top: 70%;
        left: 50%;
        margin-left: -140px;
        font-weight: bold;
        font-size: 24px;
        color: #fff;
        letter-spacing: 4px;
        text-shadow: 1px 1px 0px #fff;
        span {
          font-weight: bold;
          color: grey;
        }
      }
    }
  }
}
.goHomeBtn {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -65px;
  margin-top: -15px;
  width: 130px;
  height: 30px;
  line-height: 30px;
}
</style>