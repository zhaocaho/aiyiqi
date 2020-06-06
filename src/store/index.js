import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 控制search与头部的显示切换
    searchShow: false
  },
  mutations: {
    // 搜索界面的显示
    showSearchInterface(state) {
      state.searchShow = true
    },
    // 搜索界面的隐藏
    hideSearchInterface(state) {
      state.searchShow = false
    }
    // headerSearch的搜索框的值的改变
  },
  actions: {},
  modules: {}
})
