<template>
    <div>
        <group-title>帮教回访</group-title>
        <grid :cols="2" :show-vertical-dividers="true">
            <grid-item link="/phome/revisit/revisit" label="登记回访">
                <i slot="icon" class="fa fa-edit" aria-hidden="true"></i>
            </grid-item>
            <grid-item link="/phome/revisit/revisitRecord" label="我的回访">
                <i slot="icon" class="fa fa-file-text-o" aria-hidden="true"></i>
            </grid-item>
        </grid>
        <group-title>回访记录</group-title>
        <div style="padding:0 15px;">    
            <x-table>
                <thead>
                <tr>
                    <th>回访名称</th>
                    <th>创建日期</th>
                    <th>内容</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in revisitList" :key="item.id">
                    <td>{{item.rvName}}</td>
                    <td>{{item.rvCreateDate}}</td>
                    <td>{{item.rvResult}}</td>
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
          revisitList:{}
      }
  },
  methods:{
      getEduplanList(){
        this.$axios
        .post("/api/eduplan/getRevisitList")
        .then(resp => {
          if (resp.data.code === 200) {
            console.log(resp.data.content.revisitList);
            this.revisitList = resp.data.content.revisitList
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



