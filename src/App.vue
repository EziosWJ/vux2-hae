<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
	export default {
	  name: 'app',
	}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #f4f4f4;
  font-size: 0.24rem;
  color: #333;
}
</style>
