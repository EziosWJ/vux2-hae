<template>
    <div>
        <swiper :list="imgList" :auto="true"/>
        <group-title>平台菜单</group-title>
        <!-- <group-title>store:{{$store.state.USER_ROLE}}</group-title> -->
        <grid :cols="3" :show-vertical-dividers="true">
            <grid-item v-for="(menu, index) in mainMenu" :key="index"
                 :link="menu.mSrc" :label="menu.mName" >
                <i slot="icon" :class="'fa ' + menu.mFa" aria-hidden="true"></i>
            </grid-item>
        </grid>
    </div>
    
</template>

<script>
import { Swiper, Grid, GridItem, GroupTitle } from "vux";

export default {
  data() {
    return {
      imgList: [
        {
          url: "javascript:",
          img:
            "https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg",
          title: "送你一朵fua"
        },
        {
          url: "javascript:",
          img:
            "https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg",
          title: "送你一辆车"
        },
        {
          url: "javascript:",
          img: "https://static.vux.li/demo/5.jpg", // 404
          title: "送你一次旅行",
          fallbackImg:
            "https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg"
        }
      ],
      t: "Go to Cell",
      mainMenu: {}
    };
  },
  components: {
    Swiper,
    Grid,
    GridItem,
    GroupTitle
  },
  methods: {
    getMenu() {
        // this.mainMenu = this.$store.dispatch('getMenu')
      this.$axios
        .post("/api/menu", { role: this.$store.state.USER_ROLE })
        .then(resp => {
          console.log(resp.data);
          this.mainMenu = resp.data.content.mainMenu;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
      this.getMenu()
  }
};
</script>

<style scoped>
.fa {
  display: block;
  font-size: 24px;
}
</style>

