const fn = require('./two-sum');

describe('testing twoSum', () => {
  it('case 1', () => {
    const expectedResult = [0, 1];
    const result = fn([2, 7, 11, 15], 9);
    expect(result).toEqual(expectedResult);
  });
});
