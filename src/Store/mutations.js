import * as types from "./mutation-types";
import { lStore } from "../common/func";
export default {
  [types.SET_FONTSIZE](state, fontSize) {
    lStore.set("fontSize", fontSize);
    state.fontSize = fontSize;
  },
  [types.SET_TABBARVAL](state, tabbarVal) {
    lStore.set("tabbarVal", tabbarVal);
    state.tabbarVal = tabbarVal;
  },
  [types.SET_USERINFO](state, userInfo) {
    lStore.set("userInfo", userInfo);
    state.userInfo = userInfo;
  }
};
