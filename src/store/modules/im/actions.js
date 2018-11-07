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

    connect({state,commit,dispatch,rootState}){
        console.log("connect");
        
        window.nim = state.nim = SDK.NIM.getInstance({
            // debug: true,
            appKey: '358259c12ef46fa86bb83e62ef763b83',
            account: rootState.USER_NAME, //state.USER_NAME
            token: rootState.USER_TOKEN,//state.USER_TOKEN
            // privateConf: {}, // 私有化部署方案所需的配置
            onconnect: onConnect,
            onwillreconnect: onWillReconnect,
            ondisconnect: onDisconnect,
            onerror: onError,

            onroamingmsgs: onRoamingMsgs,
            onofflinemsgs: onOfflineMsgs,
            onmsg: onMsg,
            onSendMsgDone:onSendMsgDone
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
                // pushMsg(obj.msgs);
            }
            function onOfflineMsgs(obj) {
                console.log('收到离线消息', obj);
                // pushMsg(obj.msgs);
            }
            function onMsg(msg) {
                console.log('收到消息', msg.scene, msg.type, msg);
                // pushMsg(msg);
                commit('pushMsg',{msg})
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
            function onSendMsgDone (error, msg) {
                // store.dispatch('hideLoading')
                if (error) {
                  // 被拉黑
                  if (error.code === 7101) {
                    msg.status = 'success'
                    alert(error.message)
                  } else {
                    alert(error.message)
                  }
                }
                onMsg(msg)
              }
            // function pushMsg(msg) {
            //     if (!Array.isArray(msg)) { msg = [msg]; }
            //     var sessionId = msg[0].scene + '-' + msg[0].account;
            //     state.msgs = state.msgs || {};
            //     state.msgs[sessionId] = nim.mergeMsgs(state.msgs[sessionId], msg);
            // }
            function onCustomMsg(msg) {
                // 处理自定义消息
            }
        },
        
    sendMsg ({state, commit,rootState}, obj) {
        const nim = state.nim
        obj = obj || {}
        let type = obj.type || ''
        // store.dispatch('showLoading')
        switch (type) {
            case 'text':
            window.nim.sendText({
                scene: obj.scene,
                to: obj.to,
                text: obj.text,
                done: onSendMsgDone,
                needMsgReceipt: obj.needMsgReceipt || false
            })
            break
            case 'custom':
            nim.sendCustomMsg({
                scene: obj.scene,
                to: obj.to,
                pushContent: obj.pushContent,
                content: JSON.stringify(obj.content),
                done: onSendMsgDone
            })
        }
        function onSendMsgDone (error, msg) {
            // store.dispatch('hideLoading')
            if (error) {
              // 被拉黑
              if (error.code === 7101) {
                msg.status = 'success'
                alert(error.message)
              } else {
                alert(error.message)
              }
            }
            console.log(msg);
            
            commit('pushMsg',{msg})
          }
    }


  
}