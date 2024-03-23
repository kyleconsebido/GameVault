import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GamesView from '@/views/GamesView.vue'
import GameView from '../views/GameView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/games',
      name: 'Games',
      component: GamesView
    },
    {
      path: '/game/:id',
      name: 'Game',
      component: GameView
    }
  ]
})

export default router
