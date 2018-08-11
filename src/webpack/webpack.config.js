const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './index.js',
  mode: 'development',
  output: {
    path: path.join(__dirname, '../../public/webpack'),
    filename: 'bundle.js'
  },
  plugins: [
    new CopyWebpackPlugin([
      'index.html'
    ])
  ]
};
