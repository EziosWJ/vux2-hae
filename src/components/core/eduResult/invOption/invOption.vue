<template>
    <div>
        <group>
            <popup-picker title="被考察对象" :data="this.ioReciverList" v-model="invOption.ioReciver" 
               placeholder="请选择" :show-name="true"  ></popup-picker>
            <datetime title="考察日期" v-model="invOption.ioCreateDate" text-align="right"></datetime>
            <x-input title="考察名称" placeholder="请输入" v-model="invOption.ioTitle" text-align="right"></x-input>
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
import { Group,XInput,XTextarea,XButton,Datetime,PopupPicker} from 'vux'

export default {
  components: {
    Group,
    XInput,
    XTextarea,
    XButton
    ,Datetime,PopupPicker
  },
  data(){
      return {
          invOption:{},
          ioReciverList:[]
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
      },
     getByTheHelperList(){
          this.$axios.post('/api/com/getByTheHelperOptionedList').then(resp => {
              console.log(resp.data);
              let list = resp.data.content.byTheHelperList
              for (let index = 0; index < list.length; index++) {
                  const element = list[index]
                  list[index].value = list[index].value.toString()
              }
              console.log(list);
              this.ioReciverList.push(list)
          }).catch(error => {
              console.log(error);
              alert(`发生内部错误${error}`)
          })
      },
  },
  mounted(){
      this.getByTheHelperList()
  }
}
</script>

