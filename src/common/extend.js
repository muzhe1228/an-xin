import Vue from "vue";
import Ajax, { http } from "./Api";
// import { lStore, sStore } from "./func";
// Vue.prototype.$lStore = lStore;
// Vue.prototype.$sStore = sStore;

function isNull(data) {
  if (data || data == 0) {
    return data;
  } else {
    return "--";
  }
}

function isNormal(type) {
  //股票是否正常可以
  if (type) {
    return "不可以";
  } else {
    return "正常";
  }
}
Vue.prototype.$ajax = Ajax;
Vue.prototype.$http = new http();
Vue.filter("isNormal", isNormal);
Vue.filter("isNull", isNull);
