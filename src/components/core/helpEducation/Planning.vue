<template>
    <div>
        <group>
            <x-input title="方案名称" placeholder="请输入"></x-input>
            <x-input title="制定日期" placeholder="请输入"></x-input>
            <x-input title="测评周期" placeholder="请输入"></x-input>
            <x-input title="风险预警" placeholder="请输入"></x-input>
            <x-textarea title="情况表现" placeholder="请输入"></x-textarea>
        </group>
        <group>
            <x-button type="primary" @click.native="'a'">提交</x-button>
            <x-button type="warn" @click.native="'javascript'">重置</x-button>
        </group>
        <group></group>
    </div>
</template>

<script>
import { Group,XInput,XTextarea,XButton} from 'vux'

export default {
  components: {
    Group,
    XInput,
    XTextarea,
    XButton
  }
}
</script>

