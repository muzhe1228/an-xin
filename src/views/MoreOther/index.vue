<template>
  <div class="moreOther">
    <van-nav-bar
      title="我的"
      fixed
      :border="false"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="top">
      <div class="logo">
        <p>{{userName}}</p>
      </div>
    </div>
    <van-cell title="修改密码" is-link to="/edit_pwd"/>
    <van-cell title="资金密码" is-link to="index"/>
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
  methods: {}
};
</script>

<style scoped lang="less">
@import "~assets/less/comm.less";
.moreOther {
  padding-top: 52px;
  .van-cell {
    background-color: @mainBg;
    color: @write;
    &:not(:last-child)::after {
      border-bottom-color: @mainSbg;
    }
  }
}
</style>
