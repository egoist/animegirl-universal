var path = require('path')
var vue = require('vue-loader')
var nib = require('nib')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var rm = require('rimraf')

rm.sync('./build')

module.exports = {
  entry: ['./src/main.js'],
  output: {
    path: path.resolve('./build'),
    filename: 'bundle.[hash].js',
    publicPath: '/build/'
  },
  resolve: {
    extensions: ['', '.js', '.vue']
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'] },
      {
        test: /\.vue$/,
        loader: vue.withLoaders({
          // apply babel transform to all javascript
          // inside *.vue files.
          js: 'babel?optional[]=runtime&stage=0',
          css: 'style!css!stylus'
        })
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '番娘',
      filename: '../index.html',
      template: './index.template.html'
    })
  ],
  stylus: {
    use: [nib()]
  }
}
