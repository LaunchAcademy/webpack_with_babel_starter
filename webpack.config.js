var webpack = require('webpack');

module.exports = {
  entry: {
    path: './src/main.js'
  },
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './build',
    inline: true,
    hot: true
  }
}
