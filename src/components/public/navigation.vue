<template>
  <article>
    <!-- 导航栏 -->
    <section>
      <van-tabs
        v-model="active"
        :border="false"
        background="transparent"
        title-inactive-color="rgba(255,255,255,0.8)"
        title-active-color="#fff"
        class="nav_tabs"
        line-height="1px"
        line-width="20PX"
      >
        <van-tab
          :title="item"
          v-for="(item, i) in navList"
          :key="i"
          class="nav_tab"
        >
        </van-tab>
      </van-tabs>
    </section>
    <!-- more -->
    <span>
      <van-icon name="comment-o" />
    </span>
  </article>
</template>

<script>
export default {
  data() {
    return {
      // 被选中的导航tab标签
      active: 0,
      // 导航标签栏
      navList: [
        '精选',
        'VIP会员',
        '热点',
        '电视剧',
        '电影',
        '儿童',
        '综艺',
        '动漫',
        '直播',
        '资讯',
        '爱奇艺号',
        '娱乐',
        '原创',
        '搞笑',
        '影讯',
        '健康',
        '生活',
        '母婴',
        '脱口秀',
        ''
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/element.scss';
article {
  @include list(row);
  top: 42px;
  position: fixed;
  width: 100%;
  z-index: 99;
  section {
    overflow: hidden;
    padding-bottom: 6px;
    background-image: linear-gradient(90deg, #1a2e4a 0, #409890 100%);
    height: 42px;
    box-sizing: border-box;
    flex: 1;
  }
  > span {
    width: 39px;
    height: 36px;
    position: absolute;
    padding: 12px 0;
    background-color: #3a8986;
    box-sizing: border-box;
    top: 0;
    right: 0;
    text-align: center;
    font-size: 18px;
  }
}
</style>
