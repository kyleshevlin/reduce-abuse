const indexOf = require('../src/indexOf')

describe('indexOf', () => {
  it('should return the index of the first item that matches the value provided', () => {
    const arr = [1, 2, 3, 4, 2]

    expect(indexOf(2)(arr)).toEqual(1)
  })

  it('should return -1 if the value is not found', () => {
    const arr = [1, 2, 3, 4, 5]

    expect(indexOf(6)(arr)).toEqual(-1)
  })
})
