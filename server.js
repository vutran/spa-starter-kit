// ----- APP SERVER

// Load dependencies
var express = require('express');

// Create the express app
var app = express();

// Create static directories
app.use(express.static(__dirname + '/public'));
app.use('/dist', express.static(__dirname + '/dist'));

// Set the address/port
var address = process.env.DOCKER_HOST || 'localhost';
var port = process.env.PORT || 4000

// Listen to the port
var server = app.listen(port, function(err, result) {
    if (err) {
        console.log(err);
    }
  console.log('Running on http://%s:%s', address, port);
});

// ----- WEBPACK DEV SERVER

// Load the webpack, and the dev server
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

// Retrieve the webpack dev port
var webpackDevPort = process.env.WEBPACK_DEV_PORT || 4001;

new WebpackDevServer(webpack(config), {
    quiet: true,
    hot: true,
    historyApiFallback: true,
    proxy: {
        "*": "http://localhost:" + port
    },
    watchOptions: {
        poll: 1000,
        aggregateTimeout: 1000
    }
}).listen(webpackDevPort, function(err, result) {
    if (err) {
        console.log(err);
    }
    console.log('webpack-dev-server running on http://%s:%s', address, webpackDevPort);
});
