<template>
    <div>
        <group-title>日常报到</group-title>
        <grid :cols="2" :show-vertical-dividers="true">
            <grid-item link="/phome/checkIn/checkIn" label="报到登记">
                <i slot="icon" class="fa fa-edit" aria-hidden="true"></i>
            </grid-item>
            <grid-item link="/phome/checkIn/checkInRecord" label="报到记录">
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



