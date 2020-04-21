<template>
  <div class="bg">
    <header class="editPasswordHeader">
      <van-row type="flex" justify="space-between">
        <van-col span="3" @click="back">
          <van-icon name="arrow-left" />
        </van-col>
        <van-col span="12">设置</van-col>
        <van-col span="3"></van-col>
      </van-row>
    </header>
    <div class="editArea">
      <van-field v-model="oldPassword" type="text" label="旧密码" placeholder="请输入旧密码" />
      <van-field v-model="password" type="text" label="密码" placeholder="请输入8-16位英文，数字组合密码" />
      <van-field v-model="confirmPassword" type="text" label="确认密码" placeholder="请再一次确认密码" />
    </div>
    <div class="confirmBtn" @click="change">确定</div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      oldPassword: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    back() {
      window.history.back();
    },
    change() {
      // console.log(this.password);
      // console.log(this.confirmPassword);
      // if (this.password == localStorage.getItem("userPassword")) {
      //   Toast("新密码不能与旧密码相同");
      // } else if (this.password == "") {
      //   Toast("请输入密码");
      // } else if (this.confirmPassword == "") {
      //   Toast("请确认密码");
      // } else if (this.password != this.confirmPassword) {
      //   Toast("请输入正确的新密码");
      // } else {
      //   localStorage.removeItem("userPassword");
      //   localStorage.setItem("userPassword", this.password);
      //   Toast("修改成功！请重新登录");
      //   this.$router.push("/login");
      // }
      Toast("1");
      this.$axios.get("/editPassword",{
        params:{
          oldPassword:this.oldPassword,
          password: this.password,
          confirmPassword: this.confirmPassword,
        }
      }).then(req=>{
        if(req.data == "201"){
          Toast("请输入正确的旧密码");
        }else if(req.data == "202"){
          Toast("新密码不能与旧密码相同");
        }else if(req.data == "203"){
          Toast("请确保两次输入的密码相同");
        }else if(req.data == "200"){
          Toast("修改成功，请重新登录");
          this.$router.push("/login");
        }
      })
    }
  },
  created() {
    this.$store.state.tabbarShow = false;
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
.editPasswordHeader {
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
.editArea {
  margin-top: 10px;
}
.confirmBtn {
  margin: 20px auto 0;
  width: 90%;
  height: 44px;
  line-height: 44px;
  background-color: #7f0019;
  border-radius: 20px;
  color: #fff;
  font-size: 16px;
  text-align: center;
}
</style>