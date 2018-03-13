const path = require('path');
const webpack = require('webpack');

const LIBRARY_NAME = 'model-decorator';

const config = {
  entry: {
    [LIBRARY_NAME]: path.join(__dirname, '../src/index.js'),
  },
  output: {
    path: path.join(__dirname, '../lib/minify'),
    filename: `${LIBRARY_NAME}.min.js`,
    library: LIBRARY_NAME,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        query: {
          cacheDirectory: true,
        },
      },
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      comments: false,
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
    })
  ]
};

module.exports = config;
