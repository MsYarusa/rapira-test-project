export function ruPluralRules(choice: number): 0 | 1 | 2 {
  if (choice === 0) {
    return 0
  }

  const rem10 = choice % 10
  const rem100 = choice % 100

  if (rem10 === 1 && rem100 !== 11) {
    return 0
  } else if ([2, 3, 4].includes(rem10) && ![12, 13, 14].includes(rem100)) {
    return 1
  }

  return 2
}
