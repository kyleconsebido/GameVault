import { RAPID_API_HOST, RAPID_API_KEY } from '@/constants'
import { reactive } from 'vue'

const url = 'https://free-to-play-games-database.p.rapidapi.com/api/game?id='
const options = {
  headers: {
    'X-RapidAPI-Key': RAPID_API_KEY,
    'X-RapidAPI-Host': RAPID_API_HOST
  },
  cache: 'force-cache'
}

export default (id) => {
  const state = reactive({
    data: null,
    loading: true,
    error: false
  })

  fetch(url + id, options)
    .then((res) => res.json())
    .then((data) => (state.data = data))
    .catch((error) => (state.error = error))
    .finally(() => (state.loading = false))

  return state
}
