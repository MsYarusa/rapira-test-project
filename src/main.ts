import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './app/App.vue'
import router from './app/router'
import '@/shared/ui/styles/tailwind/index.css'
import '@/shared/ui/styles/index.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
