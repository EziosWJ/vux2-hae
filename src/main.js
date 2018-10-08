// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import 'font-awesome/css/font-awesome.css'

import PHome from './components/platform/PHome.vue';
import PMessage from './components/platform/PMessage.vue';
import PMine from './components/platform/PMine.vue';

Vue.use(VueRouter)

const routes = [
  {
  path: '/',
  redirect:'/phome'
  },
  {
  path: '/phome',
  component: PHome
  },
  {
  path: '/pmessage',
  component: PMessage
  },
  {
  path: '/pmine',
  component: PMine
  },

]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
