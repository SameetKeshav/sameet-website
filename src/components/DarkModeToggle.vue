<template>
  Current mode: {{ isDark ? 'dark' : 'light' }}
  <button @click="toggle()" class="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
    <!-- Sun icon (light mode) -->
    <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24" fill="none" stroke="currentColor"
         class="w-5 h-5 text-yellow-400">
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M12 3v1m0 16v1m8.66-9h-1M4.34 12H3m15.364 6.364l-.707-.707M5.343 5.343l-.707-.707m12.728 0l-.707.707M5.343 18.657l-.707.707"/>
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M12 7a5 5 0 100 10 5 5 0 000-10z"/>
    </svg>

    <!-- Moon icon (dark mode) -->
    <svg v-else xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24" fill="none" stroke="currentColor"
         class="w-5 h-5 text-gray-800 dark:text-gray-200">
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M12 3v1m0 16v1m8.66-9h-1M4.34 12H3m15.364 6.364l-.707-.707M5.343 5.343l-.707-.707m12.728 0l-.707.707M5.343 18.657l-.707.707"/>
    </svg>
  </button>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

// Load saved preference
onMounted(() => {
  const stored = localStorage.getItem('theme')
  if (stored === 'dark') toggle(true)
})

// Toggle logic
function toggle(force?: boolean) {
  const root = document.documentElement

  // If `force` is passed, use it; otherwise flip current state
  const dark = force ?? !isDark.value

  if (dark) {
    root.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    root.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
  isDark.value = dark
}
</script>
