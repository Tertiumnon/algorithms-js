import { assert } from "chai"

import { sortAsc } from "./sort-asc"

describe("testing sortAsc", () => {
  it("case 1", () => {
    assert.equal(sortAsc("fuzzBuzz"), "uuzzzzfB")
  })
})
