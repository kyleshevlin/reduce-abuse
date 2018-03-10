const compose = require('./src/compose')
const concat = require('./src/concat')
const copyWithin = require('./src/copyWithin')
const every = require('./src/every')
const fill = require('./src/fill')
const filter = require('./src/filter')
const find = require('./src/find')
const flatten = require('./src/flatten')
const includes = require('./src/includes')
const indexOf = require('./src/indexOf')
const join = require('./src/join')
const lastIndexOf = require('./src/lastIndexOf')
const map = require('./src/map')
const pipe = require('./src/pipe')
const reverse = require('./src/reverse')
const some = require('./src/some')

module.exports = {
  compose,
  concat,
  copyWithin,
  every,
  fill,
  filter,
  find,
  flatten,
  includes,
  indexOf,
  join,
  lastIndexOf,
  map,
  pipe,
  reverse,
  smooth: flatten,
  some
}
