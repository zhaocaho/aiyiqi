<template>
  <section>
    <panel title="动漫">
      <!-- 图片 -->
      <pic-layout :Data="cartoonData" :picNum="3"></pic-layout>
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
      cartoonData: [
        {
          src:
            'http://m.iqiyipic.com/common/lego/20200507/e126071436cf4a878a92e4acaac44eda.jpg',
          numOfEpisode: '更新至5集',
          title: '万古仙穹 第4季',
          //   description: '奥利给组合因背叛解散？',
          logo: '自制'
        },
        {
          src:
            'http://m.iqiyipic.com/common/lego/20200507/e126071436cf4a878a92e4acaac44eda.jpg',
          numOfEpisode: '更新至5集',
          title: '万古仙穹 第4季',
          //   description: '奥利给组合因背叛解散？',
          logo: '自制'
        },
        {
          src:
            'http://m.iqiyipic.com/common/lego/20200507/e126071436cf4a878a92e4acaac44eda.jpg',
          numOfEpisode: '更新至5集',
          title: '万古仙穹 第4季',
          //   description: '奥利给组合因背叛解散？',
          logo: '自制'
        },
        {
          src:
            'http://m.iqiyipic.com/common/lego/20200507/e126071436cf4a878a92e4acaac44eda.jpg',
          numOfEpisode: '更新至5集',
          title: '万古仙穹 第4季',
          //   description: '奥利给组合因背叛解散？',
          logo: '自制'
        },
        {
          src:
            'http://m.iqiyipic.com/common/lego/20200507/e126071436cf4a878a92e4acaac44eda.jpg',
          numOfEpisode: '更新至5集',
          title: '万古仙穹 第4季',
          //   description: '奥利给组合因背叛解散？',
          logo: '自制'
        },
        {
          src:
            'http://m.iqiyipic.com/common/lego/20200507/e126071436cf4a878a92e4acaac44eda.jpg',
          numOfEpisode: '更新至5集',
          title: '万古仙穹 第4季',
          //   description: '奥利给组合因背叛解散？',
          logo: '自制'
        }
      ]
    }
  }
}
</script>

<style lang="scss"></style>
