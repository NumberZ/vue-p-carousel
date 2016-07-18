var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  babel: {
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    })
  ]
}