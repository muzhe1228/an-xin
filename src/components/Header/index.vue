<template>
  <header>
    <p class="logo">
      <img src="~assets/logo.png" slot="title" alt>
    </p>
    <p>
      <van-button size="mini" round>银行转账</van-button>
    </p>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {}
};
</script>

<style scoped lang="less">
@import "~assets/less/comm.less";
header {
  position: fixed;
  left: 0;
  top: 0;
  height: 52px;
  width: 100%;
  box-shadow: 0 5px 20px -5px @shadow;
  border-bottom: 2px solid #333;
  background-color: @mainBg;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo {
    img {
      width: 36px;
      height: 36px;
    }
  }
  .van-button--mini {
    position: absolute;
    right: 8px;
    top: 13px;
    width: 80px;
    height: 26px;
    font-size: 12px;
    border-color: @mainBg;
    background: linear-gradient(#fff, #98a1ac);
    color: @black;
    border-color: @border;
  }
}
</style>
