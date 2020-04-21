<template>
  <div class="bg">
    <header class="settingsHeader">
      <van-row type="flex" justify="space-between">
        <van-col span="3" @click="back">
          <van-icon name="arrow-left" />
        </van-col>
        <van-col span="12">设置</van-col>
        <van-col span="3">
          <!-- <van-icon name="shopping-cart-o" /> -->
        </van-col>
      </van-row>
    </header>
    <!-- <section class="usermsg">
      <div class="container">
        <div class="header">用户信息</div>
      </div>
      <div class="birthdayAndSex" @click="toBirthday">
        <div class="container">
          <p>生日 / 性别</p>
          <div>
            <van-icon name="arrow" />
          </div>
        </div>
      </div>
    </section>-->
    <section class="safety">
      <div class="container">
        <div class="header">账号与安全</div>
      </div>
      <div class="setLoginPassword" @click="toEditPassword">
        <div class="container">
          <p>设置登录密码</p>
          <div>
            <van-icon name="arrow" />
          </div>
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
  methods: {
    back() {
      window.history.go(-1);
      // console.log(window.history);
    },
    toEditPassword() {
      this.$router.push("/editPassword");
    }
  },
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
  }
};
</script>

<style lang="scss" scoped>
$containerWidth: 90%;
.bg {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #f1f1f1;
}
.settingsHeader {
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
.usermsg {
  margin-top: 20px;
  .container {
    width: $containerWidth;
    margin: 0 auto;
    .header {
      font-weight: bold;
      font-size: 20px;
    }
  }
  .birthdayAndSex {
    width: 100%;
    height: 40px;
    margin-top: 10px;
    line-height: 40px;
    background-color: #fff;
    font-size: 14px;
    &::after {
      content: "";
      display: block;
      clear: both;
    }
    .container {
      width: $containerWidth;
      margin: 0 auto;
      p {
        float: left;
      }
      div {
        float: right;
      }
    }
  }
}
.safety {
  margin-top: 10px;
  padding-top: 10px;
  background-color: #fff;
  .container {
    width: $containerWidth;
    margin: 0 auto;
    .header {
      font-weight: bold;
      font-size: 20px;
    }
  }
  .setLoginPassword {
    width: 100%;
    height: 40px;
    margin-top: 10px;
    line-height: 40px;
    background-color: #fff;
    font-size: 14px;
    &::after {
      content: "";
      display: block;
      clear: both;
    }
    .container {
      width: $containerWidth;
      margin: 0 auto;
      p {
        float: left;
      }
      div {
        float: right;
      }
    }
  }
}
.recommendMore {
  margin-top: 20px;
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