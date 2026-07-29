<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: number
    filled?: boolean
  }>(),
  { size: 7, filled: true },
)
</script>

<template>
  <svg
    class="diamond"
    :width="size"
    :height="size"
    viewBox="0 0 10 10"
    aria-hidden="true"
    focusable="false"
  >
    <polygon
      points="5,0.6 9.4,5 5,9.4 0.6,5"
      :fill="filled ? 'currentColor' : 'none'"
      :stroke="filled ? 'none' : 'currentColor'"
      stroke-width="1.3"
    />
  </svg>
</template>

<style scoped>
.diamond {
  flex: none;
}
</style>
