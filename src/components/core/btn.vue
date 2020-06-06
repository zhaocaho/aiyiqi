<template>
  <!-- 按钮组件 -->
  <div :class="[$style.btn, cname]" :style="{ width }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    // 自定义类名
    cname: {
      type: String,
      default: ''
    },
    // 按钮宽度
    width: {
      type: String,
      default: '100%'
    }
  }
}
</script>

<style lang="scss" module>
@import '@/assets/css/element.scss';
.btn {
  @include btn;
}
</style>
