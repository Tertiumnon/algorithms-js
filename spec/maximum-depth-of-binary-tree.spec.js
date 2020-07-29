const maxDepth = require('../leetcode/maximum-depth-of-binary-tree');

describe('leetcode maximum-depth-of-binary-tree', function () {
  it('case 1', function () {
    expect(3).toEqual(maxDepth({
      val: 3,
      left: { val: 9, left: null, right: null },
      right: {
        val: 20,
        left: { val: 15, left: null, right: null },
        right: { val: 7, left: null, right: null },
      },
    }));
  });

  it('case 2', function () {
    expect(0).toEqual(maxDepth(null));
  });

  it('case 3', function () {
    expect(2).toEqual(maxDepth({
      val: 3,
      left: { val: 9, left: null, right: null },
      right: {
        val: 20,
        left: null,
        right: null,
      },
    }));
  });
});
