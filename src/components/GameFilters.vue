<script setup>
import useGames from '@/stores/useGames/'
import DropdownButton from './DropdownButton.vue'

const emit = defineEmits(['change'])

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
  emit('change')
}
</script>
<template>
  <div class="filters">
    <DropdownButton class="active" label="Platforms">
      <template #items>
        <label v-for="platform of platforms" :key="platform" :for="platform" class="switch">
          <input
            :id="platform"
            :value="platform"
            type="checkbox"
            data-field="platform"
            @change="toggleFilter"
            :checked="filters.some((filter) => filter.value.includes(platform))"
          />
          <span class="btn"></span>
          <span class="label">{{ platform }}</span>
        </label>
      </template>
    </DropdownButton>

    <DropdownButton label="Genres">
      <template #items>
        <label v-for="genre of genres" :key="genre" :id="genre" class="switch">
          <input
            :id="genre"
            :value="genre"
            type="checkbox"
            data-field="genre"
            @change="toggleFilter"
            :checked="filters.some((filter) => filter.value === genre)"
          />
          <span class="btn"></span>
          <span class="label">{{ genre }}</span>
        </label>
      </template>
    </DropdownButton>
  </div>
</template>

<style scoped>
.filters {
  display: inline-flex;
  gap: 1em;
}

.switch {
  display: flex;
  align-items: center;
}

label {
  font-family: 'DM Sans';
  cursor: pointer;
}

.label {
  margin-left: 0.5em;
}

input {
  visibility: hidden;
  pointer-events: none;
  width: 0;
}

.btn {
  position: relative;
  width: 1em;
  height: 1em;
  background-color: transparent;
  border: 1px solid var(--color-border-light);
  border-radius: calc(var(--border-radius) / 2);
}

.btn::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background: var(--yellow);
  scale: 0.8;
  opacity: 0;
  transition:
    opacity 200ms,
    scale 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

input:checked ~ .btn::after {
  scale: 1;
  opacity: 1;
}
</style>
