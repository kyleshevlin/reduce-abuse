const filter = predicate => arr =>
  arr.reduce((acc, cur) => (predicate(cur) ? [...acc, cur] : acc), [])

module.exports = filter
