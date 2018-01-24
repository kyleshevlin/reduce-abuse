const includes = value => arr =>
  arr.reduce((acc, cur) => (acc ? acc : value === cur), false)

module.exports = includes
