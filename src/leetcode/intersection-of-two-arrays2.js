/**
 * @param {number[]} numbers1
 * @param {number[]} numbers2
 * @return {number[]}
 */
const intersect = (numbers1, numbers2) => {
  const numbers1Len = numbers1.length
  const numbers2Len = numbers2.length
  const usedY = []
  const numbers1Link = numbers1Len < numbers2Len ? numbers1 : numbers2
  const numbers2Link = numbers1Len < numbers2Len ? numbers2 : numbers1
  const numbers1LinkLen = numbers1Link.length
  const numbers2LinkLen = numbers2Link.length
  for (let i = 0; i < numbers1LinkLen; i += 1) {
    for (let y = 0; y < numbers2LinkLen; y += 1) {
      if (numbers1Link[i] === numbers2Link[y] && !usedY.includes(y)) {
        usedY.push(y)
        break
      }
    }
  }
  return usedY.map((y) => numbers2Link[y])
}

export default intersect
