/* eslint-disable no-continue */
/* eslint-disable no-param-reassign */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {
  if (nums2.length) {
    const numLen = m + n;
    const nums = [...nums1];
    for (let i = 0, q = 0, j = 0; i < numLen; i += 1) {
      const a = nums[q];
      const b = nums2[j];
      if (b === undefined || (q < m && a <= b)) {
        nums1[i] = a;
        q += 1;
      } else {
        nums1[i] = b;
        j += 1;
      }
    }
  }
};

module.exports = merge;
