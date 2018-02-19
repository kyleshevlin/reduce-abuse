const copyWithin = target => start => end => arr => {
  start = start || 0
  end = end || arr.length
  const copyLength = end - start
  let count = 0

  return arr.reduce((acc, cur, index) => {
    if (index < target || index > target + copyLength) {
      acc.push(cur)
    } else {
      acc.push(arr[start + count])
      count++
    }

    return acc
  }, [])
}

module.exports = copyWithin
