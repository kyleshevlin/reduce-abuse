const some = predicate => arr =>
  arr.reduce((acc, cur) => (acc ? acc : predicate(cur)), false)

module.exports = some
