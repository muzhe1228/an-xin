<template>
  <van-tabbar v-model="active" @change="change">
    <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item to="/optional" icon="search">自选</van-tabbar-item>
    <van-tabbar-item to="/quick_order" icon="friends-o">快速下单</van-tabbar-item>
    <van-tabbar-item to="/position" icon="setting-o">持仓</van-tabbar-item>
    <van-tabbar-item to="/more_other" icon="setting-o">更多</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      active: this.$store.state.tabbarVal
    };
  },
  computed: {
    ...mapState(["tabbarVal"])
  },
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  watch: {
    tabbarVal(newVal) {
      this.active = newVal;
    }
  },
  mounted() {
    this._initPage();
  },
  methods: {
    _initPage() {
      console.log(111111111);
      // let active = this.tabbarVal;
      // this.active = active;
    },
    change(index) {
      this.SET_TABBARVAL(index);
    },
    ...mapMutations(["SET_TABBARVAL"])
  }
};
</script>

<style lang="less" scoped>
@import "~assets/less/comm.less";

.van-tabbar {
  background-color: @mainSbg;
  border: none;
  &::after {
    border-color: transparent;
  }
  &-item {
    color: @write;
    transition: all 0.25s ease;
  }
  &-item--active {
    color: @lineH;
    transform: scale(1.1, 1.1);
    // background-color: @mainBg;
  }
}
</style>