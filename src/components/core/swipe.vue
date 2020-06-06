<template>
  <swiper class="swiper" :options="swiperOption" style="height:160px">
    <swiper-slide v-for="(item, i) in swiperList" :key="i">
      <router-link
        to="#"
        tag="div"
        :style="[{ background: `url(${item.src}) no-repeat` }, styleObj]"
      >
      </router-link>
    </swiper-slide>
    <!-- 分页器 -->
    <div
      class="swiper-pagination"
      slot="pagination"
      :style="{ textAlign: pagePosition }"
      v-if="swiperOption.pagination"
    ></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      // 轮播图图片背景样式
      styleObj: {
        width: '100%',
        backgroundSize: '100% 100%',
        height: '100%'
      }
    }
  },
  props: {
    // 轮播图数据源
    swiperList: {
      type: Array,
      default() {
        return [
          {
            content: 'page1'
          },
          {
            content: 'page2'
          },
          {
            content: 'page3'
          }
        ]
      }
    },
    // 轮播图各项配置
    swiperOption: {
      type: Object,
      default() {
        return {
          pagination: {
            el: '.swiper-pagination'
          },
          autoplay: true,
          loop: true
        }
      }
    },
    // 分页标签的位置
    pagePosition: {
      tpye: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper {
  height: 160px;
  width: 100%;
  margin-top: 84px;
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    font-size: 14px;
    background-color: white;
  }
}
</style>
