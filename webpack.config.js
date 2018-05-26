const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: { 
    main: path.resolve(__dirname, 'blogsrc', 'index.jsx')
  },
  output: {
    path: path.resolve(__dirname, 'Blog'),
    filename: 'bundle.js'
  },
  
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'Blog'),
  },
  plugins: [
    new ExtractTextPlugin('css/style.css'),
    new CopyWebpackPlugin([{ from: 'blogsrc/images', to: 'images'}])
      //{ from: 'src/packages', to: '../packages'}])
  ]
}