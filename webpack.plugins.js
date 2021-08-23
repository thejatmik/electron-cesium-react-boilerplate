const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopywebpackPlugin = require('copy-webpack-plugin');

module.exports = [
  new ForkTsCheckerWebpackPlugin(),
  new CopywebpackPlugin({
    patterns: [
      { from: './node_modules/cesium/Source/Workers', to: 'main_window/Workers' },
      { from: './node_modules/cesium/Source/Assets', to: 'main_window/Assets' },
      { from: './node_modules/cesium/Source/Core', to: 'main_window/Core' },
      { from: './node_modules/cesium/Source/DataSources', to: 'main_window/DataSources' },
      { from: './node_modules/cesium/Source/Renderer', to: 'main_window/Renderer' },
      { from: './node_modules/cesium/Source/Scene', to: 'main_window/Scene' },
      { from: './node_modules/cesium/Source/Shaders', to: 'main_window/Shaders' },
      { from: './node_modules/cesium/Source/ThirdParty', to: 'main_window/ThirdParty' },
      { from: './node_modules/cesium/Source/Widgets', to: 'main_window/Widgets' },
    ],
  }),
  new webpack.DefinePlugin({
    CESIUM_BASE_URL: JSON.stringify(''),
  }),
];
