<script setup>
import { ref, onUnmounted } from 'vue'
import { IconArrow } from '../assets/icons'

const { label } = defineProps(['label'])

const open = ref(false)

const id = crypto.getRandomValues(new Uint8Array(6)).join('') + new Date().valueOf()

const closeDropdown = () => {
  open.value = false

  document.removeEventListener('pointerdown', handleDocumentClick)
}

const openDropdown = () => {
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
  if (!e.target.closest(`#${CSS.escape(id)}`)) {
    closeDropdown()
  }
}

onUnmounted(() => {
  document.removeEventListener('pointerdown', handleDocumentClick)
})
</script>
<template>
  <div :id="id" class="dropdown">
    <button v-bind="$attrs" @click="toggleOpen" :class="{ open: open }" class="dropdown-btn">
      <span class="label">{{ label }}</span>
      <IconArrow class="icon" />
    </button>
    <Transition name="open-items">
      <div v-if="open" class="items scrollbar">
        <slot name="items"></slot>
      </div>
    </Transition>
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
  transition:
    scale 200ms,
    opacity 200ms;
}

.items > :slotted(*) {
  display: block;
  padding: var(--padding);
  transition: 200ms background-color;
}

.items > :slotted(*):hover {
  background-color: color-mix(in srgb, var(--color-background) 95%, transparent);
}

.open-items-enter-active {
  animation: open-items 200ms;
}

.open-items-leave-active {
  animation: open-items 200ms reverse;
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
