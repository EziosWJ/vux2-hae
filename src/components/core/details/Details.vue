<template>
    <div>
        <h1>{{title}}</h1>
        <p>{{content}}</p>
    </div>
</template>
<script>
    import{Divider,LoadMore } from 'vux'
    export default{
        components:{
             Divider,
             LoadMore 
        },
        methods:{
           
        },data(){
            return{
                title:"一个美好的心情",
                content:"一个人只有挺住今天含泪的耕耘，才会赢得明天欢笑的收割；人不要急于等着回报，只要你种下种子，就一定会有收获！只管耕耘，不问收获，因为播种和收获往往不在同一个季节！有时候，不是树太高，而是你没有努力往上爬，不是井里没水，而是挖的不够深，不是成功来的慢，是放弃的快；成功不是靠奇迹，而是靠耕耘到成熟的轨迹！"
            }
        }
    }
</script>
<style lang="less" scoped>
h1{
    text-align:center;
}
P{
    text-indent:35px;
    display: block;
    margin: 10px 30px 0px 30px;
    line-height: 30px;
    font-size: 1em;
}
</style>
