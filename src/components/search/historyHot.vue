<template>
  <section :class="$style.sec">
    <div :class="$style.history">
      <div :class="$style.title" v-if="historyShow">
        <h2>搜索历史</h2>
        <a href="#" @click.stop="clearHistory">
          <i></i>
        </a>
      </div>
      <div :class="$style.list">
        <span v-for="(item, i) in historyData" :key="i">{{ item }}</span>
      </div>
    </div>
    <div :class="$style.hotSearch">
      <h2>热门搜索</h2>
      <div :class="$style.hotList">
        <div v-for="(item, i) in hotSearchData" :key="i">
          <em :style="{ color: item.color }">{{ i + 1 }}</em>
          {{ item.content }}
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      // 搜索历史数据
      historyData: [
        '青春有你',
        '王牌对王牌',
        '青春有你',
        '王牌对王牌',
        '青春有你',
        '王牌对王牌'
      ],
      // 热门搜索数据
      hotSearchData: [
        {
          content: '青春有你',
          color: '#ff0130'
        },
        {
          content: '青春有你',
          color: '#ff9027'
        },
        {
          content: '青春有你',
          color: '#ffcc01'
        },
        {
          content: '青春有你',
          color: '#ccc'
        },
        {
          content: '青春有你',
          color: '#ccc'
        },
        {
          content: '青春有你',
          color: '#ccc'
        }
      ]
    }
  },
  methods: {
    // 清除历史记录
    clearHistory() {
      this.historyData = ''
    }
  },
  computed: {
    // 控制title的显示与隐藏
    historyShow() {
      if (this.historyData !== '') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="scss" module>
@import '@/assets/css/element.scss';
.sec {
  margin-top: 44px;
  .history {
    @include list;
    margin-bottom: 10px;
    .title {
      width: 100%;
      padding-left: 10px;
      box-sizing: border-box;
      @include list(row);
      h2 {
        font-size: 18px;
        font-weight: bold;
        flex: 1;
      }
      a {
        width: 46.5px;
        height: 50px;
        box-sizing: border-box;
        padding: 15.5px 13.5px;
        i {
          display: inline-block;
          width: 20px;
          height: 19px;
          background: url('http://www.iqiyipic.com/common/fix/h5-aura/c-channel-all-20200409.png')
            no-repeat 0 -35px;
          background-size: 221px;
        }
      }
    }
    .list {
      @include list(row);
      width: 100%;
      // height: 38px;
      padding-left: 10px;
      box-sizing: border-box;
      flex-wrap: wrap;
      span {
        display: inline-block;
        height: 28px;
        line-height: 28px;
        font-size: 13px;
        padding: 0 12px;
        margin: 0 12px 10px 0;
        box-sizing: border-box;
        background-color: #f5f7fa;
      }
    }
  }
  .hotSearch {
    @include list;
    > h2 {
      height: 50px;
      line-height: 50px;
      width: 100%;
      padding-left: 10px;
      font-size: 18px;
      font-weight: bold;
      box-sizing: border-box;
    }
    .hotList {
      width: 100%;
      padding-right: 25px;
      box-sizing: border-box;
      @include list(row);
      flex-wrap: wrap;
      > div {
        position: relative;
        height: 35px;
        line-height: 35px;
        width: 50%;
        padding-left: 27px;
        box-sizing: border-box;
        font-size: 13px;
        em {
          position: absolute;
          left: 10px;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
