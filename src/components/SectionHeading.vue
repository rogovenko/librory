<script setup lang="ts">
import DiamondMark from './DiamondMark.vue'

defineProps<{
  index: string
  title: string
}>()
</script>

<template>
  <header v-reveal class="head">
    <p class="marker">
      <DiamondMark />
      <span>{{ index }}</span>
    </p>

    <div class="title-row">
      <h2 class="title">{{ title }}</h2>
      <slot name="meta" />
    </div>
  </header>
</template>

<style scoped>
.head {
  margin-bottom: var(--space-12);
}

.marker {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.14em;
  color: var(--accent);
}

.title-row {
  display: flex;
  align-items: baseline;
  gap: var(--space-4);
  margin-top: var(--space-3);
  padding-bottom: var(--space-4);
  border-bottom: 1px solid var(--border-strong);
}

.title {
  font-size: var(--text-xl);
  letter-spacing: -0.02em;
}
</style>
