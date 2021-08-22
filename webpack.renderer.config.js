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

module.exports = {
  context: __dirname,
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    alias: {
      cesium: path.resolve(__dirname, './node_modules/cesium'),
    },
    fallback: {
      "path": require.resolve("path-browserify")
    }
  },
  node: {
    __dirname: true
  },
  output: {
    publicPath: '/',
  },
};
