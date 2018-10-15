<template>
    <div>
        <group title="申请心理疏导">
            <x-input title="申请人" placeholder="I'm placeholder"></x-input>
            <x-input title="申请人" placeholder="I'm placeholder"></x-input>
            <x-input title="申请人" placeholder="I'm placeholder"></x-input>
            <x-textarea title="情况" v-model="value"></x-textarea>
        </group>
    </div>
</template>

<script>
import { XInput , Group , XTextarea } from 'vux'

export default {
  components: {
    XInput,
    Group,
    XTextarea 
  }
}
</script>

