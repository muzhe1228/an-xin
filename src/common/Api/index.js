import axios from "axios";
import ENV from "./ENV";
const ajax = function(options) {
  // console.log(Store.commit("SET_USERINFO", {}));
  let baseApi = ENV.getENV().httpApi,
    params = options.data ? options.data.params : "";

  return new Promise((resolve, reject) => {
    axios({
      url: options.url,
      method: "post",
      baseURL: baseApi,
      timeout: 50000,
      data: params
    })
      .then(response => {
        if (response.status === 200) {
          let res = response.data;
          if (res.code == 0) {
            resolve(res.result);
          } else {
            resolve(res);
          }
        } else {
          reject(response.data);
        }
      })
      .catch(err => {
        if (err.response) {
          if (err.response.data.code === 10010002) {
          } else if (err.response.data.code === 500) {
            console.log("网络异常，请稍后再试");
          } else if (err.response.data.code > 0) {
            console.log(`${err.response.data.message}`);
          } else {
            console.log("接口错误信息", err.response.data.message);
          }
        }
        reject(err);
      });
  });
};

export default ajax;
