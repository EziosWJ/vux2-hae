<template>
    <div>
        <group-title>评定意见</group-title>
        <grid :cols="2" :show-vertical-dividers="true">
            <grid-item link="/phome/opinion/opinion" label="登记">
                <i slot="icon" class="fa fa-edit" aria-hidden="true"></i>
            </grid-item>
            <grid-item link="/phome/opinion/record" label="违规违纪记录">
                <i slot="icon" class="fa fa-file-text-o" aria-hidden="true"></i>
            </grid-item>
        </grid>
    </div> 
</template>

<script>
import { Grid, GridItem ,GroupTitle} from 'vux'

export default{
    components:{
        Grid,
        GridItem,
        GroupTitle
    }
}
</script>
