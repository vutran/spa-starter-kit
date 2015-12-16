// Loads the production/development store
// based on the NODE_ENV var

if (process.env.NODE_ENV === 'production') {
	module.exports = require('./prod')
} else {
	module.exports = require('./dev')
}
