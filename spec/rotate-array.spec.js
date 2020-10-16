const fn = require('../leetcode/rotate-array');

describe('testing', function () {
  it('case 1', function () {
    const nums = [1, 2, 3, 4, 5, 6, 7];
    fn(nums, 3);
    expect([5, 6, 7, 1, 2, 3, 4]).toEqual(nums);
  });
});
