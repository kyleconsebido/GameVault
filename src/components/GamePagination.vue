<script setup>
import { computed } from 'vue'
import useGames from '@/stores/useGames/'

const { page: currentPage, pages, incrementPage, decrementPage } = useGames()

const sliceLength = 5

const pageSlice = computed(() => {
  const position = (currentPage.value % sliceLength) - 1

  const fill = (_, i) => currentPage.value - (position - i) - (position === -1 ? sliceLength : 0)
  const slice = Array.from({ length: sliceLength }, fill)

  const maxValue =
    currentPage.value +
    sliceLength -
    (position === -1 ? sliceLength : currentPage.value % sliceLength)

  if (pages.value < maxValue) {
    return slice.slice(0, pages.value - maxValue)
  } else {
    return slice
  }
})
</script>
<template>
  <section v-if="pages > 0">
    <button :disabled="currentPage == 1" @click="currentPage = 1">1</button>
    <button :disabled="currentPage <= 1" @click="decrementPage">prev</button>
    <button
      v-for="page of pageSlice"
      :key="page"
      :disabled="currentPage === page"
      @click="currentPage = page"
    >
      {{ page }}
    </button>
    <button :disabled="currentPage >= pages" @click="incrementPage">next</button>
    <button :disabled="currentPage === pages" @click="currentPage = pages">
      {{ pages }}
    </button>
  </section>
</template>
