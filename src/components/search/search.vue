<template>
  <div>
    <!-- 头部搜索区域 -->
    <header-search @input="showHistory" @clear="showHistory"></header-search>
    <!-- 搜索列表 -->
    <search-list v-if="show"></search-list>
    <!-- 搜索历史和Hotsearch -->
    <history-hot v-if="!show"></history-hot>
  </div>
</template>

<script>
import headerSearch from './headerSearch.vue'
import searchList from './searchList.vue'
import historyHot from './historyHot.vue'
export default {
  data() {
    return {
      // 控制历史记录的显示与隐藏
      show: true
    }
  },
  components: {
    headerSearch,
    searchList,
    historyHot
  },
  methods: {
    // 显示历史记录
    showHistory(val) {
      if (val.trim() === '') {
        this.show = false
      } else {
        this.show = true
      }
    }
  }
}
</script>

<style lang="scss"></style>
