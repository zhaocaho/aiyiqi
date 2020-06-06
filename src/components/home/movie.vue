<template>
  <section>
    <panel title="电影">
      <pic-layout :Data="movieData" :picNum="3"></pic-layout>
    </panel>
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
      //   电影数据
      movieData: [
        {
          src:
            'http://m.iqiyipic.com/image/20200513/b1/b6/v_117630034_m_601_m14_195_260.jpg',
          numOfEpisode: '7.6',
          title: '惊涛迷局',
          //   description: '奥利给组合因背叛解散？',
          logo: 'VIP'
        },
        {
          src:
            'http://m.iqiyipic.com/image/20200513/b1/b6/v_117630034_m_601_m14_195_260.jpg',
          numOfEpisode: '7.6',
          title: '惊涛迷局',
          //   description: '奥利给组合因背叛解散？',
          logo: 'VIP'
        },
        {
          src:
            'http://m.iqiyipic.com/image/20200513/b1/b6/v_117630034_m_601_m14_195_260.jpg',
          numOfEpisode: '7.6',
          title: '惊涛迷局',
          //   description: '奥利给组合因背叛解散？',
          logo: 'VIP'
        },
        {
          src:
            'http://m.iqiyipic.com/image/20200513/b1/b6/v_117630034_m_601_m14_195_260.jpg',
          numOfEpisode: '7.6',
          title: '惊涛迷局',
          //   description: '奥利给组合因背叛解散？',
          logo: 'VIP'
        },
        {
          src:
            'http://m.iqiyipic.com/image/20200513/b1/b6/v_117630034_m_601_m14_195_260.jpg',
          numOfEpisode: '7.6',
          title: '惊涛迷局',
          //   description: '奥利给组合因背叛解散？',
          logo: 'VIP'
        },
        {
          src:
            'http://m.iqiyipic.com/image/20200513/b1/b6/v_117630034_m_601_m14_195_260.jpg',
          numOfEpisode: '7.6',
          title: '惊涛迷局',
          //   description: '奥利给组合因背叛解散？',
          logo: 'VIP'
        }
      ]
    }
  }
}
</script>

<style lang="scss"></style>
