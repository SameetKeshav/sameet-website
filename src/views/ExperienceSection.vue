<template>
  <section id="experience" class="max-w-4xl mx-auto">
    <h2 class="text-3xl font-semibold text-center mb-8">Experience</h2>

   <ul class="pl-6">
    <li v-for="exp in experience" :key="exp" class="flex flex-col relative pl-5">
      <!-- Custom bullet -->
      <span class="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-indigo-500 rounded-full"></span>

      <!-- Skill name -->
      <div class="flex justify-between items-baseline mb-1">
        <span class="font-medium">{{ exp }}</span>
      </div>
    </li>
  </ul>



  </section>
</template>

<script lang="ts" setup>
  const experience = [
    'Software Engineer I - Advance (03/2025 - Present)',
    'Associate Software Engineer - Advance (01/2024 - 02/2025)',
    'Part Time - The IT Advantage (09/2021 - 12/2022)'
  ]
</script>
