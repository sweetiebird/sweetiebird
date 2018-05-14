/**
 * webpack.config.js
 * @fileOverview Webpack configuration file for development.
 */

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const DIST_FOLDER = path.join(__dirname, 'public');
const SRC_FOLDER = path.join(__dirname, 'client');

const config = require('./webpack.config.base');

config.entry = [
  'react-hot-loader/patch',
  // activate HMR for React

  'webpack-dev-server/client?http://localhost:1337',
  // bundle the client for webpack-dev-server
  // and connect to the provided endpoint

  'webpack/hot/only-dev-server',
  // bundle the client for hot reloading
  // only- means to only hot reload for successful updates

  path.join(SRC_FOLDER, 'index.js'),
];

config.output.filename = 'dist/[name].[hash].js';

config.devServer = {
  proxy: {
    '/api': 'http://localhost:3000',
    '/users': 'http://localhost:3000'
  },
  contentBase: DIST_FOLDER,
  compress: true,
  port: 1337,
  hot: true,
  publicPath: '/',
  historyApiFallback: true,
};

config.plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('development'),
      PP_ENV: JSON.stringify('sandbox'),
      PP_CLIENT_LIVE: JSON.stringify('AbjgusokjrXEOP7_a-onPaAjmhgM647Azu5-9zxCzqBFkb-UNsB_xbjdQYaKxfMSLDhGpJZmrD5iYuMG'),
      PP_CLIENT_SANDBOX: JSON.stringify('Af9lKt1UI_oRIYUXG3UPR5fFbrLy-mvSnFsyuBaXAX48-Diu4HQS6jzMhSK4UqIrNPQb7SY7VsweodqX'),
    },
  }),
  new webpack.HotModuleReplacementPlugin(), // enable HMR globally
  new webpack.NamedModulesPlugin(),
  new HtmlWebpackPlugin({ // also generate an index.html
    filename: 'index.html',
    template: 'client/static/html/index.ejs',
  }),
];

config.devtool = 'source-map';

module.exports = config;
