<template>
  <div class="bg">
    <header class="aboutUsHeader">
      <van-row type="flex" justify="space-between">
        <van-col span="3" @click="back">
          <van-icon name="arrow-left" />
        </van-col>
        <van-col span="12">关于我们</van-col>
        <van-col span="3"></van-col>
      </van-row>
    </header>
    <div class="companyIdea">
      <div class="container">
        <h1>HALSTEAD 理念</h1>
        <p>以“物有所值”为宗旨并研发出各种价廉物美商品的印良品。是1980年由株式会社良品计划的母公司株式会社西友基于自身的开发经验，根据【无商标】的商品构思而诞生的。商品开发的本质是，以真正必要的方式制造生活中基本的并真正需要的产品。因此，奈印良品重新选择了原材料，改善了生产工艺，并简化了包装。此方针符合时代的审美观，简约优美的商品长久以来广受喜爱。</p>
      </div>
    </div>
    <div class="globalShop">
      <div class="container">
        <h1>HALSTEAD 目标</h1>
        <p>目前，除了中国内地，我们正在拓展海外市场，拟打造一个跨境的购物平台</p>
      </div>
      <div class="echarts1" ref="myCharts"></div>
      <div class="container">
          <p class="more">在拓展业务的同时，保证产品的质量也是我们的十分关注的，HALSTEAD对其产品的整个生产流程都进行品编用南够素验，仅保留必的生产工序而省略了和产品本质无关的多编的必信程（比如统一尺寸的分选和光泽加工），国此那些原丰由于瓶格外尺寸或用形状不住等原度而被委弃的原材料也能制适或产品，这才是充分利用原材料，降低产品成本的讲充亮际的产品制诺。</p>
      </div>
      <div class="echarts2" ref="myCharts2"></div>
      <p class="goodComment">2008-2019商品好评数量</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      history.back();
    }
  },
  mounted() {
    this.$store.state.tabbarShow = false;
    console.log(this.$refs.myCharts)
    const myCharts = this.$echarts.init(this.$refs.myCharts);
    const myCharts2 = this.$echarts.init(this.$refs.myCharts2);
    console.log(this.$refs.myCharts2)
    let option = {
      // backgroundColor: "rgba(171, 180, 154,.7)",

      title: {
        text: "全球门店",
        left: "center",
        top: 20,
        textStyle: {
          color: "#333"
        }
      },

      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },

      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1]
        }
      },
      series: [
        {
          name: "",
          type: "pie",
          radius: "55%",
          center: ["50%", "50%"],
          data: [
            { value: 185, name: "东亚及大洋洲" },
            { value: 170, name: "北美地区" },
            { value: 100, name: "欧洲" },
            { value: 150, name: "中东地区" },
            { value: 200, name: "中国大陆" }
          ].sort(function(a, b) {
            return a.value - b.value;
          }),
          roseType: "radius",
          label: {
            color: "#333"
          },
          labelLine: {
            lineStyle: {
              color: "#333"
            },
            smooth: 0.2,
            length: 10,
            length2: 20
          },
          itemStyle: {
            // color: "#c23531",
            color: "pink",
            shadowBlur: 200,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          },

          animationType: "scale",
          animationEasing: "elasticOut",
        }
      ]
    };
    let option2 = {
    xAxis: {
        type: 'category',
        data: ['2008', '2010', '2012', '2014', '2016', '2018', '2019']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
};
    myCharts2.setOption(option2);
    myCharts.setOption(option);
  }
};
</script>

<style lang="scss" scoped>
.bg {
  position: absolute;
  top: 0;
  left: 0;
  height: 1200px;
  width: 100%;
  // background-image: url("https://hbimg.huabanimg.com/c09c991ccf719e27a96e0504291ed6b66e17152b485fa-a21dCT_fw658");
  // background-size: 200%;
  // background-repeat: no-repeat;
}
.aboutUsHeader {
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
      margin-right: 10px;
      font-size: 16px;
      color: #7f0019;
    }
  }
}
.companyIdea {
  .container {
    width: 90%;
    margin: 0 auto;
    h1 {
      margin-top: 30px;
      font-size: 24px;
      font-weight: bold;
      color:rgba(127, 0, 25, 1);
    }
    p {
      margin-top: 10px;
      text-indent: 2em;
      line-height: 24px;
    }
  }
}
.globalShop {
  .container {
    width: 90%;
    margin: 0 auto;
    h1 {
      margin-top: 50px;
      font-size: 24px;
      font-weight: bold;
      color:rgba(127, 0, 25, 1);
    }
    p {
      margin-top: 10px;
      text-indent: 2em;
      line-height: 24px;
    }
  }
  .echarts1{
      height: 300px;
      margin-top: 10px;
  }
  .more{
      padding: 5px 5px;
      line-height: 24px;
      // background-color: rgba(170, 178, 153);
  }
  .echarts2{
    margin-left: 10px;
      margin-top: -40px;
      height: 300px;
      width: 365px;
  }
  .goodComment{
      margin-top: -30px;
      text-align: center;
      font-size: 18px;
      font-weight: bold;
      letter-spacing: 1px;
  }
}
</style>