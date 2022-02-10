const fn = require('./remove-chars');

describe('testing removeChars', () => {
  it('case 1', () => {
    const expectedResult = '';
    const result = fn('abc');
    expect(result).toEqual(expectedResult);
  });
});
