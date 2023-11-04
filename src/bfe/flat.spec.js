const fn = require("./flat")

describe("testing flat", () => {
  it("case 1", () => {
    const expectedResult = [1, 2, 3, [4]]
    const result = fn([1, [2], [3, [4]]])
    expect(result).toEqual(expectedResult)
  })
})
