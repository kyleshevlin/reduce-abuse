const flatten = arr =>
  arr.reduce((acc, cur) => [...acc, ...(Array.isArray(cur) ? cur : [cur])], [])

module.exports = flatten
