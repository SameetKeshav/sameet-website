<template>
  <section id="projects" class="py-20">
    <h2 class="text-3xl font-semibold mb-8 text-center">My Projects</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProjectCard v-for="p in projects" :key="p.id" :project="p" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useProjects } from '@/store/projects'
import ProjectCard from '@/components/ProjectCard.vue'

const { projects } = useProjects()
</script>
