<template>
    <div>
        <load-more tip="登记" :show-loading="false" background-color="#fbf9fe"></load-more>
        <div style="padding:0 15px;">
        <x-table>
            <thead>
            <tr>
                <th>姓名</th>
                <th>日期</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            
                <tr v-for="(item, index) in dailyCheckInConditionList" :key="index">
                    <td>{{item.ucAccid}}</td>
                    <td>{{today}}</td>
                    <td v-if="item.diState === null || item.diState === ''">
                       <x-button @click.native="checkIn(item,'1')" text="报到"></x-button>
                       <x-button @click.native="checkIn(item,'2')" text="请假"></x-button>
                       <x-button @click.native="checkIn(item,'3')" text="未到"></x-button>
                    </td>
                    <td v-else-if="item.diState === '1'">
                        已报到
                    </td>
                    <td v-else-if="item.diState === '2'">
                        请假
                    </td>
                    <td v-else-if="item.diState === '3'">
                        未到
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
  data(){
      return {
          dailyCheckInConditionList:{}
      }
  },
  methods:{
    //   checkIn: item =>{
        checkIn(item,checkState){
          console.log(item)
          let checkIn = {
              diReciver : item.ucId,
              diState : checkState,
              diCreateDate : this.today
          }
          console.log(checkIn);
          
          this.$axios.post("/api/record/putDailyCheckIn",checkIn).then(resp=>{
              let data = resp.data
              if(data.code === 200){
                  alert("操作成功！")
                  this.getDailyCheckInConditionList()
              }
          })
      },
      getDailyCheckInConditionList(){
          this.$axios.get("/api/record/getDailyCheckInConditionList").then(resp=>{
              let data = resp.data
              if(data.code === 200 ){
                  console.log(`请求dailyCheckInConditionList数据成功:`)
                  console.log(data.content.dailyCheckInConditionList);
                  
                  this.dailyCheckInConditionList = data.content.dailyCheckInConditionList
              }else if(data.code === 555){
                  console.log(`数据请求异常`);
              }
          }).catch(error=>{
              alert(`发生内部错误${error}`)
          })
      }
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
  mounted(){
      this.getDailyCheckInConditionList()
  }
}
</script>

