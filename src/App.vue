<template>
  <div id="app">
    <router-view name="mainheader"></router-view>
    <main class="mainWrap">
      <transition name="transitionRouter">
        <router-view></router-view>
      </transition>
    </main>
    <router-view name="mainfooter"></router-view>
  </div>
</template>
<script>
import Header from "components/Header";
import Footer from "components/Footer";
import { mapState } from "vuex";
import { Button, Popup, Picker } from "vant";
export default {
  data() {
    return {
      show2: false,
      active: 0,
      columns: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
      btnText: "底部弹出"
    };
  },
  computed: {
    ...mapState(["WS"])
  },
  mounted() {
    // this.onMsg();
  },
  components: {
    Footer,
    Header,
    [Button.name]: Button,
    [Popup.name]: Popup,
    [Picker.name]: Picker
  },
  methods: {
    onClickLeft() {
      console.log("返回");
    },
    onClickRight() {
      console.log("按钮");
    },
    yes(value, index) {
      this.btnText = value;
      this.show2 = false;
    },
    onChange(picker, value, index) {
      console.log(`${picker}当前值：${value}, 当前索引：${index}`);
    },
    onMsg() {
      let msg = this.WS.onmessage();
      console.log(msg);
    },
    send() {
      this.count++;

      this.WS.send({
        userId: 4626,
        gameType: 1,
        roomId: 1
      });
    },
    close() {
      this.WS.close();
    },
    init() {
      this.WS.init();
      console.log(this.WS.onmessage);
    }
  }
};
</script>

<style lang="less">
@import "~assets/less/comm.less";
#app {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  .mainWrap {
    background-color: @mainBg;
    flex: 1;
    width: 100%;
    h1 {
      font-size: 20px;
      color: palevioletred;
    }
  }
  // .transitionRouter-enter-active,
  // .transitionRouter-leave-active {
  //   transition: all 0.4s;
  // }

  // .transitionRouter-enter,
  // .transitionRouter-leave {
  //   transform: translateX(-100%);
  // }
}
</style>
