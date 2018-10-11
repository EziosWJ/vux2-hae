<template>
    <div>
        <panel :header="header" :footer="footer" 
        :list="list" :type="type"></panel>
        <panel :header="header" :footer="footer" 
        :list="list" :type="type"></panel>
    </div>
</template>

<script>
import { Panel } from "vux";

export default {
  data () {
    return {
      type: '4',
      list: [{
        src: 'http://somedomain.somdomain/x.jpg',
        fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题一',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/component/cell',
        meta: {
          source: '来源信息',
          date: '时间',
          other: '其他信息'
        }
      }, {
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题二',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: {
          path: '/component/radio',
          replace: false
        },
        meta: {
          source: '来源信息',
          date: '时间',
          other: '其他信息'
        }
      }],
      header:'心理测评记录',
      footer: {
        title: '更多',
        url: 'http://vux.li'
      }
    }
  },
  components: {
    Panel
  }
}
</script>

