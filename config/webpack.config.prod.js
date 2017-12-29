/**
 * webpack.config.prod.js
 * @fileOverview Webpack configuration file for production.
 */

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const DIST_FOLDER = path.join(__dirname, '../dist/public');
const SRC_FOLDER = path.join(__dirname, '../client');

const config = require('./webpack.config.base');

config.entry = {
  app: path.join(SRC_FOLDER, 'index.js'),
  vendor: [
    'react',
    'react-dom',
    'react-router',
    'react-router-dom',
    'redux',
    'redux-saga',
    'react-redux',
    'lodash',
    'moment',
  ],
};

config.output.path = DIST_FOLDER;

config.plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
    sourceMap: true,
  }),
  new HtmlWebpackPlugin({ // also generate an index.html
    filename: 'index.html',
    template: 'client/static/html/index.ejs',
  }),
  new webpack.HashedModuleIdsPlugin(),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'runtime',
  }),
];

module.exports = config;
