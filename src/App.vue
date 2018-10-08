<template>
  <div id="app">
    <v-header/>
    <v-main/>
  </div>
</template>

<script>
import VHeader from './components/layout/VHeader';
import VMain from './components/layout/VMain';
export default {
  name: 'app',
  components:{
    VHeader,
    VMain,
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
