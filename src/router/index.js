import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/games',
      name: 'Games',
      component: () => import('../views/GamesView.vue')
    },
    {
      path: '/games/:id',
      name: 'Game',
      component: () => import('../views/GameView.vue')
    }
  ]
})

export default router
