const path = require('path')
const webpack = require('webpack')
const webpackNodeExternals = require('webpack-node-externals')

module.exports = {
  entry: {
    'index': './index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  target: 'node',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  externals: [webpackNodeExternals()],
}
