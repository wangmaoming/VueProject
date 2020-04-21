<template>
  <div class="bg">
    <categoryheader></categoryheader>
    <!-- <categorynav></categorynav> -->
    <cube-scroll
      ref="scroll"
      :data="items"
      direction="horizontal"
      class="horizontal-scroll-list-wrap"
    >
      <ul class="list-wrapper">
        <li
          @click="jumpTo(index)"
          v-for="(item,index) in items"
          style="width:70px;text-align:center;"
          :key="index"
          class="list-item"
        >{{ item }}</li>
      </ul>
    </cube-scroll>
    <router-view></router-view>
  </div>
</template>

<script>
import categoryheader from "./categoryheader.vue";
// import categorynav from '../components/goodscategory-man/categorynav.vue'
export default {
  data() {
    return {
      items: ["全部", "针织衫", "T恤-罩衫", "衬衫", "外套"]
    };
  },
  methods: {
    jumpTo(index) {
      if (index == 0) {
        this.$router.push({
          path: `/goodscategoryman`
        });
      }else if(index > 0){
        this.$router.push({
          path: `/goodscategoryman/goodscategoryman${index+1}`
        })
      }
    }
  },
  components: {
    categoryheader
  },
  created() {
    this.$store.state.tabbarShow = false;
  },
  destroyed() {
    this.$store.state.tabbarShow = true;
  },
  beforeRouteLeave(to, from, next) {
    if (to.path == "/home") {
      this.$store.state.active = 0;
    }
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
  },
};
</script>

<style lang="scss" scoped>
</style>

<style lang="stylus" rel="stylesheet/stylus">
.horizontal-scroll-list-wrap {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  height: 30px;
  font-size: 14px;

  .cube-scroll-content {
    display: inline-block;
  }

  .list-wrapper {
    padding: 0 10px;
    line-height: 30px;
    white-space: nowrap;
  }

  .list-item {
    display: inline-block;
  }
}
</style>