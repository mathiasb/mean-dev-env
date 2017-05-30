var webpackMerge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist', 'js', 'app'),
    publicPath: 'http://localhost:8080/js/app',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),

    new HtmlWebpackPlugin({
      template: helpers.root('test', 'index.html'),
      filename: helpers.root('dist', 'index.html')
    })
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});
