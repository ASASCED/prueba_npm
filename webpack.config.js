const HtmlWebpackPlugin = require ('html-webpack-plugin');

module.exports = {
    entry: './src/test.js',
    output: {
        path: __dirname + '/test',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                {loader: 'style-loader'},
                {loader: 'css-loader'}
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};