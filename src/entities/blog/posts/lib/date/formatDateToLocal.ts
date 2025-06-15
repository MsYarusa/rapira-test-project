import { useI18n } from 'vue-i18n'

export function formatDateToLocal(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
  }

  const { locale } = useI18n()

  const formattedDate = date.toLocaleDateString(locale.value, options)

  return formattedDate
}
