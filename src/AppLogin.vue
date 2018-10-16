<template>
    <div>
        <group title="登录">
            <x-input title="用户：" type="text"></x-input>
            <x-input title="密码：" type="password"></x-input>
        </group>
        <group title="操作">
            <x-button type="primary">登录</x-button>    
        <group>
    </div>
</template>

<script>
import {XButton,Group,XInput} from 'vux';
export default {
    components:{
        XButton,XInput,Group
    }
}
</script>

