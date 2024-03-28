<script setup>
import { ref } from 'vue'
import useGames from '@/stores/useGames/'
import GameCard from '@/components/GameCard.vue'
import GamePagination from '@/components/GamePagination.vue'
import GameFilters from '@/components/GameFilters.vue'

const { gameSlice } = useGames()

const transitionName = ref('')

const onPrevious = () => (transitionName.value = 'fade-slide-prev')
const onNext = () => (transitionName.value = 'fade-slide-next')

const smoothScrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
<template>
  <main class="app-container">
    <section class="controls-top">
      <GameFilters @change="transitionName = 'fade'" />
      <GamePagination @prev="onPrevious" @next="onNext" />
    </section>
    <Transition :name="transitionName">
      <section :key="gameSlice" class="cards">
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
    </Transition>
    <section class="controls-bottom">
      <GamePagination @prev="onPrevious" @next="onNext" @change="smoothScrollTop" />
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

.fade-enter-active {
  animation:
    wait 200ms,
    fade-in 200ms 200ms;
}

.fade-leave-active {
  animation: fade-in 200ms reverse;
}

.fade-slide-next-enter-active {
  animation:
    wait 250ms,
    fade-slide-in 250ms 250ms;
}

.fade-slide-next-leave-active {
  animation: fade-slide-out 250ms;
}

.fade-slide-prev-enter-active {
  animation:
    wait 250ms,
    fade-slide-out 250ms 250ms reverse;
}

.fade-slide-prev-leave-active {
  animation: fade-slide-in 250ms reverse;
}

@keyframes wait {
  from {
    display: none;
  }
  to {
    display: none;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-slide-in {
  from {
    display: flex;
    opacity: 0;
    translate: -1em 0;
  }

  to {
    opacity: 1;
    translate: 0 0;
  }
}

@keyframes fade-slide-out {
  from {
    opacity: 1;
    translate: 0 0;
  }

  to {
    opacity: 0;
    translate: 1em 0;
  }
}
</style>
