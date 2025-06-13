import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import App from './app/App.vue'
import global_ru from './app/locale/global-ru.json'
import router from './app/router'

import '@/shared/ui/styles/tailwind/index.css'
import '@/shared/ui/styles/index.scss'

const app = createApp(App)

const i18n = createI18n({
  locale: 'ru',
  fallbackLocale: 'ru',
  messages: {
    ru: global_ru,
  },
  legacy: false,
})

app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
