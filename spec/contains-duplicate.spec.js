const fn = require('../leetcode/contains-duplicate');

describe('testing containsDuplicate', () => {
  it('case 1', () => {
    const expectedRes = true;
    const res = fn([1, 2, 3, 1]);
    expect(expectedRes).toEqual(res);
  });
});

describe('testing containsDuplicate', () => {
  it('case 2', () => {
    const expectedRes = false;
    const res = fn([3, 1]);
    expect(expectedRes).toEqual(res);
  });
});
