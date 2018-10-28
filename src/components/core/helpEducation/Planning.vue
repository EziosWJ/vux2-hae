<template>
    <div>
        <group>
            <x-input title="方案名称" placeholder="请输入" v-model="eduplan.epName" text-align="right"></x-input>
            <datetime title="制定日期" v-model="eduplan.epCreateDate" text-align="right"></datetime>
            <x-input title="测评周期" placeholder="请输入" v-model="eduplan.epContinuing" text-align="right"></x-input>
            <x-input title="风险预警" placeholder="请输入" v-model="eduplan.epTitle" text-align="right"></x-input>
            <x-textarea title="方案内容" placeholder="请输入" v-model="eduplan.epContent"></x-textarea>
        </group>
        <group>
            <x-button type="primary" @click.native="putEduplan">提交</x-button>
            <x-button type="warn" @click.native="clear">重置</x-button>
        </group>
        <group></group>
    </div>
</template>

<script>
import { Group,XInput,XTextarea,XButton,Datetime} from 'vux'

export default {
  components: {
    Group,
    XInput,
    XTextarea,
    XButton
    ,Datetime
  },
  data(){
      return {
          eduplan:{}
      }
  },
  methods:{
      putEduplan(){
          this.$axios.post('/api/eduplan/putEduplan',this.eduplan).then(resp => {
              if(resp.data.code === 200){
                  alert("提交成功！")
                  this.$router.history(-1)
              }
          }).catch(error => {
              console.error(error)
          })
      },
      clear(){
        //   this.eduplan = {}
          for (let index = 0; index < this.eduplan.length; index++) {
              this.eduplan[index] = "";
          }
      }
  }
}
</script>

