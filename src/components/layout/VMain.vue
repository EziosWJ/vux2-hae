<template>
  <div>
    <view-box>
      <!-- <transition> -->
      
        <router-view></router-view>
      
      <!-- </transition> -->
    </view-box>
    <tabbar style="position:fixed">
      <tabbar-item selected link="/phome">
        <i slot="icon" class="fa fa-sign-language" aria-hidden="true"></i>
        <span slot="label">平台</span>
      </tabbar-item>
      <tabbar-item badge="2" link="/pmessage">
        <i slot="icon" class="fa fa-commenting-o" aria-hidden="true"></i>
        <span slot="label">消息</span>
      </tabbar-item>
      <tabbar-item link="/pperson">
        <i slot="icon" class="fa fa-address-book-o" aria-hidden="true"></i>
        <span slot="label">通讯录</span>
      </tabbar-item>
      <tabbar-item  link="/pmine" show-dot>
        <i slot="icon" class="fa fa-user" aria-hidden="true"></i>
        <span slot="label">我</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell , ViewBox  } from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell,
    ViewBox 
  }
}
</script>

<style scoped>
.fa{
    display: block;
    height: 100%;
    width: 100%;
}
</style>

