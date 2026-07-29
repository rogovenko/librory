<script setup lang="ts">
import { profile } from '@/data/profile'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer-inner container">
      <span>© {{ year }} {{ profile.name }}</span>
      <a href="#top" class="to-top">Back to top</a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding-block: var(--space-8);
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.05em;
  color: var(--text-faint);
}

.to-top {
  transition: color 0.15s var(--ease);
}

.to-top:hover {
  color: var(--text);
}
</style>
