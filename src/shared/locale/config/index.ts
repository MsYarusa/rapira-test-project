import { ruDatetimeFormates } from '../dates/ruDatetimeFormats'
import { ruPluralRules } from '../plural/ruPluralRules'
import ru from '../ru-RU.json'

// Я не знаю почему но datetimeFormats не доступны

export const I18nConfig = {
  locale: 'ru-RU',
  fallbackLocale: 'ru-RU',
  datetimeFormats: {
    'ru-RU': ruDatetimeFormates,
  },
  messages: {
    'ru-RU': ru,
  },
  legacy: false,
  pluralRules: {
    'ru-RU': ruPluralRules,
  },
}

export enum I18nLocales {
  'ru-RU' = 'ru-RU',
}
