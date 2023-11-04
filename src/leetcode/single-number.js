/**
 * @param {number[]} numbers
 * @return {number}
 */
const singleNumber = (numbers): number => {
  const result = new Set()
  numbers.forEach((n) => {
    if (result.has(n)) {
      result.delete(n)
    } else {
      result.add(n)
    }
  })
  return result.values().next().value
}

export default singleNumber
