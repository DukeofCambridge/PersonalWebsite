import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Blog from "@/views/Blog";

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Home,
  },
  {
    path: '/blog/:id',
    name: 'Blog',
    component: Blog
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
