<script setup>
import { useRoute, useRouter } from 'vue-router'
import useGame from '../stores/useGame'

const route = useRoute()
const router = useRouter()

const state = useGame(route.params.id)

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
    <div v-if="state.loading">Loading</div>
    <div v-else-if="state.error">{{ state.error }}</div>
    <div v-else>
      <div><img :src="state?.data?.thumbnail" /></div>
      <div>
        <img
          v-for="screenshot of state?.data?.screenshots"
          :key="screenshot.id"
          :src="screenshot.image"
          width="300"
        />
      </div>
      <div>Title: {{ state?.data?.title }}</div>
      <div>Short Desc: {{ state?.data?.short_description }}</div>
      <div>Desc: {{ state?.data?.description }}</div>
      <a :href="state?.data?.game_url" target="_blank">URL: {{ state?.data?.game_url }}</a>
      <div>Genre: {{ state?.data?.genre }}</div>
      <div>Platform: {{ state?.data?.platform }}</div>
      <div>Publisher: {{ state?.data?.publisher }}</div>
      <div>Developer: {{ state?.data?.developer }}</div>
      <div>Release Date: {{ state?.data?.release_date }}</div>
      <div>
        Minimum System Requirements
        <div>OS: {{ state?.data?.minimum_system_requirements?.os }}</div>
        <div>Processor: {{ state?.data?.minimum_system_requirements?.processor }}</div>
        <div>Memory: {{ state?.data?.minimum_system_requirements?.memory }}</div>
        <div>Graphics: {{ state?.data?.minimum_system_requirements?.graphics }}</div>
        <div>Storage {{ state?.data?.minimum_system_requirements?.storage }}</div>
      </div>
    </div>
  </main>
</template>
