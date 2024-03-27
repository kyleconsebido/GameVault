<script setup>
import { IconBrowser, IconWindows } from '@/assets/icons'

const { game } = defineProps(['game'])
</script>

<template>
  <div class="card">
    <RouterLink :to="`/games/${game?.id}`" class="link">
      <img :src="game?.thumbnail" class="thumbnail" />
      <h1 class="title">{{ game?.title }}</h1>
    </RouterLink>
    <div class="tags">
      <span class="platforms">
        <IconWindows v-if="game?.platform?.includes('PC (Windows)')" class="icon windows" />
        <IconBrowser v-if="game?.platform?.includes('Web Browser')" class="icon" />
      </span>
      <span class="genre">{{ game?.genre }}</span>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: min-content;
}

.link {
  text-decoration: none;
}

.title {
  font-size: 1.5rem;
  color: var(--color-text-light);
  word-break: break-word;
}

.link:hover .thumbnail {
  scale: 0.98;
}

.thumbnail {
  width: 100%;
  min-width: 300px;
  max-height: 206px;
  object-fit: cover;
  border-radius: var(--border-radius);
  box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.5);
  transition: 200ms scale;
}

.tags {
  display: flex;
  column-gap: 0.5em;
  color: var(--color-text-dark);
  align-items: center;
}

.platforms {
  display: inline-flex;
  column-gap: 0.5em;
}

.icon {
  width: 1em;
  height: 1em;
}

.icon.windows {
  fill: var(--color-text-dark);
}
</style>
