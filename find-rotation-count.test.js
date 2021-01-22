const findRotationCount = require("./find-rotation-count")

describe("#findRotationCount", function () {
  it("returns the number of rotations", function () {
    expect(findRotationCount([15, 18, 2, 3, 6, 12])).toBe(2)
    expect(findRotationCount([7, 9, 11, 12, 5])).toBe(4)
    expect(findRotationCount([7, 9, 11, 12, 15])).toBe(0)
  })
  it("returns the number of rotations II", function () {
    expect(findRotationCount([1, 2, 3, 4, 5])).toBe(0)
    expect(findRotationCount([5, 1, 2, 3, 4])).toBe(1)
    expect(findRotationCount([4, 5, 1, 2, 3])).toBe(2)
    expect(findRotationCount([3, 4, 5, 1, 2])).toBe(3)
    expect(findRotationCount([2, 3, 4, 5, 1])).toBe(4)

    expect(findRotationCount([1, 2, 3, 4])).toBe(0)
    expect(findRotationCount([4, 1, 2, 3])).toBe(1)
    expect(findRotationCount([3, 4, 1, 2])).toBe(2)
    expect(findRotationCount([2, 3, 4, 1])).toBe(3)
  })
})
