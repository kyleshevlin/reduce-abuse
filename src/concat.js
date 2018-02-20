const concat = arr1 => arr2 => {
  const totalLength = arr1.length + arr2.length

  return Array(totalLength)
    .fill()
    .reduce((acc, cur, index) => {
      if (index < arr1.length) {
        acc.push(arr1[index])
      } else {
        acc.push(arr2[index - arr1.length])
      }

      return acc
    }, [])
}

module.exports = concat
