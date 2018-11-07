import axios from 'axios';
import Qs from 'qs';
axios.defaults.transformRequest = function (data) {
  data = Qs.stringify(data);
  return data;
};
axios.defaults.headers = {'Content-Type': 'application/x-www-form-urlencoded'}

<<<<<<< HEAD:src/store/global/actions.js
export default {
=======

Vue.use(Vuex)


const state = {
    USER_ROLE : '',
    reciverList:[],
    USER_NAME:'',
    USER_ID:'',
    UC_CUSTOM:''
}

const mutations = {
    setUSER_ROLE(state,playload){
        state.USER_ROLE = playload.ucRole
        state.USER_ID = playload.ucId
        state.USER_NAME = playload.ucAccid
        state.UC_CUSTOM = playload.ucCustom
    },
    setByTheHelperList(state,list){
        if(state.reciverList.length<1){
            state.reciverList.push(list)
        }else{
            state.reciverList.pop()
            state.reciverList.push(list)
        }
    },
     setUSER_ID(state,ucid){
         state.USER_ID = ucid
     }
}

const actions = {
>>>>>>> lijie:src/store/index.js
    setRole({commit},playload){
        commit('setUSER_ROLE',playload)
    },
    setUcId({commit},ucId){
        commit('setUc_Id',ucId)
    },
    setByTheHelperList({commit}){
        axios.post('/api/com/getByTheHelperList').then(resp => {
            console.log(resp.data);
            let list = resp.data.content.byTheHelperList
            for (let index = 0; index < list.length; index++) {
                const element = list[index]
                list[index].value = list[index].value.toString()
            }
            console.log(list);
            commit('setByTheHelperList',list)
        }).catch(error => {
            console.log(error);
            alert(`发生内部错误${error}`)
        })
    },


    putRiskForm({commit},risk){
        axios.post('/api/eduplan/putRisk',risk).then(resp => {
            let code = resp.data.code
            if(code === 200){
                alert('成功提交！')
            }
        }).catch(error=>{
            console.log(error);
            
        })
    },
    putForm({commit},playload){
        axios.put(playload.url,playload.formData).then(resp => {
            let data = resp.data
            if(data.code === 200){
                alert("提交成功！")
            }else if(data.code === 555){
               alert("发生错误！") 
            }
        }).catch(error =>{
            alert(`发生内部错误：${error}`)
        })
    }
}
