<template>
  <article>
    <!-- 头部区域 -->
    <header>
      <!-- LOGO -->
      <router-link to="#" tag="a" :class="$style.header_logo"></router-link>
      <!-- 输入框 -->
      <div :class="$style.header_search">
        <span @click="showSearchInterface">{{ searchVal }}</span>
        <a href="#">
          <i></i>
        </a>
      </div>
      <!-- 我的 -->
      <router-link to="#" tag="a" :class="$style.header_mine">
        <i></i>
      </router-link>
      <!-- 观看完整版 -->
      <router-link to="#" tag="div" :class="$style.header_watch"></router-link>
    </header>
  </article>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      // 搜索框的值
      searchVal: '奥特曼'
    }
  },
  methods: {
    ...mapMutations(['showSearchInterface'])
  }
}
</script>

<style lang="scss" module scoped>
@import '@/assets/css/element.scss';
article {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99;
  header {
    @include list(row);
    padding: 6px 12px 4px 12px;
    background-image: linear-gradient(90deg, #1a2e4a 0, #409890 100%);
    .header_logo {
      background: url('http://www.iqiyipic.com/common/fix/h5-aura/headerLogo-iqiyi.png')
        no-repeat;
      width: 26px;
      height: 32px;
      background-size: contain;
    }
    .header_search {
      @include list(row);
      border-radius: 15px;
      background-image: linear-gradient(
        90deg,
        rgba(16, 36, 65, 0.259) 0,
        rgba(17, 85, 99, 0.259) 100%
      );
      flex: 1;
      height: 28px;
      overflow: hidden;
      margin: 0 12px 0 12px;
      span {
        border: none;
        flex: 1;
        height: 28px;
        font-size: 13px;
        line-height: 28px;
        padding-left: 12px;
        color: #a5b3bc;
      }
      a {
        width: 39px;
        height: 28px;
        padding: 6px 12px 7px 12px;
        box-sizing: border-box;
        i {
          display: inline-block;
          // margin: auto;
          width: 15px;
          height: 15px;
          background: url('http://www.iqiyipic.com/common/fix/h5-aura/c-channel-all-20200409.png')
            no-repeat 0px -24px;
          background-size: 336px;
        }
      }
    }
    .header_mine {
      width: 34px;
      height: 32px;
      text-align: center;
      line-height: 32px;
      padding: 7px 0;
      box-sizing: border-box;
      i {
        display: inline-block;
        // margin: auto;
        width: 18.5px;
        height: 18.5px;
        background: url('http://www.iqiyipic.com/common/fix/h5-aura/c-channel-all-20200409.png')
          no-repeat -16px -24px;
        background-size: 336px;
        text-align: center;
      }
    }
    .header_watch {
      width: 85px;
      height: 23px;
      background: url('http://www.iqiyipic.com/common/fix/h5-aura/header-rightBtn.png')
        no-repeat 12px;
      background-size: contain;
    }
  }
}
</style>
