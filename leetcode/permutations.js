/*
Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/

// const changeOrder = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     const newArr = changeOrder(arr.slice(0));
//     res = [...newArr];
//   }
//   return
// };

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) => {
  let res = [];
  if (nums.length === 1) {
    return [nums];
  }
  const left = nums[0];
  const right = permute(nums.slice(1));
  for (let i = 0; i < right.length; i += 1) {
    const rightLeft = right[i];
    for (let j = 0; j <= rightLeft.length; j += 1) {
      const pre = rightLeft.slice(0, j);
      const suf = rightLeft.slice(j);
      res.push(pre.concat([left], suf))
    }
  }
  return res;
};

console.log(permute([1, 2, 3]));
// console.log(permute([1, 2]));
// console.log(permute([1]));
