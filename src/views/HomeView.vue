<script setup>
import HomeHero from '../components/HomeHero.vue'
import HomeVault from '../components/HomeVault.vue'
import HomeFeatured from '@/components/HomeFeatured.vue'
</script>

<template>
  <main>
    <HomeHero />
    <HomeVault />
    <HomeFeatured />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 100px;
}
</style>
