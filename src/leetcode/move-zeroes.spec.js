const fn = require('./move-zeroes');

describe('testing moveZeroes', () => {
  it('case 1', () => {
    const result = [0, 1, 0, 3, 12];
    fn(result);
    expect([1, 3, 12, 0, 0]).toEqual(result);
  });

  it('case 2', () => {
    const result = [0, 0];
    fn(result);
    expect([0, 0]).toEqual(result);
  });

  it('case 3', () => {
    const result = [2, 1];
    fn(result);
    expect([2, 1]).toEqual(result);
  });
});
