import { RAPID_API_HOST, RAPID_API_KEY } from '@/constants'
import { ref } from 'vue'

const url = 'https://free-to-play-games-database.p.rapidapi.com/api/game?id='
const options = {
  headers: {
    'X-RapidAPI-Key': RAPID_API_KEY,
    'X-RapidAPI-Host': RAPID_API_HOST
  },
  cache: 'force-cache'
}

export default (id) => {
  const data = ref(null)
  const loading = ref(true)
  const error = ref(null)

  fetch(url + id, options)
    .then((res) => res.json())
    .then((dat) => (data.value = dat))
    .catch((err) => (error.value = err))
    .finally(() => (loading.value = false))

  return { data, loading, error }
}
