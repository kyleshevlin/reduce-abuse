const map = cb => arr =>
  arr.reduce((acc, cur) => [...acc, cb(cur)], [])

export default map

