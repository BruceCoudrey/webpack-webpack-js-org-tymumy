const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

/** @type { import('webpack').Configuration } */
module.exports = {
  entry: {
    index: './src/index.js',
    main: './src/preEntry.js',
  },
  output: {
    filename: '[name].[contenthash:8].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /\/node_modules\//,
          chunks: 'initial',
          priority: -10,
          name: 'vendor',
        },
      },
    },
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: '[name].html',
      minify: false,
      chunks: ['index'],
    }),
  ],
};
