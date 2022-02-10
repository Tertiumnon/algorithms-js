/* eslint-disable no-param-reassign */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  const itemsLen = nums.length;
  for (let i = 0, n = 1; n < itemsLen; i += 1) {
    const item = nums[i];
    if (item === 0) {
      let nItem = nums[n];
      while (nItem === 0 && n < itemsLen) {
        n += 1;
        nItem = nums[n];
      }
      if (nItem) {
        nums[i] = nItem;
        nums[n] = item;
      }
    }
    n += 1;
  }
};

module.exports = moveZeroes;
