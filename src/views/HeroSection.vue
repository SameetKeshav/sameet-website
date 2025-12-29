<template>
  <section id="hero" class="text-center py-20">
     <div class="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">

      <!-- Avatar -->
      <img
        :src="avatarSrc"
        alt="Your avatar"
        class="w-32 h-32 rounded-full object-cover border-4 border-indigo-600 dark:border-indigo-400 shadow-lg"
      />

      <!-- Text block -->
      <div>
        <h1 class="text-5xl font-extrabold mb-2 text-indigo-600 dark:text-indigo-400">
          Hi, I’m Sameet Keshav 👋
        </h1>

        <p class="text-xl mb-6 text-gray-700 dark:text-gray-300">
          Backend Software Engineer
        </p>

        <!-- CTA buttons -->
        <div class="flex flex-wrap justify-center gap-4">
          <a href="#projects" @click.prevent="scrollTo('projects')"
                       class="px-8 py-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition">
            View Projects
        </a>
          <!-- <router-link to="/contact"
                       class="px-8 py-3 rounded-full border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition">
            Get in Touch
          </router-link> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const avatarSrc = '/images/profile.jpg'

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>
