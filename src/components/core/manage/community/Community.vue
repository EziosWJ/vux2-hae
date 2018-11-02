<template>
    <div>
        <group title="社区服务" label-width="5em">
<<<<<<< HEAD
            <popup-picker title="被帮教人" :data="$store.state.reciverList" v-model="value1" 
            @on-show="onShow" @on-hide="onHide" @on-change="onChange" show-name="true"
=======
            <popup-picker title="被帮教人" :data="list1" v-model="value1" 
            @on-show="onShow" @on-hide="onHide" @on-change="onChange" :show-name="true"
>>>>>>> 1052d6a655de9bf12e509fbca46d4369ddd37958
            placeholder="请选择"></popup-picker>
            <popup-picker title="目标单位" :data="list2" v-model="value2" 
            @on-show="onShow" @on-hide="onHide" @on-change="onChange" 
            placeholder="请选择"></popup-picker>
            <x-input title="登记人" v-model="csHelper" placeholder="请输入"></x-input>
           <datetime v-model="csDate" format="YYYY-MM-DD HH:mm" :minute-list="['00', '15', '30', '45']" title="时间"></datetime>
            <x-textarea title="情况" v-model="csReason" placeholder="请输入"></x-textarea>
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
           
            list2:[['纺织厂','富士康','煤炭机械']],
            value1:['请选择'],
            value2:['请选择'],
            csHelper:"",
            csDate:"",
            csReason:""

        }
    },
    methods:{
         option(){
            this.$store.dispatch('setByTheHelperList')
        },
        a(){
            this.$axios
            .post("/api/record/putCommiuntyRecord",{csHelper:this.csHelper,csDate:this.csDate,csReason:this.csReason,ucId:this.value1[0],csPlace:this.value2[0]})
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

