<template>
    <div>
        <group title="心理疏导" label-width="5em">
            <x-input title="被帮教人" placeholder="被帮教人" v-model="mindLead.mdReciver"></x-input>
            <x-input title="疏导人" placeholder="疏导人" v-model="mindLead.mdLeader"></x-input>
            <x-input title="日期" placeholder="日期" v-model="mindLead.mdLeadDate"></x-input>
            <x-textarea title="情况说明" v-model="mindLead.mdCondition"></x-textarea>
        </group>
        <group>
            <x-button type="primary" @click.native="putMindLead">提交</x-button>
        </group>
    </div>
</template>

<script>
import { XInput , Group , XTextarea ,XButton} from 'vux'

export default {
  components: {
    XInput,
    Group,
    XTextarea ,
    XButton
  },
  data(){
      return {
        //   mindLead:{mdName:'',mdReciver:'',mdLeader:'',mdLeadDate:'',mdCondition:'',mdCustomer:''}
        mindLead:{}
      }
  },
  methods:{
      putMindLead(){
          this.$axios.post('/api/eduplan/putMindLead',this.mindLead).then(resp => {
              if(resp.data.code === 200){
                  alert("成功")
              }
          }).catch(error => {
              console.log(error);
          })
      }
  },
  computed:{
    
  }
}
</script>

