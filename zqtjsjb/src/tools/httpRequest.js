//axios封装post请求
function axiosPostRequst(url, data, header) {
  // console.log(header)
  // let headers
  // header ? headers = header : headers = {'Content-Type': 'application/x-www-form-urlencoded'}
  let result = axios({
    method: 'post',
    url: url,
    data: data,
    transformRequest: [function (data) {
      let ret = '';
      for (let i in data) {
        ret += encodeURIComponent(i) + '=' + encodeURIComponent(data[i]) + "&";
      }
      return ret;
    }],
    headers: header || {'Content-Type': 'application/x-www-form-urlencoded'}
  }).then(resp => {
    return resp.data;
  }).catch(error => {
    return "exception=" + error;
  });
  return result;
}
//上传file
function axiosPicRequst(url, data, header) {
  let result = axios({
    method: 'post',
    url: url,
    data: data,
    withCredentials: false,
    headers: header || {'Content-Type': 'application/x-www-form-urlencoded'}
  }).then(resp => {
    return resp.data;
  }).catch(error => {
    return "exception=" + error;
  });
  return result;
}

//get请求
export function axiosGetRequst(url) {
  var result = axios({
    method: 'get',
    url: url
  }).then(function (resp) {
    return resp.data;
  }).catch(function (error) {
    return "exception=" + error;
  });
  return result;
}
