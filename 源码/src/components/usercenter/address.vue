<template>
  <div class="bg">
    <header class="addressHeader">
      <van-row type="flex" justify="space-between">
        <van-col span="3" @click="back">
          <van-icon name="arrow-left" />
        </van-col>
        <van-col span="12">我的收货地址</van-col>
        <van-col span="3"></van-col>
      </van-row>
    </header>
    <!-- 地址列表 -->
    <div class="addressList">
      <ul>
        <li v-for="(item,index) in list" :key="index">
          <div @click="toPay(item)">
            <p class="name">
              姓名：
              <span>{{item.name}}</span>
            </p>
            <p class="phoneNumber">
              联系方式：
              <span>{{item.tel}}</span>
            </p>
            <p class="addressProfile">
              详细地址：
              <span>{{item.province}}&nbsp;{{item.city}}&nbsp;{{item.county}}&nbsp;{{item.addresDetail}}</span>
            </p>
          </div>
          <div class="settings">
            <div class="defaultAddress">
              <div><input type="checkbox" @click="setDefault(item.id)" checked-color="#7f0019" v-model="item.isDefault"></div>
              <p>设为默认地址</p>
              <!-- <van-checkbox icon-size="14px" @click="setDefault(item.id)" checked-color="#7f0019" v-model="defaultAd">设为默认地址</van-checkbox> -->
            </div>
            <div class="editAndDelete">
              <div @click="editAddress(item)" class="edit">
                <van-icon name="records" />
                <span>编辑</span>
              </div>
              <div @click="deleteAddress(item.id)" class="delete">
                <van-icon name="delete" />
                <span>删除</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 已加载全部 -->
    <div class="loadedAll">
      <p>已加载全部</p>
    </div>
    <!-- 添加按钮 -->
    <div class="addAddress">
      <div class="container">
        <van-button @click="addAddress" color="#7f0019" round type="info">新增收货地址</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("address");
export default {
  data() {
    return {
      checked: null,
      list: [],
      defaultAd: 0,
    };
  },
  methods: {
    back() {
      if (this.$store.state.address.fromWhere == "/usercenter") {
        this.$router.push("/usercenter");
      } else if (this.$store.state.address.fromWhere == "/pay") {
        this.$router.push("/pay");
      } else {
        window.history.back();
      }
    },
    //添加地址
    addAddress() {
      this.$router.push("/addAddress");
    },
    //修改地址
    editAddress(item) {
      this.$router.push({ path: "/editAddress", query: { id: item.id } });
    },
    //删除地址
    deleteAddress(id) {
      this.$store.commit("address/delete", id);
    },
    //点击地址栏跳回订单页面
    toPay(item) {
      //item.id为数据的id
      // console.log(item);
      this.$router.push({ path: "/pay", query: { index: item.id } });
    },
    setDefault(id){
      this.$store.commit('address/setDefault',id)
    }
  },
  computed: {
    ...mapState({
      addressList: state => state.addressList
    })
  },
  created() {
    this.$store.state.tabbarShow = false;
    this.list = this.addressList; //获取vuex中的地址数据
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
  // margin-bottom: 50px;
  background-color: #f1f1f1;
}
.addressHeader {
  height: 48px;
  background-color: #fff;
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
      line-height: 52px;
      font-size: 24px;
      text-indent: -5px;
    }
  }
}
.addressList {
  margin-top: 10px;
  padding: 15px 30px;
  background-color: #fff;
  ul {
    li {
      &:nth-child(n + 2) {
        margin-top: 50px;
      }
      .name {
        padding: 5px 0;
        font-size: 16px;
        span {
          font-weight: bold;
        }
      }
      .phoneNumber {
        padding: 5px 0;
        font-size: 14px;
      }
      .addressProfile {
        padding: 5px 0 20px;
        font-size: 14px;
      }
      .settings {
        padding-bottom: 10px;
        border-bottom: 1px solid #ccc;
        &::after {
          content: "";
          display: block;
          clear: both;
        }
        .defaultAddress {
          float: left;
          font-size: 14px;
          margin-top: 4px;
          &::after{
            content:'';
            display: block;
            clear: both;
          }
          div{
            float: left;
            width: 15px;
            height: 15px;
            input{
              width: 100%;
              height: 100%;
            }
          }
          p{
            float: left;
          }
        }
        .editAndDelete {
          &::after {
            content: "";
            display: block;
            clear: both;
          }
          float: right;
          .edit {
            float: left;
            position: relative;
            width: 45px;
            margin-right: 15px;
            .van-icon {
              font-size: 20px;
            }
            span {
              position: absolute;
              top: 4px;
              right: -2px;
              font-size: 14px;
            }
          }
          .delete {
            float: left;
            position: relative;
            width: 45px;
            .van-icon {
              font-size: 20px;
            }
            span {
              position: absolute;
              top: 4px;
              right: -2px;
              font-size: 14px;
            }
          }
        }
      }
    }
  }
}
.loadedAll {
  padding: 10px 0;
  p {
    text-align: center;
    font-size: 12px;
    color: darkgrey;
  }
}
.addAddress {
  position: absolute;
  bottom: 20px;
  left: 50%;
  margin-left: -45%;
  width: 90%;
  .container {
    width: 100%;
    .van-button {
      width: 100%;
    }
  }
}
</style>