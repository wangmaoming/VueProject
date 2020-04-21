<template>
  <div>
    <!-- 订单遍历 -->
    <div v-for="(item,index) in list" :key="index">
      <van-panel :title="'订单：'+item.orderId" :status="typeList[item.type]" v-if="item.type == 1">
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
        <div slot="footer" class="van-panel-footer">
          <van-button size="small" type="danger" @click="del(index)">删除订单</van-button>
          <van-button size="small" type="primary" @click="onPay(item.orderId)">支付订单</van-button>
        </div>
      </van-panel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      typeList: [] //订单状态
    };
  },
  methods: {
    onPay(orderId) {
      //将商品切换成支付后待收货。后面还要调用支付接口
      let index = this.list.findIndex(item => item.orderId == orderId);
      this.list[index].type = 2;
    },
    del(index) {
      //修改数据状态，type改为：6
      this.list[index].type = 6;
    }
  },
  created() {
    let dataList = this.$store.state.order.list;
    this.list = dataList.filter(item => item.type == 1);
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