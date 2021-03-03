const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");



module.exports = {
  mode: 'production',
  entry: {
    'index': [
      path.resolve(__dirname, 'src/index.js')
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './dist/',
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CopyPlugin({
      patterns: [
        { from: "manifest.json", to: "." },
        { from: "icons/*", to: "." },
      ],
    })
  ],

  module: {
    rules: []
  },
}