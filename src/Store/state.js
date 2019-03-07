import { lStore } from "../common/func";
export default {
  fontSize: lStore.get("fontSize") || 50,
  tabbarVal: lStore.get("tabbarVal") || 0,
  userInfo: lStore.get("userInfo") || {}
};
