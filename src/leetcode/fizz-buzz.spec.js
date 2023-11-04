const fizzBuzz = require("./fizz-buzz")

describe("leetcode fizz-buzz", () => {
  it("case 1", () => {
    const expectedResult = [
      "1",
      "2",
      "Fizz",
      "4",
      "Buzz",
      "Fizz",
      "7",
      "8",
      "Fizz",
      "Buzz",
      "11",
      "Fizz",
      "13",
      "14",
      "FizzBuzz"
    ]
    const result = fizzBuzz(15)
    expect(result).toEqual(expectedResult)
  })
})
