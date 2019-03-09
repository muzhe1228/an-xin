<template>
  <div>
    <van-nav-bar
      title="系统公告"
      fixed
      :border="false"
      left-arrow
      @click-left="onClickLeft"
    />
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

<style scoped lang="stylus">
</style>
