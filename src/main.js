// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import FastClick from 'fastclick'
import router from './router'
import Axios from 'axios'
import qs from 'qs';
import store from './store/store'
import App from './App'
import 'font-awesome/css/font-awesome.css'
import 'swiper/dist/css/swiper.css';
import {Toast,MessageBox } from 'mint-ui';
import 'mint-ui/lib/style.css'; 
alert= Vue.prototype.$toast = Toast;
Vue.prototype.$MessageBox = MessageBox;

require('./common/css/initial.css')//初始化css
require('./common/js/rem.js')//页面缩放js


Axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
	if(config.method === 'post')
	config.transformRequest(data=>{
		qs.stringify(data)
		return data
	})
    // config.data = qs.stringify(config.data)
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

Axios.defaults.headers.post = {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}
Vue.prototype.$axios = Axios
FastClick.attach(document.body)

Vue.config.productionTip = false


// 全局路由守卫
router.beforeEach((to, from, next) => {
	let isLogin
	if(sessionStorage.getItem("userData")) {
		isLogin = true
	} else {
		isLogin = false
	}
	if(!isLogin && to.path != '/login' ) {
		next({path: '/login'})
	}else{
		next();
	}
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
