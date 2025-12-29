<template>
  <section id="hero" class="text-center py-20">
    <h1 class="text-5xl font-extrabold mb-4 text-indigo-600 dark:text-indigo-400">
      Hi, I’m Sameet Keshav 👋
    </h1>

    <!-- Tagline -->
    <p class="max-w-xl mx-auto text-lg text-gray-700 dark:text-gray-300">
      Backend Software Engineer
    </p>

    <!-- CTA Buttons -->
    <div class="mt-8 flex justify-center space-x-4">
      <a href="#projects" @click.prevent="scrollTo('projects')" class="px-6 py-3 rounded bg-indigo-600 text-white hover:bg-indigo-700 transition">
        View Projects
      </a>
      <a href="#contact" @click.prevent="scrollTo('contact')" class="px-6 py-3 rounded border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition">
        Get in Touch
      </a>
    </div>
  </section>
</template>

<script lang="ts" setup>
function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>
