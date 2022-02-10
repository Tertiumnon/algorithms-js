/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  const numsLen = nums.length;
  nums.sort();
  let prev = nums[0];
  for (let i = 1; i < numsLen; i += 1) {
    const item = nums[i];
    if (item === prev) {
      return true;
    }
    prev = item;
  }
  return false;
};

module.exports = containsDuplicate;
