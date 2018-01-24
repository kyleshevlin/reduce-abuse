const find = predicate => arr =>
  arr.reduce((acc, cur) => {
    if (acc !== undefined) {
      return acc
    }

    return predicate(cur) ? cur : acc
  }, undefined)

module.exports = find
