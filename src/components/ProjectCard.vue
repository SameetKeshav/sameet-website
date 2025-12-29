<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
    <img :src="project.image" alt="" class="w-full h-48 object-cover">

    <div class="p-4">
      <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">{{ project.description }}</p>
      <a v-if="project.link"
         :href="project.link" target="_blank"
         class="inline-block px-3 py-1 rounded bg-indigo-600 text-white hover:bg-indigo-700">
        View
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { defineProps } from 'vue'
import type { Project } from '@/store/projects'

const props = defineProps<{ project: Project }>()
</script>
