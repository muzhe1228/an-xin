<template>
  <div class="register">
    <van-nav-bar title="注册" fixed :border="false" left-arrow @click-left="onClickLeft"/>
    <div class="register_form">
      <div class="inputGroup">
        <p class="inputGroup_label">用户名：</p>
        <input class="inputGroup_inp" v-model="registerData.buyerLoginName" type="text">
        <p class="inputGroup_btn">
          <van-button class="Btn" @click="accountIsCould(registerData.buyerLoginName)">检测</van-button>
        </p>
      </div>
      <div class="tips">
        <p>1.账号以指定前缀字符来注册</p>
        <p>2.请输入4-20个字符，仅可输入数字，字母，下划线</p>
      </div>
      <!-- <div class="inputGroup">
        <p class="inputGroup_label">推荐码：</p>
        <input class="inputGroup_inp" type="text">
      </div>
      <div class="tips">
        <p>请输入推荐码</p>
      </div>-->
      <div class="inputGroup">
        <p class="inputGroup_label">密码：</p>
        <input class="inputGroup_inp" v-model="registerData.buyerLoginPwd" type="password">
      </div>
      <div class="tips">
        <p>*密码规则： 6-12位数字，字母，下划线</p>
      </div>
      <div class="inputGroup">
        <p class="inputGroup_label">确认密码：</p>
        <input class="inputGroup_inp" v-model="registerData.buyerLoginPwd" type="password">
      </div>
      <div class="inputGroup">
        <p class="inputGroup_label">*真实姓名：</p>
        <input class="inputGroup_inp" v-model="registerData.buyerName" type="text">
      </div>
      <div class="inputGroup">
        <p class="inputGroup_label">*身份证号：</p>
        <input class="inputGroup_inp" v-model="registerData.certificateCard" type="text">
      </div>
      <div class="tips">
        <p>1.注册后不可更改</p>
        <p>2.必须与您的银行账户名称相同，否则不能出款！</p>
      </div>
      <div class="inputGroup">
        <p class="inputGroup_label">*开户行：</p>
        <input class="inputGroup_inp" type="text" v-model="registerData.recordChildBank">
      </div>
      <div class="inputGroup">
        <p class="inputGroup_label">*银行名称：</p>
        <input class="inputGroup_inp" type="text" v-model="registerData.recordBank">
      </div>
      <div class="inputGroup">
        <p class="inputGroup_label">*银行卡号：</p>
        <input class="inputGroup_inp" type="text" v-model="registerData.certificateCard">
      </div>
      <div class="inputGroup">
        <p class="inputGroup_label">*手机号：</p>
        <input class="inputGroup_inp" type="text" v-model="registerData.buyerPhone">
      </div>
      <div class="inputGroup">
        <p class="inputGroup_label">*取款密码：</p>
        <input class="inputGroup_inp" type="password" v-model="registerData.withdrawalsPwd">
      </div>
      <!-- <div class="tips">
        <p>提款认证必须，请务必记住！</p>
      </div>
      <div class="inputGroup">
        <p class="inputGroup_label">QQ帐号：</p>
        <input class="inputGroup_inp" type="text">
      </div>-->
      <div class="buttonGroup">
        <van-button class="Btn" @click="register">确定注册</van-button>
        <van-button class="Btn" @click="clearRegister">清除</van-button>
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
import { isAction, isPwd, isBankCode } from "common/func";
export default {
  data() {
    return {
      registerData: {
        buyerLoginName: "zhoulei123210",
        buyerLoginPwd: "12345678",
        buyerName: "周磊",
        buyerPhone: "13065736120",
        certificateCard: "420621198909265414",
        curreny: "RMB",
        lockedType: 0,
        recordBank: "招商银行",
        recordBankCard: "6225885864001862",
        recordChildBank: "文晖支行",
        withdrawalsPwd: "1234"
      }
    };
  },
  components: {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    register() {
      let reigsterStep = true;
      for (var keys in this.registerData) {
        let value = this.registerData[keys];
        switch (keys) {
          case "buyerLoginName":
            this.checkVal(value, "账号");
            break;
          case "buyerLoginPwd":
            this.checkVal(value, "密码");
            break;
          case "buyerName":
            this.checkVal(value, "真实姓名");
            break;
          case "buyerPhone":
            this.checkVal(value, "手机号");
            break;
          case "certificateCard":
            this.checkVal(value, "身份证号");
            break;
          case "recordBank":
            this.checkVal(value, "银行名称");
            break;
          case "recordBankCard":
            this.checkVal(value, "银行卡号");
            break;
          case "recordChildBank":
            this.checkVal(value, "开户行");
            break;
          case "withdrawalsPwd":
            this.checkVal(value, "取款密码");
            break;
          default:
            break;
        }
        if (!value && value != 0) {
          // debugger;
          reigsterStep = false;
          return;
        }
      }
      if (reigsterStep) {
        this.$http
          .postData({
            url: "/account/registerBuyer",
            data: {
              params: this.registerData
            }
          })
          .then(res => {
            console.log(res);
            if (res.flag) {
              this.$toast.success("账号注册成功！");
            } else {
              this.$toast.fail(res.errorMsg);
            }
          });
      }
    },
    clearRegister() {
      this.registerData = {
        buyerLoginName: "",
        buyerLoginPwd: "",
        buyerName: "",
        buyerPhone: "",
        certificateCard: "",
        curreny: "RMB",
        lockedType: 0,
        recordBank: "",
        recordBankCard: "",
        recordChildBank: "",
        withdrawalsPwd: ""
      };
    },
    checkVal(val, str) {
      console.log(val);
      if (!val) {
        this.$toast.fail(`${str}不能为空！`);
      }
    },
    accountIsCould(account) {
      if (isAction(account)) {
        if (!account) {
          this.$toast.fail("用户名不能为空！");
        } else {
          this.$toast.fail(isAction(account));
        }
        return;
      } else {
        this.$http
          .get({
            url: "/account/isCould",
            data: { buyerLoginName: account }
          })
          .then(res => {
            if (res.flag) {
              this.$toast.success("账号可用！");
            } else {
              this.$toast.fail("账号不可用！");
            }
            console.log(res);
          });
      }
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
