<template>
  <div class="userInfo">
    <van-nav-bar title="账户 & 资金" fixed :border="false" left-arrow @click-left="onClickLeft"/>

    <ul class="capital">
      <li>
        <p>交易账户</p>
        <p>{{userInfo.buyerLoginName}}</p>
      </li>
      <li>
        <p>保证金</p>
        <p>1,024,813.03</p>
      </li>
      <li>
        <p>可用保证金</p>
        <p>824,813.03</p>
      </li>
      <li>
        <p>持仓总金额（B）</p>
        <p>824,813.03</p>
      </li>
      <li>
        <p>持仓保证金（C）</p>
        <p>0.00</p>
      </li>
      <li>
        <p>委托总金额（E）</p>
        <p>0.00</p>
      </li>
      <li>
        <p>可用保证金（F）</p>
        <p>824,813.03</p>
      </li>
    </ul>
    <div class="tipsBot">
      <p>计算公式：可用保证金（F）= 保证金（A）- 持仓保证金（C）- 委托总金额（E）*10%</p>
      <p class="text_red">持仓金额以买入价为准</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["userInfo"])
  },
  components: {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped lang="less">
@import "~assets/less/comm.less";
.userInfo {
  padding: 66px 8px 0 8px;
  min-height: 100vh;
  .capital {
    width: 100%;
    border: 1px solid @mainSbg;
    border-top: none;
    background-color: @mainBg;
    li {
      width: 100%;
      height: 32px;
      border-top: 1px solid @mainSbg;
      color: @write;
      font-size: 12px;
      display: flex;
      line-height: 32px;
      p {
        width: 50%;
        padding-left: 8px;
        text-align: center;
        &:first-child {
          border-right: 1px solid @mainSbg;
        }
      }
    }
  }
  .tipsBot {
    font-size: 12px;
    color: @write;
    line-height: 24px;
  }
}
</style>
