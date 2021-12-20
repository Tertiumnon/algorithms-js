const fn = require('./reverse-integer');

describe('testing', function () {
  it('-123 => -321', function () {
    expect(-123).toEqual(fn(-321));
  });
  it('1534236469 => 0', function () {
    expect(0).toEqual(fn(1534236469));
  });
});
