const fn = require('../leetcode/plus-one');

describe('testing plusOne', () => {
  it('case 1', () => {
    const expectedRes = [1, 2, 4];
    const res = fn([1, 2, 3]);
    expect(expectedRes).toEqual(res);
  });
});
