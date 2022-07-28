export const findLabel = (option, labels) => {
  const result = labels.find((label) => label.labelKey === option)
  return result.title
}


export const validateIntegerNumber = (str) => {
  let string = ''
  for (let i = 0; i <= str.length - 1; i++) {
    if (typeof +str[i] === 'number') {
      string += str[i]
    }
  }
  return string
}