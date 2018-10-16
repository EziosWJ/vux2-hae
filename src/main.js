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
//===========================
import MindTestGrid from './components/core/mindTest/MindTestGrid.vue';
import MindTestCompletion from './components/core/mindTest/Completion.vue';
import MindTestImcompletion from './components/core/mindTest/Imcompletion.vue';
import MindTestTest from './components/core/mindTest/Test.vue';
//============================
import MindLeadGrid from './components/core/mindLead/MindLeadGrid.vue';
import ApplyLead from './components/core/mindLead/ApplyLead.vue';
//==============================
import RiskEvalGrid from './components/core/riskEval/riskEvalGrid.vue';
import Bygone from './components/core/riskEval/Bygone.vue';
import Eval from './components/core/riskEval/Eval.vue';
//============================
import HelEducationGird from './components/core/helpEducation/HelEducationGird.vue';
import Planning from './components/core/helpEducation/Planning.vue';
//===========================
import CheckIn from './components/core/manage/daily/CheckIn.vue';
import CheckInGrid from './components/core/manage/daily/CheckInGrid.vue';
import CheckInRecord from './components/core/manage/daily/CheckInRecord.vue';
import GoOutGrid from './components/core/manage/daily/GoOutGrid.vue';
import GoOutCheckIn from './components/core/manage/daily/GoOutCheckIn.vue';
import GoOutRecord from './components/core/manage/daily/GoOutRecord.vue';
//===========================
import InterviewGrid from './components/core/manage/interview/InterviewGrid.vue';
import Interview from './components/core/manage/interview/Interview.vue';
import InterviewRecord from './components/core/manage/interview/Record.vue';
//===========================
import WorkGrid from './components/core/manage/work/WorkGrid.vue';
import Work from './components/core/manage/work/Work.vue';
import WorkRecord from './components/core/manage/work/Record.vue';
Vue.prototype.$axios = Axios
Vue.use(VueRouter)
FastClick.attach(document.body)

Vue.config.productionTip = false

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
  //mindLead
  {
  path: '/phome/mindLeadGrid',
  component: MindLeadGrid
  },
  {
  path: '/phome/mindLead/applyLead',
  component: ApplyLead
  },
  //riskEval
  {
  path: '/phome/riskEvalGrid',
  component: RiskEvalGrid
  },
  {
  path: '/phome/riskEval/bygone',
  component: Bygone
  },
  {
  path: '/phome/riskEval/eval',
  component: Eval
  },
  //helpEducation
  {
  path: '/phome/helpEducationGrid',
  component: HelEducationGird,
  },
  {
    path:'/phome/helpEducation/planning',
    component: Planning
  },
  //daily
  {
    path:'/phome/checkInGrid',
    component: CheckInGrid
  },
  {
    path:'/phome/checkIn/checkIn',
    component: CheckIn
  },
  {
    path:'/phome/checkIn/checkInRecord',
    component: CheckInRecord
  },
  {
    path:'/phome/goOutGrid',
    component: GoOutGrid
  },
  {
    path:'/phome/goOut/goOutCheckIn',
    component: GoOutCheckIn
  },
  {
    path:'/phome/goOut/goOutRecord',
    component: GoOutRecord
  },
  //Interview
  {
    path:'/phome/interviewGrid',
    component: InterviewGrid
  },
  {
    path:'/phome/interview/interview',
    component: Interview
  },
  {
    path:'/phome/interview/interviewRecord',
    component: InterviewRecord
  },
  //Work
  {
    path:'/phome/workGrid',
    component: WorkGrid
  },
  {
    path:'/phome/work/work',
    component: Work
  },
  {
    path:'/phome/work/record',
    component: WorkRecord
  },
  


]

const router = new VueRouter({
  routes
})



/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
