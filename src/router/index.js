import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'

const routes = [
  {
    path: '/', // 預設首頁
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: import('../views/AboutView.vue'),
  }
]

const router = createRouter({
  //history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes
})

export default router

