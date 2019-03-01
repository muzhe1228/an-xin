<template>
  <footer>
    <van-tabbar v-model="active" @change="change">
      <van-tabbar-item to="/about" value="/about" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search">自选</van-tabbar-item>
      <van-tabbar-item icon="friends-o">快速下单</van-tabbar-item>
      <van-tabbar-item icon="setting-o">持仓</van-tabbar-item>
      <van-tabbar-item icon="setting-o">更多</van-tabbar-item>
    </van-tabbar>
  </footer>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  data() {
    return {
      active: 0
    };
  },
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  methods: {
    change(index) {
      console.log(index);
    }
  }
};
</script>

<style lang="less">
footer {
}
</style>