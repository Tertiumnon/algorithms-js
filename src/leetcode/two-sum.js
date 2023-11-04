/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target): number[] => {
  const len = numbers.length
  for (let i = 0; i < len; i += 1) {
    const item = numbers[i]
    for (let j = len - 1; j > i; j -= 1) {
      const rItem = numbers[j]
      if (item + rItem === target) {
        return [i, j]
      }
    }
  }
}

export default twoSum
