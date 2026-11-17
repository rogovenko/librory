<script setup lang="ts">
import { profile } from '@/data/profile'

import upworkLogo from '@/assets/upwork.svg?raw'
import githubLogo from '@/assets/github.svg?raw'
import itchLogo from '@/assets/itch-io.svg?raw'
import linkedinLogo from '@/assets/linkedin-in.svg?raw'
import mailIcon from '@/assets/envelope.svg?raw'

const icons: Record<string, string> = {
  Upwork: upworkLogo,
  GitHub: githubLogo,
  'itch.io': itchLogo,
  LinkedIn: linkedinLogo,
}
const contacts = [
  { label: 'Email', href: `mailto:${profile.email}`, icon: mailIcon },
  ...profile.links.map((link) => ({ ...link, icon: icons[link.label] })),
]

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer-inner container">
      <span>© {{ year }} {{ profile.name }}</span>
      <ul class="socials">
        <li v-for="link in contacts" :key="link.href">
          <a class="social-link" :href="link.href"
            :target="link.label === 'Email' ? undefined : '_blank'" rel="noopener noreferrer"
            :aria-label="link.label === 'Email' ? `Email ${profile.email}` : `${link.label} (opens in a new tab)`"
            :title="link.label">
            <span class="social-icon" :innerHTML="link.icon" aria-hidden="true"></span>
          </a>
        </li>
      </ul>
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
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: var(--space-4);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.05em;
  color: var(--text-faint);
}

.to-top {
  justify-self: end;
  transition: color 0.15s var(--ease);
}

.to-top:hover {
  color: var(--text);
}
.socials {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  justify-content: center;
}

.social-link {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  color: var(--text-muted);
  transition: color .15s var(--ease), border-color .15s var(--ease), background .15s var(--ease);
}

.social-link:hover {
  color: var(--accent);
  border-color: var(--accent);
  background: var(--accent-soft);
}

.social-icon {
  width: 22px;
  height: 22px;

}
.social-icon :deep(svg) { display: block; width: 100%; height: 100%; fill: currentColor; }

@media (max-width: 40rem) {
  .footer-inner { grid-template-columns: 1fr 1fr; }
  .socials { grid-column: 1 / -1; grid-row: 1; }
}
</style>
