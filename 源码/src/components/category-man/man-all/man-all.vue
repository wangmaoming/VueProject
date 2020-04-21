<template>
  <div class="bg">
    <div class="subnav">
      <div class="container">
        <ul>
          <router-link tag="li" to="/goodscategoryman">综合排序</router-link>
          <router-link tag="li" to="/goodscategoryman/new">按新品</router-link>
          <router-link tag="li" to="/goodscategoryman/saleMount">按销量</router-link>
          <router-link tag="li" to="/goodscategoryman/price">按价格</router-link>
          <!-- <li>按新品</li> -->
          <!-- <li>按销量</li> -->
          <!-- <li>按价格</li> -->
        </ul>
      </div>
    </div>
  <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$containerWidth: 90%;
ul{
  list-style: none;
}
.bg{
  // margin-bottom: 50px;
}
.subnav{
  height: 30px;
  border-bottom: 1px solid #e5e5e5;
  .container{
    width: $containerWidth;
    margin: 0 auto;
    ul{
      li{
        &:nth-child(1){
          margin-left: 9px;
        }
        float: left;
        width:20%;
        line-height: 30px;
        text-align: center;
        font-size: 14px;
        color: darkgrey;
      }
    }
  }
}
</style>
