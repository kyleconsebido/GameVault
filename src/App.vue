<script setup>
import NavBar from './components/NavBar.vue'
import AppFooter from './components/AppFooter.vue'
import useGames from './stores/useGames'

useGames().initialize()
</script>

<template>
  <NavBar />
  <RouterView />
  <AppFooter />
</template>
