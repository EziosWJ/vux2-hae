import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)


const state = {
    USER_ROLE : '',
    Uc_Id:'',
}

const mutations = {
    setUSER_ROLE(state,ucRole){
        state.USER_ROLE = ucRole
    },
    setUc_Id(state,ucid){
        state.Uc_Id = ucid
    }
}

const actions = {
    setRole({commit},ucRole){
        commit('setUSER_ROLE',ucRole)
    },
    setUcId({commit},ucid){
        commit('setUc_Id',ucid)
    }
}

const getters = {

}



export default new Vuex.Store({
    state,//状态对象
    mutations,//包含多个更新state函数的对象
    actions,//包含多个事件回调函数的对象
    getters, //包含多个getter计算属性函数的对象
})