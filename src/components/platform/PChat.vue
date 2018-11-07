<template>
    <div>
        <v-header/>
        <group v-for="(messages, index) in $store.state.im.msgs['p2p-'+ who +'']" :key="index">
            {{messages.text}}  --- {{messages.time}}
        </group>
        <group class="weui-tabbar">
            <x-input  v-model="sendObj.text">
                <span slot="right" @click="sendMsg()">
                    发送
                </span>
            </x-input>
        </group>
    </div>
</template>

<script>
import VHeader from '../layout/VHeader'
import {XInput ,Group} from 'vux';
export default {
    components:{
        VHeader,
        XInput,
        Group
    },
    props:['who'],
    data(){
        return {
            // who:'wangjian',
            /**
             *                 scene: obj.scene,
                to: obj.to,
                text: obj.text,
             */
            sendObj:{scene:'p2p',to:"",text:'',type:'text'}
        }
    },
    methods:{
        transRealTime(time){
            return ''
        },
        sendMsg(){
            this.sendObj.to = this.who
            this.$store.dispatch('im/sendMsg',this.sendObj).then(()=>{
                this.sendObj.text = ''
            })
        }
    },

}
</script>

