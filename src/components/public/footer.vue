<template>
  <section :class="$style.footer">
    <!-- 应用推荐 -->
    <panel :titleShow="false" :class="$style.panel">
      <h2>
        <i v-if="iconShow"></i>
        应用推荐
      </h2>
      <pic-layout
        :Data="footerData"
        :picNum="3"
        :class="$style.picLayout"
      ></pic-layout>
    </panel>
    <div>
      <img src="http://www.iqiyipic.com/common/fix/h5-aura/foot.png" alt="#" />
    </div>
  </section>
</template>

<script>
import panel from '@/components/core/panel.vue'
import picLayout from '@/components/public/picLayout.vue'
export default {
  components: {
    panel,
    picLayout
  },
  props: {
    // 是否显示图标
    iconShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      //   页脚图片数据
      footerData: [
        {
          src:
            'http://pic0.iqiyipic.com/common/20180813/9cfbf5050f61472187bcac81c13810f6.png',
          title: '爱奇艺阅读'
        },
        {
          src:
            'http://pic1.iqiyipic.com/common/20200403/f54f5beba54f4488962d712ef086dc81.png',
          title: '叭嗒'
        },
        {
          src:
            'http://pic0.iqiyipic.com/common/20180322/066259413f5f436292d497ba40f98fdc.png',
          title: '奇巴布'
        }
      ]
    }
  }
}
</script>

<style lang="scss" module>
@import '@/assets/css/element.scss';
.footer {
  .panel {
    > h2 {
      i {
        display: inline-block;
        width: 24px;
        height: 24px;
        background-color: red;
        vertical-align: middle;
        background: url('http://www.iqiyipic.com/common/fix/h5-aura/channel-icon-20180918.png')
          no-repeat -25px -97px;
        background-size: 142px;
      }
    }
    border-top: 1px solid #f7f7f7;
    .picLayout {
      li {
        div {
          a {
            text-align: center;
          }
        }
      }
    }
  }
  > div {
    width: 100%;
    height: 77px;
    padding: 15px 0 15px 0;
    box-sizing: border-box;
    img {
      width: 100px;
      height: 47px;
      margin: auto;
      display: block;
    }
  }
}
</style>
