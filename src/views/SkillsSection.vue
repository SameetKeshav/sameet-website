<template>
  <section id="skills" class="max-w-4xl mx-auto">
    <h2 class="text-3xl font-semibold text-center mb-8">Technical Skills</h2>

    <div v-for="skill in skills" :key="skill.name" class="mb-6">
      <div class="flex justify-between items-baseline mb-1">
        <span class="font-medium">{{ skill.name }}</span>
        <!-- <span class="text-sm text-gray-500 dark:text-gray-400">{{ skill.level }}%</span> -->
      </div>

      <!-- Progress bar
      <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700">
        <div
          :style="{ width: `${skill.level}%` }"
          class="h-2.5 rounded bg-indigo-600 transition-all duration-300 ease-in-out"
        ></div>
      </div> -->
    </div>
  </section>
</template>

<script lang="ts" setup>
const skills = [
  { name: 'Vue.js' },
  { name: 'TypeScript' },
  { name: 'Tailwind CSS' },
  { name: 'JavaScript' },
  { name: 'HTML/CSS' },
]
</script>
