// Load dependencies
const express = require('express')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackCompiler = webpack(webpackConfig)

// Create the express app
const app = express()

// Attach webpack-dev-middleware and webpack-hot-middleware
app.use(webpackDevMiddleware(webpackCompiler, {
    noInfo: true,
    watchOptions: {
        aggregateTimeout: 1000,
        poll: 1000
    }
}))

app.use(webpackHotMiddleware(webpackCompiler))

// Create static directories
app.use(express.static(__dirname + '/public'))
app.use('/dist', express.static(__dirname + '/dist'))

// Set the address/port
const address = process.env.DOCKER_HOST || 'localhost'
const port = process.env.PORT || 4000

// Listen to the port
const server = app.listen(port, function(err, result) {
    if (err) {
        console.log(err);
    }
  console.log('Running on http://%s:%s', address, port)
})
