<template>
  <div id="app">
    <van-nav-bar
      left-text="返回"
      right-text="按钮"
      fixed
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <img src="./assets/logo.png" slot="title" alt>
    </van-nav-bar>

    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <van-button @click="show2 = true;">{{btnText}}</van-button>

    <van-popup v-model="show2" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @confirm="yes"
        @cancel="show2 = false"
        @change="onChange"
      />
    </van-popup>
    <!-- <router-view/> -->
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "components/Footer";
import { mapState } from "vuex";
import { Button, Popup, Picker, NavBar } from "vant";
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
    this.onMsg();
  },
  components: {
    Footer,
    [Button.name]: Button,
    [Popup.name]: Popup,
    [Picker.name]: Picker,
    [NavBar.name]: NavBar
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
#app {
  height: 800px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: red;
  padding-bottom: 50px;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 0.24rem;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.van-nav-bar__title {
  img {
    width: 32px;
    vertical-align: middle;
  }
}
</style>
