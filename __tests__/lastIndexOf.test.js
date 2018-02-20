const lastIndexOf = require('../src/lastIndexOf')

describe('lastIndexOf', () => {
  it('should return -1 if item is not found', () => {
    const arr = [1, 2, 3, 4, 5]

    expect(lastIndexOf(6)(arr)).toEqual(-1)
  })

  it('should return the last index of the search', () => {
    const arr = [1, 2, 3, 4, 3, 5]

    expect(lastIndexOf(3)(arr)).toEqual(4)
  })
})
