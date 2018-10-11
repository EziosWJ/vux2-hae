<template>
    <div>
        <group-title>心理测评</group-title>
        <grid :cols="2" :show-vertical-dividers="true">
            <grid-item link="/phome/mindTestImcompletion" label="未完成的测评">
                <i slot="icon" class="fa fa-edit" aria-hidden="true"></i>
            </grid-item>
            <grid-item link="/phome/mindTestCompletion" label="已完成的测评">
                <i slot="icon" class="fa fa-edit" aria-hidden="true"></i>
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



