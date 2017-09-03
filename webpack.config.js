const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: __dirname,
  entry: {
    app: './client/app/index.js',
    vendor: [
      'react', 'react-dom',
      'redux', 'react-redux',
      'prop-types', 'whatwg-fetch',
      'redux-thunk'
    ]
  },
  output: {
    path: path.resolve('public'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  devtool: 'source-map',
  resolve: {
    modules: ['node_modules', 'client/app']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.[hash].js'
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.resolve('public'),
    hot: true,
    port: 3000
  }
}
