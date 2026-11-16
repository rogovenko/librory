<script setup lang="ts">
import ProjectGallery from '@/components/ProjectGallery.vue'
import VideoPreview from '@/components/VideoPreview.vue'
import { projects } from '@/data/projects'

const project = projects.find(({ slug }) => slug === 'ruby-hole')!
const poster = { src: '/ruby-hole/poster.webp', alt: 'Ruby Hole', width: 960, height: 720 }
</script>

<template>
  <article class="case container">
    <RouterLink class="back" to="/#work">← All work</RouterLink>
    <header>
      <p class="eyebrow">{{ project.year }} · Ludum Dare 57 · 3 days</p>
      <h1>{{ project.title }}</h1>
      <p class="prose">
        Two dwarves dig for rubies in a tile-laying puzzle inspired by Carcassonne.
        Rotate pieces to connect tunnels and close off mushroom caves to earn more tiles.
        A short story follows the dwarves through three biomes as the mine gets deeper.
      </p>
      <a v-for="link in project.links" :key="link.href" class="action-pill"
        :href="link.href" target="_blank" rel="noopener noreferrer">{{ link.label }} ↗</a>
    </header>

    <VideoPreview v-if="project.video" :src="project.video" :image="poster" />

    <section>
      <h2>My role</h2>
      <p class="role">{{ project.role }}</p>
      <p class="prose">
        I programmed the game in TypeScript with Phaser. I wrote the rules that determine
        where a tile fits and when a cave is complete, and built the dialogue and event
        screens for the dwarves’ journey.
      </p>
    </section>

    <section>
      <h2>Screenshots</h2>
      <ProjectGallery :images="project.images" />
    </section>
  </article>
</template>

<style scoped>
.case { padding-block: var(--space-8) var(--space-16); }
.back, .role { color: var(--text-muted); font-size: var(--text-sm); }
.back:hover { text-decoration: underline; }
header { margin-block: var(--space-6); }
.eyebrow { color: var(--accent); }
h1 { margin-block: .3em; font-size: var(--text-2xl); }
.action-pill { margin-top: var(--space-4); }
section { margin-top: var(--space-12); }
h2 {
  margin-bottom: var(--space-4);
  padding-bottom: var(--space-3);
  border-bottom: 1px solid var(--border-strong);
  font-size: var(--text-xl);
}
.role { margin-bottom: var(--space-2); }
</style>
