import SDK from '@/sdk/NIM_Web_SDK_v5.7.0';
import axios from 'axios';
import Qs from 'qs';
axios.defaults.transformRequest = function (data) {
  data = Qs.stringify(data);
  return data;
};
axios.defaults.headers = {'Content-Type': 'application/x-www-form-urlencoded'}

export default{

    initNimSDK({state,commit,dispatch}){
        console.log("initNimSDK");
        dispatch('connect')
    },

    connect({state,commit,dispatch}){
        console.log("connect");
        
        window.nim = state.nim = SDK.NIM.getInstance({
            // debug: true,
            appKey: '358259c12ef46fa86bb83e62ef763b83',
            account: 'wangjian',
            token: '56667eba809c0c093cca9ed441f7d433',
            // privateConf: {}, // 私有化部署方案所需的配置
            onconnect: onConnect,
            onwillreconnect: onWillReconnect,
            ondisconnect: onDisconnect,
            onerror: onError,

            onroamingmsgs: onRoamingMsgs,
            onofflinemsgs: onOfflineMsgs,
            onmsg: onMsg
          })
            function onConnect() {
                console.log('连接成功');
            }
            function onWillReconnect(obj) {
                // 此时说明 SDK 已经断开连接, 请开发者在界面上提示用户连接已断开, 而且正在重新建立连接
                console.log('即将重连');
                console.log(obj.retryCount);
                console.log(obj.duration);
            }
            function onDisconnect(error) {
                // 此时说明 SDK 处于断开状态, 开发者此时应该根据错误码提示相应的错误信息, 并且跳转到登录页面
                console.log('丢失连接');
                console.log(error);
                if (error) {
                switch (error.code) {
                    // 账号或者密码错误, 请跳转到登录页面并提示错误
                    case 302:
                    break;
                    // 重复登录, 已经在其它端登录了, 请跳转到登录页面并提示错误
                    case 417:
                    break;
                    // 被踢, 请提示错误后跳转到登录页面
                    case 'kicked':
                    break;
                    default:
                    break;
                }
                }
            }
            function onError(error) {
                console.log(error);
            }

            function onRoamingMsgs(obj) {
                console.log('收到漫游消息', obj);
                pushMsg(obj.msgs);
            }
            function onOfflineMsgs(obj) {
                console.log('收到离线消息', obj);
                pushMsg(obj.msgs);
            }
            function onMsg(msg) {
                console.log('收到消息', msg.scene, msg.type, msg);
                // pushMsg(msg);
                switch (msg.type) {
                case 'custom':
                    onCustomMsg(msg);
                    break;
                case 'notification':
                    // 处理群通知消息
                    onTeamNotificationMsg(msg);
                    break;
                // 其它case
                default:
                    break;
                }
            }
            function pushMsg(msgs) {
                if (!Array.isArray(msgs)) { msgs = [msgs]; }
                var sessionId = msg[0].scene + '-' + msgs[0].account;
                data.msgs = data.msgs || {};
                data.msgs[sessionId] = nim.mergeMsgs(data.msgs[sessionId], msgs);
            }
            function onCustomMsg(msg) {
                // 处理自定义消息
            }
        }
        

  
}