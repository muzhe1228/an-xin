import Vue from "vue";
import Vuex from "vuex";
import ws from "./common/socket";

Vue.use(Vuex);
// const socket = new ws({
//   url: "ws://192.168.10.200:7000/gameSocket"
// });
export default new Vuex.Store({
  state: {
    // WS: socket
  },
  mutations: {},
  actions: {}
});
