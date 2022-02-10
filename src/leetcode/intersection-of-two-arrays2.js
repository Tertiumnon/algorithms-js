/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
  const nums1Len = nums1.length;
  const nums2Len = nums2.length;
  const usedY = [];
  const nums1Link = nums1Len < nums2Len ? nums1 : nums2;
  const nums2Link = nums1Len < nums2Len ? nums2 : nums1;
  const nums1LinkLen = nums1Link.length;
  const nums2LinkLen = nums2Link.length;
  for (let i = 0; i < nums1LinkLen; i += 1) {
    for (let y = 0; y < nums2LinkLen; y += 1) {
      if (nums1Link[i] === nums2Link[y] && !usedY.includes(y)) {
        usedY.push(y);
        break;
      }
    }
  }
  return usedY.map((y) => nums2Link[y]);
};

module.exports = intersect;
