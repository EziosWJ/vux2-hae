// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import Axios from 'axios'

import App from './App'
import 'font-awesome/css/font-awesome.css'

import PHome from './components/platform/PHome.vue';
import PMessage from './components/platform/PMessage.vue';
import PMine from './components/platform/PMine.vue';
import MindTestList from './components/core/MindTestList.vue';
import MindTestGrid from './components/core/mindTest/MindTestGrid.vue';
import MindTestCompletion from './components/core/mindTest/Completion.vue';
import MindTestImcompletion from './components/core/mindTest/Imcompletion.vue';
import MindTestTest from './components/core/mindTest/Test.vue';

Vue.prototype.$axios = Axios
Vue.use(VueRouter)

const routes = [
  {
  path: '/',
  redirect:'/phome'
  },
  //=================================tarbar============================
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
  //=================================core============================
  //mindTest
  {
  path: '/phome/mindTestGrid',
  component: MindTestGrid
  },
  {
  path: '/phome/mindTestCompletion',
  component: MindTestCompletion
  },
  {
  path: '/phome/mindTestImcompletion',
  component: MindTestImcompletion
  },
  {
  path: '/phome/mindTest',
  component: MindTestTest
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
