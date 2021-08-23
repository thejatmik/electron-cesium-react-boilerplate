const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopywebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');

module.exports = [
  new ForkTsCheckerWebpackPlugin(),
  new CopywebpackPlugin({
    patterns: [
      { from: './node_modules/cesium/Source/Workers', to: 'main_window/Workers' },
      { from: './node_modules/cesium/Source/Assets', to: 'main_window/Assets' },
      { from: './node_modules/cesium/Source/ThirdParty', to: 'main_window/ThirdParty' },
      { from: './node_modules/cesium/Source/Widgets', to: 'main_window/Widgets' },
      { from: './node_modules/cesium/Build/CesiumUnminified', to: 'main_window/cesium' },
    ],
  }),
  new HtmlWebpackTagsPlugin({
    append: false,
    tags: [
      'main_window/cesium/Cesium.js',
    ],
  }),
  new webpack.DefinePlugin({
    CESIUM_BASE_URL: JSON.stringify('/'),
  }),
];
