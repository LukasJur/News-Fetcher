let path = require('path');
let nodeExternals = require('webpack-node-externals');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const moduleObj = {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            },
        }
    ],
};
const client = {
    mode: 'development',
    entry: {
        'client': './src/client/index.js'
    },
    target: 'web',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/public')
    },
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/client/core/components'),
        images: path.resolve(__dirname, 'src/client/core/assets/images'),
        api: path.resolve(__dirname, 'src/client/core/api'),
        ducks: path.resolve(__dirname, 'src/client/core/state-management/ducks'),
        helpers: path.resolve(__dirname, 'src/client/core/helpers'),
      },
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    module: moduleObj,
    plugins: [
        new HtmlWebPackPlugin({
            template: 'src/client/index.html'
        })
    ]
};
const server = {
    mode: 'development',
    entry: {
        'server': './src/server/index.js'
    },
    target: 'node',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: moduleObj,
    externals: [nodeExternals()]
};
module.exports = [client, server];

