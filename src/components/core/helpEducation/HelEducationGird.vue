<template>
    <div>
        <group-title>帮教方案</group-title>
        <grid :cols="2" :show-vertical-dividers="true">
            <grid-item link="/phome/helpEducation/planning" label="制定方案">
                <i slot="icon" class="fa fa-edit" aria-hidden="true"></i>
            </grid-item>
            <grid-item link="/phome/mindTestCompletion" label="我的方案">
                <i slot="icon" class="fa fa-file-text-o" aria-hidden="true"></i>
            </grid-item>
        </grid>
        <group-title>疏导记录</group-title>
        <div style="padding:0 15px;">    
            <x-table>
                <thead>
                <tr>
                    <th>方案名称</th>
                    <th>创建日期</th>
                    <th>内容</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in eduplanList" :key="item.id">
                    <td>{{item.epName}}</td>
                    <td>{{item.epCreateDate}}</td>
                    <td>{{item.epContent}}</td>
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
          eduplanList:{}
      }
  },
  methods:{
      getEduplanList(){
        this.$axios
        .post("/api/eduplan/getEduplanList")
        .then(resp => {
          if (resp.data.code === 200) {
            console.log(resp.data.content.eduplanList);
            this.eduplanList = resp.data.content.eduplanList
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



