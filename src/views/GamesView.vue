<script setup>
import useGames from '@/stores/useGames/'
import GameCard from '@/components/GameCard.vue'
import GamePagination from '@/components/GamePagination.vue'
import GameFilters from '@/components/GameFilters.vue'

const { gameSlice } = useGames()
</script>
<template>
  <main class="app-container">
    <section class="controls-top">
      <GameFilters />
      <GamePagination />
    </section>
    <section class="cards">
      <GameCard v-for="game of gameSlice" :key="game?.id" :game="game" />
      <template v-if="gameSlice?.length % 3 !== 0">
        <GameCard
          v-for="i in 3 - (gameSlice?.length % 3)"
          :key="i"
          :game="gameSlice[gameSlice?.length - 1]"
          class="filler"
        />
      </template>
    </section>
    <section class="controls-bottom">
      <GamePagination />
    </section>
  </main>
</template>

<style scoped>
.controls-top {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  column-gap: 2em;
  row-gap: 2em;
  margin-top: 2em;
  margin-bottom: 3em;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
}

.cards > * {
  flex: 1 1 auto;
}

.filler {
  visibility: hidden;
  pointer-events: none;
}

.controls-bottom {
  margin-top: 2em;
}
</style>
