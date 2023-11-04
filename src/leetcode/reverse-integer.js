/**
 * @param {character[]} x
 * @return {character[]}
 */
const reverseInteger = (x) => {
  if (x < -2147483648 || x > 2147483647) {
    return 0
  }
  const result = [...String(x)]
  let m = ""
  if (result[0] === "-") {
    result.shift()
    m = "-"
  }
  const len = result.length
  for (let i = 0; i < len / 2; i += 1) {
    const el = result[i]
    result[i] = result[len - i - 1]
    result[len - i - 1] = el
  }
  if (m) {
    result.unshift(m)
  }
  const resN = Number(result.join(""))
  if (resN < -2147483648 || resN > 2147483647) {
    return 0
  }
  return resN
}

export default reverseInteger
