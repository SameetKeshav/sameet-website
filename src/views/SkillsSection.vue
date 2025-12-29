<template>
  <section id="skills" class="max-w-4xl mx-auto">
    <h2 class="text-3xl font-semibold text-center mb-8">Technical Skills</h2>

   <ul class="pl-6">
    <li v-for="skill in skills" :key="skill" class="flex flex-col relative pl-5">
      <!-- Custom bullet -->
      <span class="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-indigo-500 rounded-full"></span>

      <!-- Skill name -->
      <div class="flex justify-between items-baseline mb-1">
        <span class="font-medium">{{ skill }}</span>
      </div>
    </li>
  </ul>



  </section>
</template>

<script lang="ts" setup>
  const skills = [
    'AWS',
    'Vue.js',
    'Typescript',
    'Tailwind CSS',
    'JavaScript',
    'HTML/CSS',
    'React',
    'Next.js',
    'NestJS',
    'MySQL',
    'MongoDB',
    'Java',
    'Python',
    'C++'
  ]
</script>
