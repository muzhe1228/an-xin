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
          reject(response);
        }
      })
      .catch(err => {
        reject(err.data);
      });
  });
};
class http {
  constructor(props) {
    this.baseApi = ENV.getENV().httpApi;
  }
  get(options) {
    let params = options.data || "";
    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: "get",
        baseURL: this.baseApi,
        timeout: 50000,
        params: params
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
            reject(response);
          }
        })
        .catch(err => {
          reject(err.data);
        });
    });
  }
  post(options) {
    let params = options.data || "";
    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: "post",
        baseURL: this.baseApi,
        timeout: 50000,
        params: params
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
            reject(response);
          }
        })
        .catch(err => {
          reject(err.data);
        });
    });
  }
  postData(options) {
    let params = options.data ? options.data.params : "";
    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: "post",
        baseURL: this.baseApi,
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
            reject(response);
          }
        })
        .catch(err => {
          reject(err.data);
        });
    });
  }
}

export { http };
export default ajax;
