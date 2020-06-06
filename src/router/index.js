import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home, name: 'home' }
]

const router = new VueRouter({
  routes
})

export default router
