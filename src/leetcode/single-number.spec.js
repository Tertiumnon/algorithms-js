const fn = require("./single-number")

describe("testing", function () {
  it("case 1", function () {
    const numbers = [2, 2, 1]
    expect(1).toEqual(fn(numbers))
  })
  it("case 2", function () {
    const numbers = [4, 1, 2, 1, 2]
    expect(4).toEqual(fn(numbers))
  })
  it("case 3", function () {
    const numbers = [1]
    expect(1).toEqual(fn(numbers))
  })
})
