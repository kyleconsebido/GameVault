<script setup>
import GameSearch from './GameSearch.vue'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/games">Games</RouterLink>
    <GameSearch />
  </nav>
</template>
