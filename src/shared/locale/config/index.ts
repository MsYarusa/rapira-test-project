import { ruPluralRules } from '../lib/ruPluralRules'
import ru from '../ru.json'

export const I18nConfig = {
  locale: 'ru',
  fallbackLocale: 'ru',
  messages: {
    ru: ru,
  },
  legacy: false,
  pluralRules: {
    ru: ruPluralRules,
  },
}
