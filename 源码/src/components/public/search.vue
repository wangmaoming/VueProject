<template>
  <div class="bg animated fadeInUp">
    <div class="searchInput">
      <form action="/">
        <van-search
          v-model="value"
          show-action
          placeholder="请输入搜索关键词"
          @input="oninput"
          @cancel="onCancel"
        />
      </form>
      <ul class="searchResult">
        <li v-for="(item,index) in searchResult" :key="index" @click="toGoodsDetail">{{item[0]}}</li>
      </ul>
    </div>
    <div class="historySearch" v-show="!hideHotSearch">
      <div class="container">
        <div class="historyHeader">
          <p>历史搜索</p>
          <div>
            <van-icon name="delete" />
          </div>
        </div>
        <div class="historyContent">
          <van-tag @click="toGoodsDetail" color="#830720" round plain size="large">男装</van-tag>
          <van-tag color="#830720" round plain size="large">女装</van-tag>
          <van-tag color="#830720" round plain size="large">鞋包</van-tag>
          <van-tag color="#830720" round plain size="large">美食</van-tag>
          <van-tag color="#830720" round plain size="large">我的个人中心</van-tag>
          <van-tag color="#830720" round plain size="large">2019流行男装</van-tag>
        </div>
      </div>
    </div>
    <div class="hotSearch" v-show="!hideHotSearch">
      <div class="container">
        <div class="hotHeader">
          <p>
            <i class="iconfont icon-huangguan"></i>
            <span>热搜榜</span>
          </p>
        </div>
        <div class="hotContent">
          <ul>
            <li @click="toGoodsDetail">
              <p class="num">1</p>
              <p class="text">
                男装服饰
                <span>30990</span>
                <i class="iconfont icon-tubiao03" style="color: red;font-size:18px;"></i>
              </p>
              <div class="icon">
                <van-tag type="warning">热</van-tag>
              </div>
            </li>
            <li>
              <p class="num">2</p>
              <p class="text">
                男装皮鞋
                <span>29902</span>
                <i class="iconfont icon-tubiao04" style="color: red;font-size:18px;"></i>
              </p>
              <div class="icon">
                <van-tag type="danger">爆</van-tag>
              </div>
            </li>
            <li>
              <p class="num">3</p>
              <p class="text">
                女士连衣裙
                <span>26400</span>
              </p>
              <div class="icon">
                <van-tag type="primary">新</van-tag>
              </div>
            </li>
            <li>
              <p class="num">4</p>
              <p class="text">
                童装
                <span>20000</span>
                <i class="iconfont icon-tubiao03" style="color: red;font-size:18px;"></i>
              </p>
              <div class="icon">
                <van-tag type="primary">新</van-tag>
              </div>
            </li>
            <li>
              <p class="num">5</p>
              <p class="text">
                女士鞋包
                <span>17900</span>
              </p>
              <div class="icon">
                <van-tag type="warning">热</van-tag>
              </div>
            </li>
            <li>
              <p class="num">6</p>
              <p class="text">
                咖啡包
                <span>13442</span>
              </p>
              <div class="icon">
                <!-- <van-tag type="danger">热</van-tag> -->
              </div>
            </li>
            <li>
              <p class="num">7</p>
              <p class="text">
                床单
                <span>12203</span>
                <i class="iconfont icon-tubiao04" style="color: red;font-size:18px;"></i>
              </p>
              <div class="icon">
                <van-tag type="warning">热</van-tag>
              </div>
            </li>
            <li>
              <p class="num">8</p>
              <p class="text">
                棉花糖
                <span>11109</span>
              </p>
              <div class="icon">
                <!-- <van-tag type="danger">热</van-tag> -->
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { Toast } from "vant";

export default {
  data() {
    return {
      value: "",
      searchResult: [],
      hideHotSearch: false
    };
  },
  methods: {
    oninput(val) {
      let node = document.createElement("script");
      node.src =
        "https://suggest.taobao.com/sug?code=utf-8&q=" +
        val +
        "&callback=" +
        this.func;
      // document.appendChild(node);
      this.$jsonp("https://suggest.taobao.com/sug", {
        code: "utf-8",
        q: this.value
      }).then(res => {
        // console.log(res.result);
        this.searchResult = res.result;
      });
    },
    onCancel() {
      //   Toast("取消");
      this.$router.push("/home");
    },
    toGoodsDetail() {
      this.$router.push("/goodsdetail");
    }
  },
  mounted() {
    this.$store.state.tabbarShow = false;
  },
  beforeUpdate() {
    if (this.value == "" || this.searchResult.length <= 0) {
      this.hideHotSearch = false;
    } else if (this.value != "") {
      this.hideHotSearch = true;
    }
  },
  beforeDestroy() {
    this.$store.state.tabbarShow = true;
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
}
.searchInput {
  .searchResult {
    position: absolute;
    z-index: 1000;
    top: 43px;
    // left: 10%;
    width: 100%;
    li {
      height: 20px;
      width: 100%;
      padding: 10px 0;
      text-indent: 1em;
      line-height: 20px;
      background-color: #fff;
      border-bottom: 1px solid lightgrey;
    }
  }
}
.historySearch {
  min-height: 30px;
  padding: 10px 0 0;
  background-color: #fff;
  .container {
    width: $containerWidth;
    margin: 0 auto;
    .historyHeader {
      height: 30px;
      p {
        float: left;
        font-size: 18px;
        font-weight: bold;
      }
      div {
        float: right;
        font-size: 18px;
      }
    }
    .historyContent {
      padding-bottom: 10px;
      .van-tag {
        height: 25px;
        padding: 0 10px;
        margin: 0 3px 10px;
      }
    }
  }
}
.hotSearch {
  .container {
    border: 1px solid #830720;
    border-radius: 15px;
    width: $containerWidth;
    margin: 0 auto;
    .hotHeader {
      height: 30px;
      padding: 10px 10px 10px;
      line-height: 30px;
      i {
        font-size: 24px;
        color: orange;
      }
      span {
        margin-left: 10px;
        font-size: 18px;
        font-weight: bold;
        color: darkred;
      }
    }
    .hotContent {
      padding: 10px 15px 20px;
      background-color: #fff;
      border-radius: 20px;
      li {
        width: 100%;
        height: 40px;
        padding: 10px 0;
        line-height: 40px;
        border-bottom: 1px solid #ccc;
        &::after {
          content: "";
          display: block;
          clear: both;
        }
        .num {
          float: left;
          margin-right: 10px;
          font-size: 16px;
          font-weight: bold;
          color: darkblue;
        }
        .text {
          float: left;
          letter-spacing: 1px;
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          span {
            margin-left: 10px;
            font-size: 14px;
            color: #ccc;
          }
        }
        .icon {
          float: right;
        }
        &:nth-child(1) {
          .num {
            font-size: 22px;
            color: red;
          }
          .text {
            font-size: 16px;
            font-weight: bold;
            // color: red;
          }
        }
        &:nth-child(2) {
          .num {
            font-size: 16px;
            color: yellow;
          }
          .text {
            font-size: 16px;
            font-weight: bold;
          }
        }
        &:nth-child(3) {
          .num {
            font-size: 16px;
            color: blue;
          }
          .text {
            // font-size: 16px;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>
