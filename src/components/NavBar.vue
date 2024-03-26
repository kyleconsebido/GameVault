<script setup>
import GameSearch from './GameSearch.vue'
</script>

<template>
  <nav>
    <div class="app-container">
      <ul class="nav-items">
        <li>
          <RouterLink to="/" class="home">
            <img class="logo" src="../assets/logo.svg" />
            <span class="title">GAME VAULT</span>
          </RouterLink>
        </li>
        <li class="nav-item"><RouterLink to="/games" class="nav-item">Games</RouterLink></li>
        <li class="nav-item search"><GameSearch /></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
nav {
  padding-top: 1rem;
  padding-bottom: 1rem;
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

.nav-items {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-item {
  letter-spacing: 0.1em;
  translate: 0 0.1em;
  color: var(--color-text-dark);
  transition: 100ms color;
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
}

.search {
  margin-left: auto;
}
</style>
