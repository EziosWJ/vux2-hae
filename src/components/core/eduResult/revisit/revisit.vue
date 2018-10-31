<template>
    <div>
        <group>
            <x-input title="回访名称" placeholder="请输入" v-model="revisit.rvName" text-align="right"></x-input>
            <datetime title="回访日期" v-model="revisit.rvCreateDate" text-align="right"></datetime>
            <x-input title="回访主题" placeholder="请输入" v-model="revisit.rvTitle" text-align="right"></x-input>
            <x-textarea title="回访结果" placeholder="请输入" v-model="revisit.rvResult"></x-textarea>
        </group>
        <group>
            <x-button type="primary" @click.native="putRevisit">提交</x-button>
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
          revisit:{}
      }
  },
  methods:{
      putRevisit(){
          this.$axios.post('/api/eduplan/putRevisit',this.revisit).then(resp => {
              if(resp.data.code === 200){
                  alert("提交成功！")
                  this.$router.history(-1)
              }
          }).catch(error => {
              console.error(error)
          })
      },
      clear(){
        //   this.revisit = {}
          for (let index = 0; index < this.revisit.length; index++) {
              this.revisit[index] = "";
          }
      }
  }
}
</script>

