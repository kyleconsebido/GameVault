import { computed, reactive, ref } from 'vue'

const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games'
const options = {
  headers: {
    'X-RapidAPI-Key': '2a7e148a6fmshb687030582d2234p12e1c1jsn433c157b3cbe',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  },
  cache: 'force-cache'
}

const limit = 20

const data = ref([])

const state = reactive({
  games: [],
  loading: false,
  error: null,
  page: 1,
  search: '',
  filters: [],
  platformFilters: [],
  genreFilters: []
})

const platforms = computed(() => {
  return Array.from(
    data.value.reduce((acc, game) => {
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
    data.value.reduce((acc, game) => {
      acc.add(game.genre.trim())

      return acc
    }, new Set())
  ).sort()
})

const pages = computed(() => Math.ceil(state.games.length / limit))

const gameSlice = computed(() => {
  const start = (state.page - 1) * limit
  return state.games.slice(start, start + limit)
})

const initialize = () => {
  state.error = null
  state.loading = true

  fetch(url, options)
    .then((res) => res.json())
    .then((dat) => {
      data.value = dat
      state.games = dat
      state.search = ''
      state.filters = []
      state.page = 1
    })
    .catch((error) => {
      console.error(error)
      state.error = error
    })
    .finally(() => (state.loading = false))
}

const getGame = (id) => data.value.find((game) => game.id == id)

const setPage = (page) => (state.page = page)

const decrementPage = () => {
  if (state.page > 1) state.page--
}

const incrementPage = () => {
  if (state.page !== pages.value) state.page++
}

const runFilter = () => {
  state.games = data.value.filter((game) => {
    const likeSearch = game.title.toLowerCase().includes(state.search.toLowerCase())
    let isMatchingGenre = null

    const hasFilter = state.filters.some((filter) => {
      const values = game[filter.field].trim().split(', ')

      const isMatch = values.includes(filter.value)

      if (filter.field === 'genre') {
        isMatchingGenre = isMatch
      }

      return isMatch
    })

    return (
      likeSearch &&
      (hasFilter || state.filters.length === 0) &&
      (isMatchingGenre || isMatchingGenre === null)
    )
  })

  state.page = 1
}

const setFilters = (...filters) => {
  state.filters = [...filters]
  runFilter()
}

export default () => ({
  state,
  platforms,
  genres,
  gameSlice,
  pages,
  initialize,
  getGame,
  setPage,
  incrementPage,
  decrementPage,
  setFilters,
  runFilter
})
