const fn = require('./intersection-of-two-arrays2');

describe('testing intersectionOfTwoArrays2', () => {
  it('case 1', () => {
    const expectedResult = [2, 2];
    const result = fn([1, 2, 2, 1], [2, 2]);
    expect(result).toEqual(expectedResult);
  });
  it('case 2', () => {
    const expectedResult = [4, 9];
    const result = fn([4, 9, 5], [9, 4, 9, 8, 4]);
    expect(result).toEqual(expectedResult);
  });
  it('case 3', () => {
    const expectedResult = [1, 2];
    const result = fn([2, 1], [1, 2]);
    expect(result).toEqual(expectedResult);
  });
});
