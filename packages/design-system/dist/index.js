
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./ds.cjs.production.min.js')
} else {
  module.exports = require('./ds.cjs.development.js')
}
