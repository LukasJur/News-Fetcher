let path = require('path');
let nodeExternals = require('webpack-node-externals');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

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
            test: /\.jsx?$/,
           include: /node_modules/,
            use: ['react-hot-loader/webpack'],
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
          test: /\.(png|jpg|gif)$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '/assets/images/',
              publicPath: '../src/client/assets/',
            },
          }],
        },
    ],
};
const client = {
  name: 'client',
  mode: 'development',
    entry: {
    //'webpack_dev_server': 'webpack-dev-server/client?http://localhost:8080',
    //'webpack_hot': 'webpack/hot/dev-server',
    'client': './src/client/index.js'
    },
    target: 'web',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/public')
    },
    resolve: {
      alias: {
        _components: path.resolve(__dirname, 'src/client/core/components'),
        images: path.resolve(__dirname, 'src/client/assets/images'),
        api: path.resolve(__dirname, 'src/client/core/api'),
        ducks: path.resolve(__dirname, 'src/client/core/state-management/ducks'),
        helpers: path.resolve(__dirname, 'src/client/core/helpers'),
      },
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    module: moduleObj,
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        new HtmlWebPackPlugin({
            template: 'src/client/index.html'
        }),
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: devMode ? '[name].css' : '[name].[hash].css',
          chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
        new CleanWebpackPlugin(['dist']),
    ],
  devServer:{
    hot: true,
    contentBase: './',
  }
};
const server = {
  devtool: 'eval-sourcemap',
  name: 'server',
  mode: 'development',
    entry: {
        index: [
          //'./node_modules/webpack-hot-middleware/client?path=/__webpack_hmr&name=server&timeout=20000',
          './src/server/index.js'
        ]
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

