<script setup>
import { computed } from 'vue'
import { IconArrow, IconArrowDouble } from '@/assets/icons'
import useGames from '@/stores/useGames/'

const emit = defineEmits(['prev', 'next', 'change'])

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

const emitClick = (direction, callback) => {
  callback()
  emit(direction)
  emit('change')
}
</script>
<template>
  <div v-if="pages > 0" class="pages">
    <button
      :disabled="currentPage == 1"
      @click="emitClick('prev', () => (currentPage = 1))"
      class="page-btn first"
    >
      <IconArrowDouble class="icon" />
    </button>
    <span class="page-slice">
      <button
        :disabled="currentPage <= 1"
        @click="emitClick('prev', decrementPage)"
        class="page-btn first"
      >
        <IconArrow class="icon" />
      </button>
      <button
        v-for="page of pageSlice"
        :key="page"
        :disabled="currentPage === page"
        :class="{ active: currentPage === page }"
        @click="emitClick(page < currentPage ? 'prev' : 'next', () => (currentPage = page))"
        class="page-btn"
      >
        {{ page }}
      </button>
      <button
        :disabled="currentPage >= pages"
        @click="emitClick('next', incrementPage)"
        class="page-btn last"
      >
        <IconArrow class="icon" />
      </button>
    </span>
    <button
      :disabled="currentPage === pages"
      @click="emitClick('next', () => (currentPage = pages))"
      class="page-btn last"
    >
      <IconArrowDouble class="icon" />
    </button>
  </div>
</template>

<style scoped>
.page-btn {
  position: relative;
  font-family: 'DM Sans', Inter, Roboto, sans-serif;
  font-size: 1rem;
  width: 2.5em;
  height: 2.5em;
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

.page-btn:enabled {
  cursor: pointer;
}

.page-btn:enabled:hover {
  background-color: var(--black-1);
  outline-color: var(--color-text-dark);
}

.page-btn:disabled {
  color: var(--black-3);
}

.pages {
  height: fit-content;
}

.pages > .page-btn {
  outline: 1px solid var(--color-border-light);
  outline-offset: 0.5px;
  border-radius: var(--border-radius);
}

.icon {
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  fill: transparent;
  transition:
    200ms translate,
    200ms fill 200ms,
    200ms color;
}

.page-btn:enabled .icon {
  color: var(--color-text-light);
}

.page-btn:enabled:hover .icon {
  color: var(--color-text-light);
}

.page-btn:enabled:active .icon {
  transition:
    200ms translate,
    200ms fill 0s,
    200ms color;
  fill: var(--color-text-light);
}

.first .icon {
  rotate: -0.25turn;
}

.first:enabled:hover .icon {
  translate: calc(-50% - 2px) -50%;
}

.last .icon {
  rotate: 0.25turn;
}

.last:enabled:hover svg.icon {
  translate: calc(-50% + 2px) -50%;
}

.page-slice {
  margin-left: 0.2em;
  margin-right: 0.2em;
  border: 1px solid var(--color-border-light);
  border-radius: var(--border-radius);
  display: inline-flex;
}

.page-slice > .page-btn:not(:last-child) {
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

.page-slice .active {
  color: var(--color-border-light);
}
</style>
