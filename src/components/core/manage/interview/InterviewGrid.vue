<template>
    <div>
        <group-title>走访调查</group-title>
        <grid :cols="2" :show-vertical-dividers="true">
            <grid-item link="/phome/interview/interview" label="走访">
                <i slot="icon" class="fa fa-edit" aria-hidden="true"></i>
            </grid-item>
            <grid-item link="/phome/interview/interviewRecord" label="走访调查记录">
                <i slot="icon" class="fa fa-file-text-o" aria-hidden="true"></i>
            </grid-item>
        </grid>
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



