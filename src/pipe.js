const pipe = (...fns) => x => fns.reduce((acc, cur) => cur(acc), x)

module.exports = pipe
