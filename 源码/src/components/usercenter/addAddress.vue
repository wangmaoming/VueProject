<template>
  <div class="bg">
    <header class="editAddressHeader">
      <van-row type="flex" justify="space-between">
        <van-col span="3" @click="back">
          <van-icon name="arrow-left" />
        </van-col>
        <van-col span="12">管理收货地址</van-col>
        <van-col span="3"></van-col>
      </van-row>
    </header>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
    />
  </div>
</template>

<script>
import { Toast } from "vant";
import areaList from "../../assets/addressData/addressData.js";
export default {
  data() {
    return {
      areaList,
      searchResult: []
    };
  },
  methods: {
    back() {
      window.history.back();
    },
    onSave(content) {
      //点击“保存”按钮时的操作，content为数据
      // console.log(content);
      let id = this.$store.state.address.addressList.length;
      const obj = {
        name: content.name,
        tel: content.tel,
        province: content.province,
        city: content.city,
        county: content.county,
        postalCode: content.postalCode,
        addressDetail: content.addressDetail,
        isDefault: content.isDefault,
        id
      };

      this.$store.commit("address/addAddress", obj);
      if (content.isDefault) {
        console.log(id);
        this.$store.commit("address/setDefaultWhenAdd", id);
        console.log(content.isDefault);
      }
      Toast("添加地址成功");
      this.$router.push("/address");
    }
  },
  created() {
    this.$store.state.tabbarShow = false;
  }
};
</script>

<style lang="scss" scoped>
.bg {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  // margin-bottom: 50px;
  background-color: #f1f1f1;
}
.editAddressHeader {
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
</style>