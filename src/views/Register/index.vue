<template>
  <div class="register">
    <van-nav-bar
      title="注册"
      fixed
      :border="false"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="register_form">
      <div class="inputGroup">
        <p class="inputGroup_label">用户名：</p>
        <input class="inputGroup_inp" type="text">
        <p class="inputGroup_btn">
          <van-button class="Btn" @click="searchHanle(searchVal)">检测</van-button>
        </p>
      </div>
      <div class="tips">
        <p>1.账号以指定前缀字符来注册</p>
        <p>2.请输入4-20个字符，仅可输入数字，字母，下划线</p>
      </div>
      <div class="inputGroup">
        <p class="inputGroup_label">推荐码：</p>
        <input class="inputGroup_inp" type="text">
      </div>
      <div class="tips">
        <p>请输入推荐码</p>
      </div>
      <div class="inputGroup">
        <p class="inputGroup_label">密码：</p>
        <input class="inputGroup_inp" type="text">
      </div>
      <div class="tips">
        <p>*密码规则： 6-12位数字，字母，下划线</p>
      </div>
      <div class="inputGroup">
        <p class="inputGroup_label">确认密码：</p>
        <input class="inputGroup_inp" type="text">
      </div>
      <div class="inputGroup">
        <p class="inputGroup_label">*真实姓名：</p>
        <input class="inputGroup_inp" type="text">
      </div>
      <div class="tips">
        <p>1.注册后不可更改</p>
        <p>2.必须与您的银行账户名称相同，否则不能出款！</p>
      </div>
      <div class="inputGroup">
        <p class="inputGroup_label">*开户行：</p>
        <input class="inputGroup_inp" type="text">
      </div>
      <div class="inputGroup">
        <p class="inputGroup_label">*银行名称：</p>
        <input class="inputGroup_inp" type="text">
      </div>
      <div class="inputGroup">
        <p class="inputGroup_label">*银行卡号：</p>
        <input class="inputGroup_inp" type="text">
      </div>
      <div class="inputGroup">
        <p class="inputGroup_label">*手机号：</p>
        <input class="inputGroup_inp" type="text">
      </div>
      <div class="inputGroup">
        <p class="inputGroup_label">取款密码：</p>
        <input class="inputGroup_inp" type="text">
      </div>
      <div class="tips">
        <p>提款认证必须，请务必记住！</p>
      </div>
      <div class="inputGroup">
        <p class="inputGroup_label">QQ帐号：</p>
        <input class="inputGroup_inp" type="text">
      </div>
      <div class="buttonGroup">
        <van-button class="Btn" @click="searchHanle(searchVal)">确定注册</van-button>
        <van-button class="Btn" @click="searchHanle(searchVal)">清除</van-button>
      </div>
    </div>
    <div class="main_tips">
      <router-link to="/login" tag="p" class="toUrl">已有账户？点此登录</router-link>
      <p>1.标记有*者为必填项目</p>
      <p>2.手机与取款密码为取款金额时的凭证，请会员务必填写详细资料。</p>
      <p>3.若公司有其他活动会E-MAIL通知，请客户填写清楚</p>
    </div>
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

<style scoped lang="less">
@import "~assets/less/comm.less";
.register {
  padding: 60px 8px 0 8px;
  &_form {
    .inputGroup {
      display: flex;
      height: 44px;
      align-items: center;

      &_label {
        width: 20%;
        height: 32px;
        line-height: 32px;
        color: @write;
        font-size: 13px;
      }
      &_inp {
        width: 55%;
        height: 32px;
        font-size: 13px;
      }
      &_btn {
        width: 25%;
        text-align: center;
        height: 32px;
        .Btn {
          width: 80%;
          height: 32px;
          line-height: 28px;
          color: @write;
          background: linear-gradient(#fff, #d2d2d2);
          color: @black;
          font-size: 13px;
        }
      }
    }
    .tips {
      line-height: 22px;
      color: @red;
      font-size: 12px;
    }
    .buttonGroup {
      display: flex;
      justify-content: center;
      .Btn {
        width: 40%;
        height: 32px;
        line-height: 28px;
        color: @write;
        background: linear-gradient(#fff, #d2d2d2);
        color: @black;
        margin: 22px 16px;
        font-size: 13px;
      }
    }
  }
  .main_tips {
    line-height: 22px;
    font-size: 13px;
    color: @write;
    .toUrl {
      color: @lineH;
    }
  }
}
</style>
