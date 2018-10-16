<template>
    <div>
        <group title="进行评估">
            <popup-picker title="被帮教人" :data="list1" v-model="value1" 
            @on-show="onShow" @on-hide="onHide" @on-change="onChange" 
            placeholder="请选择"></popup-picker>
        </group>
    </div>
</template>

<script>
import {Group ,Radio ,XButton,XInput,PopupPicker} from 'vux';
export default {
    components:{
        Group,
        Radio,
        XButton,
        XInput,
        PopupPicker
    },
    data(){
        return {
            list1:[['李杰','孔庆官','王坚']],
            value1:['请选择']
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

