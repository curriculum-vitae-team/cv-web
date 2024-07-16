const { resolve } = require('path')
const { merge } = require('webpack-merge')
const { DefinePlugin } = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')
const { EsbuildPlugin } = require('esbuild-loader')
const config = require('./webpack.config')

module.exports = merge(config, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new DefinePlugin({
      'globalThis.__DEV__': false
    }),
    new CopyPlugin({
      patterns: [
        { from: 'public/translations', to: 'translations' },
        { from: 'public/robots.txt', to: 'robots.txt' }
      ]
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new EsbuildPlugin({
        target: 'es2015',
        legalComments: 'external'
      })
    ]
  },
  output: {
    filename: '[name].[contenthash:8].js',
    chunkFilename: '[name].[contenthash:8].js',
    assetModuleFilename: 'assets/[hash][ext]',
    path: resolve(__dirname, '../dist'),
    publicPath: '/',
    clean: true
  }
})
