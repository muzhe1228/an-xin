import * as types from "./mutation-types";
// import Ajax from "../common/Api/index";
// import ENV from "../common/Api/ENV";
export default {
    updatedFontSzie({ commit }, fontSize) {
        commit(types.SET_FONTSIZE, fontSize);
      },
};
