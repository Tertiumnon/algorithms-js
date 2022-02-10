const fn = require('./first-uniq-char');

describe('testing firstUniqChar', () => {
  it('case 1', () => {
    const expectedResult = 0;
    const result = fn('leetcode');
    expect(result).toEqual(expectedResult);
  });

  it('case 2', () => {
    const expectedResult = 2;
    const result = fn('loveleetcode');
    expect(result).toEqual(expectedResult);
  });

  it('case 3', () => {
    const expectedResult = -1;
    const result = fn('aabb');
    expect(result).toEqual(expectedResult);
  });
});
