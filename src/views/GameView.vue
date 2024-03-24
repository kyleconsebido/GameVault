<script setup>
import { useRoute, useRouter } from 'vue-router'
import useGame from '../stores/useGame'

const route = useRoute()
const router = useRouter()

const { data: game, loading, error } = useGame(route.params.id)

const clickBack = () => {
  const isValidRoute = router.options.routes.some(
    (route) => route.path === router.options.history.state.back
  )

  if (isValidRoute) {
    router.back()
  } else {
    router.push('/games')
  }
}
</script>

<template>
  <main>
    <button @click="clickBack">Back</button>
    <div v-if="loading">Loading</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <div><img :src="game?.thumbnail" /></div>
      <div>
        <img
          v-for="screenshot of game?.screenshots"
          :key="screenshot.id"
          :src="screenshot.image"
          width="300"
        />
      </div>
      <div>Title: {{ game?.title }}</div>
      <div>Short Desc: {{ game?.short_description }}</div>
      <div>Desc: {{ game?.description }}</div>
      <a :href="game.game_url" target="_blank">URL: {{ game?.game_url }}</a>
      <div>Genre: {{ game?.genre }}</div>
      <div>Platform: {{ game?.platform }}</div>
      <div>Publisher: {{ game?.publisher }}</div>
      <div>Developer: {{ game?.developer }}</div>
      <div>Release Date: {{ game?.release_date }}</div>
    </div>
  </main>
</template>
