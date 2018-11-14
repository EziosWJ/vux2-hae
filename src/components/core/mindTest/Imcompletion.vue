<template>
    <div>
        <load-more tip="新评测" :show-loading="false" background-color="#fbf9fe"></load-more>
        <div style="padding:0 15px;">
        <x-table>
            <thead>
            <tr>
                <th>测评名称</th>
                <!-- <th>进度</th> -->
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            
                <tr>
                    <td>基础测评</td>
                    <!-- <td>10%</td> -->
                    <td>
                        <router-link to="/phome/mindTest">
                            <x-button text="测评"></x-button>
                        </router-link>
                    </td>
                </tr>
            
            <!-- <tr>
                <td>孔庆官</td>
                <td>88%</td>
                <td><x-button text="测评"></x-button></td>
            </tr> -->
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

