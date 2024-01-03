const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.wasm$/,
        type: 'javascript/auto',
        loader: 'file-loader'
      },
      {
        test: /\.data$/,
        use: 'file-loader',
      },
      {
        test: /\.zip$/,
        use: 'file-loader',
      },
    ],
  },
};