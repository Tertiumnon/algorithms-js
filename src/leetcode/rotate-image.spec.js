const fn = require('./rotate-image');

describe('testing rotateImage', () => {
  it('case 1', () => {
    const expectedResult = [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ];
    const result = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    fn(result);
    expect(result).toEqual(expectedResult);
  });
  it('case 2', () => {
    const expectedResult = [
      [15, 13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7, 10, 11],
    ];
    const result = [
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16],
    ];
    fn(result);
    expect(result).toEqual(expectedResult);
  });
  it('case 3', () => {
    const expectedResult = [[1]];
    const result = [[1]];
    fn(result);
    expect(result).toEqual(expectedResult);
  });
  it('case 4', () => {
    const expectedResult = [
      [3, 1],
      [4, 2],
    ];
    const result = [
      [1, 2],
      [3, 4],
    ];
    fn(result);
    expect(result).toEqual(expectedResult);
  });
  it('case 5', () => {
    const expectedResult = [
      [21, 16, 11, 6, 1],
      [22, 17, 12, 7, 2],
      [23, 18, 13, 8, 3],
      [24, 19, 14, 9, 4],
      [25, 20, 15, 10, 5],
    ];
    const result = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ];
    fn(result);
    expect(result).toEqual(expectedResult);
  });
});
