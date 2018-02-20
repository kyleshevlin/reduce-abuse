const concat = require('../src/concat')

describe('concat', () => {
  it('should return a concatenated array', () => {
    const arr1 = [1, 2, 3]
    const arr2 = [4, 5, 6]
    const expected = [1, 2, 3, 4, 5, 6]

    expect(concat(arr1)(arr2)).toEqual(expected)
  })

  it('should not matter if arrays are the same length', () => {
    const arr1 = [1]
    const arr2 = [2, 3, 4, 5, 6]
    const expected = [1, 2, 3, 4, 5, 6]

    expect(concat(arr1)(arr2)).toEqual(expected)
  })
})
