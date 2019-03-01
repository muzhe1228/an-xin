<template>
  <div class="home">
    <div class="home_controller"></div>
    <p>14</p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {}
};
</script>

<style scoped lang="less">
.home {
  padding-top: 40px;
  &_controller {
    position: fixed;
    width: 100%;
    top: 46px;
    left: 0;
    height: 40px;
    background-color: pink;
  }
}
</style>
