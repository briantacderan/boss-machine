'use strict';

const webpack = require('webpack'); // eslint-disable-line no-unused-vars

module.exports = {
  mode: 'development',
  entry: './browser/index.js',
  output: {
    path: __dirname,
    filename: './public/js/bundle.js',
  },
  context: __dirname,
  devtool: 'source-map',
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /jsx?$/,
        exclude: [
          /node_modules[\\/]core-js/,
          /node_modules[\\/]webpack[\\/]buildin/,
          /(node_modules|bower_components)/,
          ///node_modules[\\/]bower_components/
        ]
      }
    ]
  },
  plugins:[
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
      BROWSER_SUPPORTS_HTML5: true,
      TWO: '1+1',
      'typeof window': JSON.stringify('object'),
      'process.env': {
        DOMAIN_NAME: JSON.stringify(process.env.DOMAIN_NAME)
      },
    })
  ]
};
