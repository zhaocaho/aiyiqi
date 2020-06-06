<template>
  <article>
    <!-- 入口页面 -->
    <div v-if="!searchShow">
      <!-- 头部区域 -->
      <heador></heador>
      <!-- 导航栏 -->
      <navigation></navigation>
      <!-- 轮播图 -->
      <swipe :swiperList="swiperList" pagePosition="right"></swipe>
      <!-- 打开APP -->
      <open-app></open-app>
      <!-- 推荐视频 -->
      <recommend></recommend>
      <!-- 今日资讯 -->
      <today-msg></today-msg>
      <!-- 电视剧 -->
      <tv></tv>
      <!-- 电影 -->
      <movie></movie>
      <!-- 动漫 -->
      <cartoon></cartoon>
      <!-- 综艺图片布局组件 -->
      <variety></variety>
      <!-- 底部区域 -->
      <foot></foot>
    </div>
    <!-- 头部搜索区域 -->
    <search v-if="searchShow"></search>
  </article>
</template>
<script>
import heador from '../public/header.vue'
import search from '../search/search.vue'
import navigation from '../public/navigation.vue'
import swipe from '../core/swipe.vue'
import openApp from './openApp.vue'
import recommend from './recommend.vue'
import todayMsg from './todayMsg.vue'
import tv from './TV.vue'
import movie from './movie.vue'
import cartoon from './cartoon.vue'
import variety from './variety.vue'

import foot from '@/components/public/footer.vue'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      // 轮播图的数据源
      swiperList: [
        {
          src:
            'http://m.iqiyipic.com/common/lego/20200510/6160bfb170c64b4796284bdb56f3e31b.jpg'
        },
        {
          src:
            'http://m.iqiyipic.com/common/lego/20200510/80e56eb3ae664038b64736cc7e8a1682.jpg'
        },
        {
          src:
            'http://m.iqiyipic.com/common/lego/20200507/0bbf58a9d7ec4fc2b7ccf796bf148343.jpg'
        },
        {
          src:
            'http://m.iqiyipic.com/common/lego/20200509/c962f7d20d874fffa83db6336ba979a2.jpg'
        },
        {
          src:
            'http://m.iqiyipic.com/common/lego/20200507/0bbf58a9d7ec4fc2b7ccf796bf148343.jpg'
        }
      ]
    }
  },
  components: {
    heador,
    navigation,
    search,
    swipe,
    openApp,
    recommend,
    todayMsg,
    tv,
    movie,
    cartoon,
    variety,
    foot
  },
  computed: {
    ...mapState(['searchShow'])
  }
}
</script>

<style lang="scss"></style>
