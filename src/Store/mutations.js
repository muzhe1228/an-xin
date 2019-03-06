import * as types from "./mutation-types";
import { lStore } from "../common/func";
export default {
  [types.SET_FONTSIZE](state, fontSize) {
    lStore.set("fontSize", fontSize);
    state.fontSize = fontSize;
  }
};
