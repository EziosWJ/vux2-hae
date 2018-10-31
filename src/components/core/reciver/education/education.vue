<template>
  <div>
   
    <panel :header="heaher" :footer="footer" :list="list" :type="type" @on-img-error="onImgError"></panel>
  </div>
</template>


<script>
import { Panel, Group, Radio } from 'vux'

export default {
  components: {
    Panel,
    Group,
    Radio
  },
  methods: {
    onImgError (item, $event) {
      console.log(item, $event)
    }
  },
  data() {
    return {
      heaher:"在线教育",
      type: '1',
      list:[{
          src:'http://img1.kanshangjie.com/uploadfile/201711/2319/hangye-zhihuijioayu.jpg',
          fallbackSrc:'1',
          title:'视频教育',
          desc:'网络教育是远程教育的现代化表现，以网络技术为基础，结合院校优秀教育资源，将院校最优秀的教师、最好的教学成果传播到四面八方，学生无论是在近处还是远方只要拥有网络及一定的计算机操作能力均可学习知识。'
      },{
          src:'http://a2.att.hudong.com/53/81/01300542707689140737818683586.jpg',
          fallbackSrc:'2',
          title:'书本教育',
          desc:'网络教育运用计算机网络特有的数据库管理和双向交互功能，让系统对每个学生的资料、学习过程和阶段情况等实现完整的系统跟踪记录，同时根据不同学生的资料提出不同的个性化学习建议或计划，更利于学生的发展。'
      },{
          src:'http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=1136654ed7c451dae2fb04a8de943813/80cb39dbb6fd5266daf5c104a118972bd50736c7.jpg',
          fallbackSrc:'3',
          title:'网络教育',
          desc:'节源开流是现今社会发展所需，也是我们一直倡导的，网络教育通过平台进行教授、学习，很大程度上积累了成本，而这些费用可以用在为学生提供性价比更好的学习上，如招募更多的授课老师、使用更多更好的教学设备、减低学生的费用等。　'
      }
      
      ]
    }
  }
}
</script>