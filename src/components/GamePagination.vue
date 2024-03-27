<script setup>
import { computed } from 'vue'
import { IconArrow, IconArrowDouble } from '@/assets/icons'
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
  <div v-if="pages > 0" class="pages">
    <button :disabled="currentPage == 1" @click="currentPage = 1" class="first">
      <IconArrowDouble class="icon" />
    </button>
    <span class="page-slice">
      <button :disabled="currentPage <= 1" @click="decrementPage" class="first">
        <IconArrow class="icon" />
      </button>
      <button
        v-for="page of pageSlice"
        :key="page"
        :disabled="currentPage === page"
        :class="{ active: currentPage === page }"
        @click="currentPage = page"
      >
        {{ page }}
      </button>
      <button :disabled="currentPage >= pages" @click="incrementPage" class="last">
        <IconArrow class="icon" />
      </button>
    </span>
    <button :disabled="currentPage === pages" @click="currentPage = pages" class="last">
      <IconArrowDouble class="icon" />
    </button>
  </div>
</template>

<style scoped>
button {
  font-family: 'DM Sans';
  font-size: 1rem;
  width: 2.5em;
  height: 2.45em;
  padding: 0.5em 1em;
  background-color: transparent;
  color: var(--color-text-light);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  margin: none;
  outline: 1px solid transparent;
  outline-offset: -0.5px;
  transition:
    200ms background-color,
    200ms outline-color,
    200ms color;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
}

button:enabled {
  cursor: pointer;
}

button:enabled:hover {
  background-color: var(--black-1);
  outline-color: var(--color-text-dark);
}

button:disabled {
  color: var(--black-3);
}

.pages {
  height: fit-content;
  overflow: hidden;
}

.pages > .first,
.pages > .last {
  border: 1px solid var(--color-border-light);
  border-radius: var(--border-radius);
  outline-offset: -1px;
}

.icon {
  fill: transparent;

  transition:
    200ms translate,
    200ms fill 200ms,
    200ms color;
}

button:enabled .icon {
  color: var(--color-border-light);
}

button:enabled:hover .icon {
  color: var(--color-text-light);
}

button:enabled:active .icon {
  transition:
    200ms translate,
    200ms fill 0s,
    200ms color;
  fill: var(--color-text-light);
}

.pages > .first .icon,
.pages > .last .icon {
  scale: 2.5;
}

.first .icon {
  rotate: -0.25turn;
}

.first:enabled:hover .icon {
  translate: -2px 0;
}

.last .icon {
  rotate: 0.25turn;
}

.last:enabled:hover .icon {
  translate: 2px 0;
}

.page-slice {
  margin-left: 0.2em;
  margin-right: 0.2em;
  border: 1px solid var(--color-border-light);
  border-radius: var(--border-radius);
  display: inline-flex;
}

.page-slice > button:not(:last-child) {
  border-right: 1px solid var(--color-border-light);
}

.page-slice > .last {
  border-top-right-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
}

.page-slice > .first {
  border-top-left-radius: var(--border-radius);
  border-bottom-left-radius: var(--border-radius);
}

.page-slice .icon {
  scale: 2 1.5;
}

.page-slice .active {
  color: var(--color-text-dark);
}
</style>
