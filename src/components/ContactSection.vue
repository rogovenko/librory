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

      <ul v-reveal="140" class="socials">
        <li v-for="link in profile.links" :key="link.href">
          <a class="link-external" :href="link.href" target="_blank" rel="noopener noreferrer">
            {{ link.label }}
            <svg viewBox="0 0 12 12" width="9" height="9" aria-hidden="true">
              <path
                d="M3 9 9 3M4.2 3H9v4.8"
                fill="none"
                stroke="currentColor"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.email {
  margin-top: var(--space-6);
  font-size: var(--text-lg);
}

.socials {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-top: var(--space-8);
}
</style>
