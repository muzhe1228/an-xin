import Vue from "vue";
import Ajax, { http } from "./Api";
import { isNormal, lStore, sStore } from "./func";
// Vue.prototype.$lStore = lStore;
// Vue.prototype.$sStore = sStore;

function isNull(data) {
  if (data || data == 0) {
    return data;
  } else {
    return "--";
  }
}

function heigCalc(size, heig) {
  let clHeig = document.documentElement.clientHeight;
  heig = heig || 0;
  let num = clHeig - (size / 50) * (102 + heig);
  return num;
}
function calcPx(size, num) {
  num = (size / 50) * num;
  return num;
}

Vue.prototype.$ajax = Ajax;
Vue.prototype.$heigCalc = heigCalc;
Vue.prototype.$calcPx = calcPx;
Vue.prototype.$http = new http();
Vue.filter("isNormal", isNormal);
Vue.filter("isNull", isNull);

// 自定义列组件
Vue.component("table-operation", {
  template: `<span>sadssad</span>`,
  props: {
    rowData: {
      type: Object
    },
    field: {
      type: String
    },
    index: {
      type: Number
    }
  },
  methods: {
    update() {
      // 参数根据业务场景随意构造
      let params = { type: "edit", index: this.index, rowData: this.rowData };
      this.$emit("on-custom-comp", params);
    },

    deleteRow() {
      // 参数根据业务场景随意构造
      let params = { type: "delete", index: this.index };
      this.$emit("on-custom-comp", params);
    }
  }
});
