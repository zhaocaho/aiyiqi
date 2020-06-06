import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入vant
import Vant from 'vant'
import 'vant/lib/index.css'
// reset文件
import '@/assets/css/reset.scss'
// 引入JSONP
import VueJsonp from 'vue-jsonp'

// 全局样式
import '@/assets/css/globle.scss'
Vue.use(Vant)
// 全部注册JSONP插件

Vue.use(VueJsonp)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
