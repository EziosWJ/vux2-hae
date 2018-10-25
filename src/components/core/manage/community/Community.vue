<template>
    <div>
        <group title="社区服务" label-width="5em">
            <popup-picker title="被帮教人" :data="list1" v-model="value1" 
            @on-show="onShow" @on-hide="onHide" @on-change="onChange" 
            placeholder="请选择"></popup-picker>
            <popup-picker title="目标单位" :data="list2" v-model="value2" 
            @on-show="onShow" @on-hide="onHide" @on-change="onChange" 
            placeholder="请选择"></popup-picker>
            <x-input title="登记人" placeholder="请输入"></x-input>
            <x-input title="日期" placeholder="请输入"></x-input>
            <x-textarea title="情况" placeholder="请输入"></x-textarea>
        </group>
        <group>
            <x-button type="primary" @click.native="'a'">提交</x-button>
            <x-button type="warn" @click.native="'javascript'">重置</x-button>
        </group>
        <group></group>
    </div>
</template>

<script>
import { Group,XInput,XTextarea,XButton,PopupPicker} from 'vux'

export default {
  components: {
    Group,
    XInput,
    XTextarea,
    XButton,
    PopupPicker
  },
  data(){
        return {
            list1:[['李杰','孔庆官','王坚']],
            list2:[['纺织厂','富士康','煤炭机械']],
            value1:['请选择'],
            value2:['请选择']
        }
    },
    methods:{
        onChange(){
            console.log('changed');
            
        },
        onShow(){
            console.log('show');
            
        },
        onHide(){
            console.log('hide');
            
        }

    }
}
</script>

<style scoped>
div.vux-popup-picker-select{
    text-align: left;
}
</style>

