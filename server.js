// ----- APP SERVER

// Load dependencies
var express = require('express');

// Create the express app
var app = express();

// Create static directories
app.use(express.static(__dirname + '/public'));
app.use('/dist', express.static(__dirname + '/dist'));

// Set the address/port
var port = process.env.PORT || 4000

// Listen to the port
var server = app.listen(port, function(err, result) {
    if (err) {
        console.log(err);
    }
  console.log('Running on port %s', port);
});

// ----- WEBPACK DEV SERVER

// Load the webpack, and the dev server
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    hot: true,
    historyApiFallback: true,
    proxy: {
        "*": "http://localhost:" + port
    }
}).listen(4001, 'localhost', function(err, result) {
    if (err) {
        console.log(err);
    }
    console.log('webpack-dev-server running on port %s', 4001);
});
