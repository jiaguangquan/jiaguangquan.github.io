import { Toast } from "vant";
import axios from "axios";
import { baseUrl } from "../HTTP";
// import { resolve, reject } from "core-js/fn/promise";
class HTTP {
  static get(url, data) {
    return this.request(url, data, "GET");
  }

  static post(url, data) {
    return this.request(url, data, "POST");
  }
  /**
   * Http request
   */
  static request(url, data, method) {
    return new Promise((resolve, reject) => {
      let requestUrl = baseUrl.serverUrl + url;
      axios({
        method: method,
        url: requestUrl,
        data: data || {}
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          resolve(reject);
          console.log("err~~~~~", err);
        });
    });
  }
}
function Jmas(param) {
  return new Promise((resolve, reject) => {
    param.app_id = "bdcjs";
    param.version = "1.0";
    param.charset = "UTF-8";
    param.origin = "1";
    param.header = "";
    const timestamp = new Date().valueOf();
    param.timestamp = timestamp;
    $.ajax({
      type: "post",
      url: "https://app.jinan.gov.cn/jmas-jimp-server/createsign.do",
      data: param
    }).then(res => {
      if (res.success == true) {
        // console.log(res)
        param.sign = res.data.sign;
        $.ajax({
          type: "post",
          url: "https://app.jinan.gov.cn/jmas-jimp-server/gateway.do",
          data: param
        })
          .then(res => {
            // console.log(res)
            resolve(res);
          })
          .catch(err => {
            // console.log(err)
            reject(err);
          });
      } else {
        Toast(res.message || res.msg);
      }
    });
  });
}
function request(type, url, params) {
  return new Promise((resolve, reject) => {
    $.ajax({
      type,
      url,
      data: params
    })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}
export { HTTP, Jmas, request };
