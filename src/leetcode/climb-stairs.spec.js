import climbStairs from "./climb-stairs"

describe("testing climbStairs", () => {
  it("case 1", () => {
    const res = climbStairs(2)
    expect(2).toEqual(res)
  })

  it("case 2", () => {
    const res = climbStairs(3)
    expect(3).toEqual(res)
  })
})
