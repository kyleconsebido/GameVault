<script setup>
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'
import useGames from './stores/useGames'

useGames().initialize()
</script>

<template>
  <AppNavbar />
  <RouterView />
  <AppFooter />
</template>
