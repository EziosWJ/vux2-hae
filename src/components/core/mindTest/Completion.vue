<template>
    <div>
        <load-more tip="已完成的评测" :show-loading="false" background-color="#fbf9fe"></load-more>
        <div style="padding:0 15px;">
        <x-table>
            <thead>
            <tr>
                <th>评测名</th>
                <th>分数</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Apple</td>
                <td>$1.25</td>
            </tr>
            <tr>
                <td>Banana</td>
                <td>$1.20</td>
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

