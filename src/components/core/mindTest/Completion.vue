<template>
    <div>
        <load-more tip="已完成的评测" :show-loading="false" background-color="#fbf9fe"></load-more>
        <div style="padding:0 15px;">
        <x-table>
            <thead>
            <tr>
                <th>姓名</th>
                <th>日期</th>
                <th>结果</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>李杰</td>
                <td>2018-09-30</td>
                <td>查看</td>
            </tr>
            <tr>
                <td>孔庆官</td>
                <td>2018-09-29</td>
                <td>查看</td>
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
  }
}
</script>

