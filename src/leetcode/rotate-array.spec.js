const fn = require("./rotate-array")

describe("testing", function () {
  it("case 1", function () {
    const numbers = [1, 2, 3, 4, 5, 6, 7]
    fn(numbers, 3)
    expect([5, 6, 7, 1, 2, 3, 4]).toEqual(numbers)
  })
})
