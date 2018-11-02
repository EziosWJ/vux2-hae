<template>
    <div>
     <group title="心理疏导" label-width="5em">
            <popup-picker title="被疏导人" :data="$store.state.reciverList" v-model="mdReciver" 
               placeholder="请选择" :show-name="true"  @on-change="getMindLeadRecent(mdReciver)"></popup-picker>
    </group>
    <div style="padding:10px;margin-top:50px">
         <step v-model="step" background-color='#fbf9fe' gutter="20px">
            <step-item title="准备疏导"></step-item>
            <step-item title="进行疏导"></step-item>
            <step-item title="完成疏导"></step-item>
        </step>
    </div>
        <!-- <group>
            <x-button type="primary" @click.native="putMindLead">提交</x-button>
        </group> -->
    </div>
</template>

<script>
import { XInput , Group , XTextarea ,XButton,PopupPicker,Datetime ,Step, StepItem} from 'vux'

export default {
  components: {
    XInput,
    Group,
    XTextarea ,
    XButton,
    PopupPicker ,
    Datetime,
    Step,
    StepItem
  },
  data(){
      return {
          step:0,
          mindLead:{},
          mdReciver:['请选择']
      }
  },
  methods:{
      getMindLeadRecent(val){
          this.$axios.post('/api/eduplan/getMindLeadByRecent',{mdReciver:this.mdReciver[0]}).then(resp=>{
              let data = resp.data
              console.log(data);
              
              if(data.code === 200){
                  this.mindLead = data.content.mindLead
              }
          })
      },
      getByTheHelperList(){
         this.$store.dispatch('setByTheHelperList');
      }
  },
  mounted(){
      this.getByTheHelperList()
  }
}
</script>

