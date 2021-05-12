const fn = require('../leetcode/intersection-of-two-arrays2');

describe('testing intersectionOfTwoArrays2', () => {
  it('case 1', () => {
    const expectedRes = [2, 2];
    const res = fn([1, 2, 2, 1], [2, 2]);
    expect(expectedRes).toEqual(res);
  });
  it('case 2', () => {
    const expectedRes = [4, 9];
    const res = fn([4, 9, 5], [9, 4, 9, 8, 4]);
    expect(expectedRes).toEqual(res);
  });
  it('case 3', () => {
    const expectedRes = [1, 2];
    const res = fn([2, 1], [1, 2]);
    expect(expectedRes).toEqual(res);
  });
});
