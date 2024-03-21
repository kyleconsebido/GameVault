import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GameView from "../views/GameView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Games',
      component: HomeView
    },
    {
      path: '/game/:id',
      name: 'Game',
      component: GameView
    }
  ]
})

export default router
