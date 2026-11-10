<script setup lang="ts">
import ProjectGallery from '@/components/ProjectGallery.vue'
import { projects } from '@/data/projects'

const project = projects.find(({ slug }) => slug === 'versatile-hero')!
</script>

<template>
  <article class="case container">
    <RouterLink class="back" to="/#work">← All work</RouterLink>
    <header>
      <p class="meta">{{ project.year }} · {{ project.platforms }}</p>
      <h1>{{ project.title }}</h1>
      <p class="summary">A turn-based fantasy adventure where you build the island as you explore it.
        Choose your next tile and rotate it to open a path. One route might lead to treasure,
        another to a quest or a fight. Across three biomes, you collect equipment and prepare
        for the final boss. The demo takes about an hour at a relaxed pace.</p>
      <div class="actions">
        <a class="action-pill" href="/versatile-hero/play/index.html">Play in browser →</a>
        <a v-for="link in project.links" :key="link.href" class="action-pill" :href="link.href"
          target="_blank" rel="noopener noreferrer">{{ link.label }} ↗</a>
      </div>
    </header>

    <video controls playsinline preload="none" width="1920" height="1080"
      poster="/versatile-hero/1.webp" src="/versatile-hero/film.mp4"
      aria-label="Versatile Hero gameplay and development overview"></video>

    <section>
      <h2>My role</h2>
      <p class="role">{{ project.role }} · 3 months</p>
      <dl>
        <dt>Concept and prototype</dt>
        <dd>I built a playable prototype around my original concept and pitched it to the client, securing funding for the demo.</dd>
        <dt>Game and level design</dt>
        <dd>My main design challenge was connecting maze building with exploration. I designed the tiles and levels so that rotating a piece changes which encounters and rewards the player can reach. I documented the mechanics and balanced combat, quests, and equipment.</dd>
        <dt>Unity development</dt>
        <dd>As the sole developer, I designed the architecture, wrote the game code, and built tools for creating levels and tuning the game balance.</dd>
        <dt>Interface</dt>
        <dd>I mapped the user flows and created the wireframes. A freelance UI designer turned them into the final interface.</dd>
        <dt>Art and audio</dt>
        <dd>I created the 3D models using AI tools and Blender, drew on a shared color palette for the three biomes, and worked with Flat Kit shaders and visual effects. I also created the item and location icons and selected music and sound effects from public libraries.</dd>
        <dt>Analytics and release</dt>
        <dd>I integrated analytics using Unity Gaming Services and published the Android demo on Google Play.</dd>
      </dl>
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
.meta { color: var(--accent); font: var(--text-xs) var(--font-mono); text-transform: uppercase; letter-spacing: .08em; }
h1 { margin-block: .3em; font-size: var(--text-2xl); }
.summary, dd { max-width: 70ch; color: var(--text-muted); }
.actions { display: flex; flex-wrap: wrap; gap: var(--space-2); margin-top: var(--space-6); }
video { display: block; width: 100%; height: auto; border-radius: var(--radius-lg); background: black; }
section { margin-top: var(--space-12); }
h2 { font-size: var(--text-xl); padding-bottom: var(--space-3); border-bottom: 1px solid var(--border-strong); margin-bottom: var(--space-6); }
.role { margin-bottom: var(--space-6); }
dl { display: grid; grid-template-columns: 1fr 2.2fr; gap: var(--space-6); }
dt { font-weight: 600; }
@media (max-width: 36rem) {
  dl { grid-template-columns: 1fr; gap: var(--space-1); }
  dt:not(:first-child) { margin-top: var(--space-4); }
}
</style>
