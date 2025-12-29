import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router'
import App from './App.vue'
import './style.css'

const app = createApp(App)
  .use(createPinia())
  .use(router)

  // Apply stored theme on first render
const saved = localStorage.getItem('theme')
if (saved === 'dark') document.documentElement.classList.add('dark')

  
app.mount('#app')
