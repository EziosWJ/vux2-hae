<template>
    <div>
        <group title="心理疏导" label-width="5em">
            <x-input title="被帮教人" placeholder="被帮教人"></x-input>
            <x-input title="疏导人" placeholder="疏导人"></x-input>
            <x-input title="日期" placeholder="日期"></x-input>
            <x-textarea title="情况说明" ></x-textarea>
        </group>
        <group>
            <x-button type="primary">提交</x-button>
        </group>
    </div>
</template>

<script>
import { XInput , Group , XTextarea ,XButton} from 'vux'

export default {
  components: {
    XInput,
    Group,
    XTextarea ,
    XButton
  }
}
</script>

