const { merge } = require('webpack-merge')
const config = require('./webpack.config')

module.exports = merge(config, {
  mode: 'development',
  devtool: 'eval-source-map',
  optimization: {
    minimize: false
  },
  devServer: {
    port: process.env.PORT,
    hot: true,
    open: true,
    liveReload: true,
    historyApiFallback: true,
    client: {
      overlay: {
        errors: true,
        warnings: false
      }
    }
  },
  output: {
    publicPath: '/'
  }
})
