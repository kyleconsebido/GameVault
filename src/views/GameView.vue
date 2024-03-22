<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import useGames from '@/stores/gameStore'

const route = useRoute()

const { getGame } = useGames()
const game = computed(() => getGame(route.params.id))
</script>

<template>
  <main>
    <div><img :src="game?.thumbnail" /></div>
    <div>Title: {{ game?.title }}</div>
    <div>Short Desc: {{ game?.short_description }}</div>
    <div>Desc: {{ game?.description }}</div>
    <div>URL: {{ game?.game_url }}</div>
    <div>Genre: {{ game?.genre }}</div>
    <div>Platform: {{ game?.platform }}</div>
    <div>Publisher: {{ game?.publisher }}</div>
    <div>Developer: {{ game?.developer }}</div>
    <div>Release Date: {{ game?.release_date }}</div>
  </main>
</template>
