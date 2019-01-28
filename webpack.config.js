let path = require('path');
let nodeExternals = require('webpack-node-externals');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';
const moduleObj = {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            },
        },
        {
            test: /\.css$/,
          use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  autoprefixer,
                ],
              },
            },
          ],
        },
        {
          test: /.(jpg|ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
              publicPath: '../assets/',
            },
          }],
        },
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
        }),
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: devMode ? '[name].css' : '[name].[hash].css',
          chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
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

