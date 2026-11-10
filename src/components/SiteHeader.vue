<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { profile } from '@/data/profile'

const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 8
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header class="header" :class="{ 'header-scrolled': scrolled }">
    <div class="header-inner container">
      <a href="/#top" class="brand">{{ profile.name }}</a>

      <nav class="nav" aria-label="Sections">
        <a href="/#work">Work</a>
        <a href="/#about">About</a>
        <a href="/#contact">Contact</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: color-mix(in srgb, var(--bg) 88%, transparent);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s var(--ease);
}

.header-scrolled {
  border-bottom-color: var(--border);
}

.header-inner {
  height: var(--header-height);
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.brand {
  font-weight: 600;
  letter-spacing: -0.01em;
  margin-right: auto;
}

.nav {
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.nav a {
  font-size: var(--text-sm);
  color: var(--text-muted);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-sm);
  transition:
    background-color 0.15s var(--ease),
    color 0.15s var(--ease);
}

.nav a:hover {
  background: var(--bg-hover);
  color: var(--text);
}

@media (max-width: 30rem) {
  .nav a {
    padding-inline: var(--space-2);
  }
}
</style>
