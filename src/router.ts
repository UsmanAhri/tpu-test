import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: "/404",
      name: "404",
      component: () => import("@/views/404.vue"),
    },
    {
      path: '/peoples',
      name: "peoples",
      component: () => import('@/views/Peoples.vue'),
    },
    {
      path: "/peoples/:id",
      name: "peoples.show",
      component: () => import("@/views/Character.vue"),
    },
    {
      path: '/favorites',
      name: "favorites",
      component: () => import('@/views/Favorites.vue'),
    },
  ],
})
