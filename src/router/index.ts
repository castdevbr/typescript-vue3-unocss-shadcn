import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import AuthView from '@/views/AuthView.vue'
import Dashboard from '@/views/Dashboard.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: AuthView,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
