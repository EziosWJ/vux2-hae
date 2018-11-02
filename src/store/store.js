import Vue from 'vue';
import Vuex from 'vuex';
import actions from './global/actions';
import state from './global/state';
import mutations from './global/mutations';
import getters from './global/getters';
import modules from './modules/modules';


Vue.use(Vuex)

export default new Vuex.Store({
    state,//状态对象
    mutations,//包含多个更新state函数的对象
    actions,//包含多个事件回调函数的对象
    getters, //包含多个getter计算属性函数的对象
    modules,
})