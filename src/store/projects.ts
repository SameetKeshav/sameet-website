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
      description: 'A Vue + Tailwind portfolio built for this very repo.Here will be the list of all personal projects that I will be working on, as well as a list of skills and certifications that I have.',
      image: '/images/website.jpg',
      link: 'https://github.com/SameetKeshav/sameet-website',
    },
    {
      id: 2,
      title: 'Encompass',
      description: `This is my final year university project that I worked on with a team consisting of 4 people (including myself). Encompass is an innovative web app that leverages machine learning to deliver personalized recommendations tailored to the user's interests`,
      image: '/images/encompass.png',
      link: 'https://github.com/COS301-SE-2023/Encompass'
    },
    {
      id: 3,
      title: 'Image Recognition',
      description: 'A simple Python Notebook where I learnt how to build and train an image recognition model using PyTorch. I build it to export the data to an excel document',
      image: '/images/image-recognition.png',
      link: 'https://github.com/SameetKeshav/ImageRecognition'
    }
  ])

  return { projects }
})
