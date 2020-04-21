<template>
  <div class="bg">
    <div class="content">
      <h5>广告{{num}}</h5>
      <div class="pic">
        <img src="../../assets/advert/advert3.jpg" alt />
      </div>
      <p>青岛银座商城旗舰店</p>
      <p><span>12月27日</span> 盛大开业</p>
      <p>详情敬请留意首页</p>
      <div @click="skip" class="skip">
        跳过
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 3,
      timer: null
    };
  },
  methods: {
    skip(){
      this.$router.push('/home');
    }
  },
  created() {
    this.$store.state.tabbarShow = false;
    this.timer = setInterval(() => {
      this.num--;
      if (this.num == 0) {
        this.$router.push("/home");
      }
    }, 1000);
  },
  destroyed() {
    // 当组件被销毁时候，修改导航数据
    this.$store.state.tabbarShow = true;
  },
  //销毁生命周期函数之前停止定时器
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>

<style lang="scss" scoped>
.bg{
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.content {
  height: 100%;
  overflow: hidden;
  h5 {
    position: absolute;
  }
  .pic {
    width: 100%;
    height: 100%;
    text-align: center;
    img {
      height: 100%;
      width: 350%;
    }
  }
  p{
    position: absolute;
    font-size: 30px;
    color: #fff;
    font-weight: bold;
    letter-spacing: 4px;
    &:nth-child(3){
      left: 5%;
      top: 25%;
    }
    &:nth-child(4){
      margin-top: 10px;
      left: 5%;
      top: 30%;
      span{
        font-size: 40px;
        font-weight: bold;
        color:darkorange;
      }
    }
    &:nth-child(5){
      position: absolute;
      right: 3%;
      top: 40%;
      font-size: 12px;
      color: lightblue;
      letter-spacing: 2px;
    }
  }
}
.skip{
  position: absolute;
  bottom: 0;
  right: 0;
  width: 14%;
  text-align: center;
  border: 1px solid black;
  border-radius: 10px;
}
</style>