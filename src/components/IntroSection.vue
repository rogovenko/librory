<script setup lang="ts">
import DiamondMark from './DiamondMark.vue'
import { profile } from '@/data/profile'
import upworkLogo from '@/assets/upwork.svg?raw'

const upwork = profile.links.find(({ label }) => label === 'Upwork')!
</script>

<template>
  <section id="top" class="intro section">
    <div class="container">
      <p v-reveal class="eyebrow">Portfolio · 2026</p>

      <h1 v-reveal="60" class="name">{{ profile.name }}</h1>

      <p v-reveal="120" class="role">{{ profile.role }} · {{ profile.location }}</p>

      <p v-reveal="180" class="prose intro-text">{{ profile.intro }}</p>

      <div v-reveal="240" class="availability-row">
        <p v-if="profile.available" class="availability">
          <DiamondMark :size="6" class="mark" />
          {{ profile.availabilityNote }}
        </p>
        <a class="upwork-link" :href="upwork.href" target="_blank" rel="noopener noreferrer"
          aria-label="Upwork profile (opens in a new tab)">
          <span class="upwork-logo" :innerHTML="upworkLogo" aria-hidden="true"></span>
          Upwork
          <svg viewBox="0 0 12 12" width="10" height="10" aria-hidden="true">
            <path d="M3 9 9 3M4.2 3H9v4.8" fill="none" stroke="currentColor"
              stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.intro {
  padding-top: var(--space-24);
}

.name {
  font-size: var(--text-2xl);
  margin-top: var(--space-4);
  margin-left: -0.04em;
}

.role {
  font-size: var(--text-md);
  color: var(--text-muted);
  margin-top: var(--space-2);
}

.intro-text {
  margin-top: var(--space-6);
  font-size: var(--text-md);
  line-height: 1.75;
}

.availability-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-3);
  margin-top: var(--space-8);
}

.availability, .upwork-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2rem;
  line-height: 1;
  gap: var(--space-2);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
  background: var(--accent-soft);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: var(--space-1) var(--space-3);
}

.upwork-link:hover {
  border-color: var(--accent);
  color: var(--text);
}

.upwork-logo {
  width: 20px;
  height: 20px;
  color: var(--accent);
}

.mark {
  color: var(--accent);
}

@media (max-width: 40rem) {
  .intro {
    padding-top: var(--space-16);
  }
}
.upwork-logo :deep(svg) { display: block; width: 100%; height: 100%; fill: currentColor; }
</style>
