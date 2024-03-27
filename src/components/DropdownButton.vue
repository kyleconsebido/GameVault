<script setup>
import { ref, onUnmounted } from 'vue'
import { IconArrow } from '../assets/icons'

const { label } = defineProps(['label'])

const open = ref(false)
const isClosing = ref(false)

const uuid = crypto.randomUUID() + new Date().valueOf()

let timeout

const closeDropdown = () => {
  document.removeEventListener('pointerdown', handleDocumentClick)
  isClosing.value = true

  timeout = setTimeout(() => {
    open.value = false
    isClosing.value = false
  }, 200) // transition-duration
}

const openDropdown = () => {
  clearTimeout(timeout)
  isClosing.value = false
  open.value = true

  document.addEventListener('pointerdown', handleDocumentClick)
}

const toggleOpen = () => {
  if (open.value) {
    closeDropdown()
  } else {
    openDropdown()
  }
}

function handleDocumentClick(e) {
  if (!e.target.closest(`#${CSS.escape(uuid)}`)) {
    closeDropdown()
  }
}

onUnmounted(() => {
  document.removeEventListener('pointerdown', handleDocumentClick)
})
</script>
<template>
  <div class="dropdown">
    <button
      v-bind="$attrs"
      @click="toggleOpen"
      :class="{ open: open && !isClosing }"
      class="dropdown-btn"
    >
      <span class="label">{{ label }}</span>
      <IconArrow class="icon" />
    </button>
    <div v-if="open" :id="uuid" :class="{ closing: isClosing }" class="items scrollbar">
      <slot name="items"></slot>
    </div>
  </div>
</template>

<style scoped>
.dropdown {
  --padding: 0.5em 1em;

  position: relative;
  height: fit-content;
}

.dropdown-btn {
  display: flex;
  gap: 2em;
  padding: var(--padding);
  font-family: 'DM Sans';
  font-size: 1rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--color-border-light);
  outline: none;
  background-color: transparent;
  color: var(--color-text-light);
  transition:
    border-color 200ms,
    background-color 200ms;
}

.dropdown-btn:enabled:hover {
  cursor: pointer;
  border-color: var(--color-text-dark);
  background-color: var(--black-1);
}

.dropdown-btn:enabled:hover .icon {
  color: var(--color-text-light);
}

.dropdown-btn.open .icon {
  fill: white;
}

.icon {
  color: var(--color-border-light);
  rotate: 0.5turn;
  translate: 0 0.2em;
  scale: 1 0.9;
  fill: transparent;
  transition:
    200ms fill,
    200ms color;
}

.items {
  position: absolute;
  z-index: 1;
  top: 100%;
  left: 0;
  min-width: 100%;
  width: max-content;
  max-height: 60vh;
  overflow-y: auto;
  background-color: color-mix(in srgb, var(--color-background) 90%, transparent);
  backdrop-filter: blur(3px);
  border: 1px solid var(--color-border-dark);
  border-radius: var(--border-radius);
  transform-origin: top left;
  animation: open-items 200ms;
  transition:
    scale 200ms,
    opacity 200ms;
}

.items.closing {
  scale: 0.9;
  opacity: 0;
}

.items > :slotted(*) {
  display: block;
  padding: var(--padding);
  transition: 200ms background-color;
}

.items > :slotted(*):hover {
  background-color: color-mix(in srgb, var(--color-background) 95%, transparent);
}

@keyframes open-items {
  from {
    scale: 0.9;
    opacity: 0;
  }
  to {
    scale: 1;
    opacity: 1;
  }
}
</style>
