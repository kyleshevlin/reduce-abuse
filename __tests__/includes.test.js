const includes = require('../src/includes')

describe('test', () => {
  it('should return true if the array includes the value passed', () => {
    const arr = [1, 2, 3]

    expect(includes(2)(arr)).toEqual(true)
    expect(includes(4)(arr)).toEqual(false)
  })
})
