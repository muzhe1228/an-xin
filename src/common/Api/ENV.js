export default {
  // 测试地址
  testENV: {
    name: "test",
    httpApi: "http://tec.menker365.com/zongcai",
  },
  //生产地址
  proENV: {
    name: "prod",
    httpApi: "coinla"
  },
  getENV: function() {
    return this.testENV;
  }
};
