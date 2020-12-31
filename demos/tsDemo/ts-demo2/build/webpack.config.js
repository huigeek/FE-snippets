const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const prodConfig = require('./webpack.prod.config')
const devConfig = require('./webpack.dev.config')

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig

module.exports = merge(baseConfig, config)
