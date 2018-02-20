const some = require('../src/some')

describe('some', () => {
  it('should return false if predicate is never true', () => {
    const arr = [1, 2, 3]
    const predicate = x => x > 3

    expect(some(predicate)(arr)).toEqual(false)
  })

  it('should return true if predicate is true even once', () => {
    const arr = [1, 2, 3]
    const predicate = x => x % 2 === 0

    expect(some(predicate)(arr)).toEqual(true)
  })
})
