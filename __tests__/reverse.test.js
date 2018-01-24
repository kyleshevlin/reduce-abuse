const reverse = require('../src/reverse')

describe('reverse', () => {
  it('should return a new array in reverse', () => {
    const arr = [1, 2, 3, 4, 5]

    expect(reverse(arr)).toEqual([5, 4, 3, 2, 1])
  })
})
