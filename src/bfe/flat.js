/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
const flat = (arr, depth = 1) => {
  const result = []
  let realDepth = depth
  let arrLength = arr.length
  for (let i = 0; i < arrLength; i += 1) {
    const item = arr[i]
    if (item instanceof Array && realDepth > 0) {
      const itemLength = item.length
      for (let j = 0; j < itemLength; j += 1) {
        const jItem = item[j]
        if (j > 0) {
          i += 1
          arrLength += 1
        }
        result.push(jItem)
      }
    } else {
      result.push(item)
    }
  }
  realDepth -= 1
  return realDepth > 0 && result.some((item) => item instanceof Array)
    ? flat(result, realDepth)
    : result
}

export default flat
