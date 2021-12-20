const fn = require('./reverse-string');

describe('testing', function () {
  it('case 1', function () {
    expect(['o', 'l', 'l', 'e', 'h']).toEqual(fn(['h', 'e', 'l', 'l', 'o']));
  });
});
