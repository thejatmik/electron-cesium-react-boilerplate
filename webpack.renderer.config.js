/* eslint @typescript-eslint/no-var-requires: "off" */
const path = require('path');
const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

rules.push({
  test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/,
  use: 'url-loader',
});

rules.push({
  test: /\.js$/,
  enforce: 'pre',
  include: path.resolve(__dirname, './node_modules/cesium/Build/CesiumUnminified'),
  sideEffects: false,
  use: [
    {
      loader: 'strip-pragma-loader',
      options: {
        pragmas: {
          debug: false,
        },
      },
    },
  ],
});

module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    alias: {
      cesium: path.resolve(__dirname, './node_modules/cesium'),
    },
  },
};
