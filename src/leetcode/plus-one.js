/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
  const len = digits.length
  let addDigit = 1
  for (let i = len - 1; i >= 0; i -= 1) {
    const currDigit = digits[i] + addDigit
    if (currDigit === 10) {
      digits[i] = 0
      if (i === 0) {
        digits.unshift(1)
      }
    } else {
      digits[i] = currDigit
      addDigit = 0
      return digits
    }
  }
  return digits
}

export default plusOne
