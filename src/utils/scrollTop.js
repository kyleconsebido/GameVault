import { VIEW_TRANSITION_MS } from '@/constants'

const scrollTop = () => {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, VIEW_TRANSITION_MS)
}

export default scrollTop
