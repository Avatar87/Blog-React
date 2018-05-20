const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: { 
   main: ['./src/js/carousel.js', './src/js/Basket.js']
  },
  output: {
    path: path.resolve(__dirname, 'project1/js'),
    filename: 'bundle.js'
  },
  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, './src/packages'),
        ],
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
  plugins: [
    new ExtractTextPlugin('../css/style.css'),
    new CopyWebpackPlugin([{ from: 'src/images', to: '../images'},
      { from: 'src/packages', to: '../packages'}])
  ]
}