// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import Axios from 'axios'
import Qs from 'qs';
import store from './store/store'
import App from './App'
import 'font-awesome/css/font-awesome.css'
import 'swiper/dist/css/swiper.css';

require('./common/css/initial.css')//初始化css
require('./common/js/rem.js')//页面缩放js

const Url = 'http://www.tyjcywj.cn'//域名

Axios.defaults.transformRequest = function (data) {
  data = Qs.stringify(data);
  return data;
};
Axios.defaults.headers = {'Content-Type': 'application/x-www-form-urlencoded'}
Vue.prototype.$axios = Axios
Vue.prototype.Url = Url
FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
