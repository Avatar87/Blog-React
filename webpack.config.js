const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: { 
    main: path.resolve(__dirname, 'blogsrc', 'index.jsx')
  },
  output: {
    path: path.resolve(__dirname, 'Blog'),
    filename: 'bundle.[chunkhash].js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, 'blogsrc', 'components'),
      containers: path.resolve(__dirname, 'blogsrc', 'containers'),
      actions: path.resolve(__dirname, 'blogsrc', 'actions'),
      reducers: path.resolve(__dirname, 'blogsrc', 'reducers'),
    }
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
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'Blog'),
    historyApiFallback: true,
  },
  plugins: [
    new ExtractTextPlugin('css/style.[chunkhash].css'),
    new CopyWebpackPlugin([{ from: 'blogsrc/images', to: 'images'}]),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'blogsrc', 'index.html'),
      filename: 'index.html'
    })
  ]
} 