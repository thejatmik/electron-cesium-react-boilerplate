/* eslint @typescript-eslint/no-var-requires: "off" */
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopywebpackPlugin = require('copy-webpack-plugin');

module.exports = [
  new ForkTsCheckerWebpackPlugin(),
  new CopywebpackPlugin({
    patterns: [
      { from: './node_modules/cesium/Build/Cesium/Workers', to: 'Workers' },
      { from: './node_modules/cesium/Build/Cesium/Assets', to: 'Assets' },
      { from: './node_modules/cesium/Build/Cesium/ThirdParty', to: 'ThirdParty' },
      { from: './node_modules/cesium/Build/Cesium/Widgets', to: 'Widgets' },
    ],
  }),
  new webpack.DefinePlugin({
    CESIUM_BASE_URL: JSON.stringify('../'),
  }),
];
