const fn = require('../leetcode/first-uniq-char');

describe('testing firstUniqChar', () => {
  it('case 1', () => {
    const expectedRes = 0;
    const res = fn('leetcode');
    expect(expectedRes).toEqual(res);
  });

  it('case 2', () => {
    const expectedRes = 2;
    const res = fn('loveleetcode');
    expect(expectedRes).toEqual(res);
  });

  it('case 3', () => {
    const expectedRes = -1;
    const res = fn('aabb');
    expect(expectedRes).toEqual(res);
  });
});
