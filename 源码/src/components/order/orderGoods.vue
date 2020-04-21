<template>
  <div>
    <!-- 订单遍历 -->
    <div v-for="(item,index) in list" :key="index">
      <van-panel :title="'订单：'+item.orderId" :status="typeList[item.type]" v-if="item.type == 2">
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
        <!-- 待收货 -->
        <div slot="footer" class="van-panel-footer">
          <van-button size="small">退款申请</van-button>
          <van-button size="small" @click="onComplete(item.orderId)">已收货</van-button>
        </div>
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
      typeList: [] //订单状态
    };
  },
  methods: {
    onComplete(orderId) {
      //将商品切换成待收货已完成
      let index = this.list.findIndex(item => item.orderId == orderId);
      this.list[index].type = 3;
      Toast("快去评价商品吧！")
    }
  },
  created() {
    let dataList = this.$store.state.order.list;
    this.list = dataList.filter(item => item.type == 2);
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
</style>