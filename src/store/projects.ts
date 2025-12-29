import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Project {
  id: number
  title: string
  description: string
  image: string   // URL or local asset path
  link?: string
}

export const useProjects = defineStore('projects', () => {
  const projects = ref<Project[]>([
    {
      id: 1,
      title: 'Portfolio Site',
      description: 'A Vue + Tailwind portfolio built for this very repo.',
      image: '/assets/portfolio.png',
      link: 'https://github.com/yourname/vue-portfolio',
    },
    // …add more projects
  ])

  return { projects }
})
