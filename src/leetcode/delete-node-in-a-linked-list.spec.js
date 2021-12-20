const fn = require('./delete-node-in-a-linked-list');

describe('leetcode deleteNode', function () {
  it('case 1', function () {
    expect({
      val: 1,
      next: { val: 9, next: null },
    }).toEqual(fn({
      val: 5,
      next: { val: 1, next: { val: 9, next: null } },
    }));
  });
});
