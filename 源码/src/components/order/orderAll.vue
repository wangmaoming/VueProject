<template>
  <div>
    <!-- 订单遍历 -->
    <div v-for="(item,index) in list" :key="index">
      <van-panel :title="'订单：'+item.orderId" :status="typeList[item.type]">
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
        <div v-if="item.type == 1" slot="footer" class="van-panel-footer">
          <van-button size="small" type="danger" @click="deleteOrder(item.orderId)">删除订单</van-button>
          <van-button size="small" type="primary" @click="onPay(item.orderId)">支付订单</van-button>
        </div>
        <!-- 待收货 -->
        <div v-else-if="item.type == 2" slot="footer" class="van-panel-footer">
          <!-- <van-button size="small">退款申请</van-button> -->
          <van-button size="small" @click="onComplete(item.orderId)">已收货</van-button>
        </div>
        <!-- 评价商品 -->
        <div v-else-if="item.type == 3" slot="footer" class="van-panel-footer">
          <van-button size="small" @click="hadCommented">商品评价</van-button>
        </div>
        <!-- 完成评价 -->
        <div v-else-if="item.type == 4" slot="footer" class="van-panel-footer">
          <van-button size="small">已评价</van-button>
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
    onPay(orderId) {
      //将商品状态切换成支付后待收货。后面还要调用支付接口
      let index = this.list.findIndex(item => item.orderId == orderId);
      this.list[index].type = 2;
    },
    onComplete(orderId) {
      //将商品状态切换成已完成
      let index = this.list.findIndex(item => item.orderId == orderId);
      this.list[index].type = 3;
      Toast("收货成功！");
    },
    //删除订单
    deleteOrder(orderId){
      let index = this.list.findIndex(item => item.orderId == orderId);
      this.list.splice(index,1);
      this.$store.commit("order/deleteOrder",index);
      Toast("成功删除订单")
    },
    hadCommented() {
      this.show = true;
    },
    upload(orderId) {
      //将商品状态切换成已评价
      let index = this.list.findIndex(item => item.orderId == orderId);
      this.list[index].type = 4;
      this.list[index].goodsComment = this.message;
      // console.log(index)
      Toast("成功评价！");
      this.show = false;
    }
  },
  created() {
    //获取vuex的数据
    this.list = this.$store.state.order.list;
    // console.log(this.list);
    this.typeList = this.$store.state.order.typeList;
  },
  //在组件销毁之前(即将离开该组件)，把当前组件的list数据同步到vuex数据中，因为上面操作的list并不是vuex中的list，而是把vuex中的list拿出来了，放到data中，上面的操作只是views层面看到数据更新，但实际上vuex中的数据未更新，下面的代码就是为了操作之后更新vuex的数据
  //myOrder.vue要用5个路由，不能用5个组件，因为用5个组件无论切换到哪个组件，beforeDestroy都不会触发，因为5个组件同属一个大的组件，大的组件没有被销毁
  beforeDestroy() {
    //修改vuex order.js的list数据
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
.container {
  width: 90%;
  margin: 0 auto;
}
.content {
  .btn {
    height: 44px;
    text-align: center;
    line-height: 44px;
    background-color: #7e0018;
    color: #fff;
  }
}
</style>