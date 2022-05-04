import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Blog from "@/views/Blog.vue";
import FetalLung from "@/projects/FetalLung.vue"
import Respiratory from "@/projects/Respiratory.vue"

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
  {
    path: '/projects/Respiratory',
    name: 'Respiratory',
    component: Respiratory
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

