const join = (separator = ',') => arr =>
  arr.reduce(
    (acc, cur, index) =>
      index !== arr.length - 1 ? `${acc}${cur}${separator}` : `${acc}${cur}`,
    ''
  )

module.exports = join
