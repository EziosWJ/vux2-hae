<template>
    <div>
        <v-header/>
        <group v-for="(messages, index) in $store.state.im.msgs['p2p-'+ who +'']" :key="index" :title="localDate(messages.time)">
            <cell primary="content" :title="messages.from+'：'" :value="messages.text"></cell>
            <!-- <cell v-if="messages.from != who" style="text-align:right">
                {{messages.text}} 
            </cell>
            <cell v-else>
                {{messages.text}} 
            </cell> -->
        </group>
        <tabbar style="position:fixed">
            <group>
                <x-input  v-model="sendObj.text">
                <span slot="right" @click="sendMsg()">
                    发送
                </span>
            </x-input>
            </group>
        </tabbar>
    </div>
</template>

<script>
import VHeader from '../layout/VHeader'
import {XInput ,Group,Tabbar,Cell } from 'vux';
export default {
    components:{
        VHeader,
        XInput,
        Group,Tabbar,Cell 
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
        },
        localDate(date){
            return new Date(date).toLocaleString().replace(/\//g, "-")
        }
    },
    computed:{
        
    }

}
</script>

