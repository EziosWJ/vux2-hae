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
Axios.defaults.transformRequest = function (data) {
  data = Qs.stringify(data);
  return data;
};
Axios.defaults.headers = {'Content-Type': 'application/x-www-form-urlencoded'}
Vue.prototype.$axios = Axios
FastClick.attach(document.body)

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
