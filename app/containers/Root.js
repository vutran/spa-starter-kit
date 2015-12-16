// Loads the production/development Root container
// based on the NODE_ENV var

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Root.prod')
} else {
  module.exports = require('./Root.dev')
}
