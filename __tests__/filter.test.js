const filter = require('../src/filter')

describe('filter', () => {
  it('filters values based on predicate', () => {
    const arr = [true, false, false, true, false]

    expect(filter(Boolean)(arr).length).toEqual(2)
  })
})
