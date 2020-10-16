/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
  let i = 0;
  while (i < k) {
    const lastEl = nums.pop();
    nums.unshift(lastEl);
    i += 1;
  }
};

module.exports = rotate;
