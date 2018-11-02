<template>
    <div>
        <group-title>考察意见</group-title>
        <div style="padding:0 15px;">    
            <x-table>
                <thead>
                <tr>
                    <th>考察名称</th>
                    <th>创建日期</th>
                    <th>内容</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in invOptionList" :key="item.id">
                    <td>{{item.ioName}}</td>
                    <td>{{item.ioCreateDate}}</td>
                    <td>{{item.ioResult}}</td>
                </tr>
                </tbody>
            </x-table>
        </div> 
    </div>
</template>

<script>
import {XTable, Grid, GridItem ,GroupTitle} from 'vux'

export default {
  components: {
    Grid,
    GridItem,
    GroupTitle,
    XTable
  },
  data(){
      return {
          invOptionList:{}
      }
  },
  methods:{
      getEduplanList(){
        this.$axios
        .post("/api/eduplan/getInvOptionList")
        .then(resp => {
          if (resp.data.code === 200) {
            console.log(resp.data.content.invOptionList);
            this.invOptionList = resp.data.content.invOptionList
          }
        })
        .catch(error => {
          console.log(error);
        });
      }
  },
  mounted(){
      this.getEduplanList()
  }
}
</script>

