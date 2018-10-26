import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import Qs from 'qs';
axios.defaults.transformRequest = function (data) {
  data = Qs.stringify(data);
  return data;
};
axios.defaults.headers = {'Content-Type': 'application/x-www-form-urlencoded'}


Vue.use(Vuex)

const state = {
    USER_ROLE : '',

}

const mutations = {
    setUSER_ROLE(state,ucRole){
        state.USER_ROLE = ucRole
    }
}

const actions = {
    setRole({commit},ucRole){
        commit('setUSER_ROLE',ucRole)
    },
}

const getters = {

}



export default new Vuex.Store({
    state,//状态对象
    mutations,//包含多个更新state函数的对象
    actions,//包含多个事件回调函数的对象
    getters, //包含多个getter计算属性函数的对象
})