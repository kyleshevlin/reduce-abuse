const join = require('../src/join')

describe('join', () => {
  it('should default to commas', () => {
    const arr = ['foo', 'bar', 'baz']
    const expected = 'foo,bar,baz'

    expect(join()(arr)).toEqual(expected)
  })

  it('should apply the separator correctly', () => {
    const arr = ['foo', 'bar', 'baz']
    const expected = 'foo-bar-baz'

    expect(join('-')(arr)).toEqual(expected)
  })
})
