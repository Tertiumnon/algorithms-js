/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const len = nums.length;
  for (let i = 0; i < len; i += 1) {
    const item = nums[i];
    for (let j = len - 1; j > i; j -= 1) {
      const rItem = nums[j];
      if (item + rItem === target) {
        return [i, j];
      }
    }
  }
};

module.exports = twoSum;
