<script setup>
import useGames from '../stores/gameStore'

const { state, platforms, genres, setFilters } = useGames()

function toggleFilter(e) {
  const { checked, value, dataset } = e.currentTarget

  const filters = [...state.filters]

  if (checked) {
    filters.push({ field: dataset.field, value })
  } else {
    const index = filters.findIndex(
      (filter) => filter.field === dataset.field && filter.value === value
    )

    if (index !== -1) {
      filters.splice(index, 1)
    }
  }

  setFilters(...filters)
}
</script>
<template>
  <section>
    <h2>Platforms</h2>
    <div v-for="platform of platforms" :key="platform">
      <input
        :id="platform"
        :value="platform"
        type="checkbox"
        data-field="platform"
        @change="toggleFilter"
      />
      <label :for="platform">{{ platform }}</label>
    </div>
    <h2>Genres</h2>
    <div v-for="genre of genres" :key="genre">
      <input :id="genre" :value="genre" type="checkbox" data-field="genre" @change="toggleFilter" />
      <label :for="genre">{{ genre }}</label>
    </div>
  </section>
</template>
