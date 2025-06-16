import { useI18n } from 'vue-i18n'

import type { I18nLocales } from '@/shared/locale/config'

import { monthDayFormaters } from './formaters'

interface UseMonthDayDateFormaterReturn {
  formater: (date: Date) => string
}

export function useMonthDayDateFormater(): UseMonthDayDateFormaterReturn {
  const { locale } = useI18n()

  const formater = monthDayFormaters[locale.value as I18nLocales]

  return { formater }
}
