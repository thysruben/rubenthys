const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: [
        '@babel/polyfill',
        './src/index.js'
    ],
    output: {
        globalObject: 'this',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: 'html-loader'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.wasm', '.ts', '.tsx', '.mjs', '.cjs', '.js', '.json'],
        modules: ['node_modules', 'src']
    },
    devServer: {
        contentBase: './dist',
        port: 3000,
        hotOnly: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            path: path.resolve(__dirname, 'dist'),
            filename: 'index.html',
            inject: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}