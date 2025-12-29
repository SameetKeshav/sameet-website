import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Home from '@/views/HeroSection.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: Home },
  // { path: '/about', name: 'About', component: About },
  // { path: '/projects', name: 'Projects', component: Projects },
  // { path: '/contact', name: 'Contact', component: Contact },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
