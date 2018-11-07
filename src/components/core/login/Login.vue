<template>
    <div>
        <view-box>
            <!-- <group> -->
            <!-- <div class="out">
                <img src="../../../assets/xy.gif" style="" alt="">
            </div> -->
            <!-- </group> -->

             <blur :blur-amount=40 url="../../../assets/login.jpg">
                <p class="center"><img src="../../../assets/login.jpg"></p>
            </blur>
            <div style="margin:50px"></div>
            <group>
                <x-input placeholder="用户名" v-model="ucName">
                    <i slot="label" class="fa fa-user"></i>
                </x-input>
                <x-input placeholder="密码" type="password" v-model="ucPassword">
                    <i slot="label" class="fa fa-lock"></i>
                </x-input>
            </group>
            <group>
                <x-button type="primary" @click.native="login">登录</x-button>
            </group>
        </view-box>
    </div>
</template>

<script>
import { ViewBox,Group,XInput,XButton,Blur } from 'vux'

export default {
  components: {
    ViewBox,
    Group,
    XInput,
    XButton,
    Blur
  },
  data(){
      return {
          ucName:"",
          ucPassword:"",
         
      }
  },
  methods:{
      login(){
          let name = this.ucName
          let psw = this.ucPassword
          this.$axios
          .post("/api/userCase/login",{ucName:name,ucPassword:psw},
          )
          .then(resp => {
            let code = resp.data.code
            let ucRole = resp.data.content.uc.ucRole
            let ucId =   resp.data.content.uc.ucId
            let ucAccid = resp.data.content.uc.ucAccid
            let ucCustom = resp.data.content.uc.ucCustom
            let ucToken = resp.data.content.uc.ucToken
            console.log(`ucid:${ucId}`);
            console.log(`权限为ucRole:${ucRole}${ucAccid}`)
            this.$store.dispatch('setRole',{ucRole,ucId,ucAccid,ucToken,ucCustom})
            if(code === 200){
                console.log(``)
                alert("欢迎！" + resp.data.content.uc.ucAccid + "!")
                this.$store.dispatch('im/initNimSDK')
                this.$router.push('/phome')
            }else{
                alert("登录失败，请重新登录！")
            }
          }).catch(error => {
          console.log(error);
         });
      }
  }
}
</script>

<style scoped>
    i{
        padding-right: 10px;
    }
    /* img{
        position:absolute;
        clip:rect(0 133px 192px 0);
    }
    .out{
         position:relative;
            display:inline-block;
            width:133px;
            height: 192px;   
    } */
    .center {
  text-align: center;
  padding-top: 20px;
  color: #fff;
  font-size: 18px;
}
.center img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid #ececec;
}
</style>


