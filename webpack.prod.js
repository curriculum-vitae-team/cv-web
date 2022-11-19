const { resolve } = require('path')
const { merge } = require('webpack-merge')
const CompressionPlugin = require('compression-webpack-plugin')
const { ESBuildMinifyPlugin } = require('esbuild-loader')
const config = require('./webpack.config')

module.exports = merge(config, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CompressionPlugin({
      algorithm: 'gzip'
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new ESBuildMinifyPlugin({
        target: 'es2015',
      })
    ]
  },
  output: {
    filename: '[name].[contenthash:8].js',
    chunkFilename: '[name].[contenthash:8].js',
    assetModuleFilename: 'assets/[hash][ext]',
    path: resolve(__dirname, './build'),
    publicPath: '/',
    clean: true
  }
})
