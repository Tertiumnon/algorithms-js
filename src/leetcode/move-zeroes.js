/* eslint-disable no-param-reassign */
/**
 * @param {number[]} numbers
 * @return {void} Do not return anything, modify numbers in-place instead.
 */
const moveZeroes = (numbers) => {
  const itemsLen = numbers.length
  for (let i = 0, n = 1; n < itemsLen; i += 1) {
    const item = numbers[i]
    if (item === 0) {
      let nItem = numbers[n]
      while (nItem === 0 && n < itemsLen) {
        n += 1
        nItem = numbers[n]
      }
      if (nItem) {
        numbers[i] = nItem
        numbers[n] = item
      }
    }
    n += 1
  }
}

export default moveZeroes
