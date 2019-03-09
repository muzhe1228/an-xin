<template>
  <div class="moreOther">
    <van-nav-bar
      title="更多"
      fixed
      :border="false"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <p slot="right" class="navBar_right">
        <van-icon name="setting-o"/>
      </p>
    </van-nav-bar>

    <ul class="showCont">
      <li>沪深A股
        <van-icon name="arrow"/>
      </li>
      <li>大盘行情
        <van-icon name="arrow"/>
      </li>
    </ul>
    <van-cell title="委托单" icon="setting-o" is-link to="/edit_pwd"/>
    <van-cell title="当日委托" icon="setting-o" is-link to="index"/>
    <van-cell title="每日报表" icon="setting-o" is-link to="/edit_pwd"/>
    <van-cell title="每周报表" icon="setting-o" is-link to="index"/>
    <van-cell title="成交历史" icon="setting-o" is-link to="/edit_pwd"/>
    <van-cell title="资金查询" icon="setting-o" is-link to="index"/>
    <van-cell title="入金记录" icon="setting-o" is-link to="/edit_pwd"/>
    <van-cell title="出金记录" icon="setting-o" is-link to="index"/>
    <van-cell title="账户信息" icon="setting-o" is-link to="/edit_pwd"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({ userName: "getUserName" })
  },
  components: {},
  methods: {
    onClickRight() {
      this.$router.push("./setting");
    }
  }
};
</script>

<style scoped lang="less">
@import "~assets/less/comm.less";
.moreOther {
  padding-top: 52px;
  .navBar_right {
    .van-icon {
      font-size: 18px;
    }
  }
  .van-cell {
    background-color: @mainBg;
    color: @write;
    &:not(:last-child)::after {
      border-bottom-color: @mainSbg;
    }
  }
  .showCont {
    width: 100%;
    height: 120px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    li {
      width: 45%;
      height: 80px;
      font-size: 26px;
      color: @blue;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(to right, @green, @red);
      border-radius: 12px;
    }
  }
}
</style>
