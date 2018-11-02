<template>
    <div>
        <group-title>奖惩记录</group-title>
        <div style="padding:0 15px;">    
            <x-table>
                <thead>
                <tr>
                    <th>奖惩名称</th>
                    <th>创建日期</th>
                    <th>内容</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in rewardPunishList" :key="item.id">
                    <td>{{item.rpName}}</td>
                    <td>{{item.rpCreateDate}}</td>
                    <td>{{item.rpResult}}</td>
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
          rewardPunishList:{}
      }
  },
  methods:{
      getEduplanList(){
        this.$axios
        .post("/api/eduplan/getRewardPunishList")
        .then(resp => {
          if (resp.data.code === 200) {
            console.log(resp.data.content.rewardPunishList);
            this.rewardPunishList = resp.data.content.rewardPunishList
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

