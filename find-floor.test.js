const findFloor = require("./find-floor")

describe("#findFloor", function(){
  it("returns the floor or -1", function () {
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 5)).toBe(2) // 2
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 20)).toBe(19) // 19
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 0)).toBe(-1) // -1
  })
  it("returns the floor or -1 II", function () {
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 9)).toBe(8) // 8
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 10)).toBe(10) // 10
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 11)).toBe(10) // 10

    expect(findFloor([1, 1, 3, 3, 5, 5, 7, 7, 9, 9], 0)).toBe(-1) // -1
    expect(findFloor([1, 1, 3, 3, 5, 5, 7, 7, 9, 9], 1)).toBe(1) // 1
    expect(findFloor([1, 1, 3, 3, 5, 5, 7, 7, 9, 9], 2)).toBe(1) // 1
    expect(findFloor([1, 1, 3, 3, 5, 5, 7, 7, 9, 9], 3)).toBe(3) // 3
    expect(findFloor([1, 1, 3, 3, 5, 5, 7, 7, 9, 9], 4)).toBe(3) // 3
    expect(findFloor([1, 1, 3, 3, 5, 5, 7, 7, 9, 9], 5)).toBe(5) // 5
    expect(findFloor([1, 1, 3, 3, 5, 5, 7, 7, 9, 9], 6)).toBe(5) // 5
    expect(findFloor([1, 1, 3, 3, 5, 5, 7, 7, 9, 9], 7)).toBe(7) // 7
    expect(findFloor([1, 1, 3, 3, 5, 5, 7, 7, 9, 9], 8)).toBe(7) // 7
    expect(findFloor([1, 1, 3, 3, 5, 5, 7, 7, 9, 9], 9)).toBe(9) // 9
    expect(findFloor([1, 1, 3, 3, 5, 5, 7, 7, 9, 9], 10)).toBe(9) // 9
  })
})
