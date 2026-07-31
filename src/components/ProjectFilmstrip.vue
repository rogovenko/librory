<script setup lang="ts">
import { ref } from 'vue'
import type { ProjectImage } from '@/data/projects'

defineProps<{
  images: ProjectImage[]
}>()

const trackEl = ref<HTMLElement | null>(null)
const dragging = ref(false)
let pointerId: number | null = null
let startX = 0
let startScrollLeft = 0

function onPointerDown(event: PointerEvent) {
  // Touch/pen already get native scrolling; only emulate drag-to-scroll for a mouse.
  if (!trackEl.value || event.button !== 0 || event.pointerType !== 'mouse') return
  event.preventDefault()
  pointerId = event.pointerId
  startX = event.clientX
  startScrollLeft = trackEl.value.scrollLeft
  dragging.value = true
}

function onPointerMove(event: PointerEvent) {
  if (!dragging.value || !trackEl.value || event.pointerId !== pointerId) return
  const delta = event.clientX - startX
  trackEl.value.scrollLeft = startScrollLeft - delta
}

function endDrag(event: PointerEvent) {
  if (event.pointerId !== pointerId) return
  dragging.value = false
  pointerId = null
}
</script>

<template>
  <div
    ref="trackEl"
    class="filmstrip"
    :class="{ dragging }"
    role="group"
    aria-label="Screenshots"
    @pointerdown="onPointerDown"
    @pointermove="onPointerMove"
    @pointerup="endDrag"
    @pointercancel="endDrag"
    @pointerleave="endDrag"
  >
    <figure
      v-for="image in images"
      :key="image.src"
      class="frame"
      :style="{ aspectRatio: `${image.width} / ${image.height}` }"
    >
      <img
        :src="image.src"
        :alt="image.alt"
        :width="image.width"
        :height="image.height"
        loading="lazy"
        decoding="async"
        draggable="false"
      />
    </figure>
  </div>
</template>

<style scoped>
.filmstrip {
  display: flex;
  gap: var(--space-3);
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x proximity;
  cursor: grab;
  scrollbar-width: thin;
  scrollbar-color: var(--border) transparent;
  padding-bottom: var(--space-2);
  user-select: none;
  -webkit-user-select: none;
}

.filmstrip.dragging {
  cursor: grabbing;
  scroll-snap-type: none;
}

.filmstrip::-webkit-scrollbar {
  height: 6px;
}

.filmstrip::-webkit-scrollbar-track {
  background: transparent;
}

.filmstrip::-webkit-scrollbar-thumb {
  background: var(--border);
  border-radius: 999px;
}

.filmstrip::-webkit-scrollbar-thumb:hover {
  background: var(--text-faint);
}

.frame {
  flex: 0 0 auto;
  scroll-snap-align: start;
  height: 22rem;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  background: var(--bg-subtle);
}

.frame img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  pointer-events: none;
}

@media (max-width: 40rem) {
  .frame {
    height: 17rem;
  }
}
</style>
