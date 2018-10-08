<template>
    <div>
        <swiper :list="imgList" :auto="true"/>
        <group-title>3 columns</group-title>
        <grid :cols="3" :show-vertical-dividers="true">
        <grid-item link="/component/cell" :label="t">
            <i slot="icon" class="fa fa-cog" aria-hidden="true"></i>
        </grid-item>
        <grid-item :link="{ path: '/component/cell'}" :label="t">
            <i slot="icon" class="fa fa-cog" aria-hidden="true"></i>
        </grid-item>
        <grid-item link="/component/cell" @on-item-click="a=1">
            <i slot="icon" class="fa fa-cog" aria-hidden="true"></i>
            <span slot="label">{{ t}}</span>
        </grid-item>
        <grid-item link="/component/cell" @on-item-click="a=1">
            <i slot="icon" class="fa fa-cog" aria-hidden="true"></i>
            <span slot="label">{{ t}}</span>
        </grid-item>
        </grid>
    </div>
    
</template>

<script>
import { Swiper,Grid, GridItem ,GroupTitle } from 'vux'

export default {
    data(){
        return {
            imgList:[{
                    url: 'javascript:',
                    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
                    title: '送你一朵fua'
                    }, {
                    url: 'javascript:',
                    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
                    title: '送你一辆车'
                    }, {
                    url: 'javascript:',
                    img: 'https://static.vux.li/demo/5.jpg', // 404
                    title: '送你一次旅行',
                    fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
                }],
            t:'Go to Cell'
        }
    },
  components: {
    Swiper,
    Grid,
    GridItem,
    GroupTitle
  }
}
</script>

<style scoped>
.fa{
    display: block;
    font-size: 24px
}
</style>

