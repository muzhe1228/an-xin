<template>
  <div class="login">
    <p class="login_logo">
      <img src="~assets/logo.png" alt>
    </p>
    <div class="login_from">
      <div class="inpGroup">
        <p class="iconfont">&#xe618;</p>
        <input type="text" v-model="loginData.buyerLoginName" placeholder="请输入用户名">
      </div>
      <div class="inpGroup">
        <p class="iconfont">&#xe61b;</p>
        <input type="password" v-model="loginData.buyerLoginPwd" placeholder="请输入登录密码">
      </div>
      <div class="inpGroup">
        <p class="iconfont">&#xe619;</p>
        <input type="text" placeholder="请输入图形验证码">
      </div>
      <div class="btnGroup">
        <van-button class="loginBtn" @click="login" size="mini">登录</van-button>
        <van-button class="Register" @click="toRegister" size="mini">注册</van-button>
      </div>
    </div>
    <p class="copyright">&copy;2019-安信证券</p>
  </div>
</template>

<script>
import { isAction, isPwd } from "common/func";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      loginData: {
        buyerLoginName: "",
        buyerLoginPwd: ""
      }
    };
  },

  components: {},
  methods: {
    login() {
      const { buyerLoginName, buyerLoginPwd } = this.loginData;
      if (isAction(buyerLoginName)) {
        this.$toast.fail(isAction(buyerLoginName));
      } else if (isPwd(buyerLoginPwd)) {
        this.$toast.fail(isPwd(buyerLoginPwd));
      } else {
        this.$http
          .post({
            url: "/account/doBuyerLogin",
            data: this.loginData
          })
          .then(res => {
            if (res.buyerMsg) {
              this.updateUserInfo(res.buyerMsg);
              this.$router.push("/");
            } else {
              this.$toast.fail(res.errorMsg);
            }
          });
      }
    },
    toRegister() {
      this.$router.push("/register");
    },
    ...mapActions(["updateUserInfo"])
  }
};
</script>

<style scoped lang="less">
@import "~assets/less/comm.less";
.login {
  height: 100vh;
  overflow: hidden;
  background-color: @mainBg;
  &_logo {
    padding: 94px 0;
    text-align: center;
    img {
      width: 48px;
    }
  }
  &_from {
    .inpGroup {
      position: relative;
      margin: 0 auto 16px auto;
      width: 82%;
      height: 36px;
      background-color: rgba(255, 255, 255, 0.6);
      display: flex;
      color: @write;
      border-radius: 4px;
      .iconfont {
        width: 40px;
        height: 36px;
        font-size: 18px;
        color: @write;
        text-align: center;
        line-height: 36px;
      }
      input {
        font-size: 16px;
        position: absolute;
        width: 100%;
        height: 100%;
        border: none;
        background-color: transparent;
        padding-left: 42px;
      }
    }
    .btnGroup {
      padding-top: 20px;
      .van-button {
        display: block;
        width: 82%;
        height: 36px;
        border-radius: 4px;
        margin: 20px auto;
        border: none;
        outline: none;
        background: linear-gradient(#debd63, #d994a6);
        &__text {
          font-size: 16px;
          color: @write;
        }
      }
    }
  }
  .copyright {
    position: fixed;
    bottom: 40px;
    left: 0;
    width: 100%;
    font-size: 12px;
    color: @write;
    text-align: center;
    padding-top: 20px;
  }
}
</style>
