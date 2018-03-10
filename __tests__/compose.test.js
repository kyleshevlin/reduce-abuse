const compose = require('../src/compose')

describe('compose', () => {
  it('should create a function composition that acheives the same result as the functions given to it', () => {
    const map = fn => arr => arr.map(fn)
    const split = str => str.split('')
    const toUpperCase = str => str.toUpperCase()
    const str = 'foo'
    const composition = compose(map(toUpperCase), split)

    expect(composition(str)).toEqual(map(toUpperCase)(split(str)))
  })
})
