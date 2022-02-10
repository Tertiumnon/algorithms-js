/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  const result = new Set();
  nums.forEach((n) => {
    if (result.has(n)) {
      result.delete(n);
    } else {
      result.add(n);
    }
  });
  return result.values().next().value;
};

module.exports = singleNumber;
