const map = cb => arr =>
  arr.reduce((acc, cur) => [...acc, cb(cur)], [])

module.exports = map

