<template>
  <div class="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
    <!-- Header -->
    <Header />

    <!-- Main content -->
    <main class="flex-grow container mx-auto px-4 py-8 space-y-16">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <CertificationSection />
      <SkillsSection />
      <ProjectsSection />
      <!-- <ContactSection /> -->
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Header from '@/components/Header.vue'
import HeroSection from '@/views/HeroSection.vue'
import AboutSection from '@/views/AboutSection.vue'
import SkillsSection from '@/views/SkillsSection.vue'
import ProjectsSection from '@/views/ProjectsSection.vue'
import ContactSection from '@/views/ContactSection.vue'
import Footer from '@/components/Footer.vue'
import ExperienceSection from './views/ExperienceSection.vue'
import CertificationSection from './views/CertificationSection.vue'
</script>
