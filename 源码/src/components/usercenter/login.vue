<template>
  <div class="bg animated fadeInUp">
    <header class="loginHeader">
      <van-row type="flex" justify="space-between">
        <van-col span="3" @click="back">
          <van-icon name="cross" />
        </van-col>
        <van-col span="12"></van-col>
        <van-col span="3"></van-col>
      </van-row>
    </header>
    <div class="loginText">
      <p>登录</p>
      <p>商城账号</p>
    </div>
    <div class="toLogin">
      <div class="container">
        <div class="typePhoneNum">
          <input type="text" placeholder="请输入用户名" v-model="username" name="username"/>
        </div>
        <div class="typepassword">
          <input type="text" placeholder="请输入密码" v-model="password" name="password"/>
          <van-icon name="closed-eye" />
        </div>
        <div class="loginBtn">
          <van-button @click="login" round type="info">登录</van-button>
        </div>
      </div>
    </div>
    <div class="moreFunc">
      <div class="container">
        <div class="register" @click="toRegister">
          <a href="#">新用户注册</a>
        </div>
        <div class="forgetPassword">
          <a href="#">忘记密码</a>
        </div>
      </div>
    </div>
    <div class="servicePhone">
      <p>如登录遇到异常，请联系客服电话 400-920-9299</p>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  data() {
    return {
      username: "",
      password: "",
      haveLogin: null
    };
  },
  methods: {
    back() {
      // window.history.back();
      this.$router.push('/home');
    },
    toRegister() {
      this.$router.push("/register");
    },
    //用户登录，并跳到首页
    login() {
      // let existedUserName = localStorage.getItem("username");
      // let existedPassWord = localStorage.getItem("password");
      // if (this.userName == "") {
      //   Toast("请输入用户名！");
      // } else if (this.assword == "") {
      //   Toast("请输入用户密码！");
      //   return;
      // }
      // if (
      //   existedUserName == this.username &&
      //   existedPassWord == this.password
      // ) {
      //   Toast("登录成功！");
      //   localStorage.setItem("haveLogin", true);
      //   this.$router.push("/home");
      // }
      //  else if (existedUserName != this.username) {
        // Toast("用户名错误！");
      // } else if (
        // existedUserName == this.username &&
        // existedPassWord != this.password
      // ) {
        // Toast("密码错误！");
      // }
      this.$axios.get("http://127.0.0.1:3000/login",{
        params:{
          username: this.username,
          password: this.password,
        }
      }).then(res=>{
        console.log(res.data);
        if(res.data == '201'){
          Toast('登录失败，请重新登录');
        }
        if(res.data.code == "200"){
          this.$store.commit('setUsername',res.data.result.username);
          Toast("登录成功");
          this.$router.push('/home');
        }
        // console.log("登录成功");
        // Toast("登录成功！");
        // this.$router.push("/home");
      })
    }
  },
  mounted() {
    this.$store.state.tabbarShow = false;
  },
  beforeDestroy() {
    this.$store.state.tabbarShow = true;
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
  }
};
</script>

<style lang="scss" scoped>
$containerWidth: 82%;
.bg {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.loginHeader {
  height: 48px;
  background-color: #fff;
  box-shadow: 1px 0 10px #ccc;
  .van-col {
    height: 48px;
    margin-left: 10px;
    line-height: 50px;
    text-align: center;
    &:nth-child(1) {
      font-size: 22px;
      line-height: 54px;
      font-weight: bold;
      color: rgba(127, 0, 25, 1);
    }
  }
}
.loginText {
  width: 75%;
  margin: 40px auto 20px;
  p {
    padding: 5px 0;
    font-size: 20px;
    font-weight: bold;
  }
}
.toLogin {
  .container {
    width: $containerWidth;
    margin: 0 auto;
    .typePhoneNum {
      width: 100%;
      height: 44px;
      background-color: #f2f2f2;
      border-radius: 26px;
      input {
        height: 20px;
        margin-left: 26px;
        margin-top: 12px;
        background-color: #f2f2f2;
      }
    }
    .typepassword {
      position: relative;
      width: 100%;
      height: 44px;
      margin-top: 18px;
      background-color: #f2f2f2;
      border-radius: 26px;
      input {
        height: 20px;
        margin-left: 26px;
        margin-top: 12px;
        background-color: #f2f2f2;
      }
      .van-icon {
        position: absolute;
        top: 3px;
        right: 20px;
        padding-top: 10px;
        color: #adadad;
        font-size: 20px;
      }
    }
    .loginBtn {
      width: 100%;
      height: 44px;
      margin-top: 18px;
      .van-button {
        width: 100%;
        height: 44px;
        background-color: #7f001a;
        border: 0;
      }
    }
  }
}
.moreFunc {
  margin-top: 18px;
  &::after {
    content: "";
    display: block;
    clear: both;
  }
  .container {
    width: 74%;
    margin: 0 auto;
    .register {
      float: left;
      a {
        color: #78befb;
        font-size: 12px;
      }
    }
    .forgetPassword {
      float: right;
      a {
        color: #78befb;
        font-size: 12px;
      }
    }
  }
}
.servicePhone {
  position: absolute;
  bottom: 20px;
  left: 50%;
  width: 70%;
  margin-left: -112px;
  p {
    text-align: center;
    line-height: 20px;
    font-size: 14px;
    color: #78befb;
  }
}
</style>