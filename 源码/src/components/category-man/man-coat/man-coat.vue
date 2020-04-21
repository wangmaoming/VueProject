<template>
  <div>
    <div class="subnav">
      <div class="container">
        <ul>
          <li>综合排序</li>
          <li>按新品</li>
          <li>按销量</li>
          <li>按价格</li>
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
ul {
  list-style: none;
}
.bg {
  // margin-bottom: 50px;
}
.subnav {
  height: 30px;
  border-bottom: 1px solid #e5e5e5;
  .container {
    width: $containerWidth;
    margin: 0 auto;
    ul {
      li {
        &:nth-child(1) {
          margin-left: 9px;
        }
        float: left;
        width: 20%;
        // margin-bottom: 10px;
        line-height: 30px;
        text-align: center;
        font-size: 14px;
        color: darkgrey;
      }
    }
  }
}
</style>