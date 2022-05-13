const newJisUrl = "http://zwfw.sd.gov.cn/JIS/sso/interface.do"; //接口地址
let userType = "1"; //用户类型  1个人   2法人

const timestamp = Date.parse(new Date());
const appmark = "sdzwapp";
const appword = "aKd20dbGdFvmuwrt";

import CryptoJS from 'crypto-js/crypto-js'



function getUserInfo({ faceSwitch } = { faceSwitch: false }) {
    return new Promise((resolve, reject) => {
        lightAppJssdk.user.getTicket({
            success: function (data) { //成功回调
                if (data == '未登录') {
                    onLoginApp(resolve, reject, faceSwitch); //APP用户未登录，调用登录页面
                } else {
                    const jsonData = JSON.parse(data);
                    // alert("jsonData==="+JSON.stringify(jsonData));
                    const dataValueObj1 = jsonData.data;
                    // console.log(dataValueObj);
                    const dataValueObj = eval("(" + dataValueObj1 + ")"); //解析出用户票据信息
                    const ticket = dataValueObj.ticket;
                    // console.log(dataValueObj.ticket)
                    userType = dataValueObj.usertype; //解析保存用户类型（个人法人）
                    // console.log(dataValueObj.usertype)
                    if (faceSwitch === true){
                        faceAuthentication(ticket, resolve, reject);
                    }else{
                        getUserToken(ticket, resolve, reject);
                        // alert(111)
                    }
                }
            },
            fail: function (data) { //错误返回
                // console.log(JSON.stringify(data));
                reject(data)
            }
        });
    })
}


/**
 * 使用jssdk调用登录页面
 */
function onLoginApp(resolve, reject, faceSwitch) {

    lightAppJssdk.user.loginapp({
        success: function (data) {
            if (data == "未登录") {
                //取消登录或登录失败，关闭页面
                oncloseWindow();
            } else {

                const dataObj = JSON.parse(data);
                if (dataObj.retcode == '000000') { //登录成功，返回用户的票据和用户类型
                    const dataValueObj = dataObj.data;
                    if (faceSwitch === true)
                        faceAuthentication(dataValueObj.ticket, resolve, reject); //解析出用户票据信息
                    else
                        userType = dataValueObj.type; //解析保存用户类型（个人法人）
                    getUserToken(dataValueObj.ticket, resolve, reject);
                } else {
                    reject(data)
                    //关闭页面
                    oncloseWindow();
                }
            }

        },
        fail: function (data) {
            reject(data)
            //关闭页面
            oncloseWindow();
        }
    });

}

// 人脸认证 ,放在是否登录后
function faceAuthentication(ticket, resolve, reject) {
    lightAppJssdk.face.face({
        success: function (res) {
            const data = JSON.parse(res);
            if (data.resultStatus == "9000") {
                getUserToken(ticket, resolve, reject)
            } else if (data.resultStatus == "6001") {
                oncloseWindow()
            } else {
                lightAppJssdk.notification.alert({
                    title: "提示",//可传空
                    message: "认证失败",
                    buttonName: "确认",
                    success: function (data) {
                        oncloseWindow()
                        //onSuccess将在点击button之后回调
                        /*回调*/
                    }
                });
            }
        },
        fail: function (data) {
            lightAppJssdk.notification.alert({
                title: "提示",//可传空
                message: "认证失败",
                buttonName: "确认",
                success: function (data) {
                    oncloseWindow()
                    //onSuccess将在点击button之后回调
                    /*回调*/
                }
            });
            return false;
        }
    });
}

/**
 * 通过用户票据获取用户的令牌数据，票据使用一次后失效，token时效性较长
 */
function getUserToken(ticket, resolve, reject) {
    const params = '{"ticket":"' + ticket + '"}';
    // console.log(params)
    const data = {
        appmark: appmark,
        time: timestamp,
        sign: hex_md5(appmark + appword + timestamp),
        servicename: "ticketValidate",
        params: params
    };
    lightAppJssdk.request.request({
        url: newJisUrl,
        data: data,
        header: '',
        dataType: 'json', //返回数据格式，默认json                
        async: true, //同步设置                
        success: function (data) {
            if (data.retcode == '000000') {
                // alert(222)
                const userToken = JSON.parse(data.data).token;
                // console.log(userToken)
                if (userType == "1") { //个人类型获取用户信息
                    // alert(111)
                    getUserInfoByToken(userToken, resolve, reject);
                    
                } else { //法人类型获取用户信息
                    // alert(333)
                    findCorUserByToken(userToken, resolve, reject);
                }

            } else { }
        },
        fail: function (data) {
            reject(data)
        }
    });
}

/**
 * 根据令牌获取个人完整信息
 */
export function getUserByTokenInfo(userToken) {
    return new Promise((resolve, reject) => {
        const params = '{"token":"' + userToken + '"}';
        const data = {
            appmark: appmark,
            time: timestamp,
            sign: hex_md5(appmark + appword + timestamp),
            servicename: "findOutsideUserByToken",
            params: params
        };
        lightAppJssdk.request.request({
            url: newJisUrl,
            data: data,
            header: '',
            dataType: 'json', //返回数据格式，默认json
            async: true, //同步设置
            success: function (data) {
                //			alert("findUserByToken===================" + JSON.stringify(data))
                //			console.log("findUserByToken===================" + JSON.stringify(data));
                if (data.retcode == '000000') {
                    const userinfo = Decrypt(data.data, "aKd20dbGdFvmuwrt");
                    resolve(JSON.parse(userinfo))
                } else {
                    reject(data)
                }
            },
            fail: function (data) {
                reject(data)
            }
        });
    })
}

function getUserInfoByToken(userToken, resolve, reject) {
    const params = '{"token":"' + userToken + '"}';
    // sessionStorage.setItem('userToken',JSON.stringify(apis.project));
    const data = {
        appmark: appmark,
        time: timestamp,
        sign: hex_md5(appmark + appword + timestamp),
        servicename: "findOutsideUserByToken",
        params: params
    };
    lightAppJssdk.request.request({
        url: newJisUrl,
        data: data,
        header: '',
        dataType: 'json', //返回数据格式，默认json
        async: true, //同步设置
        success: function (data) {
            			// alert("findUserByToken===================" + JSON.stringify(data))
            //			console.log("findUserByToken===================" + JSON.stringify(data));
            if (data.retcode == '000000') {
                const userinfo = Decrypt(data.data, "aKd20dbGdFvmuwrt");
                resolve(JSON.parse(userinfo))
            } else {
                reject(data)
            }
        },
        fail: function (data) {
            reject(data)
        }
    });
}

/**
 * 根据令牌获取完整法人信息
 */
function findCorUserByToken(userToken, resolve, reject) {
    const params = '{"token":"' + userToken + '"}';
    const data = {
        appmark: appmark,
        time: timestamp,
        sign: hex_md5(appmark + appword + timestamp),
        servicename: "findCorUserByToken",
        params: params
    };
    lightAppJssdk.request.request({
        url: newJisUrl,
        data: data,
        header: '',
        dataType: 'json', //返回数据格式，默认json
        async: true, //同步设置
        success: function (data) {
            //console.log("findUserByToken===================" + JSON.stringify(data));
            if (data.retcode == '000000') {
                const userinfo = Decrypt(data.data, "aKd20dbGdFvmuwrt");
                resolve(JSON.parse(userinfo))
            } else {
                reject(data)
            }
        },
        fail: function (data) {
            reject(data)
        }
    });
}

/**
 * 关闭容器
 */
function oncloseWindow() {
    lightAppJssdk.navigation.close({
        success: function (data) { },
        fail: function (data) { }
    });
};

/**
 * AES解密
 */
function Decrypt(word, key) {
    key = CryptoJS.enc.Utf8.parse(key); //转为128bit
    const srcs = CryptoJS.enc.Hex.parse(word); //转为16进制
    const str = CryptoJS.enc.Base64.stringify(srcs); //变为Base64编码的字符串
    const decrypt = CryptoJS.AES.decrypt(str, key, {
        mode: CryptoJS.mode.ECB,
        spadding: CryptoJS.pad.Pkcs7
    });
    return decrypt.toString(CryptoJS.enc.Utf8);
}

export default getUserInfo
