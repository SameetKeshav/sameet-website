<template>
  <section id="certification" class="max-w-4xl mx-auto">
    <h2 class="text-3xl font-semibold text-center mb-8">Certifications</h2>

   <ul class="pl-6">
    <li v-for="certification in certifications" :key="certification" class="flex flex-col relative pl-5">
      <!-- Custom bullet -->
      <span class="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-indigo-500 rounded-full"></span>

      <!-- Skill name -->
      <div class="flex justify-between items-baseline mb-1">
        <span class="font-medium">{{ certification }}</span>
      </div>
    </li>
  </ul>



  </section>
</template>

<script lang="ts" setup>
  const certifications = [
    'AWS Certified Developer - Associate (2024)',
    'Mathworks Machine Learning Onramp (2023)',
    'Mathworks Deep Learning Onramp (2023)',
    'MTA - Microsoft Software Development Fundamentals (2019)'
  ]
</script>
