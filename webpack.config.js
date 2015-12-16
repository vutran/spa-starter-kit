// Import components
const webpack = require('webpack')
const path = require('path')

// load dotenv
require('dotenv').load()

// Create empty config
const config = {}

config.entry = []

if (process.env.NODE_ENV === 'development') {
  config.devtool = 'source-map'
  config.hotReloadServer = {
    address: 'dockerhost',
    port: 4000
  }
  config.entry.push('webpack-hot-middleware/client')
}

config.entry.push(path.join(__dirname, '/app/index.js'))

config.output = {
  publicPath: '/dist',
  path: path.join(__dirname, '/dist'),
  filename: 'bundle.js'
}

config.module = {
  loaders: [
    {
      test: /\.(ttf|eot|woff)(\?.*)?$/,
      loaders: ['url']
    },
    {
      test: /\.svg(\?.*)?$/,
      loaders: ['url', 'svgo']
    },
    {
      test: /\.scss$/,
      loaders: ['style', 'css?modules', 'postcss', 'sass']
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel']
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['eslint']
    },
    {
      test: /\.html$/,
      loader: 'html'
    },
    {
      test: /\.json$/,
      loader: 'json'
    }
  ]
}

config.eslint = {
  parser: 'babel-eslint'
}

config.postcss = function() {
  return [
    require('autoprefixer')
  ];
}

config.plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
]

module.exports = config
