<script setup>
import { useRoute, useRouter } from 'vue-router'
import useGames from '../stores/gameStore'

const route = useRoute()
const router = useRouter()

const { state, runFilter } = useGames()

const handleSubmit = () => {
  if (route.name !== 'Games') {
    router.push('/games')
  }

  runFilter()
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input v-model.trim="state.search" />
    <button>Search</button>
  </form>
</template>
