const lastIndexOf = search => arr =>
  arr.reduceRight(
    (acc, cur, index) => (acc !== -1 ? acc : search === cur ? index : acc),
    -1
  )

module.exports = lastIndexOf
