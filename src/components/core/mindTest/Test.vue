<template>
    <div>
        <group :title="index+1+'.'+item.mtqTitle" v-for="(item, index) in result" :key="index">
            <radio title="title" :options="[{key:getKey(item.mtqOP1),value:getValue(item.mtqOP1)},{key:getKey(item.mtqOP2),value:getValue(item.mtqOP2)}]"></radio>
            <!-- <radio title="title" :options="[{key:getKey(item.mtqOP2),value:getValue(item.mtqOP2)}]"></radio> -->
        </group>
    </div>
</template>

<script>
import { CellBox , Group ,Radio} from 'vux'

export default {
  data(){
      return {
          result:{},
          checktions:[]
      }
  },
  computed:{

  },
  methods:{
      getKey(item){
          const rtn =  (''+item).split('%')
          return rtn[1]
      },
      getValue(item){
        const rtn =  (''+item).split('%')
          return rtn[0]
      },
  },
  components: {
    CellBox,
    Group,
    Radio
  },
  mounted(){
      this.$axios.get('/api/mindTest/getMindTestQstList').then((result) => {
          console.log(result.data)
          this.result = result.data.content.qst
          
      }).catch((err) => {
          
      });
  }
}
</script>

