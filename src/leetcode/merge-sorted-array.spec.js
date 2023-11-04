const fn = require("./merge-sorted-array")

describe("test", () => {
  // it('case 1', () => {
  //   const numbers1 = [1, 2, 3, 0, 0, 0];
  //   const m = 3;
  //   const numbers2 = [2, 5, 6];
  //   const n = 3;
  //   fn(numbers1, m, numbers2, n);
  //   expect(numbers1).toEqual([1, 2, 2, 3, 5, 6]);
  // });

  // it('case 2', () => {
  //   const numbers1 = [1];
  //   const m = 1;
  //   const numbers2 = [];
  //   const n = 0;
  //   fn(numbers1, m, numbers2, n);
  //   expect(numbers1).toEqual([1]);
  // });

  // it('case 3', () => {
  //   const numbers1 = [2, 0];
  //   const m = 1;
  //   const numbers2 = [1];
  //   const n = 1;
  //   fn(numbers1, m, numbers2, n);
  //   expect(numbers1).toEqual([1, 2]);
  // });

  // it('case 4', () => {
  //   const numbers1 = [4, 5, 6, 0, 0, 0];
  //   const m = 3;
  //   const numbers2 = [1, 2, 3];
  //   const n = 3;
  //   fn(numbers1, m, numbers2, n);
  //   expect(numbers1).toEqual([1, 2, 3, 4, 5, 6]);
  // });

  it("case 5", () => {
    const numbers1 = [0, 0, 0, 0, 0]
    const m = 0
    const numbers2 = [1, 2, 3, 4, 5]
    const n = 5
    fn(numbers1, m, numbers2, n)
    expect(numbers1).toEqual([1, 2, 3, 4, 5])
  })
})
