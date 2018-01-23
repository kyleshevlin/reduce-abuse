const map = require('../src/map')

describe('map', () => {
  it('returns array of the same length', () => {
    const arr = [1, 2, 3]

    expect(map(x => x)(arr).length).toEqual(arr.length)
  })
})
