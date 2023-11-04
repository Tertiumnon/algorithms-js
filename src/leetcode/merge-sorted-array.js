/* eslint-disable no-continue */
/* eslint-disable no-param-reassign */
/**
 * @param {number[]} numbers1
 * @param {number} m
 * @param {number[]} numbers2
 * @param {number} n
 * @return {void} Do not return anything, modify numbers1 in-place instead.
 */
const merge = (numbers1, m, numbers2, n) => {
  const numbers1Len = numbers1.length
  if (numbers1Len === 1 && numbers2[0]) {
    numbers1[0] = numbers2[0]
  } else {
    const numbers2Len = numbers2.length
    let numbers1I = numbers1Len - 1 - n
    let numbers2I = numbers2Len - 1
    for (let i = 0; i < numbers1Len; i += 1) {
      const numbers1lastItem = numbers1[numbers1I - i]
      const numbers2lastItem = numbers2[numbers2I - i]
      if (numbers2lastItem === undefined) {
        break
      }
      if (numbers1lastItem === undefined) {
        if (i === numbers1Len - 1) {
          numbers1[0] = numbers2[0]
          break
        }
        numbers2I += 1
        continue
      }
      if (numbers1lastItem >= numbers2lastItem) {
        numbers1[numbers1Len - 1 - i] = numbers1lastItem
        numbers1[numbers1I - i] = numbers2[numbers2Len - numbers2I + 1]
        numbers2I += 1
      } else {
        numbers1[numbers1Len - 1 - i] = numbers2lastItem
        numbers1I += 1
      }
    }
  }
}

export default merge
