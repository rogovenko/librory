<script setup lang="ts">
import DiamondMark from './DiamondMark.vue'
import SectionHeading from './SectionHeading.vue'
import { profile } from '@/data/profile'
</script>

<template>
  <section id="about" class="section">
    <div class="container">
      <SectionHeading index="02" title="About" />

      <div v-reveal class="about-text">
        <p v-for="paragraph in profile.about" :key="paragraph" class="prose">
          {{ paragraph }}
        </p>
      </div>

      <dl v-reveal="80" class="facts">
        <div v-for="fact in profile.facts" :key="fact.label" class="fact">
          <dt>{{ fact.label }}</dt>
          <dd>{{ fact.value }}</dd>
        </div>
      </dl>

      <aside v-reveal="140" class="notes" aria-label="A few other things">
        <p class="notes-label">Also</p>
        <ul class="notes-list">
          <li v-for="note in profile.notes" :key="note">
            <DiamondMark :size="6" class="mark" />
            <span>{{ note }}</span>
          </li>
        </ul>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.about-text {
  display: grid;
  gap: var(--space-4);
}

.facts {
  display: grid;
  gap: var(--space-4);
  margin-top: var(--space-12);
  padding-top: var(--space-6);
  border-top: 1px solid var(--border);
}

.fact {
  display: grid;
  grid-template-columns: 7rem 1fr;
  gap: var(--space-4);
  align-items: baseline;
}

.fact dt {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-faint);
}

.fact dd {
  color: var(--text-muted);
  font-size: var(--text-sm);
}

.notes {
  margin-top: var(--space-8);
  padding: var(--space-6);
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
}

.notes-label {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-faint);
  margin-bottom: var(--space-4);
}

.notes-list {
  display: grid;
  gap: var(--space-3);
}

.notes-list li {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  color: var(--text-muted);
  font-size: var(--text-sm);
  line-height: 1.55;
}

.mark {
  flex: none;
  color: var(--accent);
  /* Match the text line box so the diamond sits on the optical middle. */
  height: 1.55em;
  display: grid;
  place-items: center;
}

@media (max-width: 34rem) {
  .fact {
    grid-template-columns: 1fr;
    gap: var(--space-1);
  }
}
</style>
