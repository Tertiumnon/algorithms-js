const fn = require('./merge-sorted-array');

describe('test', () => {
  it('case 1', () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const m = 3;
    const nums2 = [2, 5, 6];
    const n = 3;
    fn(nums1, m, nums2, n);
    expect([1, 2, 2, 3, 5, 6]).toEqual(nums1);
  });

  it('case 2', () => {
    const nums1 = [1];
    const m = 1;
    const nums2 = [];
    const n = 0;
    fn(nums1, m, nums2, n);
    expect([1]).toEqual(nums1);
  });

  it('case 3', () => {
    const nums1 = [2, 0];
    const m = 1;
    const nums2 = [1];
    const n = 1;
    fn(nums1, m, nums2, n);
    expect([1, 2]).toEqual(nums1);
  });
});
