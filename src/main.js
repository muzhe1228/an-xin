import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/resize";
import "./assets/less/reset.less";
import { Button, Pagination } from "vant";
Vue.use(Button).use(Pagination);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
