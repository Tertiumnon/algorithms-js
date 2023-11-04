const fn = require("./contains-duplicate")

describe("testing containsDuplicate", () => {
  it("case 1", () => {
    const expectedResult = true
    const result = fn([1, 2, 3, 1])
    expect(result).toEqual(expectedResult)
  })
})

describe("testing containsDuplicate", () => {
  it("case 2", () => {
    const expectedResult = false
    const result = fn([3, 1])
    expect(result).toEqual(expectedResult)
  })
})
