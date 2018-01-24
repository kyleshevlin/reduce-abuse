const indexOf = value => arr =>
  arr.reduce((acc, cur, index) => {
    if (acc !== -1) {
      return acc
    }

    return value === cur ? index : acc
  }, -1)

module.exports = indexOf
