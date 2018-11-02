<template>
    <div>
        <load-more tip="记录" :show-loading="false" background-color="#fbf9fe"></load-more>
        <div style="padding:0 15px;">
        <x-table>
            <thead>
            <tr>
                <th>姓名</th>
                <th>服务地点</th>
                <th>结果</th>
            </tr>
            </thead>
            <tbody>
            
                 <tr v-for="(record, index) in listrecord" :key="index">
                    <td>{{record.ucAccid}}</td>
                    <td>{{record.csPlace}}</td>
                    <td>
                      {{record.csReason}}
                    </td>
                </tr>
            </tbody>
        </x-table>
        </div>
    </div>
</template>

<script>
import { XTable, LoadMore,XButton } from 'vux'
const date = new Date()
export default {
  components: {
    XTable,
    LoadMore,
    XButton
  },
  computed:{
      today(){
        //获取当前时间
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        if (month < 10) {
            month = "0" + month;
        }
        if (day < 10) {
            day = "0" + day;
        }
        let nowDate = year + "-" + month + "-" + day;
        return nowDate;
      }
  },
  data(){
      return{
          listrecord:{}
      }
  },
  methods:{
      getRecord(){
        this.$axios.post("/api/record/getCommunityRecord",{ucId:this.$store.state.USER_ID}).then(resp=>{
            console.log(resp.data.content.communityRecordList);
            this.listrecord = resp.data.content.communityRecordList;
        })
      },

  },mounted() {
          this.getRecord()
    },
}
</script>

