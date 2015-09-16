var webpack = require('webpack');

// Import components
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: [
        './app/index.js',
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass', 'postcss']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['eslint']
            },
            {
                test: /\.html$/,
                loader: 'html'
            }
        ]
    },
    eslint: {
        parser: 'babel-eslint'
    },
    postcss: function() {
        return [autoprefixer];
    }
};
