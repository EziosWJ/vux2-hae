<template>
    <div>
        <view-box>
            <swipeout>
                <swipeout-item @on-close="handleEvents('on-close')" @on-open="handleEvents('on-open')" transition-mode="follow">
                    <div slot="right-menu">
                    <swipeout-button @click.native="onButtonClick('fav')" type="primary">确认</swipeout-button>
                    <swipeout-button @click.native="onButtonClick('delete')" type="warn">取消</swipeout-button>
                    </div>
                    <div slot="content" class="demo-content vux-1px-t">
                            <flexbox>
                                <flexbox-item :span="10">
                                    <img class="pic" src="../../assets/logo.png"/>
                                    <div>
                                        <span class="user-name">李杰</span>
                                        <span class="user-msg">发来消息aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span>
                                    </div>
                                </flexbox-item>
                                <flexbox-item :span="2">
                                    <span class="user-time" style="float:left">
                                        10:49
                                    </span>
                                    <badge text="1" style="float:right"></badge>
                                </flexbox-item>
                            </flexbox>
                    </div>
                </swipeout-item>
            </swipeout>
        </view-box>
    </div>
</template>
 
<script>
import { Swipeout, SwipeoutItem, SwipeoutButton , ViewBox , Flexbox, FlexboxItem , Badge} from 'vux'

export default {
    methods:{
        onButtonClick:(action)=>{
            console.log(action);
        },
        handleEvents:(action)=>{
            console.log(action);
            
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
