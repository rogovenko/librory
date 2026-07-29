<script setup lang="ts">
import DiamondMark from './DiamondMark.vue'
import { profile } from '@/data/profile'
</script>

<template>
  <section id="top" class="intro section">
    <div class="container">
      <p v-reveal class="eyebrow">Portfolio · 2026</p>

      <h1 v-reveal="60" class="name">{{ profile.name }}</h1>

      <p v-reveal="120" class="role">{{ profile.role }} · {{ profile.location }}</p>

      <p v-reveal="180" class="prose intro-text">{{ profile.intro }}</p>

      <p v-if="profile.available" v-reveal="240" class="availability">
        <DiamondMark :size="6" class="mark" />
        {{ profile.availabilityNote }}
      </p>
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

.availability {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  margin-top: var(--space-8);
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

.mark {
  color: var(--accent);
}

@media (max-width: 40rem) {
  .intro {
    padding-top: var(--space-16);
  }
}
</style>
