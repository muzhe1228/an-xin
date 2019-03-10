<template>
  <div class="userInfo">
    <van-nav-bar title="账户信息" fixed :border="false" left-arrow @click-left="onClickLeft"/>
    <!-- <p class="tips">账户基本信息：</p> -->
    <ul class="userInfo_info">
      <li>
        <p>姓名：</p>
        <p>{{userInfo.buyerName}}</p>
      </li>
      <li>
        <p>交易账户：</p>
        <p>{{userInfo.buyerLoginName}}</p>
      </li>
      <li>
        <p>银行名称：</p>
        <p>{{userInfo.recordBank}}</p>
      </li>

      <li class="single">
        <p>银行卡号：</p>
        <p>{{userInfo.recordBankCard}}</p>
      </li>
      <li>
        <p>手机号：</p>
        <p>{{userInfo.buyerPhone}}</p>
      </li>
      <li class="single">
        <p>身份证号：</p>
        <p>{{userInfo.certificateCard}}</p>
      </li>
      <li>
        <p>保证金：</p>
        <p>1,024,813.03</p>
      </li>
      <li>
        <p>可用保证金：</p>
        <p>824,813.03</p>
      </li>
      <li>
        <p>可买股票资金：</p>
        <p>804,813.03</p>
      </li>
      <li>
        <p>出金冻结金额：</p>
        <p>0.00</p>
      </li>
      <li>
        <p>卖出手续费：</p>
        <p>4%</p>
      </li>
      <li>
        <p>买入手续费：</p>
        <p>4%</p>
      </li>
      <li>
        <p>留仓费：</p>
        <p>0.6% / 天</p>
      </li>
      <li>
        <p>最大留仓天数：</p>
        <p>7天</p>
      </li>
    </ul>
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
  padding: 52px 8px 0 8px;
  min-height: 100vh;
  // background-color: @mainSbg;
  .tips {
    color: @lineH;
    padding-left: 8px;
    font-size: 15px;
    line-height: 44px;
    // text-align: center;
  }
  &_info {
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
        padding-left: 8px;
        &:first-child {
          border-right: 1px solid @mainSbg;
          width: 30%;
          padding-right: 8px;
        }
      }
    }
  }
}
</style>
