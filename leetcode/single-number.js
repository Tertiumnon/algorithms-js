/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  const res = new Set();
  nums.forEach((n) => {
    if (res.has(n)) {
      res.delete(n);
    } else {
      res.add(n);
    }
  });
  return res.values().next().value;
};

module.exports = singleNumber;
