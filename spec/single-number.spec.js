const fn = require('../leetcode/single-number');

describe('testing', function () {
  it('case 1', function () {
    const nums = [2, 2, 1];
    expect(1).toEqual(fn(nums));
  });
  it('case 2', function () {
    const nums = [4, 1, 2, 1, 2];
    expect(4).toEqual(fn(nums));
  });
  it('case 3', function () {
    const nums = [1];
    expect(1).toEqual(fn(nums));
  });
});
