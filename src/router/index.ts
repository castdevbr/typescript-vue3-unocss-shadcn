import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import AuthView from '@/views/AuthView.vue'
import Dashboard from '@/views/Dashboard.vue'
import PublicStart from '@/views/PublicStart.vue'
import NotFound from '@/views/NotFound.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/public/start',
  },
  {
    path: '/public/start',
    name: 'public-start',
    component: PublicStart,
  },
  {
    path: '/login',
    name: 'login',
    component: AuthView,
  },
  {
    path: '/p/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to) => {
  const isAuthenticated = !!localStorage.getItem('auth')

  if (to.meta.requiresAuth && !isAuthenticated) {
    return {
      path: '/login',
      query: { redirect: to.fullPath },
    }
  }

  if (to.path === '/login' && isAuthenticated) {
    return '/p/dashboard'
  }
})

export default router
