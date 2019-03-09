<template>
  <div class="quickOrder">
    <div class="quickOrder_tips">休市中，不能买入股票</div>
    <ul class="quickOrder_top">
      <li>
        <p>交易账户：</p>
        <p>xt987541</p>
      </li>
      <li>
        <p>可用余额:</p>
        <p>￥8289650.30</p>
      </li>
      <li class="single">
        <p>股票代码：</p>
        <p>
          <input class="searchInp" type="text" v-model="searchVal" @change="searchChange">
        </p>
      </li>
      <li>
        <p>股票名称：</p>
        <p>￥8289650.30</p>
      </li>
      <li>
        <p>当前价格：</p>
        <p>￥8289650.30</p>
      </li>
      <li>
        <p>点差：</p>
        <p>￥8289650.30</p>
      </li>
      <li>
        <p>升跌类型：</p>
        <p>￥8289650.30</p>
      </li>
      <li>
        <p>委托手手数：</p>
        <p>￥8289650.30</p>
      </li>
      <li>
        <p>总股数：</p>
        <p>￥8289650.30</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      search: "",
      List: new Array(20)
    };
  },
  components: {},
  methods: {
    isRed(index) {
      if (index % 2) {
        return "text_red";
      } else {
        return "text_green";
      }
    }
  }
};
</script>

<style lang="less">
@import "~assets/less/comm.less";
.quickOrder {
  padding-top: 52px;
  &_tips {
    height: 30px;
    background-color: @mainSbg;
    color: @write;
    font-size: 13px;
    font-weight: bold;
    position: relative;
    z-index: 999;
    line-height: 30px;
    text-align: center;
  }
  &_top {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    li {
      width: 50%;
      height: 32px;
      border: 1px solid @mainSbg;
      display: flex;
      align-items: center;
      color: @write;
      padding-left: 8px;
      &.single {
        width: 100%;
      }
    }
  }
}
</style>
