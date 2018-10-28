<template>
    <div>
        <group-title>心理疏导</group-title>
        <grid :cols="2" :show-vertical-dividers="true">
            <grid-item link="/phome/mindTestImcompletion" label="疏导进程">
                <i slot="icon" class="fa fa-heart-o" aria-hidden="true"></i>
            </grid-item>
            <grid-item link="/phome/mindLead/applyLead" label="进行疏导">
                <i slot="icon" class="fa fa-hand-paper-o" aria-hidden="true"></i>
            </grid-item>
        </grid>
        <group-title>疏导记录</group-title>
        <div style="padding:0 15px;">    
            <x-table>
                <thead>
                <tr>
                    <th>辅导员</th>
                    <th>日期</th>
                    <th>结果</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in mindLeadList" :key="item.id">
                    <td>{{item.mdLeader}}</td>
                    <td>{{item.mdLeadDate}}</td>
                    <td>{{item.mdCondition}}</td>
                </tr>
                </tbody>
            </x-table>
        </div>    
    </div>
</template>

<script>
import { Grid, GridItem, GroupTitle, XTable } from "vux";

export default {
  components: {
    Grid,
    GridItem,
    GroupTitle,
    XTable
  },
    data(){
        return {mindLeadList:[]}
    },
  methods: {
    getMindLeadList() {
      this.$axios
        .post("/api/eduplan/getMindLeadList")
        .then(resp => {
          if (resp.data.code === 200) {
            console.log(resp.data.content.mindLeadList);
            this.mindLeadList = resp.data.content.mindLeadList
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted(){
      this.getMindLeadList()
  }
};
</script>

