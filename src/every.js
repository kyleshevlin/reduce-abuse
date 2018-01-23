const every = predicate => arr =>
  arr.reduce((acc, cur) => (!acc ? acc : predicate(acc)), true)

module.exports = every
