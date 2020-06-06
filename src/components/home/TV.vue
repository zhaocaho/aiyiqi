<template>
  <section>
    <panel title="电视剧">
      <!-- 图片 -->
      <pic-layout :Data="TVData" :picNum="3"></pic-layout>
    </panel>
    <!-- 更多 -->
    <more-btn :num="2"></more-btn>
  </section>
</template>
<script>
import panel from '@/components/core/panel.vue'
import picLayout from '@/components/public/picLayout.vue'
import moreBtn from '../public/moreBtn.vue'
export default {
  components: {
    panel,
    picLayout,
    moreBtn
  },
  data() {
    return {
      // 电视剧视频数据
      TVData: [
        {
          src:
            'http://m.iqiyipic.com/image/20200510/f7/98/a_100403748_m_601_m5_195_260.jpg',
          numOfEpisode: '更新至12集',
          title: '古董局中局之鉴墨寻瓷',
          //   description: '奥利给组合因背叛解散？',
          logo: '专题'
        },
        {
          src:
            'http://m.iqiyipic.com/image/20200510/f7/98/a_100403748_m_601_m5_195_260.jpg',
          numOfEpisode: '更新至12集',
          title: '古董局中局之鉴墨寻瓷',
          //   description: '奥利给组合因背叛解散？',
          logo: '专题'
        },
        {
          src:
            'http://m.iqiyipic.com/image/20200510/f7/98/a_100403748_m_601_m5_195_260.jpg',
          numOfEpisode: '更新至12集',
          title: '古董局中局之鉴墨寻瓷',
          //   description: '奥利给组合因背叛解散？',
          logo: '专题'
        },
        {
          src:
            'http://m.iqiyipic.com/image/20200510/f7/98/a_100403748_m_601_m5_195_260.jpg',
          numOfEpisode: '更新至12集',
          title: '古董局中局之鉴墨寻瓷',
          //   description: '奥利给组合因背叛解散？',
          logo: '超前点映'
        },
        {
          src:
            'http://m.iqiyipic.com/image/20200510/f7/98/a_100403748_m_601_m5_195_260.jpg',
          numOfEpisode: '更新至12集',
          title: '古董局中局之鉴墨寻瓷',
          //   description: '奥利给组合因背叛解散？',
          logo: '专题'
        },
        {
          src:
            'http://m.iqiyipic.com/image/20200510/f7/98/a_100403748_m_601_m5_195_260.jpg',
          numOfEpisode: '更新至12集',
          title: '古董局中局之鉴墨寻瓷',
          //   description: '奥利给组合因背叛解散？',
          logo: '专题'
        }
      ]
    }
  }
}
</script>

<style lang="scss"></style>
