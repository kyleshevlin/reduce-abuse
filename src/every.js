const every = predicate => arr =>
  arr.reduce((acc, cur) => (!acc ? acc : predicate(cur)), true)

module.exports = every
