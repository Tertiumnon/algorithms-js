const fn = require('../common/divisible-string');

describe('testing divisibleString', () => {
  it('case 1', () => {
    const expectedResult = -1;
    const result = fn('bcdbcdbcdbcdbcd', 'bcdbcd');
    expect(result).toEqual(expectedResult);
  });
  it('case 2', () => {
    const expectedResult = 3;
    const result = fn('bcdbcdbcdbcd', 'bcdbcd');
    expect(result).toEqual(expectedResult);
  });
  it('case 3', () => {
    const expectedResult = 2;
    const result = fn('abababababab', 'ab');
    expect(result).toEqual(expectedResult);
  });
  it('case 4', () => {
    const expectedResult = 2;
    const result = fn('abababababab', 'ab');
    expect(result).toEqual(expectedResult);
  });
});
