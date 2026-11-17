<script setup lang="ts">
import SectionHeading from './SectionHeading.vue'
import { profile } from '@/data/profile'
</script>

<template>
  <section id="contact" class="section">
    <div class="container">
      <SectionHeading index="03" title="Contact" />

      <p v-reveal class="prose">
        The quickest way to reach me is email — I usually reply within a day or two.
      </p>

      <p v-reveal="80" class="email">
        <a :href="`mailto:${profile.email}`" class="link">{{ profile.email }}</a>
      </p>


    </div>
  </section>
</template>

<style scoped>
.email {
  margin-top: var(--space-6);
  font-size: var(--text-lg);
}

</style>
