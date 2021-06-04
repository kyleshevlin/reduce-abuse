const nil = {}
const find = predicate => arr => {
  const result = arr.reduce((acc, cur) => {
    if (acc !== nil) {
      return acc
    }

    return predicate(cur) ? cur : acc
  }, nil)
  return result === nil ? undefined : result;
}

module.exports = find
