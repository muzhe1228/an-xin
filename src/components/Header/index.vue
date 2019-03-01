<template>
  <van-nav-bar fixed @click-left="onClickLeft" @click-right="onClickRight">
    <img src="~assets/logo.png" slot="title" alt>
    <van-button size="mini" slot="right" round>银行转账</van-button>
  </van-nav-bar>
</template>

<script>
import { NavBar, Button } from "vant";
export default {
  data() {
    return {};
  },
  components: {
    [NavBar.name]: NavBar,
    [Button.name]: Button
  },
  methods: {}
};
</script>

<style scoped lang="less">
@import "~assets/less/comm.less";

.van-nav-bar {
  background-color: @bMain;
  &__title {
    img {
      width: 32px;
      vertical-align: middle;
    }
  }
  &__right {
    right: 8px;
    .van-button--mini {
      width: 80px;
      border-color: @main;
      background-color: #fff;
      color: @sColor;
      border-color: #9b9b9b;
    }
  }
}
</style>
