<script setup>
const { game } = defineProps(['game'])
</script>

<template>
  <div>
    <RouterLink :to="`/games/${game?.id}`"><img :src="game?.thumbnail" /></RouterLink>
    <div>Title: {{ game?.title }}</div>
    <div>Genre: {{ game?.genre }}</div>
    <div>Platform: {{ game?.platform }}</div>
  </div>
</template>
