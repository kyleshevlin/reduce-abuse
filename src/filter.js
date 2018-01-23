const filter = cb => arr =>
  arr.reduce((acc, cur) => (cb(cur) ? [...acc, cur] : acc), [])

module.exports = filter
