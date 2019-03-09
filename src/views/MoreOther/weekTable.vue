<template>
  <div class="weekTable">
    <van-nav-bar title="每周报表" fixed :border="false" left-arrow @click-left="onClickLeft"/>
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
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped lang="less">
@import "~assets/less/comm.less";
.weekTable {
  padding-top: 52px;
}
</style>
