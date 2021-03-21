const fn = require('../leetcode/move-zeroes');

describe('testing moveZeroes', () => {
  it('case 1', () => {
    const res = [0, 1, 0, 3, 12];
    fn(res);
    expect([1, 3, 12, 0, 0]).toEqual(res);
  });

  it('case 2', () => {
    const res = [0, 0];
    fn(res);
    expect([0, 0]).toEqual(res);
  });

  it('case 3', () => {
    const res = [2, 1];
    fn(res);
    expect([2, 1]).toEqual(res);
  });
});
