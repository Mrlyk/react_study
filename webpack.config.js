const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: './main.js'
  },
  devServer: {
    host: 'localhost',
    port: '7777',
    hot: true,
    quiet: true,
    overlay: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html'
    }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['App run http://localhost:7777']
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.js/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  }
}
