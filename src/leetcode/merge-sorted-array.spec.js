const fn = require('./merge-sorted-array');

describe('test', () => {
  // it('case 1', () => {
  //   const nums1 = [1, 2, 3, 0, 0, 0];
  //   const m = 3;
  //   const nums2 = [2, 5, 6];
  //   const n = 3;
  //   fn(nums1, m, nums2, n);
  //   expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
  // });

  // it('case 2', () => {
  //   const nums1 = [1];
  //   const m = 1;
  //   const nums2 = [];
  //   const n = 0;
  //   fn(nums1, m, nums2, n);
  //   expect(nums1).toEqual([1]);
  // });

  // it('case 3', () => {
  //   const nums1 = [2, 0];
  //   const m = 1;
  //   const nums2 = [1];
  //   const n = 1;
  //   fn(nums1, m, nums2, n);
  //   expect(nums1).toEqual([1, 2]);
  // });

  // it('case 4', () => {
  //   const nums1 = [4, 5, 6, 0, 0, 0];
  //   const m = 3;
  //   const nums2 = [1, 2, 3];
  //   const n = 3;
  //   fn(nums1, m, nums2, n);
  //   expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
  // });

  it('case 5', () => {
    const nums1 = [0, 0, 0, 0, 0];
    const m = 0;
    const nums2 = [1, 2, 3, 4, 5];
    const n = 5;
    fn(nums1, m, nums2, n);
    expect(nums1).toEqual([1, 2, 3, 4, 5]);
  });
});
