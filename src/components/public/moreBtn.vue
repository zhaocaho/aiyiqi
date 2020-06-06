<template>
  <panel :titleShow="false" class="panel">
    <section>
      <btn
        :class="'btn' + item"
        :width="width"
        v-for="(item, i) in num"
        :key="i"
      >
        <i></i>
      </btn>
    </section>
  </panel>
</template>

<script>
import panel from '@/components/core/panel.vue'
import btn from '@/components/core/btn.vue'
export default {
  components: {
    panel,
    btn
  },
  props: {
    //   按钮宽度
    width: {
      type: String
    },
    // 按钮个数
    num: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      // btn数据结构
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/element.scss';
.panel {
  > section {
    width: 100%;
    @include list(row);
    justify-content: space-around;
    padding: 0 5px 20px 5px;
    box-sizing: border-box;
    .btn1 {
      @include list(row);
      justify-content: center;
      > i {
        width: 15px;
        height: 15px;
        margin: 10px 5px;
        background: url('http://www.iqiyipic.com/common/fix/h5-aura/c-channel-all-20200409.png')
          no-repeat 0px 0px;
        background-size: 221px;
      }
      &::after {
        content: '更多电视剧';
        height: 35px;
        line-height: 35px;
      }
    }
    .btn2 {
      @include list(row);
      justify-content: center;
      > i {
        width: 15px;
        height: 15px;
        background-color: red;
        margin: 10px 5px;
        background: url('http://www.iqiyipic.com/common/fix/h5-aura/c-channel-all-20200409.png')
          no-repeat -16px 0px;
        background-size: 221px;
      }
      &::after {
        content: '换一批';
        height: 35px;
        line-height: 35px;
      }
    }
  }
}
</style>
