<template>
  <article>
    <!-- 搜索列表 -->
    <van-list
      v-model="loading"
      :finished="finished"
      @load="onLoad"
      loading-text=" "
    >
      <van-cell v-for="item in list" :key="item" :title="item" />
    </van-list>
  </article>
</template>

<script>
export default {
  data() {
    return {
      list: [
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1,
        2,
        1
      ],
      loading: false,
      finished: false
    }
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        this.finished = true
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
article {
  margin-top: 42px;
}
</style>
