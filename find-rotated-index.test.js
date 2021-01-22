const findRotatedIndex = require("./find-rotated-index")

describe("#findRotatedIndex", function(){
  it("returns the correct index", function () {
    expect(findRotatedIndex([3, 4, 1, 2], 4)).toBe(1)
    expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)).toBe(2)
    expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)).toBe(6)
    expect(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)).toBe(-1)
    expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)).toBe(-1)
  })
  it("returns the correct index II", function () {
    expect(findRotatedIndex([6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5], 3)).toBe(9)
    expect(findRotatedIndex([9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8], 10)).toBe(1)
  })
  it("returns the correct index III", function () {
    expect(findRotatedIndex([1, 2, 3, 4, 5], 1)).toBe(0)
    expect(findRotatedIndex([1, 2, 3, 4, 5], 2)).toBe(1)
    expect(findRotatedIndex([1, 2, 3, 4, 5], 3)).toBe(2)
    expect(findRotatedIndex([1, 2, 3, 4, 5], 4)).toBe(3)
    expect(findRotatedIndex([1, 2, 3, 4, 5], 5)).toBe(4)
    expect(findRotatedIndex([1, 2, 3, 4, 5], 0)).toBe(-1)
    expect(findRotatedIndex([1, 2, 3, 4, 5], 6)).toBe(-1)

    expect(findRotatedIndex([2, 3, 4, 5, 1], 1)).toBe(4)
    expect(findRotatedIndex([2, 3, 4, 5, 1], 2)).toBe(0)
    expect(findRotatedIndex([2, 3, 4, 5, 1], 3)).toBe(1)
    expect(findRotatedIndex([2, 3, 4, 5, 1], 4)).toBe(2)
    expect(findRotatedIndex([2, 3, 4, 5, 1], 5)).toBe(3)
    expect(findRotatedIndex([2, 3, 4, 5, 1], 0)).toBe(-1)
    expect(findRotatedIndex([2, 3, 4, 5, 1], 6)).toBe(-1)

    expect(findRotatedIndex([3, 4, 5, 1, 2], 1)).toBe(3)
    expect(findRotatedIndex([3, 4, 5, 1, 2], 2)).toBe(4)
    expect(findRotatedIndex([3, 4, 5, 1, 2], 3)).toBe(0)
    expect(findRotatedIndex([3, 4, 5, 1, 2], 4)).toBe(1)
    expect(findRotatedIndex([3, 4, 5, 1, 2], 5)).toBe(2)
    expect(findRotatedIndex([3, 4, 5, 1, 2], 0)).toBe(-1)
    expect(findRotatedIndex([3, 4, 5, 1, 2], 6)).toBe(-1)

    expect(findRotatedIndex([4, 5, 1, 2, 3], 1)).toBe(2)
    expect(findRotatedIndex([4, 5, 1, 2, 3], 2)).toBe(3)
    expect(findRotatedIndex([4, 5, 1, 2, 3], 3)).toBe(4)
    expect(findRotatedIndex([4, 5, 1, 2, 3], 4)).toBe(0)
    expect(findRotatedIndex([4, 5, 1, 2, 3], 5)).toBe(1)
    expect(findRotatedIndex([4, 5, 1, 2, 3], 0)).toBe(-1)
    expect(findRotatedIndex([4, 5, 1, 2, 3], 6)).toBe(-1)

    expect(findRotatedIndex([5, 1, 2, 3, 4], 1)).toBe(1)
    expect(findRotatedIndex([5, 1, 2, 3, 4], 2)).toBe(2)
    expect(findRotatedIndex([5, 1, 2, 3, 4], 3)).toBe(3)
    expect(findRotatedIndex([5, 1, 2, 3, 4], 4)).toBe(4)
    expect(findRotatedIndex([5, 1, 2, 3, 4], 5)).toBe(0)
    expect(findRotatedIndex([5, 1, 2, 3, 4], 0)).toBe(-1)
    expect(findRotatedIndex([5, 1, 2, 3, 4], 6)).toBe(-1)
  })
  it("returns the correct index IV", function () {
    expect(findRotatedIndex([1, 2, 3, 4], 1)).toBe(0)
    expect(findRotatedIndex([1, 2, 3, 4], 2)).toBe(1)
    expect(findRotatedIndex([1, 2, 3, 4], 3)).toBe(2)
    expect(findRotatedIndex([1, 2, 3, 4], 4)).toBe(3)
    expect(findRotatedIndex([1, 2, 3, 4], 0)).toBe(-1)
    expect(findRotatedIndex([1, 2, 3, 4], 5)).toBe(-1)

    expect(findRotatedIndex([2, 3, 4, 1], 1)).toBe(3)
    expect(findRotatedIndex([2, 3, 4, 1], 2)).toBe(0)
    expect(findRotatedIndex([2, 3, 4, 1], 3)).toBe(1)
    expect(findRotatedIndex([2, 3, 4, 1], 4)).toBe(2)
    expect(findRotatedIndex([2, 3, 4, 1], 0)).toBe(-1)
    expect(findRotatedIndex([2, 3, 4, 1], 5)).toBe(-1)

    expect(findRotatedIndex([3, 4, 1, 2], 1)).toBe(2)
    expect(findRotatedIndex([3, 4, 1, 2], 2)).toBe(3)
    expect(findRotatedIndex([3, 4, 1, 2], 3)).toBe(0)
    expect(findRotatedIndex([3, 4, 1, 2], 4)).toBe(1)
    expect(findRotatedIndex([3, 4, 1, 2], 0)).toBe(-1)
    expect(findRotatedIndex([3, 4, 1, 2], 5)).toBe(-1)

    expect(findRotatedIndex([4, 1, 2, 3], 1)).toBe(1)
    expect(findRotatedIndex([4, 1, 2, 3], 2)).toBe(2)
    expect(findRotatedIndex([4, 1, 2, 3], 3)).toBe(3)
    expect(findRotatedIndex([4, 1, 2, 3], 4)).toBe(0)
    expect(findRotatedIndex([4, 1, 2, 3], 0)).toBe(-1)
    expect(findRotatedIndex([4, 1, 2, 3], 5)).toBe(-1)
  })
})
