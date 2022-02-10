const fn = require('./curry');

describe('testing curry', () => {
  it('case 1', () => {
    const expectedResult = '1_2_3';
    const result = fn(1, 2, 3);
    expect(result).toEqual(expectedResult);
  });

  it('case 2', () => {
    const expectedResult = '1_2_3';
    const result = fn(1)(2, 3);
    expect(result).toEqual(expectedResult);
  });

  it('case 3', () => {
    const expectedResult = '1_2_3';
    const result = fn(1, 2)(3);
    expect(result).toEqual(expectedResult);
  });
});
