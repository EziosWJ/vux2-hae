import Vue from 'vue'
import VueRouter from 'vue-router'

import PHome from '../components/platform/PHome.vue';
import PMessage from '../components/platform/PMessage.vue';
import PMine from '../components/platform/PMine.vue';
import Login from '../components/core/login/Login.vue';
import V from '../components/layout/V.vue';
import MindTestList from '../components/core/MindTestList.vue';
//===========================
import MindTestGrid from '../components/core/mindTest/MindTestGrid.vue';
import MindTestCompletion from '../components/core/mindTest/Completion.vue';
import MindTestImcompletion from '../components/core/mindTest/Imcompletion.vue';
import MindTestTest from '../components/core/mindTest/Test.vue';
//============================
import MindLeadGrid from '../components/core/mindLead/MindLeadGrid.vue';
import ApplyLead from '../components/core/mindLead/ApplyLead.vue';
//==============================
import RiskEvalGrid from '../components/core/riskEval/riskEvalGrid.vue';
import Bygone from '../components/core/riskEval/Bygone.vue';
import Eval from '../components/core/riskEval/Eval.vue';
//============================
import HelEducationGird from '../components/core/helpEducation/HelEducationGird.vue';
import Planning from '../components/core/helpEducation/Planning.vue';
//===========================
import CheckIn from '../components/core/manage/daily/CheckIn.vue';
import CheckInGrid from '../components/core/manage/daily/CheckInGrid.vue';
import CheckInRecord from '../components/core/manage/daily/CheckInRecord.vue';
import GoOutGrid from '../components/core/manage/daily/GoOutGrid.vue';
import GoOutCheckIn from '../components/core/manage/daily/GoOutCheckIn.vue';
import GoOutRecord from '../components/core/manage/daily/GoOutRecord.vue';
//===========================
import InterviewGrid from '../components/core/manage/interview/InterviewGrid.vue';
import Interview from '../components/core/manage/interview/Interview.vue';
import InterviewRecord from '../components/core/manage/interview/Record.vue';
//===========================
import WorkGrid from '../components/core/manage/work/WorkGrid.vue';
import Work from '../components/core/manage/work/Work.vue';
import WorkRecord from '../components/core/manage/work/Record.vue';
//==========================
import TalkGrid from '../components/core/manage/talk/TalkGrid.vue';
import Talk from '../components/core/manage/talk/Talk.vue';
import TalkRecord from '../components/core/manage/talk/Record.vue';
//==========================
import Community from '../components/core/manage/community/Community.vue';
import CommunityGrid from '../components/core/manage/community/CommunityGrid.vue';
import CommunityRecord from '../components/core/manage/community/Record.vue';
//==========================
import FoulGrid from '../components/core/manage/foul/FoulGrid.vue';
import Foul from '../components/core/manage/foul/Foul.vue';
import FoulRecord from '../components/core/manage/foul/Record.vue';
//==========================
import OpinionGrid from '../components/core/manage/opinion/OpinionGrid.vue';
import Opinion from '../components/core/manage/opinion/Opinion.vue';
import OpinionRecord from '../components/core/manage/opinion/Record.vue';
//==========================帮教人
import Process from '../components/core/reciver/process/process.vue';
import education from '../components/core/reciver/education/education.vue';
Vue.use(VueRouter)

const routes = [
    {
    path: '/login',
    component:Login
    },
    {
     path: '/',
     redirect:'/login'
     },
    {
    path: '/V',
    component:V,
      children:[
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
          //Talk
          {
            path:'/phome/talk/record',
            component: TalkRecord
          },

          {
            path:'/phome/talk/talk',
            component: Talk
          },
          {
            path:'/phome/talkGrid',
            component: TalkGrid
          },
          //Community
          {
            path:'/phome/community/record',
            component: CommunityRecord
          },

          {
            path:'/phome/community/community',
            component: Community
          },
          {
            path:'/phome/communityGrid',
            component: CommunityGrid
          },
          //Foul
          {
            path:'/phome/foulGrid',
            component:FoulGrid
          },
          {
            path:'/phome/foul/foul',
            component:Foul
          },
          {
            path:'/phome/foul/record',
            component:FoulRecord
          },
          //Opinion
          {
            path:'/phome/opinionGrid',
            component:OpinionGrid
          },
          {
            path:'/phome/opinion/opinion',
            component:Opinion
          },
          {
            path:'/phome/opinion/record',
            component:OpinionRecord
          },
          //帮教进程
          {
            path:'/phome/process',
            component:Process
          },
          //在线教育
          {
            path:'/phome/education',
            component:education
          },
]
},
   
  
  
  ]
  
  const router = new VueRouter({
    routes
  })

  export default router