<template>
  <article>
    <panel :class="$style.panel">
      <img src="http://www.iqiyipic.com/common/fix/h5-aura/banner.gif" alt="" />
    </panel>
  </article>
</template>

<script>
import panel from '@/components/core/panel.vue'
export default {
  components: {
    panel
  }
}
</script>

<style lang="scss" module>
@import '@/assets/css/element.scss';
.panel {
  @include panel;
  > h2 {
    display: none;
  }
  img {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
  }
}
</style>
