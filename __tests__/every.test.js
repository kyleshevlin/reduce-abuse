const every = require('../src/every')

describe('every', () => {
  it(
    `returns false if any item in the array passed
    to the predicate evaluates to false`,
    () => {
      const arr = [true, true, true, false, true]

      expect(every(Boolean)(arr)).toEqual(false)
    }
  )
})
