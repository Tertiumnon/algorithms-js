const fn = require("./valid-palindrome")

describe("testing", function () {
  it("case 1", function () {
    const arg = "A man, a plan, a canal: Panama"
    expect(true).toEqual(fn(arg))
  })
})
