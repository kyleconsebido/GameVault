<script setup>
import useGames from '@/stores/useGames/'

const { filters, platforms, genres } = useGames()

function toggleFilter(e) {
  const { checked, value, dataset } = e.currentTarget

  const updatedFilters = [...filters.value]

  if (checked) {
    updatedFilters.push({ field: dataset.field, value })
  } else {
    const index = updatedFilters.findIndex(
      (filter) => filter.field === dataset.field && filter.value === value
    )

    if (index !== -1) {
      updatedFilters.splice(index, 1)
    }
  }

  filters.value = updatedFilters
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
        :checked="filters.some((filter) => filter.value.includes(platform))"
      />
      <label :for="platform">{{ platform }}</label>
    </div>
    <h2>Genres</h2>
    <div v-for="genre of genres" :key="genre">
      <input
        :id="genre"
        :value="genre"
        type="checkbox"
        data-field="genre"
        @change="toggleFilter"
        :checked="filters.some((filter) => filter.value === genre)"
      />
      <label :for="genre">{{ genre }}</label>
    </div>
  </section>
</template>
