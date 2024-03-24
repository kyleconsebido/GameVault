<script setup>
import { useRoute, useRouter } from 'vue-router'
import useGames from '@/stores/useGames/'

const route = useRoute()
const router = useRouter()

const { search } = useGames()

let isSearching = false

router.beforeEach(() => {
  if (!isSearching) {
    search.value = ''
  }
})

router.afterEach(() => (isSearching = false))

const searchGame = () => {
  if (route.path !== '/games' && search.value) {
    isSearching = true
    router.push('/games')
  }
}
</script>

<template>
  <form @submit.prevent="searchGame">
    <input v-model.trim="search" />
    <button>Search</button>
  </form>
</template>
