import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './app/App.vue'

import '@/shared/ui/styles/tailwind/index.css'
import '@/shared/ui/styles/index.scss'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
