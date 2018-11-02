<template>
    <div>
        <group title="登记" label-width="5em">
            <popup-picker title="被帮教人" :data="$store.state.reciverList" v-model="value1" 
            @on-show="onShow" @on-hide="onHide" @on-change="onChange" :show-name="true"
            placeholder="请选择"></popup-picker>
            <x-input title="登记人" placeholder="请输入" v-model="reHelper"></x-input>
          
            <datetime v-model="reDate" format="YYYY-MM-DD HH:mm" :minute-list="['00', '15', '30', '45']" :title="time"></datetime>
            
            <x-textarea title="缘由" placeholder="请输入" v-model="reReason"></x-textarea>
        </group>
       
        <group>
            <x-button type="primary" @click.native="a">提交</x-button>
            <x-button type="warn" @click.native="'javascript'">重置</x-button>
        </group>
        <group></group>
    </div>
</template>

<script>
import { Group,XInput,XTextarea,XButton,PopupPicker,Datetime } from 'vux'

export default {
  components: {
    Group,
    XInput,
    XTextarea,
    XButton,
    Datetime,
    PopupPicker
  },
  data(){
        return {
            list1:[['李杰','孔庆官','王坚']],
            value1:['请选择'],
            reHelper:"",
            reReason:"",
            reDate:"",
            time:"日期"
        }
    },
    methods:{
        option(){
            this.$store.dispatch('setByTheHelperList')
        },
        a(){
            this.$axios
            .post("/api/record/add",{reHelper:this.reHelper,reDate:this.reDate,reReason:this.reReason,ucId:this.value1[0]})
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

