<template>
    <div>
        <group>
            <x-input title="奖惩名称" placeholder="请输入" v-model="rewardPunish.rpName" text-align="right"></x-input>
            <datetime title="奖惩日期" v-model="rewardPunish.rpCreateDate" text-align="right"></datetime>
            <x-input title="奖惩主题" placeholder="请输入" v-model="rewardPunish.rpTitle" text-align="right"></x-input>
            <x-textarea title="奖惩结果" placeholder="请输入" v-model="rewardPunish.rpResult"></x-textarea>
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
          rewardPunish:{}
      }
  },
  methods:{
      putRevisit(){
          this.$axios.post('/api/eduplan/putRewardPunish',this.rewardPunish).then(resp => {
              if(resp.data.code === 200){
                  alert("提交成功！")
                  this.$router.history(-1)
              }
          }).catch(error => {
              console.error(error)
          })
      },
      clear(){
        //   this.rewardPunish = {}
          for (let index = 0; index < this.rewardPunish.length; index++) {
              this.rewardPunish[index] = "";
          }
      }
  }
}
</script>

