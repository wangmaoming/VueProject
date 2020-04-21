<template>
  <div>
    <!-- 订单遍历 -->
    <div v-for="(item,index) in list" :key="index">
      <van-panel :title="'订单：'+item.orderId" :status="typeList[item.type]" v-if="item.type == 3">
        <!-- 商品遍历 -->
        <div v-for="(value,key) in item.goodsList" :key="key">
          <van-card
            :num="value.mount"
            :price="value.singlePrice"
            desc="描述信息"
            :title="value.goodsName"
            :thumb="value.src"
          />
        </div>
        <!-- 待支付 -->
        <!-- 评价商品 -->
        <div slot="footer" class="van-panel-footer">
          <van-button size="small" @click="hadCommented">商品评价</van-button>
        </div>
        <van-action-sheet v-model="show" title="标题">
          <div class="content">
            <van-field
              v-model="message"
              rows="10"
              autosize
              label="评价"
              type="textarea"
              maxlength="50"
              placeholder="请输入评价"
              show-word-limit
            />
            <div @click="upload(item.orderId)" class="btn">提交</div>
          </div>
        </van-action-sheet>
      </van-panel>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      list: [],
      typeList: [], //订单状态
      show: false,
      message: ""
    };
  },
  methods: {
    hadCommented() {
      this.show = true;
    },
    upload(orderId) {
      //将商品状态切换成已评价
      let index = this.list.findIndex(item => item.orderId == orderId);
      this.list[index].type = 4;
      this.list[index].goodsComment = this.message;
      // console.log(this.list[index].goodsComment)
      Toast("成功评价！");
      this.show = false;
    }
  },
  created() {
    let dataList = this.$store.state.order.list;
    this.list = dataList.filter(item => item.type == 3);
  },
  beforeDestroy() {
    //动态的修改vuex中order.js的list数据
    if (this.list.length) {
      this.$store.commit("order/editId", this.list);
    }
  }
};
</script>

<style lang="scss" scoped>
.van-panel-footer {
  text-align: right;
}
.content{
  .btn{
    height: 44px;
    text-align: center;
    line-height: 44px;
    background-color: #7e0018;
    color: #fff;
  }
}
</style>