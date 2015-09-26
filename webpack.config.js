// Import components
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var postCssLocalScope = require('postcss-local-scope');
var path = require('path');

module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, '/app/index.js'),
    ],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    devtool: "source-map",
    module: {
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
                loaders: ['style', 'css', 'sass', 'postcss']
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
    },
    eslint: {
        parser: 'babel-eslint'
    },
    postcss: function() {
        return [autoprefixer, postCssLocalScope];
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
