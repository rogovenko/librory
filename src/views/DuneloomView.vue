<script setup lang="ts">
import { ref } from 'vue'
import ProjectFilmstrip from '@/components/ProjectFilmstrip.vue'
import { projects } from '@/data/projects'
const film = ref<HTMLVideoElement | null>(null)
const paused = ref(true)
const project = projects.find(p => p.slug === 'deep-sand-maze')!
</script>
<template>
  <article class="case container">
    <RouterLink class="back" to="/#work">← All work</RouterLink>
    <div class="intro">
      <header>
        <p>{{ project.year }} · {{ project.platforms }}</p>
        <h1>Duneloom Puzzle</h1>
        <p>Inspired by the board game Labyrinth and Arabic mythology, Duneloom Puzzle is a mobile puzzle game set in a shifting maze. Slide its tiles to guide the hero past guards and traps to the treasure.</p>
        <div class="actions">
          <a class="action-pill" href="/duneloom/play/index.html">Play in browser →</a>
          <a v-for="link in project.links" :key="link.href" class="action-pill" :href="link.href" target="_blank" rel="noopener noreferrer">{{ link.label }} ↗</a>
        </div>
      </header>
      <div class="film">
        <video ref="film" controls playsinline preload="none" poster="/duneloom/poster.jpg"
          aria-label="Duneloom Puzzle gameplay film" src="/duneloom/film.mp4"
          @play="paused = false" @pause="paused = true" @ended="paused = true"></video>
        <button v-if="paused" type="button" class="film-play" aria-label="Play Duneloom Puzzle gameplay film"
          @click="film?.play()">
          <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24">
            <path d="M6 3 21 12 6 21Z" fill="currentColor" />
          </svg>
        </button>
      </div>
    </div>
    <section>
      <h2>My role</h2>
      <dl>
        <dt>Concept and prototype</dt><dd>I conceived the game and built the first playable prototype to test the tile-sliding mechanic. The client liked the prototype and funded development of the full game.</dd>
        <dt>Gameplay and UI</dt><dd>I designed the project architecture and led development of the entire game in Unity. I implemented tile sliding, waypoint navigation for the hero and enemies, and the game UI.</dd>
        <dt>Level visuals</dt><dd>I used Wave Function Collapse to turn each puzzle layout into a visible maze. The system selects tiles whose edges match their neighbors.</dd>
        <dt>Save data and localization</dt><dd>I built the save system that preserves player progress between sessions. For localization, I set up a Google Sheets workflow so the team could review and update translations in one place.</dd>
        <dt>Analytics and monetization</dt><dd>I built the game's analytics module using Unity Gaming Services (UGS) and integrated a monetization module.</dd>
        <dt>Mobile optimization</dt><dd>I profiled the game on target devices and optimized graphics and visual effects, raising the frame rate from 12 to 30 FPS. I also reduced the game's size on disk.</dd>
        <dt>Gameplay capture</dt><dd>I recorded gameplay footage for promotional videos and ads.</dd>
        <dt>Store releases</dt><dd>I prepared the iOS build for the App Store and the Android build for Google Play, and helped the team publish the game on both stores.</dd>
        <dt>Development time</dt><dd>3 months</dd>
      </dl>
    </section>
    <section><h2>Screenshots</h2><ProjectFilmstrip :images="project.images" /></section>
  </article>
</template>
<style scoped>
.case { padding-block: var(--space-8) var(--space-16); }
.back { color: var(--text-muted); font-size: var(--text-sm); }
.intro { display: grid; grid-template-columns: minmax(0, 1fr) 38%; align-items: center; gap: var(--space-8); margin-top: var(--space-6); }
header p:first-child { font: var(--text-xs) var(--font-mono); text-transform: uppercase; letter-spacing: .08em; color: var(--accent); }
h1 { font-size: var(--text-2xl); margin: .3em 0; }
header p, dd { color: var(--text-muted); }
.actions { display: flex; flex-wrap: wrap; gap: var(--space-2); margin-top: var(--space-6); }
.back:hover { text-decoration: underline; }
.film { position: relative; }
.film-play {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  place-items: center;
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 50%;
  border: 1px solid rgb(255 255 255 / 45%);
  background: rgb(20 20 18 / 78%);
  color: white;
}
.film-play:hover { background: var(--bg); }
video { display: block; width: 100%; aspect-ratio: 9/16; border-radius: var(--radius-lg); background: black; }
section { margin-top: var(--space-12); }
h2 { font-size: var(--text-xl); padding-bottom: var(--space-3); border-bottom: 1px solid var(--border-strong); margin-bottom: var(--space-6); }
dl { display: grid; grid-template-columns: 1fr 2.2fr; gap: var(--space-6); }
dt { font-weight: 600; }
@media (max-width: 36rem) {
  .intro, dl { grid-template-columns: 1fr; }
  .film { width: 100%; max-width: 19rem; margin-inline: auto; }
  dl { gap: var(--space-1); }
  dt:not(:first-child) { margin-top: var(--space-4); }
}
</style>
