const reverse = arr => arr.reduce((acc, cur) => [cur, ...acc], [])

module.exports = reverse
