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
  const nums1Len = nums1.length;
  if (nums1Len === 1 && nums2[0]) {
    nums1[0] = nums2[0];
  } else {
    const nums2Len = nums2.length;
    let nums1I = nums1Len - 1 - n;
    let nums2I = nums2Len - 1;
    for (let i = 0; i < nums1Len; i += 1) {
      const nums1lastItem = nums1[nums1I - i];
      const nums2lastItem = nums2[nums2I - i];
      if (nums2lastItem === undefined) {
        break;
      }
      if (nums1lastItem === undefined) {
        if (i === nums1Len - 1) {
          nums1[0] = nums2[0];
          break;
        }
        nums2I += 1;
        continue;
      }
      if (nums1lastItem >= nums2lastItem) {
        nums1[nums1Len - 1 - i] = nums1lastItem;
        nums1[nums1I - i] = undefined;
        nums2I += 1;
      } else {
        nums1[nums1Len - 1 - i] = nums2lastItem;
        nums1I += 1;
      }
    }
  }
};

module.exports = merge;
