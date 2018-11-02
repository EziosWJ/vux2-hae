<template>
    <div>
        <group title="教育记录" label-width="5em">
            <popup-picker title="被帮教人" :data="$store.state.reciverList" v-model="value1" 
            @on-show="onShow" @on-hide="onHide" @on-change="onChange" show-name="true"
            placeholder="请选择"></popup-picker>
            
            <x-input title="登记人" placeholder="请输入" v-model="teHelper"></x-input>
             <datetime v-model="teDate" format="YYYY-MM-DD HH:mm" :minute-list="['00', '15', '30', '45']" title="时间"></datetime>
            <x-textarea title="谈话记录" v-model="teReason" placeholder="请输入"></x-textarea>
        </group>
        <group>
            <x-button type="primary" @click.native="a">提交</x-button>
            <x-button type="warn" @click.native="'javascript'">重置</x-button>
        </group>
        <group></group>
    </div>
</template>

<script>
import { Group,XInput,XTextarea,XButton,PopupPicker,Datetime} from 'vux'

export default {
  components: {
    Group,
    XInput,
    XTextarea,
    XButton,
    PopupPicker,
    Datetime
  },
  data(){
        return {
            value1:['请选择'],
            teHelper:"",
            teDate:"",
            teReason:""
        }
    },
    methods:{
        option(){
            this.$store.dispatch('setByTheHelperList')
        },
        a(){
            this.$axios
            .post("/api/record/putTalkEducation",{teHelper:this.teHelper,teDate:this.teDate,teReason:this.teReason,ucId:this.value1[0]})
            .then(resp=>{
                let code = resp.data.code
                if(code===200){
                    alert('提交成功')
                }else{
                    alert('提交失败')
                }
                console.log(resp);
            })
        },
        onChange(){
            console.log('changed');
            
        },
        onShow(){
            console.log('show');
            
        },
        onHide(){
            console.log('hide');
            
        }

    },mounted(){
        this.option();
    }
}
</script>

<style scoped>
div.vux-popup-picker-select{
    text-align: left;
}
</style>

