<template>
    <div>
         <group>
            <cell>
                <img class="user-img" slot="icon" src="../../assets/vux_logo.png" alt="">
                <div slot="after-title">
                    <span>李杰</span>
                    <span class="user-cool">我是风一般的男孩子....</span>
                </div>
            </cell>
        </group>
         <group>
            <cell title="更改信息">
                <i slot="icon" class="fa fa-edit"></i>
            </cell>
        </group>
        <group>
            <cell title="退出">
                <i slot="icon" class="fa fa-sign-out"></i>
            </cell>
        </group>
    </div>
</template>

<script>
import {Cell , Group } from 'vux';
export default {
    components:{
        Cell,
        Group
    }
}
</script>

<style scoped>
img{
    height: 24px;
    padding-right: 10px;
    float: left;
}
.user-img{
    height: 60px;
    width: 60px;
}
.user-cool{
    font-size: 12px;
    color: gray;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    display: block;
}
i{
    padding-right: 10px
}
</style>

