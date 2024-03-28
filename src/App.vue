<script setup>
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'
import useGames from './stores/useGames'

useGames().initialize()
</script>

<template>
  <AppNavbar />
  <RouterView v-slot="{ Component, route }">
    <Transition name="fade">
      <component :key="route.path" :is="Component" />
    </Transition>
  </RouterView>
  <AppFooter />
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
