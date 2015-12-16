// load the hot-reload-server module
const hotReloadServer = require('hot-reload-server')
const webpackConfig = require('./webpack.config')

// load dotenv
require('dotenv').load()

// create the server
const hrs = hotReloadServer(webpackConfig, {
  publicPath: '/dist'
})

// start the server
hrs.start()

// expose the public directory
hrs.app.use(hrs.express.static(__dirname + '/public'))
