<template>
  <div class="bg animated fadeInUp">
    <header class="registerHeader">
      <van-row type="flex" justify="space-between">
        <van-col span="3" @click="back">
          <van-icon name="cross" />
        </van-col>
        <van-col span="12"></van-col>
        <van-col span="3"></van-col>
      </van-row>
    </header>
    <div class="registerText">
      <p>注册</p>
      <p>商城账号</p>
    </div>
    <div class="toRegister">
      <div class="container">
        <div class="typePhoneNum">
          <input type="text" placeholder="输入用户名" v-model="username" name="username" />
        </div>
        <div class="typepassword">
          <input type="text" placeholder="输入密码" v-model="password" name="password" />
          <!-- <van-icon name="closed-eye" /> -->
        </div>
        <div class="confirmpassword">
          <input type="text" placeholder="再次确认密码" v-model="password2" name="password2" />
          <!-- <van-icon name="closed-eye" /> -->
        </div>
        <div class="loginBtn">
          <van-button @click="saveAccount" round type="info">马上注册</van-button>
        </div>
      </div>
    </div>
    <div class="moreFunc">
      <div class="container">
        <div class="login" @click="toLogin">
          <div href="#">
            已有账号？
            <span>马上登录</span>
          </div>
        </div>
      </div>
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
      password2: ""
    };
  },
  methods: {
    back() {
      window.history.back();
    },
    //跳到登录页
    toLogin() {
      this.$router.push("/login");
    },
    //存储用户并跳到登录页
    saveAccount() {
      // localStorage.setItem('username',this.username);
      // localStorage.setItem('password',this.password);
      if (this.username == "") {
        Toast("用户名不能为空");
        return;
      } else if (this.password == "") {
        Toast("用户密码不能为空");
        return;
      } else if (this.password != this.password2) {
        Toast("请输入与密码相同的确认密码");
        return;
      } else {
        this.$axios
          .get("http://127.0.0.1:3000/register", {
            params: {
              username: this.username,
              password: this.password,
              password2: this.password2
            }
          })
          .then(res => {
            // console.log(res.data);
            if (res.data.code == "200") {
              Toast("注册成功");
              this.$router.push("/login");
            } else {
              Toast("注册失败，请重新注册");
            }
          });
      }
      // this.$router.push("/login");
    }
  },
  mounted() {
    this.$store.state.tabbarShow = false;
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
.registerHeader {
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
.registerText {
  width: 75%;
  margin: 40px auto 20px;
  p {
    padding: 5px 0;
    font-size: 20px;
    font-weight: bold;
  }
}
.toRegister {
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
    .confirmpassword {
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
    .login {
      float: left;
      div {
        color: darkgrey;
        font-size: 12px;
        span {
          color: #78befb;
        }
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
</style>