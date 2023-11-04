/**
 * @param {character[]} s
 * @return {character[]}
 */
const reverseString = (s) => {
  const len = s.length
  const result = [...s]
  for (let i = 0; i < len / 2; i += 1) {
    const el = result[i]
    result[i] = result[len - i - 1]
    result[len - i - 1] = el
  }
  return result
}

export default reverseString
