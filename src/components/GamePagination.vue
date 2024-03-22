<script setup>
import { computed } from 'vue'
import useGames from '@/stores/gameStore'

const { state, pages, setPage, incrementPage, decrementPage } = useGames()

const sliceLength = 5

const pageSlice = computed(() => {
  const position = (state.page % sliceLength) - 1

  const fill = (_, i) => state.page - (position - i) - (position === -1 ? sliceLength : 0)
  const slice = Array.from({ length: sliceLength }, fill)

  const maxValue =
    state.page + sliceLength - (position === -1 ? sliceLength : state.page % sliceLength)

  if (pages.value < maxValue) {
    return slice.slice(0, pages.value - maxValue)
  } else {
    return slice
  }
})
</script>
<template>
  <section v-if="pages > 0">
    <button :disabled="state.page == 1" @click="setPage(1)">1</button>
    <button :disabled="state.page <= 1" @click="decrementPage">prev</button>
    <button
      v-for="page of pageSlice"
      :key="page"
      :disabled="state.page === page"
      @click="setPage(page)"
    >
      {{ page }}
    </button>
    <button :disabled="state.page >= pages" @click="incrementPage">next</button>
    <button :disabled="state.page === pages" @click="setPage(pages)">
      {{ pages }}
    </button>
  </section>
</template>
