<template>
    <div>
        <group-title>外出请假</group-title>
        <grid :cols="2" :show-vertical-dividers="true">
            <grid-item link="/phome/goOut/goOutCheckIn" label="请假登记">
                <i slot="icon" class="fa fa-edit" aria-hidden="true"></i>
            </grid-item>
            <grid-item link="/phome/goOut/goOutRecord" label="外出请假记录">
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



