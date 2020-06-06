<template>
  <section :class="$style.sec">
    <panel title="今日资讯"></panel>
    <div>
      <a href="#">
        <i></i>
        <em>5.12汶川地震12周年祭</em>
      </a>
      <a href="#">
        <i></i>
        <em>美国累计确诊超134万例</em>
      </a>
    </div>
    <!-- 图片 -->
    <pic-layout :Data="todayMsgData" :picNum="2"></pic-layout>
    <!-- 更多 -->
    <more-btn :num="2"></more-btn>
  </section>
</template>

<script>
import panel from '@/components/core/panel.vue'
import picLayout from '@/components/public/picLayout.vue'
import moreBtn from '../public/moreBtn.vue'
export default {
  data() {
    return {
      // 今日资讯数据
      todayMsgData: [
        {
          src:
            'http://pic1.iqiyipic.com/image/20200512/70/05/pl_361352437_m_601_284_160.jpg',
          //   numOfEpisode: '03:27',
          title: '5月12日，是个特殊的日子',
          //   description: '奥利给组合因背叛解散？',
          logo: '专题'
        },
        {
          src:
            'http://m.iqiyipic.com/image/20200508/38/8a/v_148209440_m_601_284_160.jpg',
          numOfEpisode: '2020-05-08期',
          title: '荣耀归来！中国新一代载人飞船试验船成功返回',
          //   description: '奥利给组合因背叛解散？',
          logo: ''
        }
      ]
    }
  },
  components: {
    panel,
    picLayout,
    moreBtn
  }
}
</script>
<style lang="scss" module>
@import '@/assets/css/element.scss';
.sec {
  > div {
    @include list;
    padding: 0 7px;
    a {
      @include list(row);
      width: 100%;
      height: 14px;
      margin-bottom: 19px;
      font-size: 14px;
      // padding-left: 24px;
      box-sizing: border-box;
      justify-content: flex-start;
      position: relative;
      i {
        width: 8px;
        height: 9px;
        background: url('http://www.iqiyipic.com/common/fix/h5-aura/c-channel-all-20200409.png')
          no-repeat -9px -43px;
        background-size: 336px;
        position: absolute;
        left: 4px;
      }
      em {
        padding-left: 24px;
      }
    }
  }
}
</style>
