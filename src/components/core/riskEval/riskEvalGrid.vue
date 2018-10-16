<template>
    <div>
        <group-title>风险评估</group-title>
        <grid :cols="2" :show-vertical-dividers="true">
            <grid-item link="/phome/riskEval/eval" label="进行评估">
                <i slot="icon" class="fa fa-street-view" aria-hidden="true"></i>
            </grid-item>
            <grid-item link="/phome/riskEval/bygone" label="已完成的评估">
                <i slot="icon" class="fa fa-pie-chart" aria-hidden="true"></i>
            </grid-item>
        </grid>
        <group-title>评估结果</group-title>
        <div style="text-align:center;">
            <countup :start-val="1" :end-val="86" :duration="4" class="risk-per"></countup>
            <span class="risk-per">%</span>
            <span style="display:block;font-size:2em">无风险</span>
        </div>
    </div>
</template>

<script>
import { Grid, GridItem ,GroupTitle,Countup} from 'vux'

export default {
  components: {
    Grid,
    GridItem,
    GroupTitle,
    Countup
  }
}
</script>

<style scoped>
.risk-per{
    font-size: 4em
}
</style>




