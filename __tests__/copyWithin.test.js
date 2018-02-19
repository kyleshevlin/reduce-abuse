const copyWithin = require('../src/copyWithin')

describe('copyWithin', () => {
  it('should work with only target', () => {
    const arr = ['foo', 'bar', 'baz', 'quux']
    const expected = ['foo', 'bar', 'foo', 'bar']

    expect(copyWithin(2)()()(arr)).toEqual(expected)
  })

  it('should work with target and start', () => {
    const arr = ['foo', 'bar', 'baz', 'quux']
    const expected = ['foo', 'bar', 'bar', 'baz']

    expect(copyWithin(2)(1)()(arr)).toEqual(expected)
  })

  it('should work with target and end', () => {
    const arr = ['foo', 'bar', 'baz', 'quux']
    const expected = ['foo', 'foo', 'bar', 'baz']

    expect(copyWithin(1)()(2)(arr)).toEqual(expected)
  })
})