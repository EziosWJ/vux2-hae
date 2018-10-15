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
                <tr>
                    <td>李杰</td>
                    <td>2018-09-30</td>
                    <td>无风险</td>
                </tr>
                <tr>
                    <td>李杰</td>
                    <td>2018-09-29</td>
                    <td>无风险</td>
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

