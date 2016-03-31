var path = require('path');
var webpack = require('webpack');
var postcss = require('postcss');
var rucksack = require('rucksack-css');
var fontmagician = require('postcss-font-magician');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader!postcss-loader'
    }]
  },
  postcss: function() {
    return [
      rucksack({
        autoprefixer: true
      }),
      fontmagician
    ]
  }
};
