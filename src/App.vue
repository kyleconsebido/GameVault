<script setup>
import NavBar from './components/NavBar.vue'
import { RouterView } from 'vue-router'
import useGames from './stores/gameStore'

useGames().initialize()
</script>

<template>
  <NavBar />
  <RouterView />
</template>
