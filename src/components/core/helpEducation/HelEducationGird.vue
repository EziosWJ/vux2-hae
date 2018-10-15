<template>
    <div>
        <group-title>帮教方案</group-title>
        <grid :cols="2" :show-vertical-dividers="true">
            <grid-item link="/phome/helpEducation/planning" label="制定方案">
                <i slot="icon" class="fa fa-edit" aria-hidden="true"></i>
            </grid-item>
            <grid-item link="/phome/mindTestCompletion" label="我的方案">
                <i slot="icon" class="fa fa-file-text-o" aria-hidden="true"></i>
            </grid-item>
        </grid>
        <router-view></router-view>
    </div>
</template>

<script>
import { Grid, GridItem ,GroupTitle} from 'vux'

export default {
  components: {
    Grid,
    GridItem,
    GroupTitle
  }
}
</script>



