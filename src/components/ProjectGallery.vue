<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import DiamondMark from './DiamondMark.vue'
import ProjectMedia from './ProjectMedia.vue'
import VideoPreview from './VideoPreview.vue'
import type { ProjectImage } from '@/data/projects'

const props = defineProps<{
  video?: string
  images: ProjectImage[]
}>()

const activeIndex = ref(0)
const galleryEl = ref<HTMLElement | null>(null)

const hasMultiple = computed(() => props.images.length > 1)
const activeImage = computed(() => props.images[activeIndex.value])

const warmed = new Set<string>()

function warm(src: string) {
  if (warmed.has(src)) return
  warmed.add(src)
  const preload = new Image()
  preload.src = src
}

/** Prefetch the current slide and its neighbours so the next click is instant. */
function warmAround(index: number) {
  if (!props.images.length) return

  const length = props.images.length
  for (const offset of [0, 1, -1]) {
    const image = props.images[(index + offset + length) % length]
    if (image) warm(image.src)
  }
}

let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!hasMultiple.value) return

  if (!galleryEl.value || !('IntersectionObserver' in window)) {
    warmAround(activeIndex.value)
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        warmAround(activeIndex.value)
        observer?.disconnect()
        observer = null
      }
    },
    { rootMargin: '480px 0px' },
  )
  observer.observe(galleryEl.value)
})

onUnmounted(() => observer?.disconnect())

watch(activeIndex, (index) => {
  if (hasMultiple.value) warmAround(index)
})

function next() {
  if (!hasMultiple.value) return
  activeIndex.value = (activeIndex.value + 1) % props.images.length
}

function goTo(index: number) {
  activeIndex.value = index
}

function onStageKeydown(event: KeyboardEvent) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    next()
  }
}
</script>

<template>
  <div ref="galleryEl" class="gallery">
    <VideoPreview v-if="video && activeIndex === 0 && activeImage" :image="activeImage" :src="video" />
    <div v-else
      class="stage-wrapper"
      :class="{ clickable: hasMultiple }"
      :role="hasMultiple ? 'button' : undefined"
      :tabindex="hasMultiple ? 0 : undefined"
      :aria-label="
        hasMultiple
          ? `Screenshot ${activeIndex + 1} of ${images.length}, click for next`
          : undefined
      "
      @click="next"
      @keydown="hasMultiple ? onStageKeydown($event) : undefined"
    >
      <ProjectMedia v-if="activeImage" :image="activeImage" />
    </div>

    <div v-if="hasMultiple" class="nav" role="tablist" aria-label="Screenshots">
      <button
        v-for="(image, index) in images"
        :key="image.src"
        type="button"
        role="tab"
        class="nav-dot"
        :class="{ 'nav-dot-active': index === activeIndex }"
        :aria-selected="index === activeIndex"
        :aria-label="`Show screenshot ${index + 1} of ${images.length}`"
        @click="goTo(index)"
      >
        <DiamondMark :size="9" :filled="index === activeIndex" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: var(--space-4);
}

.stage-wrapper {
  min-width: 0;
}

.stage-wrapper.clickable {
  cursor: pointer;
}

.nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  padding-inline: var(--space-1);
}

.nav-dot {
  display: grid;
  place-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: var(--radius-sm);
  color: var(--text-faint);
  transition:
    color 0.15s var(--ease),
    background-color 0.15s var(--ease);
}

.nav-dot:hover {
  background: var(--bg-hover);
  color: var(--text-muted);
}

.nav-dot-active {
  color: var(--accent);
}

@media (max-width: 40rem) {
  .gallery {
    grid-template-columns: 1fr;
  }

  .nav {
    flex-direction: row;
    justify-content: center;
    padding-block-start: var(--space-1);
  }
}
</style>
