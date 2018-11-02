<template>
    <div>
        <group>
            <x-input title="考察名称" placeholder="请输入" v-model="invOption.ioName" text-align="right"></x-input>
            <datetime title="考察日期" v-model="invOption.ioCreateDate" text-align="right"></datetime>
            <x-input title="考察主题" placeholder="请输入" v-model="invOption.ioTitle" text-align="right"></x-input>
            <x-textarea title="考察结果" placeholder="请输入" v-model="invOption.ioResult"></x-textarea>
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
          invOption:{}
      }
  },
  methods:{
      putRevisit(){
          this.$axios.post('/api/eduplan/putInvOption',this.invOption).then(resp => {
              if(resp.data.code === 200){
                  alert("提交成功！")
                  this.$router.history(-1)
              }
          }).catch(error => {
              console.error(error)
          })
      },
      clear(){
        //   this.invOption = {}
          for (let index = 0; index < this.invOption.length; index++) {
              this.invOption[index] = "";
          }
      }
  }
}
</script>

