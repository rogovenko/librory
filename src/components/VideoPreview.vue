<script setup lang="ts">
import { ref } from 'vue'
import type { ProjectImage } from '@/data/projects'
defineProps<{ image: ProjectImage; src: string }>()
const started = ref(false)
</script>
<template>
  <div class="preview" :style="{ aspectRatio: image.width / image.height }">
    <video v-if="started" :src="src" :poster="image.src" autoplay controls playsinline aria-label="Gameplay video" />
    <button v-else type="button" :aria-label="'Play gameplay video: ' + image.alt" @click="started = true">
      <img :src="image.src" alt="" loading="lazy" draggable="false" />
      <span aria-hidden="true">▶</span>
    </button>
  </div>
</template>
<style scoped>
.preview { position: relative; width: 100%; overflow: hidden; border-radius: var(--radius-lg); background: black; }
button, video, img { display: block; width: 100%; height: 100%; }
button, video { position: absolute; inset: 0; }
button { padding: 0; border: 0; cursor: pointer; }
button:focus-visible { outline: 3px solid var(--accent); outline-offset: -3px; }
span { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); display: grid; place-items: center; width: 3.75rem; height: 3.75rem; border-radius: 50%; border: 1px solid #ffffff88; background: #171717cc; color: white; font-size: 1.4rem; }
</style>
