import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
const routes = [
  {
    path: '/', // 預設首頁
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue'),
  }
]

const router = createRouter({
  //history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory('/my-vue-app/'),  // 假設部署在子目錄，請根據實際情況設置
  routes
})

export default router

