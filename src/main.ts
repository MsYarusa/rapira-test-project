import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import App from './app/App.vue'
import router from './app/router'
import { I18nConfig } from './shared/locale/config'

import '@/shared/ui/styles/tailwind/index.css'
import '@/shared/ui/styles/index.scss'

const app = createApp(App)

const i18n = createI18n(I18nConfig)

app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
