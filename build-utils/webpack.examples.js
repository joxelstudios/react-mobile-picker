const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, '..', 'examples', 'dist'),
    },
    hot: true,
  },
  devtool: 'eval-source-map',
  entry: [
    path.join(__dirname, '..', 'examples', 'index.js')
  ],
  output: {
    path: path.join(__dirname, '..', 'examples', '/__build__/'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      'react-mobile-picker': path.join(__dirname, '..', 'src')
    },
  },
 
};