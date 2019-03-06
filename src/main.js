import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./Store";
import "./common/extend";
import "./assets/resize";
import "./assets/less/reset.less";
import {
  Button,
  Pagination,
  Popup,
  Picker,
  Toast,
  Checkbox,
  CheckboxGroup
} from "vant";
// 引入样式
import "vue-easytable/libs/themes-base/index.css";
// 导入 table 和 分页组件
import { VTable, VPagination } from "vue-easytable";
Vue.use(Button)
  .use(Pagination)
  .use(Popup)
  .use(Picker)
  .use(VTable)
  .use(VPagination)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(Toast, Toast.setDefaultOptions({ duration: 1000 }));
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
