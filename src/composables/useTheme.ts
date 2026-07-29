import { readonly, ref, watchEffect } from 'vue'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'librory-theme'

function resolveInitialTheme(): Theme {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') {
    return stored
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const theme = ref<Theme>('light')
let initialized = false

export function useTheme() {
  if (!initialized) {
    initialized = true
    theme.value = resolveInitialTheme()

    watchEffect(() => {
      document.documentElement.dataset.theme = theme.value
      localStorage.setItem(STORAGE_KEY, theme.value)
    })
  }

  function toggleTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  return { theme: readonly(theme), toggleTheme }
}
