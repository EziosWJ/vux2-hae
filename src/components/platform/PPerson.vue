<template>
    <div>
        <view-box>
            <swipeout>
                <swipeout-item @click.native="pushChat(item)" @on-close="handleEvents('on-close')" @on-open="handleEvents('on-open')" transition-mode="follow"
                             v-for="(item, index) in chatList" :key="index">
                    <!-- <router-link  :to=""> -->
                        <!-- <div slot="right-menu">
                        <swipeout-button @click.native="onButtonClick('fav')" type="primary">确认</swipeout-button>
                        <swipeout-button @click.native="onButtonClick('delete')" type="warn">取消</swipeout-button>
                        </div> -->
                        <div slot="content" class="demo-content vux-1px-t" >
                                <flexbox >
                                    <flexbox-item :span="10" >
                                        <img class="pic" src="../../assets/60x60.gif" style="margin-right:10px"/>
                                        <div style="padding-left:10px">
                                            <span class="user-name">{{item.ucAccid}}</span>
                                            <span class="user-msg">{{item.ucCustom}}</span>
                                        </div>
                                    </flexbox-item>
                                    <flexbox-item :span="2">
                                        <span class="user-time" style="float:left">
                                            
                                        </span>
                                        <!-- <badge text="1" style="float:right"></badge> -->
                                    </flexbox-item>
                                </flexbox>
                        </div>
                    <!-- </router-link> -->
                </swipeout-item>
            </swipeout>
        </view-box>
    </div>
</template>
 
<script>
import { Swipeout, SwipeoutItem, SwipeoutButton , ViewBox , Flexbox, FlexboxItem , Badge} from 'vux'

export default {
    data(){
        return {
            chatList:{}
        }
    },
    mounted(){
        this.getPersonList()
    },
    methods:{
        onButtonClick:(action)=>{
            console.log(action);
        },
        handleEvents:(action)=>{
            console.log(action);
            
        },
        getPersonList(){
            let ucAccid = this.$store.state.USER_NAME
            this.$axios.post('/api/userCase/getChatList',{ucAccid}).then(resp=>{
                let data = resp.data.content
                this.chatList = data.chatList
            }).catch(error=>{
                console.log(error);
                
            })
        },
        pushChat(item){
            this.$router.push('/pchat/'+item.ucAccid)
        }
    },
 components: {
    Swipeout,
    SwipeoutItem,
    SwipeoutButton,
    ViewBox,
    Flexbox, 
    FlexboxItem,
    Badge
  }
}
</script>

<style scoped>
.demo-content{
    padding: 10px;
    /* height: 26px; */
}
.pic{
    height: 44px;
    width: 44px;
    float:left;
}

.user-msg{
    font-size: 12px;
    color: gray;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.user-time{
    font-size: 12px;
    color: gray;
}
span{
    display: block;
}

</style>
