import { useI18n } from 'vue-i18n'

export function formatDateToLocal(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
  }

  const { locale } = useI18n()

  let formattedDate = date.toLocaleDateString(locale.value, options)

  const parts = formattedDate.split(' ')

  const month = parts[1]

  parts[1] = month.charAt(0).toUpperCase() + month.slice(1, -1)

  formattedDate = parts.join(' ')

  return formattedDate
}
