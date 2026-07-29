<script setup lang="ts">
import { RouterView } from 'vue-router'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import { useTheme } from './composables/useTheme'

useTheme()
</script>

<template>
  <SiteHeader />

  <main>
    <RouterView />
  </main>

  <SiteFooter />
</template>
