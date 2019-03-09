<template>
  <div class="dayTable">
    <van-nav-bar
      title="每日报表"
      fixed
      :border="false"
      left-arrow
      @click-left="onClickLeft"
    />
    
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
.dayTable {
  padding-top: 52px;
  
}
</style>
