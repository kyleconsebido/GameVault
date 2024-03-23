<script setup>
import GameSearch from './GameSearch.vue'
import useGames from '../stores/gameStore'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/games" @click="useGames().initialize()">Games</RouterLink>
    <GameSearch />
  </nav>
</template>
