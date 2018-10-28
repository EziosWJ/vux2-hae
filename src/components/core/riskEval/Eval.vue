<template>
    <div>
        <group title="进行评估">
            <popup-picker title="被评估人" :data="$store.state.reciverList" v-model="risk.rkReciver" 
                placeholder="请选择" :show-name="true" ></popup-picker>
             <x-input title="疏导人" text-align="right" placeholder="疏导人" v-model="risk.rkEvaluator"></x-input>
             <datetime title="日期" v-model="risk.rkDate"></datetime>
            <x-textarea title="评估结果" v-model="risk.rkResult"></x-textarea>
        </group>
        <group>
            <x-button type="primary" @click.native="putRiskForm">提交</x-button>
        </group>
    </div>
</template>

<script>
import {Group ,Radio ,XButton,XInput,PopupPicker,Datetime,XTextarea} from 'vux';
export default {
    components:{
        Group,
        Radio,
        XButton,
        XInput,
        PopupPicker,
        Datetime,
        XTextarea
    },
    data(){
        return {
            risk:[],
            value1:['请选择']
        }
    },
    methods:{
        setList(){
            this.$store.dispatch('setByTheHelperList');
        },
        putRiskForm(){
            this.$store.dispatch('putRiskForm',this.risk);
        }
    },
    mounted(){
        this.setList()
    }
}
</script>

