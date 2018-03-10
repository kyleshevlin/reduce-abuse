const compose = (...fns) => x => fns.reduceRight((acc, cur) => cur(acc), x)

module.exports = compose
