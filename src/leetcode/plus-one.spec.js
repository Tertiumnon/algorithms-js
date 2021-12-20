const fn = require('./plus-one');

describe('testing plusOne', () => {
  it('case 1', () => {
    const expectedResult = [1, 2, 4];
    const result = fn([1, 2, 3]);
    expect(result).toEqual(expectedResult);
  });
});
