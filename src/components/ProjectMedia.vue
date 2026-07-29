<script setup lang="ts">
import { computed } from 'vue'
import type { ProjectImage } from '@/data/projects'

const props = defineProps<{
  image: ProjectImage
}>()

const isLandscape = computed(() => props.image.width >= props.image.height)

/**
 * Landscape previews keep their own proportions, so nothing is cropped or
 * letterboxed. Anything taller than that sits inside a 16:9 stage, centred over
 * a blurred copy of itself.
 */
const stageAspect = computed(() =>
  isLandscape.value ? `${props.image.width} / ${props.image.height}` : '16 / 9',
)
</script>

<template>
  <figure
    class="stage"
    :class="isLandscape ? 'stage-landscape' : 'stage-portrait'"
    :style="{ '--stage-aspect': stageAspect }"
  >
    <img
      v-if="!isLandscape"
      class="backdrop"
      :src="image.src"
      alt=""
      aria-hidden="true"
      loading="lazy"
      decoding="async"
    />

    <img
      class="frame"
      :src="image.src"
      :alt="image.alt"
      :width="image.width"
      :height="image.height"
      loading="lazy"
      decoding="async"
    />
  </figure>
</template>

<style scoped>
.stage {
  position: relative;
  aspect-ratio: var(--stage-aspect);
  overflow: hidden;
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
}

.backdrop {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.2);
  filter: blur(34px) saturate(1.1);
  opacity: var(--stage-backdrop-opacity);
}

.frame {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.stage-landscape .frame {
  object-fit: cover;
}

.stage-portrait .frame {
  object-fit: contain;
}

@media (max-width: 40rem) {
  /* A 16:9 stage would squeeze a portrait shot down to a sliver on phones. */
  .stage-portrait {
    aspect-ratio: 3 / 4;
  }
}
</style>
