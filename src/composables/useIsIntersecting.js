import { ref, onMounted, onUnmounted } from 'vue'

export default (reference, options) => {
  const isIntersecting = ref(false)

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      isIntersecting.value = entry.isIntersecting
    })
  }, options)

  onMounted(() => {
    observer.observe(reference.value)
  })

  onUnmounted(() => {
    observer.disconnect()
  })

  return isIntersecting
}
