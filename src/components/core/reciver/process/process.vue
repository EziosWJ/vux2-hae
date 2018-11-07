<template>
  <div style="width: 95%;margin: 0 auto;">
    <br>
    <div>
      <step v-model="step1" background-color='#fbf9fe'>
        <step-item title="开始疏导" description="开始疏导"></step-item>
        <step-item title="疏导中" description="疏导中"></step-item>
        <step-item title="疏导完成" description="疏导完成"></step-item>
      </step>
    </div>
    <x-hr></x-hr>
    <div>
      <step v-model="step2" background-color='#fbf9fe' gutter="20px">
        <step-item title="确定"></step-item>
        <step-item title="进行中"></step-item>
        <step-item title="结束"></step-item>
      </step>
      <div class="btn_wrap">
        <x-button type="primary" @click.native="nextStep">下一步</x-button>
      </div>
    </div>
  </div>
</template>
<script>
import { Step, StepItem, XButton, XHr } from 'vux'

export default {
  components: {
    Step,
    StepItem,
    XButton,
    XHr
  },
  data () {
    return {
      step1: 0,
      step2: 1
    }
  },
  methods: {
    nextStep () {
      this.step2 ++
    }
  }
}
</script>
