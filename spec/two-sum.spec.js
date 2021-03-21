const fn = require('../leetcode/two-sum');

describe('testing twoSum', () => {
  it('case 1', () => {
    const expectedRes = [0, 1];
    const res = fn([2, 7, 11, 15], 9);
    expect(expectedRes).toEqual(res);
  });
});
