export function ruMonthDayFormater(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
  }

  let formattedDate = date.toLocaleDateString('ru-RU', options)

  const parts = formattedDate.split(' ')

  const month = parts[1]

  parts[1] = month.charAt(0).toUpperCase() + month.slice(1, -1)

  formattedDate = parts.join(' ')

  return formattedDate
}
