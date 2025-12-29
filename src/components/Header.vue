<template>
  <header class="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-sm">
    <nav class="container mx-auto flex items-center justify-between py-4 px-6">
      <!-- Logo / Name -->
      <router-link to="/" @click.prevent="scrollTo('hero')" class="text-xl font-bold text-indigo-600 dark:text-indigo-400">
        Sameet Keshav
      </router-link>

      <!-- Nav links (smooth scroll) -->
      <ul class="flex space-x-8 hidden md:flex">
        <li><a href="#about" @click.prevent="scrollTo('about')" class="text-gray-700 hover:text-indigo-600 dark:text-gray-300">About</a></li>
        <li><a href="#experience" @click.prevent="scrollTo('experience')" class="text-gray-700 hover:text-indigo-600 dark:text-gray-300">Experience</a></li>
        <li><a href="#certification" @click.prevent="scrollTo('certification')" class="text-gray-700 hover:text-indigo-600 dark:text-gray-300">Certifications</a></li>
        <li><a href="#skills" @click.prevent="scrollTo('skills')" class="text-gray-700 hover:text-indigo-600 dark:text-gray-300">Skills</a></li>
        <li><a href="#projects" @click.prevent="scrollTo('projects')" class="text-gray-700 hover:text-indigo-600 dark:text-gray-300">Projects</a></li>
        <!-- <li><a href="#contact" @click.prevent="scrollTo('contact')" class="text-gray-700 hover:text-indigo-600 dark:text-gray-300">Contact</a></li> -->
      </ul>

      <!-- Dark‑mode toggle -->
      <DarkModeToggle />
    </nav>
  </header>
</template>

<script lang="ts" setup>
// import { useRouter } from 'vue-router'
// const router = useRouter()

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>
