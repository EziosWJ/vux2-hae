<template>
    <div>
        <group title="心理疏导" label-width="5em">
             <popup-picker title="被疏导人" :data="$store.state.reciverList" v-model="mindLead.mdReciver" 
               placeholder="请选择" :show-name="true"  ></popup-picker>
            <x-input title="疏导人" text-align="right" placeholder="疏导人" v-model="mindLead.mdLeader"></x-input>
             <datetime title="日期" v-model="mindLead.mdLeadDate"></datetime>
            <x-textarea title="情况说明" v-model="mindLead.mdCondition"></x-textarea>
        </group>
        <group>
            <x-button type="primary" @click.native="putMindLead">提交</x-button>
        </group>
    </div>
</template>

<script>
import { XInput , Group , XTextarea ,XButton,PopupPicker,Datetime } from 'vux'

export default {
  components: {
    XInput,
    Group,
    XTextarea ,
    XButton,
    PopupPicker ,
    Datetime
  },
  data(){
      return {
        //   mindLead:{mdName:'',mdReciver:'',mdLeader:'',mdLeadDate:'',mdCondition:'',mdCustomer:''}
        mindLead:{},
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
      },
     getByTheHelperList(){
         this.$store.dispatch('setByTheHelperList');
      }
  },
  mounted(){
      this.getByTheHelperList();
  }
}
</script>

