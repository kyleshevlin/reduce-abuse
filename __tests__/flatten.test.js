const flatten = require('../src/flatten')

describe('flatten', () => {
  it('should return an array flattened one level', () => {
    const arr = [1, [2, 3], 4, [5, [6]]]
    const expected = [1, 2, 3, 4, 5, [6]]

    expect(flatten(arr)).toEqual(expected)
  })
})
