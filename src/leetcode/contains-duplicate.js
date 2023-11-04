/**
 * @param {number[]} numbers
 * @return {boolean}
 */
const containsDuplicate = (numbers) => {
  const numbersLen = numbers.length
  numbers.sort()
  let prev = numbers[0]
  for (let i = 1; i < numbersLen; i += 1) {
    const item = numbers[i]
    if (item === prev) {
      return true
    }
    prev = item
  }
  return false
}

export default containsDuplicate
