<script setup lang="ts">
import { computed } from 'vue'
import DiamondMark from './DiamondMark.vue'
import ProjectFilmstrip from './ProjectFilmstrip.vue'
import ProjectGallery from './ProjectGallery.vue'
import type { Project } from '@/data/projects'

const props = defineProps<{
  project: Project
  index: number
}>()

const number = computed(() => String(props.index + 1).padStart(2, '0'))

/**
 * A set of portrait screenshots reads better as a swipeable filmstrip than a
 * one-at-a-time carousel: there's nothing meaningful to crop or centre away.
 */
const isPortraitSet = computed(
  () => props.project.images.length > 1 && props.project.images.every((image) => image.height > image.width),
)
</script>

<template>
  <article v-reveal class="project">
    <ProjectFilmstrip v-if="isPortraitSet" :images="project.images" />
    <ProjectGallery v-else :images="project.images" />

    <div class="body">
      <p class="meta">
        <DiamondMark class="meta-mark" />
        <span class="meta-number">Project {{ number }}</span>
        <span class="meta-divider" aria-hidden="true">/</span>
        <span>{{ project.year }}</span>
      </p>

      <h3 class="title">{{ project.title }}</h3>

      <ul class="tags">
        <li v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</li>
      </ul>

      <p class="prose description">{{ project.description }}</p>

      <dl class="details">
        <div>
          <dt>Role</dt>
          <dd>{{ project.role }}</dd>
        </div>
        <div>
          <dt>Platforms</dt>
          <dd>{{ project.platforms }}</dd>
        </div>
      </dl>

      <p v-if="project.casePath" class="links">
        <RouterLink class="action-pill" :to="project.casePath">View case study →</RouterLink>
      </p>
      <p v-else-if="project.links.length" class="links">
        <a
          v-for="link in project.links"
          :key="link.href"
          class="link-external"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
        >
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
      </p>
    </div>
  </article>
</template>

<style scoped>
.project {
  display: grid;
  gap: var(--space-6);
}

.meta {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-faint);
}

.meta-mark {
  color: var(--accent);
}

.meta-number {
  color: var(--text-muted);
}

.meta-divider {
  opacity: 0.6;
}

.title {
  font-size: var(--text-lg);
  margin-top: var(--space-2);
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: var(--space-3);
}

.description {
  margin-top: var(--space-4);
}

.details {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-8);
  margin-top: var(--space-6);
  padding-top: var(--space-4);
  border-top: 1px solid var(--border);
  font-size: var(--text-sm);
}

.details dt {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-faint);
}

.details dd {
  color: var(--text-muted);
  margin-top: 2px;
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-top: var(--space-6);
}
</style>
