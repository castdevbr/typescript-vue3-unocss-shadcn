import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import { auth } from "@/control/firebase";

import AuthView from "@/views/AuthView.vue";
import Dashboard from "@/views/Dashboard.vue";
import PublicStart from "@/views/PublicStart.vue";
import NotFound from "@/views/NotFound.vue";
import AddAccount from "@/views/accounts/AddAccount.vue";
import SidebarLayout from "@/layouts/SidebarLayout.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/public/start",
  },
  {
    path: "/public/start",
    name: "public-start",
    component: PublicStart,
  },
  {
    path: "/public/login",
    name: "login",
    component: AuthView,
  },
  {
    path: "/p",
    component: SidebarLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard,
      },
      {
        path: "account/add",
        name: "add-account",
        component: AddAccount,
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  const isAuthenticated = !!auth.currentUser;

  if (to.meta.requiresAuth && !isAuthenticated) {
    return {
      path: "/public/login",
      query: { redirect: to.fullPath },
    };
  }

  if (to.path === "/public/login" && isAuthenticated) {
    return "/p/dashboard";
  }
});

export default router;
