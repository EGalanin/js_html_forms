const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const config = require('./webpack.config');

module.exports = merge(config, {
  mode: 'production',
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
});
