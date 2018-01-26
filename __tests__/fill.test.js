const fill = require('../src/fill')

describe('fill', () => {
  it('should return undefined if no value is provided', () => {
    const arr = [1, 2, 3]

    expect(fill()(arr)).toEqual([undefined, undefined, undefined])
  })

  it('should fill the array with the supplied value', () => {
    const arr = [1, 2, 3]

    expect(fill(4)(arr)).toEqual([4, 4, 4])
  })
})