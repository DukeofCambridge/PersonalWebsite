import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Blog from "@/views/Blog.vue";
import FetalLung from "@/projects/FetalLung.vue"

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Home,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },

  {
    path: '/projects/FetalLung',
    name: 'FetalLung',
    component: FetalLung
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

