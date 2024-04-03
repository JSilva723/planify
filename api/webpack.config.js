require('dotenv').config()
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const config = {
    mode: 'production',
    target: 'node',
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts']
    },
    externals: [nodeExternals({ modulesDir: '../node_modules' })],
    plugins: [new CleanWebpackPlugin()],
}

if (process.env.NODE_ENV === 'development') {
    config['mode'] = 'development'
    config['devtool'] = 'inline-source-map'
}

module.exports = config