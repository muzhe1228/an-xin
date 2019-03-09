<template>
  <div class="editPwd">
    <van-nav-bar
      title="修改密码"
      fixed
      :border="false"
      left-arrow
      @click-left="onClickLeft"
    />
    <p class="tips">修改账户密码</p>
    <van-field v-model="userName" disabled label="交易账户" placeholder="请输入用户名"/>

    <van-field v-model="oldPwd" type="password" label="旧密码" placeholder="请输入旧密码" required/>

    <van-field v-model="newPwd" type="password" label="新密码" placeholder="请输入新密码" required/>

    <van-field v-model="confirmPwd" type="password" label="确认密码" placeholder="再次确认密码" required/>
    <p class="tips">密码设置至少4位，支持阿拉伯数字，英文大小写和符号</p>
    <div class="submit">
      <van-button class="submit_Btn" click="submit">确认修改</van-button>
    </div>
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
.editPwd {
  padding-top: 52px;
  .tips {
    color: @lineH;
    padding-left: 14px;
    font-size: 13px;
    line-height: 44px;
  }
  .van-cell {
    background-color: @mainBg;
    color: @write;
    &:not(:last-child)::after {
      border-color: @mainSbg;
    }
  }
  .submit {
    text-align: center;
    margin-top: 40px;
    &_Btn {
      width: 80%;
      background-color: @lineH;
      color: @write;
      border-radius: 4px;
      border-color: @mainSbg;
      span {
        font-size: 14px;
      }
    }
  }
}
</style>
