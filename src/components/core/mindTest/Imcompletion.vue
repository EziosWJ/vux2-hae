<template>
    <div>
        <load-more tip="新评测" :show-loading="false" background-color="#fbf9fe"></load-more>
        <div style="padding:0 15px;">
        <x-table>
            <thead>
            <tr>
                <th>评测名</th>
                <th>进度</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            
                <tr>
                    <td>Apple</td>
                    <td>10</td>
                    <td>
                        <router-link to="/phome/mindTest">
                            <x-button text="测评"></x-button>
                        </router-link>
                    </td>
                </tr>
            
            <tr>
                <td>Banana</td>
                <td>2</td>
                <td><x-button text="测评"></x-button></td>
            </tr>
            </tbody>
        </x-table>
        </div>
    </div>
</template>

<script>
import { XTable, LoadMore,XButton } from 'vux'

export default {
  components: {
    XTable,
    LoadMore,
    XButton
  }
}
</script>

