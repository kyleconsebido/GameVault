import { RAPID_API_HOST, RAPID_API_KEY } from '@/constants'
import { computed, reactive, ref } from 'vue'

const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games'
const options = {
  headers: {
    'X-RapidAPI-Key': RAPID_API_KEY,
    'X-RapidAPI-Host': RAPID_API_HOST
  },
  cache: 'force-cache'
}

const limit = 15

const state = reactive({
  data: [],
  loading: false,
  error: null,
})

const search = ref('')
const page = ref(1)
const filters = ref([])

const games = computed(() => {
  return state.data.filter((game) => {
    const likeSearch = game.title.toLowerCase().includes(search.value.toLowerCase())
    let isMatchingGenre = null
    let isMatchingPlatform = null

    filters.value.forEach((filter) => {
      const values = game[filter.field].trim().split(', ')

      const isMatch = values.includes(filter.value)

      if (filter.field === 'genre' && !isMatchingGenre) {
        isMatchingGenre = isMatch
      }

      if (filter.field === 'platform' && !isMatchingPlatform) {
        isMatchingPlatform = isMatch
      }
    })

    const hasFilters = filters.value.length > 0

    page.value = 1

    return (
      likeSearch &&
      (((isMatchingPlatform || isMatchingPlatform === null) &&
        (isMatchingGenre || isMatchingGenre === null)) ||
        !hasFilters)
    )
  })
})

const platforms = computed(() => {
  return Array.from(
    state.data.reduce((acc, game) => {
      const plats = game.platform.split(', ')

      plats.forEach((platform) => {
        acc.add(platform.trim())
      })

      return acc
    }, new Set())
  )
})

const genres = computed(() => {
  return Array.from(
    state.data.reduce((acc, game) => {
      acc.add(game.genre.trim())

      return acc
    }, new Set())
  ).sort()
})

const pages = computed(() => Math.ceil(games.value.length / limit))

const gameSlice = computed(() => {
  const start = (page.value - 1) * limit
  return games.value.slice(start, start + limit)
})

const setPage = (page) => (page.value = page)

const decrementPage = () => {
  if (page.value > 1) page.value--
}

const incrementPage = () => {
  if (page.value !== pages.value) page.value++
}

const initialize = (
  { clearSearch = true, clearFilters = true } = { clearSearch: true, clearFilters: true }
) => {
  state.error = null
  state.loading = true

  if (clearSearch) {
    search.value = ''
  }

  if (clearFilters) {
    filters.value = []
  }

  fetch(url, options)
    .then((res) => res.json())
    .then((dat) => {
      state.data = dat
      page.value = 1
    })
    .catch((error) => {
      console.error(error)
      state.error = error
    })
    .finally(() => (state.loading = false))
}

export default () => ({
  state,
  page,
  search,
  filters,
  platforms,
  genres,
  gameSlice,
  pages,
  initialize,
  setPage,
  incrementPage,
  decrementPage
})
