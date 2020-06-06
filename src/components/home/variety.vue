<template>
  <section>
    <panel title="综艺">
      <!-- 图片 -->
      <pic-layout :Data="varietyData" :picNum="2"></pic-layout>
    </panel>
    <!-- 更多 -->
    <more-btn :num="1"></more-btn>
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
      // 综艺图片数据
      varietyData: [
        {
          src:
            'http://m.iqiyipic.com/common/lego/20200511/3a3a18726cfe488a892b85d8bc904e86.jpg',
          numOfEpisode: '03:27',
          title: '极限挑战6.相爱相杀',
          description: '奥利给组合因背叛解散？',
          logo: '独播'
        },
        {
          src:
            'http://m.iqiyipic.com/common/lego/20200511/3a3a18726cfe488a892b85d8bc904e86.jpg',
          numOfEpisode: '03:27',
          title: '极限挑战6.相爱相杀',
          description: '奥利给组合因背叛解散？',
          logo: 'VIP'
        },
        {
          src:
            'http://m.iqiyipic.com/common/lego/20200511/3a3a18726cfe488a892b85d8bc904e86.jpg',
          numOfEpisode: '03:27',
          title: '极限挑战6.相爱相杀',
          description: '奥利给组合因背叛解散？',
          logo: '超前点映'
        },
        {
          src:
            'http://m.iqiyipic.com/common/lego/20200511/3a3a18726cfe488a892b85d8bc904e86.jpg',
          numOfEpisode: '03:27',
          title: '极限挑战6.相爱相杀',
          description: '奥利给组合因背叛解散？',
          logo: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss"></style>
