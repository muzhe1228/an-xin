<template>
  <div class="userInfo">
    <van-nav-bar title="账户 & 资金" fixed :border="false" left-arrow @click-left="onClickLeft"/>
    <p class="tips">账户基本信息：</p>
    <ul class="userInfo_info">
      <li>
        <p>姓名：</p>
        <p>廉亚龙</p>
      </li>
      <li>
        <p>交易账户：</p>
        <p>Ken2018</p>
      </li>
      <li>
        <p>银行名称：</p>
        <p>招商银行</p>
      </li>
      <li>
        <p>手机号：</p>
        <p>17620800222</p>
      </li>
      <li class="single">
        <p>银行卡号：</p>
        <p>6221885061021384768</p>
      </li>
      <li class="single">
        <p>身份证号：</p>
        <p>411421199512107218</p>
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
    <p class="tips">资金信息：</p>
    <ul class="capital">
      <li>
        <p>保证金：</p>
        <p>1,024,813.03</p>
      </li>
      <li>
        <p>可用保证金：</p>
        <p>824,813.03</p>
      </li>
      <li>
        <p>持仓总金额（B）：</p>
        <p>824,813.03</p>
      </li>
      <li>
        <p>持仓保证金（C）：</p>
        <p>0.00</p>
      </li>
      <li>
        <p>委托总金额（E）：</p>
        <p>0.00</p>
      </li>
      <li>
        <p>可用保证金（F）：</p>
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
export default {
  data() {
    return {};
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
    display: flex;
    flex-wrap: wrap;
    li {
      width: 50%;
      height: 32px;
      border-top: 1px solid @mainSbg;
      border-left: 1px solid @mainSbg;
      color: @write;
      font-size: 12px;
      display: flex;
      line-height: 32px;
      &.single {
        width: 100%;
      }
      p {
        padding-left: 8px;
        &:last-child {
          padding-left: 4px;
        }
      }
    }
  }
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
        width: 35%;
        padding-left: 8px;
        &:first-child {
          border-right: 1px solid @mainSbg;
          padding-right: 8px;
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
