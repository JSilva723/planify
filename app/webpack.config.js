require('dotenv').config()
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Dotenv = require('dotenv-webpack')

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {

    mode: process.env.NODE_ENV,
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        plugins: [
            new TsconfigPathsPlugin({
                configFile: path.resolve(__dirname, 'tsconfig.json')
            }),
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        }),
        new CleanWebpackPlugin(),
        new Dotenv({ path: path.resolve(__dirname, '.env')}),
    ].concat(devMode ? [] : [new MiniCssExtractPlugin()]),
    devServer: !devMode ? false : {
        static: './dist',
        port: 3000,
        historyApiFallback: true
    },
    performance: devMode ? false : {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
}

