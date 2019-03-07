export default {
  getUserId(state) {
    return state.userInfo.buyerId;
  },
  getUserName(state) {
    return state.userInfo.buyerLoginName;
  },
};
