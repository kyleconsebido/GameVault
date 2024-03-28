<script setup>
import { useRouter } from 'vue-router'
import useGames from '../stores/useGames'
import useIsVisibleLinks from '../stores/useIsVisibleLinks'
import scrollTop from '../utils/scrollTop'
import GameSearch from './GameSearch.vue'

const isVisibleLinks = useIsVisibleLinks()

const initializeGames = () => {
  useGames().initialize()
  scrollTop()
}

const removeGuard = useRouter().beforeEach((to) => {
  if (to.name !== 'Home') {
    isVisibleLinks.value = true
  }

  removeGuard()
})
</script>

<template>
  <nav :class="{ hide: !isVisibleLinks }">
    <div class="app-container">
      <ul class="nav-items">
        <li class="nav-item">
          <RouterLink to="/" class="home" @click="scrollTop">
            <img class="logo" src="../assets/logo.svg" />
            <span class="title">GAME VAULT</span>
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/games" @click="initializeGames">Games</RouterLink>
        </li>
        <li class="search"><GameSearch /></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
nav {
  --hide-ms: 500ms;

  position: sticky;
  top: 0;
  padding-top: 1rem;
  padding-bottom: 1rem;
  z-index: 100;
  background-color: color-mix(in srgb, var(--black-2) 95%, transparent);
  backdrop-filter: blur(3px);
  transition:
    var(--hide-ms) background-color,
    var(--hide-ms) backdrop-filter;
}

nav.hide {
  backdrop-filter: none;
  background-color: transparent;
  pointer-events: none;
}

ul {
  padding-left: 0;
}

li {
  display: inline-block;
  list-style-type: none;
}

a {
  text-decoration: none;
}

.hide .nav-item {
  opacity: 0;
  pointer-events: none;
}

.nav-items {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-item {
  translate: 0 0.1em;
  transition: var(--hide-ms) opacity;
}

.nav-item a {
  letter-spacing: 0.1em;
  color: var(--color-text-dark);
  transition:
    100ms color,
    200ms opacity;
}

.nav-item a:hover {
  color: var(--color-text-light);
}

.home {
  font-size: 2rem;
  font-family: 'Lexend Mega', 'DM Sans', sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  user-select: none;
}

.logo {
  width: 1em;
  height: 1em;
  scale: 1.1;
}

.title {
  color: var(--color-heading);

  @media (max-width: 768px) {
    display: none;
  }
}

.search {
  translate: 0 0.1em;
  margin-left: auto;
}
</style>
