module.exports = {
    entry: './app/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    }
};
