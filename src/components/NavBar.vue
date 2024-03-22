<script setup>
import GameSearch from './GameSearch.vue'
import useGames from '../stores/gameStore'
</script>

<template>
  <nav>
    <RouterLink to="/" @click="useGames().initialize()">Home</RouterLink>
    <GameSearch />
  </nav>
</template>
