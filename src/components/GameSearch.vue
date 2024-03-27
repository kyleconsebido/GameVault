<script setup>
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { IconSearch } from '@/assets/icons'
import useGames from '@/stores/useGames/'

const route = useRoute()
const router = useRouter()

const { search } = useGames()

const searchGame = () => {
  if (route.path !== '/games' && search.value) {
    router.push('/games')
  }
}

watch(route, () => {
  if (route.path !== '/games') {
    search.value = ''
  }
})
</script>

<template>
  <form @submit.prevent="searchGame">
    <input v-model.trim="search" placeholder="Search" />
    <button :disabled="!search"><IconSearch /></button>
  </form>
</template>

<style scoped>
form {
  position: relative;
  height: 2rem;
}

input {
  background-color: var(--color-input);
  color: var(--color-text-dark);
  border: none;
  outline: none;
  height: 100%;
  padding-left: 1em;
  padding-right: 3em;
  border-radius: var(--border-radius);
  transition: 100ms box-shadow;

  @media (max-width: 480px) {
    width: 150px;
  }
}

input:focus {
  box-shadow: inset 0 0 0 1px var(--black-4);
}

input::placeholder {
  color: var(--black-4);
}

button {
  position: absolute;
  right: 0;
  top: 50%;
  translate: 0 -50%;
  padding-right: 1em;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--black-4);
  transition: 100ms color;
}

input:focus ~ button:enabled,
button:enabled:focus {
  color: var(--color-text-dark);
  cursor: pointer;
}
</style>
