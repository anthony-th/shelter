const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    index: './src/assets/js/index.js',
    pets: './src/assets/js/pets.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/pets.html',
      filename: 'pets.html',
      chunks: ['pets']
    }),
    new FaviconsWebpackPlugin({
      logo: './src/assets/img/favicon.png',
      mode: 'webapp',
      devMode: 'webapp', 
      prefix: 'assets/',
      favicons: {
        icons: {
          android: false,
          appleIcon: false,
          appleStartup: false,
          coast: false,
          firefox: false,
          windows: false,
          yandex: false,
          favicons: true
        }
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name].style.css'
    }),
    new CleanWebpackPlugin(),
  ]
};
