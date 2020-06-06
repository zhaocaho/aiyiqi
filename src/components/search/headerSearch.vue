<template>
  <article>
    <!-- 头部区域 -->
    <header>
      <!-- LOGO -->
      <router-link to="#" tag="a" :class="$style.header_logo"></router-link>
      <!-- 输入框 -->
      <section>
        <a href="#">
          <i></i>
        </a>
        <input
          type="text"
          v-model="searchVal"
          @focus="showCloseBtn"
          @input="valChange"
        />
        <div @click="clearVal" v-show="showClose">
          <van-icon name="close" color="#fff" size="16px" />
        </div>
      </section>
      <!-- 取消/搜索按钮 -->
      <span @click="cancle">{{ cancleOrSearch }}</span>
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
      // 清除按钮的显示与隐藏
      // showClose: true
    }
  },
  methods: {
    ...mapMutations(['hideSearchInterface']),
    // 清空搜索框输入值
    clearVal() {
      this.searchVal = ''
      // 自定义事件
      this.$emit('clear', this.searchVal)
    },
    // 聚焦时显示清除按钮，判断是否有值
    showCloseBtn() {},
    // 返回home页面
    cancle() {
      if (this.searchVal.trim() === '') {
        this.hideSearchInterface()
      } else {
        console.log('发起请求搜索页面')
      }
    },
    // 当输入框的值发生变化,给组件自定义input事件
    valChange() {
      this.$emit('input', this.searchVal)
    }
  },
  computed: {
    // 清除按钮的显示与隐藏
    showClose() {
      if (this.searchVal.trim() === '') {
        return false
      } else {
        return true
      }
    },
    // 显示取消或者搜索
    cancleOrSearch() {
      if (this.searchVal.trim() === '') {
        return '取消'
      } else {
        return '搜索'
      }
    }
  }
}
</script>

<style lang="scss" module scoped>
@import '@/assets/css/element.scss';
article {
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  top: 0;
  header {
    @include list(row);
    padding: 6px 7px 6px 12px;
    background-image: linear-gradient(90deg, #1a2e4a 0, #409890 100%);
    .header_logo {
      background: url('http://www.iqiyipic.com/common/fix/h5-aura/headerLogo-iqiyi.png')
        no-repeat;
      width: 26px;
      height: 32px;
      background-size: contain;
    }
    section {
      @include list(row);
      background-image: linear-gradient(
        90deg,
        rgba(16, 36, 65, 0.259) 0,
        rgba(17, 85, 99, 0.259) 100%
      );
      border-radius: 15px;
      margin-left: 12px;
      flex: 1;
      font-size: 16px;
      overflow: hidden;
      // position: relative;
      a {
        width: 37px;
        height: 28px;
        // line-height: 28px;
        // text-align: center;
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
      input {
        border: none;
        background-color: transparent;
        color: #fff;
        height: 28px;
        line-height: 28px;
        padding: 5px 0 5px 0;
        box-sizing: border-box;
        min-width: 46px;
        flex: 1;
      }
      div {
        // position: absolute;
        width: 30px;
        height: 28px;
        text-align: center;
        // line-height: 28px;
        padding: 6px 7px;
        box-sizing: border-box;
      }
    }
    > span {
      width: 54px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      font-size: 16px;
      color: #fff;
    }
  }
}
</style>
