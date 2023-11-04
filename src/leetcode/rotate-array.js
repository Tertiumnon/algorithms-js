/**
 * @param {number[]} numbers
 * @param {number} k
 * @return {void} Do not return anything, modify numbers in-place instead.
 */
const rotate = (numbers, k): void => {
  let i = 0
  while (i < k) {
    const lastEl = numbers.pop()
    numbers.unshift(lastEl)
    i += 1
  }
}

export default rotate
