const fizzBuzz = require('./fizz-buzz');

describe('leetcode fizz-buzz', () => {
  it('case 1', () => {
    const expectedRes = [
      '1',
      '2',
      'Fizz',
      '4',
      'Buzz',
      'Fizz',
      '7',
      '8',
      'Fizz',
      'Buzz',
      '11',
      'Fizz',
      '13',
      '14',
      'FizzBuzz',
    ];
    const res = fizzBuzz(15);
    expect(expectedRes).toEqual(res);
  });
});
