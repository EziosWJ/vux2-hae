<template>
    <div>
        <load-more tip="修改用户信息" :show-loading="false" background-color="#fbf9fe"></load-more>
        <group>
            <x-textarea title="个新签名" v-model="ucCustom" :placeholder="customs"></x-textarea>
        </group>
        <group>
            <x-button type="primary" @click.native="a">提交</x-button>
            <x-button type="warn" @click.native="'javascript'">重置</x-button>
        </group>
    </div>
</template>
<script>
import { XTextarea, Group,LoadMore,XButton } from 'vux'
const date = new Date()
export default {
  components: {
    XTextarea,
    Group,
    LoadMore,
    XButton
  },data(){
      return{
          ucCustom:'',
          customs:this.$store.state.UC_CUSTOM
      }
  } ,methods:{
      a(){
        this.$axios.post("/api/userCase/editUserInfo",{ucId:this.$store.state.USER_ID,ucCustom:this.ucCustom}).then(resp=>{
            let code = resp.data.code
                if(code===200){
                    alert('提交成功')
                }else{
                    alert('提交失败')
                }
                console.log(resp);
        })
      },

  }
  
}
</script>

