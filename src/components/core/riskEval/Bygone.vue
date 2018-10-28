<template>
    <div>
        <load-more tip="已完成的评估" :show-loading="false" background-color="#fbf9fe"></load-more>
        <div style="padding:0 15px;">
            <x-table>
                <thead>
                <tr>
                    <th>评测人</th>
                    <th>日期</th>
                    <th>结果</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in riskList" :key="index">
                        <td>{{item.rkReciver}}</td>
                        <td>{{item.rkDate}}</td>
                        <td>{{item.rkResult}}</td>
                    </tr>
                </tbody>
            </x-table>
        </div>
    </div>
</template>

<script>
import { XTable, LoadMore } from 'vux'

export default {
  components: {
    XTable,
    LoadMore
  },
  data(){
      return {
          riskList:[]
      }
  },
  methods:{
      getRiskList(){
          this.$axios.get('/api/eduplan/getRiskList').then(resp => {
              let data = resp.data
              if(data.code === 200){
                  this.riskList = data.content.riskList
              }else if(data.code === 555){
                 alert("发生错误") 
              }
          }).catch(error =>{
              alert(`发生内部错误：${error}`)
          })
      }
  },
  mounted(){
      this.getRiskList()
  }
}
</script>

