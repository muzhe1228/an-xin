<template>
  <div class="setting">
    <van-nav-bar title="设置" fixed :border="false" left-arrow @click-left="onClickLeft"/>
    <van-cell title="修改密码" is-link to="/edit_pwd"/>
    <van-cell title="资金密码" is-link to="/capital_pwd"/>
    <van-cell title="系统规则" is-link to="/system_rule"/>
    <van-cell title="系统公告" is-link to="/system_notice"/>
    <div class="loginOut">
      <van-button class="loginOut_Btn" click="loginOut">退出登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    loginOut() {
      this.$toast.fail("退出登录");
    }
  }
};
</script>

<style scoped lang="less">
@import "~assets/less/comm.less";
.setting {
  padding-top: 66px;
  .van-cell {
    background-color: @mainBg;
    color: @write;
    &:not(:last-child)::after {
      border-bottom-color: @mainSbg;
    }
  }
  .loginOut {
    text-align: center;
    margin-top: 40px;
    &_Btn {
      width: 80%;
      background-color: @lineH;
      color: @write;
      border-radius: 4px;
      border-color: @mainSbg;
      span {
        font-size: 14px;
      }
    }
  }
}
</style>
