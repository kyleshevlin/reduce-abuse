const find = require('../src/find')

describe('find', () => {
  it('should return the first value that satisfies the predicate', () => {
    const arr = [1, 3, 5, 8, 10]
    const predicate = x => x % 2 === 0

    expect(find(predicate)(arr)).toEqual(8)
  })

  it('should return undefined if the predicate is unsatisfied', () => {
    const arr = [1, 3, 5, 7, 9]
    const predicate = x => x % 2 === 0

    expect(find(predicate)(arr)).toEqual(undefined)
  })
})