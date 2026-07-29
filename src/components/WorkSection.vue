<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'
import SectionHeading from './SectionHeading.vue'
import OrnamentDivider from './OrnamentDivider.vue'
import { projects } from '@/data/projects'
</script>

<template>
  <section id="work" class="section">
    <div class="container">
      <SectionHeading index="01" title="Selected work">
        <template #meta>
          <span class="count">{{ projects.length }} projects</span>
        </template>
      </SectionHeading>

      <div class="projects">
        <template v-for="(project, index) in projects" :key="project.slug">
          <OrnamentDivider v-if="index > 0" />
          <ProjectCard :project="project" :index="index" />
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
.count {
  margin-left: auto;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--text-faint);
}

.projects {
  display: grid;
  gap: var(--space-12);
}
</style>
