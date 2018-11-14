<template>
    <div>
        <group :title="index+1+'.'+item.mtqTitle" v-for="(item, index) in result" :key="index">
            <radio title="title" v-model="checktions[index]" :options="[{key:getKey(item.mtqOP1),value:getValue(item.mtqOP1)},{key:getKey(item.mtqOP2),value:getValue(item.mtqOP2)}]"></radio>
            <!-- <radio title="title" :options="[{key:getKey(item.mtqOP2),value:getValue(item.mtqOP2)}]"></radio> -->
        </group>
        <group>
            <cell-box>
                <p>总分数为：{{score}}</p>
                <x-button type="primary" @click.native="caculation">提交</x-button>
            </cell-box>
        </group>
    </div>
</template>

<script>
import { CellBox , Group ,Radio ,XButton} from 'vux'

export default {
  data(){
      return {
          result:{},
          checktions:[],
          score:0,
      }
  },
  computed:{
      countScore(){
            let count = 0
            this.checktions.forEach((item,index)=>{
                count += parseInt(item)
            })
            return count
      }
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
      caculation(){
        console.log("count:" + this.countScore);
        this.score = this.countScore  
        this.$axios.post('/api/mindTest/putMindTestResult',{urId:this.$store.USER_ID,mtName:'基础测评',mtType:10001,mtScore:this.score}).then(resp=>{
            let data = resp.data
            if(data.code === 200){}
            alert('提交成功')
        }).catch(error =>{
            console.log(error);
        })
      }
  },
  components: {
    CellBox,
    Group,
    Radio,
    XButton
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

