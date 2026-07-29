<script setup lang="ts">
import DiamondMark from './DiamondMark.vue'
</script>

<template>
  <div class="ornament" role="presentation">
    <span class="rule"></span>
    <DiamondMark :size="9" :filled="false" />
    <DiamondMark :size="5" />
    <DiamondMark :size="9" :filled="false" />
    <span class="rule"></span>
  </div>
</template>

<style scoped>
.ornament {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  color: var(--text-faint);
}

.rule {
  flex: 1;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--border-strong));
}

.rule:last-child {
  background: linear-gradient(to left, transparent, var(--border-strong));
}
</style>
